/**
 * imprimir la suma, resta, multiplicación y división
 * autor: Esteban Palomar Murcia
 * Fecha: lunes 01 de marzo del 2024
 */

let numeroUno;
let numeroDos;

//con parametro
function suma(pnumeroUno, pnumeroDos){
    numeroUno=pnumeroUno;
    numeroDos=pnumeroDos;
    let sumar;
    sumar= numeroUno+numeroDos;
    return sumar;

}

function resta(pnumeroUno, pnumeroDos){
    let restar;
    numeroUno = pnumeroUno;
    numeroDos = pnumeroDos;
    restar = numeroUno-numeroDos;
    return restar;
}

function multiplicacion(pnumeroUno, pnumeroDos){
    numeroUno=pnumeroUno;
    numeroDos=pnumeroDos;
    let multiplicar;
    multiplicar= numeroUno*numeroDos;
    return multiplicar;

}

function division(pnumeroUno, pnumeroDos){
    numeroUno=pnumeroUno;
    numeroDos=pnumeroDos;
    let dividir;
    dividir= numeroUno/numeroDos;
    return dividir;

}
function operaciones(poperador,pnumeroUno, pnumeroDos){
    let operador = poperador;
    numeroUno = pnumeroUno;
    numeroDos = pnumeroDos;
    if(operador=="suma"){
        return suma(numeroUno,numeroDos);
    }
    else if(operador=="resta"){
        return resta(numeroUno,numeroDos);
    }
    else if(operador=="multiplicacion"){
        return multiplicacion(numeroUno,numeroDos);
    }
    else if(operador=="division"){
        return division(numeroUno,numeroDos);
    }
    else{
        return "Error!!! no reconoce operador";
    }
}

//con expresión
const sumaExp = function(pnumeroUno, pnumeroDos){
    let sumar;
    numeroUno = pnumeroUno;
    numeroDos = pnumeroDos;
    sumar = numeroUno+numeroDos;
    return sumar;
}

const restaExp = function(pnumeroUno, pnumeroDos){
    let restar;
    numeroUno = pnumeroUno;
    numeroDos = pnumeroDos;
    restar = numeroUno-numeroDos;
    return restar;
}

const multiplicacionExp = function(pnumeroUno, pnumeroDos){
    let multiplicar;
    numeroUno = pnumeroUno;
    numeroDos = pnumeroDos;
    multiplicar = numeroUno*numeroDos;
    return multiplicar;
}

const divisionExp = function(pnumeroUno, pnumeroDos){
    let dividir;
    numeroUno = pnumeroUno;
    numeroDos = pnumeroDos;
    dividir = numeroUno/numeroDos;
    return dividir;
}
const operacionesExp = function(poperador,pnumeroUno, pnumeroDos){
    let operador = poperador;
    numeroUno = pnumeroUno;
    numeroDos = pnumeroDos;
    if(operador=="suma"){
        return sumaExp(numeroUno,numeroDos);
    }
    else if(operador=="resta"){
        return restaExp(numeroUno,numeroDos);
    }
    else if(operador=="multiplicacion"){
        return multiplicacionExp(numeroUno,numeroDos);
    }
    else if(operador=="division"){
        return divisionExp(numeroUno,numeroDos);
    }
    else{
        return "Error!!! no reconoce operador";
    }
}

