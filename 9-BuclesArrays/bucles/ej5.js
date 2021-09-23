let suma = 0;
let respuesta;
do {
  respuesta = parseInt(window.prompt("Introduce otro número:"));
  suma += respuesta;
} while (respuesta !== 0);

console.log(suma);
