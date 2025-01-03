const num = 452378;

const reverseNum = (num)=>{
   // return Number(num.toString().split("").reverse().join(""))
   let reverse = 0 
   while(num > 0){
    reverse = reverse*10 + (num%10) ;
    num = parseInt(num/10) ; //or Math.floor
    console.log(`num is ${num} and reverse is ${reverse}`)
    }        
return reverse
}

console.log(reverseNum(num));