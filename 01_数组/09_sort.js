var arr = new Array(6);
arr[0] = "10";
arr[1] = "5";
arr[2] = "40";
arr[3] = "25";
arr[4] = "1000";
arr[5] = "1";

console.log(arr);           // ["10", "5", "40", "25", "1000", "1"]
console.log(arr.sort());    // ["1", "10", "1000", "25", "40", "5"]
console.log(arr);           // ["1", "10", "1000", "25", "40", "5"]

var arr = new Array(6);
arr[0] = "10";
arr[1] = "5";
arr[2] = "40";
arr[3] = "25";
arr[4] = "1000";
arr[5] = "1";

function orderNumber (a, b) {
    return a - b;
}

function descOrderNumber (a, b) {
    return b - a;
}

console.log(arr);                           // ["10", "5", "40", "25", "1000", "1"]
console.log(arr.sort(orderNumber));         // ["1", "5", "10", "25", "40", "1000"]
console.log(arr.sort(descOrderNumber));     // ["1000", "40", "25", "10", "5", "1"]
console.log(arr);                           // ["1000", "40", "25", "10", "5", "1"]