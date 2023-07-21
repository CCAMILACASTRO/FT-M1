
////*****  LINKEDLIST  *****////

function LinkedList(){ // HEAD: tiene null porque al principo no esta enlazado con nadie
    this.head = null;
    this._length = 0;
}

function Node(element){  // Creamos el Nodo para ser enlazado
    this.data = element; // dato/ valor del Nodo
    this.next = null;  // enlase(gancho) con 'null' porque aun no se enlaso con nadie.
}

// CREAMOS UN METODO DENTRO DE LINKEDLIST (HEAD) PARA **AGREGAR/ENLAZAR** A LOS NODOS

LinkedList.prototype.add = function(element){ //Le pasamos la informacion que tiene que recibir el nodo.
    let node = new Node(element);  //Creamos la instancia del Nodo
    let current = this.head; //Creamos el puntero

    //LO HACEMOS UNA SOLA VEZ PARA QUE EL HEAD SE ENLASE AL PRIMER NODO.
    
    if(!current) {       // Si no hay nada en el current(this.head)(puntero)  // current === null //
        this.head = node;  //Hacemos que el HEAD mire al Node.
        return node;  // retorna el nodo {data: 5, next: null}
    }

    // RECORREMOS LA LISTA: (Sólo entra cuando next NO es null)
                                    // Entra cuando tengo mas de 2 nodos
    while(current.next !== null) { //Mientras que current.next (this.head) este mirando al nodo
        current = current.next;   
    }
    current.next = node; // para que el nodo mire al nodo siguiente
    return node; 

}

// CREAMOS UN METODO PARA VER LA CANTIDAD DE NODOS QUE HAY EN LA LISTA:

LinkedList.prototype.size = function(){
    let current = this.head;
    let contador = 0;

    if(current === null){  //Si la lista esta vacia
        console.log('La lista esta vacia')
        return
    }

    while(current !== null){  //Si la lista es diferente a null
        console.log(current.data) // nos muestra el valor de cada Nodo
        contador++ ; //suma uno al contador de la lista
        current = current.next;  //current pasa al siguiente Nodo.
    }
    return contador;
}

// INSTANCIAMOS LA LISTA:
let newList = new LinkedList()  //Creamos la instancia de la Lista HEAD
console.log(newList.add(5))  //invocamos el metodo add. para agregarle valor a this.data
console.log(newList.add(7))
console.log(newList.add(2))
console.log(newList) // para ver cómo quedo nuestra lista completa.
console.log(newList.size())


////*****  TABLAS HASH  *****////

function HashTable(){
    this.array = [];
    this.numBuckets = 35
}

//hash(): METODO que indica la posicion donde se guarda la key.

HashTable.prototype.hash = function(key){
    let hash = 0; // variable para guardar la suma de los caracteres de la key

    for(let i = 0; i < key.length; i++){
        hash += key.chartCodeAt(i) // acumula en hash el numero que le corresponde a cada caracter de la key que recibe por parametro.
    }
    return hash % this.numBuckets; //retorna el modulo entre valor de hash y el numero de backets que hay (35) y nos da el numero de posicion 
                                    // donde estará ubicada la key en el array.
}

// set(): METODO que guarda las cosas en el buckets. En este metodo se genera el objeto.

HashTable.prototype. set = function(key, value) {

    if(typeof key !== 'string') throw TypeError('Keys must be strings') // Lanza un error que dice que el key recibido no es un string.

    let index = this.hash(key) //Guarda en index la posicion donde esta la key. 

    if(! this.array[index]) { // Si dentro del array en la posicion de index no hay nada...
        
        this.array[index] = {}; // Creamos un objeto en la posicion de index
    }

    this.array[index][key] = value; // Creamos la key:value dentro del objeto con los valores recibidos por parametro.

// Esto permite controlar colisiones, cuando tengo mas de un mismo key. Lo puedo guardar dentro de la misma posición.
}
