// npm init
// npm i express
// RAPIDAPI CLIENT

const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const fs = require('fs')

app.get('/ola', (req, res)=>{
    res.json("Hello Class!")
})

app.post('/clientes/cadatro', (req, res)=>{
    const dados = req.body
    const bd = fs.readFileSync("bd.json", "utf8")
    const bdOBJ = JSON.parse(bd)
    bd.push(dados)
    fs.writeFileSync()
    console.log(bdOBJ)
    res.json({resposta : ok})
})

app.listen(port, ()=>{
    console.log("API executando na porta" + port)
})
