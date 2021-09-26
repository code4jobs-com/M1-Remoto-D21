let numero = window.prompt("introduce un número de 3 dígitos: ");
let suma;

for (let i = 0; i < numero.length; i++) {
  suma += parseInt(numero.substring(i, i + 1));
}

console.log(suma);
