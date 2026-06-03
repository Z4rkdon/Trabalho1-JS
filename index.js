// npm init
// npm i express
// RAPIDAPI CLIENT

const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const fs = require('fs')

app.post("/clientes/cadastro", (req,res) => {
    const cliente = req.body
    if (!cliente || Object.keys(cliente).length === 0) {
        res.status(400).json({resposta: "Body não preenchido"})
    } else {
        try {
            const bd = JSON.parse(fs.readFileSync('bd.json', 'utf8'))
            bd.push(cliente)
            fs.writeFileSync('bd.json', JSON.stringify(bd), 'utf8')
            res.status(200).json({resposta: "Cliente cadastrado com sucesso!"})
        } catch(error) {
            res.status(500).json({resposta: error.message})
        }
    }    
})


app.get("/clientes", (req, res)=>{
    try{
    const clientes = JSON.parse(fs.readFileSync("bd.json", "utf8"))
    res.status(200).json(clientes)
    }catch(error) {
        res.status(500).json({resposta: error.message})
    }
})

app.get("/clientes/:cpf", (req, res)=>{
    const cpf = req.params.cpf
    try{
    const clientes = JSON.parse(fs.readFileSync("bd.json", "utf8"))
    const cliente_encontrado = clientes.find(
        (cliente) => cliente.cpf.replace(/\D/g, "") == cpf)
    if(!cliente_encontrado){
         res.status(404).json({error: "Cliente não existe em nosso banco"})
    }
    res.status(200).json(cliente_encontrado)
    }catch(error) {
        res.status(500).json({resposta: error.message})
    }
})

app.delete("/clientes/:cpf", (req, res) => {
    const cpf = req.params.cpf;
    try {
    const clientes = JSON.parse(fs.readFileSync("bd.json", "utf8"))
    const clienteExiste = clientes.some(c => c.cpf.replace(/\D/g, "") === cpf)
        if (!clienteExiste) {
            return res.status(404).json({ resposta: "Cliente não encontrado" })
        }
        const clientesAtualizados = clientes.filter(c => c.cpf.replace(/\D/g, "") !== cpf)
        fs.writeFileSync('bd.json', JSON.stringify(clientesAtualizados), 'utf8')
    res.status(200).json({ resposta: "Cliente removido com sucesso!" })
    } catch (error) {
        res.status(500).json({ resposta: error.message });
    }
})


app.listen(port, ()=>{
    console.log("API executando na porta" + port)
})
