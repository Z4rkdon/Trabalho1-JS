/*
Imagine que você abriu uma loja:
1) Crie o nome de 8 produtos e armazene em uma lista;
2) Crie outra lista para armazenar o preço de cada produto.
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)
5) Crie uma função que remove um produto da lista recebendo seu índice.
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/
//                     0           1         2         3         4         5         6         7
const Alimentos =  ["Salgados", "Feijão", "Miojo", "Chocolate", "Refri", "Suco", "Arroz", "iogurte"]
const Valores  =   [   3,50   ,    50   ,   4,20 ,  6,90      ,   5,40 ,  1,90 ,    46  ,    5,35  ]

let contador = 0
while(contador < Alimentos.length){
    console.log(Alimentos[contador] +" - R$" + Valores[contador])
    contador = contador + 1
}


mostrarAlimentos()

Alimentos.push("Milho")
Valores.push(7,10)
console.log(Alimentos)

Alimentos.pop()
Valores.pop()
console.log(Alimentos)

Alimentos.splice(2,1)
console.log(Alimentos)
Alimentos.splice(2,2)
console.log(Alimentos)
Alimentos.splice(0,1, "Milho" )
console.log(Alimentos)

function adicionarProduto(Milho){
    let valores = (0,1)
    return "Salgado fora de estoque, substituir por Milho "
}

adicionarAlimento("Milho", 0,1)
function removerAlimento (indice){
    Alimentos.splice(indice, 1)

}
