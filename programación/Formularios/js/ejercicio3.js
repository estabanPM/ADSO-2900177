/**
 * formulario para restar dos números
 * Autor: Esteban Palomar Murucia
 * Fecha: 1 de julio del 2024
 */

function resta(){
    let numeroUno = parseInt(document.getElementById('txt-numeroUno').value);
    let numeroDos = parseInt(document.getElementById('txt-numeroDos').value);

    if (numeroDos && numeroDos){
        let restar = numeroUno - numeroDos;
        let rRestar = `la resta es: ${restar}`;

        document.getElementById('Resta').innerHTML = rRestar;
    }
    else{
        document.getElementById('Resta').innerHTML = 'Ingrese numeros en ambas casillas';
    }

    return false;
}