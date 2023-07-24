// Ejemplo Event Loop

function three() {
  console.log("function three is done");
}

function two() {
  three();
  console.log("function two is done");
}

function one() {
  setTimeout(function () {
    console.log("set timeout is done");
  }, 3000);
  two();

  console.log("function one is done");
}

one();

// ---------------------------------------------------------------

// Contextos de Ejecución

var x = 10;

function foo() {
  var y = 20;
  x = 30;

  console.log(x);
  console.log(y);
}

foo();

console.log(x);
console.log(y);

// ---------------------------------------------------------------

// Objeto window (en navegador)

// Ver propiedades y métodos de window
console.log(window);

// Podemos acceder a sus propiedades y utilizarlos
console.log(window.location);

// Podemos acceder a sus métodos y ejecutarlos
window.alert("Hola Mundo!");

// Puedo manipularlo...
window.zprop = "Cohorte FT41b";
console.log(window.zprop);

// ---------------------------------------------------------------

// Proceso de HOISTING

// Antes del HOISTING

bar();
console.log(foo);

var foo = "foo";
function bar() {
  console.log(baz);
  console.log("bar");
  var baz = "baz";
}

// Después del HOISTING

function bar() {
  var baz;
  console.log(baz);
  console.log("bar");
  baz = "baz";
}
var foo;

bar();
console.log(foo);

foo = "foo";

// ---------------------------------------------------------------

// Objeto this

console.log(this);

// Llamada simple

function a() {
  function b() {
    return this;
  }
  return b();
}
console.log(a());

// Método de una función

var object = {
  prop: 37,
  f: function () {
    return this.prop;
  },
};
console.log(object.f());

// ---------------------------------------------------------------

// Coerción de Datos

var ej1 = "5" - 5; // 5 - 5
var ej2 = "5" + 5; // '5' + '5'

console.log(ej1);
console.log(ej2);

console.log(typeof ej1);
console.log(typeof ej2);

console.log(typeof Number(ej2));

console.log(Boolean(ej2));
console.log(typeof Boolean(ej2));

// ---------------------------------------------------------------

// Tipo de Dato: function

function saludar() {
  console.log("Hola!");
}

console.log(saludar);
saludar();
console.log(saludar.name);

// Se le puede agregar propiedades extra! (aunque no se recomienda)
saludar.extra = "Chau";
console.log(saludar.extra);

// ---------------------------------------------------------------

// Pasaje o Asignación por Valor (copia del valor)

var nombre = "Cande";

function agregarApellido(nombre) {
  nombre = nombre + " Yarossi";
  console.log(nombre);
}

agregarApellido(nombre);
console.log(nombre);

// Pasaje o Asignación por Referencia (misma dirección de memoria)

var objeto = {
  nombre: "Cande",
};

function agregoApellido2(objeto) {
  objeto.apellido = "Yarossi";
  console.log(objeto);
}

agregoApellido2(objeto);
console.log(objeto);
