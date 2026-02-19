const user = {
    nome: "Ana",
    idade: 30,
    ativo: true
};

//Iterar usando for...in

for(const key in user){
    console.log(key ,":", user[key]);
};

//Iterar usando obj.entires
for( let [key, value] of Object.entries(user)){
    console.log(key,":", value);
};

//Iterar usando obj.valuer

for(let value of Object.values(user)){
    console.log(value);
};