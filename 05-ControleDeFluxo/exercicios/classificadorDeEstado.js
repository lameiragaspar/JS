function classificarUsuario(usuario){
  if(usuario == null ){ // Aqui é melhor o operador == pois verifica null e undefined ao mesmo tempo
    return "Visitante";
  }
  if(usuario?.ativo === false){
    return "Usuário Inativo";
  } else if (usuario.role === "admin"){
    return "Administrador";
  } else if(usuario.role === "editor"){
    return "Editor";
  } else{
    return "Usuário Comum";
  };
};

console.log(classificarUsuario(null)); //Visitante
console.log(classificarUsuario({nome: "Ana", ativo: false, role: "Aadmin"},)); //Usuário Inativo
console.log(classificarUsuario({nome: "Pedro", ativo: true, role: "admin"},)); // Administrador
console.log(classificarUsuario({nome: "João", ativo: true, role: "editor"},)); //Editor
console.log(classificarUsuario({nome: "Maria", ativo: true, role: "user"})); //Usuário Comum
