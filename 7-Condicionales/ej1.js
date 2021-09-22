let num1 = parseInt(window.prompt("Introduce un número:"));
let num2 = parseInt(window.prompt("Introduce otro número:"));
let menor;
let mayor;

if (num1 < num2) {
  menor = num1;
  mayor = num2;
} else if (num1 > num2) {
  menor = num2;
  mayor = num1;
} else {
  menor = "son iguales";
  mayor = "son iguales";
}

console.log(
  `La suma es:${num1 + num2}, la resta es ${
    num1 - num2
  }, la multiplicación es ${num1 * num2}, la media es ${
    (num1 + num2) / 2
  } y ${mayor} es mayor que ${menor} `
);
