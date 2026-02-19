let user = {
  nome: "Jez",
  mostrar() {
    console.log(this.nome);
  }
};

setTimeout(user.mostrar, 1000); // Saída atual: undefined
// Como corrigir essa linha?

{
  let user = {
    nome: "Jez",
    mostrar() {
      console.log(this.nome);
    }
  };

  setTimeout(user.mostrar.bind(user), 1000); // Saída atual: Jaz
  //  O método .bind() serve para fixar o valor de this de uma função de forma permanente, além de permitir pré-definir argumentos.
}

{
  let user = {
    nome: "Jez",
    mostrar() {
      console.log(this.nome);
    }
  };

  setTimeout( () => user.mostrar(), 1000); // Saída atual: Jaz
  // arrow functions NÃO têm this próprio, mas pode envolver a chamada num arrow dentro do setTimeout. agora quem chama mostrar() é user, mantendo o this correto.
}