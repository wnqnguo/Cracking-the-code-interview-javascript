function rotateMatrix (matrix){
  reverseArray(matrix);
  for(var i =0; i < matrix.length; i++){
    reverseArray(matrix[i]);
  }
}
function reverseArray (arr){
  var start = 0;
  var end = arr.length -1;
  while(start < end){
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
