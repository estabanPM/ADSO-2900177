/**imprimir los numeros deo 1 al 5.
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */

//con parametro
function contar(numero) {
    let contador = 0;
    let resultado = ""
    while (contador < numero) {
        contador = contador + 1;
        resultado += `${contador}\n`
    }
    return resultado;
}

//con expresión
const contarExp = function(numero) {
    let contador = 0;
    let resultado = ""

    while (contador < numero) {
        contador = contador + 1;
        resultado += `${contador}\n`
    }
    return resultado;
}
