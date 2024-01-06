// Manipulation Methods:

// push(): Adds one or more elements to the end of an array and returns the new length of the array.
var fruits = ['apple', 'banana'];
var newLength = fruits.push('orange', 'grape');

console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']
console.log(newLength); // Output: 4

// pop(): Removes the last element from an array and returns that element.
var fruits = ['apple', 'banana', 'orange'];
var removedFruit = fruits.pop();

console.log(fruits); // Output: ['apple', 'banana']
console.log(removedFruit); // Output: 'orange'

// shift(): Removes the first element from an array and returns that element.
var fruits = ['apple', 'banana', 'orange'];
var removedFruit = fruits.shift();

console.log(fruits); // Output: ['banana', 'orange']
console.log(removedFruit); // Output: 'apple'

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
var fruits = ['banana', 'orange'];
var newLength = fruits.unshift('apple', 'grape');

console.log(fruits); // Output: ['apple', 'grape', 'banana', 'orange']
console.log(newLength); // Output: 4

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// Syntax :- array.splice(start, deleteCount, item1, item2, ...)[index];
var fruits = ['apple', 'banana', 'orange', 'grape'];
fruits.splice(1, 2, 'cherry', 'kiwi');
console.log(fruits); // Output: ['apple', 'cherry', 'kiwi', 'grape']
console.log(fruits.splice(1, 2, 'cherry', 'kiwi')[1]); //'orange'

// fill(): Fills all the elements in an array with a static value.
var numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 1, 3); // Fill with 0 from index 1 to 2 (exclusive)
console.log(numbers); // Output: [1, 0, 0, 4, 5]

// Iteration Methods:

// forEach(): Executes a provided function once for each array element.
var numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number * 2);
});
// Output:
// 2
// 4
// 6
// 8
// 10

// map(): Creates a new array by calling a provided function on every element in the calling array.
var numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
var numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// reduce(): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
var numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15

// reduceRight(): Similar to reduce(), but processes the array from right to left.
var numbers = [1, 2, 3, 4, 5];
const concatenatedString = numbers.reduceRight((accumulator, currentValue) => {
  return accumulator + currentValue;
}, '');
console.log(concatenatedString); // Output: "54321"

// Search and Query Methods:

// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if not present.
var fruits = ['apple', 'banana', 'orange', 'banana'];
const index = fruits.indexOf('banana');
console.log(index); // Output: 1

// lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if not present.
var fruits = ['apple', 'banana', 'orange', 'banana'];
var lastIndex = fruits.lastIndexOf('banana');
console.log(lastIndex); // Output: 3

// find(): Returns the first element in the array that satisfies a provided testing function.
var numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find((number) => {
  return number > 3;
});
console.log(foundNumber); // Output: 4

// findIndex(): Returns the index of the first element in the array that satisfies a provided testing function.
var numbers = [1, 2, 3, 4, 5];
const foundIndex = numbers.findIndex((number) => {
  return number > 3;
});
console.log(foundIndex); // Output: 3

// includes(): Determines whether an array contains a certain element.
var fruits = ['apple', 'banana', 'orange'];
const containsBanana = fruits.includes('banana');
const containsGrape = fruits.includes('grape');
console.log(containsBanana); // Output: true
console.log(containsGrape); // Output: false

// Transformation Methods:

