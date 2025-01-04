//i/p =[1,2,3] , [100,2,1,10]  o/p = [1,2,3,10,100]

const unionArray = (arr1,arr2)=>{
  const union = [...arr1];
  //console.log(union.findIndex((e)=> e === arr2[1]))
  for(let i = 0 ; i < arr2.length ; i++){
    if (union.findIndex((e)=> (e === arr2[i])) === -1 ) 
         union.push(arr2[i]) 
  }
return union;
}

console.log(unionArray([1,2,3],[100,2,1,10] ))