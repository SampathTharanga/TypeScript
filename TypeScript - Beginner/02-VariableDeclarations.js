/*

REFERENCES:
    https://www.typescriptlang.org/docs/handbook/variable-declarations.html

*/
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
/*
    01.i - Scoping rules
 */
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
/*
    01.ii - Variable capturing quirks
*/
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}
//----
for (var i = 0; i < 10; i++) {
    //Capture the current state of 'i'
    //by invoking a function with its current value
    (function (i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    })(i);
}
//---------------- 02 - "let" declarations ------------------
var hello1 = "Hello!";
/*
    02.i - Block scoping
*/
//When a variable is declared using let, it uses what some call "lexical-scoping" or "block-scoping".
function func(input) {
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var b = a + 1;
        return b;
    }
    //Error: 'b' does nnot exist here
    //return b;
}
//Variables declared in a "catch" clause also have similar scoping rules.
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}
//Error: 'e' doesn't exist here
//console.log(e);
//--------
/*
function foo () {
    //okay to capture 'a'
    return a1;
}

//illegl call 'foo' before 'a' is declared
//runtime should throw an error here
foo();

let a1;
*/
/*
    02.ii - Re-declarations and Shadowing
*/
//With var declarations, we mentioned that it didn’t matter how many times you declared your variables
/*
function f5(x) {
    var x;
    var x;

    if (true){
        var x;
    }

}
*/
/*
let x = 10;
let x = 20; // error: can't re-declare 'x' in the same scope
*/
/*
function f(x) {
    let x = 100; // error: interferes with parameter declaration
}

function g() {
    let x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}
*/
function f4(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
f4(false, 0); //return '0'
f4(true, 0); //return '100'
//------
function sumMatrix1(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) {
        var currentRow1 = matrix[i_1];
        for (var i_2 = 0; i_2 < currentRow1.length; i_2++) {
            sum += currentRow1[i_2];
        }
    }
    return sum;
}
/*
    02.iii - Block-scoped variable capturing
*/
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Mawanella";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
var _loop_1 = function (i_3) {
    setTimeout(function () { console.log(i_3); }, 100 * i_3);
};
for (var i_3 = 0; i_3 < 10; i_3++) {
    _loop_1(i_3);
}
//---------------- 03 - "const" declarations ---------------------
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
/*
//Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};
*/
//all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
//------------ Destructuring ----------------
/*
            Array Destructuring
*/
var input1 = [1, 2];
var first = input1[0], second = input1[1];
console.log(first); //Output 1
console.log(second); //Output 2
//You can create a variable for the remaining items in a list using the syntax ...
var _a = [1, 2, 3, 4, 5], first1 = _a[0], rest = _a.slice(1);
console.log(first); //Output 1
console.log(rest); //Output [2, 3, 4, 5]
/*
        Object Destructuring
*/
var o1 = {
    a1: "foo",
    b1: 12,
    c1: "bar"
};
var a1 = o1.a1, b1 = o1.b1;
//Property renaming
var newame1 = o1.a1, newName2 = o1.b1;
//Default Values
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
function ff(_a) {
    var a = _a.a, b = _a.b;
    //...
}
function ff1(_a) {
    var _b = _a === void 0 ? { a: "", b: 0 } : _a, a = _b.a, b = _b.b;
    //...
}
ff1(); //ok default to { a: "", b: 0 }
function ff2(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    //...
}
ff2({ a: "yes" }); //ok, default b = 0
ff2(); // ok default to { a: "" }, which then default b = 0
//ff2({}); // error, 'a' is required if you supply an argument.
/*
        Spread
*/
//Array spread
var first2 = [1, 2];
var second2 = [3, 4];
var bothPlus = [0].concat(first2, second2, [5]); // values are [0, 1, 2, 3, 4, 5]
//Object spread
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "rich" });
var defaults1 = { food: "spicy", price: "$$", ambince: "noisy" };
var search1 = __assign({ food: "rich" }, defaults1);
var Cls = /** @class */ (function () {
    function Cls() {
        this.p = 12;
    }
    Cls.prototype.m = function () {
    };
    return Cls;
}());
var _Cls = new Cls();
var clone = __assign({}, _Cls);
clone.p; // ok
//clone.m(); // error
