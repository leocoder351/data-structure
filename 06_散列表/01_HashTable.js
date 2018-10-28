// 创建散列表HashTable类
function HashTable () {
    var table = [];

    // Hash生成算法
    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    // 向散列表增加一个新的项，也能更新散列表
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        console.log(position + '-' + key);
        table[position] = value;
    };

    // 返回根据键值检索到的特定的值
    this.get = function (key) {
        return table[loseloseHashCode(key)];
    };

    // 根据键值从散列表中移除值
    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    };

    // 打印散列表
    this.print = function () {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + ': ' + table[i]);
            }
        }
    };
}


/*----------------------------------------------*/


// 创建散列表
var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane'));
hash.remove('Gandalf');
console.log(hash.get('Gandalf'));

// 散列表冲突
var hash2 = new HashTable();
hash2.put('Gandalf', 'gandalf@email.com');
hash2.put('John', 'johnsnow@email.com');
hash2.put('Tyrion', 'tyrion@email.com');
hash2.put('Aaron', 'aaron@email.com');
hash2.put('Donnie', 'donnie@email.com');
hash2.put('Ana', 'ana@email.com');
hash2.put('Jonathan', 'jonathan@email.com');
hash2.put('Jamie', 'jamie@email.com');
hash2.put('Sue', 'sue@email.com');
hash2.put('Mindy', 'mindy@email.com');
hash2.put('Paul', 'paul@email.com');
hash2.put('Nathan', 'nathan@email.com');
hash2.print();
