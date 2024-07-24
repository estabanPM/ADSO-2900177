/**tabla del 1 al 5 hasta el 5 e imprimir los pares e impares con ciclo FOR
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */
//con parametro
function tablas(tabla) {
    let contador = 1;
    let par = 0;
    let impar = 0;
    let resultado = "";

    while (contador <= tabla) {
        let multiplicar = 1;
        while (multiplicar <= 5) {
            let res = contador * multiplicar;

            if (res % 2 === 0) {
                par++;
                resultado += `${contador} x ${multiplicar} = ${res} Buzz.\n`;
            } else {
                impar++;
                resultado += `${contador} x ${multiplicar} = ${res} Bass.\n`;
            }

            multiplicar++;
        }
        contador++;
    }

    return `${resultado}\nLa cantidad de pares es: ${par}\nLa cantidad de impares es: ${impar}\n`;
}

//con Expresión
const tablasExp = function(tabla) {
    let contador = 1;
    let par = 0;
    let impar = 0;
    let resultado = "";

    while (contador <= tabla) {
        let multiplicar = 1;
        while (multiplicar <= 5) {
            let res = contador * multiplicar;

            if (res % 2 === 0) {
                par++;
                resultado += `${contador} x ${multiplicar} = ${res} Buzz.\n`;
            } else {
                impar++;
                resultado += `${contador} x ${multiplicar} = ${res} Bass.\n`;
            }

            multiplicar++;
        }
        contador++;
    }

    return `${resultado}\nLa cantidad de pares es: ${par}\nLa cantidad de impares es: ${impar}\n`;
}