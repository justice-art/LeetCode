/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    const leftNode = maxDepth(root.left) + 1;
    const rightNode = maxDepth(root.right) + 1;

    return Math.max(leftNode, rightNode);
};

const res = maxDepth([3,9,20,null,null,15,7]);
console.log(res);