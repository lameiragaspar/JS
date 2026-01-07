
{
  if (true) {
    var a = 10;
    let b = 20;
  }

  console.log(a);
  console.log(b);

};
//Código corrigido

{let a = null;
let b = null;
if(true){
  a = 10;
  b = 20;
};

console.log(a);
console.log(b);}

/** O var tem escopo de função global (não cria escopo em blocos), por isso no código anterior funcionava, Já O let possue escopo de bloco, respeita as chaves e morre quando elas terminam, ou seja fora do bloco o let não existe */