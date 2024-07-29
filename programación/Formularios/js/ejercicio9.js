/**calcular el sueldo de una persona
 * Autor: Esteban Palomar Murcia
 * Fecha:  01 de julio del 2024
 */

function calcularSueldo(pValorD, pDiasT) {
    let diasT = pDiasT;
    let valorD = pValorD;
    let sueldo;
    sueldo = valorD * diasT;
    return sueldo;
}

function calcularPension(pValorD, pDiasT) {
    let valorPension = calcularSueldo(pValorD, pDiasT) * 0.16;
    return valorPension;
}

function calcularSalud(pValorD, pDiasT) {
    let valorSalud = calcularSueldo(pValorD, pDiasT) * 0.12;
    return valorSalud;
}

function calcularARL(pValorD, pDiasT) {
    let arl = calcularSueldo(pValorD, pDiasT) * 0.016;
    return arl;
}

function sueldoTotal(){
    let valorDia = parseFloat(document.getElementById("txt-valorDia").value);
    let diasTra = parseInt(document.getElementById("txt-diasTrabajados").value);

    if(valorDia && diasTra){
        let sueldoInicial = calcularSueldo(valorDia, diasTra); 
        let pension = calcularPension(valorDia, diasTra);
        let salud = calcularSalud(valorDia, diasTra);
        let arl = calcularARL(valorDia, diasTra);
        let deducibles = pension + salud + arl;
        let sueldoFinal = sueldoInicial - deducibles;

        let rSueldoFinal = `El sueldo inicial del empleado es: ${sueldoInicial}</br></br>El total de los deducibles del empleado es: ${deducibles}</br></br>El sueldo final del empleado es: ${sueldoFinal}</br>`
        document.getElementById("primerSueldo").innerHTML = rSueldoFinal;
    }else{
        document.getElementById('triangulo').innerHTML = 'Ingrese los datos en las casillas';
    }
    return false;
}
