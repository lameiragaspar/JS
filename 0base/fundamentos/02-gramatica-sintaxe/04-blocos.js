let contador = 1;

{
  let contador = 2;
  console.log(contador);
}

console.log(contador);
//R: O código imprime : 2 e 1 porque cada console acessa uma variavel diferente o contador dentro do escopo morre fora do bloco e console fora do bloco acessa o let fora do bloco.

{
  let contador = 2;

  {
    console.log(contador);
  }

  console.log(contador);
}