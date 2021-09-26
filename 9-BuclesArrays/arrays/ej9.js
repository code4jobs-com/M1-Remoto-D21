let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let opcion;
do {
  opcion = parseInt(window.prompt("Introduce un número"));
  console.log(array[opcion]);
  array[opcion] = array[opcion] * 2;
} while (opcion > 0 && opcion < 10);

console.log(array);
