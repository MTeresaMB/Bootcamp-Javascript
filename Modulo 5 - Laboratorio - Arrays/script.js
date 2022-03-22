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
window.addEventListener('DOMContentLoaded', function () {
  let compra = 0;
  let buttonCesta = document.getElementById('carrito');
  buttonCesta.addEventListener('click', addElement, false);


  function addElement() {
    let tabla = document.getElementById('tabla');
    tabla.style.display = 'visible';
    let thead = document.createElement('thead');
    let filaThead = document.createElement('tr');
    let thPro = document.createElement('th');
    let thPrecio = document.createElement('th');
    let thCantidad = document.createElement('th');
    let thTotal = document.createElement('th');
    
    thPro.innerHTML = 'Producto';
    thPrecio.innerHTML = 'Precio';
    thCantidad.innerHTML = 'Cantidad';
    thTotal.innerHTML = 'Total';

    tabla.appendChild(thead);
    thead.appendChild(thPro);
    thead.appendChild(thPrecio);
    thead.appendChild(thCantidad);
    thead.appendChild(thTotal);
    thead.appendChild(filaThead);
    

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
    }
  }
});