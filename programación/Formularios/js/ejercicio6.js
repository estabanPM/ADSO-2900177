/**
 * formulario para sacar el promedio de tres notas
 * Autor: Esteban Palomar Murucia
 * Fecha: 1 de julio del 2024
 */

function promedioNota(){
    let notaUno = parseInt(document.getElementById('txt-notaUno').value);
    let notaDos = parseInt(document.getElementById('txt-notaDos').value);
    let notaTres = parseInt(document.getElementById('txt-notaTres').value);

    if (notaUno && notaDos && notaTres){
        let promedio = (notaUno + notaDos + notaTres)/3;

        let rPromedio = `El promedio de las notas es: ${promedio}`;

        document.getElementById('promedio').innerHTML = rPromedio;
    }
    else{
        document.getElementById('promedio').innerHTML = 'ingrese notas en todas las casillas';
    }
    return false;
}

