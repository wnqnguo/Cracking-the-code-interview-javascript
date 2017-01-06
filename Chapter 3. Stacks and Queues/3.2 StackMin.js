function Stack(){
  this.min = Infinity;
  this.length =0;
  this.values = [];
  this.mins = [];
}
Stack.prototype.push = function(value){
  this.length++;
  this.values.push(value);
  if(value<this.min){
    this.min = value;
    this.mins.push(value);
  }
}
Stack.prototype.pop = function(){
  this.length--;
  var value = this.values.pop();
  if(value<=this.min){
    this.mins.pop();
    this.min = this.mins[this.mins.length -1 ];
  }
}
Stack.prototype.getMin = function(){
  return this.min;
}
var test = new Stack();
test.push(10);
test.push(10);
console.log(test.getMin());
test.push(9);
console.log(test.getMin());
test.push(8);
console.log(test.getMin());
test.pop()
console.log(test.getMin());
