'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una 
  lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser 
  un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, 
  buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList(){
  this.head = null;

}

function Node(value){
  this.value = value;
  this.next = null;
  

}

LinkedList.prototype.add = function(value){
     let node = new Node(value); //Creamos la nueva instancia de Node y creamos el objeto de ese nodo con sus prop {value: , next: }
     
     if(!this.head) {  //Verificamos si el head esta vacio (no esta enlazado con un nodo)
      this.head = node; // Asignamos el nodo a la cabeza del head.
     } else {
    // El current es una referencia hacia donde va a mirar el puntero.
      let current = this.head; // creamos un puntero/referencia hacia el head.
      
      while(current.next){ //Mientras haya un next de un nodo que no sea null, es decir que este ocupado por otro nodo
        current = current.next; // Seguimos avanzando a los siguientes next de los nuevos nodos.
      }                         
    // Si se rompe el while es xq encontre un next con valor = null, es decir que aun no esta enlazado con otro nodo.
      current.next = node; // Entonces le agregamos/enlazamos un nuevo nodo al next anterior.
     }
}

LinkedList.prototype.remove = function(){
  //VERIFICAMOS SI EL HEAD ESTA VACIA.
  if(!this.head) { //Si no existe un head, es decir, si la lista esta vacia.
      return null; // 
    }
  // VERIFICAMOS SI TIENE UN SOLO NODO
  let current = this.head; // creamos un puntero/referencia hacia el head.
  if(!current.next) { //Verificamos si el next del nodo esta enlasado con otro nodo o con nadie(null).
    let nodoRemove = this.head.value // Guardamos en una variable el valor del nodo que estamos eliminando. Ingresando a la propiedad value del nodo.
    this.head = null; //Hacemos que el head ahora mire a null, por ende deja de estar enlazado con el nodo.
    return nodoRemove;  // retornamos el valor de lo que estamos borrando.
  }
  //EN EL CASO DE TENER + DE 1 NODO. ITERAMOS.
  while(current.next.next) { // Mientras la propiedad de next del nodo este enlazada con otro nodo con su prop next...
    current = current.next // Seguimos pasando el puntero a los siguientes next de los nuevos nodos para ver cuántos next hay.
  }
  // Si se rompe el while es xq encontre un next con valor = null, es decir que aun no esta enlazado con otro nodo.
  let nodoRemove = current.next.value // Guardamos en una variable el valor del nodo que estamos eliminando. Ingresando a la propiedad value del nodo.
  current.next= null; // En caso de que el nodo este enlazado con otro nodo, le decimos a su puntero que mire a null.
  return nodoRemove; 
}

LinkedList.prototype.search = function(arg){ //Colocamos 'argumento' porque puede estar recibiendo cualquier dato(valor o cb)
  let current = this.head; //creamos un puntero/referencia hacia el head para empezar a recorrer la lista.
  
  while(current){ //Mientras donde este posicionada alla algo
    if(typeof arg === 'function'){ //Verificamos si el tipo de dato dle argumento es una funcion
      if(arg(current.value)) { // Invocamos a la funcion y verificamos si el valor que retorna esa funcion es el valor que tiene que buscar.
        return current.value; // Si el retorno de la funcion da 'true', se retorna el valor que encontro.
      } 
    } 
    else {
      if(current.value === arg) { // Verificamos si el valor del argumento es el valor del current donde esta posicionado
        return arg; //retorna el valor encontrado
      }
    }
    current = current.next; // Si no encuentra el valor que busca en el current donde esta, que pase al current siguiente.
  }
  return null; // Si no encontro el valor, retorna null.
}


/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para 
almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, 
pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada 
  caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de 
  esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto
  en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.array = []
  this.numBuckets = 35;
}

HashTable.prototype.hash = function(key){ // este metodo me dice en qué posicion tengo que guardar la informacion.
  let hash = 0; // variable para guardar la suma de los valores de cada caracter de la string

  for(let i = 0; i < key.length; i++){ //recorremos la string que recibo por parametro.
    hash += key.charCodeAt(i) //a la variable hash le sumamos el numero del valor del caracter de la posicion de i.
  }
  return hash % this.numBuckets; //retornamos el modulo.
}

HashTable.prototype.set = function(key, value){ // se encarga de generar y guardar el key:value en la posicion que le corresponde.
  //Verificamos si el valor que nos mandan es o no una string
  if(typeof key !== 'string') throw TypeError ('Keys must be strings')

  let index = this.hash(key); //Invocamos al metodo hash y le pasamos la key para saber su posicion.
  //Verificamos si dentro del array existe un objeto en esa pisicion
  if(!this.array[index]) {// Si dentro del array en esa posicion no hay nada...
  this.array[index] = {} //Creamos un objeto en esa posicion dentro del array
  }   // Si no hay nada...
  this.array[index][key] = value; // Creamos un nuevo objeto con la key:value.
}

HashTable.prototype.get = function(key){
  let index = this.hash(key); //Invocamos al metodo hash y le pasamos la key para saber su posicion.
  return this.array[index][key] // Retorna la key que esta en esa poosicion del array.
}

HashTable.prototype.hasKey = function(key){
  let index = this.hash(key)
  if(this.array[index][key]) return true; //Verifica si dentro del array en esa posicion existe una clave igual a la pasada por parametro.
  return false;  //Retorna booleano.
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
