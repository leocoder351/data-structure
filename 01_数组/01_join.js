var arr = new Array(3);
arr[0] = "Geroge";
arr[1] = "John";
arr[2] = "Thomas";

var str1 = arr.join();
var str2 = arr.join('');
var str3 = arr.join(' ');
var str4 = arr.join('-');

console.log(str1);  // "Geroge,John,Thomas"
console.log(str2);  // "GerogeJohnThomas"
console.log(str3);  // "Geroge John Thomas"
console.log(str4);  // "Geroge-John-Thomas"