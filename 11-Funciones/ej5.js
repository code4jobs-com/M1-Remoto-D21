let numero1 = parseInt(window.prompt("Introduce un número:"));
let numero2 = parseInt(window.prompt("Introduce otro número:"));

esMayor(numero1, numero2)
  ? console.log(`El primer número es más grande`)
  : console.log("El segundo número es mas grande");

function esMayor(num1, num2) {
  if (num1 > num2) {
    return true;
  } else {
    return false;
  }
}
