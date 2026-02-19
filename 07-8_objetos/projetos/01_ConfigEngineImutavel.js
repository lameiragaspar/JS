 // função de configuração imutavel
function objImutavel(userConfig){
  for(let [chave, valor] of Object.entries(userConfig)){
    if(typeof valor === "object" && valor !== null){
      userConfig[chave] = objImutavel(userConfig[chave]);
    }

    Object.defineProperty( userConfig, chave,{
      writable: false,
      configurable: false
    });
    
  }
  return Object.preventExtensions(userConfig);
}

function createConfigEngine(schema){ //schema é o objeto padrão com a estrutura válida definida
  return{
    load(config){ //é o objeto vindo de fontes externas precisando ser validado
      const userConfig = Object.create( // cria um cópia independente de config com todas as propriedades e descriptors
        Object.getPrototypeOf(config),
        Object.getOwnPropertyDescriptors(config)
      );

      for(let key of Object.keys(userConfig)){
        // 1 remover chave invalida
        if(!schema.hasOwnProperty(key)){
          delete userConfig[key];
        };
      };

      for(let [chave, valor] of Object.entries(schema)){
        // 2 tratar objetos de forma recusiva
        if(typeof valor === "object" && valor !== null){
          const engine = createConfigEngine(valor ?? {});
          userConfig[chave] = engine.load(userConfig[chave] ?? {});
        }
        //3 aplicando defaults
        if(!userConfig.hasOwnProperty(chave)){
          userConfig[chave] = valor
        }

        // 4 Validando tipos
        if(typeof userConfig[chave] !== typeof valor){
          if(typeof valor === "number"){
            userConfig[chave] = Number.isFinite(Number(userConfig[chave])) ? Number(userConfig[chave]): valor
          }
          if(typeof valor === "string"){
            userConfig[chave] = String(userConfig[chave]);
          }
          if( typeof valor === "boolean"){
            const truthy = ["true", "1", 1, true];
            const falsy = ["false", "0", 0, false];
            userConfig[chave] = truthy.includes(userConfig[chave]) ? true
            : falsy.includes(userConfig[chave]) ? false 
            : valor
          }
        }

      };
      return userConfig;
    }
  };
}

const schema = {
  app: "MyApp",
  debug: false,
  limits: {
    maxUsers: 100,
    timeout: 3000
  }
};

const engine = createConfigEngine(schema);

const userConfig = {
  debug: "true",
  limits: {
    maxUsers: "250"
  },
  extra: "remover"
};

const normalizado = engine.load(userConfig)
const config = objImutavel(normalizado);

console.log(config);
//console.log(userConfig);
console.log(config.debug);            // true
console.log(config.limits.maxUsers);  // 250
console.log(config.extra);            // undefined

config.debug = false;                 // não altera
config.limits.timeout = 9000;         // não altera

console.log(config);                  //Intacto