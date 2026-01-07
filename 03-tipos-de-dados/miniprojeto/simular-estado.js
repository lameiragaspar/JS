function login (estado){
  return{
    ...estado, // retorna uma cópia do estado que é um objeto composto (objeto de objeto)
    usuario:{ //Dentro do objeto estado tem um objeto usuario
      ...estado.usuario, //Faz uma cópia desse usuário também (o que anula a cópia raza (apenas a primeira camada) do spread (...))
      autenticado: true //E altera o autenticado pra true
    }
  };
};

function atualizarNome(estado, novoNome){
  return{
    ...estado,
      usuario:{
        ...estado.usuario,
        nome: novoNome
      }
  };
};

function depositar(estado, valor){
  if (valor <= 0) return estado;

  return{
    ...estado, //Não faço uma cópia do usuário porque ele não muda. Não preciso mecher nele.
    saldo: estado.saldo + valor,
  };
};

function logout(estado){
  return{
    ...estado,
    usuario:{
      ...estado.usuario,
      autenticado:false
    }
  };
};
const estadoInicial = {
  usuario: {
    nome: "Pedro",
    autenticado: false
  },
  saldo: 100
};

let estado = estadoInicial;

estado = login(estado);
estado = atualizarNome(estado, "Carlos");
estado = depositar(estado, 0)
estado = logout(estado);

console.log(estadoInicial);
console.log(estado);