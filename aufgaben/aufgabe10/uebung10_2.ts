/*
type numBool = number | boolean;
const add = (x: numBool, y: numBool) => {return typeof x === "number" && typeof y === "number" ? x + y : typeof x === "boolean" && typeof y === "boolean" ? (x && y):  false};
const equals = (x: numBool,y: numBool) => x===y;

console.log( add(1,2) );
console.log( add(true, true ) );
console.log( add(true, false ) );
const y = 1;
const x = y;
console.log( add(equals(x,y), equals(y,x)) );
*/

// provided solution
const add = (x: number|boolean,y: number|boolean) => x + y;
const equals = (x: number|boolean,y: number|boolean) => x===y;

console.log( add(1,2) );
console.log( add(true, true ) );
console.log( add(true, false ) );
const y = 1;
const x = 1;
console.log( add(equals(x,y), equals(y,x)) );
