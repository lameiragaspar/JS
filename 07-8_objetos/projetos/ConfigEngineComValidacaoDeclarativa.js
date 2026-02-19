function createConfigEngine(schema){

  function clean(config){
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
  }
  function recursion(userConfig){
    for(let [chave, valor] of Object.entries(schema)){
      if(valor.type === "object" && typeof valor.schema === "object" && valor !== null){
        //console.log(schema[chave])
        const engine = createConfigEngine(valor.schema);
        userConfig[chave] = engine.load((userConfig[chave] ?? {}));
      };
    };
    //console.log(userConfig);
    return userConfig;
  }
  function DefaultTypes(userConfig){
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
        userConfig[chave] = userConfig[chave] != null ? String(userConfig[chave]) : valor.default
      };
    }
    //console.log(userConfig);
    return userConfig;
  }
  function limits(userConfig){
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
    };
    //console.log(userConfig);
    return userConfig;
  }

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
  
  return{
    load(userConfig){
      let obj = clean(userConfig);
      obj = recursion(obj);
      obj = DefaultTypes(obj);
      obj = limits(obj);

      return deepFreeze(obj);
    }
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

const normalizado = apiExterna.load(userConfig);
console.log(normalizado);