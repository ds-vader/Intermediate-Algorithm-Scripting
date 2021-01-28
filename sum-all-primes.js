/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
    
    var rangeOfNumbers = [];

    //create range of numbers between 2 and input num
    // loop begin from 2, cuz 1 is not prime (has one positive divisor (1 itself))
    for (let i = 2; i <=num; i++) {
        rangeOfNumbers.push(i);
        
    }

    
    return rangeOfNumbers.filter(x => {// filter rangeOfNumbers array and return only prime numbers
        for(let j = 2; j < x; j++)
          if(x % j === 0) return false;
        return x > 1;
      }) 
      // sum of correct (prime) numbers
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}
  console.log(sumPrimes(10));