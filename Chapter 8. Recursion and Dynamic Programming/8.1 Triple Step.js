//non memoization way
function tripleStep(n){
  if(n<0){
    return 0;
  }else if (n == 0){
    return 1
  }else{
    return tripleStep(n-3) + tripleStep(n-2) + tripleStep(n-1);
  }
}
//menoization way
function tripleStep(n, memo){
  if(n<0){
    return 0;
  }else if (n == 0){
    return 1;
  }else{
    if(memo[n]){
      return memo[n];
    }
    else{
      memo[n]=tripleStep(n-3, memo)+tripleStep(n-2,memo)+tripleStep(n-1,memo);
      return meno[n];
    }
  }
}
