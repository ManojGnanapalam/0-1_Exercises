const arr = ['naven','vaigunth','mag','sakil','keerthi']

const newArr = arr.map((i)=>{return "Mr "+i})

const newArr2 = arr.filter((i)=>{return i.startsWith('n')})

console.log(newArr);
console.log(newArr2);