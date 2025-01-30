// Immediately Invoked Dunction Expression (IIFE)

// ()() => first bracket take definiton of the function  second brcaket take the calling the function

(function chai (){
    // name IIFE
   console.log("Sandeep")
})();                      // some error aata hai semicolon ki wajah se  function end  nhi hota hai 

((name) =>{
    console.log(`DB CONNECTION TOW ${name}`)
})("Sandeep")