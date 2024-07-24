/**imprimir el mayor de dos numeros
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */

//con parametro
function mayorQue(pnumero1,pnumero2){
    let numero1=pnumero1;
    let numero2=pnumero2;
    let numeroMayor;
    if(numero1>numero2){
        numeroMayor=numero1;
        return numeroMayor;
    }else{
        numeroMayor=numero2;
        return numeroMayor;
    }
}

//con expresión
const mayorQueExp = function(pnumero1,pnumero2){
    let numero1=pnumero1;
    let numero2=pnumero2;
    let numeroMayor;
    if(numero1>numero2){
        numeroMayor=numero1;
        return numeroMayor;
    }else{
        numeroMayor=numero2;
        return numeroMayor;
    }
}