/**
 * 
 *  We can also use the --watch option to automatically compile a TypeScript file when changes are made:
 * 
 * 
 * 
 *    RESORCES:
 *      https://www.typescriptlang.org/docs/handbook/interfaces.html
 */

 //Our first interface
 function printLabel1(labelledObj: { label: string }) {
     console.log(labelledObj.label);
 }

 let myObj1 = { size:10, label: "Size 10 Object" };
 printLabel1(myObj1);

 //Same example
 interface LabelledValue{
     label: string;
 }

 function printLabel2(labelledObj: LabelledValue) {
     console.log(labelledObj.label);
 }

 let myObj2 = { size: 10, label: "Size 10 Object" };
 printLabel2(myObj2);

 //Optional Properties
 //optional property denoted by a ? at the end of the property name in the declaration.
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare (config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });


//Readonly properties
interface Point {
    readonly x: number; //x and y can’t be changed.
    readonly y: number; //x and y can’t be changed.
}

let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // error!

//TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T>
//so you can make sure you don’t change your arrays after creation:
let a2: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a2;
//ro [0] = 12; //error!
//ro.push(5); //error!
//ro.length = 100; //error!
//a = ro; //error!

//On the last line of the snippet you can see that even assigning the entire ReadonlyArray back to a normal array is illegal.
//You can still override it with a type assertion, though:
a2 = ro as number[];


/**
 *      readonly vs const
 */
//Variables use const whereas properties use readonly.


/*
    Excess Property Checks
*/
/*
interface SquareConfig1{
    color?: string;
    width?: number;
}

function createSquare1(config1: SquareConfig1): { color: string; area: number } {

    //...
}

let mySquare1 = createSquare1({ colour: "red", with:100 }); // error: 'colour' not expected in type 'SquareConfig'

let mySquare1 = createSqure1({ width: 100, opacity: 0.5 } as SquareConfig1 );
*/

/**
 *          Function Type
 */


 interface SearchFunc {
    (source: string, subString: string): boolean;
 }
/*
 let mySearch: SearchFunc;
 mySearch = function(source: string, subString: string) {
     let result = source.search(subString);
     return result > -1;
 }

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string): boolean {
    let result = source.search(subString);
    return result > -1;
}
*/

let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

/**
 *      Indexable Types
 */
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];


/*
class Animal{
    name: string;
}
class Dog extends Animal {
    breed: string;
}

//Error: indexing with a numeric  string might get you a completely separeate type of Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}
*/

/*
interface NumberDictionary {
    [index: string]: number;
    length: number;  // ok, length is a number
    name: string;    // error, the type of 'name' is not a subtype of the indexer
}
*/


interface ReadonlyStringArray{
    readonly [index: number]: string;
}
let myArray1: ReadonlyStringArray = ["Alice", "Bob"];
//myArray1[2] = "Mallory"; //error!


/**
 *          Class Types
 */
// Implementing an interface

/*
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
*/

/*
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
*/

//Diffrent between the static and instance of Class
/*
interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
*/
