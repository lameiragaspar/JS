function mostrarBotaoCriar(usuario){
  return(((usuario?.ativo && usuario?.permissoes?.podeCriar)  && "Botão criar Visível") || "Oculto" );
};

function mostrarBotaoExcluir(usuario){
  return(((usuario?.role === "admin" || (usuario?.role === "editor" && usuario?.permissoes?.podeExcluir)) && usuario?.ativo && "Pode Excluir") || "Sem permissão");
};

function mostrarAreaPremium(usuario){
  return(((usuario?.role === "admin" || usuario?.plano === "pro") && "Área Premium") || "Área Comum")
};

function statusUsuario(usuario){
  return(
    usuario?
      usuario?.ativo ? "Usário ativo" : "Usuário inativo"  
    : "Visitante" 
  )
};

const usuario = {
  nome: "Pedro",
  role: "editor", // valores possíveis: "admin", "editor", user ou ""
  ativo: true,
  plano: "free", // Valores possíveis "free" e "pro"
  permissoes: {
    podeCriar: true,
    podeExcluir: false
  }
};

console.log(mostrarBotaoCriar(usuario));
console.log(mostrarBotaoExcluir(usuario));
console.log(mostrarAreaPremium(usuario));
console.log(statusUsuario(usuario));