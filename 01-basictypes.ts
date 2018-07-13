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
let isDone: boolean  = true;


//--------------- 02 - Number ---------------
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


//---------------- 03 - String --------------
let color: string = "blue";
color = 'red';

let fullName: string = `Sampath Tharanga`; // here use backtick/backquote(`)
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

//This is equivalent to declaring 'sentence' llike so,
let newSentence: string = "Hello, my name is " + fullName + ".\n\n" + 
"I'll be " + (age + 1) + "years old next month."


//--------------- 04 - Array ----------------
// 1st way
let list: number[] = [1, 2, 3];

//2nd way
let list2: Array<number> = [1, 2, 3];


//--------------- 05 - Tuple ---------------
//Declare a tuple type
let x: [string, number];
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
enum Color {Red, Green, Blue} //Default start 0. Red=0, Green=2 and Blue=3.
let c: Color = Color.Green;

enum Color1 {Red = 1, Green, Blue} //Now Red=1, Green=2 and Blue=3
let c1: Color1 = Color1.Green;

enum Color2 {Red = 1, Green = 2, Blue = 3} // Manually set all values in the enum
let c2: Color2 = Color2.Green;

enum Color3 {Red = 1, Green, Blue}
let colorName: string = Color3[2];
console.log(colorName); //Display 'Green' as its value is 2 above


//---------------- 07 - Any ----------------
let notSure: any = 4;
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

let anyList: any[] = [1, true, "free"];
anyList[1] = 100;
console.log(anyList[1]);


//---------------- 08 - Void ----------------
function warnUser () : void {
    console.log("This is my warnning message!");
}
//Declaring variables of type "void" is not useful beacause you can only assign "undefined" or "null" to them.
let unusable: void = undefined;


//---------------- 09 - Null and Undefined ----------------

//Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;


//---------------- 10 - Never ----------------
//Function returing never must have unreachable end point
function error (message: string) : never {
    throw new  Error(message);
}

//Inferred return type is never
function fail() {
    return error("Something failed");
}

//Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true)
    {

    }
}

//---------------- 11 - Object ----------------
/*
declare function create(o: object | null) : void;

create({ prop: 0 }); //Ok
create(null); //Ok

create(42); //Error
create("string"); //Error
create(false); //Error
create(undefined); //Error
*/

//---------------- 11 - Type assertions ----------------
//Type assertions are a way to tell the compiler "trust me, I know what I'm doing."
//Type assertios have two forms.
//Form 01
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log("String length : " + strLength);

//Form 02 : use "as" syntax
// When using TypeScript with JSX, only "as" style assertions are allowed.
let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;
console.log("String length : " + strLength1 );