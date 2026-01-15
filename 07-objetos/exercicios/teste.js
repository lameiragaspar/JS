const array = [
  [ 'nome', 'Ana' ],
  [ 'idade', 30 ],
  [ 'ativo', true ],
  [ 'plano', 'free' ]
];
/** Código perfeito
const novo = array.filter(arr =>
  typeof(arr[1]) === "number" || typeof(arr[1]) === "string"
) */
//Versão comum e proficional no mercado
const novo = array.filter(([_, valor]) =>
  typeof valor === "number" || typeof valor === "string"
)

console.log(novo);

console.log(typeof 30);
console.log(typeof 'Ana');
console.log(typeof true);
console.log(typeof [])
console.log(typeof (n => n*2))