let num = Math.abs(parseInt(window.prompt("Introduce un número:")));

window.alert(contarCifras(num.toString()));

function contarCifras(numero) {
  return numero.length;
}
