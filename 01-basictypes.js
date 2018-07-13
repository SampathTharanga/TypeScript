/*
    TypeScript File Run
    -------------------

    REFERENCES:
    https://code.visualstudio.com/docs/languages/typescript
    https://medium.com/@equisept/simplest-typescript-with-visual-studio-code-e42843fe437

    STEP 01 - Check available node, npm and tsc(TypeScript Compiler) in your pc. If not available in your pc. Very first please install.
    Installation,
    Install npm and node: https://nodejs.org/en/
    Install TypeScript/tsc: npm install -g typescript

    Available version check,
    node -v
    npm -v
    tsc -v

    STEP 02 - Create TypeScript Configuration file
    tsc --init

    STEP 03 - Compile TypeScript file
    tsc helloworld.ts

    STEp 04 - Run Compilation file
    node helloworld.js
*/
/*
REFERENNCES:
    https://www.typescriptlang.org/docs/handbook/basic-types.html
*/
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
//When accessing an element outside the set of known indices,
x[3] = "Word"; //Ok, 'string' can be assigned to  'string | number'
//console.log(x[5].toString()); //OK, 'string' and 'number' both have 'toString'
//x[6] = true; //Error, 'boolean isn't 'string | number'
//--------------- 06 - Enum ---------------
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //Default start 0. Red=0, Green=2 and Blue=3.
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {})); //Now Red=1, Green=2 and Blue=3
var c1 = Color1.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {})); // Manually set all values in the enum
var c2 = Color2.Green;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 3] = "Blue";
})(Color3 || (Color3 = {}));
var colorName = Color3[2];
console.log(colorName); //Display 'Green' as its value is 2 above
//---------------- 07 - Any ----------------
var notSure = 4;
notSure = "maybe a String instead.";
notSure = false; // okay, definitely a boolean.
/*
//The "any" type is a powerful way to work with existing JavaScript,
let notSure1:any = 4;
notSure1.ifItExists(); // okay, ifItExists might exist ar runtime.
notSure1.toFixed(); // okay, toFixed exists (but the compiler desn't check)

let prettySure:Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
*/
var anyList = [1, true, "free"];
anyList[1] = 100;
console.log(anyList[1]);
//---------------- 08 - Void ----------------
function warnUser() {
    console.log("This is my warnning message!");
}
//Declaring variables of type "void" is not useful beacause you can only assign "undefined" or "null" to them.
var unusable = undefined;
//---------------- 09 - Null and Undefined ----------------
//Not much else we can assign to these variables!
var u = undefined;
var n = null;
