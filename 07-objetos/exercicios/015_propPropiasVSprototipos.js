const baseUser = {
  ativo: true,
  tipo: "convidado",
  saudacao() {
    return "Olá";
  }
};

function criarUsuario(nome, tipo){
  const userHerdado = Object.create(baseUser);
  userHerdado.nome = nome;
  userHerdado.tipo = tipo;

  return userHerdado
}

const user = criarUsuario("Ana", "admin");

console.log(user.nome);                     
console.log(user.tipo);                     
console.log(user.ativo);                    
console.log(user.saudacao());               

console.log(user.hasOwnProperty("nome"));   
console.log(user.hasOwnProperty("tipo"));   
console.log(user.hasOwnProperty("ativo"));  
console.log(user.hasOwnProperty("saudacao"));

console.log("ativo" in user);               
console.log("saudacao" in user); //Esse é nova. Como funciona?           
