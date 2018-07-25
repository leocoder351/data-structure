var numbers = [15, 2, 1, 7];

var total = numbers.reduceRight(function (total, currentValue) {
    console.log(total);             // 7 8 10 25
    console.log(currentValue);      // 1 2 15
    return total + currentValue;
});

console.log(total);                 // 25
console.log(numbers);               // [15, 2, 1, 7]

total = numbers.reduceRight(function (total, currentValue) {
    console.log(total);             // 20 27 28 30 45
    console.log(currentValue);      // 7  1  2  15
    return total + currentValue;
}, 20);

console.log(total);                 // 45
console.log(numbers);               // [15, 2, 1, 7]