'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let array = [1];
  let divisor = 2; //Es el primo mas chico por el cual empezar a dividir.
  
  while(num > 1){ //Mientras num sea mayor a 1
    if(num % divisor === 0){  // Si la division me da de resto 0
      array.push(divisor) //Guardo en el array ese divisor
      num = num / divisor // Al numero lo divido por el divisor y asigno ese valor.
    } else { //Si el modulo no da 0
      divisor ++; // Le sumo 1 al dividor para poder dividir al numero por el siguiente divisor.
    }                    
  }
  return array;

  // O(n)
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

//Usamos dos 'for' porque una vez que termina de recorrer 'j', tiene que volver a iterar 'i' para que quede totalmente ordenado.
//Se usa la 'i' de base iterativa y despues 'j' avanza en cada posicion de esa iteracion.
  for(let i = 0; i < array.length; i++){ //Recorremos la primera posicion
    for(let j = i+1 ; j < array.length; j++){ //Recorre el array una posicion delante de i (para evaluar la siguiente posicion)
      if(array[i] > array[j]) { //Si lo que hay en i es mayor a lo que hay en j...
        let aux = array[i]  //Guardo el valor de la posicion de i en una variable para no perder ese valor
         array[i] = array[j]; //Hago el intercambio de valores. 
         array[j] = aux ////Hago el intercambio de valores con lo que guarde en aux.
      }
    } //Cuando ya no hay elementos por recorrer, sale del for de j, y ahora i++ y j (i+1), y vuelve a recorrrer,comparar e intercambiar.
  }
  return array;
}
// O(n*n) => O(n^2) xq recorre el mismo array.


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(let i = 1; i < array.length; i++){  // i arranca en 1 para poder comparar con la posicion 0
    let j = i -1; //Guardamos en j lo que hay antes de i
    let aux = array[i]; // Guardo el valor de la posicion de i en una variable para no perderlo cuando intercambia.
    while(j >= 0 && aux < array[j]){ // Mientras j sea mayor o igual a cero, y ademas el valor de aux es menor a lo que hay en el array de j
      array[j+1] = array[j] // Intercambio: en la posicion de j+1 pones lo que hay en j.
      j--; // Decrementa el valor de j para seguir comparando con las posiciones anteriores.
    }    
    array[j+1] = aux; // Si no hay mas posiciones x recorrer atras (-1), coloco el valor guardado en aux.
  }
  return array; //Retorno el array ordenado.
}

// O(n*m) xq recorre dos elementos diferentes.


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(let i = 0; i < array.length; i++){
    let min = i // Arranca desde la posicion de i que es 0.
    
    for(let j = i + 1; j < array.length; j++){ // j empieza en i+1 porque va una posicion adelante comparando
      if(array[j] < array[min]) // Si lo que hay en j es menor a lo que hay en i
      min = j; // minimo esta en la posicion de j
    }  
    if(i !== min){  //Si la posicion de i es diferente al minimo.
      let aux = array[i] //Guarda lo que hay dentro de i
      array[i] = array[min] //Intercambia: lo que hay dentro de i cambia de posicion con lo que habia en el minimo.
      array[min] = aux; //Lo que habia en el minimo va x lo que hay en aux.
    }
  }
  return array; //Retorna el array ordenado.
}
// O(n*n) => O(n^2) xq recorre el mismo array.


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
