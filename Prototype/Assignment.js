class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    
  }
  getdetails(){
        return ` Make : ${this.make} , Model: ${this.model} `
    }
}

class Car extends Vehicle {
    StartEngine(){
         return ` Engine Started `
    }
}
