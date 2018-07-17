/**
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
/**
 *      readonly vs const
 */
//Variables use const whereas properties use readonly.
