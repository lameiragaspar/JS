{"use strict";
nome = "Pedro";
console.log(nome);
}
// O que acontece?
//R: Com o strict mode ativado, atribuir valor a uma variavel não declarada lança erro envez de criar uma variavel global

/*Código ajustado */
{
  "use strict";
  let nome = "Pedro";
  console.log(nome);
}