const empleado = {
  bruto: 14.500,
  hijos: 2,
  pagas: 12,
};

let retencion8 = 0.08;
let retencion16 = 0.16;
let retencion30 = 0.30;

let sueldoNeto;
if(empleado.bruto < 12.000){
  sueldoNeto = empleado.bruto;
  console.log("Sueldo bruto: " + empleado.bruto);
  console.log("Sueldo menor de 12.000, retención 0%: " + sueldoNeto);
  if(empleado.hijos > 0){
    var retencionHijos = retencion8 - 0.02;
    var sueldoConRetenciones = sueldoNeto - retencionHijos;
    console.log("Retencion por los hijos: " + retencionHijos);
    console.log("Sueldo neto anual con las retenciones: " + sueldoConRetenciones);
  };

  if(empleado.pagas == 14){
    var salarioMensual = sueldoConRetenciones / 14;
    console.log("Salario mensual: " + salarioMensual.toFixed(3)+ "€");
  }else if(empleado.pagas == 12){
    salarioMensual = sueldoConRetenciones / 12;
    console.log("Salario mensual: " + salarioMensual.toFixed(3)+ "€");
  };

}else if(empleado.bruto > 12.000 && empleado.bruto <= 24.000){
  sueldoNeto = empleado.bruto - retencion8;
  console.log("Sueldo bruto: " + empleado.bruto);
  console.log("Sueldo neto con retencion del 8%: " + sueldoNeto);
  if(empleado.hijos > 0){
    var retencionHijos = retencion8 - 0.02;
    var sueldoConRetenciones = sueldoNeto - retencionHijos;
    console.log("Retencion por los hijos: " + retencionHijos);
    console.log("Sueldo neto anual con las retenciones: " + sueldoConRetenciones);
  };

  if(empleado.pagas == 14){
    var salarioMensual = sueldoConRetenciones / 14;
    console.log("Salario mensual: " + salarioMensual.toFixed(3)+ "€");
  }else if(empleado.pagas == 12){
    salarioMensual = sueldoConRetenciones / 12;
    console.log("Salario mensual: " + salarioMensual.toFixed(3)+ "€");
  };

}else if(empleado.bruto > 24.000 && empleado.bruto <= 34.000){
  sueldoNeto = empleado.bruto - retencion16;
  console.log("Sueldo bruto: " + empleado.bruto);
  console.log("Sueldo neto con retencion del 16%: " + sueldoNeto);
  if(empleado.hijos > 0){
    var retencionHijos = retencion16 - 0.02;
    var sueldoConRetenciones = sueldoNeto - retencionHijos;
    console.log("Retencion por los hijos: " + retencionHijos);
    console.log("Sueldo neto anual con las retenciones: " + sueldoConRetenciones);
  };

  if(empleado.pagas == 14){
    var salarioMensual = sueldoConRetenciones / 14;
    console.log("Salario mensual: " + salarioMensual.toFixed(3)+ "€");
  }else if(empleado.pagas == 12){
    salarioMensual = sueldoConRetenciones / 12;
    console.log("Salario mensual: " + salarioMensual.toFixed(3)+ "€");
  };

}else if(empleado.bruto > 34.000){
  sueldoNeto = empleado.bruto - retencion30;
  console.log("Sueldo bruto: " + empleado.bruto);
  console.log("Sueldo neto con retencion del 30%: " + sueldoNeto);
  if(empleado.hijos > 0){
    var retencionHijos = retencion30 - 0.02;
    var sueldoConRetenciones = sueldoNeto - retencionHijos;
    console.log("Retencion por los hijos: " + retencionHijos);
    console.log("Sueldo neto anual con las retenciones: " + sueldoConRetenciones);
  };

  if(empleado.pagas == 14){
    var salarioMensual = sueldoConRetenciones / 14;
    console.log("Salario mensual: " + salarioMensual.toFixed(3)+ "€");
  }else if(empleado.pagas == 12){
    salarioMensual = sueldoConRetenciones / 12;
    console.log("Salario mensual: " + salarioMensual.toFixed(3)+ "€");
  };

};