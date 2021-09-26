let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let opcion;

do {
  opcion = parseInt(window.prompt("Introduce un número:"));
  opcion > 10
    ? console.log("El número es incorrecto")
    : ((array[opcion] = array[opcion] + 1), console.log(array[opcion]));
} while (opcion > 0);

for (let i = 0; i < array.length; i++) {
  console.log(`${i} --- ${array[i]}`);
}
