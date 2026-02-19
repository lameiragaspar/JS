function variacaoDeVendas(vendas){
  return vendas.reduce((acc, {mes, valor}, index) => {
    if(index === 0) return acc;
    const valorAnterior = vendas[index - 1].valor;
    acc.push({
      mes,
      variacao: (valor - valorAnterior)
    });
    return acc;
  }, []) 
};

const vendas = [
  { mes: "Jan", valor: 100 },
  { mes: "Fev", valor: 120 },
  { mes: "Mar", valor: 90 },
  { mes: "Abr", valor: 150 }
];

const variacao = variacaoDeVendas(vendas);
console.log(variacao);