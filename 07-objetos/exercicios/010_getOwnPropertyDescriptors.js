function clonarComDescriptors(obj){
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const copia = Object.create(obj, [descriptors]);
  return copia;
}

const original = {};

Object.defineProperty(original, "id", {
  value: 1, //Funciona para o exercício, mas se a ideia é manter o id original, o ideal é value: original.id
  writable: false,
  enumerable: false
});

const copia = clonarComDescriptors(original);

copia.id = 99;

console.log(copia.id);
console.log(Object.keys(copia));