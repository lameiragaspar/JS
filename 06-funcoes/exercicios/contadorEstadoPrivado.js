function criarContador(){
  let contador = 0;
  return function incrementar(){
    return ++contador; // ou contador += 1;
  }
};

const contador = criarContador();

console.log(contador());// 1
console.log(contador());// 2
console.log(contador());// 3

//Os valores são seuquências poque as chamadas usa a mesma referência, o mesmo ambiente fechado 
