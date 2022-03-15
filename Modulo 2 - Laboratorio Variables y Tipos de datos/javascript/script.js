//objeto hotel
var hotel = {
  Forte: {
    hotelName: "Forte Village Castello",
    locationHotel: "Italy",
    imgHotel: "./image/castello.jpg",
  },

  Royal: {
    hotelName: "Royal Mansour",
    locationHotel: "Marrakech",
    imgHotel: "./image/Royal Mansour Marrakech.jpg",
  },

  Park: {
    hotelName: "Park Hyatt-Vendôme",
    locationHotel: "Paris",
    imgHotel: "./image/Park Hyatt-Vendôme Paris.jpg",
  },
};

//captura del nombre del hotel a través del prompt
var nameHotel = prompt("Introduce el nombre del hotel (Forte, Royal o Park)");

document.getElementById("hotel-name").innerHTML="Hotel " + hotel[nameHotel].hotelName;
document.getElementById("hotel-location").innerHTML="Location " + hotel[nameHotel].locationHotel;
document.getElementById("hotel-img").src= hotel[nameHotel].imgHotel;

//captura del rating del hotel a través del prompt

var rating = prompt("¿Quiere puntuar este hotel? 1-5 estrellas");
//objeto star, almacena el icono star 
var star =  {
  1: "<span>★☆☆☆☆</span>",
  una:"<span>★☆☆☆☆</span>",
  2: "<span>★★☆☆☆</span>",
  dos: "<span>★★☆☆☆</span>",
  3: "<span>★★★☆☆</span>",
  tres: "<span>★★★☆☆</span>",
  4: "<span>★★★★☆</span>",
  cuatro: "<span>★★★★☆</span>",
  5: "<span>★★★★★</span>",
  cinco: "<span>★★★★★</span>",
};
//captura cuantas estrellas quiere poner el usuario
document.getElementById("stars").innerHTML=star[rating];
//captura si el usuario quiere review anónima o no
var checkbox = confirm("¿Quiere realizar una review anónima?");
//seudo selector :checked, comprueba si el checkbox esta seleccionado o no
document.getElementById("anonymous").checked = checkbox;
