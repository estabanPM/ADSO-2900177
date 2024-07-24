/**imprimir los numeros deo 1 al 5 con ciclo FOR.
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */

// Función con parámetro
function contar(numero) {
    let resultado = ""
    for (let contador = 1; contador <= numero; contador++) {
        resultado += `${contador}\n`
    }
    return resultado;
}

// Función con expresión
const contarExp = function(numero) {
    let resultado = ""
    for (let contador = 1; contador <= numero; contador++) {
        resultado += `${contador}\n`
    }
    return resultado;
};

