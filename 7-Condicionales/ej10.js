let num1 = Math.abs(parseInt(window.prompt("Introduce un valor:")));
let num2 = Math.abs(parseInt(window.prompt("Introduce otro valor:")));

let mayor;
let menor;

if (num1 > num2) {
  menor = num2;
  mayor = num1;
} else {
  menor = num1;
  mayor = num2;
}

if (num1 === num2) {
  window.alert("0");
} else if (num1 % 6 === num2 % 6) {
  window.alert(`El número menor es ${menor}`);
} else if (num % 6 !== num2 % 6) {
  window.alert(`El número mayor es ${mayor}`);
}
