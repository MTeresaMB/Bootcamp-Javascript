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

    let amount = countNights * 0.25;
    let priceTotal;

    if(selectBed === 'Single'){
      priceTotal = priceRoom(selectRoom, countNights, checkbox, countParking) - amount;
      printBill(selectRoom, selectBed, countNights, countParking);
      document.getElementById('amount').innerHTML += "Descuento 25% aplicado a la tarifa";
      document.getElementById('priceTotal').innerHTML += priceTotal;

    }else if(selectBed === 'Triple'){
      priceTotal = priceRoom(selectRoom, countNights, checkbox, countParking) + amount;
      printBill(selectRoom, selectBed, countNights, countParking);
      document.getElementById('amount').innerHTML += "Tarifa +25% <br/>";

    }else{
      priceTotal = priceRoom(selectRoom, countNights, checkbox, countParking);
      printBill(selectRoom, selectBed, countNights, countParking);
      document.getElementById('amount').innerHTML += "No se aplica descuento para esta habitacion <br/>";  
    }
  })
  function priceRoom(selectRoom, countNights, checkbox, countParking) {
    countParking *= 10;
    let priceSpa = 20;
    let rateRoom;
    let valueRoom;
    switch(selectRoom){
      case 'Standard':
        valueRoom = 100;
        if(checkbox === true){
          rateRoom = ((valueRoom * countNights) + priceSpa)  + countParking;
        }else{
          rateRoom = (valueRoom * countNights) + countParking;
        }
      break;
      case 'JuniorSuite':
        valueRoom = 120;
        if(checkbox === true){
          rateRoom = ((valueRoom * countNights) + priceSpa) + countParking;
        }else{
          rateRoom = (valueRoom * countNights) + countParking;
        }
      break;
      case 'Suite':
        valueRoom = 150;
        if(checkbox === true){
          rateRoom = ((valueRoom * countNights) + priceSpa) + countParking;
        }else{
          rateRoom = (valueRoom * countNights) + countParking;
        }
      break;
    }
    return rateRoom;
  }

  function printBill(selectRoom,selectBed,countNights,countParking){
    document.getElementById('selectRoom').innerHTML = selectRoom + "<br/>";
    document.getElementById('selectBed').innerHTML += selectBed + "<br/>";
    document.getElementById('countNights').innerHTML += countNights + "<br/>";
    document.getElementById('countParking').innerHTML += countParking + "<br/>";
    
  }

  if(checkbox === true){
    document.getElementById('spa').innerHTML += "Spa solicitado <br/>";
  }else{
    document.getElementById('spa').innerHTML += "Spa no solicitado <br/>";
  }
})