/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, 
then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  
  //get all keys and values in differente variables
  let sourceKeys = Object.keys(source);
  let sourceValues = Object.values(source);

  for (let i = 0; i < collection.length; i++) {
    //same: let checker = (arr, target) => target.every(v => arr.includes(v));
    if((sourceKeys.every(k => Object.keys(collection[i]).includes(k))) && //check if input collection have source key
    (sourceValues.every(v => Object.values(collection[i]).includes(v)))){ //check if input collection have source values in same time
      arr.push(collection[i]); // input correct value in array
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