// concat(): Combines two or more arrays and returns a new array.
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var combinedArray = array1.concat(array2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// slice(): Returns a shallow copy of a portion of an array into a new array object.
var fruits = ['apple', 'banana', 'orange', 'grape'];
const slicedFruits = fruits.slice(1, 3); // Extract from index 1 to 2 (exclusive)
console.log(slicedFruits); // Output: ['banana', 'orange']

// reverse(): Reverses the order of the elements in an array.
var numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

// sort(): Sorts the elements of an array in place and returns the sorted array.
var fruits = ['banana', 'apple', 'orange', 'grape'];
const sortedFruits = fruits.sort();
console.log(sortedFruits); // Output: ['apple', 'banana', 'grape', 'orange']

// Utility Methods:

// isArray(): Checks if a given value is an array.
const array = [1, 2, 3];
const notAnArray = 'string';
console.log(Array.isArray(array)); // Output: true
console.log(Array.isArray(notAnArray)); // Output: false

// join(): Joins all elements of an array into a string using a specified separator.
var fruits = ['apple', 'banana', 'orange'];
const joinedString = fruits.join(', ');
console.log(joinedString); // Output: 'apple, banana, orange'

// toString(): Returns a string representing the specified array and its elements.
var numbers = [1, 2, 3];
const arrayAsString = numbers.toString();
console.log(arrayAsString); // Output: '1, 2, 3'

// length: Property that provides the number of elements in an array.
var numbers = [1, 2, 3, 4, 5];
const arrayLength = numbers.length;
console.log(arrayLength); // Output: 5

// concatenate arrays with spread operator:
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// convert NodeList to Array with spread operator:
// var nodeList = document.querySelectorAll('p');
// const arrayFromNodeList = [...nodeList];
// console.log(arrayFromNodeList); // Output: Array of <p> elements

// Array.from():The Array.from() method creates a new array instance from an array-like or iterable object. It's especially useful for converting objects that are not arrays into arrays, such as NodeList objects returned by DOM queries or the arguments object within a function.
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
var newArray = Array.from(arrayLike); // Converts array-like to a new array
console.log(newArray); // Output: ['a', 'b', 'c']

// Array.of():The Array.of() method creates a new array instance with a variable number of arguments provided as elements for the array. This method is useful when you want to create an array with specific elements without needing to specify an array length.
var newArray = Array.of(1, 2, 3, 4, 5); // Creates a new array with the provided elements
console.log(newArray); // Output: [1, 2, 3, 4, 5]

// Array Testing Methods:

// every() Method:The every() method tests whether all elements in the array pass the provided testing function. It returns true if all elements pass the test, and false otherwise. The testing function is called with three arguments: the current element, the index of the current element, and the array itself.
var numbers = [1, 2, 3, 4, 5];
const allGreaterThanZero = numbers.every((number) => number > 0);
console.log(allGreaterThanZero); // Output: true

// some() Method:The some() method tests whether at least one element in the array passes the provided testing function. It returns true if at least one element passes the test, and false if none of the elements pass the test. Like every(), the testing function is also called with three arguments.
var numbers = [-1, 2, 3, -4, 5];
const hasPositiveNumber = numbers.some((number) => number > 0);
console.log(hasPositiveNumber); // Output: true

// Array Copy Methods:

// copyWithin()
// The copyWithin() method copies a sequence of array elements within the array to another position, overwriting the existing values. It takes three arguments:
// target (required): The index at which to start copying elements to. If negative, it is treated as array.length + target.
// start (optional): The index at which to start copying elements from. If negative, it is treated as array.length + start. If omitted, it defaults to 0.
// end (optional): The index at which to stop copying elements from (excluding the end index). If negative, it is treated as array.length + end. If omitted, it defaults to array.length.
var originalArray = [1, 2, 3, 4, 5];
// Copy elements from index 0 to index 3, overwriting elements starting at index 2
originalArray.copyWithin(2, 0, 3);
console.log(originalArray); // Output: [1, 2, 1, 2, 3]

// Array Iteration Methods (ES6+):

// entries():The entries() method returns a new array iterator that contains key/value pairs for each index in the array.
var fruits = ['apple', 'banana', 'cherry'];
for (const [index, fruit] of fruits.entries()) {
  console.log(`Index ${index}: ${fruit}`);
}
// Output:
// Index 0: apple
// Index 1: banana
// Index 2: cherry

// keys():The keys() method returns a new array iterator that contains the keys for each index in the array.
const colors = ['red', 'green', 'blue'];
for (const index of colors.keys()) {
  console.log(`Index: ${index}`);
}
// Output:
// Index: 0
// Index: 1
// Index: 2

// values():The values() method returns a new array iterator that contains the values for each index in the array.
var numbers = [10, 20, 30];
for (const number of numbers.values()) {
  console.log(`Number: ${number}`);
}
// Output:
// Number: 10
// Number: 20
// Number: 30

// These iteration methods are particularly useful when you need to access both the index and the value of each element in an array during iteration. They provide a cleaner and more readable syntax compared to using traditional for loops.
// Remember that these methods return iterators, so you can also use them with other iterator-related methods like next() to manually iterate through the elements. Here's an example using the entries() iterator:
const animals = ['cat', 'dog', 'elephant'];
const iterator = animals.entries();

let next = iterator.next();
while (!next.done) {
  const [index, animal] = next.value;
  console.log(`Index ${index}: ${animal}`);
  next = iterator.next();
}
// Output:
// Index 0: cat
// Index 1: dog
// Index 2: elephant

// Array Transformation (ES6+):

//flatMap() Method:The flatMap() method first maps each element using a mapping function and then flattens the result into a new array. It's useful when you want to map an array to another array and flatten the results in a single step.
var numbers = [1, 2, 3, 4];
const doubledAndSquared = numbers.flatMap((num) => [num * 2, num * num]);
console.log(doubledAndSquared); // Output: [2, 1, 4, 4, 6, 9, 8, 16]

// flat() Method:The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. It's useful for flattening nested arrays.
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// Array.from() with Mapping:The Array.from() method, when used with a mapping function, allows you to create a new array based on the input array and a mapping operation.
var originalArray = [1, 2, 3];
const mappedArray = Array.from(originalArray, (num) => num * 2);
console.log(mappedArray); // Output: [2, 4, 6]

// Array Prototype Methods (ES5):

// indexOf(): Returns the first index at which a given element is found in the array.
var fruits = ['apple', 'banana', 'orange', 'apple'];
console.log(fruits.indexOf('banana')); // 1
console.log(fruits.indexOf('grape')); // -1 (not found)

// lastIndexOf(): Returns the last index at which a given element is found in the array.
var fruits = ['apple', 'banana', 'orange', 'apple'];
console.log(fruits.lastIndexOf('apple')); // 3 (last index of 'apple')
console.log(fruits.lastIndexOf('grape')); // -1 (not found)

// toLocaleString(): Returns a string representing the elements of the array using locale-specific formatting.
var numbers = [1234.5678, 9876.5432, 123.456];
console.log(numbers.toLocaleString()); // "1,234.5678,9,876.5432,123.456"

// Other Methods:

// findLastIndex():findLastIndex() is used to find the index of the last element in the array that satisfies a given testing function.
var numbers = [10, 20, 30, 40, 50, 60];
var lastIndex = numbers.findLastIndex((num) => num > 30);
console.log(lastIndex); // Output: 5 (index of 60)

// isEqual():isEqual() is not a built-in JavaScript array method. However, it's often used to compare two arrays for equality.
function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
const array3 = [1, 2, 4];

console.log(isEqual(array1, array2)); // Output: true
console.log(isEqual(array1, array3)); // Output: false

// insert():insert() is not a built-in JavaScript array method. It can be used to insert an element at a specific index in the array.
function insert(arr, index, element) {
  arr.splice(index, 0, element);
}
var numbers = [1, 2, 3, 5, 6];
insert(numbers, 3, 4);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// remove():remove() is not a built-in JavaScript array method. It can be used to remove an element from a specific index in the array.
function remove(arr, index) {
  arr.splice(index, 1);
}
var numbers = [1, 2, 3, 4, 5, 6];
remove(numbers, 3);
console.log(numbers); // Output: [1, 2, 3, 5, 6]

// unique():unique() is not a built-in JavaScript array method. It can be used to remove duplicate elements from an array.
function unique(arr) {
  return [...new Set(arr)];
}

var numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const uniqueNumbers = unique(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]

// groupBy():groupBy() is not a built-in JavaScript array method. It's used to group elements of an array based on a specified key.
function groupBy(arr, keyFunction) {
  return arr.reduce((acc, element) => {
    const key = keyFunction(element);
    (acc[key] || (acc[key] = [])).push(element);
    return acc;
  }, {});
}
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 },
];
const groupedByAge = groupBy(people, (person) => person.age);
console.log(groupedByAge);
/*
Output:
{
    25: [{ name: 'Bob', age: 25 }],
    30: [
        { name: 'Alice', age: 30 },
        { name: 'Charlie', age: 30 }
    ]
}
*/

// orderBy():orderBy() is not a built-in JavaScript array method. It can be used to order an array of objects based on specified criteria.
function orderBy(arr, key) {
  return arr.slice().sort((a, b) => a[key] - b[key]);
}
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
];
const orderedByScore = orderBy(students, 'score');
console.log(orderedByScore);
/*
Output:
[
    { name: 'Charlie', score: 78 },
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 }
]
*/
