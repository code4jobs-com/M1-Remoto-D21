let edad = parseInt(window.prompt("Introduce tu edad:"));
let nombre = window.prompt("Introduce tu nombre:");

if (edad < 18) {
  document.getElementById(
    "patata"
  ).innerHTML = `<p>Hola ${nombre}, eres menor de edad</p>`;
} else {
  document.getElementById(
    "patata"
  ).innerHTML = `<p>Hola ${nombre}, eres mayor de edad</p>`;
}

edad < 18
  ? (document.getElementById(
      "patata"
    ).innerHTML = `<p>Hola ${nombre}, eres menor de edad</p>`)
  : (document.getElementById(
      "patata"
    ).innerHTML = `<p>Hola ${nombre}, eres mayor de edad</p>`);

switch (edad < 18) {
  case true:
    document.getElementById(
      "patata"
    ).innerHTML = `<p>Hola ${nombre}, eres menor de edad</p>`;
    break;
  case false:
    document.getElementById(
      "patata"
    ).innerHTML = `<p>Hola ${nombre}, eres mayor de edad</p>`;
    break;
}
