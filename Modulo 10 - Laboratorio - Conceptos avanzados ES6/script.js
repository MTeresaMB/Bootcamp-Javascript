/**
 * Ejercicio 1 Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una
propiedad llamada id (debe devolver booleano true / false ).
 */
console.log('Ejercicio 1');
const user = {
  id: 164,
  lastname: 'Smith',
  role: 'Administrator',
  age: 36
};
let hasId = object => object.hasOwnProperty('name') === true ? true : false;

console.log(hasId(user));

/**
 * Ejercicio 2 Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.
 */
 console.log('Ejercicio 2');
const tvSeries = ['x-files', 'outlander', 'bridgerton', 'brooklyn 99', 'downton abbey', 'big bang theory'];
console.log(tvSeries);
const head = (array) => array = tvSeries.shift();
console.log(head(tvSeries));

/**
 * Ejercicio 3 Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los
elementos menos el primero.
 */
console.log('Ejercicio 3');
const tvSeries2 = ['x-files', 'outlander', 'bridgerton', 'brooklyn 99', 'downton abbey', 'big bang theory'];
const tail = array =>{
  const [,index1,index2, index3, index4, index5] = array;
  return console.log(index1,index2, index3, index4, index5);
} 
tail(tvSeries2);

/**
 * Ejercicio 4 Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el
primer elemento ha sido colocado en la última posición.
 */
console.log('Ejercicio 4');
const swapFirstToLast = array =>{
  const [index0,index1,index2, index3, index4, index5] = array;
  return console.log(index1,index2, index3, index4, index5,index0);;
}
swapFirstToLast(tvSeries2);
/**
 * Ejercicio 5 Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto
la propiedad id si la hubiera.
 */

console.log('Ejercicio 5');
const excludeId = object =>{
  const {id, ...other} = object;
  console.log(other);
}
excludeId(user);
  
/**
 * Ejercicio 6 Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array
filtrado con aquellas palabras que empiecen por a.
 */

console.log('Ejercicio 6');
const arrPalabras = ['Apple', 'Orange', 'Pinapple', 'Banana', 'Peach', 'Apricot', 'pear', 'Plum'];
const wordsStartingWithA = arrayPalabras => arrayPalabras.filter(words => words.startsWith('P') || words.startsWith('p'));
console.log(wordsStartingWithA(arrPalabras));

/**
 * Ejercicio 7 Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la
concatenación de todos, separados por | .
 */

const concatPalabras = ['Apple', 'Orange', false, 'Banana', 'Peach', 48, 'pear', true];
console.log('Ejercicio 7');
const concat = (concatPalabras) => (concatPalabras).join(" | ");
console.log(concat(concatPalabras));

/**
 * Ejercicio 8 Implementa una función llamada multArray que admita un array de números ( arr ) y otro parámetro que sea un número
( x ) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.
 */

console.log('Ejercicio 8');
const arrayNumbers = [2,5,7,4,9,6];
function multArray(arr, n){
  let result = arr.map(x =>{
    return x * n
  });
  return result;
}
console.log(multArray(arrayNumbers, 2)); 

/**
 * Ejercicio 9 Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el
producto de todos ellos.
 */
console.log('Ejercicio 9');
const calcMult = arrayNumbers => {
  let result = arrayNumbers.reduce((acc, number) => acc * number);
  return result;
};

console.log(calcMult(arrayNumbers));
