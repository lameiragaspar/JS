function criarSistemaDeCrachas(empresa){
    let idSequencial = 0;

    return function gerarCracha(nome, cargo){
        idSequencial++;
        console.log("Seu cracha foi criado com sucesso! Confira os dados abaixo");
        console.log({"ID": idSequencial, "Nome": nome,"Cargo": cargo,"Empresa": empresa});
    };
}

const sistemaGoogle = criarSistemaDeCrachas("Google");
console.log(sistemaGoogle("Pedro", "Dev"));
console.log(sistemaGoogle("Maria", "Dev Jr."));

const sistemaFace = criarSistemaDeCrachas("Facebook");
console.log(sistemaFace("João", "CEO"));