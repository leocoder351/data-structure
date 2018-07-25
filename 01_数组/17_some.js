var ages = [10, 20, 24, 32, 40];

var result = ages.some(function (value, index, arr) {
    return value > 25;
});

console.log(result);    // true

ages = [];
result = ages.some(function (value, index, arr) {
    return value > 25;
});

console.log(result);    // false