// 创建分离链接散列表HashTable类
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

    // 散列链表元素
    var ValuePair = function (key, value) {
        this.key = key;
        this.value = value;
        this.next = null;

        this.toString = function () {
            return `[${this.key} - ${this.value}]`;
        };
    };

    // 向散列表增加一个新的项，也能更新散列表
    this.put = function (key, value) {
        var position = loseloseHashCode(key);

        if (table[position] === undefined) {
            table[position] = new ValuePair(key, value);
        } else {
            let currentNode = table[position];
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = new ValuePair(key, value);
        }
    };

    // 返回根据键值检索到的特定的值
    this.get = function (key) {
        var position = loseloseHashCode(key);

        if (table[position] === undefined) {
            return undefined;
        } else {
            let currentNode = table[position];

            if (currentNode.key === key) {
                return currentNode.value;
            }

            while (currentNode.next) {
                currentNode = currentNode.next;
                if (currentNode.key === key) {
                    return currentNode.value;
                }
            }

            return undefined;
        }
    };

    // 根据键值从散列表中移除值
    this.remove = function (key) {
        var position = loseloseHashCode(key);

        if (table[position] === undefined) {
            return false;
        } else {
            let currentNode = table[position];
            let prevNode = null;

            if (currentNode.key === key) {
                currentNode.next ? table[position] = currentNode.next : table[position] = undefined;
                return true;
            }

            while (currentNode.next) {
                prevNode = currentNode;
                currentNode = currentNode.next;
                if (currentNode.key === key) {
                    prevNode.next = currentNode.next;
                    return true;
                }
            }

            return false;
        }
    };

    // 打印散列表
    this.print = function () {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                let currentNode = table[i];
                while (currentNode.next) {
                    console.log(i + ': ' + currentNode.value);
                    currentNode = currentNode.next;
                }
                console.log(i + ': ' + currentNode.value);
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