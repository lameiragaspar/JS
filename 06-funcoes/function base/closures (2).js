function externa(){
    let contador = 0;

    return function interna(){
        contador++;
        return contador;
    };
}

const contar = externa();
console.log(contar);