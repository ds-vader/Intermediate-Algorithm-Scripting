/*
Intermediate Algorithm Scripting: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

// my solution
function sumAll(arr) {
    let first, second, sum = 0;
	//compare input to return correct begin and and of range
    if(arr[0]<arr[1]){
        first = arr[0];
        second = arr[1];
    }else{
        first = arr[1];
        second = arr[0];
    }

	//calculate sum of range
    for(let i = first; i<=second; i++){
        sum += i;
    }
    return sum;
  }

  // // better (not my)
  // function sumAll(arr) {
  //   var max = Math.max(arr[0], arr[1]);
  //   var min = Math.min(arr[0], arr[1]);
  //   var temp = 0;
  //   for (var i = min; i <= max; i++) {
  //     temp += i;
  //   }
  //   return temp;
  // }
  
  console.log(sumAll([1, 4]));