const tarefas = [];

function adicionarTarefa(tarefa, descricao){
  const id = tarefas.length + 1;
  tarefas.push(
    {
      id,
      nome: tarefa,
      descricao,
      status: "pendente"
    }
  );
}

function marcarComoConcluida(id){
  return tarefas.forEach(tarefa => {
    if(tarefa.id === id) tarefa.status = "concluido";
  })
}

function removerTarefa(id) {
  const index = tarefas.findIndex(tarefa => tarefa.id === id); //findIndex retorna o index do primeiro elemento q satisfaz a condição
  if (index !== -1) {
    tarefas.splice(index, 1); // remove 1 item na posição encontrada
  }
}

function listarTarefas(){
  const statusTarefa = tarefas.reduce((acc, {status, ...rest}) =>{
    acc[status] ??= [];
    acc[status].push(rest);

    return acc;
  }, {})

  //console.log(statusTarefa)

  console.log("Tarefas Pendentes:")
  if(statusTarefa.pendente != null){
    statusTarefa.pendente.forEach(({id, nome, descricao}) =>{
      console.log(`${id}. ${nome} - ${descricao}`);
    })
  } else {
    console.log("Nenhuma");
  }
  
  console.log("Tarefas Concluídas:")
  if(statusTarefa.concluido != null){
    statusTarefa.concluido.forEach(({id, nome, descricao}) =>{
      console.log(`${id}. ${nome} - ${descricao}`);
    })
  } else {
    console.log("Nenhuma");
  }
}

adicionarTarefa("Estudar JavaScript", "Estudar conceitos de funções e objetos.");
adicionarTarefa("Fazer compras", "Comprar leite, pães e ovos.");
marcarComoConcluida(1); // Marca a tarefa 1 como concluída
listarTarefas(); // Tarefa 1 deve ser concluída, tarefa 2 deve ser pendente
removerTarefa(2); // Remove a tarefa com id 2
listarTarefas(); // Tarefa 1 ainda existe, tarefa 2 foi removida