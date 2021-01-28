/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  //initialization all variables
  var count = num, a = 1, b = 0, temp, result = [];

  //realize fibinacci number algorithm
  while (count >= 0){

    temp = a;
    a = a + b;
    b = temp;
    
    if(b%2==1 && b <= num){//but in this moment add to result only odd values less than num
      result.push(b);
    }
    count--;
  
  }

  //return sum of all values in result array
  return result.reduce((accumulator, currentValue) => accumulator + currentValue);
}

sumFibs(4);
