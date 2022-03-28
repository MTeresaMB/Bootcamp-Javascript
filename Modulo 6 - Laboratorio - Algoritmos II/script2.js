/**
 * Ejercicio numeros aleatorios
 */



function randomPick(n, min, max){
  var arrAle = [];
  for(var i = 1; i <= n; i++){
    arrAle.push(Math.floor(Math.random() * (max - min) + min));
  }
  console.log(arrAle);
}
randomPick(6, 1, 49);
randomPick(15, 1 , 15);
randomPick(1, 1, 6);




