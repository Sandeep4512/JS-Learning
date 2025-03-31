// used more than mathod at same time like map().map().filter
const Nums = [1,2,3,4,5,6,7,8,9,10];
const newNums = Nums
                .map( (item)=>{ return item *10 })
                .map( (item)=>{ return item +1})
                .filter( (num )=>{ return num > 50})

console.log(newNums)

// reduce method jo ki always do valve as argument pass ki jati hai  
// accumilator :- jo privious value store krti hai  : stating me value initilization krni padti hai 
// currectValue :- ye always currect value to ko prefer krti hai  

const number = [1,3,5];
 const newUpdated=  number.reduce( ( acc,curValue)=>{
    return acc + curValue;
},5)

console.log(newUpdated)
