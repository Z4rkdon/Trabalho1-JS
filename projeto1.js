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
//                   0           1         2         3         4         5         6         7
const JOESTARS = ["Jonathan", "Joseph", "Jotaro", "Josuke", "Giorno", "Jolyne", "Johnny", "Gappy"]
const ranking =  [   8      ,    7    ,    4    ,    6    ,    1    ,    5    ,    2    ,    3   ]
let contador = 0
while(contador < JOESTARS.length){
    console.log(JOESTARS[contador])
}