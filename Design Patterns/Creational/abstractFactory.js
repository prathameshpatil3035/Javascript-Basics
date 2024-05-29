// Abstract Products
class Dog {
  speak() {
    throw new Error("This method should be overridden!");
  }
}

class Cat {
  speak() {
    throw new Error("This method should be overridden!");
  }
}

// Concrete Products
class PetDog extends Dog {
  speak() {
    console.log("Woof! I am a pet dog.");
  }
}

class WildDog extends Dog {
  speak() {
    console.log("Roar! I am a wild dog.");
  }
}

class PetCat extends Cat {
  speak() {
    console.log("Meow! I am a pet cat.");
  }
}

class WildCat extends Cat {
  speak() {
    console.log("Growl! I am a wild cat.");
  }
}

// Abstract Factory
class AnimalFactory {
  createDog() {
    throw new Error("This method should be overridden!");
  }

  createCat() {
    throw new Error("This method should be overridden!");
  }
}

// Concrete Factories
class PetFactory extends AnimalFactory {
  createDog() {
    return new PetDog();
  }

  createCat() {
    return new PetCat();
  }
}

class WildFactory extends AnimalFactory {
  createDog() {
    return new WildDog();
  }

  createCat() {
    return new WildCat();
  }
}

// Client Code
function createAnimals(factory) {
  const dog = factory.createDog();
  const cat = factory.createCat();

  return { dog, cat };
}

const petFactory = new PetFactory();
const wildFactory = new WildFactory();

const petAnimals = createAnimals(petFactory);
const wildAnimals = createAnimals(wildFactory);

petAnimals.dog.speak(); // Output: Woof! I am a pet dog.
petAnimals.cat.speak(); // Output: Meow! I am a pet cat.

wildAnimals.dog.speak(); // Output: Roar! I am a wild dog.
wildAnimals.cat.speak(); // Output: Growl! I am a wild cat.
