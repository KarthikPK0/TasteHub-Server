require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection') 
const router = require('./routes/router') 

const thServer = express()
thServer.use(cors())
thServer.use(express.json())
thServer.use(router)

const PORT = 3000 || process.env.PORT

thServer.listen(PORT,()=>{
    console.log(`Taste Hub Server started at port ${PORT} and waiting for client request  `);
})

thServer.get('/',(req,res)=>{
    res.send(`<h1>Taste Hub Server started and waiting for client request </h1>`)
})