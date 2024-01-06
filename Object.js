// Sample object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

// Object.keys(obj)
const keys = Object.keys(person);
console.log('Object.keys:', keys);
// Output: ['firstName', 'lastName', 'age']
// Syntax: Object.keys(obj)
// Return: An array containing the property names of the object.

// Object.values(obj)
const values = Object.values(person);
console.log('Object.values:', values);
// Output: ['John', 'Doe', 30]
// Syntax: Object.values(obj)
// Return: An array containing the property values of the object.

// Object.entries(obj)
const myObject = { a: 10, b: 20, c: 30 };
const entries = Object.entries(myObject);
console.log('Object.entries:', entries);
// Output: [ ['a', 10], ['b', 20], ['c', 30] ]
// Syntax: Object.entries(obj)
// Return: An array containing [key, value] pairs of the object's enumerable properties.

// Object.fromEntries(array of arrays)
const entriesArray = [
  ['a', 10],
  ['b', 20],
  ['c', 30],
];
const myObjectFromEntries = Object.fromEntries(entriesArray);
console.log('Object.fromEntries:', myObjectFromEntries);
// Output: { a: 10, b: 20, c: 30 }
// Syntax: Object.fromEntries(iterable)
// Return: An object created from the given iterable of [key, value] pairs.

// Object.assign(target, ...sources)
const newInfo = { job: 'Engineer', country: 'USA' };
const mergedPerson = Object.assign({}, person, newInfo);
console.log('Object.assign:', mergedPerson);
// Output: { firstName: 'John', lastName: 'Doe', age: 30, job: 'Engineer', country: 'USA' }
// Syntax: Object.assign(target, ...sources)
// Return: The modified target object after copying properties from sources.

// Object.getOwnPropertyDescriptor(obj, prop)
const propertyDescriptor = Object.getOwnPropertyDescriptor(person, 'age');
console.log('Object.getOwnPropertyDescriptor:', propertyDescriptor);
// Output: { value: 30, writable: true, enumerable: true, configurable: true }
// Syntax: Object.getOwnPropertyDescriptor(obj, prop)
// Return: The property descriptor of the specified property.

// Object.defineProperties(obj, props)
const propertyDescriptorsObject = {
  address: {
    value: '123 Main St',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  email: {
    value: 'john@example.com',
    writable: true,
    enumerable: true,
    configurable: true,
  },
};
Object.defineProperties(person, propertyDescriptorsObject);
console.log('Object.defineProperties:', person);
// Output: { firstName: 'John', lastName: 'Doe', age: 30, address: '123 Main St', email: 'john@example.com' }
// Syntax: Object.defineProperties(obj, props)
// Return: The modified object after defining new properties or modifying existing ones.

// Object.create(proto, [propertiesObject])
const newPersonObject = Object.create(person);
newPersonObject.firstName = 'Alice';
console.log('Object.create:', newPersonObject);
// Output: { firstName: 'Alice' }
// Syntax: Object.create(proto, [propertiesObject])
// Return: A new object with the specified prototype and optional properties.

// Object.seal(obj)
const sealedPerson = Object.seal(person);
person.age = 31; // Allowed
person.gender = 'Male'; // Not allowed
console.log('Object.seal:', sealedPerson);
// Output: { firstName: 'John', lastName: 'Doe', age: 31 }
// Syntax: Object.seal(obj)
// Return: The sealed object (the same object that was passed).

// Object.freeze(obj)
const frozenPerson = Object.freeze(person);
person.firstName = 'Jane'; // Not allowed
console.log('Object.freeze:', frozenPerson);
// Output: { firstName: 'John', lastName: 'Doe', age: 31 }
// Syntax: Object.freeze(obj)
// Return: The frozen object (the same object that was passed).

// Object.preventExtensions(obj)
const extendedPerson = Object.preventExtensions(person);
person.height = 180; // Not allowed
console.log('Object.preventExtensions:', extendedPerson);
// Output: { firstName: 'John', lastName: 'Doe', age: 31 }
// Syntax: Object.preventExtensions(obj)
// Return: The object that has been made non-extensible (the same object that was passed).

// Object.is(value1, value2)
const result = Object.is(5, '5');
console.log('Object.is:', result);
// Output: false
// Syntax: Object.is(value1, value2)
// Return: A boolean indicating whether the two values are the same.

// Object.getOwnPropertyNames(obj)
const propertyNames = Object.getOwnPropertyNames(person);
console.log('Object.getOwnPropertyNames:', propertyNames);
// Output: ['firstName', 'lastName', 'age', 'address', 'email']
// Syntax: Object.getOwnPropertyNames(obj)
// Return: An array of all property names (enumerable or not) of the given object.

// Object.getPrototypeOf(obj)
const prototype = Object.getPrototypeOf(person);
console.log('Object.getPrototypeOf:', prototype);
// Output: {}
// Syntax: Object.getPrototypeOf(obj)
// Return: The prototype of the specified object.

// Object.setPrototypeOf(obj, prototype)
const newPrototype = { gender: 'Female' };
Object.setPrototypeOf(person, newPrototype);
console.log('Object.setPrototypeOf:', person);
// Output: { firstName: 'John', lastName: 'Doe', age: 31, address: '123 Main St', email: 'john@example.com', gender: 'Female' }
// Syntax: Object.setPrototypeOf(obj, prototype)
// Return: The modified object after setting its prototype.

// obj.hasOwnProperty(prop)
const hasFirstName = person.hasOwnProperty('firstName');
console.log('obj.hasOwnProperty:', hasFirstName);
// Output: true
// Syntax: obj.hasOwnProperty(prop)
// Return: A boolean indicating whether the object has the specified property.

// obj.propertyIsEnumerable(prop)
const enumerableAge = person.propertyIsEnumerable('age');
console.log('obj.propertyIsEnumerable:', enumerableAge);
// Output: true
// Syntax: obj.propertyIsEnumerable(prop)
// Return: A boolean indicating whether the specified property is enumerable.

// obj.toString()
const toStringResult = person.toString();
console.log('obj.toString:', toStringResult);
// Output: [object Object]
// Syntax: obj.toString()
// Return: A string representing the object.

// obj.valueOf()
const valueOfResult = person.valueOf();
console.log('obj.valueOf:', valueOfResult);
// Output: { firstName: 'John', lastName: 'Doe', age: 31, address: '123 Main St', email: 'john@example.com', gender: 'Female' }
// Syntax: obj.valueOf()
// Return: The primitive value of the object.

// JSON.stringify(obj[, replacer[, space]])
const jsonString = JSON.stringify(person, null, 2);
console.log('JSON.stringify:', jsonString);
// Output: {"firstName":"John","lastName":"Doe","age":31,"address":"123 Main St","email":"john@example.com","gender":"Female"}
// Syntax: JSON.stringify(obj[, replacer[, space]])
// Return: A JSON string representing the object.

// JSON.parse(text[, reviver])
const parsedObject = JSON.parse(jsonString);
console.log('JSON.parse:', parsedObject);
// Output: { firstName: 'John', lastName: 'Doe', age: 31, address: '123 Main St', email: 'john@example.com', gender: 'Female' }
// Syntax: JSON.parse(text[, reviver])
// Return: The JavaScript object represented by the given JSON string.

// Object.defineProperty(obj, prop, descriptor)
Object.defineProperty(newPersonObject, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  enumerable: true,
});
console.log('Object.defineProperty:', newPersonObject.fullName);
// Output: Alice undefined
// Syntax: Object.defineProperty(obj, prop, descriptor)
// Return: The modified object after defining the new property.

