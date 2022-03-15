//Ejercicio 1 de Ejercicios Extra
/* 1º Dado el siguiente objeto. Escribir en una variable un día de la semana y decir cual asignatura toca ese día. */

console.log("Ejercicio 1");
console.log("================");
const horario = [
  {
    day: "Lunes",
    subject: "Matematicas",
  },
  {
    day: "Martes",
    subject: "Lengua",
  },
  {
    day: "Miercoles",
    subject: "Fisica",
  },
  {
    day: "Jueves",
    subject: "Quimica",
  },
  {
    day: "Viernes",
    subject: "Gimnasia",
  },
];
let diaSemana = "Domingo";
switch (diaSemana) {
  case "Lunes":
    console.log(horario[0].subject);
  break;
  case "Martes":
    console.log(horario[1].subject);
  break;
  case "Miercoles":
    console.log(horario[2].subject);
  break;
  case "Jueves":
    console.log(horario[3].subject);
  break;
  case "Viernes":
    console.log(horario[4].subject);
  break;
  default: console.log("El dia no es valido");
};
console.log("----------------");

//Ejercicio 2 de Ejercicios Extra
/* 2º Según una variable llamada hora , mostrar un buenos días, buenas tardes o buenas noches según la hora.
Se utilizarán los tramos de 6 a 12, de 13 a 20 y de 21 a 5. Solo se tienen en cuenta la hora no los minutos. */

console.log("Ejercicio 2");
console.log("================");
var hora = 6;

if(hora >= 6 && hora <= 12){
  console.log("Buenos dias");
}else if(hora >= 13 && hora <= 20){
  console.log("Buenos tardes");
}else if((hora <= 5 && hora >= 0) || (hora >= 21 && hora <= 24)){
  console.log("Buenos noches");
}
console.log("----------------");

//Ejercicio 3 de Ejercicios Extra
/* Dada una variable que se llame diaSemana , que contenga un número del 1 al 7 mostrar el día de la semana
correspondiente. */

console.log("Ejercicio 3");
console.log("================");
var unDiaSemana = 1;
switch(unDiaSemana){
  case 1:
    console.log("El dia de la semana es: Lunes");
  break;
  case 2:
    console.log("El dia de la semana es: Martes");
  break;
  case 3:
    console.log("El dia de la semana es: Miercoles");
  break;
  case 4:
    console.log("El dia de la semana es: Jueves");
  break;
  case 5:
    console.log("El dia de la semana es: Viernes");
  break;
  case 6:
    console.log("El dia de la semana es: Sábado");
  break;
  case 7:
    console.log("El dia de la semana es: Domingo");
  break;
  default: console.log("Dia no valido");
}
console.log("----------------");

//Ejercicio 4 de Ejercicios Extra
/* Calcula la media de tres notas y muestra si está apta, no apta, notable o sobre saliente. - Una persona está
apta con un 5. - Una persona no apta de menos de un 5. - Notable de 5 a 7. - Sobre saliente de 7 al 10. */

console.log("Ejercicio 4");
console.log("================");
var nota1 = 7;
var nota2 = 5;
var nota3 = 7;
var notaMedia = (nota1 + nota2 + nota3) / 3;
console.log("La nota media es: " + notaMedia.toFixed(2));
if(notaMedia < 5){
  console.log("No apto");
}else if(notaMedia == 5){
  console.log("Apto");
}else if(notaMedia > 5 && notaMedia < 7){
  console.log("Notable");
} else if(notaMedia >= 7 && notaMedia <= 10){
  console.log("Sobresaliente");
}
console.log("----------------");

//Ejercicio 5 de Ejercicios Extra
/*Según una variable dia y otra mesNacimiento , calcular el horóscopo de la persona.*/

