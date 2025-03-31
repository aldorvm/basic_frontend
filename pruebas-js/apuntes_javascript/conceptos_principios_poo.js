/* Superclase (father de las subclases) con abstracción en el atributo "marca" y encapsulamieno en el atributo "encendido". 
Las funciones y variables se denominan diferente si están siendo declarados dentro o fuera de una clase y/u objeto. 
Se llaman funciones si están fuera y métodos si están dentro. Se llaman variables si están fuera y atributos si están dentro. */
class Dispositivo {   // Creación de una clase que NO es hija de otra. En este ejemplo se le ha dado el nombre de "Dispositivo".
  constructor(marca) {    // Se usa el método especial constructor para dar un valor inicial (los otorgados) al parámetro "marca".
    this.marca = marca;   // Abstracción (enfocado en qué hace y no en cómo, ahorrando tener que conocer el contenido de "marca").
    let encendido = false;    /* Encapsulamiento (acceso directo al atributo "encendido" restringido, ya que let la hace inaccesible
    directamente desde fuera de la función, con la función "encender" será true pero sin return "encendido" se seguirá viendo false). */

    this.encender = function () {   // Se crea o declara una función dentro del método "encender" para definir su comportamiento. 
      encendido = true;   // Cuando se ejecute o llame la función "encender", la variable con el atributo "encendido" pasará a ser true.
      console.log(`${this.marca} encendido.`); // También se printará en consola "X encendido", siendo X la marca (Samsung/iPad).
      return encendido;   // Necesario para poder mostrar el atributo "encendido" fuera de esta función (llamada "encender").
    };
  }
}

// Subclase (Herencia + Polimorfismo):
class Celular extends Dispositivo {   // Creación de la clase "Celular" que hereda las propiedades y métodos de "Dispositivo".
  usar() {    // Se crea o declara el método "usar", en este caso lo que pasará si se ejecuta con la clase "Celular".
    console.log(`Usando el celular ${this.marca} para llamar.`);    // Aparecerá la "marca" asignada entre ("") cuando se cree el objeto.
  }
}

// Subclase (Herencia + Polimorfismo):
class Tablet extends Dispositivo {    // Creación de la clase "Tablet" que hereda las propiedades y métodos de "Dispositivo".
  usar() {    // Se crea o declara el método "usar", en este caso lo que pasará si se ejecuta con la clase "Celular".
    console.log(`Usando la tablet ${this.marca} para dibujar.`);    // Aparecerá la "marca" asignada entre ("") cuando se cree el objeto.
  }
}

// Creando objetos: VARIABLE + NOMBRE VARIABLE = new NOMBRE CLASE ("ARGUMENTO"):
let miCelular = new Celular("Samsung");   // El objeto "Celular" con la variable "miCelular" tiene el argumento "Samsung".
let miTablet = new Tablet("iPad");    // El objeto "Tablet" con la variable "miTablet" tiene el argumento "iPad".


// Usando o llamando métodos tras haber sido declarados:
miCelular.encender();   // Se usa el método "encender" de la clase "Celular" para ejecutar la función declarada anteriormente.
miCelular.usar();   // Se usa el método "usar" de la clase "Celular" para ejecutar la función declarada anteriormente.

miTablet.encender();    // Se usa el método "encender" de la clase "Tablet" para ejecutar la función declarada anteriormente.
miTablet.usar();    // Se usa el método "usar" de la clase "Tablet" para ejecutar la función declarada anteriormente.