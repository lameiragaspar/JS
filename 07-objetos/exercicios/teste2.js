const padrao = {
        app: "App",
        criacao: 2025,
        versao: "1.0.0",
        debug: true,
        limites:{
            maxUsers: 500,
            timeout: 3000
        }
    };

    const config = {
    app: "QxFlow",
    criacao: "2005",
    nome:"",
    debug: "tre",
    limites:{
        maxUsers: "500"
    }
};
const chaves = {...config, limites: {...config.limites}};
//console.log(chaves)
    const chavesPadrao = Object.entries(padrao);

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
            }
            if(typeof value === "string"){
              chaves[key] = String.prototype.includes((chaves[key])) ? String(chaves[key]) : value;
            };
            if(typeof value === "boolean"){
              chaves[key] = chaves[key] === "true" || chaves[key] == "1" ? true 
                : chaves[key] === "false" || chaves[key] == "0" ? false 
                : value
            }
        }  
    };
console.log(chaves)