function ehPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//Arrow
function famNumero(numero){
    const NumPar = (number) => (number % 2 === 0);//Arrow <= => equivalente às 7 lnhas da função padrão

    console.log(NumPar(numero));

    if(NumPar(numero)){
        console.log("É par");
    }else{
        console.log("É impar");
    }
}

const resultado = famNumero(10);
console.log(resultado); //Funão sem returns será sempre undefined
