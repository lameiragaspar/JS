function clonarComDescriptors(obj){
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const copia = Object.create(obj, [descriptors]);
  return copia;
}

const original = {};

Object.defineProperty(original, "id", {
  value: 1,
  writable: false,
  enumerable: false
});

const copia = clonarComDescriptors(original);

copia.id = 99;

console.log(copia.id);
console.log(Object.keys(copia));