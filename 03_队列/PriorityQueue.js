// 优先队列PriorityQueue类
function PriorityQueue () {
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

    for (var i = 0; i < this.items.length; i++) {
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


// 创建优先队列priorityQueue实例
var priorityQueue = new PriorityQueue();

console.log(priorityQueue.isEmpty());     // true
priorityQueue.enqueue("John", 1);         // undefined
priorityQueue.enqueue("Jack", 3);         // undefined
priorityQueue.enqueue("Camila", 2);       // undefined
priorityQueue.enqueue("Tom", 3);          // undefined
priorityQueue.print();                    // "John->1,Camila->2,Jack->3,Tom->3"
console.log(priorityQueue.size());        // 4
console.log(priorityQueue.isEmpty());     // false
priorityQueue.dequeue();                  // {element: "John", priority: 1}
priorityQueue.dequeue();                  // {element: "Camila", priority: 2}
priorityQueue.print();                    // "Jack->3,Tom->3"
priorityQueue.clear();                    // undefined
console.log(priorityQueue.size());        // 0