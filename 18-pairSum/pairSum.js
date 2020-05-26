function pairSum(nums, target) {
    
    if(nums.length <= 1) {
        
        throw "Error";
        
    }
  
    var target_reached = false;
    
    for(var x = 0; x < nums.length; x++) { //Compare the sum of every number in array to target
    
      for(var z = 0; z < nums.length; z++) {
        
          if (nums[x] + nums[z] === target) { 
           
              target_reached = true;
              
          }
          
      } //End nested loop
    
  } //End main loop
    
    return target_reached;
    
}

// Do not edit this line;
module.exports = pairSum;
