function countOfAllNumbersSmallerThanTarget(nums, target) {
    
  var count = 0;
    
    for(var x = 0; x < nums.length; x++) {
    
      if (nums[x] < target) {
          
          count++;
          
      }
    
  }
    
    return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
