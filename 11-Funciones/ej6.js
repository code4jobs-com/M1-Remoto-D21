do {
  let numero1 = parseInt(window.prompt("Introduce un número:"));
  let numero2 = parseInt(window.prompt("Introduce otro número:"));

  window.alert(dividir(numero1, numero2));
} while (numero2 !== 0);

function dividir(num1, num2) {
  return num1 / num2;
}
