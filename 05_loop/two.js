
// 1. Advance array Methods :-
//  forEach(),map(),filter(),find(),every(),some(),reduce()  ->Higher Order

let arr=[{name:"Rama",id:"2"},{name:"Sita",id:"3"},{name:"Gita",id:"4"}];
// forEach():void
arr.forEach(function(item){
    console.log(item);   
})
//------------------------------------------------------------------
// filter():[{name:"Sita",id:"3"},{name:"Gita",id:"4"}]
const filteredArray= arr.filter(function(item){
          if(item.id!="2"){
              return item
          }
})
//-------------------------------------------------------------------
//Map():Array
const mapedArray=arr.map(function(item){
    if(item.id=="2"){
        item.isMarried=true;
    }
    return item
})
console.log(mapedArray);
//-----------------------------------------------------------------------
// find():element of array
const selectedProduct=arr.find(function(item){
    if(item.id=="2"){
        return item;
    }
})
console.log(selectedProduct);

//===========================================================
// every():Boolean
const answer=arr.every(function(item){
    if(item.id=="1"){
        return true
    }
})
console.log(answer);
//------------------------------------------------------------
// some():Boolean                  
const ans=arr.some(function(item){     
    if(item.id=="1"){
        return true
    }
    
})
console.log(ans);
  
 

// for of
// for in