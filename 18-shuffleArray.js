// i/p = [1,2,3,4,5,6,7]  o/p = array with random order of elements from input

const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
  return arr;
};

console.log(shuffleArray([111,12,34,64,35,67,73,18,95]));

//console.log(Math.floor(Math.random()*arr.length));
