// Creación y acceso
let numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // 1
numeros[2] = 99;
console.log(numeros); // [ 1, 2, 99, 4, 5 ]

// Métodos comunes
/// push y pop
numeros.push(6); // agregar
console.log(numeros); // [ 1, 2, 99, 4, 5, 6 ]
numeros.pop(); // quitar
console.log(numeros); // [ 1, 2, 99, 4, 5 ]

/// shift y unshift
numeros.unshift(0); // agregar
console.log(numeros); // [ 0, 1, 2, 99, 4, 5 ]
numeros.shift(); // quitar
console.log(numeros); // [ 1, 2, 99, 4, 5 ]

/// foreach
numeros.forEach((numero) => {
  console.log(numero); // 1, 2, 99, 4, 5
});

/// map [1, 2, 99, 4, 5] => [ 2, 4, 198, 8, 10 ]
let dobles = numeros.map((numero) => numero * 2);
console.log(dobles);
