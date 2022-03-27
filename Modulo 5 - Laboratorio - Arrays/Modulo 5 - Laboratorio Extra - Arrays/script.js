/**
 * Ejercicio 1
 */

let bucleWhile = document.getElementById('resultado1');
let bucleDoWhile = document.getElementById('resultado2');
let bucleFor = document.getElementById('resultado3');

arr = [25, 2.05, 1000, 63, 4.01, -9];
let i = 0;

bucleWhile.addEventListener('load', bWhile(arr));
bucleDoWhile.addEventListener('load', bDoWhile(arr));
bucleFor.addEventListener('load', bFor(arr));


/**
 * Bucle while que recorre el array pasado por parametro
 * @param {*} arr 
 */
function bWhile(arr) {
  while (i < arr.length) {
    if (arr[i] == arr[arr.length - 1]) {
      bucleWhile.innerHTML += arr[i] + "";
    } else {
      bucleWhile.innerHTML += arr[i] + ", ";
    }
    i++;
  }
}

/**
 * Bucle do while que recorre el array pasado por parametro
 * @param {*} arr 
 */
function bDoWhile(arr) {
  let i = 0;
  do {
    if (arr[i] == arr[arr.length - 1]) {
      bucleDoWhile.innerHTML += arr[i] + "";
    } else {
      bucleDoWhile.innerHTML += arr[i] + ", ";
    }
    i++;
  } while (i < arr.length);
}
/**
 * Bucle for que recorre el array pasado por parametro
 * @param {*} arr 
 */
function bFor(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[arr.length - 1]) {
      bucleFor.innerHTML += arr[i] + "";
    } else {
      bucleFor.innerHTML += arr[i] + ", ";
    }
  }
}

/**
 * Ejercicio 2
 */
let ejer2 = document.getElementById('resultado4');
let array2 = [14, 2, 2.02, 63, 0, -9];

ejer2.addEventListener('load', ejercicio2(array2));

function ejercicio2(array2) {
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 0) {
      ejer2.innerHTML += array2[i] + "&nbsp&nbsp";
    }
  }
}

/**
 * Ejercicio 3
 */

let ejer3 = document.getElementById('resultado5');
let ejer3b = document.getElementById('resultado6');
let arrMayIgual = [];
let arrMenor = [];

ejer3.addEventListener('load', ejercicio3(array2));

/**
 * Funcion que recorre un array dado como parametro y divide entre los >= 0 y los < 0 e introduce en dos arrays nuevos
 * @param {*} array2 
 */
function ejercicio3(array2) {
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] >= 0) {
      arrMayIgual.push(array2[i]);

    } else {
      arrMenor.push(array2[i]);
    }
  }
  ejer3.innerHTML = arrMayIgual;
  ejer3b.innerHTML = arrMenor;
}

/**
 * Ejercicio 4
 */

let ejer4 = document.getElementById('resultado7')
ejer4.addEventListener('load', ejercicio4(array2));

/**
 * Elimina los indices del array pasado por parametro menores que 0
 * @param {*} array2 
 */
function ejercicio4(array2) {
  let indice;
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] < 0) {
      indice = i;
    }


  }
  array2.splice(indice, 1);
  ejer4.innerHTML = array2;
}

/**
 * Ejercicio 5
 */

const arrEjer5 = [{
    id: 1,
    name: "Jhon",
  },
  {
    id: 2,
    name: "Doe",
  },
  {
    id: 3,
    name: "Clara",
  },
  {
    id: 4,
    name: "Elisa",
  },
  {
    id: 5,
    name: "Pedro",
  }
]
let ejer5 = document.getElementById('resultado8');
ejer5.addEventListener('load', inverse(arrEjer5));

function inverse(arrEjer5) {
  for (let i = arrEjer5.length - 1; i >= 0; i--) {
    ejer5.innerHTML += "id: " + arrEjer5[i].id;
    ejer5.innerHTML += "&nbsp&nbspname: " + arrEjer5[i].name + "<br>";
  }
}

/**
 * Ejercicio 6
 */

const arrEjer6 = [{
    id: 1,
    name: "Jhon",
    age: 25,
  },
  {
    id: 2,
    name: "Doe",
    age: 8,
  },
  {
    id: 3,
    name: "Clara",
    age: 15,
  },
  {
    id: 4,
    name: "Elisa",
    age: 30,
  },
  {
    id: 5,
    name: "Pedro",
    age: 18,
  },
]

let ejer6 = document.getElementById('resultado9');
ejer6.addEventListener('load', mayorEdad(arrEjer6));

function mayorEdad(arrEjer6) {
  for (let person in arrEjer6) {
    if (arrEjer6[person].age >= 18) {
      ejer6.innerHTML += "id: " + arrEjer6[person].id;
      ejer6.innerHTML += "&nbsp&nbspname: " + arrEjer6[person].name;
      ejer6.innerHTML += "&nbsp&nbspage: " + arrEjer6[person].age + "<br>";
    }
  }
}

/**
 * Ejercicio 7
 */
let arrMayorEdad = [];
let arrMenorEdad = [];
let ejer7 = document.getElementById('resultado10');
let ejer7b = document.getElementById('resultado11');
ejer7.addEventListener('load', insertMayorEdad(arrEjer6));


