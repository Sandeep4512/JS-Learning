// Array 
// () ->  paratheis
// [] ->  bracket
// {} ->  curlibrases

 const myArray = [ 0,4,9,3,4,5]  // resizeing its not a fixed

// myArray.push(5)   -> add  last index 
// myArray.push(6)
// myArray.pop()      -> remove last index
// myArray.unshift(90) -> add zero index 

// myArray.shift()   -> remove zero index

  console.log(myArray.includes(5))  // ->return  Boolean  value True / False
  console.log(myArray.indexOf(9))    // ->  
  
  
//   const  newArray = myArray.slice(0 , 4)  // range dena hota hai but leave the  last value the range original array do not chnaged 
  
console.log(myArray)
  const new1 = myArray.splice(0 , 4)   //-> original array are chanaged

console.log(new1)
console.log(myArray)