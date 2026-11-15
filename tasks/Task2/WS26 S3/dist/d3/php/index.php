<?php
// Booking reference check: the form handling and the page. Provided file,
// don't change it: write your code in solution.php.

require __DIR__ . '/solution.php';

$reference = null;
$valid = false;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $reference = normaliseReference((string) ($_POST['reference'] ?? ''));
    $valid = isValidReference($reference);
}
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3 - Booking Reference Check</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body>
    <header>
      <h1>D3 - Booking Reference Check</h1>
    </header>

    <main>
      <form id="check-form" class="card" method="post" novalidate>
        <label for="reference">Booking reference</label>
        <div class="row">
          <input id="reference" name="reference" type="text" maxlength="6" autocomplete="off" placeholder="e.g. AB2CD9" value="<?= htmlspecialchars($reference ?? '') ?>" />
          <button type="submit">Check</button>
        </div>
        <?php if ($reference !== null): ?>
          <?php if ($valid): ?>
            <p id="result" class="result ok">Valid reference: <?= htmlspecialchars($reference) ?></p>
          <?php else: ?>
            <p id="result" class="result bad">Invalid reference</p>
          <?php endif; ?>
        <?php else: ?>
          <p id="result" class="result"></p>
        <?php endif; ?>
      </form>
    </main>
    <!--Do not modify any code after this line-->
    <footer id="dynamicFooter"></footer>
    <script>
      document.getElementById('dynamicFooter').innerHTML =
        '&copy; ' +
        new Date().getFullYear() +
        ' WorldSkills | All rights reserved.';
    </script>
  </body>
</html>
