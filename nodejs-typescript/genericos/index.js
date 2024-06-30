"use strict";
// function identidad<T>(arg: T): T {
//   return arg;
// }
// let numero = identidad<number>(10);
// let texto = identidad<string>("12341");
// class Caja<T> {
//   contenido: T;
//   constructor(contenido: T) {
//     this.contenido = contenido;
//   }
//   abrir(): T {
//     return this.contenido;
//   }
// }
class Par {
    constructor(primero, segundo) {
        this.primero = primero;
        this.segundo = segundo;
    }
    imprimir() {
        console.log(`Primero: ${this.primero}`);
        console.log(`Segundo: ${this.segundo}`);
    }
}
let par = new Par("Hola", 30);
par.imprimir();
