/**calcular el area de 3 cuadrados e imprimir el area mayor
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */
//con parametro
function areaCua(pladoCua1,pladoCua2,pladoCua3){
    let ladoCuadrado1= pladoCua1;
    let ladoCuadrado2= pladoCua2;
    let ladoCuadrado3= pladoCua3;
    let areaCua1;
    let areaCua2;
    let areaCua3;
    let areaMayor;
    areaCua1= ladoCuadrado1*ladoCuadrado1;
    areaCua2= ladoCuadrado2*ladoCuadrado2;
    areaCua3= ladoCuadrado3*ladoCuadrado3;
    if(areaCua1>areaCua2&areaCua1>areaCua3){
        areaMayor=areaCua1;
        return areaMayor+" es el area mayor";
    }
    else{
        if(areaCua2>areaCua1&areaCua2>areaCua3){
            areaMayor=areaCua2;
            return areaMayor+" es el area mayor";
        }
        else{
            areaMayor=areaCua3;
            return areaMayor+" es el area mayor";
        }
    }
}

//con expresión
const areaCuaExp = function(pladoCua1,pladoCua2,pladoCua3){
    let ladoCuadrado1= pladoCua1;
    let ladoCuadrado2= pladoCua2;
    let ladoCuadrado3= pladoCua3;
    let areaCua1;
    let areaCua2;
    let areaCua3;
    let areaMayor;
    areaCua1= ladoCuadrado1*ladoCuadrado1;
    areaCua2= ladoCuadrado2*ladoCuadrado2;
    areaCua3= ladoCuadrado3*ladoCuadrado3;
    if(areaCua1>areaCua2&areaCua1>areaCua3){
        areaMayor=areaCua1;
        return areaMayor+" es el area mayor";
    }
    else{
        if(areaCua2>areaCua1&areaCua2>areaCua3){
            areaMayor=areaCua2;
            return areaMayor+" es el area mayor";
        }
        else{
            areaMayor=areaCua3;
            return areaMayor+" es el area mayor";
        }
    }
}