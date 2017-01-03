function checkPermutation (s1,s2){
  if(s1.length!==s2.length){
    return false;
  }
  for(var i =0; i<s1.length; i++){
    var index = s2.indexOf(s1[i]);
    if(index>-1){
      s2.replace(s1[i],"");
    }else{
      return false;
    }
  }
  return true;
}
