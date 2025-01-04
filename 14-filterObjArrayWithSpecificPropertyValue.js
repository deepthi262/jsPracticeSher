const arr = [
  { name: "deepthi", gender: "female" },
  { name: "sateesh", gender: "male" },
  { name: "sammy", gender: "female" },
  { name: "vernul", gender: "male" },
  { name: "vernica", gender: "female" },
  { name: "shayna", gender: "female" },
  { name: "amith", gender: "male" },
];

const filterMales = (arr) => {
  //return arr.filter((e)=>e.gender==="male") //1st way
  /*  const males = [];
    arr.forEach(e => {
       if (e.gender === "male") males.push(e)
})
return males; */ //2nd way

  for (let i = 0; i < arr.length; i++)
    if (arr[i].gender !== "male") {
      arr.splice(i, 1);
      i = i - 1;
    }
    return arr;
};

console.log(filterMales(arr));
