'use strict';

// function BinarioADecimal(num) {

//     return parseInt(num, 2); // El 2 corresponde a la base
/* la función parseInt() para realizar la conversión, 
 pasando el número binario y especificando la base 2 como el segundo argumento. */
//  }

function BinarioADecimal(num){

   let suma = 0; //Declaramos la variable;
   let exponente = num.length -1; // Para que empiece por el ultimo numero que seria el 0 (y se lee de derecha a izquierda)

   for (let i = 0; i < num.length; i++) {
      suma+= num[i] *2 **exponente; //La suma toma el resutado de la suma entre multiplicar la base 2 a la posicion d de i y elevamos a la potencia del exponente 
      // suma += num[i] * Math.pow(2, exponente)
      exponente-- //para que la posicion del exponente se corra a la izquierda (ya que el exponente empieza por el ultimo)
   }

   return suma;
}
 console.log(BinarioADecimal(10010))
 
 
 
function DecimalABinario(num) {
   //  return num.toString(2)
    /* El resultado de toString(2) será el equivalente binario del número decimal en forma de una cadena de texto.*/
   
    /* 1- Tomamos el numero y lo dividimos por la base al sistema que lo queremos pasar
       2- Nos quedamos por un lado con ese resultado y por el otro con el resto
       3- Vamor a ir dividiendo hasta que nuestra variable llegue a 0
       4- Tomar todos esos restos de abajo hacia arriba*/

       let resultado = '';

       while(num !== 0){
         resultado = (num % 2) + resultado // para guardar y concatenar los resultados
         num = Math.floor(num / 2) //redondea para abajo
       }
       return resultado
}
 
 console.log(DecimalABinario(10))
 
 

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
