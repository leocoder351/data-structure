// 创建线性探查散列表HashTable类
function HashTable() {
  var table = [];

  // Hash生成算法
  var djb2HashCode = function (key) {
    var hash = 5381;
    for (var i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
  };

  // 散列链表元素
  var ValuePair = function (key, value) {
    this.key = key;
    this.value = value;

    this.toString = function () {
      return `[${this.key} - ${this.value}]`;
    };
  };

  // 向散列表增加一个新的项，也能更新散列表
  this.put = function (key, value) {
    var position = djb2HashCode(key);
    var valuePair = new ValuePair(key, value);

    if (table[position] === undefined) {
      table[position] = valuePair;
    } else {
      let index = ++position;
      while (table[index] !== undefined) {
        index++;
      }
      table[index] = valuePair;
    }
  };

  // 返回根据键值检索到的特定的值
  this.get = function (key) {
    var position = djb2HashCode(key);

    if (table[position] === undefined) {
      return undefined;
    } else {
      if (table[position].key === key) {
        return table[position].value;
      }

      let index = ++position;

      while (table[index] !== undefined) {
        if (table[index].key === key) {
          return table[index].value;
        }
        index++;
      }

      return undefined;
    }
  };

  // 根据键值从散列表中移除值
  this.remove = function (key) {
    var position = djb2HashCode(key);

    if (table[position] === undefined) {
      return false;
    } else {
      if (table[position].key === key) {
        table[position] = undefined;
        return true;
      }

      let index = ++position;

      while (table[index] !== undefined) {
        if (table[index].key === key) {
          table[index] = undefined;
          return true;
        }
        index++;
      }

      return false;
    }
  };

  // 打印散列表
  this.print = function () {
    for (var i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ': ' + table[i].value);
      }
    }
  };
}


/*----------------------------------------------*/


// 创建分离链接散列表
var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');

hash.print();
console.log(hash.get('Tyrion'));
console.log(hash.get('Aaron'));
console.log(hash.get('Tom'));
console.log(hash.get('Gandalf'));

hash.remove('Aaron');
hash.remove('Sue');
console.log(hash.get('Aaron'));
hash.print();