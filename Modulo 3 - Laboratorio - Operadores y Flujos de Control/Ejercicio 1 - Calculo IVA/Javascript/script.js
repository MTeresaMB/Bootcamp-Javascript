const producto = {
  count: 3,
  price: 12.55,
  type: 'ropa',
};
/* if(producto.type == 'libro'){
  if(producto.count <= 0){
    producto.count = 0;
  }
  var price = producto.price * producto.count;
  var calIva = producto.price * 0.04;
  var totalPrice = price + calIva;
  console.log("Subtotal: " + price.toFixed(3));
  console.log("Total IVA: " + calIva.toFixed(3));
  console.log("Total: " + totalPrice.toFixed(3));
}else if(producto.type == 'alimentacion'){
  if(producto.count <= 0){
    producto.count = 0;
  }
  var price = producto.price * producto.count;
  var calIva = producto.price * 0.10;
  var totalPrice = price + calIva;
  console.log("Subtotal: " + price.toFixed(3));
  console.log("Total IVA: " + calIva.toFixed(3));
  console.log("Total: " + totalPrice.toFixed(3));
}else if(producto.type == 'ropa'){
  if(producto.count <= 0){
    producto.count = 0;
  }
  var price = producto.price * producto.count;
  var calIva = producto.price * 0.21;
  var totalPrice = price + calIva;
  console.log("Subtotal: " + price.toFixed(3));
  console.log("Total IVA: " + calIva.toFixed(3));
  console.log("Total: " + totalPrice.toFixed(3));
} */
switch (producto.type) {
  case 'libro':
    if(producto.count <= 0){
      producto.count = 0;
    }
    var price = producto.price * producto.count;
    var calIva = producto.price * 0.04;
    var totalPrice = price + calIva;
    console.log("Subtotal: " + price.toFixed(3));
    console.log("Total IVA: " + calIva.toFixed(3));
    console.log("Total: " + totalPrice.toFixed(3));
  break;
  case 'alimentacion':
    if(producto.count <= 0){
      producto.count = 0;
    }
    var price = producto.price * producto.count;
    var calIva = producto.price * 0.10;
    var totalPrice = price + calIva;
    console.log("Subtotal: " +price.toFixed(3));
    console.log("Total IVA: " + calIva.toFixed(3));
    console.log("Total: " + totalPrice.toFixed(3));
  break;
  case 'ropa':
    if(producto.count <= 0){
      producto.count = 0;
    }
    var price = producto.price * producto.count;
    var calIva = producto.price * 0.21;
    var totalPrice = price + calIva;
    console.log("Subtotal: " + price.toFixed(3));
    console.log("Total IVA: " + calIva.toFixed(3));
    console.log("Total: " + totalPrice.toFixed(3));
  break;
};