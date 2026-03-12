function contarFrequenciaPalavras(str){
  const frase = str.trim().split(/[^\p{L}]+/u).filter(Boolean);
  return frase.reduce((acc, str) => {
    const palavra = str.toLowerCase();
    acc[palavra] = (acc[palavra] ?? 0) + 1;
    return acc;
  }, {})
}

console.log(contarFrequenciaPalavras("Olá, olá, como vai você? Olá!"))
