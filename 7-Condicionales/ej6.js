let num = parseInt(window.prompt("Introduce un número:"));

num < 1
  ? window.alert("Ese número es menor que 1")
  : window.alert(
      `El cuadrado de ${num} es ${num ** 2} y el cubo es ${num ** 3}`
    );
