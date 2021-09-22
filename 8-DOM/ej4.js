let edad = parseInt(window.prompt("Introduce tu edad:"));
let nombre = window.prompt("Introduce tu nombre:");

edad < 18
  ? ((document.getElementById(
      "patata"
    ).innerHTML = `<p>Hola ${nombre}, eres menor de edad</p>`),
    (document.getElementById("patata").style.color = "red"))
  : ((document.getElementById(
      "patata"
    ).innerHTML = `<p>Hola ${nombre}, eres mayor de edad</p>`),
    (document.getElementById("patata").style.color = "green"));
