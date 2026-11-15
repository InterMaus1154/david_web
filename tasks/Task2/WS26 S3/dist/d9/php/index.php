<?php

// Connection finder: routing, JSON output and the flight data. Provided file,
// don't change it: write your code in solution.php. GET api/journeys?from=STR&to=BCN
// returns the journeys findJourneys() finds.
//
// Run locally: php -S localhost:8080 index.php   (then open http://localhost:8080/)
// On the server the provided .htaccess sends api/journeys to this file.

function respond(int $status, array $payload): void
{
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($payload, JSON_PRETTY_PRINT);
    exit;
}

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?? '/';

if (!preg_match('#/api/journeys/?$#', $path)) {
    // Not the API: let the web server deliver the page and its assets.
    if (php_sapi_name() === 'cli-server') {
        if ($path === '/' || $path === '/index.html') {
            header('Content-Type: text/html; charset=utf-8');
            readfile(__DIR__ . '/index.html');
            exit;
        }
        return false;
    }
    respond(404, ['error' => 'not found']);
}

$data = json_decode(file_get_contents(__DIR__ . '/data/flights.json'), true);
$flights = $data['flights']; // each: ['flight' => 'SW 702', 'from' => 'STR', 'to' => 'BCN', 'dep' => '07:10', 'arr' => '09:25', 'fare' => 139]
$from = strtoupper(trim((string) ($_GET['from'] ?? '')));
$to = strtoupper(trim((string) ($_GET['to'] ?? '')));
if (!isset($data['airports'][$from], $data['airports'][$to])) {
    respond(422, ['error' => 'from and to must be airport codes from the data']);
}

require __DIR__ . '/solution.php';

respond(200, findJourneys($flights, $from, $to));
