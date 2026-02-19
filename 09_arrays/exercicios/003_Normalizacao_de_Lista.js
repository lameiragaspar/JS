function normalizarUsuarios(lista){
  return lista.reduce((acumulador, {ativo, ...rest}) => {
    if(ativo){
      acumulador.ativos.push(rest)
    } else {
      acumulador.inativos.push(rest)
    }
    return acumulador;
  }, {ativos: [], inativos: []})
}

const usuarios = [
  { id: 1, nome: "Ana", ativo: true },
  { id: 2, nome: "Carlos", ativo: false },
  { id: 3, nome: "Maria", ativo: true },
  { id: 4, nome: "João", ativo: false }
];

const listaNormalizada = normalizarUsuarios(usuarios);
console.log(listaNormalizada);