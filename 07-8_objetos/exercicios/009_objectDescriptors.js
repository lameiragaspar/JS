function protegerId(obj){
  const userProtegido = {...obj};
  Object.defineProperty(userProtegido, "id", {
    //value: 1, //Não errado para o exercício, mas fixa o valor 1
    //O correto conceitualemte seria 
    value: userProtegido.id,
    writable: false,
    enumerable: true
  })
  return userProtegido;
}

const user = {
  id: 5,
  nome: "Ana",
  Idade: 30
};
const protegido = protegerId(user);
protegido.id = 99;
protegido.nome = "Maria";

console.log(protegido);

console.log(user);