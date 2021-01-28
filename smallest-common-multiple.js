/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
    // find max and min in input array
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);

    // create range between min and max
    var rangeOfNumbers = [];
    for (let i = min; i <=max; i++) {
        rangeOfNumbers.push(i);
        }

    // realize greatest common divisor (using Euclideans algorithm) 
    const gcd = (min, max) => min ? gcd(max % min, min) : max;
    // realize least common multiple
    const lcm = (min, max) => min * max / gcd(min, max);
    
    //Then use reduce on given array of integers:
    return rangeOfNumbers.reduce(lcm); 
  }
  
  console.log(smallestCommons([1,5]));
