/*
function alterar(valor){
    valor += 10;
}
let x = 5;
alterar(x);
console.log(x)

👉 Explique o resultado
👉 Modifique o código para que x seja alterado
*/

//R: O reultado será 5 porque alterar(x) faz uma cópia única do primitivo, uma cópia independente, mantendo o valor de x inalterado

//Solução
function alterar(valor){
    return valor+= 10; //Nota: funções sem return retornam indefined
}
let x = alterar(5);
console.log(x);

//Aí sim o valor de x será alterado poque ele recebe como primitivo o valor que a função retorna