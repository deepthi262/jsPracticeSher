const arr = [1,2,3,4,5,76,34,22,44,66,20,30,12,23,43,53,59];

const lastNelem = (arr , n =1) =>{
    if(n > arr.length) {
        console.log(`You have asked for ${n} elements but we have only ${arr.length} elements, so giving them`);
        n  = arr.length
    }

    for (let i = arr.length -1 ; i >= arr.length - n ;i-- )
        console.log(arr[i])
    
}

lastNelem(arr, 5)