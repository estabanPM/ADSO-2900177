/**calcular el facrorial de 5.
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */

//con parametro
function factorial(numero) {
    let factorial = 1;
    let contador = 0;

    while (contador < numero) {
        contador = contador + 1;
        factorial = factorial * contador;
    }

    return factorial;
}

//con expresión
const factorialExp = function(numero) {
    let factorial = 1;
    let contador = 0;

    while (contador < numero) {
        contador = contador + 1;
        factorial = factorial * contador;
    }

    return factorial;
}