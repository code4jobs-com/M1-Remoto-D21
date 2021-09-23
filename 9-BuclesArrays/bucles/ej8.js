let opcion;
let interruptor = true;

do {
  opcion = window.prompt("Elige (P)ares o (I)mpares:");
  if (opcion === "I" || opcion === "P") {
    interruptor = false;
  }
} while (interruptor);

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0 && opcion === "P") {
    console.log(i);
  } else if (i % 2 !== 0 && opcion === "I") {
    console.log(i);
  }
}
