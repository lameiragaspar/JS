function removerCampos(obj, camposParaRemover){
  /**
  const camposUteis = Object.entries(obj).filter(([chave, _]) =>{
    return camposParaRemover.includes(chave) !== true
  }) */
  //Padrão proficional, mesmo resultado
  const camposUteis = Object.entries(obj).filter(([chave, _]) => 
    !camposParaRemover.includes(chave)
  )
  return Object.fromEntries(camposUteis);
}

const user = {
  nome: "Ana",
  idade: 30,
  ativo: true,
  plano: "free"
};

const resultado = removerCampos(user, ["ativo", "plano"]);
console.log(resultado);
console.log(user);