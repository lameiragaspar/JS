function calcularTotalComJuros(valor, taxaAnual){
  for(let ano = 1; ano <= 5 /*Em anos*/; ano++){
    valor += (valor * (taxaAnual/100));
  };
  return +valor.toFixed(2);
};

console.log(calcularTotalComJuros(1000, 5)); // Deve retornar 1276.28 (aproximadamente)+