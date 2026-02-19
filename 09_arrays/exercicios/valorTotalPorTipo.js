function valorTotalPorTipo(carrinho){
  return carrinho.reduce((acc, {tipo, valor}) =>{
    acc[tipo] = (acc[tipo] ?? 0) + valor;

    return acc; 
  },{})
}

const carrinho = [
  { item: "Maçã", tipo: "Fruta", valor: 5 },
  { item: "Leite", tipo: "Bebida", valor: 8 },
  { item: "Banana", tipo: "Fruta", valor: 4 },
  { item: "Suco", tipo: "Bebida", valor: 10 },
  { item: "Bolo", tipo: "Padaria", valor: 15 }
];

const valorTotal = valorTotalPorTipo(carrinho);
console.log(valorTotal);
