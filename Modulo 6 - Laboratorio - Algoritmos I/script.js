// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;
// Entrada.
const products = [{
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

var container = document.getElementById('container');

var createDescription = product => {
  var nameProduct = document.createElement('p');
  nameProduct.innerHTML = product.description;
  nameProduct.setAttribute('class', 'product-name');
  container.appendChild(nameProduct);
}

var showProducts = productList => {
  for (var product of productList) {
    createDescription(product);
    createPrice(product);
    createInputs(product);
  }
}

var createInputs = product => {
  var input = document.createElement('input');
  input.setAttribute('class', 'product-units');
  input.setAttribute('type', 'number');
  input.setAttribute('value', product.units);
  input.addEventListener('change', event => parseInt(product.units = parseInt(event.target.value)));
  container.appendChild(input)
}

var createPrice = product => {
  var productPrice = document.createElement('p');
  productPrice.innerHTML = product.price + "€/ud";
  productPrice.setAttribute('class', 'product-price');
  container.appendChild(productPrice)
}
showProducts(products);

document.getElementById('button-calculate').addEventListener('click', () => {
  document.getElementById('Subtotal').innerHTML = "Subtotal: " + totalCost(products) + "€";
  document.getElementById('iva').innerHTML = "IVA: " + getIva(products) + "€";
  document.getElementById('total').innerHTML = "TOTAL: " + getTotal() + "€";

})

var getTotal = () => {
  var total = 0;
  total = totalCost(products) + getIva(products);
  console.log(total);
  return total;
}

var productCost = product => {
  var productCost = (product.price * product.units);
  return productCost;
}

var totalCost = productList => {
  var totalCost = 0;
  for (var product of productList) {
    if (product.units >= 0) totalCost += productCost(product);
  }
  return parseInt(totalCost.toFixed(2));
}

var getIva = productList => {
  var totalIva = 0;
  for (var product of productList) {
    totalIva += productCost(product) * product.tax / 100;
  }
  return parseInt(totalIva.toFixed(2));
}
