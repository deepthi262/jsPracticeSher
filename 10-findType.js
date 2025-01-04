const findType = (arg) =>{
    return typeof arg;
}

console.log(findType("this is string"));
console.log(findType(234));
console.log(findType([]));
console.log(findType(function (){}));
console.log(findType({}));
console.log(findType(true));
console.log(findType(undefined));