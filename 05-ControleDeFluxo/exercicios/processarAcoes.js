function processarAcao(estado, acao){
    //Deve retonar um novo estado
    switch(acao.tipo){
        case "LOGIN":
            return{...estado, ativo: true};
        case "LOGOUT":
            return{...estado, ativo: false};
        case "INCREMENTAR":
            return{...estado, contador: estado.contador + 1}; // Aqui fazer ++estado.contador, altera O ESTADO antes da cópia do SREAD(...)
        case "DECREMENTAR":
            return{...estado, contador: estado.contador - 1};
        default:
            return estado;
    };
};

const estadoInicial = {
    ativo: false,
    contador: 0
};

let estado = estadoInicial;

estado = processarAcao( estado, {tipo: "LOGIN"});
estado = processarAcao( estado, {tipo: "INCREMENTAR"});
estado = processarAcao( estado, {tipo: "INCREMENTAR"});
estado = processarAcao( estado, {tipo: "LOGOUT"});

console.log(estado);
