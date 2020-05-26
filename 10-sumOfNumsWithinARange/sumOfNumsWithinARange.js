function sumOfNumsWithinARange(nums, start, end) {
    
    var count = 0;
    
    for(var x = 0; x < nums.length; x++) {
    
      if ((nums[x] >= start) && (nums[x] <= end)) {
          
          count++;
          
      }
    
  }
    
    return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
