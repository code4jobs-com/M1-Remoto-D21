fetch("https://rickandmortyapi.com/api/character/")
  .then(function respuesta(res) {
    return res.json();
  })
  .then(function sacarDatos(data) {
    console.log(data);
    for (let i = 0; i < data.results.length; i++) {
      document.getElementById("patata").innerHTML += `
  <div>
  <img src="${data.results[i].image}" alt="${data.results[i].name}"/>
  <h3>${data.results[i].name}</h3>
  </div>
  `;
    }
  });
