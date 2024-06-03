const express = require('express');
const port = 3000;
const app = express()

function sum(n){
    let ans = 0;
    for(let i = 1 ; i<n; i++){
        ans= ans +i;
    }
    return ans;
}

app.get("/",(req,res)=>{
    const n = req.query.n;
    let ans = sum(n) 
    res.send(ans.toString())
})


app.listen(port,()=>console.log(`Server start listening on port ${port}`))