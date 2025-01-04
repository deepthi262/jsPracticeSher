const arr = [1, 4, "deepthi", { practice: "js" }];

const cloneArray = (arr) => {
 // return [...arr]; 1st way

/* const newArray = [];
 arr.forEach((e)=>newArray.push(e))  */ //2nd way
 
 return arr.map((e) => e)

};

console.log(cloneArray(arr));
