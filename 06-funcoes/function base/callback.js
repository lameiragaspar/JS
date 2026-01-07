function processarPedido(id, callbackMessage){
  console.log(`Processando pedido de usuário com id: ${id}`);
  if(id <= 100){
    const mensagem = "Acesso limitado";
    callbackMessage(id, mensagem);
  }
  if( id > 100 && id <= 130){
    const mensagem = "Acesso total";
    callbackMessage(id, mensagem);
  }
};

function avisarUsuario(id, mensagem){
  console.log("Pedido finalizado");
  console.log(`Id iformado: ${id}, você tem: ${mensagem}`);
}

processarPedido(101, avisarUsuario)