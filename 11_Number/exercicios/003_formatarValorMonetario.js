function formatarValorMonetario(valor){
  return valor.toFixed(2);
}

console.log(formatarValorMonetario(10))     // "10.00"
console.log(formatarValorMonetario(3.456))  // "3.46"
console.log(formatarValorMonetario(7.1))    // "7.10"
