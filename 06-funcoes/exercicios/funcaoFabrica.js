//CLOSURE

function criarMultiplicador(fator){ //Quando essa função é chamada, o JS criar um ambiente com a variável (parâmetro da função) fator que recebe o valor da chamada (2 na primeira chamada) e (3 na segunda)
  return(
    function multiplicar(num){ //Essa função retornada, fecha sober o closure/ambiente criado pela função criarMultiplicador, ou seja, lemba do que foi criado naquela função, que é fator = 2
       return fator * num; //retorna a multiplicação das variasveis.
    }
  );
};

const dobrar = criarMultiplicador(2); //dobrar recebe o retorno da função criarMultiplicador que é uma funtção tembém, ou seja, dobrar a gora é a função multiplicar(num)
const triplicar = criarMultiplicador(3);
console.log(dobrar(10));  //Quando executado ele retorna a o valor da multiplicação.
console.log(triplicar(10)); // Cada chamada cria um closure direfente