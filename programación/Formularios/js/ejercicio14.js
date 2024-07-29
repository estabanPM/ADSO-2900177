/**calcular el area y el area mayor de tres cuadrados.
 * Autor: Esteban Palomar Murcia
 * Fecha:  01 de julio del 2024
 */

function areasCuadrado(){
    let cuadrado1 = parseInt(document.getElementById('txt-ladoUno').value);
    let cuadrado2 = parseInt(document.getElementById('txt-ladoDos').value);
    let cuadrado3 = parseInt(document.getElementById('txt-ladoTres').value);

    let areaUno = cuadrado1*cuadrado1;
    let areaDos = cuadrado2*cuadrado2;
    let areaTres = cuadrado3*cuadrado3;

    let areaMayor;

    if (areaUno && areaDos && areaTres){
        if (areaUno === areaDos && areaDos === areaTres) {
            areaMayor = undefined;
        } else {
            if (areaUno > areaDos && areaUno > areaTres) {
                areaMayor = areaUno;
            } else if (areaDos > areaUno && areaDos > areaTres) {
                areaMayor = areaDos;
            } else {
                areaMayor = areaTres;
            }
        }
        if (areaMayor !== undefined) {
            areaMayor = `El area mayor es: ${areaMayor}`;
        }else{
            areaMayor = `Todos los cuadros tienen un area de ${areaUno}`
        }

        document.getElementById('mayor').innerHTML = `El area del primer cuadrado es ${areaUno}</br>El area del segundo cuadrado es ${areaDos}</br>El area del tercer cuadrado es ${areaTres}</br>`;
        document.getElementById('mayor').innerHTML = areaMayor;
    }
    else{
        document.getElementById('mayor').innerHTML = 'Ingrese un número en la casillas';
    }

    return false
}