/**calcular el mayor de dos numero y validar si son iguales.
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */

//con parametro
function mayorQue(pnumero1,pnumero2){
    let numero1=pnumero1;
    let numero2=pnumero2;
    let numeroMayor;
    if(numero1==numero2){
        return "Los numeros "+numero1+" y "+numero2+" son iguales"
    }else{
        if(numero1>numero2){
            numeroMayor=numero1;
            return numeroMayor+" es el numero mayor";
        }else{
            numeroMayor=numero2;
            return numeroMayor+" es el numero mayor";
        }
    }
}
//con expresión
const mayorQueExp = function(pnumero1,pnumero2){
    let numero1=pnumero1;
    let numero2=pnumero2;
    let numeroMayor;
    if(numero1==numero2){
        return "Los numeros "+numero1+" y "+numero2+" son iguales"
    }else{
        if(numero1>numero2){
            numeroMayor=numero1;
            return numeroMayor+" es el numero mayor";
        }else{
            numeroMayor=numero2;
            return numeroMayor+" es el numero mayor";
        }
    }
}