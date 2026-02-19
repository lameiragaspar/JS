const usuario = {
  nome: "Ana",
  idade: 28,
  cidade: "Luanda"
};

usuario.cidade = "Benguela";
usuario.ativo = true;
delete usuario.idade;

console.log(usuario);