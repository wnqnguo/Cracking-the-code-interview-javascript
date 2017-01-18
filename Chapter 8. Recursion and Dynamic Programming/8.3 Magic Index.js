function magicIndex (arr){
  index = Math.floor(arr.length/2);
  if(arr.length==1 && arr[index]!==index){
    return false;
  }
  if(arr[index]==index){
    return index;
  }
  if(arr[index]<index){
    return magicIndex(arr.slice(index));
  }else{
    return magicIndex(arr.slice(0,index));
  }
}
