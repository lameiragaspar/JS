function atualizarCidade(usuario, novaCidade){
  // usuario.endereco.cidade = novaCidade; altera a referência  do objeto de origem
  const usuarioAtualizado = {
    ...usuario, 
    endereco: {
      ...usuario.endereco,
      cidade: novaCidade
    }
  };
  return usuarioAtualizado;
};

const usuario = {
  nome: "Ana",
  endereco:{
    cidade: "Luanda"
  }
};

const novoUsuario = (atualizarCidade(usuario, "Benguela"))
console.log(novoUsuario.endereco.cidade);
console.log(usuario.endereco.cidade);
