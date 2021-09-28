let numero1 = parseInt(window.prompt("Introduce un número"));
let numero2 = parseInt(window.prompt("Introduce otro número"));

let respuesta = sumar(numero1, numero2);

console.log(respuesta);

function sumar(num1, num2) {
  return num1 + num2;
}
