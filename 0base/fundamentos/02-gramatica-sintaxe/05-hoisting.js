{console.log(a);

let a = 10;}

//O código causa erro fatal.
//usando o let, a variavel é içada, mas não inicializada. Tentar acessa-la antes de linha de declaração causa o erro.

{
  let a = 10;
  console.log(a);
}