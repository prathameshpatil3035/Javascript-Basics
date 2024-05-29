// Define the Person class
class Person {
  constructor(name, height, weight, gender) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
  }

  // Method to display person details
  showDetails() {
    console.log(
      `Person Details: Name: ${this.name}, Height: ${this.height} cm, Weight: ${this.weight} kg, Gender: ${this.gender}`
    );
  }

  // Clone method to create a new Person instance with the same properties
  clone() {
    return new Person(this.name, this.height, this.weight, this.gender);
  }
}

// Create an instance of Person
var originalPerson = new Person("Alice", 170, 65, "Female");

// Clone the original person
const clonedPerson = originalPerson.clone();

// Display details of both original and cloned persons
originalPerson.showDetails(); // Output: Person Details: Name: Alice, Height: 170 cm, Weight: 65 kg, Gender: Female
clonedPerson.showDetails(); // Output: Person Details: Name: Alice, Height: 170 cm, Weight: 65 kg, Gender: Female

// Modify the cloned person
clonedPerson.name = "Bob";
clonedPerson.height = 180;

// Display details again after modification
originalPerson.showDetails(); // Output: Person Details: Name: Alice, Height: 170 cm, Weight: 65 kg, Gender: Female
clonedPerson.showDetails(); // Output: Person Details: Name: Bob, Height: 180 cm, Weight: 65 kg, Gender: Female

// Using function

//1

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.clone = function () {
  return new Person(this.name, this.age, this.gender);
};

Person.prototype.sayDetails = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
};

// Create an instance of Person
var originalPerson = new Person("Alice", 30, "Female");

// Clone the original person
const clonedPerson = originalPerson.clone();

// Display details of both original and cloned persons
originalPerson.sayDetails(); // Output: Name: Alice, Age: 30, Gender: Female
clonedPerson.sayDetails(); // Output: Name: Alice, Age: 30, Gender: Female

// Modify the cloned person
clonedPerson.name = "Bob";
clonedPerson.age = 25;

// Display details again after modification
originalPerson.sayDetails(); // Output: Name: Alice, Age: 30, Gender: Female
clonedPerson.sayDetails(); // Output: Name: Bob, Age: 25, Gender: Male

//2
const personPrototype = {
  sayDetails: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
  },
  clone: function () {
    return Object.create(this);
  },
};

// Create an instance of personPrototype
var originalPerson = Object.create(personPrototype);
originalPerson.name = "Alice";
originalPerson.age = 30;
originalPerson.gender = "Female";

// Clone the original person
const clonedPerson = originalPerson.clone();

// Display details of both original and cloned persons
originalPerson.sayDetails(); // Output: Name: Alice, Age: 30, Gender: Female
clonedPerson.sayDetails(); // Output: Name: Alice, Age: 30, Gender: Female

// Modify the cloned person
clonedPerson.name = "Bob";
clonedPerson.age = 25;

// Display details again after modification
originalPerson.sayDetails(); // Output: Name: Alice, Age: 30, Gender: Female
clonedPerson.sayDetails(); // Output: Name: Bob, Age: 25, Gender: Male
