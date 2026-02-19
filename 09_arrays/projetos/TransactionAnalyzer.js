function criarRelatorio(){

  function obterTransacoesAprovadas(transacoes) {
    return transacoes.filter(({status}) => status === "aprovado");
  };

  function calcularSaldo(transacoesAprovadas) {
    return transacoesAprovadas.reduce((acc, {tipo, valor}) => 
      tipo === "entrada"
      ? acc + valor
      : tipo === "saida"
        ? acc - valor 
        : acc
    , 0)
  };

  function gerarResumoPorCategoria(transacoesAprovadas) {
    return transacoesAprovadas.reduce((acc, {categoria, valor}) =>{
      acc[categoria] = (acc[categoria] ?? 0) + valor;
      return acc;
    }, {})
  }


  return{
    load(transacoes){
      let transacoesAprovadas = obterTransacoesAprovadas(transacoes)
      let saldoFinal  = calcularSaldo(transacoesAprovadas)
      let ResumoPorCategoria = gerarResumoPorCategoria(transacoesAprovadas)
      return {
        saldo: saldoFinal, 
        ResumoPorCategoria
      };
    }
  };
};

const transacoes = [
  {
    id: 1,
    cliente: "Ana",
    tipo: "entrada",
    categoria: "Salário",
    valor: 3000,
    status: "aprovado"
  },
  {
    id: 2,
    cliente: "Carlos",
    tipo: "saida",
    categoria: "Aluguel",
    valor: 1200,
    status: "aprovado"
  },
  {
    id: 3,
    cliente: "Ana",
    tipo: "saida",
    categoria: "Alimentação",
    valor: 450,
    status: "pendente"
  },
  {
    id: 4,
    cliente: "Maria",
    tipo: "entrada",
    categoria: "Freelance",
    valor: 800,
    status: "aprovado"
  },
  {
    id: 5,
    cliente: "Carlos",
    tipo: "saida",
    categoria: "Transporte",
    valor: 200,
    status: "cancelado"
  }
];

const transacoesAprovadas = criarRelatorio()
const relatorio = transacoesAprovadas.load(transacoes)
console.log(relatorio)
