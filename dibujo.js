var d = document.getElementById("dibujito"); //traer un elemento por su Id
var lienzo = d.getContext("2d");

lienzo.beginPath(); // a estas funciones no se les pasan parametros
lienzo.strokeStyle = "blue"; // atributo al objeto liezo
lienzo.moveTo(50,10);
lienzo.lineTo(250,2);
lienzo.stroke(); // esto función dibuja la línea
lienzo.closePath();// esto es para levantar el lapiz, sino se pone
                    // la proxima linea parte del punto final.
