class Person {
  constructor(name, height, weight, gender) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
  }

  showDetails() {
    console.log(
      `Person Details: Name: ${this.name}, Height: ${this.height} cm, Weight: ${this.weight} kg, Gender: ${this.gender}`
    );
  }
}

class PersonBuilder {
  constructor() {
    this.name = "";
    this.height = 0;
    this.weight = 0;
    this.gender = "";
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }

  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  setGender(gender) {
    this.gender = gender;
    return this;
  }

  build() {
    return new Person(this.name, this.height, this.weight, this.gender);
  }
}

const personBuilder = new PersonBuilder();

const person = personBuilder
  .setName("Alice")
  .setHeight(170)
  .setWeight(65)
  .setGender("Female")
  .build();

person.showDetails(); // Output: Person Details: Name: Alice, Height: 170 cm, Weight: 65 kg, Gender: Female

// Another Example:

class Car {
  constructor() {
    this.make = "";
    this.model = "";
    this.year = 0;
    this.color = "";
    this.engine = "";
    this.transmission = "";
  }

  showDetails() {
    console.log(
      `Car Details: ${this.make} ${this.model} (${this.year}), ${this.color}, ${this.engine}, ${this.transmission}`
    );
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setMake(make) {
    this.car.make = make;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setTransmission(transmission) {
    this.car.transmission = transmission;
    return this;
  }

  build() {
    return this.car;
  }
}

const carBuilder = new CarBuilder();

const myCar = carBuilder
  .setMake("Tesla")
  .setModel("Model S")
  .setYear(2021)
  .setColor("Red")
  .setEngine("Electric")
  .setTransmission("Automatic")
  .build();

myCar.showDetails(); // Output: Car Details: Tesla Model S (2021), Red, Electric, Automatic
