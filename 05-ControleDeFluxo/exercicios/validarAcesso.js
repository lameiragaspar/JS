function validarAcesso(usuario) {
  if(usuario == null) return "Acesso negado"; // Aqui o == verifica null e undefined ao mesmo tempo
  if(usuario.banido === true) return "Usuário banido";
  if(usuario.ativo !== true) return "Usuário Inativo";
  if(usuario.role === "admin") return "Acesso total";
  return "Acesso limitado";
}

console.log(validarAcesso(null));
console.log(validarAcesso({ ativo: true, banido: true, role: "admin" }));
console.log(validarAcesso({ ativo: false, banido: false, role: "admin" }));
console.log(validarAcesso({ ativo: true, banido: false, role: "admin" }));
console.log(validarAcesso({ ativo: true, banido: false, role: "user" }));
