const baseConfig = {
  versao: "1.0",
  flags: {
    debug: true
  }
};

Object.defineProperty(baseConfig, "segredo", {
  value: "token-123",
  enumerable: false,
  writable: false
});

const config = Object.create(baseConfig);

config.app = "MeuApp";
config.flags = {}; //
config.flags.debug = false;

function copiarComSpread(obj) {
  return { ...obj };
}

//const copia1 = copiarComSpread(config);

//console.log(copia1);
//console.log("segredo" in copia1);
//console.log(copia1.flags.debug);

//copia1.flags.debug = true;

//console.log(config.flags.debug);

function copiarSeguro(obj) {
  const copia = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null) {
      copia[key] = { ...value };
    } else {
      copia[key] = value;
    }
  }

  return copia;
}

const copia2 = copiarSeguro(config);
copia2.flags.debug = true;

console.log(config.flags.debug);
