function transformarLista(lista, transformacao){
  //const valores = [] <---> opção 1
  const valores = [...lista];
  for(let i = 0; i < lista.length; i++){
    //valores.push(transformacao(lista[i])); <---> opção 1
    valores[i] = transformacao(lista[i]);
  }
  return valores;
}
const numeros = [1,2,3,4];
const dobrados = transformarLista(numeros, n => n * 2);
const quadrados = transformarLista(numeros, n => n ** 2);

//console.log(numeros);

console.log(dobrados);
console.log(quadrados);
