/**funcion para hallar el porcentaje de 3 notas y mostrar el pormedio
 * Autor: Esteban Palomar Murcia
 * Fecha: Jueves 04 de abril del 2024
 */

//con parametro
function porNota(pnota, pporce){
    let nota = pnota;
    let porce = pporce;
    let rnota;

    rnota= nota*porce;
    return rnota;
}

//con expresión
const porNotaExp = function(pnota, pporce){
    let nota = pnota;
    let porce = pporce;
    let rnota;

    rnota= nota*porce;
    return rnota;
}