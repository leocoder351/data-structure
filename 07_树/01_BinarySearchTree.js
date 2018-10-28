// 创建BST二叉搜索树
function BinarySearchTree () {
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  // 向树中插入一个键
  this.insert = function (key) {
    var newNode = new Node(key);

    var insertNode = function (node, newNode) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    };

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  // 先序遍历
  this.preOrderTraverse = function (callback) {
    var preOrderTraverseNode = function (node, callback) {
      if (node !== null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
      }
    };

    preOrderTraverseNode(root, callback);
  };

  // 中序遍历
  this.inOrderTraverse = function (callback) {
    var inOrderTraverseNode = function (node, callback) {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
      }
    };

    inOrderTraverseNode(root, callback);
  };

  // 后序遍历
  this.postOrderTraverse = function (callback) {
    var postOrderTraverseNode = function (node, callback) {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    };

    postOrderTraverseNode(root, callback);
  };

  // 非递归先序遍历
  this.preOrderTraverseNoRecur = function (callback) {
    var stack = [];

    var preOrderTraverseNoRecurNode = function (root, callback) {
      if (root === null) return ;

      var parentNode = root;

      while (stack.length !== 0) {

        if (parentNode) {
          // 先遍历左子树
          callback(parentNode.key);
          stack.push(parentNode);
          parentNode = parentNode.left;
        } else {
          // 左子树遍历完成
          parentNode = stack.pop();
          parentNode = parentNode.right;
        }
      }
    };

    preOrderTraverseNoRecurNode(root, callback);
  };

  // 非递归中序遍历
  this.inOrderTraverseNoRecur = function (callback) {
    var stack = [];

    var inOrderTraverseNodeNoRecur = function (root, callback) {
      if (root === null) return ;

      var parentNode = root;

      while (stack.length !== 0) {

        if (parentNode) {
          // 先遍历左子树
          stack.push(parentNode);
          parentNode = parentNode.left;
        } else {
          // 左子树遍历完成
          parentNode = stack.pop();
          callback(parentNode.key);
          parentNode = parentNode.right;
        }
      }
    };

    inOrderTraverseNodeNoRecur(root, callback);
  };

  // 非递归后序遍历
  this.postOrderTraverseNoRecur = function (callback) {
    var stack = [];

    var postOrderTraverseNodeNoRecur = function (root, callback) {

    };

    postOrderTraverseNodeNoRecur(root, callback);
  };

  // 广度优先遍历之层序遍历
  this.breadthOrderTraverse = function (callback) {
    var queue = [];

    var breadthOrderTraverseNode = function (root, callback) {
      if (root === null) return ;

      queue.push(root);

      while (queue.length !== 0) {
        // 队列不为空
        var parentNode = queue.shift();
        
        callback(parentNode.key);

        if (parentNode.left !== null) queue.push(parentNode.left);
        if (parentNode.right !== null) queue.push(parentNode.right);
      }
    };

    breadthOrderTraverseNode(root, callback);
  };

  // 获取BST树的最小值
  this.min = function () {
    var miniNode = function (node) {
      if (node) {
        while (node && node.left !== null) {
          node = node.left;
        }

        return node.key;
      }

      return null;
    }

    return miniNode(root);
  };

  // 获取BST树的最大值
  this.max = function () {
    var maxNode = function (node) {
      if (node) {
        while (node && node.right !== null) {
          node = node.right;
        }

        return node.key;
      }

      return null;
    }

    return maxNode(root);
  };

  // 搜索BST树中是否存在指定值
  this.search = function (key) {
    var searchNode = function (root, key) {
      var currentNode = root;
      while (currentNode !== null) {
        if (key < currentNode.key) {
          currentNode = currentNode.left;
        } else if (key > currentNode.key) {
          currentNode = currentNode.right;
        } else {
          return currentNode.key;
        }
      }

      return false;
    };

    return searchNode(root, key);
  };

  // 递归方式搜索
  this.searchRecr = function (key) {
    var searchNode = function (node, key) {
      if (node === null) {
        return false;
      }

      if (key < node.key) {
        return searchNode(node.left, key);
      } else if (key > node.key) {
        return searchNode(node.right, key);
      } else {
        return true;
      }
    };

    searchNode(root, key);
  };

  // 移除节点
  this.removeNode = function (key) {
    var currentNode = root;
    var parentNode = null;

    while (currentNode !== null) {
      if (key < currentNode.key) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (key > currentNode.key) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // 找到要删除的节点了
        
        if (currentNode.left === null && currentNode.right === null) {
          // 要删除的是叶子节点
          
          if (parentNode.left.key === currentNode.key) {
            currentNode = null;
            parentNode.left = null;
          } else {
            currentNode = null;
            parentNode.right = null;
          }
          return true;
        } else if (currentNode.left === null) {
          // 要删除的子节点只有左子节点
          if (parentNode.left.key === currentNode.key) {
            parentNode.left = currentNode.right;
            currentNode = null;
          } else {
            parentNode.right = currentNode.right;
            currentNode = null;
          }
          return true;
        } else if (currentNode.right === null) {
          // 要删除的子节点只有右子节点
          if (parentNode.left.key === currentNode.key) {
            parentNode.left = currentNode.left;
            currentNode = null;
          } else {
            parentNode.right = currentNode.left;
            currentNode = null;
          }
          return true;
        } else {
          // 要删除的子节点有左右两个子节点
          // 找到左子树的最大值或者右子树的最小值，替换该节点位置，两种算法最后生成的树是不一样的

          // 1. 找到右子树的最小值
          var searchNode = currentNode.right;
          var searchParentNode = null;
          while (searchNode.left !== null) {
            searchParentNode = searchNode;
            searchNode = searchNode.left;
          }
          
          if (parentNode === null) {
            // 删除根节点
            searchParentNode.left = searchNode.right;
            searchNode.left = currentNode.left;
            searchNode.right = currentNode.right;
            root = searchNode;
            
          } else if (parentNode.left.key === currentNode.key) {
            // 左节点
            searchParentNode.left = searchNode.right;
            searchNode.left = currentNode.left;
            searchNode.right = currentNode.right;
            parentNode.left = searchNode;
          } else {
            // 右节点
            searchParentNode.left = searchNode.right;
            searchNode.left = currentNode.left;
            searchNode.right = currentNode.right;
            parentNode.right = searchNode;
          }

          return true;
        }
      }
    }

    return false;
  };
};

