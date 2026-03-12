const contarPalavras = (str) =>{
  const palavras = str.trim().split(/\s+/).filter(Boolean);
  //const palavras = str.trim().split(" ").filter(Boolean);
  return palavras.length;
}

console.log(contarPalavras("Olá, como você está?")) // 4
console.log(contarPalavras("Eu estou bem, obrigado!")) // 4