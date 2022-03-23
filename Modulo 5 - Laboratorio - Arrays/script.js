const carrito = [{
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
  },

];

let compra = 0;
let buttonCesta = document.getElementById('carrito');
let buttonListado = document.getElementById('listado');
let buttonBorrado = document.getElementById('borrado');
buttonCesta.addEventListener('click', addElement);
buttonListado.addEventListener('click', listadoProductos);
buttonBorrado.addEventListener('click', function(){
  let indice;
  for(let i = 0; i < carrito.length; i++){
    if(carrito[i].id == 54657){
      indice = i;
    }
  }
  carrito.splice(indice, 1);
  listadoProductos();
});


function addElement() {
  tabla.style.display = 'block';
  while (compra < carrito.length) {
    let fila = document.createElement('tr');
    let nombre = document.createElement('td');
    let precio = document.createElement('td');
    let cantidad = document.createElement('td');
    let totalProducto = document.createElement('td');

    nombre.innerHTML = carrito[compra].name;
    precio.innerHTML = carrito[compra].price + "€";
    cantidad.innerHTML = carrito[compra].count;
    totalProducto.innerHTML = Number((carrito[compra].price * carrito[compra].count).toFixed(2)) + "€";

    fila.appendChild(nombre);
    fila.appendChild(precio);
    fila.appendChild(cantidad);
    fila.appendChild(totalProducto);
    tabla.appendChild(fila);
    compra++;
  };
};

function listadoProductos() {
  tabla.style.display = 'block';
  while (compra < carrito.length) {
    let fila = document.createElement('tr');
    let nombre = document.createElement('td');
    let precio = document.createElement('td');
    let cantidad = document.createElement('td');
    let totalProducto = document.createElement('td');

    nombre.innerHTML = carrito[compra].name;
    precio.innerHTML = carrito[compra].price + "€";
    cantidad.innerHTML = '';
    totalProducto.innerHTML = '';

    fila.appendChild(nombre);
    fila.appendChild(precio);
    fila.appendChild(cantidad);
    fila.appendChild(totalProducto);
    tabla.appendChild(fila);
    compra++;
  };
}

