// Estructura

function BinarySearchTree(value) {
  this.root = value;
  this.left = null;
  this.right = null;
}

// let arbol = new BinarySearchTree(9)
// let nuevoArbol = new BinarySearchTree(4)

// Pseudocódigo del INSERT

BinarySearchTree.prototype.insert = function (value) {
  let arbolito = new BinarySearchTree(value);
  /*
    ¿El valor es más grande que el nodo actual? (value > this.root)
    * Sí -> me voy a la DERECHA
        ¿Hay algo a la derecha? (this.right !== null)
        * Sí -> RECURSIÓN sobre el subárbol derecho
        * No -> Inserto el dato.
    * No -> nada.
    ¿El valor es más chico que el nodo actual? (value < this.root)
    * Sí -> me voy a la IZQUIERDA
        ¿Hay algo a la izquierda? (this.left !== null)
        * Sí -> RECURSIÓN sobre el subárbol izquierdo
        * No -> Inserto el dato.
    * No -> nada.
    OPCIONAL ¿El valor es igual que el nodo actual? (value === this.root)
    * Sí -> POLITICA DE COLISIONES
    * No -> nada.
    */
};
