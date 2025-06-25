//oops (object oriented programimg language ) 

// Object kya hota hai?
// 🔸 Definition:
// Object matlab: real world cheez jisme data aur behavior dono ho.

// Object Literal 
const person = {
  name: "Ravi",
  age: 25,
  speak: function() {
    console.log("Hello! I'm " + this.name);
  }
};

person.speak(); // Hello! I'm Ravi
// --------------------------------------------------------------------
// contructor function 
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.talk = function() {
    console.log("Hi, I’m " + this.name);
  };
}

const p1 = new Person("Neha", 22);
p1.talk(); // Hi, I’m Neha

// -------------------------------------------
//   this keyword kya karta hai?
// this refers to current object jisme method run ho raha hai.

const car = {
  brand: "BMW",
  show() {
    console.log(this.brand);
  }
};

car.show(); // BMW




// Class (ES6 se aaya)

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    talk() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const user = new Person("Aman", 28);
user.talk(); // Hello, my name is Aman

// --------------------------------------
//  Inheritance – Ek object ya class doosre ke properties/methods inherit (le) karta hai.

// ✅ Syntax (Class-based inheritance):

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}

const d = new Dog("Tommy");
d.speak(); // Tommy makes a sound (from Animal)
d.bark();  // Tommy barks         (from Dog)

// ✅ Inheritance using Function Constructor (Old way)

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};

function Dog(name) {
  Animal.call(this, name); // super
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
  console.log(`${this.name} barks`);
};

const dog = new Dog("Bruno");
dog.speak(); // Bruno makes a sound
dog.bark();  // Bruno barks

// ====================================================================================



// Encapsulation – Data ko hide karna, protect karna, aur control ke through access dena

// ✅ JavaScript me Encapsulation kaise hota hai?
// JavaScript me private properties banane ke liye # ka use hota hai:

class BankAccount {
  #balance = 0; // private field

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ₹${amount}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount("Aman");
acc.deposit(5000);
console.log(acc.getBalance()); // ✅ 5000
// console.log(acc.#balance);     // ❌ SyntaxError: Private field

// -------------------------------------------------------------------------------------

// ✅ JavaScript me abstraction kaise achieve karte hain?
// 1. Methods se logic chhupake
// 2. Private properties (#) + Public methods



class Laptop {
  #powerOn() {
    console.log("Booting system...");
  }

  start() {
    this.#powerOn(); // user can't directly access
    console.log("Welcome to your desktop");
  }
}

const myLaptop = new Laptop();
myLaptop.start();      // ✅ works
// myLaptop.#powerOn(); // ❌ Error: Private method

// ========================================================================================

// polymorephism   

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks 🐶");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows 🐱");
  }
}

const a1 = new Animal();
const d1 = new Dog();
const c1 = new Cat();

a1.speak(); // Animal speaks
d1.speak(); // Dog barks 🐶
c1.speak(); // Cat meows 🐱


// ----------------------------------------------------------------

// 🔧 Getter & Setter in JavaScript
// Kisi object ke properties ko access aur update karne ke safe aur controlled tarike hote hain:


class Person {
  constructor(name) {
    this._name = name; // private-like convention (underscore)
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("❌ Name cannot be empty");
    }
  }
}

const p3 = new Person("Ravi");

console.log(p1.name);    // ✅ Ravi  (uses getter)
p1.name = "Aman";        // ✅ set to Aman (uses setter)
console.log(p1.name);    // Aman

p1.name = "";            // ❌ Error handled by setter


// Easy Real-Life Analogy:
// Tu fridge ka gate open karke cold drink nikalta hai = getter
// Tu fridge me bottle wapas daalta hai = setter

// Fridge ke andar kya temperature set hai ya kaise chal raha hai, tujhe pata nahi — woh internal hai (encapsulation + abstraction).