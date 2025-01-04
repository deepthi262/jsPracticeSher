const arr = [1,2,3,4,5,76,34,22,44,66,20,30,12,23,43,53,59];

//console.log(arr.length); --17

const getElements = ( arr, n = 1) =>{
    if (n > arr.length ) {
        console.log(`you have asked for ${n} elements but we only have ${arr.length} elements, hence giving what we have`) 
        n= arr.length;
        }
    for (let i=0 ; i < n ; i++){
       console.log(arr[i])
    }

}

getElements( arr , 20)