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

class Par<T, U> {
  primero: T;
  segundo: U;

  constructor(primero: T, segundo: U) {
    this.primero = primero;
    this.segundo = segundo;
  }

  imprimir(): void {
    console.log(`Primero: ${this.primero}`);
    console.log(`Segundo: ${this.segundo}`);
  }
}

let par = new Par<string, number>("Hola", 30);
par.imprimir();
