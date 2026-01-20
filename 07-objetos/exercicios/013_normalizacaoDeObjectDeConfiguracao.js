function normalizarConfig(config, padrao){
    const chaves = {...config};

    for(let key of Object.keys(chaves)){
        if(!padrao.hasOwnProperty(key)){delete chaves[key]}  
    }

    for(let [key, value] of Object.entries(padrao)){
        if(!chaves.hasOwnProperty(key)){
            chaves[key] = value
        }
        if(typeof chaves[key] !== typeof value){
            if(typeof value === "number"){
              chaves[key] = Number.isFinite(Number(chaves[key])) ? Number(chaves[key]) : value;
            };
            if(typeof value === "string"){
              chaves[key] = String(chaves[key]);
            };
            if(typeof value === "boolean"){
              chaves[key] = chaves[key] === "true" || chaves[key] == "1" ? true 
                : chaves[key] === "false" || chaves[key] == "0" ? false 
                : value;
            };
        }
        if(typeof value === "object" && value !== null){
            chaves[key] = normalizarConfig(chaves[key], value);
        };
    };
    return chaves;
};
const padrao = {
    app: "App",
    version: "1.0.0",
    debug: false,
    limites:{
        maxUsers: 500,
        timeout: 3000
    }
};

const config = {
    app: "QxFlow",
    debug: false,
    limites:{
        maxUsers: "500"
    }
};

const normalizado = normalizarConfig(config, padrao);

console.log(normalizado);
console.log(config);