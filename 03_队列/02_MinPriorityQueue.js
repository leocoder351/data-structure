// 最小优先队列MinPriorityQueue类
function MinPriorityQueue () {
  this.items = [];

  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.isEmpty = isEmpty;
  this.size = size;
  this.clear = clear;
  this.print = print;
}

// 优先队列添加元素，要根据优先级判断在队列中的插入顺序
function enqueue (element, priority) {
  var queueElement = {
    element: element,
    priority: priority
  };

  if (this.isEmpty()) {
    this.items.push(queueElement);
  } else {
    var added = false;

    for (var i = 0; i < this.size(); i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break ;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }
}

// 移除队列的第一个元素，并返回被移除的元素
function dequeue () {
  return this.items.shift();
}

// 返回队列的第一个元素
function front () {
  return this.items[0];
}

// 判断是否为空队列
function isEmpty () {
  return this.items.length === 0;
}

// 获取队列的长度
function size () {
  return this.items.length;
}

// 清空队列
function clear () {
  this.items = [];
}

// 打印队列里的元素
function print () {
  var strArr = [];

  strArr = this.items.map(function (item) {
    return `${item.element}->${item.priority}`;
  });

  console.log(strArr.toString());
}


/*----------------------------------------------*/


// 创建最小优先队列minPriorityQueue实例
var minPriorityQueue = new MinPriorityQueue();

console.log(minPriorityQueue.isEmpty());     // true
minPriorityQueue.enqueue("John", 1);         // undefined
minPriorityQueue.enqueue("Jack", 3);         // undefined
minPriorityQueue.enqueue("Camila", 2);       // undefined
minPriorityQueue.enqueue("Tom", 3);          // undefined
minPriorityQueue.print();                    // "John->1,Camila->2,Jack->3,Tom->3"
console.log(minPriorityQueue.size());        // 4
console.log(minPriorityQueue.isEmpty());     // false
minPriorityQueue.dequeue();                  // {element: "John", priority: 1}
minPriorityQueue.dequeue();                  // {element: "Camila", priority: 2}
minPriorityQueue.print();                    // "Jack->3,Tom->3"
minPriorityQueue.clear();                    // undefined
console.log(minPriorityQueue.size());        // 0