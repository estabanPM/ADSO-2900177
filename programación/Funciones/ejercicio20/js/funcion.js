/**imprimir la tabla del 9 hasta el 5 y sacar los pares e impares.
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */

//con parametro
function tabla9(numero) {
    let contador = 0;
    let multiplicar = 0;
    let resultado = "";

    while (contador < 5) {
        contador = contador + 1;
        multiplicar = numero * contador;

        if (multiplicar % 2 === 0) {
            resultado += `${numero + " x " + contador + " = " + multiplicar + " es par."}\n`
        } else {
            resultado += `${numero + " x " + contador + " = " + multiplicar + " es impar."}\n`
        }
    }
    return resultado;
}

//con expresión
const tabla9Exp = function(numero) {
    let contador = 0;
    let multiplicar = 0;
    let resultado = "";

    while (contador < 5) {
        contador = contador + 1;
        multiplicar = numero * contador;

        if (multiplicar % 2 === 0) {
            resultado += `${numero + " x " + contador + " = " + multiplicar + " es par."}\n`;
        } else {
            resultado += `${numero + " x " + contador + " = " + multiplicar + " es impar."}\n`;
        }
    }
    return resultado;
}
