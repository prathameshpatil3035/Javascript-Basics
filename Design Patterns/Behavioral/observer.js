class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received data: ${data}`);
  }
}

// Create a subject
const subject = new Subject();

// Create observers
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

// Add observers to the subject
subject.addObserver(observer1);
subject.addObserver(observer2);

// Notify observers with some data
subject.notifyObservers("Hello Observers!");

// Output:
// Observer 1 received data: Hello Observers!
// Observer 2 received data: Hello Observers!
