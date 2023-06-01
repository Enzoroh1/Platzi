/*Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:
for - recorre un bloque de código varias veces
for/in - recorre las propiedades de un objeto
for/of - recorre los valores de un objeto iterable
while - recorre un bloque de código mientras se cumple una condición específica
do/while - también recorre un bloque de código mientras se cumple una condición específica */

// for
var estudiantes = ["Maria", "Jose", "Juana"];
function saludarEstudiantes(estudiantes) {
    console.log(`Hola, ${estudiantes}`);
};
// Forma 1
for (var i = 0; i < estudiantes.length; i++) { //Variable inicial igual a cero; la variable de i sea menor a la longitud de estudiante(array); incrementa el i(indice)
    // console.log(estudiantes[i]);
    saludarEstudiantes(estudiantes[i])
}
// Forma 2
for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

// while
var estudiantes = ["Maria", "Jose", "Juana"];
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
};
while (estudiantes.length > 0) {
    // console.log(estudiantes);
    var estudiante = estudiantes.shift();//va a estar sacando elementos / Shif, metodo de mutacion, va a estar sacando elementos
    saludarEstudiantes(estudiante);
};