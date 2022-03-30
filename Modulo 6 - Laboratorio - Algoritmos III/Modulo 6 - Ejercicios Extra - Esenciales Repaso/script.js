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

var isFirstElementEqual = (arr1, arr2) => {
  if(arr1[0] === arr2[0]){
    return 'the first item matches';
  }else {
    return 'the first item does not match';
  }
}
console.log(isFirstElementEqual(films, tvSeries));
console.log(isFirstElementEqual(films, tvSeries2));


/**
* Bloque 3 - Ejercicio 1 - Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir,
* devuelva ‘undefined’ .
*/

console.log('Bloque 3 - Ejercicio 1');

var array = [1,2,3,4,5,6,7];
var array2 = [1,2, ,4,5,6,7];

var arrayNumber = array =>{
  if(array.length > 1){
    return array[2]
  }else{
    return undefined;
  }
};
console.log(arrayNumber(array));
console.log(arrayNumber(array2));

/**
* Bloque 3 - Ejercicio 2 - Implementa una función que admita un string como parámetro y devuelva la última letra.
*/
console.log('Bloque 3 - Ejercicio 2');

var lastLetter = str =>{
  return str.split("")[str.length - 1];
}
console.log(lastLetter('Javascript'));

/**
* Bloque 3 - Ejercicio 3 - Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el
* resultado.
*/

console.log('Bloque 3 - Ejercicio 3');

tvSeries2 = ['x-files', 'outlander', 'bridgerton', 'brooklyn 99', 'downton abbey', 'big bang theory'];

var firstToLast = array =>{
  var firstElement = array.splice(0, 1);
  console.log(firstElement)
  var lastElement = array.splice(-1, 1);
  console.log(lastElement)
  array.splice(0, 0, lastElement[0]);
  array.splice(-1, 1, firstElement[0]);
  return array;
}
console.log(firstToLast(tvSeries2));

/**
* Bloque 4 - Ejercicio 1 - Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas
* veces como indique el número. 
*/

console.log('Bloque 4 - Ejercicio 1');

var repeatText = (n, str) =>{
  for(var i = 0; i < n; i++){
    console.log(str);
  }

}
repeatText(5, 'hola mundo');

/**
* Bloque 4 - Ejercicio 2 - Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que
* tiene el objeto. 
*/

console.log('Bloque 4 - Ejercicio 2');

var objectProperties = object =>{
  var result = 0;
  for(var i in object){
    if(object.hasOwnProperty(i)) result++;
  }
  return result;
}
console.log(objectProperties({lastname: 'Smith', role: 'Administrator', salary: 25.000, age: 38}));

/**
* Bloque 4 - Ejercicio 3 - Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.
*/

console.log('Bloque 4 - Ejercicio 3');

var showProperties = object =>{
  for(var properties in object){
    console.log(object[properties])
  }
}
showProperties({lastname: 'Smith', role: 'Administrator', age: 38, salary: '25K'});

/**
* Bloque 4 - Ejercicio 4 - Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento
* del array multiplicado por dicho número. Devuelve el resultado.
*/

console.log('Bloque 4 - Ejercicio 4');

var productArray = (array, n) =>{
  var result = 0;
  for(var item of array){
    result += item * n;
  }
  return result;
}
console.log(productArray([1,3], 4));

/**
* Bloque 4 - Ejercicio 5 - Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece
* dicho carácter en el string.
*/

console.log('Bloque 4 - Ejercicio 5');

var searchCaracter = (str, character) =>{
  var occurrences = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] === character) occurrences++;
  }
  return occurrences;
}
console.log(searchCaracter('javascript', 'a'));

/**
* Bloque 4 - Ejercicio 6 - Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada
* elemento por consola.
*/

console.log('Bloque 4 - Ejercicio 6');
var showArrayItems = array =>{
  for(var i of array){
    console.log(i);
  }
}
showArrayItems(tvSeries2);


/**
* Bloque 4 - Ejercicio 7 - Implementa una función que dado un array de cualquier tipo, lo recorra desde el último elemento al primero, y lo
* muestre por consola.
*/

