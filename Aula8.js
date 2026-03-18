const alunos = [
    {
        nome : "Guilherme Luiz",
        dataNasc : "9/6/2009",
        turma : "3°DSC"
    },
    {
        nome : "Joaquin",
        dataNasc : "24/9/2009",
        turma : "3°DSC"
    },
    {
        nome : "Oliver",
        dataNasc : "18/4/2009",
        turma : "3°DSC"
    },
]

const alunosJSON = JSON.stringify(alunos)
console.log(alunos)
console.log(alunosJSON)

const alunosOBJ = JSON.parse(alunosJSON)
console.log(alunosOBJ)

function criarArquivo(obj){
    const dadosJSON = JSON.stringify(obj)
    const fs = require("fs")
    fs.writeFileSync("alunos.json", dadosJSON)
}

criarArquivo(alunos)

const arquivo = require("./alunos.json")
console.log(arquivo)