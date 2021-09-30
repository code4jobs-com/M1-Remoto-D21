fetch("https://jsonplaceholder.typicode.com/users")
  .then(function respuesta(res) {
    return res.json();
  })
  .then(function sacaDatos(datos) {
    console.log(datos);
    let respuesta1 = datos[0];
    console.log(respuesta1);
  });
