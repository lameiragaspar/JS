function processarNumeros(lista){
  const numerosValidos = lista.filter(num => !(num <= 0) );
  const duplo = numerosValidos.map(num => num * 2);

  return duplo;
};

const numeros = [10, -5, 0, 3, 8];
const resultado = processarNumeros(numeros);
console.log(resultado);
//console.log(numeros);