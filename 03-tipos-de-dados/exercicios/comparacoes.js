console.log([] == false); //Array vazio 
console.log({} == false);
console.log(null == 0);

//== sinal de igualdade raza, verifia apenas valor e não tipo
//1 - true array vazio e false têm o mesmo "valor"
//2 - false objeto guarda referência, um objeto vazio não é igual a nada
//3 - false null é diferente de tudo inclusive dele mesmo  

console.log(([]) === false);
console.log(({}) === false);
console.log(null === 0);