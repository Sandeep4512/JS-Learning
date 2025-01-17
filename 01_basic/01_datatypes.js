// data type of js

"use strict"  //  treat js as newer version

//alert("hello"); //  we are using nodejs not for the browser
// ======================================================================================
// // primitive datatypes

// number => 2 power of 53 
// String   => "" & ''
// undefine => do not assign a value
// Boolean  => true/false
// symbols => unique
// null  => standalone 

// user define datatypes 
//  1. array
// 2. Array

// const age =22
// const name= "Sandeep"
// let marigeDAte;    // undefine
// const Ismariged = false
// const id = Symbol('123')

// console.log(typeof undefined)
// console.log(typeof null)


// Primitive (call by value)

// 7 types : String , Number , Boolean , null , undefined , symbols ,BigInt

// Reference type ( Non Primitive)

// Array, object, Function

const myarray = ['raju', 'ram ', 'shyam'];

const myobj = {
    Name: "Sandeep",
    age: 22,
    Ismarriaged: false
}

const myfunction = function () {
    console.log("hello")
}

//  ++++++++++++++++++++++++++++ memories concept +++++++++++++++++++++++++++++++

// stack(Primitive), Heap(Non-Primitive)

let myyouName = "Sandeep.com"
let anaotherNane = myyouName
anaotherNane = "Pradeep.com"
console.log(myyouName)
console.log(anaotherNane)

let oneuser = {
    emai: "user@google.com",
    upi: "Sandeep.hdfc"
}
    // heap memory example 
let twouser = oneuser

twouser.emai = "rahul@gmail.com"

console.log(oneuser)
console.log(twouser)

