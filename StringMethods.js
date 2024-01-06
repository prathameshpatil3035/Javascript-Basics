var str1 = "I";
var str2 = "ate";
var str3 = str1 + str2 + "an" + "apple";
console.log(str3); // Output: "I ate an apple"

// 1.charAt(index): Returns the character at the specified index of a string.
var str = "Hello, World!";
var char = str.charAt(7); // Returns the character at index 7, which is 'W'
console.log(char); // Output: "W"

// 2.charCodeAt(index): Returns the Unicode value (integer representation) of the character at the specified index.
var str = "Hello";
var unicodeValue = str.charCodeAt(0); // Returns the Unicode value of 'H', which is 72
console.log(unicodeValue); // Output: 72

// 3.concat(str1, str2, ...): Combines two or more strings and returns a new string.
var str1 = "Hello, ";
var str2 = "World!";
const combined = str1.concat(str2); // Combines the two strings
console.log(combined); // Output: "Hello, World!"

// 4.includes(searchStr, position): Checks if a string contains the specified substring. Returns true if found, false otherwise.
const str = "Hello, World!";
const containsHello = str.includes("Hello"); // Checks if "Hello" is in the string
console.log(containsHello); // Output: true

// 5.startsWith(searchStr, position): Checks if a string starts with the specified substring. Returns true if it does, false otherwise.
const str = "Hello, World!";
const startsWithHello = str.startsWith("Hello"); // Checks if the string starts with "Hello"
console.log(startsWithHello); // Output: true

// 6.endsWith(searchStr, length): Checks if a string ends with the specified substring. Returns true if it does, false otherwise.
const str = "Hello, World!";
const endsWithWorld = str.endsWith("World!"); // Checks if the string ends with "World!"
console.log(endsWithWorld); // Output: true

// 7.indexOf(searchStr, position): Returns the index of the first occurrence of a substring within a string. If not found, it returns -1.
const str = "Hello, World!";
const indexOfWorld = str.indexOf("World"); // Returns the index of "World", which is 7
console.log(indexOfWorld); // Output: 7

// 8.lastIndexOf(searchStr, position): Returns the index of the last occurrence of a substring within a string. If not found, it returns -1.
const str = "Hello, World!";
const lastIndexOfl = str.lastIndexOf("l"); // Returns the index of the last "l", which is 10
console.log(lastIndexOfl); // Output: 10

// 9.localeCompare(compareStr, locales, options): Compares two strings based on the locale and returns a value indicating their relative order.
const str1 = "apple";
const str2 = "banana";
const comparison = str1.localeCompare(str2); // Compares "apple" and "banana"
console.log(comparison); // Output: -1 (indicating that "apple" comes before "banana")

// 10.match(regexp): Searches a string for a match against a regular expression and returns an array of matches.
const str = "Hello, 123 World! 456";
const matches = str.match(/\d+/g); // Matches sequences of digits
console.log(matches); // Output: ["123", "456"]

// 11.replace(searchValue/regexp, replaceValue): Searches a string for a specified value or regular expression and replaces it with another value.
const str = "Hello, World!";
const replaced = str.replace("World", "Universe"); // Replaces "World" with "Universe"
console.log(replaced); // Output: "Hello, Universe!"

// 12.search(regexp): Searches a string for a specified value using a regular expression and returns the index of the first occurrence. If not found, it returns -1.
const str = "Hello, World!";
const searchIndex = str.search(/World/); // Searches for "World" and returns the index, which is 7
console.log(searchIndex); // Output: 7

// 13.slice(startIndex, endIndex): Extracts a section of a string and returns a new string from startIndex up to, but not including, endIndex.
const str = "Hello, World!";
const sliced = str.slice(7, 12); // Extracts characters from index 7 to 11 (not including 12)
console.log(sliced); // Output: "World"

// 14.split(separator, limit): Splits a string into an array of substrings based on a separator. The limit parameter can be used to limit the number of splits.
const str = "apple,banana,grape";
const splitArray = str.split(","); // Splits the string at commas
console.log(splitArray); // Output: ["apple", "banana", "grape"]

// 15.join(separator): Joins all strings in an array using given seperator
const array = ["apple", "banana", "orange"];

// Using join to concatenate array elements with a comma as a separator
const resultString = array.join(", ");

console.log(resultString);
// Output: 'apple, banana, orange'

// 16.substr(startIndex, length): Returns a substring starting from a specified startIndex and of a specified length.
const str = "Hello, World!";
var substring = str.substr(7, 5); // Starts from index 7 and takes 5 characters
console.log(substring); // Output: "World"

// 17.substring(startIndex, endIndex): Returns a substring between the specified startIndex and endIndex. The characters up to, but not including, endIndex are included in the substring.
const str = "Hello, World!";
const substring = str.substring(7, 12); // Returns characters from index 7 to 11
console.log(substring); // Output: "World"

// 18.toLocaleLowerCase(): Converts a string to lowercase based on the host's locale.
const str = "Hello, World!";
var lowercase = str.toLocaleLowerCase();
console.log(lowercase); // Output: "hello, world!" (actual output depends on the locale)

// 19.toLocaleUpperCase(): Converts a string to uppercase based on the host's locale
const str = "Hello, World!";
var uppercase = str.toLocaleUpperCase();
console.log(uppercase); // Output: "HELLO, WORLD!" (actual output depends on the locale)

// 20.toLowerCase(): Converts a string to lowercase.
const str = "Hello, World!";
const lowercase = str.toLowerCase();
console.log(lowercase); // Output: "hello, world!"

// 21.toUpperCase(): Converts a string to uppercase.
const str = "Hello, World!";
const uppercase = str.toUpperCase();
console.log(uppercase); // Output: "HELLO, WORLD!"

// 22.trim(): Removes whitespace characters from both the beginning and the end of a string.
const str = "   Hello, World!   ";
const trimmed = str.trim();
console.log(trimmed); // Output: "Hello, World!"

// 23.trimStart() or trimLeft(): Removes whitespace characters from the beginning of a string.
const str = "   Hello, World!   ";
const trimmedStart = str.trimStart();
console.log(trimmedStart); // Output: "Hello, World!   "

// 24.trimEnd() or trimRight(): Removes whitespace characters from the end of a string.
const str = "   Hello, World!   ";
const trimmedEnd = str.trimEnd();
console.log(trimmedEnd); // Output: "   Hello, World!"

// 25.valueOf(): Returns the primitive value of a string object.
const strObject = new String("Hello, World!");
const primitiveValue = strObject.valueOf();
console.log(primitiveValue); // Output: "Hello, World!"

// 26.matchAll(regexp): The matchAll() method is used to search a string for all occurrences of a regular expression pattern and returns an iterator of match results. This is particularly useful when you want to extract multiple matches from a string and retrieve information about each match.
const text = "Hello, my name is John. Hello, my name is Jane.";
const pattern = /Hello, my name is (\w+)/g;

const matches1 = [...text.matchAll(pattern)];
for (const match of matches1) {
  console.log(`Name: ${match[1]}`);
}

// 26.replaceAll(searchValue/regexp, replaceValue): The replaceAll() method is used to replace all occurrences of a substring or a regular expression pattern in a string with a specified replacement value. This method provides a convenient way to perform global replacement without using a loop or regular expressions with the /g flag.
const text1 = "Hello, my name is John. Hello, my name is Jane.";
const newName = "Alice";

const newText = text1.replaceAll("John", newName);
console.log(newText);
