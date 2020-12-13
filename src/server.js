const express = require('express');
const { db } = require('./db/models')
const getval= require('./utiltiy')
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', express.static(__dirname + '/public'))
app.post('/calcfare',(req,res)=>{
    let km=parseFloat(req.body.km)
    let min= parseInt(req.body.fare)
  fare= getval.calprice(km,min);
    res.send({fare:fare})
})
app.post('/starter',(req,res)=>{
    res.send({price:req.body.km,
    kilometer:req.body.min})
})
db.sync()
    .then(() => {
        app.listen(8000, () => {
            console.log('server started on http://localhost:8000')
        })
    })
.catch((err)=>{
    console.log(new Error ('could not start database'))
    console.error(err);
})