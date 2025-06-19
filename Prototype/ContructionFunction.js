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
// 👉 "Abhi jis object ke andar hoon"

function Car(name) {
  this.name = name;
}

const myCar = new Car("BMW");
console.log(myCar.name); // Output: BMW

// Yahan this.name = name → myCar.name = "BMW" ban gaya.

