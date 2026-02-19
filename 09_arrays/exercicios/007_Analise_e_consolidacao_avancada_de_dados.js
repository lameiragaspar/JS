function gerarRelatorioEstruturado(transacoes){
  return transacoes
        //({ status }) => status === "aprovado" mais proficional
  .filter(transacao => transacao.status === "aprovado")
  .reduce((acumulador, {cliente, categoria, valor}) => {
    acumulador.totalAprovado += valor;
    acumulador.clientes[cliente] = (acumulador.clientes[cliente] ?? 0) + valor
    acumulador.categorias[categoria] = (acumulador.categorias[categoria] ?? 0) + valor;

    return acumulador
  }, {totalAprovado: 0, clientes: {}, categorias: {}})
}

const transacoes = [
  { cliente: "Ana", categoria: "Alimentação", valor: 50, status: "aprovado" },
  { cliente: "Carlos", categoria: "Transporte", valor: 30, status: "aprovado" },
  { cliente: "Ana", categoria: "Alimentação", valor: 20, status: "pendente" },
  { cliente: "Maria", categoria: "Lazer", valor: 100, status: "aprovado" },
  { cliente: "Carlos", categoria: "Alimentação", valor: 70, status: "aprovado" },
  { cliente: "Maria", categoria: "Transporte", valor: 40, status: "cancelado" }
];

const relatorioFinanceiro = gerarRelatorioEstruturado(transacoes);
console.log(relatorioFinanceiro)