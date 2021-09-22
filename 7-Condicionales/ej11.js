let num1 = window.prompt(
  "Introduce un número entero mayor de 25 y menor de 75:"
);
let num2 = window.prompt(
  "Introduce otro número entero mayor de 25 y menor de 75:"
);

let num11 = num1.substring(0, 1);
let num12 = num1.substring(1);
let num21 = num2.substring(0, 1);
let num22 = num2.substring(1);

if (num11 === num21 || num11 === num22 || num12 === num21 || num12 === num22) {
  window.alert("Hay dos dígitos en común!");
} else {
  window.alert("No hay ningún dígito en común");
}
