/**realizar un programa que calcule el pago de un empleado teniendo en cuanta unos factores
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
function transporte(pdiasT,pvalorD,psalarioM){
    let transporteT;
    let salarioMinimo = psalarioM;
    let sueldoCal = sueldo(pdiasT,pvalorD)
    if(sueldoCal<=salarioMinimo){
        transporteT= 114000;
        return transporteT;
    }else{
        transporteT= 0;
        return transporteT;
    }
}
function retencion(pdiasT,pvalorD,psalarioM){
    let retencionT;
    let salarioMinimo = psalarioM;
    let sueldoCal = sueldo(pdiasT,pvalorD);
    if (sueldoCal >= salarioMinimo * 4) {
        retencionT = sueldoCal * 0.04;
    } else {
        retencionT = 0;
    }
    return retencionT;
}

function sueldoTotal(pdiasT,pvalorD,psalarioM){
    let sueldoInicial = sueldo(pdiasT,pvalorD);
    let subsidioTrasn = transporte(pdiasT,pvalorD,psalarioM);
    let pensionTotal = pension(pdiasT,pvalorD);
    let arlTotal = arl(pdiasT,pvalorD);
    let saludTotal = salud(pdiasT,pvalorD);
    let retencionToltal = retencion(pdiasT,pvalorD,psalarioM);
    let deducibles = pensionTotal+arlTotal+saludTotal+retencionToltal;
    let sueldoFinal = (sueldoInicial+subsidioTrasn)-deducibles;

    return sueldoFinal;
}

//con expresión
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
const transporteExp = function(pdiasT,pvalorD,psalarioM){
    let transporteT;
    let salarioMinimo = psalarioM;
    let sueldoCal = sueldo(pdiasT,pvalorD)
    if(sueldoCal<=salarioMinimo){
        transporteT= 114000;
        return transporteT;
    }else{
        transporteT= 0;
        return transporteT;
    }
}
const retencionExp = function(pdiasT,pvalorD,psalarioM){
    let retencionT;
    let salarioMinimo = psalarioM;
    let sueldoCal = sueldo(pdiasT,pvalorD);
    if (sueldoCal >= salarioMinimo * 4) {
        retencionT = sueldoCal * 0.04;
    } else {
        retencionT = 0;
    }
    return retencionT;
}

const sueldoTotalExp = function(pdiasT,pvalorD,psalarioM){
    let sueldoInicial = sueldo(pdiasT,pvalorD);
    let subsidioTrasn = transporte(pdiasT,pvalorD,psalarioM);
    let pensionTotal = pension(pdiasT,pvalorD);
    let arlTotal = arl(pdiasT,pvalorD);
    let saludTotal = salud(pdiasT,pvalorD);
    let retencionToltal = retencion(pdiasT,pvalorD,psalarioM);
    let deducibles = pensionTotal+arlTotal+saludTotal+retencionToltal;
    let sueldoFinal = (sueldoInicial+subsidioTrasn)-deducibles;

    return sueldoFinal;
}