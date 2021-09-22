let num1 = parseInt(window.prompt("Introduce el primer número:"));
let num2 = parseInt(window.prompt("Introduce el segundo número:"));
let num3 = parseInt(window.prompt("Introduce el tercer número:"));

if (num1 + num2 === num3) {
  console.log("El tercer número es la suma de los primeros");
} else {
  console.log("El tercer número no es la suma de los dos primeros");
}

num1 + num2 === 3
  ? console.log("El tercer número es la suma de los dos primeros")
  : console.log("El tercer número no es la suma de los primeros");
