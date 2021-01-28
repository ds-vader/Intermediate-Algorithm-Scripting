/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

function destroyer(arr) {
  let intersection = arr.filter(x => Array.from(arguments).includes(x)); // get intersection between input array(arr) and array from input arguments
  return arr
    .filter(x => !intersection.includes(x)) // filter array to get unique valuess
    .concat(intersection.filter(x => !arr.includes(x))); //same, but for second array
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
