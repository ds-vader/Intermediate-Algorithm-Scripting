/*
Flatten a nested array. You must account for varying levels of nesting.

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/
  
function steamrollArray(arr) {
    var res = [];

    //loop for get all elements from array
    for(var i = 0; i < arr.length; i++) {

        //if some element is nested array
        if(Array.isArray(arr[i])) {

            //come deeper in array by recursion
            res = res.concat(steamrollArray(arr[i]));
        } else {
            //add value to result
            res.push(arr[i]);
        }
    }
    return res;
}
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  console.log(steamrollArray([1, {}, [3, [[4]]]])); 