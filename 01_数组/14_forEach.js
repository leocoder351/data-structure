var arr = new Array(3);
arr[0] = "Geroge";
arr[1] = "John";
arr[2] = "Thomas";

arr.forEach(function (value, index, arr) {
    console.log(value);     // "Geroge" "John" "Thomas"
    console.log(index);     // 0        1      2
    console.log(arr);       // ["Geroge", "John", "Thomas"]
    console.log(this);      // window
});

arr.forEach(function (value, index, arr) {
    console.log(value);     // "Geroge" "John" "Thomas"
    console.log(index);     // 0        1      2
    console.log(arr);       // ["Geroge", "John", "Thomas"]
    console.log(this);      // ["Geroge", "John", "Thomas"]
}, arr);