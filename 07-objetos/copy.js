{ console.log("Spread Syntax para Array --- OK")
  const user = {
    nome: "Ana",
    id: 3,
    cargo: "CEO"
  };
  console.log(user.nome);

  let admin = {...user};//Compiei o array (seu valor) não endereço
  admin.nome = "Pedro"; //Alterei o valor da chave nome apenas no array copiado, o original mantem Ana
  console.log(admin.nome);
  console.log(user.nome);
}

//Copiando array Aninhado
{
  console.log("Spread Syntax para Array aninhado --- NOT OK")
  const user = {
    nome: "Ana",
    idade: "20",
    "estado civil": "Casada",
    trabalho:{
      empresa: "google",
      cargo: "Dev Junior",
      id: 117
    },
  };
  console.log(user)
  let dev = {...user};
  dev.nome = "Pedro";
  dev.idade = "21";
  dev["estado civil"] = "Solteiro";
  dev.trabalho.cargo = "Dev Sénior";
  dev.trabalho.id = 1;
  console.log(dev);
  console.log(user)
  //Quando usamos o Spread Syntax para copiar um array aninhado, ele, copia apenas o primeiro nível, para o segundo ou mais níveis ele copia/compartinha a referência, como se tivesse feito dev = user (mas só para a segunda camada) e qualquer valor alterado para o segundo nível é alterado na REFERÊNCIA do objeto.
}

//Para resolver o erro acima, usamamos o metodo nativo

{//Copiando array Aninhado -- Metodo NATIVO
  console.log("Metodo NATIVO")
  const user = {
    nome: "Ana",
    idade: "20",
    "estado civil": "Casada",
    trabalho:{
      empresa: "google",
      cargo: "Dev Junior",
      id: 117
    },
  };
  console.log(user);
  let dev = structuredClone(user);
  dev.nome = "Pedro";
  dev.idade = "21";
  dev["estado civil"] = "Solteiro";
  dev.trabalho.cargo = "Dev Sénior";
  dev.trabalho.id = 1;
  console.log(dev);
  console.log(user)
}