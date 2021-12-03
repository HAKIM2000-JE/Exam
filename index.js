const express = require('express')
const app = express()
const path = require('path')
const VmRouter = require('./routers/vm')
var cors = require('cors')
app.use(cors())

const mongoose= require('mongoose')


app.use('/',express.static(path.join("exam-vm")))

const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const URI = process.env.URI 

mongoose.connect(URI, { useNewUrlParser: true , useUnifiedTopology: true })



app.use('/vm', VmRouter)

app.get('/*', async (req,res)=>{
   
    
    res.sendFile(path.join(__dirname,"angular-film","index.html"))
})

app.listen(port)
