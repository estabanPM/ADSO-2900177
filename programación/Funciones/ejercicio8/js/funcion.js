/**Función Sueldo - Calcular el sueldo de un trabajador con deducciones
 *  de pensión, salud y ARL. (pensión = 0.16, salud = 0.12, ARL = 0.052)
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */

//con parametro
function sueldo(pdiasT,pvalorD){
    let diasT = pdiasT;
    let valorD = pvalorD;
    let sueldo;
    sueldo = valorD*diasT;
    return sueldo;
}
function salud(pdiasT,pvalorD){
    let salud;
    salud= sueldo(pdiasT,pvalorD)*0.12;
    return salud
}
function pension(pdiasT,pvalorD){
    let pension;
    pension = sueldo(pdiasT,pvalorD)*0.16
    return pension
}
function arl(pdiasT,pvalorD){
    let arl;
    arl = sueldo(pdiasT,pvalorD)*0.052
    return arl
}

function sueldoTotal(pdiasT,pvalorD){
    let sueldoInicial = sueldo(pdiasT,pvalorD);
    let pensionTotal = pension(pdiasT,pvalorD);
    let arlTotal = arl(pdiasT,pvalorD);
    let saludTotal = salud(pdiasT,pvalorD);
    let deducibles = pensionTotal+arlTotal+saludTotal;
    let sueldoFinal = sueldoInicial-deducibles;

    return sueldoFinal;
}

//con Expresión
const sueldoExp = function(pdiasT,pvalorD){
    let diasT = pdiasT;
    let valorD = pvalorD;
    let sueldo;
    sueldo = valorD*diasT;
    return sueldo;
}
const saludExp = function(pdiasT,pvalorD){
    let salud;
    salud= sueldo(pdiasT,pvalorD)*0.12;
    return salud
}
const pensionExp = function(pdiasT,pvalorD){
    let pension;
    pension = sueldo(pdiasT,pvalorD)*0.16
    return pension
}
const arlExp = function(pdiasT,pvalorD){
    let arl;
    arl = sueldo(pdiasT,pvalorD)*0.052
    return arl
}

const sueldoTotalExp = function(pdiasT,pvalorD){
    let sueldoInicial = sueldo(pdiasT,pvalorD);
    let pensionTotal = pension(pdiasT,pvalorD);
    let arlTotal = arl(pdiasT,pvalorD);
    let saludTotal = salud(pdiasT,pvalorD);
    let deducibles = pensionTotal+arlTotal+saludTotal;
    let sueldoFinal = sueldoInicial-deducibles;

    return sueldoFinal;
}