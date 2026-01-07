function atualizarNome(usuario, novoNome){
  //deve retorar um novo objeto
  // const novoUser = {...usuario}; correto
  // novoUser.nome = novoNome; 
  //forma mais concisa (mas mesmo conceito):
  const novoUser = {...usuario, nome: novoNome};
  return novoUser;
};

function adicionarSaldo(saldoAtual, valor){
  //deve retornar um novo número
  const novoSaldo = saldoAtual + valor;
  return novoSaldo;
}

const user = {nome: "Pedro", idade: 20};
let saldo = 1000;

const userAtualizado = atualizarNome(user, "Carlos");
const novoSaldo = adicionarSaldo(saldo, 500);

console.log(user.nome);
console.log(userAtualizado.nome);
console.log(saldo);
console.log(novoSaldo);