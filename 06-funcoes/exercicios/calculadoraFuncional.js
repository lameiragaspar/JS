function calcular(a, b, operacao){
  return operacao(a,b);
}

function somar(a ,b){ return a+b};
function subtrair(a, b){ return a-b};
function multiplicar(a, b){ return a*b};
function dividir(a, b){ return a/b};

console.log(calcular(10, 5, somar));
console.log(calcular(10, 5, subtrair));
console.log(calcular(10, 5, multiplicar));
console.log(calcular(10, 5, dividir));