function criarRelatorioVendas(vendas){
    return vendas
    .flatMap(({produtos}) => (produtos))
    //poderia fazer dentro do flatMap(({produtos}) => produtos.filter(({valor}) => valor >= 0))
    .reduce((acc, {categoria, valor}) =>{
        if(valor < 0) return acc // E com o filter no flatMap, poderia descartar essa linha
        acc[categoria] = (acc[categoria] ?? 0) + valor;
        return acc;
    }, {})
}

const vendas = [
  {
    cliente: "Ana",
    produtos: [
      { nome: "Teclado", categoria: "Periféricos", valor: 100 },
      { nome: "Mouse", categoria: "Periféricos", valor: 50 }
    ]
  },
  {
    cliente: "Carlos",
    produtos: [
      { nome: "Monitor", categoria: "Displays", valor: 900 },
      { nome: "Cabo HDMI", categoria: "Acessórios", valor: 30 }
    ]
  },
  {
    cliente: "Maria",
    produtos: [
      { nome: "Notebook", categoria: "Computadores", valor: 3500 },
      { nome: "Mousepad", categoria: "Acessórios", valor: 25 }
    ]
  }
];

console.log(criarRelatorioVendas(vendas));