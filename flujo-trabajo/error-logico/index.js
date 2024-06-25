function calcularPromedio(notas) {
  const total = notas.reduce((a, b) => a + b, 0);
  return total / notas.length;
}

const notas = [8, 9, 10];
console.log(calcularPromedio(notas));
// Error logico si es que notas es un arrar vacio

// Corrección
function calcularPromedio(notas) {
  if (notas.length === 0) return 0; // Manejo de caso de array vacío
  const total = notas.reduce((a, b) => a + b, 0);
  return total / notas.length;
}
