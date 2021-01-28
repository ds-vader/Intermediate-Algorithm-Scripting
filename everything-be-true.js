/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {

  //result array
  let result = [];

  //loop to check every element(object in this case) of input array collection
  for (let i = 0; i < collection.length; i++) {
    /*
    check if the element has a truthy value or not
    if is truthy -> push true to result array
    */
    if (collection[i][pre]) {
      result.push(true)
    }
  }

  //if every element is good result and collection length must be same
  //else return false
  return result.length === collection.length;
}

console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));