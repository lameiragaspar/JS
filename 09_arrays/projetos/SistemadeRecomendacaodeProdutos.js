function gerarRelatoriodeComprasPorCliente(){
  
  function dadosCliente(clientes){
  return clientes.reduce((acc, { nome, compras }) => {
    acc[nome] = compras.reduce((catAcc, { produto, categoria, valor }) => {
      catAcc[categoria] = catAcc[categoria] || { totalGasto: 0, produtos: [] };
      catAcc[categoria].totalGasto += valor;
      catAcc[categoria].produtos.push(produto);
      return catAcc;
    }, {});
    return acc;
  }, {});
};


  function nomalizarProdutos(todosOsProdutos){
    return todosOsProdutos.reduce((acc, {nome, categoria}) => {
      acc[categoria] ??= [];
      acc[categoria].push(nome)

      return acc;
    }, {})
  }

  function gerarSugestoes(comprasporCliente, produtosNormalizados){
    return Object.entries(produtosNormalizados)
    .reduce((acc, [categoria, produtos]) => {
      Object.keys(comprasporCliente).forEach(cliente => {
        acc[cliente][categoria] ??= {};
        acc[cliente][categoria].totalGasto ??= 0;

        if(acc[cliente][categoria].produtos == null){
          acc[cliente][categoria].sugestao ??=  [];
          return;
        };
        
        acc[cliente][categoria].sugestao = produtos.filter(nome => !acc[cliente][categoria].produtos.includes(nome))
       
      })
      return acc
    }, structuredClone(comprasporCliente));
  };

  return{
    load(clientes, todosOsProdutos){
      const comprasporCliente = dadosCliente(clientes);
      const produtosNormalizados = nomalizarProdutos(todosOsProdutos);
      const relatorio = gerarSugestoes(comprasporCliente, produtosNormalizados);

      return relatorio;
    }
  }
}

const clientes = [
  {
    id: 1,
    nome: "Ana",
    compras: [
      { produto: "Teclado", categoria: "Periféricos", valor: 100 },
      { produto: "Mouse", categoria: "Periféricos", valor: 50 }
    ]
  },
  {
    id: 2,
    nome: "Carlos",
    compras: [
      { produto: "Monitor", categoria: "Displays", valor: 900 },
      { produto: "Cabo HDMI", categoria: "Acessórios", valor: 30 }
    ]
  },
  {
    id: 3,
    nome: "Maria",
    compras: [
      { produto: "Notebook", categoria: "Computadores", valor: 3500 },
      { produto: "Mousepad", categoria: "Acessórios", valor: 25 }
    ]
  }
];

const todosOsProdutos = [
  { nome: "Teclado", categoria: "Periféricos", valor: 100 },
  { nome: "Mouse", categoria: "Periféricos", valor: 50 },
  { nome: "Monitor", categoria: "Displays", valor: 900 },
  { nome: "Cabo HDMI", categoria: "Acessórios", valor: 30 },
  { nome: "Notebook", categoria: "Computadores", valor: 3500 },
  { nome: "Mousepad", categoria: "Acessórios", valor: 25 },
  { nome: "Webcam", categoria: "Periféricos", valor: 150 },
  { nome: "Headset", categoria: "Periféricos", valor: 200 },
  { nome: "Projetor", categoria: "Displays", valor: 1200 },
  { nome: "Placa de Vídeo", categoria: "Displays", valor: 1500 },
  { nome: "Gabinete", categoria: "Computadores", valor: 600 },
  { nome: "Teclado Mecânico", categoria: "Computadores", valor: 250 },
  { nome: "Adaptador USB", categoria: "Acessórios", valor: 40 },
  { nome: "Suporte de Celular", categoria: "Acessórios", valor: 20 }
];

const relatorio = gerarRelatoriodeComprasPorCliente()
console.dir(relatorio.load(clientes, todosOsProdutos), {depth: null})