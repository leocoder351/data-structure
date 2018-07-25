var arr = new Array(6);
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";
arr[3] = "James";
arr[4] = "Adrew";
arr[5] = "Martin";

console.log(arr);                   // ["Geroge", "John", "Thomas", "James", "Adrew", "Martin"]
console.log(arr.slice(0));          // ["Geroge", "John", "Thomas", "James", "Adrew", "Martin"]
console.log(arr.slice(1));          // ["John", "Thomas", "James", "Adrew", "Martin"]
console.log(arr.slice(1, 3));       // ["John", "Thomas"]
console.log(arr.slice(1, -2));      // ["John", "Thomas", "James"]
console.log(arr.slice(-1, -2));     // []
console.log(arr.slice(-2, -1));     // ["Adrew"]
console.log(arr);                   // ["Geroge", "John", "Thomas", "James", "Adrew", "Martin"]