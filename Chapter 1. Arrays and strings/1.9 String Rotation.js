function stringRotation(s1,s2){
  if(s1.length == s2.length){
    //using built in includes as the isSubstring method
    return (s1+s1).includes(s2);
  }
  return false;
}
