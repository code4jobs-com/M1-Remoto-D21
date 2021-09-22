let num1 = parseInt(window.prompt("Introduce un número:"));
let num2 = parseInt(window.prompt("Introduce otro número:"));

document.getElementById("patata").innerHTML = `
<p id="suma" >La suma es ${num1 + num2}</p>
<p id="resta" >La resta es ${num1 - num2}</p>
<p id="multiplicacion" >La multiplicación es ${num1 * num2}</p>
<p id="division" >La división es ${num1 / num2}</p>
<p id="resto" >El resto es ${num1 % num2}</p>
`;

document.getElementById("suma").style.color = "red";
document.getElementById("suma").style.backgroundColor = "blue";

document.getElementById("resta").style.color = "green";
document.getElementById("resta").style.backgroundColor = "yellow";

document.getElementById("multiplicacion").style.color = "orange";
document.getElementById("multiplicacion").style.backgroundColor = "grey";

document.getElementById("division").style.color = "blue";
document.getElementById("division").style.backgroundColor = "red";

document.getElementById("resto").style.color = "yellow";
document.getElementById("resto").style.backgroundColor = "green";
