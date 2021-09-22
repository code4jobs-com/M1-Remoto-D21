let frase = window.prompt("Cuentanos algo");
let central = parseInt(frase.length / 2);

if (frase.length % 2 === 0) {
  let sub = frase.substring(central - 1, central + 1);
  console.log(sub);
} else {
  let sub = frase.substring(central, central + 1);
  console.log(sub);
}
