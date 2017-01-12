function findPath (curr_row, curr_col, row, col, points){
  if(curr_row == row && curr_col == col){
    return points.push([row,col]);
  }
  if(curr_row==0&&curr_col==0){
    points.add(0,0);
  }
  if(isValid(curr_row,curr_col+1)){
    return findPath(curr_row, curr_col+1, row, col, points.push([curr_row,curr_col+1]));
  }
  if(isValid(curr_row+1,curr_col)){
    return findPath(curr_row+1, curr_col, row, col, points.push([curr_row+1,curr_col]));
  }
}
