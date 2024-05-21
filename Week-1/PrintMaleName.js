ppl = [{firstname:"vaigunth",gender:'male'},{firstname:"naveen",gender:'male'},{firstname:"nivi",gender:'female'}]

for (let i in ppl){
    if(ppl[i]["gender"] == 'male'){
        console.log(ppl[i]['firstname'])
    }
}
