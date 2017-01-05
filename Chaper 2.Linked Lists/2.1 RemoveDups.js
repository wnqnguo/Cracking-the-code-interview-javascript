function Node(value){
  this.next = null;
  this.value = value;
}
function LinkedList(){
  this.head = null;
  this.length = 0;
}
LinkedList.prototype.add = function(value){
  var node = new Node(value);
  curr = this.head;
  if(!curr){
    this.head = node;
    return node;
  }
  while(curr.next){
    curr = curr.next;
  }
  curr.next = node;
  return node;
}
function removeDups(list){
  var obj = {}
  var curr = list.head;
  var prev = null;
  while(curr){
    if(obj.hasOwnProperty(curr.value)){
      prev.next = curr.next;
    }else{
      obj[curr.value] = true;
       prev = curr;
    }
    curr = curr.next;
  }

}
var test = new LinkedList()
test.add(3);
test.add(4);
test.add(5);
test.add(3);
removeDups(test);
console.dir("test is "+test);
