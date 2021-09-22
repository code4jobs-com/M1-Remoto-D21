let dia = window.prompt("Introduce el día").toLowerCase();

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miércoles" ||
  dia === "miercoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  window.alert(`Hoy es ${dia}`);
} else if (dia === "sábado" || dia === "sabado" || dia === "domingo") {
  window.alert("Hoy es fin de semana!");
} else {
  window.alert("Eso no es un día de la semana ");
}
