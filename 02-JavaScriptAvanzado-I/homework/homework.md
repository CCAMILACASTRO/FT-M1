# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 1ro 10
   console.log(a); // 2do  8
   var f = function (a, b, c) {
      b = a;
      console.log(b); //3ro 8 (b toma el valor de a pasado por parametro)
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); //4to 9 (porque b esta dentro de otro bloque definida)
};
c(8, 9, 10);      
console.log(b); // 5to 10 (valor en la var del contexto global)
console.log(x); //6to 1 - (valor en la var del contexto global)
```

```javascript
console.log(bar); // 1ro undefined -
console.log(baz); // 2do baz is not defined (porque no esta definida con var ni let ni const)
foo(); // 3ro Hola
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // 1ro Franco
```

```javascript
var instructor = 'Tony';
console.log(instructor); // 1ro Tony
(function () { // f() autoinvocable = IIFE
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // 2do Franco (este corresponde al bloque del if)
   }
})();
console.log(instructor); // 3ro Tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // 1ro The Flash (corresponde al if)
   console.log(pm); // 2do Reverse Flash (corresponde al if xq esta declarada con let y tiene alcance de bloque)
}
console.log(instructor); // 3ro The Flash (corresponde al if porque se modifico su valor)
console.log(pm); // 4to Franco (porque esta declarada con let y la hace una variable en bloque)
``` 

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript

6 / "3" = 2
/*realiza una operación de división. Dado que uno de los operandos es una cadena, JavaScript intentará convertirlo a un número antes de realizar la división.*/

"2" * "3" = 6
/* realiza una operación de multiplicación. Dado que ambos operandos son cadenas que representan números, JavaScript intentará convertirlos a números antes de realizar la multiplicación. */

4 + 5 + "px" = '9px'
/* primero se realiza una suma entre los números 4 y 5, lo cual da como resultado 9. Luego, se concatena la cadena "px" al resultado de la suma. */

"$" + 4 + 5 = '$45'
/*se realiza una concatenación de cadenas. Dado que el primer operando es una cadena, JavaScript interpretará las operaciones restantes como concatenación de cadenas. */

"4" - 2 = '2'
/* realiza una operación de resta. Dado que el primer operando es una cadena que representa un número, JavaScript intentará convertirlo a un número antes de realizar la resta.  */

"4px" - 2 = NaN
/*se intenta realizar una operación de resta entre una cadena y un número. Dado que el segundo operando es un número, JavaScript intentará convertir la cadena "4px" a un número antes de realizar la resta. Sin embargo, la conversión no es posible */

7 / 0 = Infinity
/* se intenta realizar una división entre 7 y 0. En JavaScript, la división por 0 resulta en Infinity */

{}[0] = undefinded
/* se intenta acceder a la posicion 0 de un objeto mediante la notación de corchetes. Sin embargo, el objeto vacío {} no tiene ninguna propiedad definida*/

parseInt("09") = 9
/* La función parseInt() convierte una cadena en un número entero. Si la cadena comienza con un número válido, se realizará la conversión. */

5 && 2 = 2
/* El operador lógico && realiza una evaluación lógica y devuelve el último valor evaluado si ambos operandos son verdaderos. Aquí, tanto 5 como 2 se consideran verdaderos en el contexto de la evaluación lógica.*/

2 && 5 = 5
/*Similar al caso anterior, el operador lógico && realiza una evaluación lógica y devuelve el último valor evaluado si ambos operandos son verdaderos. Aquí, tanto 2 como 5 se consideran verdaderos en el contexto de la evaluación lógica.*/

5 || 0 = 5
/*El operador lógico || realiza una evaluación lógica y devuelve el primer valor verdadero que encuentra. Si ninguno de los operandos es verdadero, devuelve el último valor evaluado. Aquí, 5 se considera verdadero en el contexto de la evaluación lógica*/

0 || 5  = 5
/*el operador lógico || realiza una evaluación lógica y devuelve el primer valor verdadero que encuentra. Si ninguno de los operandos es verdadero, devuelve el último valor evaluado. Aquí, 0 se considera falso en el contexto de la evaluación lógica, por lo que se evalúa el siguiente operando 5*/

[3]+[3]-[10] = [23]
//Se concatenan [3]+[3] =[33] y le resta el [10] y total = [23]

3>2>1 = false
/*En JavaScript, las comparaciones se evalúan de izquierda a derecha. En este caso, se evalúa primero 3>2, lo cual devuelve true. Luego, se evalúa true>1, donde true se convierte en 1 en un contexto numérico. Por lo tanto, la expresión se convierte en 1>1, que es falsa. Por lo tanto, el resultado final será false.*/

[] == ![] = true
/* Es true porque ambos valores son parecidos (==). Si fuese igualdad estricta (===) daria false porque uno es un array vacio y el otro es la negacion del array vacio */

```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undefinded - La variable a no esta definida aun.
   console.log(foo()); //2 - Hoisting: porque primero se ejecuta antes de definirla, y luego se esta definiendo.

   var a = 1; 
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); // undefinded (La var snack dentro del entorno lexico de la funcion tiene valor undefined, y al momento de retornarlo RETORNA ese valor undefined porque al pasarle por parametro 'false' no entra al if, pero dentro del entorno lexico si existe snack PERO tiene valor undefined).
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); /* 1ro Aurelio De Rosa : Por que el this. hace referencia a la prop fullname dentro del metodo getFullname test is not a function */

var test = obj.prop.getFullname;

console.log(test()); // 2do undefined / (la funcion getFullname() esta declarada dentro del objeto 'prop' y su propiedad this.fullname esta haciendo referencia al fullname del objeto prop que es Aurelio, pero no hay una propiedad fullname en el contexto global, sino que hay una sola var fullname afuera. Y esa variable en el entorno lexico tiene valor undefined)
```



### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); //1 - 1ro
   setTimeout(function () {
      console.log(2); //2 - 4to
   }, 1000); 
   setTimeout(function () {
      console.log(3); //3 - 3ro se imprime antes porque dura 0seg y el 2 tarda 1seg.
   }, 0); 
   console.log(4);  // 4 - 2do
}

printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
