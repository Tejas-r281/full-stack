const express = require('express');
const { db } = require('./db/models')
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.get('/', async (req, res) => {
//     res.send(' hello i am here to perform')
// })
// app.use('/',express.static(path.join(__dirname, '/public')))
app.use('/', express.static(__dirname + '/public'))
app.post('/calcfare',(req,res)=>{
    let km=parseFloat(req.body.km)
    let min= parseInt(req.body.fare)

    let fare=50
    fare +=(km>5)?((km-5)*10):0
    fare +=(min>15)?((min-15)*2):0

    res.send({fare:fare})
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