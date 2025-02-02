// const userEmail = "Sandeep@google.com"
// if(userEmail){
//     console.log("Got user email")
// }

// falsy value -:) false , 0, -0, BigInt, "" Null , Underdefine,NaN
// Truthy Value :)   "0" , "false" , " " , [], {}, function(){}

// const emptyObj ={}
// if(Object.keys(emptyObj).length===0){
//     console.log(" Object is Empty ")
// }

// const MyArray =[]
// if(MyArray.length===0){
//     console.log(" Array is Empty ")
// }


// Nullish Coaleascing Operator (?? ): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1)

const ice = 100
ice>=80?console.log("more than 80"):console.log("less than 80 ")