let suma = 0;
let respuesta;
do {
  respuesta = parseInt(window.prompt("Introduce otro número:"));
  respuesta < 0
    ? console.alert("No se tienen en cuenta valores negativos")
    : (suma += respuesta);
} while (respuesta !== 0);

console.log(suma);
