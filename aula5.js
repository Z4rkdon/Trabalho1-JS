// LISTA
// indice: sempre inicia em 0
//                 0         1            2
let esportes = ["futsal", "volei", "tenis de mesa"]
let taxaInscricao = [10 ,    12 ,         5       ]
let contador = 0 // variavel inicial do laço
while(contador < esportes.length){ // condição de parada
    console.log(esportes[contador] + " - R$ "
                + taxaInscricao[contador])
    contador = contador + 1
} 