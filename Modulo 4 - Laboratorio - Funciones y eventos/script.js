const buttonNumber = document.getElementsByName('number');
const buttonOper = document.getElementsByName('oper');
const buttonEqual = document.getElementsByName('equal')[0];
const buttonDelete = document.getElementsByName('operDelete')[0];
var result1 = document.getElementById('result1');
var result2 = document.getElementById('result2');
var operCurrent = '';
var operPrev = '';
var operation = undefined;

//events
buttonNumber.forEach(function(button){
  button.addEventListener('click', function(){
    insertNumber(button.innerText);
  })
})

buttonOper.forEach(function(button){
  button.addEventListener('click', function(){
    selectOper(button.innerText);
  })
})

buttonEqual.addEventListener('click', function(){
  compute(); //calcula el resultado final
  updateDisplay();
})

buttonDelete.addEventListener('click', function(){
  clear();
  updateDisplay();
})

//functions
/**
 * Recibe los numeros introducidos y los muestra en el display
 * Trata los numeros introducidos como cadena
 * Actualiza el display
 * @param {*} num 
 */
function insertNumber(num){
  operCurrent = operCurrent.toString() + num.toString();
  updateDisplay();
}

/**
 * Actualiza el display despues de cada operacion
 */
function updateDisplay(){
  result1.value = operPrev;
  result2.value = operCurrent;
}

/**
 * Inicializa las variables al actualizar la pantalla y al presionar el boton Delete
 */

function clear(){
  operCurrent = '';
  operPrev = '';
  operation = undefined;
}
/**
 * Selecciona la operacion que vamos a utilizar
 * @param {*} oper la operacion que hemos seleccionado al presionar el boton
 */

function selectOper(oper){
  if(operCurrent === '') return;
  if(operPrev !== ''){
    compute();
  }
  operation = oper.toString();
  operPrev = operCurrent;
  operCurrent = '';
}
/**
 * Castea los valores introducidos a numeros
 * Comprueba que los valores introducidos sean numeros
 * Realiza las operaciones
 * @returns
 */
function compute(){
  var cal;
  const prev = parseFloat(operPrev);
  const current = parseFloat(operCurrent);
  if(isNaN(prev) || isNaN(current)) return;
  switch(operation){
    case '+': cal = prev + current; break;
    case '-': cal = prev - current; break;
    case '*': cal = prev * current; break;
    case '/': cal = prev / current; break;
    default: return;
  }
  operCurrent = cal;
  operation = undefined;
  operPrev = '';
}
clear();