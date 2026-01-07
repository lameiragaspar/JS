function podeAcessarPainel(usuario){
  return (
    usuario?.ativo && ((usuario?.role === "admin" || usuario.role === "editor") && "Acesso permitido" ) || "Acesso negado");
};

function podeCriarConteudo(usuario){
  return(usuario?.permissoes?.podeCriar);
};

function mensagemBoasVindas(usuario){
  return((usuario?.nome && `Bem-vindo, ${usuario.nome}`) ?? "Bem-vindo, Visitante");
  // return(usuario?.nome ? `Bem-vindo, ${usuario.nome}`: "Bem-vindo, Visitante"); útil e melhor para campo de usuário vazio
}

function nivelAcesso(usuario){
  return((usuario.role === "admin" && "Admin") || (usuario.role === "editor" && "Editor") || (usuario.role === "user" && "Usuário Comum") || "Desconhecido")
}

const usuarioBase = {
  nome: "Pedro",
  role: "admin", // valores possíveis: "admin" | "editor" | user
  ativo: true,
  permissoes : {
    podeCriar: false,
    podeEditar: false
  }
};

console.log(podeAcessarPainel(usuarioBase));
console.log(podeCriarConteudo(usuarioBase));
console.log(mensagemBoasVindas(usuarioBase));
console.log(nivelAcesso(usuarioBase));