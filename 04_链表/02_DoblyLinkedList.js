// 创建双向链表DoublyLinkedList类
function DoublyLinkedList () {
  function Node (element) {
    this.element = element;
    this.next = null;
    this.prev = null;        // 新增
  }

  var length = 0;
  var head = null;
  var tail = null;          // 新增

  // 向链表尾部添加一个新的项
  this.append = function (element) {
    var node = new Node(element);
    var currentNode = tail;

    // 判断是否为空链表
    if (currentNode === null) {
      // 空链表
      head = node;
      tail = node;
    } else {
      currentNode.next = node;
      node.prev = currentNode;
      tail = node; 
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
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = currentNode;
          currentNode.prev = node;
          head = node;
        }
      } else if (position === length) {
        this.append(element);
      } else {
        while (index < position) {
          index++;
          previousNode = currentNode;
          currentNode = currentNode.next; 
        }
  
        previousNode.next = node;
        node.next = currentNode;

        node.prev = previousNode;
        currentNode.prev = node;
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
        // 移除第一项
        if (length === 1) {
          head = null;
          tail = null;
        } else {
          head = currentNode.next;
          head.prev = null;
        }
      } else if (position === length - 1) {
        // 移除最后一项
        if (length === 1) {
          head = null;
          tail = null;
        } else {
          currentNode = tail;
          tail = currentNode.prev;
          tail.next = null;
        }
      } else {
        while (index < position) {
          index++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
        previousNode = currentNode.next.prev;
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


// 创建双向链表
var doublyLinked = new DoublyLinkedList();
console.log(doublyLinked.isEmpty());              // true
doublyLinked.append('Tom');                       
doublyLinked.append('Peter');
doublyLinked.append('Paul');
doublyLinked.print();                             // "Tom,Peter,Paul"
doublyLinked.insert(0, 'Susan');                  
doublyLinked.print();                             // "Susan,Tom,Peter,Paul"
doublyLinked.insert(1, 'Jack');                   
doublyLinked.print();                             // "Susan,Jack,Tom,Peter,Paul"
console.log(doublyLinked.getHead());              // "Susan"
console.log(doublyLinked.isEmpty());              // false
console.log(doublyLinked.indexOf('Peter'));       // 3
console.log(doublyLinked.indexOf('Cris'));        // -1
doublyLinked.remove('Tom');                       
doublyLinked.removeAt(2);                         
doublyLinked.print();                             // "Susan,Jack,Paul"