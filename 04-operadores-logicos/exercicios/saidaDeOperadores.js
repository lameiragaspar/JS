console.log("JS" && 0); // 0 --> Retorna o primeiro valor FALSY se todos forem TRUTHY, retorna o último valor.
console.log(null || "default"); // "default" --> Retorna o primeiro valor TRUTHY, Se nenhum for TRUTHU retorna o último.
console.log(undefined ?? "fallback"); // "fallback" --> Só falha se o valor for NULL ou UNDEFINED. Considera o primeiro valor diferente de null ou undefined.
console.log("" || "texto"); //"texto", é o primeiro valr truthy
console.log(false ?? true); // false --> é o primeiro valor e é diferente de null ou undefined.