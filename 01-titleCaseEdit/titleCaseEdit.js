function titleCaseEdit(title) {
  
  var str_array = title.split(' ');
  
  var new_str_array = [];
    
  for(var x = 0; x < str_array.length; x++){
    
      new_str_array.push(str_array[x].charAt(0).toUpperCase()+str_array[x].slice(1));
    
  }
  
  return new_str_array.join(' ');
  
}

// Do not edit this line;
module.exports = titleCaseEdit;
