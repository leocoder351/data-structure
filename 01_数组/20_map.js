var numbers = [65, 20, 11, 5];

var arr = numbers.map(function (value, index, arr) {
    return value * 2;
})

console.log(numbers);   // [65, 20, 11, 5]
console.log(arr);       // [130, 40, 22, 10]