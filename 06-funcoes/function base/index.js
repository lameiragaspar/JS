function gerarDesconto(valorDaCompra, cupomDeDesconto){
  console.log("Analisando o preço do produto para ver se o desconto se aplica");
  let valorPago;
  if(valorDaCompra >= 100 && cupomDeDesconto === 10){
    valorPago = valorDaCompra - ((valorDaCompra/100) * 10 );
    console.log(`Valor da compra: ${valorDaCompra}, desconto de 10% aplicado.`);
    console.log(`Valor a pagar: ${valorPago}Kz.`);
  }
}

gerarDesconto(100, 10);