// 


/*----------------------------------------------*/


// 创建BST二叉搜索树
var tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
tree.insert(1);
tree.insert(19);

// 深度优先遍历之前序遍历
console.warn('前序遍历');
tree.preOrderTraverse(function (value) {
  console.log(value);
});

// 深度优先遍历之中序遍历
console.warn('中序遍历');
tree.inOrderTraverse(function (value) {
  console.log(value);
});

// 深度优先遍历之后序遍历
console.warn('后序遍历');
tree.postOrderTraverse(function (value) {
  console.log(value);
});

// 广度优先遍历之层序遍历
console.warn('层序遍历');
tree.breadthOrderTraverse(function (value) {
  console.log(value);
});

// 获取BST树最小值
console.warn('最小值');
console.log(tree.min());

// 获取BST树最大值
console.warn('最大值');
console.log(tree.max());

// 搜索是否有指定值
console.warn('搜索是否存在指定值');
console.log(tree.search(10));
console.log(tree.search(26));

// 删除节点
console.warn('删除节点');
console.log(tree.removeNode(3));
console.warn('中序遍历');
tree.inOrderTraverse(function (value) {
  console.log(value);
});
console.warn('删除节点');
console.log(tree.removeNode(11));
console.warn('中序遍历');
tree.inOrderTraverse(function (value) {
  console.log(value);
});
console.warn('删除节点');
debugger
console.log(tree.removeNode(15));
console.warn('中序遍历');
tree.inOrderTraverse(function (value) {
  console.log(value);
});