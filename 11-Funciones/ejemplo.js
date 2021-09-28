function calculaPrecioTotal(precio, impuestos) {
  let gastosEnvio = 10;
  let precioTotal = precio * impuestos + gastosEnvio;
  return precioTotal;
}

let precioTotalCanarias = calculaPrecioTotal(23.34, 1.11);
let precioTotalPeninsula = calculaPrecioTotal(23.34, 1.21);
