/**calcular el porcentaje de 3 notas e imprimir si es una buna o mala nota
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */

//con parametro
function porcentajeNotas(pnota1,pnota2,pnota3){
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;
    let sumaPorcentaje;
    porcentaje1= nota1*0.21;
    porcentaje2= nota2*0.35;
    porcentaje3= nota3*0.45;
    sumaPorcentaje = porcentaje1+porcentaje2+porcentaje3;
    if(sumaPorcentaje>4.5){
        return sumaPorcentaje+" es una exelente nota.";
    }else{
        if(sumaPorcentaje<=4.5 & sumaPorcentaje>=3.5){
            return sumaPorcentaje+" es una buena nota.";
        }else{
            if(sumaPorcentaje<=3.5 & sumaPorcentaje>=3.0){
                return sumaPorcentaje+" es una mediocre nota.";;
            }else{
                return sumaPorcentaje+" es una mala nota.";
            }
        }
    }
}

//con expresión
const porcentajeNotasExp = function(pnota1,pnota2,pnota3){
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;
    let sumaPor;
    porcentaje1= nota1*0.21;
    porcentaje2= nota2*0.35;
    porcentaje3= nota3*0.45;
    sumaPorcentaje = porcentaje1+porcentaje2+porcentaje3;
    if(sumaPorcentaje>4.5){
        return sumaPorcentaje+" es una exelente nota.";
    }else{
        if(sumaPorcentaje<=4.5 & sumaPorcentaje>=3.5){
            return sumaPorcentaje+" es una buena nota.";
        }else{
            if(sumaPorcentaje<=3.5 & sumaPorcentaje>=3.0){
                return sumaPorcentaje+" es una mediocre nota.";;
            }else{
                return sumaPorcentaje+" es una mala nota.";
            }
        }
    }
}