console.log("Ejercicio 5");
console.log("================");
var diaIntro = 30;
var mesIntro = "julio";
if((diaIntro >= 21 && mesIntro == "marzo" || (diaIntro <= 20 && mesIntro == "abril"))){
  console.log("Tu signo es Aries");
}else if((diaIntro >= 21 && mesIntro == "abril" || (diaIntro <= 21 && mesIntro == "mayo"))){
  console.log("Tu signo es Tauro");
}else if((diaIntro >= 22 && mesIntro == "mayo" || (diaIntro <= 21 && mesIntro == "junio"))){
  console.log("Tu signo es Geminis");
}else if((diaIntro >= 22 && mesIntro =="junio" || (diaIntro <= 23 && mesIntro == "julio"))){
  console.log("Tu signo es Cancer");
}else if((diaIntro >= 24 && mesIntro =="julio" || (diaIntro <= 23 && mesIntro == "agosto"))){
  console.log("Tu signo es Leo");
}else if((diaIntro >= 24 && mesIntro =="agosto" || (diaIntro <= 23 && mesIntro == "septiembre"))){
  console.log("Tu signo es Virgo");
}else if((diaIntro >= 24 && mesIntro =="septiembre" || (diaIntro <= 23 && mesIntro == "octubre"))){
  console.log("Tu signo es Libra");
}else if((diaIntro >= 24 && mesIntro =="octubre" || (diaIntro <= 22 && mesIntro == "noviembre"))){
  console.log("Tu signo es Escorpio");
}else if((diaIntro >= 23 && mesIntro == "noviembre" || (diaIntro <= 21 && mesIntro == "diciembre"))){
  console.log("Tu signo es Sagitario");
}else if((diaIntro >= 22 && mesIntro == "diciembre" || (diaIntro <= 20 && mesIntro == "enero"))){
  console.log("Tu signo es Capricornio");
}else if((diaIntro >= 21 && mesIntro == "enero" || (diaIntro <= 19 && mesIntro == "febrero"))){
  console.log("Tu signo es Acuario");
}else if((diaIntro >= 20 && mesIntro == "febrero" || (diaIntro <= 20 && mesIntro == "marzo"))){
  console.log("Tu signo es Piscis");
}
console.log("----------------");

//Ejercicio 6 de Ejercicios Extra
/*Según una variable llamada numero , calcule si es par o inpar.*/

console.log("Ejercicio 6");
console.log("================");
var numero = 6;
if((numero % 2) == 0){
  console.log("El numero " + numero + " es par");
}else{
  console.log("El numero " + numero + " no es par");
}
console.log("----------------");

//Ejercicio 7 de Ejercicios Extra
/*Usa una variable y di si es positivo o negativo.*/

console.log("Ejercicio 7");
console.log("================");
var num = -5;

if(num > 0)
  console.log("El numero " + num + " es positivo");
else
  console.log("El numero " + num + " es negativo");
console.log("----------------");

//Ejercicio 8 de Ejercicios Extra
/*Di si un número es mayor de 100.*/

console.log("Ejercicio 8");
console.log("================");
var number = 45;

if(number > 100)
  console.log("El numero " + number + " es mayor de 100");
else
  console.log("El numero " + number + " no es mayor de 100");
console.log("----------------");

//Ejercicio 9 de Ejercicios Extra
/*Usa 3 variables que contengan un número y di si el tercero es igual a la suma del primero y el segundo.*/

console.log("Ejercicio 9");
console.log("================");
var num1 = 3;
var num2 = 4;
var num3 = 7;

if(num3 == (num1 + num2))
  console.log("El numero " + num3 + " es la suma de " + num1 + " y " + num2);
else
  console.log("El numero " + num3 + " no es la suma de " + num1 + " y " + num2);

console.log("----------------");

//Ejercicio 10 de Ejercicios Extra
/*Calcular su área según el tipo de figura geométrica.
Área del cuadrado: lado * lado.
Área del círculo: pi * radio al cuadrado
Pi toma el valor 3.14*/

console.log("Ejercicio 10");
console.log("================");

var square = {
  sideOne: 1,
  sideTwo: 3,
  typeOfGeometricFigure: 'Cuadrado'
}
var circle = {
  radius: 5,
  typeOfGeometricFigure: 'Circulo'
}
const PI = 3.14;
console.log("El área del " + square.typeOfGeometricFigure + " es: " + square.sideOne * square.sideTwo);
console.log("El área del " + circle.typeOfGeometricFigure + " es: " + (circle.radius * circle.radius) * PI);

console.log("----------------");
