function calcularAreaRetangulo(largura, altura){
  try {
    const erros = [];
    if(typeof(largura) !== "number" || typeof(altura) !== "number"){
      erros.push("Erro: Largura e altura devem ser números positivos.")
    }
    if(largura <= 0) erros.push(`Erro: Largura deve ser maior que zero`)
    if(altura <= 0 ) erros.push(`Erro: Altura deve ser maior que zero`)
    if(erros.length > 0){
      throw new Error(erros.join(", "))
    }
    console.log(largura * altura);
  } catch (err) {
    console.log(err.message)
  }
}

calcularAreaRetangulo(10, 5);  // 50
calcularAreaRetangulo(0, 5);   // Erro: Largura deve ser maior que zero
calcularAreaRetangulo(10, -5); // Erro: Altura deve ser maior que zero
calcularAreaRetangulo("a", 5); // Erro: Largura e altura devem ser números positivos.