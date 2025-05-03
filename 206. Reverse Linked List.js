/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function buildLinkedList(arr) {
    if (arr.length === 0) return null;

    const nodes = arr.map(val => new ListNode(val));

    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }

    return nodes[0]; // return the head
}

const reverseList = function(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

const headParameter = buildLinkedList([1,2,3,4,5]);

console.log(reverseList(headParameter));