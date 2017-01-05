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
function kthToLast (list, num){
   var p1 = list.head;
   var p2 = list.head;
   var count = num;
   while(count>0){
     count--;
     p1=p1.next;
   }
   while(p1){
     p1=p1.next;
     p2=p2.next;
   }
   return p2;
}
var test = new LinkedList()
test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);
var node = kthToLast(test,2);
