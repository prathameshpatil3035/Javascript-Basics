// Define the Developer class
class Developer {
  constructor(name) {
    this.name = name;
    this.type = "Developer";
  }

  say() {
    console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
  }
}

// Define the Tester class
class Tester {
  constructor(name) {
    this.name = name;
    this.type = "Tester";
  }

  say() {
    console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
  }
}

// Define the EmployeeFactory class
class EmployeeFactory {
  createEmployee(name, type) {
    switch (type) {
      case "Developer":
        return new Developer(name);
      case "Tester":
        return new Tester(name);
      default:
        throw new Error("Unknown employee type");
    }
  }
}

// Using the EmployeeFactory
const factory = new EmployeeFactory();

const employees = [];

// Create employees using the factory
employees.push(factory.createEmployee("Alice", "Developer"));
employees.push(factory.createEmployee("Bob", "Tester"));
employees.push(factory.createEmployee("Charlie", "Developer"));

// Each employee says their role
employees.forEach((emp) => emp.say());
