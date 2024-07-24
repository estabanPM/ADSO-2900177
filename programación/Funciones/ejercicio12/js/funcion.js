/*el mayor de 3 numeros.
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */

//con parametro
function mayorQue(pnumero1,pnumero2,pnumero3){
    let numero1=pnumero1;
    let numero2=pnumero2;
    let numero3=pnumero3;
    let numeroMayor;
    if(numero1>numero2&numero1>numero3){
        numeroMayor=numero1;
        return numeroMayor+" es el numero mayor";
    }
    else{
        if(numero2>numero1&numero2>numero3){
            numeroMayor=numero2;
            return numeroMayor+" es el numero mayor";
        }
        else{
            numeroMayor=numero3;
            return numeroMayor+" es el numero mayor";
        }
    }
}
//con expresión
const mayorQueExp = function(pnumero1,pnumero2,pnumero3){
    let numero1=pnumero1;
    let numero2=pnumero2;
    let numero3=pnumero3;
    let numeroMayor;
    if(numero1>numero2&numero1>numero3){
        numeroMayor=numero1;
        return numeroMayor+" es el numero mayor";
    }
    else{
        if(numero2>numero1&numero2>numero3){
            numeroMayor=numero2;
            return numeroMayor+" es el numero mayor";
        }
        else{
            numeroMayor=numero3;
            return numeroMayor+" es el numero mayor";
        }
    }
}