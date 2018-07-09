//--------------- 01 - Boolean -------------
var isDone = true;
//--------------- 02 - Number ---------------
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//---------------- 03 - String --------------
var color = "blue";
color = 'red';
var fullName = "Sampath Tharanga"; // here use backtick/backquote(`)
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
//This is equivalent to declaring 'sentence' llike so,
var newSentence = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + "years old next month.";
//--------------- 04 - Array ----------------
// 1st way
var list = [1, 2, 3];
//2nd way
var list2 = [1, 2, 3];
//--------------- 05 - Tuple ---------------
//Declare a tuple type
var x;
//Initialize it
x = ["Hello", 10]; //OK
//Initialize it incorrectly
//x = [10, "Hello"]; // Error
//When accessing an element with a known index
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
//Whne accessing an element outside the set of known indices,
x[3] = "Word"; //Ok, 'string' can be assigned to  'string | number'
//console.log(x[5].toString()); //OK, 'string' and 'number' both have 'toString'
//x[6] = true; //Error, 'boolean isn't 'string | number'
