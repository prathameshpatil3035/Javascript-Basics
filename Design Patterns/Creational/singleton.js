class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  static getInstance() {
    return Singleton.instance || new Singleton();
  }

  // Add other methods and properties here
}

// Usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output: true
