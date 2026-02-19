function relatorioDeVendas(vendas){
  return vendas.reduce((acc, {vendedor, valor})=>{
    acc[vendedor] ??= {total: 0, quantidade: 0}

    acc[vendedor].total += valor
    acc[vendedor].quantidade += 1;

    return acc;
  }, {})
}

const vendas = [
  { vendedor: "Ana", valor: 100 },
  { vendedor: "Carlos", valor: 50 },
  { vendedor: "Ana", valor: 200 },
  { vendedor: "Beatriz", valor: 300 },
  { vendedor: "Carlos", valor: 150 }
];

const relatorio = relatorioDeVendas(vendas);
console.log(relatorio);