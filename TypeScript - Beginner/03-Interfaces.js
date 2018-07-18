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
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
var myObj1 = { size: 10, label: "Size 10 Object" };
printLabel1(myObj1);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
var myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj2);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var p1 = { x: 10, y: 20 };
//p1.x = 5; // error!
//TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T>
//so you can make sure you don’t change your arrays after creation:
var a2 = [1, 2, 3, 4];
var ro = a2;
//ro [0] = 12; //error!
//ro.push(5); //error!
//ro.length = 100; //error!
//a = ro; //error!
//On the last line of the snippet you can see that even assigning the entire ReadonlyArray back to a normal array is illegal.
//You can still override it with a type assertion, though:
a2 = ro;
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
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var myArray1 = ["Alice", "Bob"];
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
