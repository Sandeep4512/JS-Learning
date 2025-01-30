
// Arrow function syntax     ()=>{}

    // const myfun =()=>{
    //     let username="sandeep"
    //     console.log(username)
    // }

    // explisit return type
    // const addtwoNume = ( num1,num2)=>{
    //        return num1 + num2
    // }

    //  console.log(addtwoNume(4,6))

    //implicit  
    // const addtwoNume = ( num1,num2)=>  num1 + num2
    // const addtwoNume = ( num1,num2)=>  (num1 + num2)
    

     console.log(addtwoNume(4,6))

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function sum(a=1,b=3){
//     return a+b;
// }
// console.log(sum);// function definition return kr dega 
// console.log(sum());  // by default koi arg nhi denge to   
// console.log(sum(12,23));

// //  -> Arrow function  

  

const sum=(a={b:20})=>a.b+20;  //if arg ko intial kre to pra compulsari h

console.log(sum());
console.log(sum(18));
// one line code two argument ======= 
const sub=(a,b)=>a-b;
 console.log(sub(20,30));

const mul=(a,b)=>{
    let c=a+b;
    return c*(a+b);
}
console.log(mul(20,13));


const division=a=>{
  let c=20;
    return c/a;
}
console.log(division(30));

// ====================================================================



// this => It is a current instant of the object , also only object

const thisKey ={
    username:"Sandeep",
    age:4,
   message: function one(){
          console.log(this.username)
    }
}

thisKey.message()

function add(){
//    console.log(this) 
}

// add()
const two= ()=>{
//    console.log(this)  // always empty return {} object
} 

two()