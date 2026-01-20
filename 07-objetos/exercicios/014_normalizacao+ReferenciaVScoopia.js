function aplicarDefaults(config, defaults){
  const userConfig = {...config};
  const padrao = defaults; // Não clona o que não será modificado

  for(let key of Object.keys(userConfig)){ //Remove propriedades desnecessárias
    if(!padrao.hasOwnProperty(key)){
      delete userConfig[key];
    }
  }
  
  for(let [chavePadrao, valorPadrao] of Object.entries(padrao)){
    if(typeof valorPadrao === "object" && typeof valorPadrao !== null){//typeof de null também retorna objeto por isso a segunda verificação
      userConfig[chavePadrao] = aplicarDefaults(userConfig[chavePadrao] ?? {}, valorPadrao); //Aplica recursão
      continue;
    }

    if(!userConfig.hasOwnProperty(chavePadrao)){ //Cria propiedades que o usuário não mandou
      userConfig[chavePadrao] = valorPadrao;
      continue;
    }

    if(typeof userConfig[chavePadrao] !== typeof valorPadrao ){

      if(typeof valorPadrao === "number"){
        userConfig[chavePadrao] = Number.isFinite(Number(userConfig[chavePadrao])) ? Number(userConfig[chavePadrao]) : valorPadrao
      }
      if(typeof valorPadrao === "string"){
        userConfig[chavePadrao] = String(userConfig[chavePadrao])
      }
      if(typeof valorPadrao === "boolean"){
        userConfig[chavePadrao] = userConfig[chavePadrao] === "true" || userConfig[chavePadrao] == "1"
          ? true
          : userConfig[chavePadrao] === "false" || userConfig[chavePadrao] == "0" 
          ? false 
          : valorPadrao 
      };
    };

  };
  return userConfig;

};

const defaults = {
  theme: "light",
  debug: false,
  limits: {
    maxUsers: 100,
    timeout: 3000
  }
};

const config = {
  debug: "true",
  limits: {
    maxUsers: "200"
  },
  extra: "remover"
};

const resultado = aplicarDefaults(config, defaults);

console.log(resultado);
console.log(config);
console.log(defaults);
