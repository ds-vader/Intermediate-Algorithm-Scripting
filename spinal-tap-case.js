/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
 // use regular expression is mean split by space or _ or UpperCase letter
 // than join by "-"
 // and parse all to lowerCase
  return  str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
