function agruparPorCategoria(lista) {
  return lista.reduce((acumulador, {categoria, ...rest}) => {
    acumulador[categoria] ??= [] //if acumulador[categoria] === undefined, acumulador[categoria] = [] // NOTA: .categoria é chave [categoria] é variavel
    acumulador[categoria].push(rest)
    return acumulador;
  }, {})
}


const vendas = [
  { produto: "Teclado", categoria: "Periféricos", valor: 100 },
  { produto: "Mouse", categoria: "Periféricos", valor: 50 },
  { produto: "Monitor", categoria: "Displays", valor: 900 },
  { produto: "Notebook", categoria: "Computadores", valor: 3500 },
  { produto: "Cabo HDMI", categoria: "Acessórios", valor: 30 },
  { produto: "Mousepad", categoria: "Acessórios", valor: 25 }
];

const itensAgrupados = agruparPorCategoria(vendas);
console.log(itensAgrupados);