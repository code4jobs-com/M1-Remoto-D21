let brochas = 0;
let llaves = 0;
let martillos = 0;
let troncos = 0;

let cesta = "";
let cestaBrochas = "";
let cestaLlaves = "";
let cestaMartillos = "";
let cestaTroncos = "";

function imprimirCesta() {
  cesta = "";
  cestaBrochas = "";
  cestaLlaves = "";
  cestaMartillos = "";
  cestaTroncos = "";
  if (brochas > 0) {
    for (let i = 0; i < brochas; i++) {
      cestaBrochas += `<img src="iconos/Copia de brocha.svg" alt="brocha" style="width:25px" />`;
    }
    cesta += `<div class="productoCesta" id="brochasCesta">
    <h6>Brochas:</h6>${brochas}
    ${cestaBrochas}
    </div>`;
  }
  if (llaves > 0) {
    for (let i = 0; i < llaves; i++) {
      cestaLlaves += `<img src="iconos/Copia de llave.svg" alt="brocha" style="width:25px" />`;
    }
    cesta += `<div class="productoCesta" id="brochasCesta">
    <h6>Brochas:</h6>${llaves}
    ${cestaLlaves}
    </div>`;
  }
  if (martillos > 0) {
    for (let i = 0; i < martillos; i++) {
      cestaMartillos += `<img src="iconos/Copia de martillo.svg" alt="brocha" style="width:25px" />`;
    }
    cesta += `<div class="productoCesta" id="brochasCesta">
    <h6>Brochas:</h6>${martillos}
    ${cestaMartillos}
    </div>`;
  }
  if (troncos > 0) {
    for (let i = 0; i < troncos; i++) {
      cestaTroncos += `<img src="iconos/Copia de tronco.svg" alt="brocha" style="width:25px" />`;
    }
    cesta += `<div class="productoCesta" id="brochasCesta">
    <h6>Brochas:</h6>${troncos}
    ${cestaTroncos}
    </div>`;
  }

  document.getElementById("cestaProductos").innerHTML = cesta;
}

function modificaProducto(producto, operacion) {
  if (producto === "brochas") {
    operacion === "+" ? brochas++ : brochas--;
  }
  if (producto === "llaves") {
    operacion === "+" ? llaves++ : llaves--;
  }
  if (producto === "martillos") {
    operacion === "+" ? martillos++ : martillos--;
  }
  if (producto === "troncos") {
    operacion === "+" ? troncos++ : troncos--;
  }
  imprimirCesta();
}
