/**imprimir la tabla del 5 hasta el 5.
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */

//con parametro
function tabla5(numero) {
    let contador = 0;
    let multiplicar = 0;
    let resultado = ""

    while (contador < 5) {
        contador = contador + 1;
        multiplicar = numero * contador;
            resultado += `${numero + " x " + contador + " = " + multiplicar}\n`;
    }
    return resultado;
}

//con expresión
const tabla5Exp = function(numero) {
    let contador = 0;
    let multiplicar = 0;
    let resultado = ""

    while (contador < 5) {
        contador = contador + 1;
        multiplicar = numero * contador;
            resultado += `${numero + " x " + contador + " = " + multiplicar}\n`;
    }
    return resultado;
}