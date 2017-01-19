function subSets (arr,index){
 var result;
  if(index == arr.length){
    console.log("index is "+index);
    return [[]];
  }else{
    result = subSets(arr, index+1);
    var curr = arr[index];
    var curr_subset = [];
    for(var i =0; i<result.length; i++){
      var temp = result[i].concat(curr);
      curr_subset.push(temp);
    }
    result = result.concat(curr_subset);
  }
  return result;
}
subSets([1,2,3],0);
