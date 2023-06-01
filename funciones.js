//Declarativas
function miFuncion () {
   return 3; 
}
miFuncion();

function saludarEstudiante(estudiante) {
    console.log("Hola", estudiante)
}
saludarEstudiante("Diego")

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`)
}
saludarEstudiante("Diego")

function suma (a,b) {
    return a + b;
}
suma(1,2)

//Expresion
var miFuncion = function(a,b){
    return a + b;
}
miFuncion();