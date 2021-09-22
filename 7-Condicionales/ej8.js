let num1 = parseInt(window.prompt("Introduce un número:"));
let num2 = parseInt(window.prompt("Introduce otro número:"));

if (num1 < num2) {
  window.alert(`${num1}es menor que${num2}`);
} else if (num1 > num2) {
  window.alert(`${num2}es menor que${num1}`);
} else {
  window.alert(`${num1} y ${num2} son iguales`);
}
