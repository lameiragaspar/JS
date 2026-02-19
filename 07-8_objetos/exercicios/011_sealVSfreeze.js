const protegerObjeto = (obj) => Object.seal(obj);

const user = {
    nome: "Ana",
    idade: 30
};

const protegido = protegerObjeto(user);

protegido.idade = 31;
protegido.status = true;
delete protegido.nome;

console.log(protegido);