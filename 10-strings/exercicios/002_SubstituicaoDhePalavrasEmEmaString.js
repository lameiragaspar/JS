function substituirPalavras(str, palavraAhSerSubstituida, palavraAhSubstituir){
  const regex = new RegExp(palavraAhSerSubstituida.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&'), "g");
  // (/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&') <-> Isso vai garantir que, mesmo se você tentar substituir uma palavra com caracteres especiais, a expressão regular funcione corretamente
  return str.replace(regex, palavraAhSubstituir);
}

console.log(substituirPalavras("O sol está brilhando e o céu está azul", "está", "estava") )
// "O sol estava brilhando e o céu estava azul"