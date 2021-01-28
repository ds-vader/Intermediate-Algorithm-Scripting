/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/
//bad solution(but my)
function addTogether(first, second) {

  //check first is number?
  if (typeof first !== "number") {
    return undefined;
  }

  //check second is number?
  if (typeof second == "number") {
    return first + second;
  }

  /*
    if second is undefined (mean another call)
    if another call is number
    return new function sum both
  */
  if (typeof second == "undefined") {
    return function (y) {
      if (typeof y == "number") {
        return first + y;
      }
    }
  } else {
    return undefined;
  }
}

console.log(addTogether(2)([3]));