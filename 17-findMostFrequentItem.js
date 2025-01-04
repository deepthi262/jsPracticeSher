const arr = [1,3,5,6,2,3,4,2,5,6,3,7,4,5,3,1,3,4]
//1-2, 3-5 , 5 - 3, 6 - 2, 2-2, 4 - 3   o/p =3

const frequentItem = (arr) =>{
    const freqArray = {};
    arr.forEach(e => {

        freqArray.hasOwnProperty(e) ? (freqArray[e] = freqArray[e] + 1) : (freqArray[e] = 1)
    });
    //console.log(Object.keys(freqArray))
    const res = Object.keys(freqArray).reduce((acc , next)=>{
       return (freqArray[acc] > freqArray[next]) ? acc : next
    })

   return res
}

console.log(frequentItem(arr));

/*
let i = 0,
let occ = 1
let item = {arr[i] : 1}
if (arr[i] === e) occ ++
item.e = occ
occ =0
resultArray = 

*/
