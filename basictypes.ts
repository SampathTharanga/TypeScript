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
