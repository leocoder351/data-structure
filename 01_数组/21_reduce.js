var numbers = [15, 2, 1, 7];

var total = numbers.reduce(function (total, currentValue) {
    console.log(total);             // 15 17 18 25
    console.log(currentValue);      // 2  1  7
    return total + currentValue;
});

console.log(total);                 // 25
console.log(numbers);               // [15, 2, 1, 7]

total = numbers.reduce(function (total, currentValue) {
    console.log(total);             // 20 35 37 38 45
    console.log(currentValue);      // 15 2  1  7
    return total + currentValue;
}, 20);

console.log(total);                 // 45
console.log(numbers);               // [15, 2, 1, 7]