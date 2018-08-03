// 创建单向链表SinglyLinkedList类
function SinglyLinkedList () {
  function Node (element) {
    this.element = element;
    this.next = null;
  }

  var length = 0;
  var head = null;

  // 向链表尾部添加一个新的项
  this.append = function (element) {
    var node = new Node(element);
    var currentNode = head;

    // 判断是否为空链表
    if (currentNode === null) {
      // 空链表
      head = node;
    } else {
      // 从head开始一直找到最后一个node
      while (currentNode.next) {
        // 后面还有node
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }

    length++;
  };

  // 向链表特定位置插入一个新的项
  this.insert = function (position, element) {
    if (position < 0 && position > length) {
      // 越界
      return false;
    } else {
      var node = new Node(element);
      var index = 0;
      var currentNode = head;
      var previousNode;

      if (position === 0) {
        node.next = currentNode;
        head = node;
      } else {
        while (index < position) {
          index++;
          previousNode = currentNode;
          currentNode = currentNode.next; 
        }
  
        previousNode.next = node;
        node.next = currentNode;
      }

      length++;

      return true;
    }
  };

  // 从链表的特定位置移除一项
  this.removeAt = function (position) {
    if (position < 0 && position >= length || length === 0) {
      // 越界
      return false;
    } else {
      var currentNode = head;
      var index = 0;
      var previousNode;

      if (position === 0) {
        head = currentNode.next;
      } else {
        while (index < position) {
          index++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
      }

      length--;

      return true;
    }
  };

  // 从链表中移除指定项
  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };

  // 返回元素在链表的索引，如果链表中没有该元素则返回-1
  this.indexOf = function (element) {
    var currentNode = head;
    var index = 0;

    while (currentNode) {
      if (currentNode.element === element) {
        return index;
      }

      index++;
      currentNode = currentNode.next;
    }

    return -1;
  };

  // 如果链表中不包含任何元素，返回true，如果链表长度大于0，返回false
  this.isEmpty = function () {
    return length == 0;
  };

  // 返回链表包含的元素个数，与数组的length属性类似
  this.size = function () {
    return length;
  };

  // 获取链表头部元素
  this.getHead = function () {
    return head.element;
  };

  // 由于链表使用了Node类，就需要重写继承自JavaScript对象默认的toString()方法，让其只输出元素的值
  this.toString = function () {
    var currentNode = head;
    var string = '';

    while (currentNode) {
      string += ',' + currentNode.element;
      currentNode = currentNode.next;
    }

    return string.slice(1);
  };

  this.print = function () {
    console.log(this.toString());
  };
}


/*----------------------------------------------*/


// 创建单向链表
var singlyLinked = new SinglyLinkedList();
console.log(singlyLinked.removeAt(0));              // true
console.log(singlyLinked.isEmpty());              // true
singlyLinked.append('Tom');                       
singlyLinked.append('Peter');
singlyLinked.append('Paul');
singlyLinked.print();                             // "Tom,Peter,Paul"
singlyLinked.insert(0, 'Susan');                  
singlyLinked.print();                             // "Susan,Tom,Peter,Paul"
singlyLinked.insert(1, 'Jack');                   
singlyLinked.print();                             // "Susan,Jack,Tom,Peter,Paul"
console.log(singlyLinked.getHead());              // "Susan"
console.log(singlyLinked.isEmpty());              // false
console.log(singlyLinked.indexOf('Peter'));       // 3
console.log(singlyLinked.indexOf('Cris'));        // -1
singlyLinked.remove('Tom');                       
singlyLinked.removeAt(2);                         
singlyLinked.print();                             // "Susan,Jack,Paul"