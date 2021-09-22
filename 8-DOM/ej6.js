let opcion = parseInt(
  window.prompt(`
Elige una opción:
1 - suma
2 - resta
3 - multiplicación
4 - división
5 - resto
`)
);

let escribe = document.getElementById("patata");

let num1 = parseInt(window.prompt("Introduce un número:"));
let num2 = parseInt(window.prompt("Introduce otro número:"));

switch (opcion) {
  case 1:
    escribe.innerHTML = `<p>La suma de ${num1} y ${num2} es ${num1 + num2}</p>`;
    break;
  case 2:
    escribe.innerHTML = `<p>La resta de ${num1} y ${num2} es ${
      num1 - num2
    }</p>`;
    break;
  case 3:
    escribe.innerHTML = `<p>La multiplicación de ${num1} y ${num2} es ${
      num1 * num2
    }</p>`;
    break;
  case 4:
    escribe.innerHTML = `<p>La división de ${num1} y ${num2} es ${
      num1 / num2
    }</p>`;
    break;
  case 5:
    escribe.innerHTML = `<p>El resto de ${num1} y ${num2} es ${
      num1 % num2
    }</p>`;
}
