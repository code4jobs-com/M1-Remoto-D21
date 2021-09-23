let num = parseInt(window.prompt("Introduce un número:"));

let estilo = {
  color: "black",
};

document.getElementById("patata").innerHTML = `<h1>${numero}</h1>`;

if (numero < 100) {
  estilo.color = "green";
} else if (numero < 200) {
  estilo.color = "yellow";
} else {
  estilo.color = "red";
}

document.getElementById("patata").style.color = estilo.color;
