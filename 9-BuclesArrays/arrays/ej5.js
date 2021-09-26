let meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

let peticion = parseInt(window.prompt("Introduce un número del 1 al 12"));

console.log(meses[peticion - 1]);
