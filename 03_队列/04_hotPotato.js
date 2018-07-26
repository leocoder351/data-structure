// 实现击鼓传花
function hotPotato (nameList, num) {
  var queue = new Queue();

  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = '';

  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(`${eliminated}在击鼓传花中被淘汰！`);
  }

  return queue.dequeue();
}

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


// 测试
var nameList = ["John", "Jack", "Camila", "Ingrid", "Carl"];
var winner = hotPotato(nameList, 10);
console.log(`最后的胜利者是：${winner}`);