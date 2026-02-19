function agruparTarefas(terefas) {
  const terefasOrdenadas = [...terefas].sort((a, b) => b.prioridade - a.prioridade);

  return terefasOrdenadas.reduce((acc, {status, ...rest}) => {
    acc[status] ??= [];
    acc[status].push(rest);
    return acc;
  }, {})
}

const tarefas = [
  { id: 1, titulo: "Corrigir Bug", status: "Pendente", prioridade: 3 },
  { id: 2, titulo: "Almoçar", status: "Concluída", prioridade: 1 },
  { id: 3, titulo: "Reunião", status: "Pendente", prioridade: 5 },
  { id: 4, titulo: "Documentar", status: "Pendente", prioridade: 2 }
];

console.log(agruparTarefas(tarefas));