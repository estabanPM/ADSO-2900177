/**realizar un programa que calcule la edad de 3 personas 
e imprimir si cada persona es mayor o menor de edad, tambien
calcular e imprimir el promedio de las edades y mostrar si es de mayores o menores de edad.
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */

//con parametro
let edadUno;
let edadDos;
let edadTres;
function calcularEdad1(pnacimiento){
    let Anacimiento=pnacimiento;
    edadUno= 2024-Anacimiento;
    if(edadUno>17){
        return "La primera persona Es Mayor de edad con "+edadUno;
    }else{
        return "La primera persona Es Menor de edad con "+edadUno;
    }
}
function calcularEdad2(pnacimiento){
    let Anacimiento=pnacimiento;
    edadDos= 2024-Anacimiento;
    if(edadDos>17){
        return "La segunda persona Es Mayor de edad con "+edadDos;
    }else{
        return "La segunda persona Es Menor de edad con "+edadDos;
    }
}
function calcularEdad3(pnacimiento){
    let Anacimiento=pnacimiento;
    edadTres= 2024-Anacimiento;
    if(edadTres>17){
        return "La tercera persona Es Mayor de edad con "+edadTres;
    }else{
        return "La tercera persona Es Menor de edad con "+edadTres;
    }
}
function promedioEdad(){
    let promedio = (edadUno+edadDos+edadTres)/3;
    if(promedio>17){
        return "El promedio de las edades cumplen la mayoria de edad con: "+promedio+" años";
    }else{
        return "El promedio de las edades no cumplen con la mayoria de edad con: "+promedio+" años";
    }
}
//con expresión
const calcularEdad1Exp = function(pnacimiento){
    let Anacimiento=pnacimiento;
    edadUno= 2024-Anacimiento;
    if(edadUno>17){
        return "La primera persona Es Mayor de edad con "+edadUno;
    }else{
        return "La primera persona Es Menor de edad con "+edadUno;
    }
}
const calcularEdad2Exp = function(pnacimiento){
    let Anacimiento=pnacimiento;
    edadDos= 2024-Anacimiento;
    if(edadDos>17){
        return "La segunda persona Es Mayor de edad con "+edadDos;
    }else{
        return "La segunda persona Es Menor de edad con "+edadDos;
    }
}
const calcularEdad3Exp = function(pnacimiento){
    let Anacimiento=pnacimiento;
    edadTres= 2024-Anacimiento;
    if(edadTres>17){
        return "La tercera persona Es Mayor de edad con "+edadTres;
    }else{
        return "La tercera persona Es Menor de edad con "+edadTres;
    }
}
const promedioEdadExp = function(){
    let promedio = (edadUno+edadDos+edadTres)/3;
    if(promedio>17){
        return "El promedio de las edades cumplen la mayoria de edad con: "+promedio+" años";
    }else{
        return "El promedio de las edades no cumplen con la mayoria de edad con: "+promedio+" años";
    }
}