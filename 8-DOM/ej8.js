let edad = parseInt(window.prompt("Introduce tu edad:"));

if (edad < 18) {
  document.getElementById("patata").innerHTML =
    "<h1>No tienes edad para conducir</h1>";
} else {
  let carnet = window.prompt("¿Tienes carnet de conducir?").toLowerCase();

  if (carnet === "no") {
    document.getElementById("patata").innerHTML =
      "<h1>No tienes carnet para conducir</h1>";
  } else {
    let nombre = window.prompt("Introduce tu nombre:");
    let apellido = window.prompt("Introduce tu apellido:");
    let ciudad = window.prompt("¿En qué ciudad quieres recoger el coche?");
    let dias = window.prompt("¿Cuántos días quieres alquilar el coche?");
    let coste;
    let semanas = parseInt(dias / 7);
    dias >= 7
      ? (coste = semanas * 150 + (dias - semanas * 7) * 25)
      : (coste = dias * 25);

    document.getElementById(
      "patata"
    ).innerHTML = `<p>${nombre} ${apellido} tienes tu coche alquilado por una duración de ${dias} en ${ciudad} y con coste de ${coste}€.</p>`;
  }
}
