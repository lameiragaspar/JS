function validarEmail(email){
  if(!(/^(?!.*\.\.)/.test(email))) return false;

  const regexDomineo = /\@([^.][a-z0-9._-]+[^.]$)/i;
  const domineo = email.match(regexDomineo);
  if(domineo){
    const regexEmail = new RegExp(`^[^.][a-z0-9._%+-]+[^.]@${domineo[1]}$`, "i")
    return regexEmail.test(email)
  }
  return false
}

console.log(validarEmail("teste@ominio1.Com")) // true
console.log(validarEmail("invalid-email")) // false
console.log(validarEmail("exemplo@dominio.co.uk")) // true9