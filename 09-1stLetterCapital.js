const firstLetter2Upper = (str) =>{
     return str.split(" ").map((e)=> {
       return e.charAt(0).toUpperCase() + e.substring(1)
}).join(" ")
       
}

console.log(firstLetter2Upper("this is super cool world"))