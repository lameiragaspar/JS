//Exercício 2 — Congelar configuração

function congelarConfig(config){
  const configCongelado = {...config};
  return Object.freeze(configCongelado);
};

const config = {
  app: "QxFlow",
  cersao: "1.0.0",
  debug: true,
  limites: {
    maxUsers: 100,
    timeout: 5000
  }
};

const cfg = congelarConfig(config);
cfg.debug = false;
cfg.limites.maxUsers = 999;

console.log(cfg);
console.log(config);
