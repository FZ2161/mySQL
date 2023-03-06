const cors = require('cors')
const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

app.use(cors())

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',//std
    password: '',
    database: 'baza1'//database name
})

con.connect(function(err) {
    if(err) console.log(err)
    else console.log('connect with database')
})


app.get('/', (req, resss)=>{

    resss.send('Ok')

})

app.listen(port, ()=>{
    console.log(`port: ${port}`)
})