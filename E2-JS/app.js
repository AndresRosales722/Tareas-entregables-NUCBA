const pizzas = [
  {
    id: 1,
    nombre: "pizza comun",
    precio: 500,
    ingredientes: ["queso", "salsa", "condimientos"],
  },

  {
    id: 2,
    nombre: "pizza especial",
    precio: 700,
    ingredientes: ["queso", "salsa", "condimientos", "aceitunas", "paleta"],
  },

  {
    id: 3,
    nombre: "pizza vegana",
    precio: 800,
    ingredientes: ["queso vegano", "salsa", "condimientos", "aceitunas"],
  },

  {
    id: 4,
    nombre: "pizza cuatro quesos",
    precio: 750,
    ingredientes: [
      "queso azul",
      "salsa",
      "condimientos",
      "queso crema",
      "queso de avestruz",
    ],
  },

  {
    id: 5,
    nombre: "pizza fugazzeta",
    precio: 600,
    ingredientes: ["queso", "salsa", "condimientos", "cebolla"],
  },

  {
    id: 6,
    nombre: "pizza italiana",
    precio: 1000,
    ingredientes: [
      "queso premium",
      "salsa la toscana",
      "condimientos de la india",
    ],
  },
];

function qs(element) {
  return document.querySelector(element);
}

let $h2 = qs("#h2"),
  $h4 = qs("#h4"),
  $input = qs("#input"),
  $btn = qs("#btn");
   

  let capturarValor =() => {
    let inputValue = $input.value;

    if( 0 <= inputValue &&  inputValue < pizzas.length){
    $h2.innerText = `Nombre de la Pizza:  ${pizzas[inputValue].nombre}`;
    $h4.innerText = `Precio de la Pizza: $${pizzas[inputValue].precio}`;
    } else {
      $h2.innerText = `No hay pizzas disponibles para el numero ingresado`
      $h4.innerText = "";
    }
  }

$btn.addEventListener('click', capturarValor);