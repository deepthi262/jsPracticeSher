const sortAlphabet = (str) => {
  return str
    .split("")
    .sort()
    .join("");
};

console.log(sortAlphabet("sateesh"));
console.log(sortAlphabet("deepthi"));
