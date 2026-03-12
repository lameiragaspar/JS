function verificarAnagrama(palavra, anagrama){
  if(palavra.trim().length !== anagrama.trim().length) return false;

  const palavraOrdenada = palavra.toLowerCase().trim().split("").sort((a, b) => a.localeCompare(b, 'pt-br'));
  const anagramaOrdenado = anagrama.toLowerCase().trim().split("").sort((a, b) => a.localeCompare(b, 'pt-br'));

  // Comparar os arrays diretamente
  return palavraOrdenada.every((letra, index) => letra === anagramaOrdenado[index]) //every verifica se cada todos os elementos do array satisfasem a condicção

};

console.log(verificarAnagrama("amor", "Roma")) // true
console.log(verificarAnagrama("carro", "ocarr")) // true
console.log(verificarAnagrama("casa", "casas")) // false

//Alternativa
{
  function verificarAnagrama(palavra, anagrama) {
    if (palavra.trim().length !== anagrama.trim().length) return false;

    const contarLetras = (str) => {
      return str.toLowerCase().trim().split("").reduce((acc, letra) => {
        acc[letra] = (acc[letra] ?? 0) + 1;
        return acc;
      }, {});
    };

    const palavraContagem = contarLetras(palavra);
    const anagramaContagem = contarLetras(anagrama);

    // Verificar se ambos os objetos de contagem são iguais
    return Object.keys(palavraContagem).every((letra) => palavraContagem[letra] === anagramaContagem[letra]); //Verifica se cada levra ocorreu o mesmo tamto de vezes nos objetos.
  }
}