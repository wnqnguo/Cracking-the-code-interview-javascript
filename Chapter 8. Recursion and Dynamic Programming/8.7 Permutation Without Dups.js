function permutation (str){
  var result = [];
  if(str.length == 1){
    return str;
  }
  for(var i =0; i< str.length; i++){
    var curr = str[i];
    console.log("curr is "+curr);
    var more = str.slice(0,i)+str.slice(i+1,str.length);
    console.log("the rest is "+ more);
    var temp = permutation(more);
   for(var j =0; j<temp.length; j++){
     result.push([curr+temp[j]]);
   }

  }
  return result;
}

permutation('1234');
