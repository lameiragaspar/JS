/**
function definirPorta(porta){
  return porta || 3000;
};

console.log(definirPorta(0));
 */
// O problema é que 0 sempre será considerado um valor inválido pelo operador ||

//Código corrigido
function definirPorta(porta){
  return porta ?? 3000;
};

console.log(definirPorta(0));

//A diferença conceitual é que o || retonar sempre o primeiro valor truthy e 0 é considerado por ele como falsy, enquanto que o ?? só falha se o valor for indefined ou null, ou seja aceita o primeiro valor diferente desses dois