'use strict'

window.addEventListener('load', function() {
  
  let form = document.querySelector('#myForm');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    let selectRoom = document.querySelector('#room').value;
    let selectBed = document.querySelector('#bedType').value;
    let countNights = document.querySelector('#nights').value;
    let countParking = document.querySelector('#parking').value;
    let checkbox = document.querySelector('#spa').checked;
    let priceTotal;
    // if(checkbox === true){
    //   console.log(checkbox);
    //   document.getElementById('bath').innerHTML += "Spa seleccionado <br/>";

    // }

    if(selectBed === 'Single') {
      priceTotal = priceRoom(selectRoom, countNights, checkbox) - amount(countNights) + parking(countParking);
      console.log(priceTotal)
      document.getElementById('precio').innerHTML = priceTotal + "<br/>";
    }else if(selectBed === 'Triple'){
      priceTotal = priceRoom(selectRoom, countNights, checkbox) + amount(countNights) + parking(countParking);
      document.getElementById('precio').innerHTML = priceTotal + "<br/>";
    }else{
      priceTotal = priceRoom(selectRoom, countNights, checkbox) + parking(countParking);
      document.getElementById('precio').innerHTML = priceTotal + "<br/>";
    }
    // total(selectBed, checkbox);
    print(selectRoom,selectBed,countNights,countParking, checkbox);
    
  })


  // function total(selectBed, checkbox){
  //   let priceTotal
  //   if(selectBed === 'Single') {
  //     priceTotal = priceRoom(selectRoom, countNights, checkbox);
  //     console.log(priceTotal)
  //     document.getElementById('total').innerHTML = priceTotal + "<br/>";
      
  //   }else if(selectBed === 'Triple'){
  //     priceTotal = priceRoom(selectRoom, countNights, checkbox) + amount(countNights);
  //     document.getElementById('total').innerHTML = priceTotal + "<br/>";
  //   }else{
  //     priceTotal = priceRoom(selectRoom, countNights, checkbox);
  //     document.getElementById('total').innerHTML = priceTotal + "<br/>";
  //   }
  // }



  function print(selectRoom,selectBed,countNights,countParking, checkbox){
    if(checkbox === true){
      document.getElementById('bath').innerHTML += "Spa seleccionado <br/>";
    }else{
      document.getElementById('bath').innerHTML += "Spa no seleccionado <br/>";
    }
    document.getElementById('selectRoom').innerHTML = selectRoom + "<br/>";
    document.getElementById('selectBed').innerHTML += selectBed + "<br/>";
    document.getElementById('countNights').innerHTML += countNights + "<br/>";
    document.getElementById('countParking').innerHTML += countParking + "<br/>";
  }
  //funcion parking
  function parking(countParking){
    countParking *= 10;
    return countParking;
  }

  //funcion descuento
  function amount(countNights){
    let amount = countNights * 0.25;
    return amount;
  }

  //funcion precio por la habitacion, spa y parking
  function priceRoom(selectRoom, countNights, checkbox) {

    let priceSpa = 20; //precio del spa
    let rateRoom; //precio total de la habitacion con o sin spa
    let valueRoom; //precio de la habitacion

    switch(selectRoom){
      case 'Standard':
        valueRoom = 100;
        if(checkbox === true){
          rateRoom = ((valueRoom * countNights) + priceSpa);
        }else{
          rateRoom = (valueRoom * countNights);
        }
      break;
      case 'JuniorSuite':
        valueRoom = 120;
        if(checkbox === true){
          rateRoom = ((valueRoom * countNights) + priceSpa);
        }else{
          rateRoom = (valueRoom * countNights);
        }
      break;
      case 'Suite':
        valueRoom = 150;
        if(checkbox === true){
          rateRoom = ((valueRoom * countNights) + priceSpa);
        }else{
          rateRoom = (valueRoom * countNights);
        }
      break;
    }
    return rateRoom;
  }
})