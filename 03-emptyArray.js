const arr = [2, "yes", {a : 1}];

const makeArrayEmpty = (e)=> (e.length = 0);

console.log(arr);
makeArrayEmpty(arr);
console.log(arr)