function formatarValorMonetario(valor, localidade, moeda){
  return new Intl.NumberFormat(localidade, {
    style: "currency",
    currency: moeda
  }).format(valor)
}

const valor = 123456.789;
const localidade = 'pt-BR'; // Localidade do Brasil (real)
const moeda = 'BRL'; // Moeda Real

console.log(formatarValorMonetario(valor, localidade, moeda));