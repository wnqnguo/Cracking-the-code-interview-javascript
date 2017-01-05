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
//iterative approch
function sum (list1, list2){
  var h1 = list1.head;
  var h2 = list2.head;
  var result = new LinkedList();
  var curr = "";
  var carry = 0;
  while(h1||h2){
    if(h1&&h2){
      curr = h1.value + h2.value+carry;
    }else if(h1){
      curr = h1.value;
    }else{
      curr = h2.value;
    }
    if(curr >=10){
      carry = 1;
      curr = curr-10
    }else{
      carry = 0;
    }
    result.add(curr);
    h1=h1.next;
    h2=h2.next;
  }
  if(carry>0){
    result.add(carry);
  }
  return result;
}
//recursive approch
function sumRecurse (head1, head2, carry){

  if(head1 == null && head2 == null && carry == 0){
    return null;
  }
  var curr = carry || 0;
  if(head1){
    curr += head1.value;
  }
  if(head2){
    curr += head2.value;
  }
  var result = new Node(curr%10);
  if(head1 || head2){
    var next = sumRecurse(head1.next?head1.next : null,
                          head2.next?head2.next : null,
                          curr >= 10 ? 1 : 0 );
    result.next = next ;
  }
  return result;

}
var list1 = new LinkedList();
var list2 = new LinkedList();
list1.add(7);
list1.add(1);
list1.add(6);
list2.add(5);
list2.add(9);
list2.add(2);
var result = sum(list1, list2);
var result2 = sumRecurse(list1.head, list2.head);
