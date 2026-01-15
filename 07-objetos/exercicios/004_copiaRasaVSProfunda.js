const original = {
  nome: "Ana",
  endereco : {
    cidade: "Luanda"
  }
};

const copia = {...original} //Quando se trata de objetos aninhados, o spreed se torna "obsoleto", fazendo apenas a cópia da primeira camada

//Para fazer uma cópia profunda, temos duas opções
const copia2 = {...original, endereco: {...original.endereco}} //Faz cópia do objeto aninhado por completo. Útil para opbjeto de duas camadas, pode complicar a syntax se o objeto tiver mais que isso.
copia2.endereco.cidade = "Benguela";

//Ou o metodo nativo que faz uma Deep copy Syntaxy mais limpa
const copia3 = structuredClone(original); 
copia3.endereco.cidade = "Benguela";

console.log(copia3.endereco.cidade);
console.log(original.endereco.cidade);

/**Código modificado para melhor entendimento */
{
  console.log("Código modificado para melhor entendimento")
  const original = {
    nome: "Ana",
    endereco: {
      cidade: "Luanda"
    }
  };

  const copia = structuredClone(original);

  copia.endereco.cidade = "Benguela";
  console.log(original.endereco.cidade);
  console.log(copia.endereco.cidade);
}