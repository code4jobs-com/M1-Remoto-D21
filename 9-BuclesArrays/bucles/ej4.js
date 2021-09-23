let suma = 0;
let veces = parseInt(window.prompt("Cuantas cifras quieres sumar?"));

for (let i = 0; i < veces; i++) {
  suma += parseInt(window.prompt("Introduce otro valor:"));
}

console.log(suma / veces);

let i = 0;
while (i < veces) {
  suma += parseInt(window.prompt("Introduce otro valor:"));
  i++;
}
