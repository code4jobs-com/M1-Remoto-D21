let posicion = parseInt(window.prompt("Introduce tu posición"));

posicion === 1
  ? console.log("Has ganado")
  : console.log("Lo importante es participar");

if (posicion === 1) {
  console.log("medalla de oro b ");
} else if (posicion === 2) {
  console.log("medalla de plata b ");
} else if (posicion === 3) {
  console.log("medalla de bronce b");
} else {
  console.log("Lo importante es participar B");
}

switch (posicion) {
  case 1:
    console.log("medalla de oro b ");
    break;
  case 2:
    console.log("medalla de plata b ");
    break;
  case 3:
    console.log("medalla de bronce b");
    break;
  default:
    console.log("Lo importante es participar B");
}

posicion === 1 || posicion === 2 || posicion === 3
  ? console.log("Sube al podium")
  : console.log("se acabo la carrera");
