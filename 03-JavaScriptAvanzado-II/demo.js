// DEMO LECTURE -> JS AVANZADO I

// ---------------------------------------------------------------

// Closures -> Ejemplo 1

function saludar(saludo) {
  return function (nombre) {
    console.log(saludo + " " + nombre);
  };
}

var saludarHola = saludar("Hola");

saludarHola("Toni");

// ---------------------------------------------------------------

// Closures -> Ejemplo 2

var contenedor = function () {
  let caja = [];

  return function (item) {
    caja.push(item);
    return caja;
  };
};

const miCaja = contenedor();

const nuevoItem = miCaja(1);
const nuevoItem2 = miCaja(2);

console.log(nuevoItem2);

// ---------------------------------------------------------------

// Closure -> Ejemplo Arrays con VAR

var crearFuncion = function () {
  var arreglo = [];

  for (var i = 0; i < 3; i++) {
    arreglo.push(() => {
      console.log(i);
    });
  }
  return arreglo;
};

var arr = crearFuncion();

arr[0]();
arr[1]();
arr[2]();

// ---------------------------------------------------------------

// Closure -> Ejemplo Arrays con LET

var crearFuncion = function () {
  var arreglo = [];

  for (let i = 0; i < 3; i++) {
    arreglo.push(() => {
      console.log(i);
    });
  }
  return arreglo;
};

var arr = crearFuncion();

arr[0]();
arr[1]();
arr[2]();

// ---------------------------------------------------------------

// Closures -> ChatBot

function hacerSaludo(lenguaje) {
  if (lenguaje === "en") {
    return () => console.log("Hello!");
  }
  if (lenguaje === "es") {
    return () => console.log("Hola!");
  }
}

var saludoIngles = hacerSaludo("en");
var saludoEspanol = hacerSaludo("es");

saludoIngles();
saludoEspanol();

// ---------------------------------------------------------------

// Método bind -> Ejemplo con referencia al THIS

var calculos = {
  suma: "+",
  resta: "-",
  multiplicacion: "*",
  division: "/",
};

var multiplicar = function (a, b) {
  var strCalculo = a + this.multiplicacion + b;
  console.log(eval(strCalculo));
};

var calculoMultiplicar = multiplicar.bind(calculos);

calculoMultiplicar(2, 3);

// Método bind -> Ejemplo sin referencia al THIS

var potencia = function (a, b) {
  var strCalculo = a + "**" + b;
  console.log(eval(strCalculo));
};

var calculoPotencia = potencia.bind(this);

calculoPotencia(2, 3);

// Con parámetros bindeados...

var potenciasDe2 = function (a, b) {
  var strCalculo = a + "**" + b;
  console.log(eval(strCalculo));
};

var calculoPotenciaDe2 = potenciasDe2.bind(this, 2);

calculoPotenciaDe2(3);

// ---------------------------------------------------------------

// Método call

var calculos = {
  suma: "+",
  resta: "-",
  multiplicacion: "*",
  division: "/",
};

var multiplicar = function (a, b) {
  var strCalculo = a + this.multiplicacion + b;
  console.log(eval(strCalculo));
};

multiplicar.call(calculos, 2, 3);

// ---------------------------------------------------------------

// Método apply

var calculos = {
  suma: "+",
  resta: "-",
  multiplicacion: "*",
  division: "/",
};

var multiplicar = function (a, b) {
  var strCalculo = a + this.multiplicacion + b;
  console.log(eval(strCalculo));
};

multiplicar.apply(calculos, [2, 3]);
