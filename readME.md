https://www.youtube.com/watch?v=qJGR9lLcRc0&t=1526s
25 Mind-Blowing Practice Questions, Master JavaScript, Can You Solve Them All ?

map returns new array, foreach modifies same array
Since .forEach() does not return a value, it cannot be chained like .map(). Replace it with .map() to handle the word transformations.

You can use forEach to reverse the words, but since forEach does not return a new array, you'll need to manually handle storing the reversed words in another array

typeof array and object is object only so use Array constructor
Array.isArray([2,4,6]);
arr.length = 0 --> make array empty
Number.isInteger(num);

arr.concat(arr); --> to duplicate i.e. join array to itslef
arr.sort();
e.charAt(0).toUpperCase() + e.substring(1)
obj.hasOwnProperty('key')
occObj[e] = 1; for inserting into object just use this

arr.forEach((e)=> sum = sum +e )
typeof e === "number"

arr.filter((e)=>e.gender==="male") -->filter returns new array

for each cant be broken , then use for loop
arr.splice(i, 1);

Object.keys(arr) --> return a keys array

arr.reduce((acc,current)=>{acc > current ? acc :current}, intialvalue) --> reduce is equivalent to for ..of loop .... also cases filter,find,findIndex,some,every

Math.floor(Math.random() \* (arr.length)) --> 0 - (arr.length-1)
Math.floor(Math.random()) ---> 0 - 9

if (union.findIndex((e) => (e !== arr2[i]))) --> doesnt work , truthy value so we use below
if (union.findIndex((e)=> (e === arr2[i])) === -1 )
union.push(arr2[i])
