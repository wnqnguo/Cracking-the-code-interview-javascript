function stringCompression (str){
  if(str.length<=1){
    return str;
  }
  var count = 1;
  var compressed = "";
  var result = "";
  var prev;
  for(var i = 1 ; i < str.length ; i++){
    prev = str[i-1];
    var curr = str[i];
    if(prev !== curr){
      compressed = compressed + prev + count;
      count = 1;
    }else{
      count++;
    }
  }
  compressed = compressed + prev + count;
 return str.length < compressed.length ? str : compressed;
}
stringCompression("aabcccccaaa");
