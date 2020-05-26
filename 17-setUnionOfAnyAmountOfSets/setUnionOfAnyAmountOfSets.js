function setUnionOfAnyAmountOfSets(...args) {
  
    return args.reduce((previous, current) => {
      
    let union = new Set(previous)    
    for(let elem of current) {
        union.add(elem)
    }
        
    return union;
      
  });
    
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
