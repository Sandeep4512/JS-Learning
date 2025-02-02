// control flow -> if , if-else ,
// comparision operator ->  <,>, <=, >=, == ,!=,===

// const temp = 56
// if(temp <50){
//     console.log("less then 50")
// }
// else
// console.log("greter then 50")

// const score = 200
// if(score>100){
//      const power = "fly"
//      console.log(`user power :${score}`)
// }

//  console.log(`user power :${score}`) 

// ____________________________________________________

// const balance = 1000
// if(balance>500) console.log("Test"),console.log("test2")

const userloggedIn = true
const debitcard = true
const LoggedInFromgoogle = false
const LoggedInFromemail = true

if(userloggedIn && debitcard  && 2==3){
    console.log("Allow to user by course")
}

if(LoggedInFromemail || LoggedInFromgoogle){
    console.log("User Logged")
}

//  ======================================================

const month = "5"
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("may")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("july")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("OCTOBER")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;

    default:
        console.log("plese enter currect month")
        break;
}