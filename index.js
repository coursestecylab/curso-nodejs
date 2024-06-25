const { builtinModules } = require("module");

console.log("Modulos nucleo de NodeJS");

builtinModules.forEach((modulo) => {
  console.log(modulo);
});
