const express = require("express")
const zod = require("zod")
const app = express()
const PORT = 3000;

const schema = zod.array(zod.number());


let numberOfRequestCount = 0;

function numberOfRequest(req,res,next) {
    numberOfRequestCount++
    console.log(numberOfRequestCount);
    next()
}

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username !="magboy" || password != "123456"){
        res.json({message:"something wrong with username and password"})
    }else{
        next()
    }
}

function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId

    if(kidneyId != 1 && kidneyId != 2){
        res.json({message:"something went incorrect"}) 
    }else{
        next()
    }

}


app.use(numberOfRequest,userMiddleware,express.json())

app.get('/health-checkup',kidneyMiddleware,(req,res)=>{
    res.json({message:"your kidney is doing good"})
})

app.post('/health-checkup',(req,res)=>{
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney)
    const kidneyLength = kidney.length;
    if(!response.success){
        res.json(response.error)
    }else{
        res.send(`kidney count ${kidneyLength}`)
    }
})

app.use((err,req,res,next)=>{
    res.json({
        message:"something went wrong"
    })
})

app.listen(PORT,()=>console.log(`server listen on ${PORT}`))
