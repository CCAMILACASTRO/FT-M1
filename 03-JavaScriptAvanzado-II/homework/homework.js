'use strict';

// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */
function counter() {
  var contador = 1; // Valor inicial del contador

  return function() {
    return contador++; // Devuelve el valor actual del contador y luego lo incrementa
  };
}
/* En este ejemplo, se crea una instancia de contador mediante la llamada a counter() y se almacena en la variable 
contador. Luego, cada vez que se invoque counter(), se obtendrá el siguiente valor del contador.
Es importante destacar que el estado del contador se mantiene gracias al closure creado por la función anónima 
retornada por counter. Cada instancia de contador tiene su propio estado independiente, lo cual permite tener 
múltiples contadores funcionando de forma independiente. */

//---------------------------------------------------------------------------------------------------------------------

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e 
invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de 
la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado 
de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento,
no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) 
  y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

function cacheFunction(cb) {
   
    let cache = {}; // Objeto para almacenar la memoria caché
  
    return function(arg) {
      if (cache.hasOwnProperty(arg)) { // Si el argumento ya existe en la caché
        return cache[arg]; // Si el argumento EXISTE devuelve el resultado almacenado en la caché 
      }
      
      let resultado = cb(arg); //Si el argumento NO EXISTE se invoca al callback para obtener el resultado.
      cache[arg] = resultado; // Almacena el resultado en la caché
  
      return resultado; // Devuelve el resultado obtenido del callback
    };
  }
/* En esta implementación, cacheFunction recibe una función cb como parámetro y devuelve una función interna. 
La función interna tiene acceso al objeto cache a través del closure.
Cuando se llama a la función interna con un argumento arg, se verifica si ese argumento ya está almacenado en 
la caché utilizando cache.hasOwnProperty(arg). Si el argumento ya existe en la caché, se devuelve el resultado 
almacenado en la propiedad correspondiente de cache.
Si el argumento no existe en la caché, se invoca al callback cb con ese argumento para obtener el resultado. 
Luego, se almacena el resultado en la caché asociado al argumento utilizando cache[arg] = result.
Finalmente, se devuelve el resultado obtenido del callback. */

//----------------------------------------

// Bind

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() {
  return this.nombre;}

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que 
  actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, 
  tres funciones que retornen una cadena (string) y el delimitador especificado 
  (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente 
  un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(null,"*","*");
let textoGuiones = crearCadena.bind(null, "-", "-");
let textoUnderscore = crearCadena.bind(null, "_", "_");
/* En este caso, utilizamos bind para crear nuevas funciones basadas en crearCadena. La función bind toma 
como primer argumento el valor de this (en este caso, null porque no estamos usando el contexto de this). 
Luego, especificamos los argumentos adicionales que queremos "bindear" a la función, en este caso, los delimitadores 
correspondientes.
Al utilizar bind, hemos creado tres nuevas funciones: asteriscos, guiones y guionesBajos. 
Estas funciones solo requieren un argumento, que es la cadena de texto. Los delimitadores ya están predefinidos 
gracias al bind y no es necesario pasarlos cuando llamamos a las nuevas funciones. */

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   counter,
   cacheFunction,
   getNombreInstructor,
   getNombreAlumno,
   textoAsteriscos,
   textoGuiones,
   textoUnderscore,
};


