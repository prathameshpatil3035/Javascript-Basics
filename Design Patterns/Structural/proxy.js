class ExpensiveObject {
  constructor() {
    this.data = this.heavyInitialization();
  }

  heavyInitialization() {
    console.log("Performing heavy initialization...");
    return { message: "Expensive Object Initialized" };
  }

  fetchData() {
    return this.data;
  }
}

class ExpensiveObjectProxy {
  constructor() {
    this.realSubject = null;
  }

  fetchData() {
    if (!this.realSubject) {
      this.realSubject = new ExpensiveObject();
    }
    return this.realSubject.fetchData();
  }
}

const proxy = new ExpensiveObjectProxy();
console.log("Proxy created, but real subject is not initialized yet.");

console.log(proxy.fetchData()); // Real subject is initialized here
console.log(proxy.fetchData()); // Uses the already initialized real subject
