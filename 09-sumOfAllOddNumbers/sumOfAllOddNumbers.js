function sumOfAllOddNumbers(nums) {
    
    var count = 0;
    
    for(var x = 0; x < nums.length; x++) {
    
      if ((nums[x] % 2) !== 0) {
          
          count++;
          
      }
    
  }
    
    return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
