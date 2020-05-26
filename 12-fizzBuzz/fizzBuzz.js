function fizzBuzz(start, end) {
    
    var nums = [];
    
    for(var x = start; x <= end; x++) {
    
      if (((x % 5) == 0) && !((x % 3) == 0)) { //Multiple of 5 only "Buzz"
          
          nums.push("Buzz");
          
      } else if (((x % 3) == 0) && !((x % 5) == 0)) { //Multiple of 3 only "Fizz"
          
          nums.push("Fizz");
          
      } else if (((x % 3) == 0) && ((x % 5) == 0)) { //Multiple of 3 AND 5 "FizzBuzz"
          
          nums.push("FizzBuzz");
          
      } else { //Neither, use original number
          
          nums.push(x);
          
      }
    
  }
    
    return nums;
    
}

// Do not edit this line;
module.exports = fizzBuzz;
