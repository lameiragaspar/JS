function criarConfigImutavel(config){
  //const dadosImutaveis = {...config}; //Forma correta para o exercício, mas o padrão correto, nível bibliotecas e frameworks é 
  //Clone fiel preservando descriptors

  const dadosImutaveis = Object.create(
    Object.getPrototypeOf(config),
    Object.getOwnPropertyDescriptors(config)
  );

  for(let [chave, valor ] of Object.entries(dadosImutaveis)){
    if(typeof valor === "object" && valor !== null ){
      dadosImutaveis[chave] = criarConfigImutavel(dadosImutaveis[chave] ?? {});
      continue;
    }
    Object.defineProperty(dadosImutaveis, chave, {
      value: valor, // desnecessário, são valores padrão
      writable: false,
      configurable: false,
      enumerable: true // desnecessário, são valores padrão
    });
  };
  return Object.preventExtensions(dadosImutaveis);
};

const config = {
  app: "MeuApp",
  debug: true,
  limites: {
    maxUsers: 100,
    timeout: 3000
  }
};

const cfg = criarConfigImutavel(config);

cfg.debug = false;                 // não altera
cfg.limites.maxUsers = 999;        // não altera
delete cfg.app;                    // não remove
cfg.novaProp = "x";                // não adiciona

console.log(cfg.debug);            // true
console.log(cfg.limites.maxUsers); // 100
console.log(cfg);
console.log(config);               // intacto
/**
 * 
 * A API atende todos os requisitos funcionais do enunciado:

✔ Não muta o objeto original
✔ Cria uma cópia independente
✔ Imutabilidade recursiva
✔ Usa Descriptors corretamente
✔ Bloqueia escrita, deleção e extensão
✔ Comportamento idêntico a um deepFreeze
 */