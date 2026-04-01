const Serie = [
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
        dataLanc : "24/08/2015",
        temporadas : "oito",
        Criador : " J.G. Quintel.",
        Disponibilidade: "Está disponível na Netflix, HBO, Prime video",
        Sinopse: "Mordecai (um gaio-azul) e Rigby (um guaxinim), dois jardineiros preguiçosos de 23 anos. Eles tentam fugir do trabalho em um parque, gerando situações surreais, sobrenaturais e caóticas que irritam seu chefe, Benson."
    },
    {
        Desenho : "Ursos Sem Curso",
        dataLanc : "6/09/2010",
        temporadas : "quatro",
        Criador : " Daniel Chong.",
        Disponibilidade: "Está disponível na HBO, Prime video",
        Sinopse: "Focada em três irmãos ursos — Pardo, Panda e Polar — tentando se integrar à sociedade humana na área da Baía de São Francisco. Eles vivem aventuras cômicas, usam tecnologia e interagem com humanos, marcados por suas personalidades distintas e pela busca por amizade e aceitação."
    },
    {
        Desenho : "Eddsworld",
        dataLanc : "6/06/2003",
        temporadas : "uma",
        Criador : " Edd Gould.",
        Disponibilidade: "Está disponível no Youtube",
        Sinopse: "Focada nas desaventuras surrealistas e cômicas de quatro amigos — Edd, Tom, Matt e Tord (inicialmente) — que vivem no Reino Unido. A série mistura humor britânico, situações cotidianas exageradas e elementos fantásticos como zumbis e clones."
    },
    {
        Desenho : "Ben 10",
        dataLanc : "6/06/2005",
        temporadas : "quatro",
        Criador : " Duncan Rouleau, Joe Casey, Joe Kelly e Steven T. Seagle.",
        Disponibilidade: "Está disponível na Netflix, HBO, Prime video",
        Sinopse: "Acompanha Ben Tennyson, um menino de 10 anos que encontra o Omnitrix, um relógio alienígena que lhe permite transformar em 10 heróis diferentes. Ao lado da prima Gwen e do Avô Max em uma viagem de trailer, Ben combate vilões como Vilgax e aprende responsabilidade.",
    },
    {
        Desenho : "The Cuphead Show!",
        dataLanc : "12/02/2022",
        temporadas : "três",
        Criador : "Chad e Jared Moldenhauer",
        Disponibilidade: "Está disponível na Netflix",
        Sinopse: "Segue as desventuras de Xicrinho (Cuphead) e Caneco (Mugman) nas Ilhas Tinteiro. Impulsivos e adoráveis, os irmãos vivem confusões enquanto fogem do Diabo, que tenta caçar a alma de Xicrinho após um jogo de azar.",
    },
    {
        Desenho : "Hora da Aventura",
        dataLanc : "5/04/2010",
        temporadas : "dez",
        Criador : "Pendleton Ward",
        Disponibilidade: "Está disponível na Netflix, HBO",
        Sinopse: "Finn vive grandes aventuras na terra de Ooo na companhia de seu melhor amigo, Jake. De viagens a reinos alucinantes a lutas contra vampiros, os dois estão prontos para enfrentar qualquer perigo.",
    },
    {
        Desenho : "Steven Universo",
        dataLanc : "21/05/2013",
        temporadas : "5",
        Criador : "Rebecca Sugar",
        Disponibilidade: "Está disponível na Netflix, HBO",
        Sinopse: "Segue a história de um menino meio humano, meio Gem (alienígena), chamado Steven, que vive na cidade de Beach City com as Crystal Gems: Garnet, Ametista e Pérola. Ele herdou a gema de sua mãe, Rose Quartz, e tenta controlar seus poderes mágicos enquanto protege a Terra de ameaças intergalácticas e monstros, aprendendo a lidar com o legado de sua mãe.",
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
