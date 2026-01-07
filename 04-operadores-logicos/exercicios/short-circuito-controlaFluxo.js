/**
function mostrarPainel(usuario){
  if(usuario && usuario.logado){
    return "Painel Exibido";
  };
};
*/
//Usando operadores lógicos sem if

function mostrarPainel(usuario){
  return usuario && usuario.loaado && "Painel exibido";
};

//Mesmo comportamento , pois se tosos forem truthy (usuario, usuario.logaado e "Painel exibido") a string será exibida por ser o último valor truthy, já que && retorna o primeiro valor falsy que ele achar e se não achar, retorna o último valor truthy