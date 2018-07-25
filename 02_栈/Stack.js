// Stack类
function Stack () {
  this.items = [];

  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.isEmpty = isEmpty;
  this.clear = clear;
  this.size = size;
  this.print = print;
}

// 添加新元素到栈顶
function push (element) {
  this.items.push(element);
}

// 移除栈顶元素，同时返回被移除的元素
function pop () {
  return this.items.pop();
}

// 查看栈顶元素
function peek () {
  return this.items[this.items.length - 1];
}

// 判断是否为空栈
function isEmpty () {
  return this.items.length === 0;
}

// 清空栈
function clear () {
  this.items = [];
}

// 查询栈的长度
function size () {
  return this.items.length;
}

// 打印栈里的元素
function print () {
  console.log(this.items.toString());
}


/*----------------------------------------------*/


// 创建Stack实例
var stack = new Stack();

console.log(stack.isEmpty());     // true
stack.push(5);                    // undefined
stack.push(8);                    // undefined
console.log(stack.peek());        // 8
stack.push(11);                   // undefined
console.log(stack.size());        // 3
console.log(stack.isEmpty());     // false
stack.push(15);                   // undefined
stack.pop();                      // 15
console.log(stack.size());        // 3
stack.print();                    // 5,8,11
stack.clear();                    // undefined
console.log(stack.size());        // 0