// Object.defineProperties(obj, props)
Object.defineProperties(newPersonObject, {
  canVote: {
    get() {
      return this.age >= 18;
    },
    enumerable: true,
  },
  greet: {
    value() {
      return `Hello, my name is ${this.fullName}`;
    },
    enumerable: true,
  },
});
console.log(
  'Object.defineProperties:',
  newPersonObject.canVote,
  newPersonObject.greet()
);
// Output: false Hello, my name is Alice undefined
// Syntax: Object.defineProperties(obj, props)
// Return: The modified object after defining new properties.

// Object.create(proto, [propertiesObject])
const newerPersonObject = Object.create(newPersonObject);
newerPersonObject.firstName = 'Emily';
newerPersonObject.age = 25;
console.log('Object.create:', newerPersonObject);
// Output: { firstName: 'Emily', age: 25 }
// Syntax: Object.create(proto, [propertiesObject])
// Return: A new object with the specified prototype and optional properties.

// Check if an object is extensible
const isExtensible = Object.isExtensible(newPersonObject);
console.log('Object.isExtensible:', isExtensible);
// Output: true
// Syntax: Object.isExtensible(obj)
// Return: A boolean indicating whether the object is extensible.

// Get own property symbols of an object
const symbol1 = Symbol('symbol1');
const symbol2 = Symbol('symbol2');
newPersonObject[symbol1] = 'Value for symbol1';
newPersonObject[symbol2] = 'Value for symbol2';
const ownSymbolProperties = Object.getOwnPropertySymbols(newPersonObject);
console.log('Object.getOwnPropertySymbols:', ownSymbolProperties);
// Output: [Symbol(symbol1), Symbol(symbol2)]
// Syntax: Object.getOwnPropertySymbols(obj)
// Return: An array of the object's own symbol properties.

// Get own property descriptors of an object
const propertyDescriptorsNewPerson =
  Object.getOwnPropertyDescriptors(newPersonObject);
console.log('Object.getOwnPropertyDescriptors:', propertyDescriptorsNewPerson);
// Output:
// {
//   firstName: { value: 'Alice', writable: true, enumerable: true, configurable: true },
//   fullName: { get: [Function: get], set: undefined, enumerable: true, configurable: true },
//   canVote: { get: [Function: get], set: undefined, enumerable: true, configurable: true },
//   greet: { value: [Function: value], writable: true, enumerable: true, configurable: true },
//   age: { value: 25, writable: true, enumerable: true, configurable: true }
// }
// Syntax: Object.getOwnPropertyDescriptors(obj)
// Return: An object containing property descriptors for all own properties of the object.

// Clone an object with properties descriptors
const clonedPerson = Object.defineProperties({}, propertyDescriptorsNewPerson);
console.log('Cloned Object with Property Descriptors:', clonedPerson);
// Output: { firstName: 'Alice', fullName: 'Alice undefined', canVote: false, greet: [Function: value], age: 25 }
// Syntax: Object.defineProperties(target, propertyDescriptors)
// Return: The modified target object after defining properties using property descriptors.
