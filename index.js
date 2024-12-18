// Declaraciòn de variable para guardar el resultado de la suma
let tomi = function (a, b) {return a + b}
let resultado = alert (tomi (3,7));
let mai = function (a, b) {return a - b}
let resultadoo = alert(mai(23,1));




// CLASE 4: Funciones

// Actividades:

// Actividad de repaso: Calcular el area de un rectangulo // Crea una función en JavaScript que calcule el área de un triángulo y almacene el resultado en una variable global. La función debe tomar dos parámetros: la base y la altura del triángulo. Luego, llama a la función con algunos valores de prueba y muestra el resultado almacenado en la variable global en la consola.

let areaTriangulo;

function calcularAreaTriangulo (base, altura) {
    return (base * altura) / 2;
}

areaTriangulo = calcularAreaTriangulo (6, 4);

console.log (areaTriangulo);

// Actividad de repaso: Goles del campeon 🏆⚽ // Escribí una función en JavaScript que calcule la cantidad total de goles marcados por messi en el mundial y que almacene el resultado en una variable global. La función debe tomar como parámetros la cantidad de partidos jugados y el promedio de goles por partido. Luego, muestra el resultado almacenado en la variable global en la consola.

let cantidadTotalGoles;

function calcularCantidadTotalGoles (partidosJugados, golesPorPartido) {
    return partidosJugados * golesPorPartido;
}

cantidadTotalGoles = calcularCantidadTotalGoles (7,1);
console.log (cantidadTotalGoles);



// CLASE 4: Funciones

// HOJA 1

// Preguntas

// 1. ¿Qué es una función y para qué se utiliza en programación?
// Las funciones son como pequeños frascos donde puedes guardar un bloque de código para reutilizarlo en diferentes partes de tu programa. Esto te permite evitar duplicar código y facilita el mantenimiento y la organización de tu aplicación.


// 2. ¿Cómo se almacena el valor de una variable desde una función con return?
// Para almacenar el valor de una variable desde una función con return, hacemos lo siguiente:
function nave (a, b) {
    return a + b; 
}

let sumar = nave (1,2);
console.log (sumar);

// 3. ¿Qué es el scope y cuál es la diferencia entre scope local y global?

// 4. ¿Qué sucede si declaramos una variable con el mismo nombre en el scope local y global?

// 5. ¿Qué es una función anónima y cómo se declara?

// 6. ¿Cuál es la ventaja de utilizar funciones anónimas en JavaScript?

// 7. Escribe un ejemplo de una función anónima que sume dos números y almacene el resultado en una variable.

// 8. ¿Cómo se puede reutilizar una función en diferentes partes de un programa?

// 9. ¿Qué es el return en una función y cuál es su propósito?
// 10. ¿Cómo afecta el scope a la accesibilidad de las variables en un programa?




