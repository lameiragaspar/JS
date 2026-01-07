// const cidade = user && user.endereco && user.endereco.cidade;

//Forma correta:
const cidade = user?.endereco?.cidade;

// Quando se usa o ?. não precisa mais do &&
/**
 O ?. faz o seguinte:
 user == null
  ? undefined
  : user.endereco == null
      ? undefined
      : user.endereco.cidade
Ou seja:
Se user for null ou undefined → undefined
Se endereco não existir → undefined
Sem crash
Sem &&
Sem ruído
 */