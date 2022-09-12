const pizzas = [

    comun = {
        id: 1,
        nombre: 'pizza comun',
        precio: 500,
        ingredientes: ['queso','salsa','condimientos']
    },

    especial = {
        id: 2,
        nombre: 'pizza especial',
        precio: 700,
        ingredientes: ['queso','salsa','condimientos','aceitunas','paleta']
    },

    vegana = {
        id: 3,
        nombre: 'pizza vegana',
        precio: 800,
        ingredientes: ['queso vegano','salsa','condimientos','aceitunas']
    },

    cuatroQuesos = {
        id: 4,
        nombre: 'pizza cuatro quesos',
        precio: 750,
        ingredientes: ['queso azul','salsa','condimientos','queso crema','queso de avestruz']
    },

    fugazzeta = {
        id: 5,
        nombre: 'pizza fugazzeta',
        precio: 600,
        ingredientes: ['queso','salsa','condimientos','cebolla']
    },

    italiana = {
        id: 6,
        nombre: 'pizza italiana',
        precio: 1000,
        ingredientes: ['queso premium','salsa la toscana','condimientos de la india']
    }

]

// EJERCICIO A 
let pizzasImpar = () => {
  pizzas.filter( pizza =>
    pizza.id % 2 == 1 ? console.log(`la ${pizza.nombre} tiene un id impar de ${pizza.id}`): ""
  );
}
pizzasImpar()

// EJERCICIO B
let calcularPrecioMinimo = () => {
  pizzas.filter( pizza => {
    pizza.precio < 600 ? console.log(`las pizzas disponibles por menos de 600 son ${pizza.nombre}: $${pizza.precio}`) : "";
  });
}
calcularPrecioMinimo();


// EJERCICIO C
let pizzasCatalogo =() => {
  console.log("Pizzas en el menu");
  pizzas.filter( pizza => console.log(`${pizza.nombre}: $${pizza.precio}`));
}
pizzasCatalogo();


// EJERCICIO D
let ingredientesPorPizza = () => {
  pizzas.forEach( pizza =>
    console.log(`La ${pizza.nombre} tiene los ingredientes: ${pizza.ingredientes}`)
  );
}
ingredientesPorPizza();