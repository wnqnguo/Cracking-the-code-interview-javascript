function isUnique (str){
  var temp = [];
  if(str.length>128){
    return false;
  }
  for(var i =0; i<str.length; i++){
    if(temp[str.charCodeAt(i)]){
      return false;
    }else{
      temp[str.charCodeAt(i)]=string[i];
    }
  }
  return true;
}
