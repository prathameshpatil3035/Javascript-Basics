// Math.abs(x): Returns the absolute value of a number.
var num = -5;
let absoluteValue = Math.abs(num); // absoluteValue will be 5

// Math.ceil(x): Rounds a number up to the nearest integer.
var num = 4.3;
let roundedUp = Math.ceil(num); // roundedUp will be 5

// Math.floor(x): Rounds a number down to the nearest integer.
let num = 4.9;
let roundedDown = Math.floor(num); // roundedDown will be 4

// Math.round(x): Rounds a number to the nearest integer.
let num = 4.6;
let rounded = Math.round(num); // rounded will be 5

// Math.random(): Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
let randomNum = Math.random(); // randomNum will be a random value between 0 and 1

//Random number between a yo b
// const randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;
//Random number between 50 to 100
const randomNumber = Math.floor(Math.random() * 51) + 50;
console.log(randomNumber);

// Math.trunc(x): Removes the decimal part of a number and returns the integer part.
let num = 7.9;
let truncated = Math.trunc(num); // truncated will be 7

// Math.max(x, y, ...): Returns the largest number among the given values.
let maxNumber = Math.max(5, 8, 2, 10); // maxNumber will be 10

// Math.min(x, y, ...): Returns the smallest number among the given values.
let minNumber = Math.min(5, 8, 2, 10); // minNumber will be 2

// Math.pow(x, y): Returns x raised to the power of y.
var result = Math.pow(2, 3); // result will be 8

// let result = Math.pow(2, 3); // result will be 8
let squareRoot = Math.sqrt(9); // squareRoot will be 3

// Math.PI: Represents the mathematical constant π (pi).
let piValue = Math.PI; // piValue will be approximately 3.14159

// Math.sin(x), Math.cos(x), Math.tan(x): Trigonometric functions for sine, cosine, and tangent calculations (in radians).
let angle = Math.PI / 4;
let sineValue = Math.sin(angle);
let cosineValue = Math.cos(angle);
let tangentValue = Math.tan(angle);

// Math.log(x), Math.log10(x), Math.log2(x): Logarithmic functions for natural logarithm, base 10 logarithm, and base 2 logarithm.
let num = 10;
let naturalLog = Math.log(num);
let logBase10 = Math.log10(num);
let logBase2 = Math.log2(num);

// Math.exp(x): Returns e raised to the power of x.
var result = Math.exp(2); // result will be approximately 7.389

//Other:

// Math.hypot(x, y, ...): Returns the square root of the sum of the squares of its arguments.
let hypotenuse = Math.hypot(3, 4); // hypotenuse will be 5

// Math.sign(x): Returns the sign of a number (1 for positive, -1 for negative, 0 for zero).
let positive = Math.sign(5); // positive will be 1
let negative = Math.sign(-5); // negative will be -1
let zero = Math.sign(0); // zero will be 0
