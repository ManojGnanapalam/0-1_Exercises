const express = require('express');
const app = express();
const port = 3001;

let user = [
    {userName : 'naveen',
    kidneys : [{healthy : false}]
    }
]

app.use(express.json());

app.get('/',(req,res)=>{
    const userKidney = user[0].kidneys;
    const numberOfKidneys = userKidney.length;

    let numberOfHealthyKidneys = 0;

    for(let i = 0 ; i < numberOfKidneys ; i++){
        if(userKidney[i].healthy){
            numberOfHealthyKidneys += 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys})
})

app.post('/add',(req,res)=>{
    const isHealthy = req.body.isHealthy;

    user[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        message : "Kidney added"
    })
})

app.put("/heal", function(req, res) {

    if(isThereAtleastOneUnhealthyKidney()){
        for (let i = 0; i<user[0].kidneys.length; i++) {
            user[0].kidneys[i].healthy = true;
        }
        res.json({message:'kidney healed'});

    }else{
        res.status(411).json({
            message: "You have no bad kidneys"
        });
    }

})

app.delete("/remove", function(req, res) {
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i<user[0].kidneys.length; i++) {
            if (user[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        user[0].kidneys = newKidneys;
        res.json({message: "done"})   
    } else {
        res.status(411).json({
            message: "You have no bad kidneys"
        });
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i<user[0].kidneys.length; i++) {
        if (!user[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}


app.listen(port,()=>console.log(`the server listen on port :${port}`))