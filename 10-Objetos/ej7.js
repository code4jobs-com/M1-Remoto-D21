let sistemaSolar = [
  {
    nombre: "mercurio",
    color: "gris",
    fondo: "grey",
    temperatura: 350,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1024px-Mercury_in_color_-_Prockter07_centered.jpg",
  },
  {
    nombre: "venus",
    color: "blanco",
    fondo: "white",
    temperatura: 460,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
  },
  {
    nombre: "tierra",
    color: "morado",
    fondo: "purple",
    temperatura: 14,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg",
  },
  {
    nombre: "marte",
    color: "rojo",
    fondo: "red",
    temperatura: -46,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg",
  },
  {
    nombre: "jupiter",
    color: "marrón",
    fondo: "brown",
    temperatura: -121,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
  },
  {
    nombre: "saturno",
    color: "amarillo",
    fondo: "yellow",
    temperatura: -130,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg",
  },
  {
    nombre: "urano",
    color: "azul",
    fondo: "blue",
    temperatura: -205,
    imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
  },
  {
    nombre: "neptuno",
    color: "azul",
    fondo: "blue",
    temperatura: -220,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
  },
  {
    nombre: "plutón",
    color: "blanco",
    fondo: "white",
    temperatura: -229,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg",
  },
];

let planet1;
let planet2;
let planet3;

do {
  planet1 = window.prompt("Introduce un planeta: ").toLowerCase();
  planet2 = window.prompt("Introduce otro planeta: ").toLowerCase();
  planet3 = window.prompt("Introduce otro planeta más: ").toLowerCase();
} while (
  planet1 === planet2 ||
  planet2 === planet3 ||
  planet1 === planet3 ||
  !(
    (planet1 === sistemaSolar.mercurio.nombre ||
      planet1 === sistemaSolar.venus.nombre ||
      planet1 === sistemaSolar.tierra.nombre ||
      planet1 === sistemaSolar.marte.nombre ||
      planet1 === sistemaSolar.jupiter.nombre ||
      planet1 === sistemaSolar.saturno.nombre ||
      planet1 === sistemaSolar.urano.nombre ||
      planet1 === sistemaSolar.pluton.nombre) &&
    (planet2 === sistemaSolar.mercurio.nombre ||
      planet2 === sistemaSolar.venus.nombre ||
      planet2 === sistemaSolar.tierra.nombre ||
      planet2 === sistemaSolar.marte.nombre ||
      planet2 === sistemaSolar.jupiter.nombre ||
      planet2 === sistemaSolar.saturno.nombre ||
      planet2 === sistemaSolar.urano.nombre ||
      planet2 === sistemaSolar.pluton.nombre) &&
    (planet3 === sistemaSolar.mercurio.nombre ||
      planet3 === sistemaSolar.venus.nombre ||
      planet3 === sistemaSolar.tierra.nombre ||
      planet3 === sistemaSolar.marte.nombre ||
      planet3 === sistemaSolar.jupiter.nombre ||
      planet3 === sistemaSolar.saturno.nombre ||
      planet3 === sistemaSolar.urano.nombre ||
      planet3 === sistemaSolar.pluton.nombre)
  )
);
