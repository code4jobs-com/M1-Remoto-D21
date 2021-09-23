let temp = parseInt(window.prompt("Qué temperatura hace?"));

if (temp > 40) {
  console.log("vete a otro sitio");
} else if (temp >= 30) {
  console.log("Enciente el aire acondicionado");
} else if (temp >= 20) {
  console.log("No hagas nada");
} else if (temp >= 10) {
  console.log("Enciende la calefacción");
} else {
  console.log("Vete a otro sitio");
}
