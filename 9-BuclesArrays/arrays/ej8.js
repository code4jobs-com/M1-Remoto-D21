let array = [];
let suma;

for (let i = 0; i < 20; i++) {
  array.push(Math.floor(Math.random() * (35 - 18) + 18));
  suma += array[i];
}

console.log(suma / 20);
