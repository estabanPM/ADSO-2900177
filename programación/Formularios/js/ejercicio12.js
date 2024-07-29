/**calcular el mayor de dos número validando que no sean iguales.
 * Autor: Esteban Palomar Murcia
 * Fecha:  01 de julio del 2024
 */

function numeroMayor(){
    let numeroUno = parseInt(document.getElementById('txt-numeroUno').value);
    let numeroDos = parseInt(document.getElementById('txt-numeroDos').value);
    let numeroMayor;
    let numMayor;

    if (numeroUno && numeroDos){
        if(numeroUno == numeroDos){
            numeroMayor = undefined;
        }else if(numeroUno > numeroDos){
            numeroMayor = numeroUno;
        }else{
            numeroMayor = numeroDos;
        }

        if (numeroMayor !== undefined) {
            numMayor = `El número mayor es: ${numeroMayor}`;
        }else{
            numMayor = `Los números son iguales`
        }

        document.getElementById('mayor').innerHTML = numMayor;
    }
    else{
        document.getElementById('mayor').innerHTML = 'Ingrese un número en la casillas';
    }

    return false
}