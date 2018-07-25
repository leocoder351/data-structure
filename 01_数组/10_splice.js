var arr = new Array(6);
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";
arr[3] = "James";
arr[4] = "Adrew";
arr[5] = "Martin";

console.log(arr);                                   // ["Geroge", "John", "Thomas", "James", "Adrew", "Martin"]  
console.log(arr.splice(1, 1, 'Peter', 'Sara'));     // ["John"]
console.log(arr);                                   // ["Geroge", "Peter", "Sara", "Thomas", "James", "Adrew", "Martin"]
console.log(arr.splice(1, 0, 'Ella'));              // []
console.log(arr);                                   // ["Geroge", "Ella", "Peter", "Sara", "Thomas", "James", "Adrew", "Martin"]