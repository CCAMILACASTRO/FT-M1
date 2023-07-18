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
   console.log(x);
   console.log(a);
   var f = function (a, b, c) {
      b = a;
      console.log(b);
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(8, 9, 10);      
console.log(b);
console.log(x);
```
10 -
8  -
8 -
10 / 9 (porque b esta dentro de otro bloque definida)
undefinded / 10 (valor en la var del contexto global)
1 - (valor en la var del contexto global)

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```
undefinded -
baz no esta definida

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);
```
Franco -

```javascript
var instructor = 'Tony';
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor);
```
Tony
/Franco/ (este corresponde al bloque del if)
Tony

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);
```
Tony
Reverse Flash 
---------------
The Flash (corresponde al if)
Reverse Flash ((corresponde al if))
The Flash (corresponde al if porque se modifico su valor)
Franco (porque esta declarada con let y la hace una variable en bloque)

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
/* se intenta acceder al elemento de un objeto mediante la notación de corchetes. Sin embargo, el objeto vacío {} no tiene ninguna propiedad definida*/

parseInt("09") = 09
/* La función parseInt() convierte una cadena en un número entero. Si la cadena comienza con un número válido, se realizará la conversión. */

5 && 2 = 2
/* El operador lógico && realiza una evaluación lógica y devuelve el último valor evaluado si ambos operandos son verdaderos. Aquí, tanto 5 como 2 se consideran verdaderos en el contexto de la evaluación lógica.*/

2 && 5 = 5
/*Similar al caso anterior, el operador lógico && realiza una evaluación lógica y devuelve el último valor evaluado si ambos operandos son verdaderos. Aquí, tanto 2 como 5 se consideran verdaderos en el contexto de la evaluación lógica.*/

5 || 0 = 5
/*El operador lógico || realiza una evaluación lógica y devuelve el primer valor verdadero que encuentra. Si ninguno de los operandos es verdadero, devuelve el último valor evaluado. Aquí, 5 se considera verdadero en el contexto de la evaluación lógica*/

0 || 5  = 5
/*el operador lógico || realiza una evaluación lógica y devuelve el primer valor verdadero que encuentra. Si ninguno de los operandos es verdadero, devuelve el último valor evaluado. Aquí, 0 se considera falso en el contexto de la evaluación lógica, por lo que se evalúa el siguiente operando 5*/

[3]+[3]-[10] = NaN
/*Aquí, se realiza una suma entre dos arrays de un solo elemento cada uno. Cuando se suman dos arrays en JavaScript, se realiza una concatenación de arrays. Entonces, [3]+[3] dará como resultado [3, 3]. Luego, se resta el array [10]. Sin embargo, JavaScript realizará la conversión de los arrays a cadenas antes de la resta. La resta entre cadenas intenta convertir las cadenas en números. Dado que la cadena "[3, 3]" no puede ser convertida en un número, el resultado será NaN*/

3>2>1 = false
/*En JavaScript, las comparaciones se evalúan de izquierda a derecha. En este caso, se evalúa primero 3>2, lo cual devuelve true. Luego, se evalúa true>1, donde true se convierte en 1 en un contexto numérico. Por lo tanto, la expresión se convierte en 1>1, que es falsa. Por lo tanto, el resultado final será false.*/

[] == ![] = false
/* Aquí, se realiza una comparación de igualdad entre un array vacío [] y la negación de un array vacío ![]. La negación ! convierte el array vacío en su valor booleano contrario, que es true. Entonces, la expresión se convierte en [] == true. En JavaScript, cuando se compara un array con un valor no booleano, el array se convierte en una cadena concatenando todos sus elementos. En este caso, el array vacío se convierte en una cadena vacía "". Luego, se compara "" == true. La comparación entre una cadena y un valor booleano se realiza convirtiendo la cadena en un número. En este caso, la cadena vacía "" se convierte en 0. Entonces, la expresión se convierte en 0 == 1, que es falsa. Por lo tanto, el resultado final será false */

```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```
undefinded - La variable a no esta definida aun
2 - valor de la funcion foo

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

getFood(false);
```
nada - Porque dice que food es falsa por ende no se retorna ningun valor de snack


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

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```
Aurelio De Rosa : Por que el this. hace referencia a la prop fullname dentro del metodo getFullname
test is not a function
undefinded / (porque no esta invocando el metodo getFullname para que retorne su valor)

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
```
1 -
4 -
3 -
2 -


</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
