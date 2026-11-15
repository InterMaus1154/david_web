<?php

// Booking reference check: write the two functions below. index.php (provided)
// calls them when the form is submitted and shows the result line.

// Returns the reference as it should be checked and displayed: in upper case.
function normaliseReference(string $value): string
{
    return $value;
}

// Returns true when the (normalised) reference is valid.
function isValidReference(string $reference): bool
{
    return false;
}
