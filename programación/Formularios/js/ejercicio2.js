/**
 * formulario para sumar dos números
 * Autor: Esteban Palomar Murucia
 * Fecha: 1 de julio del 2024
 */

function suma(){
    let numeroUno = parseInt(document.getElementById('txt-numeroUno').value);
    let numeroDos = parseInt(document.getElementById('txt-numeroDos').value);

    if (numeroUno && numeroDos){
        let sumar = numeroUno+numeroDos;
        let rSumar =`La suma es: ${sumar}`;

        document.getElementById('Suma').innerHTML = rSumar;
    }
    else{
        document.getElementById('Suma').innerHTML= 'Ingrese número en ambas casillas';
    }

    return false;
}