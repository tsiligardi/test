const { response } = require("express")
const express= require("express")
const fetch=require("node-fetch")
const app= new express()
const utils = require ("./utils")
app.get("/",(req,res)=>{
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(response=>response.json())
    .then(response=>{
        res.send (response.reduce((acc,e)=>{
            return acc+=utils.getfilm(e)
        },``))
    })
})

app.get("/order",(req,res)=>{
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(response=>response.json())
    .then(response=>{
        const order=response.sort((a,b)=>a.rt_score-b.rt_score)
        res.send(order.reduce((acc,e)=>{
            return acc+=utils.getfilm(e)
        },``))
    })
})

app.get("/value/:id",(req,res)=>{
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(response=>response.json())
    .then(response=>{
        let film={}
        const order=response.sort((a,b)=>a.rt_score-b.rt_score)
        console.log(order)
        if (req.params.id==="1"){
            film=order[order.length-1]
            console.log(film)
        }
        else if (req.params.id==="2"){
            film=order[0]
        }
        res.send(utils.getfilm(film))
    })
})

app.listen(8080,()=>console.log("server avviato sulla porta 8080"))

