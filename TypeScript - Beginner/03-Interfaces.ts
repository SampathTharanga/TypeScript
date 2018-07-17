/**
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