const baseUser = {
  ativo: true,
  role: "guest"
};

const usuario = Object.create(baseUser);

usuario.nome = "Ana";
usuario.idade = 30;

function extrairPropriedadesProprias(obj){
  const usuario = Object.entries({...obj}).filter(([propriedadesProprias, _]) => 
    obj.hasOwnProperty(propriedadesProprias)
  )
  return Object.fromEntries(usuario)
  //Código redundante porque o spread copia apenas propriedades prontas, ou seja, ao usá-lo {...obj} ele já remove as propriedades herdadas.
  //Então temos duas soluções retornar apenas o spread: return {...obj}, ou
  //usar o .filter com o spread: Object.entries(obj).filter(...)
}

const resultado = extrairPropriedadesProprias(usuario);

console.log(resultado);

console.log("ativo" in resultado);         
console.log(resultado.hasOwnProperty("ativo"));