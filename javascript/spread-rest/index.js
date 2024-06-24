// spread
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [ 1, 2, 3, 4, 5 ]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

function sumarTodos(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}

console.log(sumarTodos(1, 2, 3, 4)); // 10
