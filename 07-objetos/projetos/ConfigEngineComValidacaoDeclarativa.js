function deepFreeze(obj){
    for(let [chave, valor] of Object.entries(obj)){
        if(typeof valor === "object" && valor !== null){
            obj[chave] = deepFreeze(obj[chave]);
        };
        Object.defineProperty(obj, chave,{
            writable: false,
            configurable: false
        });
    };
    
    return Object.preventExtensions(obj);
};

function createConfigEngine(schema){
    return{
        clean(config){
            const userConfig = Object.create(
                Object.getPrototypeOf(config),
                Object.getOwnPropertyDescriptors(config)
            );
            
            for(let key of Object.keys(userConfig)){
                if(!schema.hasOwnProperty(key)){
                    delete userConfig[key];
                }
            }
            //console.log(userConfig)
            return userConfig;
        },
        recursion(userConfig){
          for(let [chave, valor] of Object.entries(schema)){
            if(valor.type === "object" && typeof valor.schema === "object" && valor !== null){
              //console.log(schema[chave])
              const engine = createConfigEngine(valor.schema);
              userConfig[chave] = engine.limits(engine.DefaultTypes(engine.clean(userConfig[chave])));
            };
          };
          //console.log(userConfig);
          return userConfig;
        },
        DefaultTypes(userConfig){
          for(let [chave, valor] of Object.entries(schema)){
            // 1 Add chaves em falta
            if(!userConfig.hasOwnProperty(chave)){
              userConfig[chave] = valor.default;
            };
            // 2 Normalisar tipos
            if(valor.type === "boolean"){
              const truthy = ["true", "1", 1, true];
              const falsy = ["false", "0", 0, false];

              userConfig[chave] = truthy.includes(userConfig[chave]) ? true
              : falsy.includes(userConfig[chave]) ? false
              : valor.default;
            };
            if(valor.type === "number"){
              userConfig[chave] = Number.isFinite(Number(userConfig[chave])) ? Number(userConfig[chave]) : valor.default;
            };
            if(valor.type === "string"){
              userConfig[chave] = String(userConfig[chave]) != null ? String(userConfig[chave]) : valor.default
            };
          }
          //console.log(userConfig);
          return userConfig;
        },
        limits(userConfig){
          for( let [chave, regra] of Object.entries(schema)){
            if(!userConfig.hasOwnProperty(chave)){
              continue;
            };

            if(regra.type === "number"){
              //console.log(regra);
              if(typeof regra.min === "number" && userConfig[chave] < regra.min){
                userConfig[chave] = regra.default;
              };
              if(typeof regra.max === "number" && userConfig[chave] > regra.max){
                userConfig[chave] = regra.default;
              }
            };

            if(regra.type === "object" && typeof regra.schema === "object"){
                const engine = createConfigEngine(regra.schema);
                userConfig[chave] = engine.limits(userConfig[chave]);
            };
          };
          //console.log(userConfig);
          return userConfig
        },
    };
};

const schema = {
  app: {
    default: "MyApp",
    type: "string"
  },
  debug: {
    default: false,
    type: "boolean"
  },
  limits: {
    type: "object",
    schema: {
      maxUsers: {
        default: 100,
        type: "number",
        min: 1,
        max: 1000
      },
      timeout: {
        default: 3000,
        type: "number",
        min: 100
      }
    }
  }
};

const userConfig = {
  debug: "true",
  limits: {
    maxUsers: "5000", // inválido (acima do max)
    timeout: "50",     // inválido (abaixo do min)
    extra2: "remover"
  },
  extra: "remover"
};

const apiExterna = createConfigEngine(schema);

const limpo = apiExterna.clean(userConfig);
const recursivo = apiExterna.recursion(limpo);
const validado = apiExterna.DefaultTypes(recursivo);
const normalizado = deepFreeze(apiExterna.limits(validado));
console.log(normalizado);