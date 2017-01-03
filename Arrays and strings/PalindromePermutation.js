function palidromePermutation (str){
  var str = str.replace(/ /g,"");
  var count =0;
  var obj ={};
  for(var i =0; i<str.length; i++){
    if(obj.hasOwnProperty(str[i].toLowerCase())){
      obj[str[i].toLowerCase()]++;
    }else{
      obj[str[i].toLowerCase()] =1;
    }
  }
  for (var key in obj){
    if(obj[key]%2!==0){
      count++;
    }
    if(count>1){
      return false;
    }
  }
  return true;
}
