Object.prototype.hack = "Teste";

const obj = { a: 1 };

for (const k in obj) {
  console.log(k);
}
// imprime: "a" e "hack"
