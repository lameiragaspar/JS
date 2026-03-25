function calcularDespesas(despesas){
  const resultado = despesas.reduce((acc, {categoria, valor}) =>{
    const BigValor = BigInt(Math.round(valor))
    acc[categoria] = (acc[categoria] ?? 0n) + BigValor;
    acc.total = (acc.total ?? 0n) + BigValor;
    return (acc)
  }, {})

  const {total, ...rest} = resultado;
  return {...rest, total}
}

const despesas = [
  { categoria: 'alimentação', valor: 200.75 },
  { categoria: 'transporte', valor: 100.50 },
  { categoria: 'alimentação', valor: 50.25 },
  { categoria: 'moradia', valor: 400 },
  { categoria: 'transporte', valor: 30 }
];

console.log(calcularDespesas(despesas));