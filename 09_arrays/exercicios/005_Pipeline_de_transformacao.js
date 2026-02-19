function resumoFinanceiro(lista) {
  const clientesPagos =  lista
  .filter(cliente => (cliente.pago === true))
  .map(({total, cliente}) => ({total, cliente})); // Retorna um novo array do mesmo tamanho, mas com os objetos reduzidos, apenas dados que serão usanos na próxima etapa.
  //return clientesPagos;
  return clientesPagos.reduce((acumulador, {total, cliente}) =>{
    acumulador.totalRecebido += total;
    acumulador.clientes.push(cliente);

    return acumulador
  }, {totalRecebido: 0, clientes: []});
}

const pedidos = [
  { cliente: "Ana", total: 120, pago: true },
  { cliente: "Carlos", total: 80, pago: false },
  { cliente: "Maria", total: 200, pago: true },
  { cliente: "João", total: 50, pago: false }
];

const resumo = resumoFinanceiro(pedidos);
console.log(resumo);