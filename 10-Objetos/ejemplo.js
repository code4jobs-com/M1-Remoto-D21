let patata = {
  verdura: "zanahoria",
  fruta: "sandia",
  "esto también es una clave": 3,
};

console.log(patata.fruta);
console.log(patata.verdura);
console.log(patata["esto también es una clave"]);

patata.verdura = "tomate";

console.log(patata.verdura);

patata.postre = "flan";

console.log(patata.postre);
console.log(patata);

delete patata.postre;

console.log(patata);

patata.frutero = {
  citricos: ["limones", "naranjas"],
  bayas: ["frambuesa", "mora"],
};

console.log(patata);
console.log(patata.frutero.bayas);

patata = {
  verdura: "tomate",
  fruta: "sandia",
  "esto también es una clave": 3,
  frutero: {
    citricos: ["limones", "naranjas"],
    bayas: ["frambuesa", "mora"],
  },
};

let variable = ["perro", "gato", "liebre"];

patata.animales = { primero: variable[0], segundo: variable[1] };

console.log(patata);

console.log(patata.animales.segundo);
