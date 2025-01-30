// let a=10
// const b=20
// var c =40

// console.log(a)
// console.log(b)
// console.log(c)

//   {} -> scope : blcok level scope  inside the body
//                : global level scope outsite the body 


// -----------------------------------
// let a = 100
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 40
//     console.log("inner ", a)
// }

//  console.log(a)
// console.log(b)
// console.log(c)

// ******************************************************
//nested scope

function firstfun(){                 // parent function
    const username="sandeep"
    function secondfun(){             // child function
        const website ="youtube"
        console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)

addone(5)
//  normal function
function addone(num) {
    return num + 2
}

addtwo(5)
// expression function
  const addtwo = function (num) {
    return num + 3
}
// expression function can not be excute before initialization