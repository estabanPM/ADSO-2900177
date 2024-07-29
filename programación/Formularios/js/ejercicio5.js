/**
 * formulario para sacar el porcentaje de un números
 * Autor: Esteban Palomar Murucia
 * Fecha: 1 de julio del 2024
 */

function porcentaje(){
    let numeroUno = parseInt(document.getElementById('txt-numeroUno').value);

    if (numeroUno){
        let porce = numeroUno/100;
        let rPorce = `El porcentaje del número es: ${porce}%`;

        document.getElementById('Porcentaje').innerHTML = rPorce;
    }
    else{
        document.getElementById('Porcentaje').innerHTML = 'Ingrese un número en la casillas';
    }
    return false;
}
