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
    else console.log('connected with database')
})


app.get('/', (req, resss)=>{

    resss.send('Ok')

})

//pobranie danych z bazy
app.get('/select', (req, res)=>{
    const sql = 'SELECT * FROM uczniowie'
    con.query(sql, function(err, result, fields){
        if(err) console.log(err)
        else res.send(result)

    })//zapytanie
})

app.get('/add/:imie/:nazwisko/:klasa', (req, res)=>{
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    const klasa = req.params.klasa

    const sql = `INSERT INTO uczniowie (imie,nazwisko,klasa) VALUES ('${imie}', '${nazwisko}', '${klasa}')`
    con.query(sql, (err, result, filds)=>{
        if(err) console.log(err)
        else res.send('dodano rekord')
    })

})

app.listen(port, ()=>{
    console.log(`port: ${port}`)
})