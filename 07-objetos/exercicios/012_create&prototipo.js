const baseUser = {
    ativo: true,
    saudacao() {
        return "Olá";
    }
};

function criarUser(nome){
    const userHerdado = Object.create(baseUser); //Para HERDAR propriedades basta usar o Object.create(com o objeto de origem como parâmetro)
    //userHerdado não tem proriedades, ele lêe as propriedades do baseUser via protótipo
    userHerdado.nome = nome;
    return userHerdado;
}

const user1 = criarUser("Ana");

console.log(user1.nome);
console.log(user1.ativo);
console.log(user1.saudacao());
console.log(user1.hasOwnProperty("ativo")); //Retorna false, porque a propriedade "ativo" não é do user1, ele herdou de baseUser
