function formatarCPF(cpf){
  if(cpf.length !==11 || /\D/.test(cpf)){
    return (`CPF ${cpf} invalido`);
  }
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

console.log(formatarCPF("12345678909")) // "123.456.789-09"
console.log(formatarCPF("98765432100")) // "987.654.321-00"