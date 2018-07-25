// Queue类
function Queue () {
  this.items = [];

  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.isEmpty = isEmpty;
  this.size = size;
  this.clear = clear;
  this.print = print;
}

// 向队列尾部添加元素
function enqueue (element) {
  this.items.push(element);
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
  console.log(this.items.toString());
}


/*----------------------------------------------*/


// 创建Queue实例
var queue = new Queue();

console.log(queue.isEmpty());     // true
queue.enqueue("John");            // undefined
queue.enqueue("Jack");            // undefined
queue.enqueue("Camila");          // undefined
queue.print();                    // "John,Jack,Camila"
console.log(queue.size());        // 3
console.log(queue.isEmpty());     // false
queue.dequeue();                  // "John"
queue.dequeue();                  // "Jack"
queue.print();                    // "Camila"
queue.clear();                    // undefined
console.log(queue.size());        // 0