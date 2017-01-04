function zeroMatrix (matrix){
  var rowHaszero = false;
  var colHaszero = false;
  // check if first row has zero
  for(var i = 0 ; i < matrix[0].length ; i++){
    if(matrix[0][i] == 0){
      rowHaszero = true;
      break;
    }
  }
  // check if first col has zero
  for(var i = 0 ; i < matrix.length ; i++){
    if(matrix[i][0] == 0){
      colHaszero = true;
      break;
    }
  }
  //find the zero spots and record them in the first row and column
  for(var i = 1 ; i < matrix.length; i++){
    for(var j = 1 ; j < matrix[i].length ; j++){
      if(matrix[i][j] == 0){
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  for(var i = 0 ; i<matrix[0].length ; i++){
    if(matrix[0][i] == 0){
      nullifyColumn(matrix, i);
    }
  }

  for(var i =0 ; i<matrix.length ; i++){
    if(matrix[i][0] == 0){
      nullifyColumn(matrix, i);
    }
  }
  if(rowHaszero){
    nullifyRow(matrix,0);
  }
  if(colHaszero){
    nullifyColumn(matrix,0);
  }
}

function nullifyRow(matrix, row){
  for(var i = 0 ; i < matrix[row].length ; i++){
    matrix[row][i] = 0;
  }
}
function nullifyColumn(matrix,col){
  for(var i = 0 ; i < matrix.length ; i++){
    matrix[i][col] = 0;
  }
}
