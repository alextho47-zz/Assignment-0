function frequencyCounter(word) {
    
  var freq = {};
    
    for (var x = 0; x < word.length; x++) {
        
        var character = word.charAt(x);
        
        if (freq[character]) {
            
           freq[character]++;
            
        } else {
            
           freq[character] = 1;
            
        }
        
    }

    return freq;
    
}

// Do not edit this line;
module.exports = frequencyCounter;
