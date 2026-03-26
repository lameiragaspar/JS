function SafeAuth(){
  const log = (msg) => console.log(msg);
  //Funções de validação
  const validarNome = (nome) => nome.trim() !== "";
  function validarEmail(email){
    if(!(/^(?!.*\.\.)/.test(email))) return {"status": false, email, mensagem: "não pode conter dois ou mais pontos seguidos (..)"};
    
    const regexDomineo = /\@([^.][a-z0-9._-]+[^.]$)/i;
    const domineo = email.match(regexDomineo);
    if(domineo){
      const regexEmail = new RegExp(`^[^.][a-z0-9._%+-]+[^.]@${domineo[1]}$`, "i")
      return {"status": regexEmail.test(email), email, mensagem: "é válido"};
    }
    return {"status": false, email, mensagem: "não é válido"};
  };
  ////
  log("--- INICIANDO VALIDAÇÃO DE CADASTROS SafeAuth --- \n")

  function registrar(usuariosParaCadastrar, perfisValidos){
    const users = [...usuariosParaCadastrar];
    const perfis = [...perfisValidos];

    const processos = new Set();
    return users.reduce((acc, {nome, email, idade, perfil}) => {
      processos.add(email);

      try{
        if(!validarNome(nome)){
          throw new Error("[FALHA] Registro Sem Nome: Erro de Validação - O campo 'nome' é obrigatório.");
        }

        const emailValidado = validarEmail(email);
        const {status, email: Email, mensagem } = emailValidado;

        if(!status){
          throw new Error(`[FALHA] ${nome}: Erro de Formato - O email ${Email} ${mensagem}`);
        }

        if(typeof(idade) !== "number"){
          throw new Error(`[FALHA] ${nome}: Erro de Tipo - A idade deve ser um número. Ex: 18`)
        }
        if(idade < 18){
          throw new Error(`[FALHA] ${nome}: Erro de Permissão - Idade mínima de 18 anos não atingida (${idade}).`)
        }

        if(!perfis.includes(perfil)){
          throw new Error(`[FALHA] ${nome}: Erro de Referência - O perfil '${perfil}' não é válido.`);
        }

        log(`[SUCESSO] ${nome} cadastrado com perfil ${perfil}.`)
        acc.sucesso +=1

      }catch(err) {
        log(err.message);
        acc.erro += 1;
      } finally{
        acc.processos = processos.size;
      }
      return acc;
    }, {processos: 0, sucesso: 0, erro: 0})
  };

  function relatorioDeRegistro(registros){
    const {processos, sucesso, erro} = {...registros};
    log("------------------------------------------------")
    log("         ESTATÍSTICAS DE REGISTRO")
    log("------------------------------------------------")

    log(`> Usuários processados: ${processos}`);
    log(`> Cadastros realizados: ${sucesso}`);
    log(`> Erros bloqueantes: ${erro}`);
  }

  return{
    load(usuariosParaCadastrar, perfisValidos){
      const registro = registrar(usuariosParaCadastrar, perfisValidos);
      relatorioDeRegistro(registro);
    }
  };
}

const usuariosParaCadastrar = [
  { nome: "Carlos Oliveira", email: "carlos@email.com", idade: 25, perfil: "ADMIN" },
  { nome: "Ana", email: "ana.com", idade: 19, perfil: "USER" },
  { nome: "Bruno Ramos", email: "bruno@email.com", idade: "vinte", perfil: "USER" }, 
  { nome: "Marcio Silva", email: "marcio@email.com", idade: 15, perfil: "GUEST" },
  { nome: "Julia Costa", email: "julia@email.com", idade: 30, perfil: "SUPER_USER" }, 
  { nome: "", email: "vazio@email.com", idade: 40, perfil: "USER" } 
];

const perfisValidos = ["ADMIN", "USER", "GUEST"];

// Chamada
const auth = SafeAuth();
auth.load(usuariosParaCadastrar, perfisValidos);