/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    return arr1
    .filter(x => !arr2.includes(x)) // filter array to get unique valuess
    .concat(arr2.filter(x => !arr1.includes(x))); //same, but for second array
  }
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
