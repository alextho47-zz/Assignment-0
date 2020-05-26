function countOfAllBooleans(arr) {
  
    var count = 0;
    
    for(var x = 0; x < arr.length; x++) {
    
      if ((typeof arr[x] === 'boolean') && (arr[x] !== null)) {
          
          count++;
          
      }
    
  }
    
    return count;
    
}

// Do not edit this line;
module.exports = countOfAllBooleans;
