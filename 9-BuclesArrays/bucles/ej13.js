let fecha = window.prompt("Introduce tu fecha de nacimiento (DD-MM-AAAA):");

let dia = parseInt(fecha.substring(0, 2));
let mes = parseInt(fecha.substring(3, 5));
let anyo = parseInt(fecha.substring(7));

let numero1 = dia + mes + anyo.toString();
let numero2;

do {
  for (let i = 0; i < numero1.length; i++) {
    numero2 += parseInt(numero1.substring(i, i + 1));
  }
  numero2.toString();
  numero1 = numero2;
} while (numero2.length > 1);

console.log(`Tu número de la suerte es: ${numero2}`);
