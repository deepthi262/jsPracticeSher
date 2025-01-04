const arr = [1, 2, 4, 7, 9]; //output =  [1,2,4,7,9,1,2,4,7,9]

const repeatArray = (arr) => {
/*  const outputArr = [];

  for (let i = 0; i < arr.length; i++) {
    outputArr.push(arr[i]);
    if( i=== arr.length-1  && outputArr.length===arr.length)
        i = -1 ;
  }

 return outputArr
 */ //1st way

 //return arr.concat(arr); --> 2nd way

 return [...arr , ...arr];
 
};

console.log(repeatArray(arr));
