function multiply (num1, num2){
  var result = 0;
  if(num2==0){
    return 0;
  }
  return num1+multiply(num1,num2-1);
}
