var arr = new Array(6);
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";
arr[3] = "James";
arr[4] = "Adrew";
arr[5] = "Martin";

console.log(arr.indexOf('Thomas'));             // 2
console.log(arr.indexOf('Thomas', 2));          // 2
console.log(arr.indexOf('Thomas', 3));          // -1
console.log(arr.indexOf('Thomas', -4));         // 2
console.log(arr.indexOf('Thomas', -3));         // -1
console.log(arr.indexOf('Peter'));              // -1