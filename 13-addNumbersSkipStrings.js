const arr = [2 ,4, "the", 6 , "strings" ,10 ,20 , "are skipped" , 40 , "wow"];
let sum = 0 ;
const sumNumOnly = (arr) =>{

    arr.forEach((e)=>{
        console.log(e,sum);
        if (typeof e === "number")
            sum = sum + e
        
    })
    return sum
}

console.log(sumNumOnly(arr));