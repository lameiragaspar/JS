/** 
function atualizarUser(user){
    user.ativo = false;
};

const user = {nome: "Ana", ativo: true};

atualizarUser(user);
console.log(user);

  O código funciona porque a atualizarUsuario(user) pega a referência direta do objeto, não cria uma cópia 

*/

//Resposta

function atualizerUser(user){
    const userUpdate = {...user}
    userUpdate.ativo = false;
    console.log(userUpdate)
};

const u = {nome: "Ana", ativo: true};
atualizerUser(u);
console.log(u);
