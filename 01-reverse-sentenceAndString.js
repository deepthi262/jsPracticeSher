const str = "This is a string which needs to be reversed including every word";

const reverseStringByMap = (str) => {
  const reverseStr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .reverse()
    .join(" ");
  return reverseStr;
};

const reverseStringByForeach = (str) => {
    const reversedWords =[];
  str
    .split(" ")
    .forEach((word) => 
        {reversedWords.push(word.split("").reverse().join(""))
            return reversedWords
        });
   return reversedWords .reverse().join(" ");
};

//console.log(reverseStringByMap(str));
console.log(reverseStringByForeach(str));
