onst Serie = [
    {
        Desenho : "The Amazing Digital Cicus",
        dataLanc : "13/10/2023",
        Canal : "Glitch Productions",
        Criadora : "Gooseworx",
        Disponibilidade: "Além do YouTube, a série está disponível na Netflix",
        Sinopse : "É uma websérie de humor surreal e terror psicológico que acompanha Pomni, uma mulher presa em um mundo virtual bizarro com tema de circo após usar um headset de RV. Ao lado de outros cinco humanos transformados em desenhos, ela tenta manter a sanidade sob o comando da IA instável Caine. ",
    },
    {
        Desenho : "Hilda",
        dataLanc : "21/09/2018",
        temporadas : "Três",
        Criador : "Luke Pearson",
        Disponibilidade: "Está disponível na Netflix",
        Sinopse : "acompanha as aventuras de uma corajosa menina de cabelos azuis. Inicialmente vivendo em uma floresta mágica, ela se muda para a cidade de Trolberg, onde faz amigos e interage com criaturas folclóricas misteriosas",
    },
    {
        Desenho : "O Incrível Mundo de Gumball",
        dataLanc : "3/05/2011",
        temporadas : "sete",
        Criador : "Ben Bocquelet",
        Disponibilidade: "Está disponível na Netflix, HBO",
        Sinopse: "acompanha as desventuras de Gumball Watterson, um gato azul de 12 anos, e seu irmão adotivo, o peixinho Darwin, na excêntrica cidade de Elmore. A série mistura animação 2D, 3D e cenários reais, focando no caos escolar e familiar da pré-adolescência, com humor ácido e situações surrealistas."
    },
    {
        Desenho : "Apenas Um Show",
        dataLanc : "6/09/2010",
        temporadas : "oito",
        Criador : " J.G. Quintel.",
        Disponibilidade: "Está disponível na Netflix, HBO, Prime video",
        Sinopse: ""
    },
]
 
const SerieJSON = JSON.stringify(Serie)
console.log(Serie)
console.log(SerieJSON)

const SerieOBJ = JSON.parse(SerieJSON)
console.log(SerieOBJ)

function criarArquivo(obj){
    const dadosJSON = JSON.stringify(obj)
    const fs = require("fs")
    fs.writeFileSync("Serie.json", dadosJSON)
}

criarArquivo(Serie)
 const arquivo = require("./Serie.json")
 console.log(arquivo)

