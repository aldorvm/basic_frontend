// 1. Crea una variable para cada operación aritmética:
// 2. Crea una variable para cada tipo de operación de asignación, que haga
// uso de las variables utilizadas para las operaciones aritméticas:
let num1 = 4;
let num2 = -2;

let operaciones = {
    suma: num1 + num2,
    resta: num1 - num2,
    mult: num1 * num2,
    div: num1 / num2,
}
console.log("El resultado de las operaciones son: ") + console.log(operaciones)
console.log("**************************************************")

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación:
console.log(10 > 5)
console.log(7 <= 9)
console.log(6 == "6")
console.log(8 === 8)
console.log(3 !== 7)
console.log("**************************************************")

//4. Imrpime 5 comparaciones falsas con diferentes operadores de comparación:
console.log(10 < 5)
console.log(7 >= 9)
console.log(6 === "6")
console.log(8 === 4)
console.log(2 !== 2)
console.log("**************************************************")

// 5. Utiliza el operador logístico and:
console.log("El primer número es " + num1 + " y el segundo número es " + num2 + ".")
if (num1 > 0 && num2 > 0)
    console.log("Ambos números son positivos.")
else
    console.log("Uno o ambos números es o son negativos.")

console.log("**************************************************")

// 6. Utiliza el operador logístico or:
if (num1 >= 10 || num1 >= -10)
    console.log("El primer número tiene dos cifras.")
else
    console.log("El primer número NO tiene 2 cifras.")

console.log("**************************************************")

// 7. Combina ambos operadores lógicos:
if (num2 >= 5 && num2 <= 10 || num2 == 0)
    console.log("El segundo número está entre 5 y 10 o es igual a 0.")
else
    console.log("El segundo número no es 0 ni está entre 5 y 10.")

console.log("**************************************************")

// 8. Añade alguna negación:
if (num1 !== num2)
    console.log("Ambos números son diferentes.")
else
    console.log("Los dos números son iguales.")

console.log("**************************************************")

// 9. Utiliza el operador ternario:
let op_ternario = (num1 + num2) < 10 ? "Ambos números no suman 10." : "Sumados alcanzan 10."
console.log(op_ternario)

console.log("**************************************************")

// 10. Combina operadores aritméticos, de comparación y lógicas:
const readline = require("readline");

const num = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

num.question("Escoge un número POSITIVO (mayor que 0): ", (numero) => {
    let eleccion = parseInt(numero); // Convertimos el input a número.
    console.log(`Has escogido el número ${eleccion}.`);

    if (isNaN(eleccion) || eleccion <= 0) { // Si la elección no es un número o es igual/menor a 0, se cierra el input con close().
        console.log("Por favor, ingresa un número positivo válido.");
        num.close();
        return;
    }

    let sumado = eleccion + 1; // Sumamos 1 correctamente.
    console.log(`El número escogido sumado a 1 da ${sumado}.`);

    let monocifra = sumado < 10; // Si es menor a 10, tiene una sola cifra.

    if (!monocifra)
        console.log("Este número tiene dos o más cifras.");
    else
        console.log("Este número tiene una sola cifra.");

    num.close(); // Cerramos la entrada de usuario.
});
