function dividirNumeros(numerador, denominador){
  try{
    if(denominador === 0) throw new Error("Não é possível dividir por zero");
    console.log(numerador/denominador);
  }catch(err){
    console.log(err.message);
  }
}

dividirNumeros(10, 2); // 5
dividirNumeros(10, 0); // Erro: Não é possível dividir por zero
