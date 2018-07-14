/*

REFERENCES:
    https://www.typescriptlang.org/docs/handbook/variable-declarations.html

*/
//----------------- 01 - var declarations -----------------
//Declaring a variable in JavaScript has always traditionally been done with "var" keyword.
var a = 10;
//We can also declare a variable inside of a function
function f() {
    var message = "Hello,  world!";
    return message;
}
//----
function f1() {
    var a = 10;
    return function g1() {
        var b = a + 1;
        return b;
    };
}
var g1 = f1();
console.log("g1 : " + g1);
console.log("g1() : " + g1()); // returns '11'
//---
function f2() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}
console.log("f2() : " + f2());
//---------------- 02 - Scoping rules ------------------
function f3(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
}
f3(true); // returns '10'
f3(false); // returns 'undefined'
//-----
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
//---------------- 03 - Variable capturing quirks ------------------
//----
for (var i = 0; i < 10; i++) {
    //Capture the current state of 'i'
    //by invoking a function with its current value
    (function (i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    })(i);
}
