const texto = "React é legal. React é incrível.";
const regex = /react/ig;
console.log(texto.match(regex)); // ["React", "React"]

const url = "https://api.site.com/users/9981/profile";
const regexId = /users\/(\d+)\//;
const resultado = url.match(regexId);
console.log(resultado);
if (resultado) {
  console.log("ID encontrado:", resultado[1]); // "9981"
}

const domineo = "google.com"
const regexEmail = new RegExp(`^[a-zA-Z0-9._%+-]+@${domineo}$`)
console.log(regexEmail.test("user@gmail.com"))

