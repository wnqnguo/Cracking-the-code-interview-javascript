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
function isPalindrome(list){
  var curr = list.head;
  var prev = null;
  while(curr){

    var curr_copy = new Node (curr.value);
    curr_copy.next = prev;
    prev = curr_copy ;
    curr = curr.next;
  }
  var head = list.head;
  while(prev && head){
    if(prev.value!=head.value){
      return false;
    }
    prev = prev.next;
    head = head.next;
  }
  return prev == null && head ==null;
}

var test = new LinkedList();
test.add(0);
test.add(1);
test.add(2);
test.add(1);
test.add(0);
isPalindrome(test);
