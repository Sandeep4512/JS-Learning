
// fon in loop
const newOBJ = {
    js :"Javascript",
    cpp:"C++",
    C:"C programing"
}

// for in used in object

for(const key in newOBJ){
    // console.log(newOBJ[key])
    // console.log(`${key } short cut  for ${newOBJ[key]}`);
}

const arr =["js","cpp","py","java","cpp"]

for(const key in arr){
    // console.log(arr[key]);
}

//  foreach

arr.forEach((item)=>{
    console.log(item);
})

// passing the reference of the function 
function printme(item){
    // console.log(item)
}

// arr.forEach(printme)

arr.forEach((item,index,arr)=>{
      console.log(item,index,arr)
})


const mycoding = [
    {
        languageName:"Java script",
        languagefile:"js"
    },
    {
        languageName:"python",
        languagefile:"py"
    },
    {
        languageName:"c++",
        languagefile:"cpp"
    }
]

mycoding.forEach( (item)=>{
    console.log(item.languagefile);
})