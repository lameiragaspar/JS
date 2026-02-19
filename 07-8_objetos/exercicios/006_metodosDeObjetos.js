function filtrarPrimitivos(user){
  const dadosUser = Object.entries(user);

  const NumString = dadosUser.filter(valor =>
    typeof(valor[1]) === "number" || typeof(valor[1]) === "string"
  );
  //console.log(NumString);
  return Object.fromEntries(NumString);

}
const user = {
  nome: "Ana",
  idade: 30,
  ativo: true,
  plano: "free"
};

console.log(filtrarPrimitivos(user));
