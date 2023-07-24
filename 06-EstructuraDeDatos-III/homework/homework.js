'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según 
  se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará
 el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.insert = function(value){
   
   //Si es menor...
   if(value < this.value) { //Comparamos con el valor del root para saber a qué lado va. Como es menor...
      if(this.left){ //Si no esta vacio...
         return this.left.insert(value); // RECURSION. Si esta ocupado hago recursion para empezar a recorrer desde ese nodo.
      } else { //si esta vacio...
         this.left = new BinarySearchTree(value); //Creamos un nuevo arbol con el valor nuevo en la izquierda.
         return value;
      }
   }  else { //Si el valor es MAYOR que el root va a la derecha.
      if(this.right) {  // Si no esta vacio...
         return this.right.insert(value); // RECURSION. Si esta ocupado hago recursion para empezar a recorrer desde ese nodo.
      }  else { // Si esta vacio...
         this.right = new BinarySearchTree(value);
         return value;
      }
   }
}

BinarySearchTree.prototype.size = function(){
   let total= 0; //Genero un contador para ir sumando los nodos
   total+= 1;  //Le sumo 1 por la raiz (this.value)
   if(this.left) total += this.left.size(); //Si hay izquierda sumale todo lo que haya en la izquierda.
   if(this.right) total += this.right.size(); //Si hay derecha sumale todo lo que haya en la derecha.
   return total;
 }

BinarySearchTree.prototype.contains = function(value){
   if(value === this.value) return true;
   
   if(value > this.value){ //Si entra aca, va a la derecha porque es mayor
      if(this.right === null) return false; //Si dentro de la rama derecha no hay nada.
      return this.right.contains(value); //Hago RECURSION para seguir buscando
   } 
   if(value < this.value){ //Si entra aca, va a la izquierda porque es menor
      if(this.left === null) return false; //Si dentro de la rama izquierda no hay nada.
      return this.left.contains(value); //Hago RECURSION para seguir buscando.
   } 
   /*   &&  si se cumple lo primero sigo con lo segundo.
   if(this.value === value) return true --> Si el valor esta en la raiz.
   if(this.left && this.left.contain(value)) return true --> Si hay izquierda y el valor esta ahi retorna true.
   if(this.right && this.right.contain(value)) return true --> Si hay derecha y el valor esta ahi retorna true.
   return false.
   */
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, pedido){
   if(pedido === 'in-order' || pedido === undefined){  // RECORRE: IZQUIERDA - ROOT - DERECHA
      if(this.left && this.left.depthFirstForEach(cb, pedido)); // Si left esta ocupado hace RECURSION hasta que encuentra un null.
      cb(this.value); //Esta funcion retorna el valor de la root donde quedó
      if(this.right && this.right.depthFirstForEach(cb, pedido)); // Si right esta ocupado hace RECURSION hasta que encuentra un null.
   }

   if(pedido === 'pre-order'){  // RECORRE: ROOT - IZQUIERDA - DERECHA
      cb(this.value); //Esta funcion retorna el valor de la root donde quedó
      if(this.left && this.left.depthFirstForEach(cb, pedido)); // Si left esta ocupado hace RECURSION hasta que encuentra un null.
      if(this.right && this.right.depthFirstForEach(cb, pedido)); // Si right esta ocupado hace RECURSION hasta que encuentra un null.
   }

   if(pedido === 'post-order'){  // IZQUIERDA - DERECHA - ROOT
      if(this.left && this.left.depthFirstForEach(cb, pedido)); // Si left esta ocupado hace RECURSION hasta que encuentra un null.
      if(this.right && this.right.depthFirstForEach(cb, pedido)); // Si right esta ocupado hace RECURSION hasta que encuentra un null.
      cb(this.value); //Esta funcion retorna el valor de la root donde quedó
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array=[]){
   
  if(this.left){ //Si hay algo del lado izquierdo
   array.push(this.left)  // Voy a pushear al value(array) todo el arbol del lado izquierdo.
   }
   if(this.right){ //Si hay algo del lado derecho
      array.push(this.right) //Voy a pushear al value(array) todo el arbol del lado derecho.
   }
   cb(this.value); // Cuando no entra mas en ninguno de los dos lados, llamamos al cb con value.

   if(array.length > 0){   // Si tenfo elementos en mi array
      array.shift().breadthFirstForEach(cb, array) // Sacamos el primer elemento del array y hace RECURSION para eliminarlos de a uno.
   }
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
