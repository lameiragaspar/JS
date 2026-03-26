function obterIdade(idade){
  try{
    if(typeof(idade) !== "number" || idade <= 0 ) throw new Error("Idade inválida.");
    console.log(idade);
  }catch(err){
    console.log("Erro:", err.message);
  }
}

obterIdade(25); // 25
obterIdade(-5); // Erro: Idade inválida
obterIdade("idade"); // Erro: Idade inválida