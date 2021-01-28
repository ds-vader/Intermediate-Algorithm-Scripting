/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
  /*
  changer - is a function for change arg before to arg after
  before input must be a regular expression 
  */
  function changer(before, after){
    str = str.replace(before, after);
  }

  /*
  convert characters to their corresponding HTML entities
  */
   changer(/\&/g, "&amp;");
   changer(/\</g, "&lt;");
   changer(/\>/g, "&gt;");
   changer(/\"/g, "&quot;");
   changer(/\'/g, "&apos;");
   return str;
}
convertHTML("Dolce & Gabbana");
