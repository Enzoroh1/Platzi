var numero = 11;

switch (numero) {
    case 1:
        console.log("Soy un uno!");
        break;
    case 10:
        console.log("Soy un diez!");
        break;
    default:
        console.log("No soy nada");
}

var tijeras = "tijeras";
var piedra = "piedra";
var papel = "papel";

function resultadoGanador(user, cpu) {
    switch (true) {
        case user === cpu :
            console.log("Empate")
        break;
        case user === "tijeras" && cpu === "papel" :
            console.log("Ganaste")
        break;
        case user === "piedra" && cpu === "tijeras" :
            console.log("Ganaste")
        break;
        case user === "papel" && cpu === "piedra" :
            console.log("Ganaste")
        break;
        default: 
            console.log("Perdiste")
    }
}
resultadoGanador(tijeras,piedra)

if (false === !true) { 
    console.log(false == true)//Se comprueba esto 
} 
else { 
    console.log(true === !false) 
}