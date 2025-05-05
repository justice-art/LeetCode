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

const { buildTreeFromArray } = require('./helpers.js');

const maxDepth = function(root) {
    if(!root) return 0;

    const leftNode = maxDepth(root.left);
    const rightNode = maxDepth(root.right);

    return Math.max(leftNode, rightNode) + 1;
};

const treeArray = [3, 9, 20, null, null, 15, 7];
const root = buildTreeFromArray(treeArray);

const res = maxDepth(root); 
console.log(res);