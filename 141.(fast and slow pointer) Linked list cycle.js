/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function buildLinkedList(arr, pos) {
    if (arr.length === 0) return null;

    const nodes = arr.map(val => new ListNode(val));

    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }

    if (pos !== -1) {
        nodes[nodes.length - 1].next = nodes[pos]; // create the cycle
    }

    return nodes[0]; // return the head
}

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