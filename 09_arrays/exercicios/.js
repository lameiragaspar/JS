//map VS flatMap
//map modifica
const modificado = [1,2,3].map(n => [n, n*2]); //Pra cada elemento do array, cria um array como elemeto do tipo [n, n*2]
console.log(modificado); //Saída: [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ] ]

//flatMat modifica e achata
const modificadoEhAchatado = [1,2,3].flatMap(n => [n,n*2]); //Pra cada elemento do array, cria um array como elemeto do tipo [n, n*2] e achata tudo em um único array
console.log(modificadoEhAchatado); //Saída: [ 1, 2, 2, 4, 3, 6 ] que é o mesmo que [ 1, 2 ], [ 2, 4 ], [ 3, 6 ] achatado

const resultado = [1, 2, 3].reduce((acc, valor, index, array) => {
  if (index === array.length - 1) {
    acc.ultimo = valor;
  }
  return acc;
}, {});

console.log(resultado);

const vendas = [
  { vendedor: "Ana", valor: 100 },
  { vendedor: "Carlos", valor: 50 },
  { vendedor: "Ana", valor: 200 },
  { vendedor: "Beatriz", valor: 300 },
  { vendedor: "Carlos", valor: 150 }
];

console.log(vendas.some(vendedor => vendedor.vendedor === "Ana"))

vendas.forEach(vendedor => {
  console.log(vendas.some(nome => nome.vendedor === vendedor.vendedor))
})