/* Javascript program to check if a given tree is BST.
Time Complexity: O(N)
Auxiliary Space: O(H) */

class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

let prev;

function isBSTUtil(root) {
  if (root != null) {
    if (!isBSTUtil(root.left)) return false;

    if (prev != null && root.data <= prev.data) return false;

    prev = root;

    return isBSTUtil(root.right);
  }
  return true;
}

function isBST(root) {
  return isBSTUtil(root);
}

let root = new Node(3);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);

if (isBST(root)) console.log("Is BST");
else console.log("Not a BST");
