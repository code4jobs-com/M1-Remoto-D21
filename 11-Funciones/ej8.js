let numero = parseInt(window.prompt("Introduce un número:"));

window.alert(`El factorial de ${numero} es ${factorial(numero)}`);

function factorial(num) {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial = factorial * 1;
  }
  return factorial;
}
