var ages = [10, 20, 24, 32, 40];

var result = ages.every(function (value, index, arr) {
    return value > 25;
});

console.log(result);    // false

ages = [];
result = ages.every(function (value, index, arr) {
    return value > 25;
});

console.log(result);    // true