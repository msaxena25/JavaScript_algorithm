// [6,1,9,2,null,4,null,5,null,null,null,null,8,null,null,null]

class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  //  incomplete
  create(values) {
    for (let i = 0; i < values.length; i++) {
      let node = new TreeNode(values[i]);
      if (this.root === null) {
        this.root = node;
      }
      let current = node;
      if (current.left === null) {
        current.left = node;
      }
    }
  }

  insert(value) {
    const node = new TreeNode(value);
    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      while (current) {
        if (value === current.value) {
          return this;
        }
        // Binary tree contains element in sorted order that's why we checked these conditions
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
}

let bt = new BinaryTree();
bt.insert(8);
bt.insert(7);
bt.insert(7);
bt.insert(3);
bt.insert(2);
bt.insert(9);

let btTwo = new BinaryTree();
btTwo.create([6, 1, 9, 2, null, 4, null, 5, null, null, null, null, 8, null, null, null]);

console.log(btTwo);
