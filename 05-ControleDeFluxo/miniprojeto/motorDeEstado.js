function transicionar(estado, acao){
  switch(estado.status){
    case "offline":
      if(acao.tipo === "ENTRAR") return { ...estado, status: "online" };
      break;

    case "online":
      if(acao.tipo === "OCUPAR") return { ...estado, status: "ocupado" };
      if(acao.tipo === "SAIR") return { ...estado, status: "offline" };
      break;

    case "ocupado":
      if(acao.tipo === "LIBERAR") return { ...estado, status: "online" };
      break;
  }

  return estado;
}

const estadoInicial = {
    status: "offline" //Valores possíveis "offline", "online", "ocupado" 
};

let estado = estadoInicial;

estado = transicionar(estado, { tipo: "ENTRAR" });
estado = transicionar(estado, { tipo: "OCUPAR" });
estado = transicionar(estado, { tipo: "LIBERAR" });
estado = transicionar(estado, { tipo: "SAIR" });

console.log(estadoInicial);
console.log(estado);