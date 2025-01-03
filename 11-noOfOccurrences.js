// i/p = "apple" o/p { a :1, p:2, l:1 , e: 1}
const findOccurance = (str) => {
    const occObj = {}
str.split("").forEach((e) => {
  (occObj.hasOwnProperty(e))? occObj[e] = occObj[e] + 1 : occObj[e] = 1;
     
});
//console.log(occObj)
return occObj;

}

console.log(findOccurance("elephantitis"))