function URLify(str, num){
  var str = str.substring(0,num);
  return str.replace(/ /g,"%20");
}
function URLify(str, num){
  var str = str.substring(0,num);
  for(var i =str.length-1;i>0;i--){
    if(str[i]===" "){
      str = str.slice(0,i)+"%20"+str.slice(i+1);
    }
  }
  return str;
}
