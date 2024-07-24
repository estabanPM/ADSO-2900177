/**calcular la edad de una persona e imprimir si es mayor o menor de edad.
 * Autor: Esteban Palomar Murcia
 * Fecha: Lunes 08 de abril del 2024
 */

//con parametro
function calcularEdad(pnacimiento){
    let Anacimiento=pnacimiento;
    let edad;
    edad= 2024-Anacimiento;
    if(edad>17){
        return "Mayor de edad con "+edad;
    }else{
        return "Menor de edad con "+edad;
    }
}

//con expresión
const calcularEdadExp = function(pnacimiento){
    let Anacimiento=pnacimiento;
    let edad;
    edad= 2024-Anacimiento;
    if(edad>17){
        return "Mayor de edad con "+edad;
    }else{
        return "Menor de edad con "+edad;
    }
}