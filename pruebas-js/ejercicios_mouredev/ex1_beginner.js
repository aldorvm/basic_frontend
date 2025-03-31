// 1. Escribe un comentario en una línea:
console.log("Comentario en esta línea.")

// 2. Escribe un comentario en varias líneas:
console.log("Comentario en \nvarias líneas.")

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos:
let tipo_boolean = true;
let tipo_string = "hola";
let tipo_number = 5;
let tipo_bigInt = 23n;
let tipo_symbol = Symbol;
let tipo_object = null;
let tipo_undefined = undefined;

// 4. Imprime por consola el valor de todas las variables:
console.log(tipo_boolean);
console.log(tipo_string);
console.log(tipo_number);
console.log(tipo_bigInt);
console.log(tipo_symbol);
console.log(tipo_object);
console.log(tipo_undefined);

// 5. Imprime por consola el tipo de todas las variables:
console.log(typeof (tipo_boolean));
console.log(typeof (tipo_string));
console.log(typeof (tipo_number));
console.log(typeof (tipo_bigInt));
console.log(typeof (tipo_symbol));
console.log(typeof (tipo_object));
console.log(typeof (tipo_undefined));

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo:
tipo_boolean = false;
tipo_string = "adiós";
tipo_number = 7;
tipo_bigInt = 36n;
tipo_symbol = Symbol;
tipo_object = null;
tipo_undefined = undefined;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo:
tipo_boolean = Symbol;
tipo_string = undefined;
tipo_number = null;
tipo_bigInt = 36n;
tipo_symbol = 6;
tipo_object = "NO es un objeto";
tipo_undefined = 54n;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos:
const boolean = true;
const string = "valor inmutable";
const number = 1;
const bigInt = 100n;
const symbol = Symbol;
const _object = null;
const _undefined = undefined;

let datos_primitivos = { boolean, string, number, bigInt, symbol, _object, _undefined };
console.log(datos_primitivos);

// 9. A continuación, modifica los valores de las constantes:
console.log("NO se pueden modificar los valores de variables que son CONSTANTES.")

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse:
/* La línea 65 (pregunta 9) daría error en caso de querer redeclarar una constante. */