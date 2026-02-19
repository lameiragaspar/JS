function somarPositivos(lista){
  const total = lista.reduce((valTotal, item) => 
    item > 0 ? valTotal + item : valTotal 
  , 0)
  return total;
}

const numeros = [10, -5, 0, 3, 8];

const total = somarPositivos(numeros);
console.log(total);