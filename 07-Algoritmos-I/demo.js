// DEMO LECTURE -> ALGORITMOS I

// ---------------------------------------------------------------

// Algoritmos

let array1 = [1, 2, 3, 4, 5];
let array2 = [9, 8, 7, 6, 5];

function coincidence(array1, array2) {
  for (var i = 0; i <= array1.length; i++) {
    for (var j = 0; j <= array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
}

console.log(coincidence(array1, array2));

// ---------------------------------------------------------------

// Complejidad y Eficiencia

/*
Adivinar un nro 
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

n = 10

* Jugador1 -> uno por uno
1 -> no, +
2 -> no, +
3 -> no, +
...
10 -> si -> El peor de los casos: 10 pasos

* Jugador2 -> siempre al medio 
5 -> no, +
8 -> no, +
9 -> no, +
10 -> si -> Caso promedio: 4 pasos -> log2(N) -> N: 10 -> 3.32

* Jugador3 -> al revés
10 -> si -> El mejor de los casos

log2(256) = 8
log2(1024) = 10

log2(10000) = 13
log2(20000) = 14

Jugador1 -> O(n)
Jugador2 -> O(log2n)
Jugador3 -> O(1)
*/

// ---------------------------------------------------------------

// Notación Big O

function maxArray() {
  var max = array[0]; // 1 paso
  for (var i = 0; i <= array.length; i++) { // N pasos
    if (array[i] > max) { // 1 paso
      max = array[i]; // 1 paso
    }
  }
}

// 1 + N * 2
// 1 + 2N
// 2N
// N
// O(N)

function sumArray(array, n) {
  var fin = array.length - 1; // 1 paso
  var ini = 0; // 1 paso
  while (ini < fin) { // N pasos
    var suma = array[ini] + array[fin]; // 1 paso
    if (suma === n) return true; // 1 paso
    if (suma > n) fin = fin - 1; // 1 paso
    if (suma < n) ini = ini + 1; // 1 paso
  }
  return false; // 1 paso
}

// 3 + N * 4
// 3 + 4N
// 4N
// N
// O(N)

function coincidence(array1, array2) {
  for (var i = 0; i <= array1.length; i++) { // N pasos
    for (var j = 0; j <= array2.length; j++) { // N pasos
      if (array1[i] === array2[j]) { // 1 paso
        return true; // 1 paso
      }
    }
  }
  return false; // 1 paso
}

// N * N * 2 + 1
// N * N
// N^2
// O(N^2)

function coincidence2(array1, array2) {
   for (var i = 0; i <= array1.length; i++) { // N pasos
       if (array2.includes(array1[i])) { // N paso
         return true; // 1 paso
       }
   }
   return false; // 1 paso
}
 
// N * N + 1
// N * N
// N^2
// O(N^2)

// ---------------------------------------------------------------

// Algoritmos de Ordenamiento

function bubbleSort(array) {
  /*
    arr inicial = [5, 1, 4, 2, 8]

    Primer recorrido
    [5, 1, 4, 2, 8]
    (5, 1) -> swap
    [1, 5, 4, 2, 8]
       (5, 4) -> swap
    [1, 4, 5, 2, 8]
          (5, 2) -> swap
    [1, 4, 2, 5, 8]
             (5, 8) -> no swap
    
    Segundo recorrido
    [1, 4, 2, 5, 8]
    (1, 4) -> no swap
    [1, 4, 2, 5, 8]
       (4, 2) -> swap
    [1, 2, 4, 5, 8]
          (4, 5) -> no swap
    [1, 2, 4, 5, 8]
             (5, 8) -> no swap

    Tercer recorrido
    [1, 2, 4, 5, 8]
    (1, 2) -> no swap
    [1, 2, 4, 5, 8]
       (2, 4) -> no swap
    [1, 2, 4, 5, 8]
          (4, 5) -> no swap
    [1, 2, 4, 5, 8]
             (5, 8) -> no swap

    Devuelve [1, 2, 4, 5, 8]
    */
  /*
        -> Recorrer el array en varias opportunidades
        -> En cada iteración, tomar arr[i] y arr[i+1], comparar e incrementar i
        -> Si arr[i] y arr[i+1] están desordenados, hacemos swap (intercambio)
        -> Si recorro el arr y no hice ningún swap, está ordenado (flag)
   */
}

function insertionSort(array) {
  /*
    arr inicial = [5, 1, 4, 2, 8]
                     (1) -> comparo con 5 -> swap
                  [1, 5, 4, 2, 8]
                        (4) -> comparo con 5 -> swap
                  [1, 4, 5, 2, 8]
                     (4) -> comparo con 1 -> no swap
                  [1, 4, 5, 2, 8]
                           (2) -> comparo con 5 -> swap
                  [1, 4, 2, 5, 8]
                        (2) -> comparo con 4 -> swap
                  [1, 2, 4, 5, 8]
                     (2) -> comparo con 1 -> no swap
                  [1, 2, 4, 5, 8]
                              (8) -> comparo con 5 -> no swap

    Devuelve [1, 2, 4, 5, 8]
    */
  /*
        -> Recorrer el array (probablemente 1 sola vez)
        -> Comparar el valor de la posición actual con todas sus anteriores, si están desordenadas, hacemos swap
        -> Al finalizar el recorrido, está ordenado
    */
}

function selectionSort(array) {
  /*
    arr inicial = [5, 1, 4, 2, 8]

    Primer recorrido
    [5, 1, 4, 2, 8]
       (1) -> busco 1° mínimo y hago swap con 1° posición
    
    Segundo recorrido
    [1, 5, 4, 2, 8]
             (2) -> busco 2° mínimo y hago swap con 2° posición

    Tercer recorrido
    [1, 2, 4, 5, 8]
          (4) -> busco 3° mínimo y no necesito hacer swap

    Cuarto recorrido
    [1, 2, 4, 5, 8]
             (5) -> busco 4° mínimo y no necesito hacer swap
    
    Quinto recorrido
    [1, 2, 4, 5, 8]
                (8) -> busco 5° mínimo y no necesito hacer swap

    Devuelve [1, 2, 4, 5, 8]
    */
  /*
        -> Recorrer el arr, varias veces
        -> En cada iteración, buscaremos el mínimo y verificaremos si es necesario cambiarlo de posición
        -> Deberíamos guardarnos una referencia del último índice donde guardamos el último valor ordenado
        -> Al finalizar todos los recorridos, está ordenado
   */
}
