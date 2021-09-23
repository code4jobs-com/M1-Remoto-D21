let edad = /* parseInt(window.prompt("Introduce tu edad:")) */ 34;

for (let i = 1; i <= edad; i++) {
  document.getElementById(
    "resultado"
  ).innerHTML += `<p>Feliz cumpleaños! ${i}</p>`;
}

for (let i = 1; i <= edad; i++) {
  console.log(`Feliz cumpleaños! ${i}`);
}
for (let i = 1; i <= edad; i++) {
  document.getElementById(
    "resultado"
  ).innerHTML += `<p>Feliz cumpleaños! ${i}</p>`;
}
