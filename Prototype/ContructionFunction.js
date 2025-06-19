// Constructor Function kya hota hai?

// Constructor function ek template hota hai jisse hum multiple objects bana sakte hain.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Jab hum ise new keyword ke saath call karta hai, to JavaScript:
//  -> ek naya object banata hai,
//  -> this us object ko point karta hai
//  -> aur return bhi wahi object hota hai.


// new Keyword kya karta hai?
const p1 = new Person("Ravi", 24);
console.log(p1)

// new keyword ye kaam karta hai:
  // step :)   1. Ek empty object banata hai {}
            // 2. this ko uss naye object se bind karta hai
            // 3. Constructor function ko run karta hai
            // 4. Return karta hai woh naya object


// this Keyword ka kya  kaam?
// this ka matlab hota hai:
// 👉 "Abhi jis object ke andar hoon or newly created object like recently "

function Car(name) {
  this.name = name;
}

const myCar = new Car("BMW");
console.log(myCar.name); // Output: BMW

// Yahan this.name = name → myCar.name = "BMW" ban gaya.

// ==========================================================================

// Galti: Jab new NAHI use karte
// Agar tu constructor function ko bina new ke call kare:

const p2 = Person("Amit"); // ❌ Galti
// To this global object ko refer karta hai (browser me window) — aur koi naya object return nahi hota. 
// Isse bug aate hain.

// ✅ Solution: throw + new.target use karo
// 🔥 Example: Constructor me throw Error



function Person(name) {
  if (!new.target) {
    throw new Error("Constructor must be called with 'new'");
  }
  this.name = name;
}

const p1 = new Person("Ravi"); // ✅ Works

const p2 = Person("Amit");     // ❌ Error: Constructor must be called with 'new'

// 🧠 new.target kya hai?

// Agar function new ke saath call kiya gaya hai → new.target truthy hota hai

// Bina new ke → new.target undefined hota hai

//============= practice  ===============

function Book(title, author) {
  if (!new.target) {
    throw new Error("Please use 'new' to create a Book");
  }
  this.title = title;
  this.author = author;
}


const b1 = new Book("Clean Code", "Robert Martin"); // ✅
const b2 = Book("Atomic Habits", "James Clear");    // ❌ Error