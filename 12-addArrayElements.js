const arr = [2,3,4,5,6,7,8]
let sum = 0;

const sumElements = (arr) =>{
    arr.forEach((e)=> sum = sum +e )
    return sum;
}
console.log(sumElements(arr))