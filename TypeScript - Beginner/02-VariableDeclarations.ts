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
    }
}

var g1 = f1();
console.log("g1 : " + g1);
console.log("g1() : " + g1()); // returns '11'

//---
function f2 () {
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

function f3(shouldInitialize : boolean) {
    if (shouldInitialize) {
        var x = 10;
    }
}

f3(true); // returns '10'
f3(false); // returns 'undefined'

//-----
function sumMatrix (matrix: number[] [])
{
    var sum = 0;
    for (var i = 0; i < matrix.length; i++)
    {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++)
        {
            sum += currentRow[i];
        }
    }

    return sum;
}

/*
    01.ii - Variable capturing quirks 
*/

for (var i = 0; i < 10; i++)
{
    setTimeout(function () { console.log(i); }, 100 * i);
}

//----
for (var i = 0; i < 10; i++)
{
    //Capture the current state of 'i'
    //by invoking a function with its current value
    (function(i) {
        setTimeout (function () { console.log(i); }, 100 * i );
    }) (i);
}

//---------------- 02 - "let" declarations ------------------
let hello1 = "Hello!";

/*
    02.i - Block scoping
*/

//When a variable is declared using let, it uses what some call "lexical-scoping" or "block-scoping".
function func(input: boolean)
{
    let a = 100;

    if(input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    //Error: 'b' does nnot exist here
    //return b;
}

//Variables declared in a "catch" clause also have similar scoping rules.
try
{
    throw "oh no!";
}
catch (e)
{
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

function f4(condition: boolean, x: number) {
    if (condition)
    {
        let x =100;
        return x;
    }
    return x;
}

f4(false, 0); //return '0'
f4(true, 0);  //return '100'

//------
function sumMatrix1(matrix: number[][])
{
    let sum = 0;
    for (let i = 0; i < matrix.length; i++)
    {
        var currentRow1 = matrix[i];
        for (let i = 0; i < currentRow1.length; i++)
        {
            sum +=currentRow1[i];
        }
    }
    return sum;
}

/*
    02.iii - Block-scoped variable capturing
*/
function theCityThatAlwaysSleeps() {
    let getCity;

    if (true)
    {
        let city = "Mawanella";
        getCity = function() {
            return city;
        }
    }

    return getCity();
}

for (let i = 0; i < 10; i++)
{
    setTimeout(function () { console.log(i); }, 100 * i);
}

//---------------- 03 - "const" declarations ---------------------
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}
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
let input1 = [1, 2];
let [first, second] = input1;
console.log(first);  //Output 1
console.log(second); //Output 2


//You can create a variable for the remaining items in a list using the syntax ...
let [first1, ...rest] = [1, 2, 3, 4, 5];
console.log(first); //Output 1
console.log(rest); //Output [2, 3, 4, 5]

/*
        Object Destructuring
*/
let o1 = {
    a1: "foo",
    b1: 12,
    c1: "bar"
};

let { a1, b1 } = o1;

//Property renaming
let { a1: newame1, b1: newName2 } = o1;

//Default Values
function keepWholeObject (wholeObject: { a: string, b?:number} ) {
    let { a, b = 1001 } = wholeObject;
}

