// Linked List

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

// Tree

 function TreeNode(val, left, right) {
    this.val = val;
    this.left = left ?? null;
    this.right = right ?? null;
}

 function buildTreeFromArray(arr) {
    if (!arr.length) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        const current = queue.shift();

        if (arr[i] !== null && i < arr.length) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (arr[i] !== null && i < arr.length) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

module.exports = {
    buildLinkedList,
    buildTreeFromArray,
};