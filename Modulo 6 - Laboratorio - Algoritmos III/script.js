
/**
 * Ejercicio 1 Dibujar cuadrado
 * @param {*} n 
 * @param {*} char 
 */

document.write("<h1>Ejercicio 1 Cuadrado</h1>");

var square = (n, char) => {
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
      if(i == 1 || i == n || j == 1 || j == n) {
        document.write(char);
      }else{
        document.write(char);
      }
    }
    document.write("<br>");
  }
}
square(2, '*');


/**
 * Ejercicio 2 Dibujar cuadrado con bordes
 * @param {*} n 
 * @param {*} char 
 */

document.write("<h1>Ejercicio 2 Cuadrado con borde</h1>");
var squareWithBorder = (n, charBorder, charInner) => {
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
      if(i == 1 || i == n || j == 1 || j == n) {
        document.write(charBorder);
      }else{
        document.write(charInner + ' ');
      }
    }
    document.write("<br>");
  }
}
squareWithBorder(4, 'B', '*');

document.write("<h1>Ejercicio 3 Cuadrado Diagonal Left-Right</h1>");
/**
 * Ejercicio 3 Cuadrado Diagonal Left-Right
 * @param {*} n 
 * @param {*} charDiagonal 
 * @param {*} charUp 
 * @param {*} charDown 
 */
var contador = 0;
var t = "";
var squareDiagonalRL = (n, charDiagonal, charUp, charDown) =>{
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){ 
      if(j < contador){
        t+=charDown;
      }else if(j == contador){
        t+=charDiagonal;
      }else {
        t+=charUp; 
      }
    }
    contador++;
    t+="<br>";
  }
  document.write(t);
}
squareDiagonalRL(5, "\\", "A", "B");

document.write("<h1>Ejercicio 4 Cuadrado Diagonal Right-Left</h1>");
/**
 * Ejercicio 4 Cuadrado Diagonal Right-Left
 * @param {*} n 
 * @param {*} charDiagonal 
 * @param {*} charUp 
 * @param {*} charDown 
 */
 
var squareDiagonalLR = (n, charDiagonal, charUp, charDown) =>{
  var contador = n - 1;
  var t = "";
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){ 
      if(j < contador){
        t+=charDown;
      }else if(j == contador){
        t+=charDiagonal;
      }else {
        t+=charUp; 
      }
    }
    contador--;
    t+="<br>";
  }
  document.write(t);
}

squareDiagonalLR(5, "/", "A", "B");

document.write("<h1>Ejercicio 5 Medio Diamante</h1>");
/**
 * Ejercicio 5 Medio Diamante
 * @param {*} n 
 * @param {*} char 
 */
var halfDiamond = (n, char) =>{
  for(let fila = 1; fila <= n; fila++) {
    for(let hueco = 0; hueco <= n - fila; hueco++) {
      document.write(" ");
    }
    for(let car = 0; car < fila; car++) {
      document.write(char);
    }
    document.write("<br>");
  }
  for(let fila = 1; fila < n; fila++) {
    for(let i = 0; i < n - fila; i++) {
      document.write(char);
    }
    document.write("<br>");
  }
}

halfDiamond(6, '*');

document.write("<h1>Ejercicio 6 Piramide</h1>");
/**
 * Ejercicio 6 Piramide
 * @param {*} n 
 * @param {*} char 
 */
var pyramid = (n, char) => {
  for(let fila = 1; fila <= n; fila++) {
    for(let hueco = 0; hueco < n - fila; hueco++) {
      document.write("&nbsp&nbsp");
    }
    for(let car = 0; car < (fila * 2) - 1; car++) {
      document.write(char);
    }
    document.write("<br>");
  }
}
pyramid(5, '*');

document.write("<h1>Ejercicio 7 Diamante</h1>");

var diamond = (n , char) => {
  for(let fila = 1; fila <= n; fila++) {
    for(let hueco = 0; hueco < n - fila; hueco++) {
      document.write("&nbsp&nbsp");
    }
    for(let car = 0; car < (fila * 2) - 1; car++) {
      document.write(char);
    }
    document.write("<br>");
  }
  for(let fila = n - 1; fila > 0; fila--) {
    for(let i = 0; i < n - fila; i++) {
      document.write("&nbsp&nbsp");
    }
    for(let car = 0; car < (fila * 2) - 1; car++) {
      document.write(char);
    }
    document.write("<br>");
  }
}
diamond(5, '*');