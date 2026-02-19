function resumoPedidos(pedidos) {
  /** 
  return pedidos.reduce((acumulador, {cliente, itens}) =>{
    //console.log(itens)
    acumulador[cliente] ??= itens.reduce((soma, {valor}) => {
      soma += valor;
      return soma
    }, 0)
    
    return acumulador;
  }, {}) */

  return pedidos
  .flatMap(({cliente, itens}) => 
    itens.map(({valor}) => ({cliente, valor}))
  )
  .reduce((acumulador, {cliente, valor}) =>{
    acumulador[cliente] = (acumulador[cliente] ?? 0) + valor;
    return acumulador;
  }, {})
} 

const pedidos = [
  {
    cliente: "Ana",
    itens: [
      { produto: "Teclado", valor: 100 },
      { produto: "Mouse", valor: 50 }
    ]
  },
  {
    cliente: "Carlos",
    itens: [
      { produto: "Monitor", valor: 900 },
      { produto: "Cabo HDMI", valor: 30 }
    ]
  },
  {
    cliente: "Maria",
    itens: [
      { produto: "Notebook", valor: 3500 },
      { produto: "Mousepad", valor: 25 }
    ]
  }
];

const itensAgrupados = resumoPedidos(pedidos);
console.log(itensAgrupados);