function insertMayorEdad(arrEjer6) {
  for (let person in arrEjer6) {
    if (arrEjer6[person].age >= 18) {
      arrMayorEdad.push(arrEjer6[person]);
    } else {
      arrMenorEdad.push(arrEjer6[person]);
    }
  }
  for (let person in arrMayorEdad) {
    ejer7.innerHTML += "&nbsp&nbspid: " + arrMayorEdad[person].id;
    ejer7.innerHTML += "&nbsp&nbspname: " + arrMayorEdad[person].name;
    ejer7.innerHTML += "&nbsp&nbspage: " + arrMayorEdad[person].age + "<br>";
  }
  for (let person in arrMenorEdad) {
    ejer7b.innerHTML += "&nbsp&nbspid: " + arrMenorEdad[person].id;
    ejer7b.innerHTML += "&nbsp&nbspname: " + arrMenorEdad[person].name;
    ejer7b.innerHTML += "&nbsp&nbspage: " + arrMenorEdad[person].age + "<br>";
  }
}

/**
 * Ejercicio 8
 */

const arrayHoteles = [{
    hotelId: 1,
    hotelName: "Jhon",
    availableRooms: 25,
    price: 10.20,
  },
  {
    hotelId: 2,
    hotelName: "Doe",
    availableRooms: 8,
    price: 4.25,
  },
  {
    hotelId: 3,
    hotelName: "Clara",
    availableRooms: 15,
    price: 14.30,
  },
  {
    hotelId: 4,
    hotelName: "Elisa",
    availableRooms: 30,
    price: 10,
  },
  {
    hotelId: 4,
    hotelName: "Pedro",
    availableRooms: 10,
    price: 8.10,
  },
]

let arrayIncremento = [];
let arraySinIncremento = [];
let ejer8 = document.getElementById('resultado12');
let ejer8b = document.getElementById('resultado13');
ejer8.addEventListener('load', incremento(arrayHoteles));


function incremento(arrayHoteles) {
  for (let hotel in arrayHoteles) {
    if (arrayHoteles[hotel].availableRooms < 10) {
      arrayIncremento.push(arrayHoteles[hotel])
    } else {
      arraySinIncremento.push(arrayHoteles[hotel]);
    }
  }
  for (let room in arrayIncremento) {
    ejer8.innerHTML += "&nbsp&nbsphotelId: " + arrayIncremento[room].hotelId;
    ejer8.innerHTML += "&nbsp&nbsphotelName: " + arrayIncremento[room].hotelName;
    ejer8.innerHTML += "&nbsp&nbspavailableRooms: " + arrayIncremento[room].availableRooms;
    ejer8.innerHTML += "&nbsp&nbspprice: " + arrayIncremento[room].price + " - Incremento 10€: " + (arrayIncremento[room].price + 10) + "<br>";
  }
  for (let room in arraySinIncremento) {
    ejer8b.innerHTML += "&nbsp&nbsphotelId: " + arraySinIncremento[room].hotelId;
    ejer8b.innerHTML += "&nbsp&nbsphotelName: " + arraySinIncremento[room].hotelName;
    ejer8b.innerHTML += "&nbsp&nbspavailableRooms: " + arraySinIncremento[room].availableRooms;
    ejer8b.innerHTML += "&nbsp&nbspprice: " + arraySinIncremento[room].price + "<br>";
  }
}

/**
 * Ejercicio 9
 */

const arrayHoteles2 = [
  {
    hotelId: 1,
    hotelName: "Hotel 1",
    availableRooms: 25,
    price: 10.20,
  },
  {
    hotelId: 2,
    hotelName: "Hotel 2",
    availableRooms: 8,
    price: 4.25,
  },
  {
    hotelId: 3,
    hotelName: "Hotel 3",
    availableRooms: 15,
    price: 14.30,
  },
  {
    hotelId: 4,
    hotelName: "Hotel 4",
    availableRooms: 30,
    price: 10,
  },
  {
    hotelId: 5,
    hotelName: "Hotel 5",
    availableRooms: 10,
    price: 8.10,
  },
]

let arrayIncremento2 = [];
let ejer9 = document.getElementById('resultado14');
ejer9.addEventListener('load', incremento2(arrayHoteles2));

function incremento2(arrayHoteles2){
  for(let hotel in arrayHoteles2){
    if(arrayHoteles2[hotel].availableRooms < 10){
      arrayIncremento2.push(arrayHoteles2[hotel]);
    }
  }
  for (let room in arrayIncremento2) {
    ejer9.innerHTML += "&nbsp&nbsphotelId: " + arrayIncremento2[room].hotelId;
    ejer9.innerHTML += "&nbsp&nbsphotelName: " + arrayIncremento2[room].hotelName;
    ejer9.innerHTML += "&nbsp&nbspavailableRooms: " + arrayIncremento2[room].availableRooms;
    ejer9.innerHTML += "&nbsp&nbspprice: " + arrayIncremento2[room].price + " - Incremento 10€: " + (arrayIncremento2[room].price + 10) + "<br>";
  }
}

