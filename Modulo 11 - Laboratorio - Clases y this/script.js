const reservas = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1
  }
];


class Booking {
  constructor(tipoHabitacion, pax, noches){
    this.tipoHabitacion = tipoHabitacion;
    this.pax = pax;
    this.noches = noches;
  }

  typeRoom(){
    switch(this.tipoHabitacion){
      case "standard": return 100; break;
      case "suite": return 150; break;
      default: return 'Type room no available';
    }
  }

  calculaSubtotal(){
    const priceRoom = this.typeRoom();
    let addPerson = 0;
    if(this.pax > 1){
      addPerson = 40 * this.pax;
    }
    return priceRoom * (this.noches + addPerson);
  }
  
  calculaTotal(){ 
    return (this.calculaSubtotal() * 1.21).toFixed(2);
  }
}

class TouristicOperator extends Booking{ 
  constructor(pax, noches){
    super('standard', pax, noches);
  };

  calculaSubtotal(){
    return (super.calculaSubtotal() * 0.85).toFixed(2);
  };

  calculaTotal(){ 
    return (super.calculaTotal() * 0.85).toFixed(2);
  }
}
let booking = new Booking('standard', 1, 5);
console.log(`El subtotal de la reserva 1 es: ${booking.calculaSubtotal()}€`);
console.log(`El Total de la reserva 1 es: ${booking.calculaTotal()}€`);

let booking2 = new Booking('suite', 2, 5);
console.log(`El subtotal de la reserva 2 es: ${booking2.calculaSubtotal()}€`);
console.log(`El Total de la reserva 2 es: ${booking2.calculaTotal()}€`);

let touristOperator = new TouristicOperator(1, 5);
console.log(`El subtotal del tour operador es: ${touristOperator.calculaSubtotal()}€`);
console.log(`El Total del tour operador es: ${touristOperator.calculaTotal()}€`);


class Booking2 {
  constructor(tipoHabitacion, desayuno, pax, noches){
    this.tipoHabitacion = tipoHabitacion;
    this.desayuno = desayuno;
    this.pax = pax;
    this.noches = noches;
  }

  calculaSubtotal(){
    const priceRoom = 100;
    let addPerson = 0;
    let addDesayuno = 0;
    if(this.pax > 1){
      addPerson = 40 * this.pax;
    }
    if(this.desayuno === true){
      addDesayuno = 15;
      return (priceRoom * (this.noches + addPerson) + addDesayuno).toFixed(2);
    }else if(this.desayuno === false){
      return (priceRoom * (this.noches + addPerson)).toFixed(2);
    }
  }
  
  calculaTotal(){ 
    return (this.calculaSubtotal() * 1.21).toFixed(2);
  }
}

let booking3 = new Booking2('standard',true, 1, 5);
console.log(`El subtotal de la reserva 3 con desayuno es: ${booking3.calculaSubtotal()}€`);
console.log(`El Total de la reserva 3 con desayuno es: ${booking3.calculaTotal()}€`);

let booking4 = new Booking2('suite',false, 1, 5);
console.log(`El subtotal de la reserva 4 con desayuno es: ${booking4.calculaSubtotal()}€`);
console.log(`El subtotal de la reserva 4 con desayuno es: ${booking4.calculaTotal()}€`);
