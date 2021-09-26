let pass = window.prompt("Introduce una contraseña:");
let test1 = false;

if (pass.length >= 8) {
  for (let i = 0; i < 10; i++) {
    if (pass.includes(i.toString())) {
      test1 = true;
    }
  }
  if (test1) {
    if (pass.substring(0, 1) === pass.substring(0, 1).toUpperCase()) {
      console.log("la contraseña es válida");
    } else {
      console.log("La primera letra debe ser mayúscula");
    }
  } else {
    console.log("la contraseña debe incluir algún número.");
  }
} else {
  console.log("la contraseña debe tener 8 caracteres");
}
