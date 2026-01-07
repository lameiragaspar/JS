function avaliarRegra(regras, nomeRegra, usuario){
  const regra = regras[nomeRegra];
  return regra ? (regra(usuario) ? "Permitido" : "Negado")
  : "Rega Inválida";
};

const regras = {
  podeverDasboard: usuario => 
    usuario?.ativo && (usuario.role === "admin" || usuario.role === "editor"),

  podeEditarPerfil: usuario =>
    usuario?.ativo && usuario.id !== undefined,

  podeAcessarFinanceiro: usuario =>
    usuario?.role === "admin" || (usuario?.role === "editor") && usuario?.plano === "pro"
};

const usuario1 = {
  nome: "Pedro",
  id: 1,
  role: "admin", // valores possíveis: "admin", "editor", user ou ""
  ativo: true,
  plano: "pro", // Valores possíveis "free" e "pro"
  permissoes: {
    podeCriar: true,
    podeExcluir: true
  }
};
const usuario2 = {
  nome: "Mauro",
  id: 2,
  role: "editor",
  ativo: true,
  plano: "free",
  permissoes: {
    podeCriar: true,
    podeExcluir: false
  }
};
console.log(avaliarRegra(regras, "podeVerDasboard", usuario1));
console.log(avaliarRegra(regras, "podeAcessarFinanceiro", usuario2));
console.log(avaliarRegra(regras, "podeEditarPerfil", null));
console.log(avaliarRegra(regras, "naoExiste", usuario1));