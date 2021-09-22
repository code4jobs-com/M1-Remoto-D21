let num1 = parseInt(window.prompt("Escribe un número"));
let num2 = parseInt(window.prompt("Escribe un número"));
let num3 = parseInt(window.prompt("Escribe un número"));

if (Math.abs(num1 - num2) === 20) {
  console.log(`El ${num1} y el ${num2} tienen 20 veces de diferencia.`);
} else if (Math.abs(num1 - num3) === 20) {
  console.log(`El ${num1} y el ${num3} tienen 20 veces de diferencia.`);
} else if (Math.abs(num2 - num3) === 20) {
  console.log(`El ${num2} y el ${num3} tienen 20 veces de diferencia.`);
} else {
  console.log(
    `Ninguno de los numero introducidos tiene 20 veces de diferencia con ninguno de ellos mismos. `
  );
}