console.log('Bloque 4 - Ejercicio 7');
var showArrayItemsInverse = array =>{
  for(var i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
}
showArrayItems(tvSeries2);

/**
* Bloque 4 - Ejercicio 8 - Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos
* son menores a dicho número, y cuántos no.
*/

console.log('Bloque 4 - Ejercicio 8');
var compareNumbers = (array, n) =>{
  var result = [0, 0, 0];
  for(var item of array){
    if(item === n) result[1]++;
    else if(item < n) result[0]++;
    else result[2]++;
  }
  return result;
};
console.log(compareNumbers([2, 4, -1, 6], 4));

/**
* Bloque 4 - Ejercicio 9 - Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, se encuentra en el
* segundo.
*/
console.log('Bloque 4 - Ejercicio 9');
var anyInCommon = (array1, array2) =>{
  for(var i of array1){
    for(var j of array2){
      if(i === j) return true;
    }
  }
  return false;
}
console.log(anyInCommon([1,2,3], [1,5,6]));
console.log(anyInCommon([1,2,3], [4,5,6]));

/**
* Bloque 4 - Ejercicio 10 - Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo
* y viceversa. Muestra los arrays transformados por consola.
*/
console.log('Bloque 4 - Ejercicio 10');
var swapPositions = (array1, array2) =>{
  var i = 0;
  while(i < array1.length && i < array2.length){
    var arrAux = array1[i];
    array1[i] = array2[i];
    array2[i] = arrAux;
    i++;
  }
  console.log(array1, array2);
}
swapPositions([1,2], ['a', 'b']);

/**
* Bloque 4 - Ejercicio 11 - Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de
* los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.
*/
console.log('Bloque 4 - Ejercicio 11');
var objectArray = array =>{
  var result = {};
  for(var i = 0; i < array.length; i++){
    var propName = 'Prop ' + i;
    result[propName] = array[i];
  }
  return result;
}
console.log(objectArray(['hola', 'adios']));

/**
* Bloque 4 - Ejercicio 12 - Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado.
* Muestra por consola cada elemento por el que iteres.
*/
console.log('Bloque 4 - Ejercicio 12');

var iterateArray = (array, firstIndex) =>{
  if(firstIndex < array.length && firstIndex >= 0){
    for(var i = firstIndex; i < array.length; i++){
      console.log(array[i]);
    }
  }
}
iterateArray(['uno', 'dos', 'tres', 'cuatro', 'cinco'], 2);

/**
* Bloque 4 - Ejercicio 13 - Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.
*/
console.log('Bloque 4 - Ejercicio 13');

var searchString = (array, str) =>{
  for(var item of array){ 
    if(item === str) return true;
  }
  return false;
}
console.log(searchString(['hola', 'adios'], 'javascript'));
console.log(searchString(['hola', 'adios'], 'hola'));

/**
* Bloque 4 - Ejercicio 14 - Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden
* pero en ingles. Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y
* otra función equivalente que haga la traducción inversa.
*/
console.log('Bloque 4 - Ejercicio 14');

var fruitEng = ['apple', 'pineapple', 'banana', 'orange'];
var fruitEsp = ['manzana', 'piña', 'platano', 'naranja'];

var translateFruitToEsp = fruit =>{
  var index = fruitEng.indexOf(fruit);
  if(index > -1){
    return fruitEsp[index];
  }else{
    return 'Fruta no encontrada';
  }
};
console.log(translateFruitToEsp('orange'));
console.log(translateFruitToEsp('fresa'));

/**
* Bloque 4 - Ejercicio 15 - Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.
*/
console.log('Bloque 4 - Ejercicio 15');

var showInverse = text => {
  var result = "";
  for(var i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  console.log(result);
}
showInverse('javascript');

/**
* Bloque 4 - Ejercicio 16 - Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.
*/
console.log('Bloque 4 - Ejercicio 16');

var convertCapitals = text =>{
  var result = '';
  for(var i = 0; i < text.length; i++){
    result += i % 2 === 0 ? text[i].toUpperCase() : text[i];
  }
  return result;
}
console.log(convertCapitals('hola mundo'));

/**
* Bloque 4 - Ejercicio 17 - Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos
* de cada subarray y mostrarlos por consola.
*/
console.log('Bloque 4 - Ejercicio 17');
var myArray = [[1,2], ['inicio', 'fin']];
var iterateSubItems = array =>{
  for(var subarray of array){
    for(var item of subarray){
      console.log(item);
    }
  }
}
iterateSubItems(myArray);