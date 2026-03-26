function cadastrarUsuario(nome, email, idade){
  // Funções de validação
  function validarEmail(email){
    if(!(/^(?!.*\.\.)/.test(email))) return false;

    const regexDomineo = /\@([^.][a-z0-9._-]+[^.]$)/i;
    const domineo = email.match(regexDomineo);
    if(domineo){
      const regexEmail = new RegExp(`^[^.][a-z0-9._%+-]+[^.]@${domineo[1]}$`, "i")
      return regexEmail.test(email);
    }
    return false;
    //O padrão /\S+@\S+\.\S+/ em JavaScript é uma expressão regular simples para verificar se uma string tem o formato básico de um e-mail.
  };
  const name = (nome) => nome.trim() !== "";
  const age = (idade) => idade > 18;

  //Bloco de teste
  try{
    const erros = [];
    if(!name(nome)) erros.push("Erro: Nome não pode ser vazio.");
    if(!validarEmail(email)) erros.push("Erro: E-mail inválido.");
    if(!age(idade)) erros.push("Erro: Idade deve ser maior que 18.");
    
    if(erros.length > 0){
      throw new Error(erros.join(", ")); //.join(", ") é um método que junta todos os elementos do array em uma única string, usando a string passada como separador (neste caso, ", ").
    };
    console.log("Cadastro realizado com sucesso.");
  } catch (error){
    console.log("Verifique os campos abaixo:" ,error.message);
  };
};

cadastrarUsuario("João", "joao@example.com", 20); // Cadastro realizado com sucesso.
cadastrarUsuario("", "joao@example.com", 20);    // Erro: Nome não pode ser vazio.
cadastrarUsuario("João", "joao", 20);             // Erro: E-mail inválido.
cadastrarUsuario("João", "joao@example.com", 17); // Erro: Idade deve ser maior que 18.