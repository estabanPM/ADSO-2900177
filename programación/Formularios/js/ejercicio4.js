/**
 * formulario para sumar, restar, dividir y multiplicaar dos números
 * Autor: Esteban Palomar Murucia
 * Fecha: 1 de julio del 2024
 */
function operaciones(){
    let numeroUno = parseInt(document.getElementById('txt-numeroUno').value);
    let numeroDos = parseInt(document.getElementById('txt-numeroDos').value);
    
    if(numeroUno && numeroDos){
        let sumar;
        let restar;
        let dividir;
        let multiplicar;

        sumar= numeroUno+numeroDos;
        restar= numeroUno-numeroDos;
        dividir= numeroUno/numeroDos;
        multiplicar= numeroUno*numeroDos;

        let rSuma= `Suma: ${sumar} <br>`;
        let rResta= `Resta: ${restar} <br>`;
        let rDividision= `Division: ${dividir} <br>`;
        let rMultiplicacion= `Multiplicacion: ${multiplicar} <br>`;

        document.getElementById('operaciones').innerHTML = rSuma + rResta + rDividision + rMultiplicacion;
    }
    else{
        document.getElementById('operaciones').innerHTML = 'Ingrese numeros en ambas casillas';
    }

    return false;
}