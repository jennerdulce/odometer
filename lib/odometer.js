const LinkedList = require('./ll.js')
const Node = require('./node.js')

module.exports = function odometer(LL) {
  let node = LL.head;
  
  let walk = node => {
    if (!node.next){
      // Increase last node by 1
      node.value++
    } else {
      node.value += walk(node.next)
    }
    if(node.value === 10){
      node.value = 0
      return 1
    } else {
      return 0
    }
  }
  node.value += walk(node.next)

  // Check the head
  if(node.value === 10) {
    let newHead = new Node(1);
    LL.head.value = 0;
    newHead.next = LL.head
    LL.head = newHead
  }
  return LL
}