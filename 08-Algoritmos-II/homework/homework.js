'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  /*if(array.length <= 1) return array;
                            redondea abajo / aleatorio entre 0 y 1 * cantidad de elementos
  let calculoPivote = array.Math.floor(Math.random() * array.length) //Esto me retorna un numero(posicion) aleatorio redondeado para abajo * largo del array.
  let pivot = [calculoPivote];

  let iguales = [] - para el o los valores que sean = al pivote 
  let left = [] - para los menores al pivote
  let right = [] - para los mayores al pivote.

  for(let i = 0; i < array.length; i++){
    if(array[i] !== pivote){     //Si el valor dentro de la pisicion de i es diferente al pivote ...
      if(array[i] < pivote) left.push(array[i])  // si es true: pushear al array de left
      right.push(array[i])   // si es false: pushear al array de right.
    } else {  //Si el valor es igual a pivote
      iguales.push(array[i]) // pusheo el valor a 'iguales'
    }
  } Salgo del for
  return quickSort(left).concat(iguales).concat(quickSort(right));
}  
  */
  
  if(array.length <= 1) return array; 
  
    let pivote = array[0] 
    let left = [];
    let right = [];
    
    for(let i = 1; i < array.length; i++){
      if(array[i] <= pivote ){
        left.push(array[i])      
      } else {
        right.push(array[i])
      }    
    }
    return quickSort(left).concat(pivote).concat(quickSort(right));
} 

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Metodo slice() --> genera un nuevo array desde la posicion de inicio hasta donde le digamos, sin incluir ese ultimo elemento.
  // Si quisieramos incluir ese elemento le pasamos la posicion +1. 
  // Si le paso solo un parametro, genera un array desde la posicion que elegi hasta el ultimo elemento.
  
  /* 1ro: Verifico si mi array tiene mas de un elemento */
  if(array.length < 2) return array;

  /* 2do: Divido el array que tengo en dos . Si tengo array impar uso Math.floor redondeando hacia abajo */
  let arrayDividido = Math.floor(array.length / 2); //Divido el array a la mitad y lo retorna.

  /* 3ro: Guardo en cada variable (L y R) la parte del array dividido*/
  let left = array.slice(0, arrayDividido); //Genera un nuevo array desde la posicion 0 hasta donde dividio el Math.floor
  let right = array.slice(arrayDividido); //Genera un nuevo array desde donde dividió el Math.floor hasta el final.

  /* 4to: creo un nuevo array para ir guardando los valores que comparo y pusheo. */
  array = [] //Genero un array vacio pisando el valor del array recibido por parametro, porque los valores de ese array ya los guarde en left y right.
  // let newArray = []  -- Sino puedo generar un nuevo arreglo dentro de otra variante
  /*5to: RECURSION: para seguir dividiendo los array de ser necesario */
  left = mergeSort(left) // hago RECURSION  de left para que siga dividiendo el array hasta que quede menor a 2.
  right = mergeSort(right); // hago RECURSION de right para que siga dividiendo el array hasta que quede menor a 2.

  /* 6to: Si no se cumple el paso 1 del if, retorna los array divididos con minimo de 2 elementos y entra al while */
  while(left.length && right.length) { //Mientras mi array de la izquierda tenga elementos y mi array de la derecha tenga elementos.
    if(left[0] < right[0]){
      array.push(left.shift()); //Saco ese valor (shift, retorna el primer elemento) y dsp lo pusheo al array.
    } else {
      array.push(right.shift()) //Saco ese valor (shift, retorna el primer elemento) y dsp lo pusheo al array.
    }
  // Se corta el while.
  }
  // 7mo: Como uno de los dos (L o R) ya no tiene mas elementos...
  array = array.concat(left, right) // Junto lo que hay en el array pusheado + lo que haya en L o R

  return array; //Retorna el array de la recursion.

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
