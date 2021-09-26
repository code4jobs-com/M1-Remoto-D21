let array = [];
let suma;

for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random * 100));
  suma += array[i];
}

console.log(suma / 10);
