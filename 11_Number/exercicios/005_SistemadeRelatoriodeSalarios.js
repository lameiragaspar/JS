function calcularSalario(funcionario){

 /* if (!funcionario || !funcionario.salarioBruto || !funcionario.imposto || !funcionario.beneficio) {
    throw new Error("Dados incompletos.");
  }*/

  const salarioBruto = funcionario.salarioBruto;
  const imposto = funcionario.imposto;
  const beneficio = funcionario.beneficio;

  const impostoAplicado = salarioBruto * (imposto / 100);
  const salarioLiquido = salarioBruto - impostoAplicado + beneficio;

  return {
    salarioBruto: (salarioBruto.toFixed(2)),
    impostoAplicado: (impostoAplicado.toFixed(2)),
    salarioLiquido: (salarioLiquido.toFixed(2))
  };
}
const funcionario = {
  salarioBruto: 5000, 
  imposto: 15, // 15% de imposto
  beneficio: 300 // Benefício fixo
};

console.log(calcularSalario(funcionario));