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

let buttonCesta = document.getElementById('carrito').addEventListener('click', addElement);
let buttonListado = document.getElementById('listado').addEventListener('click', listadoProductos);
/**
 * funcion que muestra listado de los productos sin el producto indicado de borrar
 */

let buttonBorrado = document.getElementById('borrado').addEventListener('click', function(){
  let indice;
  for(let i = 0; i < carrito.length; i++){
    if(carrito[i].id == 54657){
      indice = i;
    }
  }
  carrito.splice(indice, 1);
  listadoProductos();
});;

let buttonTotalCarrito = document.getElementById('totalCarrito').addEventListener('click', totalCarrito);
let buttonPrime = document.getElementById('productoPrime').addEventListener('click', productPrime);

let tableBody = document.getElementById('tbody');

/**
 * funcion que muestra el carrito de productos con el total de cada producto calculado
 */
function addElement() {
  tabla.style.display = 'block';
  for(let compra in carrito) {
    let nombre = `<td>${carrito[compra].name}</td>`;
    let precio = `<td>${carrito[compra].price}</td>`;
    let cantidad = `<td>${carrito[compra].count}</td>`;
    let totalProducto = `<td>${Number((carrito[compra].price * carrito[compra].count).toFixed(2)) + "€"}</td>`;
    tableBody.innerHTML += `<tr>${nombre + precio + cantidad + totalProducto}</tr>`;
  };
};

/**
 * Muestra el listado de productos junto con su precio 
 */
function listadoProductos() {
  tabla.style.display = 'block';
  for(let compra in carrito) {
    let nombre = `<td>${carrito[compra].name}</td>`;
    let precio = `<td>${carrito[compra].price}</td>`;
    let cantidad = `<td></td>`;
    let totalProducto = `<td></td>`;
    tableBody.innerHTML += `<tr>${nombre + precio + cantidad + totalProducto}</tr>`;
  };
}

/**
 * Calcula el total de los productos del carrito, si el total supera los 100€ se aplica descuento del 5%
 */
function totalCarrito(){
  let total = 0;
  let totalAmount = 0;
  tabla.style.display = 'block';
  for(let compra in carrito){
    let nombre = `<td>${carrito[compra].name}</td>`;
    let precio = `<td>${carrito[compra].price}</td>`;
    let cantidad = `<td>${carrito[compra].count}</td>`;
    let totalProducto = `<td>${Number((carrito[compra].price * carrito[compra].count).toFixed(2)) + "€"}</td>`;
     
    tableBody.innerHTML += `<tr>${nombre + precio + cantidad + totalProducto}</tr>`;
    total += carrito[compra].price * carrito[compra].count;
  }
  if(total > 100){
    let amount = total * 0.05;
    totalAmount = total - amount;
    console.log(totalAmount);
    tableBody.innerHTML += `<tr><td><b>Total</td><td>Descuento 5%</td><td></td><td>${totalAmount.toFixed(2)}</td></tr>`;
  }else{
    tableBody.innerHTML += `<tr><td><b>Total</td><td></td><td></td><td>${total}</td></tr>`;
  }
  
}

/**
 * Lista los productos que son prime
 */
function productPrime(){
  tabla.style.display = 'block';
  let listPrime = [];
  for (let compra in carrito){
    if(carrito[compra].premium == true){
      listPrime.push(carrito[compra]);
      let nombre = `<td>${carrito[compra].name}</td>`;
      let precio = `<td>${carrito[compra].price}</td>`;
      let cantidad = `<td>${carrito[compra].count}</td>`;
      let totalProducto = `<td>${Number((carrito[compra].price * carrito[compra].count).toFixed(2)) + "€"}</td>`;
      let sinGastos = `<td>Pedido sin gastos de envio</td>`;
      tableBody.innerHTML += `<tr>${nombre + precio + cantidad + totalProducto + sinGastos}</tr>`;
    }
  }
}

