{const usuario = {
  nome: "Ana"
};

usuario.nome = "Carla";
usuario = { nome: "João" };
}
//R: A linha 6 causa erro, porque tenta reatribuir valor a uma constante.
const usuario = {
  nome: "Ana"
};
usuario.nome = "Carla";
usuario.nome = "João";