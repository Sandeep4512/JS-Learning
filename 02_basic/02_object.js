// literal object   

const user ={
    name:"Sandeep",
    age:22,
    location:"Pune",
    Ismarrid:false,
    email:"sandeep.kumae18@wipro.com"
}
 Object.freeze(user)  //when  its required to lock the object

 
// console.log(user.name) // access 
// console.log(user["email"]) // 
  
/*
user.greeting = function(){
    console.log(`hello  JS  user  ${this.name}`)
}
console.log(user.greeting())

*/

// contructure object
// Object.create()


const tinder ={
     name:"Sandeep",
     Ismarrige:false,
     id:1001
}

console.log(Object.keys(tinder))  // return all keys
console.log(Object.values(tinder))  //  return all values
console.log(Object.entries(tinder))  // return a every to convert array &  like as[ [ 'name', 'Sandeep' ], [ 'Ismarrige', false ], [ 'id', 1001 ] ]


console.log(tinder.hasOwnProperty('Ismarrige'))


const obj1 ={1:"a",2:"M",3:"J"}
const obj2 ={1:"E",2:"K",3:"I"}
const obj3 ={8:"F",9:"G",10:"H"}


const combineobj = {obj1 ,obj2, obj3 }// problem of nested object
const assigOBJ = Object.assign( {}, obj1,obj2,obj3)
const addObj= {...obj1,...obj2,...obj3}

console.log(combineobj)
console.log(assigOBJ)
console.log(addObj)


// destructure of OBject

const course ={
    courseName:"webdev",
    fee:3500,
    teacher:"Sandeep"
}

const { courseName,fee} = course

console.log(courseName)