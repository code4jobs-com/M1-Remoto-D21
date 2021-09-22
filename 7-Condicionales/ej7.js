let num1 = parseInt(window.prompt("Introduce un número:"));
let num2 = parseInt(window.prompt("Introduce otro número:"));

num2 !== 0
  ? window.alert(`La división de ${num1} entre ${num2} es ${num1 / num2}`)
  : window.alert("Eso no es divisible");
