function countOfAllIndexMatchingNumbers(nums) {
  var count = 0;
    
    for(var x = 0; x < nums.length; x++) {
    
      if (nums[x] === x) {
          
          count++;
          
      }
    
  }
    
    return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
