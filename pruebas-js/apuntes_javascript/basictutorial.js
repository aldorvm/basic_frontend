// Saludo con textos de ejemplo y explicación de las 3 variables.
function saludo(n1, n2) {
    console.log("Hola!! Ejemplo 1: " + n1 + ".\nY ejemplo 2: " + n2 + ".");

    const inmutable = 3;
    console.log("Las const son variables no editable, son CONSTANTES o fijas (por ejemplo: " + inmutable + ").");

    let modificable = 8 + 3;
    console.log("Los let son variables que pueden ser modificadas dentro de una función, pero a diferencia de los var," +
        " su valor no se aplica o transfiere a otras funciones (otros bloques), por lo que es una variable local.");
    console.log(modificable);
}
saludo(67, "txt segundo ejemplo");


// Función simple de multiplicar (lo mismo para el resto de operciones, pero cambiando el símbolo).
function multiplicar(num1, num2) {
    let medaigual = num1 * num2;
    return medaigual;
}
let muestraResultado = multiplicar(6, 4);
console.log(multiplicar(6, 4));

function intento(n1, n2) {
    var medaigual = n1 + n2;
    return medaigual;
}
console.log(intento(1, 5));

/* La diferencia entre VAR y LET es que en VAR puedes volver a declarar la misma variable para
reasignarle un nuevo valor, mientras que en LET debes hacerlo sin escribir estas 3 letras.
Esto sirve para que, en códigos largos donde es muy fácil y probable que coincidas los nombres
asignados a las variables de forma inconsciente, te aparezca un error cuando uses LET y así verifiques
si realmente quieres o no reasignar/actualizar su valor. Ejemplo:*/
//Permite reasignar su valor (de 4 a 6 en este caso) escribiendo VAR en ambos casos.
var variableConVar = 4;
var variableConVar = 6;
console.log(variableConVar);

//Aparece un error cuando se quiere reasignar su valor usando nuevamente LET, ayuda a verificar.
let variableConLet = 5;
let variableConLet = 8;

//Se puede reasignar las variables declaradas con LET si no se vuelve a escribir "LET" delante.
let variableLet = 7;
variableLet = 2;
console.log(variableLet);