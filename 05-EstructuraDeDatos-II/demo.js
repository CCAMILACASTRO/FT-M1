// DEMO LECTURE -> ESTRUCTURA DE DATOS II

// ---------------------------------------------------------------

// Estructura de una Linked List

var lista = {
  _length: 4,
  head: {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: {
          data: 4,
          next: null,
        },
      },
    },
  },
};

console.log(lista);

// ---------------------------------------------------------------

// Implementación Inicial de una Linked List

// Función Constructora (prototype)

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function LinkedList() {
  this._length = 0;
  this.head = null;
}

// Clases

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
  }

  // Recorrer y mostrar elementos de la Lista

  getAll() {
    let nodo = this.head;
    if (!nodo) {
      console.log("La lista esta vacia!");
      return;
    }
    while (nodo) {
      console.log(nodo.data);
      nodo = nodo.next;
    }
    return;
  }
}

var lista = new LinkedList();
lista.head = new Node(1, new Node(2, new Node(3)));

lista.getAll();

// ---------------------------------------------------------------

// Hash Table

var buckets = [];
var nroBuckets = 6;

function hash(value){
    let bucket = value.color.length % (nroBuckets + 1);
    return bucket;
}

function add(value){
    let bucket = hash(value);
    if(!buckets[bucket]) {
        buckets[bucket] = [];
    }
    buckets[bucket].push(value);
}

var obj1 = { color: "azul" };
var obj2 = { color: "verde" };
var obj3 = { color: "rojo" };
var obj4 = { color: "turquesa" };

add(obj1);
add(obj2);
add(obj3);
add(obj4);

console.log(buckets);

// buckets: [
//     0: []
//     1: []
//     2: [ { color: 'turquesa' } ],
//     3: []
//     4: [ {color: 'azul'}, {color: 'rojo'} ],
//     5: [ {color: 'verde'} ],
//     6: []
// ]