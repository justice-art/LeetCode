/**
 * @param {ListNode} head
 * @return {boolean}
 */

const { buildLinkedList }= require('./helpers');

var hasCycle = function(head) {
    while (head) {
        if (head.val === null) return true;

        head.val = null;
        head = head.next
    }

    return false
};

  const head = buildLinkedList([3,2,0,-4], -1); // cycle back to index 1 (value 2)

  console.log(hasCycle(head));