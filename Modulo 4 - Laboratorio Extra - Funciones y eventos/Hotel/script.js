'use strict'

window.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('#myForm');
  const result = document.getElementById('result');
  result.style.display = 'none'; //oculto el div del resultado hasta que se envie el formulario
  form.addEventListener('submit', function(e){
    e.preventDefault(); //evita el refresco de la pagina
    //captura de los elementos del formulario
    let selectRoom = document.querySelector('#room').value;
    let selectBed = document.querySelector('#bedType').value;
    let countNights = document.querySelector('#nights').value;
    let countParking = document.querySelector('#parking').value;
    let checkbox = document.querySelector('#spa').checked;
    result.style.display = 'block'; //muestra el div oculto
    print(selectRoom,selectBed,countNights,countParking, checkbox);
  })

  /**
   * Muestra en pantalla el resultado total de la reserva
   * @param {*} selectRoom 
   * @param {*} selectBed 
   * @param {*} countNights 
   * @param {*} countParking 
   * @param {*} checkbox 
   */
  function print(selectRoom,selectBed,countNights,countParking, checkbox){
    let priceTotal; //variable para el precio total de la reserva

    if(checkbox === true){
      document.getElementById('bath').innerHTML += "20€ <br/>";
    }else{
      document.getElementById('bath').innerHTML += "No <br/>";
    }
    if(selectBed === 'Single') {
      priceTotal = priceRoom(selectRoom, countNights, checkbox) - amount(countNights) + parking(countParking);
      document.getElementById('amount').innerHTML += amount(countNights) + "€<br/>";
      document.getElementById('prize').innerHTML += priceTotal + "€<br/>";
    }else if(selectBed === 'Triple'){
      priceTotal = priceRoom(selectRoom, countNights, checkbox) + amount(countNights) + parking(countParking);
      document.getElementById('amount').innerHTML += "Increased rate " + amount(countNights) +"€<br/>";
      document.getElementById('prize').innerHTML += priceTotal + "€<br/>";
    }else{
      priceTotal = priceRoom(selectRoom, countNights, checkbox) + parking(countParking);
      document.getElementById('amount').innerHTML += "Discount not applicable<br/>";
      document.getElementById('prize').innerHTML += priceTotal + "€<br/>";
    }
    document.getElementById('selectRoom').innerHTML += selectRoom + "<br/>";
    document.getElementById('selectBed').innerHTML += selectBed + "<br/>";
    document.getElementById('countNights').innerHTML += countNights + " Days<br/>";
    document.getElementById('countParking').innerHTML += parking(countParking)+"€" + "<br/>";
  }

  /**
   * Calcula el precio del parking dependiendo del numero de noches solicitado
   * @param {*} countParking 
   * @returns countParkin
   */
  function parking(countParking){
    countParking *= 10;
    return countParking;
  }

  /**
   * Calcula el descuento dependiendo del numero de noches
   * @param {*} countNights 
   * @returns amount 
   */
  function amount(countNights){
    let amount = countNights * 0.25;
    return amount;
  }

  /**
   * Calcula el precio de la habitacion junto con el spa
   * @param {*} selectRoom 
   * @param {*} countNights 
   * @param {*} checkbox 
   * @returns 
   */
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