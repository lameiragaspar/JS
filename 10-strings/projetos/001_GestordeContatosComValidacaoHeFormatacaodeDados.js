let contatos = [];

function adicionarContato(nome, email, cpf, telefone) {

  const validarEmail = (email) =>{
    if(!(/^(?!.*\.\.)/.test(email))) return false;

    const regexDomineo = /\@([^.][a-z0-9._-]+[^.]$)/i;
    const domineo = email.match(regexDomineo);
    if(domineo){
      const regexEmail = new RegExp(`^[^.][a-z0-9._%+-]+[^.]@${domineo[1]}$`, "i");
      return regexEmail.test(email);
    }
    return false;
  };

  const validarCPF = (cpf) =>{
    if(cpf.length !==11 || /\D/.test(cpf)) return false;

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
  }

  const validarTelefone = (telefone) =>{
    if(telefone.length !== 10 || /\D/.test(telefone)) return false;
    return telefone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }

  if (!validarEmail(email)) {
    console.log("E-mail inválido.");
    return;
  }
  if (!validarCPF(cpf)) {
    console.log("CPF inválido.");
    return;
  }
  if (!validarTelefone(telefone)) {
    console.log("Telefone inválido.");
    return;
  }
  
  const contato = {
    nome,
    email,
    cpf: validarCPF(cpf),
    telefone: validarTelefone(telefone),
  };
  
  contatos.push(contato);
  console.log("Contato adicionado:", contato);
}

function listarContatos() {
  contatos.forEach((contato) => {
    console.log(`Nome: ${contato.nome}, E-mail: ${contato.email}, CPF: ${contato.cpf}, Telefone: ${contato.telefone}`);
  });
}

adicionarContato("João Silva", "joao.silva@dominio.com", "12345678909", "1234567890");
listarContatos();