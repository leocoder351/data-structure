var ages = [10, 20, 24, 32, 40];

var result = ages.filter(function (value, index, arr) {
    return value > 25;
});

console.log(result);    // [32, 40]
console.log(ages);      // [10, 20, 24, 32, 40]

ages = [];
result = ages.filter(function (value, index, arr) {
    return value > 25;
});

console.log(result);    // []