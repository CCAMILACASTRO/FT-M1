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
6 / "3" = '6/3'
"2" * "3" = '2*3'
4 + 5 + "px" = 
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0 = error
{}[0]
parseInt("09") = 09
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10] 
3>2>1
[] == ![]
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
