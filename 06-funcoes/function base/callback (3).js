function calculadora(a, b, tipoOperacao = "soma", callbackOperacao){
    console.log(`Operando os valores ${a} e ${b}`)
    let resultado;
    switch (tipoOperacao){
        case "soma":
            resultado = a+b;
            break;
        case "subtração":
            resultado = a-b;
            break;
        case "multiplicação":
            resultado = a*b;
            break;
        case "divisão":
            resultado = a/b;
            break;
        default:
            console.log("informe o tipo de operação")
    }

    callbackOperacao(tipoOperacao, resultado)
}

function operacao(tipoOperacao, resultado){
    console.log(`O resultado da ${tipoOperacao} dos valores informados é ${resultado}`)
}

calculadora(2, 3, "divisão", operacao)

//Opção mais simples

function operar(a, b, operacao){
    return operacao(a,b)
}
const soma = (x, y) => x + y;
const subtracao = (x,y) => x-y;

console.log(operar(10, 5, soma))
console.log(operar(10, 5, subtracao))