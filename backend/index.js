import express from 'express'

const app = express()

app.get('/', (req,res)=>{
    res.send("Landing Page")
})

app.listen(8000, ()=>{
    console.log("Server started at 8000 oldie")
})