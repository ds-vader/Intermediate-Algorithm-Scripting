/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  let reg = /^[^aeiou]+/g; // begin by consonant letter 
  
  //first letter is consonant
  if(reg.test(str)){
    return str.replace(str.match(reg),"") + str.match(reg) +"ay" ; // take the first consonant or consonant cluster, move it to the end of the word, and add "ay"
  }else{//or first letter is vowel 
    return str +"way"; //add "way" at the end.
  }
  
}

translatePigLatin("consonant");
