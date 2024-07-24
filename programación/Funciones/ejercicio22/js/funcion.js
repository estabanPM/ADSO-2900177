/**imprimir la tabla del 9 hasta el 5  con ciclo FOR y sacar los numero pares e impares
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */

//con parametro
function tabla9(numero) {
    let resultado = ""
    for (let contador = 1; contador <= 5; contador++) {
        let multiplicar = numero * contador;

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
    let resultado = ""
    for (let contador = 1; contador <= 5; contador++) {
        let multiplicar = numero * contador;

        if (multiplicar % 2 === 0) {
            resultado += `${numero + " x " + contador + " = " + multiplicar + " es par."}\n`
        } else {
            resultado += `${numero + " x " + contador + " = " + multiplicar + " es impar."}\n`
        }
    }
    return resultado;
}
