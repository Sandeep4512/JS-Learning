// Array 
// () ->  paratheis
// [] ->  bracket
// {} ->  curlibrases

//  const myArray = [ 0,4,9,3,4,5]  // resizeing its not a fixed

// myArray.push(5)   -> add  last index 
// myArray.push(6)
// myArray.pop()      -> remove last index
// myArray.unshift(90) -> add zero index 

// myArray.shift()   -> remove zero index

//   myArray.includes(5)  // ->return  Boolean  value True / False
//   myArray.indexOf(9)   // ->  return of position
  
  
//   const  newArray = myArray.slice(0 , 4)  // range dena hota hai but leave the  last value the range original array do not chnaged 
  
// console.log(myArray)
//   const new1 = myArray.splice(0 , 4)   //-> original array are chanaged

// console.log(new1)
// console.log(myArray)



const hero = ["Sandeep","Rohit","raju","Rohan","Shubham"]
const bollybood = ["Ajay","spiderman","shaktiman"]

//  bollybood.push(hero);  // return of length of Array 
// console.log(bollybood)   
 const newArray1 = bollybood.concat(hero) // return of new Array 
// console.log(newArray1)

const spredArry= [...bollybood,...hero,"more","than","one"] // spred operator
// console.log(spredArry)

// IsArray 
// from
// of

const array3 = "Sandeep"
console.log(Array.isArray(array3)) //   return boolean 
console.log(Array.from(array3)) // every char to convert index form like this  [ 'S', 'a', 'n','d', 'e', 'e','p' ]
console.log(Array.of(array3))  
 //  direct convert into string to Array from like ['Sandeep']
 // may be Number or String 