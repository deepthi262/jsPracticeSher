const obj1 = [1, 2, 3, 5];

const checkIsArray = (obj) => {
  return Array.isArray(obj);
};

console.log(checkIsArray([]));
console.log(checkIsArray({}));
