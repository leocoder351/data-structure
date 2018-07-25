var arr = new Array(3);
arr[0] = "Geroge";
arr[1] = "John";
arr[2] = "Thomas";

console.log(arr);                           // ["Geroge", "John", "Thomas"]
console.log(arr.push("James"));             // 4
console.log(arr);                           // ["Geroge", "John", "Thomas", "James"]
console.log(arr.push("Peter", "Sara"));     // 6
console.log(arr);                           // ["Geroge", "John", "Thomas", "James", "Peter", "Sara"]