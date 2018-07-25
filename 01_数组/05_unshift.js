var arr = new Array(3);
arr[0] = "Geroge";
arr[1] = "John";
arr[2] = "Thomas";

console.log(arr);                               // ["Geroge", "John", "Thomas"]
console.log(arr.unshift("James"));              // 4
console.log(arr);                               // ["James", "Geroge", "John", "Thomas"]
console.log(arr.unshift("Peter", "Sara"));      // 6
console.log(arr);                               // ["Peter", "Sara", "James", "Geroge", "John", "Thomas"]