/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const { buildTreeFromArray } = require('./helpers.js');

const inorderTraversal = function(root) {
    const result = [];

    function inOrder(root) {
        if (!root) return;
        
        inOrder(root.left);
        result.push(root.val);
        inOrder(root.right);
    }

    inOrder(root);

    return result;
};

const treeArray = [1,2,3,4,5,null,8,null,null,6,7,9];
const root = buildTreeFromArray(treeArray);

const res = inorderTraversal(root); 
console.log(res);