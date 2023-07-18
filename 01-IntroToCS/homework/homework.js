'use strict';

function BinarioADecimal(num) {

    return parseInt(num, 2); // El 2 corresponde a la base
 }
 
 
 console.log(BinarioADecimal(10010))
 
 /* la función parseInt() para realizar la conversión, 
 pasando el número binario y especificando la base 2 como el segundo argumento. */
 
function DecimalABinario(num) {
    return num.toString(2)
 }
 
 console.log(DecimalABinario(10))
 
 /* El resultado de toString(2) será el equivalente binario del número decimal en forma de una cadena de texto.*/

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
