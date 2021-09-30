let patata = {
  fecha: "13-09-2021",
  categoria: 3,
  procedencia: {
    pais: "España",
    provincia: "Murcia",
  },
  array: [1, 2, 3, 4, 5],
};

console.log(JSON.stringify(patata));

localStorage.setItem("favoritos", JSON.stringify(patata));
localStorage.setItem("favoritos2", "la venganza");

console.log(localStorage.getItem("favoritos"));

console.log(JSON.parse(localStorage.getItem("favoritos")));

let recuperado = JSON.parse(localStorage.getItem("favoritos"));

console.log(recuperado.array[2]);

recuperado.array[2] = "patata";

localStorage.setItem("favoritos", JSON.stringify(recuperado));

console.log(recuperado.array[2]);
