// DEMO LECTURE -> JS AVANZADO I

// ---------------------------------------------------------------

// RECURSIÓN: Ejemplo 1

let arr = [1, 2, 3];

function sumaArreglo(arr) {
  if (arr.length === 0) return 0;
  return arr.shift() + sumaArreglo(arr);
}

console.log(sumaArreglo(arr));

// ---------------------------------------------------------------

// Ejemplo con RECURSIÓN

let arr2 = [
  { nombre: "Luna", graduado: true },
  { nombre: "Elias", graduado: false },
  { nombre: "Pablo", graduado: true },
  { nombre: "Maria", graduado: true },
  { nombre: "Lisa", graduado: false },
];

function graduados(arrInicial, arrGrads = []) {
  if (arrInicial.length === 0) return [];

  if (arrInicial[0].graduado) arrGrads.push(arrInicial.shift());
  else arrInicial.shift();

  graduados(arrInicial, arrGrads);
  return arrGrads.length === 0 ? "No hay graduados" : arrGrads;
}

console.log(graduados(arr2));

// Ejemplo sin RECURSIÓN

let filtro = arr2.filter((e) => e.graduado === true);
let rta = filtro.length === 0 ? "No hay graduados" : filtro;

console.log(rta);

// ---------------------------------------------------------------

// Ejemplo recorrer arreglo sin RECURSIÓN

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function recorrerArreglo(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
  }
}

function recorrerArregloInverso(arreglo) {
  for (let i = arreglo.length - 1; i >= 0; i--) {
    console.log(arreglo[i]);
  }
}

recorrerArreglo(numeros);
recorrerArregloInverso(numeros);

// Ejemplo recorrer arreglo con RECURSIÓN

function recorrerArregloR(arreglo, i = 0) {
  if (i < arreglo.length) {
    console.log(arreglo[i]);
    recorrerArregloR(arreglo, i + 1);
  }
}

function recorrerArregloInversoR(arreglo, i = 0) {
  if (i < arreglo.length) {
    recorrerArregloInversoR(arreglo, i + 1);
    console.log(arreglo[i]);
  }
}

recorrerArregloR(numeros);
recorrerArregloInversoR(numeros);

// ---------------------------------------------------------------

// Estructura de datos -> SET

var set = new Set();
console.log(set);

var arreglo = [1, 2, 3, 4, 4, 5, 5, 1, 2];
var set = new Set(arreglo);
console.log(set);
set.add(6);
console.log(set);
set.delete(4);
console.log(set);

var set = new Set();
var persona = { nombre: "Edwin" };
var persona2 = { nombre: "Edwin" };
set.add(persona);
set.add(persona2);
console.log(set);

// ---------------------------------------------------------------

// Estructura de datos -> STACK

var stack = [];

stack.push(1);
stack.push(10);

console.log(stack);

var i = stack.pop();

console.log(stack);

// ---------------------------------------------------------------

// Estructura de datos -> QUEUE

var queue = [];

// enqueue
queue.push(1);
queue.push(2);

console.log(queue);

// dequeue
var i = queue.shift();

console.log(queue);
