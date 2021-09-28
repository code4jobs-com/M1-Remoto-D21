let numero = parseInt(window.prompt("Introduce un número:"));

esPar(numero)
  ? window.alert(`El número ${numero} es par`)
  : window.alert(`El número ${numero} no es par`);

function esPar(num) {
  return num % 2 === 0;
}
