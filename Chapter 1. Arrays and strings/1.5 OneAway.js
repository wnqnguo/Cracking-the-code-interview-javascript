function oneWay(s1,s2){
  if(s1.length===s2.length){
    return checkReplace(s1,s2);
  }
  if(Math.abs(s1.length-s2.length)==1){
    if(s1.length>s2.length){
      return checkOneaway(s1,s2);
    }else{
      return checkOneaway(s2,s1);
    }
  }
  return false;
}
function checkReplace(s1,s2){
  var count = 0;
  for(var i =0; i<s1.length; i++){
    if(s1[i]!=s2[i]){
      count++;
    }
    if(count>1){
      return false;
    }
  }
  return count<=1;
}
function checkInsert(long,short){
  var l =0;
  var s =0;
  while(l<long.length&&s<short.length){
    if(long[l]!=short[s]){
      if(l!=s){
       return false;
      }
      console.log("l is "+l);
      l++;
    }else{
      l++;
      s++;
    }
  }
  return true;
}
