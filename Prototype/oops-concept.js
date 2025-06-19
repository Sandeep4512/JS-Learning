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
