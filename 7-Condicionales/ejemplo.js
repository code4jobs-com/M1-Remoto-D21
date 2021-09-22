let edad = parseInt(window.prompt("Introduce tu edad:"));

if (edad >= 18) {
  console.log("Eres mayor de edad!");
} else {
  console.log("Aún no eres mayor de edad!");
}

if (nota >= 10) {
  console.log("Sobresaliente");
} else if (nota >= 8) {
  console.log("Notable");
} else if (nota >= 6) {
  console.log("Bien");
} else if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}

switch (nota) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("suspendido");
    break;
  case 5:
    console.log("aprobado");
    break;
  case 6:
  case 7:
    console.log("bien");
    break;
  default:
    console.log("notable o mas");
}

if (edad >= 15) {
  if ((pueblo = "madrid")) {
    console.log("Estas invitado");
  }
}

if (edad >= 15 || pueblo == "Madrid" || altura == 170) {
  console.log("Estas invitado");
}
//Hola que tal

if (edad >= 18) {
  console.log("Eres mayor de edad!");
} else {
  console.log("Aún no eres mayor de edad!");
}

edad >= 18
  ? console.log("Eres mayor de edad!")
  : console.log("Eres menor de edad");

edad >= 18 ? console.log("Eres mayor") : console.log("Eres menor");
