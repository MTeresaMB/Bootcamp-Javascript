/**
 * Inserta numeros aleatorios en un array sin repetir
 */
'use strict';

function randomPick(n, min, max){
  let arrAle = [];
  let repeat = false;
  for(let i = 0; i < n; i++){
    do{
      repeat = false;
      let numAle = Math.floor(Math.random() * (max - min) + min);
      if(arrAle.includes(numAle)){ 
        repeat = true;
      }
      if(repeat == false){
        arrAle.push(numAle);
      }
    }while(repeat == true);
  }
  console.log(arrAle);
}
randomPick(6, 1, 49);
//randomPick(15, 1 , 15); al activar esta funcion sale un bucle infinito, no se porque lo hace, he revisado el codigo toda la mañana y no encuentro el error 
 randomPick(1, 1, 6);




