/**imprimir el promedio de 3 notas
 * Autor: Esteban Palomar Murcia
 * Fecha: Jueves 04 de abril del 2024
 */
//con parametro
function proNota(pnota1, pnota2, pnota3){
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;
    let promedio;

    promedio= (nota1+nota2+nota3)/3;
    return promedio;
}

//con expresión
const proNotaExp = function(pnota1, pnota2, pnota3){
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;
    let promedio;

    promedio= (nota1+nota2+nota3)/3;
    return promedio;
}