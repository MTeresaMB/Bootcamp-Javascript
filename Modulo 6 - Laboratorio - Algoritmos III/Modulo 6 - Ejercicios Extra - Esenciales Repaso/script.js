/**
 * Bloque 1 - Ejercicio 1 - Implementa una función que muestre por consola “Hola Mundo”.
 */
console.log('Bloque 1 - Ejercicio 1')
var helloWorld = () =>{
  console.log('Hello World');
}
helloWorld();

/** 
 * Bloque 1 - Ejercicio 2 - Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.
*/
console.log('Bloque 1 - Ejercicio 2');
var sayMyName = name =>{
  console.log("Hola " + name);
}
sayMyName('Eduardo')

/** 
 * Bloque 1 - Ejercicio 3 - Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.
*/
console.log('Bloque 1 - Ejercicio 3');
var toUpperCase = str =>{
  console.log(str.toUpperCase());
}

toUpperCase('hola javascript')

/** 
 * Bloque 1 - Ejercicio 4 - Implementa una función que dado un string como parámetro devuelva el string en minúsculas.
*/
console.log('Bloque 1 - Ejercicio 4');
var toLowerCase = str =>{
  console.log(str.toLowerCase());
}
toLowerCase('ADIOS JAVASCRIPT');

/**
 * Bloque 1 - Ejercicio 5 - Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.
 */
console.log('Bloque 1 - Ejercicio 5');
var sumNumber = (num1, num2) => {return console.log(num1 + num2);}
sumNumber(4,4);

/**
 * Bloque 1 - Ejercicio 6 - Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.
 */

 console.log('Bloque 1 - Ejercicio 6');
 var concatParameters = (param1, param2, param3) => {
   return console.log('' + param1 + param2 + param3);
 }

concatParameters('hola',2,'javier');

/**
* Bloque 1 - Ejercicio 6 - Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’
* inicializada a null.
*/
console.log('Bloque 1 - Ejercicio 7');

var addObject = (object) => {
  object.id = null;
}
var myObject = {
  name: 'myObject',
  key: 'function',
};
addObject(myObject);
console.log(myObject);

//===============================================================

/**
* Bloque 2 - Ejercicio 1 - Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o
* null.
*/
console.log('Bloque 2 - Ejercicio 1');

var paramNullUnd = param =>{
  if(param === 'null'){
    return 'Is Null';
  }else if(param === 'undefined'){
    return 'Is Undefined';
  }else{
    return 'Is ' + typeof(param);
  }
}
console.log(paramNullUnd('null'));
console.log(paramNullUnd('undefined'));
console.log(paramNullUnd('Rose'));

/**
* Bloque 2 - Ejercicio 2 - Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.
*/
console.log('Bloque 2 - Ejercicio 2');

var isPositive = number => { 
  if(number > 0){
    return number + 'Is Positive';
  }else{
    return number + 'Is Negative';
  }
}
console.log(isPositive(4));
console.log(isPositive(-4));

/**
* Bloque 2 - Ejercicio 3 - Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que
* 100 o exactamente 100.
*/
console.log('Bloque 2 - Ejercicio 3');

var isBiggerThan = number => {
  if(number > 100){
    return number + 'Is Bigger than 100';
  }else if(number < 100){
    return number + 'Is Lower than 100';
  }else if(number = 100){
    return number + 'Is equal to 100';
  }
}
console.log(isBiggerThan(4));
console.log(isBiggerThan(100));
console.log(isBiggerThan(120));

/**
* Bloque 2 - Ejercicio 4 - Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’
* o no.
*/
console.log('Bloque 2 - Ejercicio 4');
var user = {
  lastname: 'Smith',
  role: 'Administrator',
  age: 36
};
var objectHasName = object =>{
  if(user.hasOwnProperty('name')){
     return object;
  }else {
    return 'The object has no such property';
  }
}
console.log(objectHasName(user));

/**
* Bloque 2 - Ejercicio 5 - Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.
* o no.
*/
console.log('Bloque 2 - Ejercicio 5');
var isDivisible = (num1, num2) => {
  if(num1 % num2 !== 0){
    return 'El numero no es divisible';
  }else{
    return 'El numero es divisible';
  }
};
console.log(isDivisible(4, 5));
console.log(isDivisible(20, 5));

/**
* Bloque 2 - Ejercicio 6 - Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de
* caracteres.
*/
console.log('Bloque 2 - Ejercicio 6');
var checkCaracters = (str, num) => (str.length === num);
console.log(checkCaracters('hola caracola', 13));
console.log(checkCaracters('hola caracola', 10));

/**
* Bloque 2 - Ejercicio 7 - Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la
* semana es (en texto).
*/
console.log('Bloque 2 - Ejercicio 7');
var dayOfWeek = day =>{
  switch(day) {
    case 1: return 'Monday'; break;
    case 2: return 'Tuesday'; break;
    case 3: return 'Wednesday'; break;
    case 4: return 'Thursday'; break;
    case 5: return 'Friday'; break;
    case 6: return 'Saturday'; break;
    case 7: return 'Sunday'; break;
    default: return 'Not a valid day';
  }
}

console.log(dayOfWeek(1));
console.log(dayOfWeek(8));

/**
* Bloque 2 - Ejercicio 8 - Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la
* semana es (en texto).
*/

console.log('Bloque 2 - Ejercicio 8');

var dayOfMonth = month =>{
  switch(month){
    case 1: return 'January'; break;
    case 2: return 'February'; break;
    case 3: return 'March'; break;
    case 4: return 'April'; break;
    case 5: return 'May'; break;
    case 6: return 'June'; break;
    case 7: return 'July'; break;
    case 8: return 'August'; break;
    case 9: return 'September'; break;
    case 10: return 'October'; break;
    case 11: return 'November'; break;
    case 12: return 'December'; break;
    default: return 'The month is not valid'
  }
}
console.log(dayOfMonth(4));
console.log(dayOfMonth(14));

/**
* Bloque 2 - Ejercicio 9 - Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.
*/

console.log('Bloque 2 - Ejercicio 9');
var films = ['star wars', 'goonies', 'harry potter', 'halloween', 'Friday 13th'];
var tvSeries = ['x-files', 'outlander', 'bridgerton', 'brooklyn 99', 'downton abbey', 'big bang theory'];

var arrayLength = (arr1, arr2) => {
  if(arr1.length > arr2.length){
    return 'first array is longer';
  }else if(arr1.length < arr2.length){
    return 'second array is longer';
  }else{
    return 'both arrays are equal';
  }
}
console.log(arrayLength(films, tvSeries));


/**
* Bloque 2 - Ejercicio 10 - Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es
* igual o no.
*/
console.log('Bloque 2 - Ejercicio 10');
var films = ['star wars', 'goonies', 'harry potter', 'halloween', 'Friday 13th'];
var tvSeries = ['star wars', 'outlander', 'bridgerton', 'brooklyn 99', 'downton abbey', 'big bang theory'];
var tvSeries2 = ['x-files', 'outlander', 'bridgerton', 'brooklyn 99', 'downton abbey', 'big bang theory'];

var isFirstElementEqual = (arr1, arr2) => Array.isArray(arr1) && Array.isArray(arr2) && arr1[0] === arr2[0];
console.log(isFirstElementEqual(films, tvSeries));
console.log(isFirstElementEqual(films, tvSeries2));


/**
* Bloque 3 - Ejercicio 1 - Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir,
* devuelva ‘undefined’ .
*/