const stringPalChecker = (str) => {
  console.log;
  return str === str.split("").reverse().join("");
};

console.log(stringPalChecker("tacobocat"));
console.log(stringPalChecker("deepthi"));
