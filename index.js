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



// Actividad de repaso: Multiplicación y División con Función Anónima // Crea una función anónima en JavaScript que multiplique dos números y divida el resultado por 6. Almacena el resultado en una variable global. Llama a la función anónima con algunos valores de prueba y mostra el resultado en la consola.

let resultado2;

let funcionAnonima = function (a, b) {return (a * b) / 6}

resultado2 = funcionAnonima (2, 6);

console.log (resultado2);



// Actividad de repaso: Goles en Partidos Clave 🏆⚽🚀 // Desarrolla una función anónima que reciba la cantidad de goles marcados por la selección en tres partidos clave de la Copa del Mundo y retorne el total de goles. Almacena el resultado en una variable global y muéstralo en la consola.

let cantidadTotalGoles2;

let partidosClave = (vsFrancia, vsCroacia, vsHolanda) => {return vsFrancia + vsCroacia + vsHolanda;}

cantidadTotalGoles2 = partidosClave (3,3,2);

console.log (cantidadTotalGoles2);



// Actividad de repaso: Jugadores en la cancha 🏆⚽🚀 // Escribí una función flecha que reciba un array con los nombres de los jugadores que empezaron en el once inicial y otro array con los nombres de los jugadores que ingresaron como suplentes. La función debe retornar un array combinado con todos los jugadores que participaron en el partido. Muestra el resultado en la consola. (PENDIENTE)




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
// Llamamos Scope a la zona donde declaramos las variables, sean dentro de una función o bloque de código específico (local) o fuera de la función o bloque específico (global).

// 4. ¿Qué sucede si declaramos una variable con el mismo nombre en el scope local y global?
// Es importante saber que, cuando declaramos una variable exactamente igual dentro de la zona local como otra en la zona global, ambas son variables diferentes.

// 5. ¿Qué es una función anónima y cómo se declara?
// Las funciones anónimas son las funciones que no requieren de un nombre a la hora de declarar la función.

// 6. ¿Cuál es la ventaja de utilizar funciones anónimas en JavaScript?
// La ventaja de utilizar funciones anonimas en Js es que, además de no requerir el nombre al declarar la función, tampoco lo requiere cuando la llamamos. Y, al almacenar el resultado de la variable, en vez de escribir el nombre de la función vamos a escribir el nombre de la variable solamente. Además, las funciones anónimas podemos declararlas en una misma línea.

// 8. ¿En qué se diferencia la función flecha con la anónima?
// Las funciones flecha son las funciones que no requieren de un nombre ni de la palabra function a la hora de declararlas.

// 9. ¿Cómo se puede reutilizar una función en diferentes partes de un programa?

// 10. ¿Qué es el return en una función y cuál es su propósito?
// Imaginemos que el return es nuestro astronauta que viaja a la nave (la funcion sumar), éste realiza la operación y trae de vuelta el resultado, y la variable resultado es donde guardamos ese descubrimiento. 

// 11. ¿Cómo afecta el scope a la accesibilidad de las variables en un programa?
// Las variables declaradas fuera de cualquier función tienen un scope global y pueden ser accedidas desde cualquier parte del programa. Sin embargo, Las variables declaradas dentro de una función solo son accesibles dentro de esa función.






