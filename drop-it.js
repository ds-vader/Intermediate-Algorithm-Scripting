/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    //variable for check output value from input func
    var status;

    //if no one value return true - output is []
    if(!arr.some(func)){
        return [];
    }

    //loop for iterate through input arr
    for (let i = 0; i < arr.length; i++) {
        status = func(arr[i]);

        //first true
        if(status == true){
            //output slice arr from index of true value to end of array
            return arr.slice(arr.indexOf(arr[i]), arr.length);
        }
    }
  }
  
    dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); 
    dropElements([0, 1, 0, 1], function(n) {return n === 1;});
    dropElements([1, 2, 3], function(n) {return n > 0;}); 
    dropElements([1, 2, 3, 4], function(n) {return n > 5;}); 
    dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}); 
    dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}); 