/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


*/

function pairElement(str) {
  //finish array
  let resultArr = [];

  //loop for all elements in input String str
  for (let i = 0; i < str.length; i++) {
    //take every element
    let char = str.split("")[i];

    //check if letter is G, C, A or T. Add new array(letter and correct pair) to resultArr
    char == "G" ? resultArr.push(new Array(char, "C")) : 
    char == "C" ? resultArr.push(new Array(char, "G")) : 
    char == "A" ? resultArr.push(new Array(char, "T")) : 
    char == "T" ? resultArr.push(new Array(char, "A")) : console.log("unknown input"); 
  }

  //return array by array of correct DNA pair
  return resultArr;
}

pairElement("GCG");
