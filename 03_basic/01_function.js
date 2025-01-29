// function

function saymyname(){
    console.log("H")
    console.log("a")
    console.log("n")
    console.log("d")
    console.log("e")
    console.log("e")
    console.log("p")
}

// saymyname // reference of the function
// saymyname()  // excute the fucntion 
//------------------------------------------------------
  function addtonum( numbr1, number2){
         console.log(number2+number2)
  }

  addtonum()    // NaN
  addtonum(2,4)  // 6

//   const result=addtonum(4,6)
//   console.log(result)// undefine

// --------------------------------------------------------------
  
  function addtonum( numbr1, number2){
    //  return number2+number2
    let result= numbr1 + number2
    return result
   }

const result=addtonum(5,6)
console.log(result) // 11

// -------------------------------------------------------------

function logingmessase(username){
    // if(username === undefined){
    //     console.log("enter the user name")
    //      return
    // }

    if(!username){                                 // if(username) -> it is always undersatnd false value inside the if block 
        console.log("enter user mame")            // if(!username)  -> oppotite value of above line
    }
     return `${username} just login in`
}

// logingmessase()
// console.log(logingmessase("ram"))
// console.log(logingmessase())

//---------------------------------------------------------------------

// passing the rest operator in function

function calculatcartprice(...num1){
    return num1
}

console.log(calculatcartprice(100,200,300))

//-----------------------------------------------------
  
// how to pass object in a function 

const myobj ={
    name:"Sandeep",
    age:22,
    Ismarriaged:false
}
 function passingoj(obj){
    return `my is name ${obj.name} & age ${obj.age}`
 }

 console.log(passingoj(myobj))
 console.log(passingoj({name:"saneep",age:32}))

//--------------------------------------------------------------

// how to pass array in th function 

const array =[ 1,4,500,600]
 function passingoj(myaaya){
    return myaaya[3]
 }

 console.log(passingoj(array))
 