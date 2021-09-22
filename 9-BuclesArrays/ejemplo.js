let respuesta = "no";

do {
  window.alert("Hola");
  respuesta = window.prompt("Quieres que te siga saludando? ");
} while (respuesta === "si");

while (respuesta === "si") {
  window.alert("Hola");
  respuesta = window.prompt("Quieres que te siga saludando? ");
}

let i = 1;

while (i <= 3) {
  console.log("hola");
  i = i + 1;
}

for (let i = 1; i <= 3; i++) {
  console.log("hola");
}

//__________________________________

let palabra = window.prompt("Introduce una palabra:");

for (let i = 0; i < palabra.length; i++) {
  console.log(palabra.substring(i, i + 1));
}

//-----------------------------------------------------------------

let mes = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

mes[2];

let patata = [];

patata[0] = "hola";
