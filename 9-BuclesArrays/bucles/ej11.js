let inverso;
let numero;

do {
  numero = window.prompt("Introduce un número:");

  for (let i = 0; i < numero.length; i++) {
    inverso += numero.substring(numero.length - 1);
  }
  console.log(inverso);
} while (numero !== "0");
