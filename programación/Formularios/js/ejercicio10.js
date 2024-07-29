/**calcular el mayor de dos numeros.
 * Autor: Esteban Palomar Murcia
 * Fecha:  01 de julio del 2024
 */

function numeroMayor(){
    let numeroUno = parseInt(document.getElementById('txt-numeroUno').value);
    let numeroDos = parseInt(document.getElementById('txt-numeroDos').value);
    let numeroMayor

    if (numeroUno && numeroDos){
        if(numeroUno > numeroDos){
            numeroMayor = numeroUno;
        }else{
            numeroMayor = numeroDos;
        }

        let numMayor = `El número mayor es: ${numeroMayor}`;

        document.getElementById('mayor').innerHTML = numMayor;
    }
    else{
        document.getElementById('mayor').innerHTML = 'Ingrese un número en la casillas';
    }

    return false
}