var arr = new Array(6);
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";
arr[3] = "James";
arr[4] = "Adrew";
arr[5] = "Martin";

console.log(arr.lastIndexOf('Thomas'));             // 2
console.log(arr.lastIndexOf('Thomas', 2));          // 2
console.log(arr.lastIndexOf('Thomas', 3));          // 2
console.log(arr.lastIndexOf('Thomas', 1));          // -1
console.log(arr.lastIndexOf('Thomas', -4));         // 2
console.log(arr.lastIndexOf('Thomas', -3));         // 2
console.log(arr.lastIndexOf('Peter'));              // -1