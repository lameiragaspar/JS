{const original = {valor: 10};
const copia = original;

copia.valor = 20;

console.log(original.valor);// Objetos apontam pra mesma referência na memória, alterar um, altera outro.
console.log(copia.valor);   // Objetos apontam pra mesma referência na memória, alterar um, altera outro.
}
//Corrigindo o código

const original = {valor: 10};
const copia = {...original};

copia.valor = 20;

console.log(original.valor);
console.log(copia.valor);