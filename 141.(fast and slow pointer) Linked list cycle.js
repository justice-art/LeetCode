/**
 * @param {ListNode} head
 * @return {boolean}
 */

const { buildLinkedList }= require('./helpers');

var hasCycle = function(head) {
    let fast = head;

    while (fast && fast.next) {
        head = head.next;
        fast = fast.next.next;

        if (head === fast) return true;
    }

    return false
};

  const head = buildLinkedList([3,2,0,-4], 1); 

  console.log(hasCycle(head));