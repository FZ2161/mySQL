const cors = require('cors')
const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, resss)=>{

    resss.send('Ok')

})

app.listen(port, ()=>{
    console.log(`port: ${port}`)
})