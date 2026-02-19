function agruparPorCategoria(lista) {
  const ordenados = [...lista].sort((a, b) => a.preco - b.preco)

  return ordenados.reduce((acumulador, {categoria, ...rest}) => {
    acumulador[categoria] ??= [] //if acumulador[categoria] === undefined, acumulador[categoria] = [] // NOTA: .categoria é chave [categoria] é variavel
    acumulador[categoria].push(rest)
    return acumulador;  
  }, {})
}

const produtos = [
  { nome: "Teclado", categoria: "Periféricos", preco: 100 },
  { nome: "Mouse", categoria: "Periféricos", preco: 50 },
  { nome: "Monitor", categoria: "Displays", preco: 900 },
  { nome: "Notebook", categoria: "Computadores", preco: 3500 },
  { nome: "Cabo HDMI", categoria: "Acessórios", preco: 30 },
  { nome: "Mousepad", categoria: "Acessórios", preco: 25 }
];

const itensAgrupados = agruparPorCategoria(produtos);
console.log(JSON.stringify(itensAgrupados, null, 2));