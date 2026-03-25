function calcularFatorial(numero){
  if(numero <= 1){ 
    return 1n
  } else {
    return (BigInt(numero) * calcularFatorial(numero - 1))
  }
}

console.log(calcularFatorial(5))
console.log(calcularFatorial(100))

function calcularFatorial(numero){
  let resultado = 1n; // Usando BigInt
  for (let i = 2; i <= numero; i++) {
    resultado *= BigInt(i); // Multiplicando de forma iterativa
  }
  return resultado;
}

console.log(calcularFatorial(5));  // 120n
console.log(calcularFatorial(100)); // Um número grande, retornando BigInt