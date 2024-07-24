/**
 * Nomina de personas usando arreglos nombre:valor
 * autor: Esteban Palomar Murcia
 * 15 de mayo del 2024
 */

const salarioMinimo = 1300000;
const trans=114000;
let nomina=[];
let sueldo=[];
let calcularSueldo;
let iteracion;

nomina = [
    {id:1, nombres:'Esteban', apellidos:'Palomar', cedula:1082803037, edad:18, estrato:2, valorDia:200000, diasTrabajados:30},
    {id:2, nombres:'Andres', apellidos:'Moreno', cedula:7511689, edad:44, estrato:3, valorDia:120000, diasTrabajados:30},
    {id:3, nombres:'Felipe', apellidos:'Tovar', cedula:10373487, edad:17, estrato:3, valorDia:70000, diasTrabajados:30},
    {id:4, nombres:'Juan', apellidos:'Artunduaga', cedula:10311174, edad:19, estrato:3, valorDia:70000, diasTrabajados:30},
    {id:5, nombres:'Daniel', apellidos:'Bata', cedula:1178995, edad:17, estrato:1, valorDia:100000, diasTrabajados:25},
    {id:6, nombres:'Isabella', apellidos:'Carrera', cedula:1082505099, edad:16, estrato:3, valorDia:60000, diasTrabajados:30},
    {id:7, nombres:'Santiago', apellidos:'Chaparro', cedula:55156340, edad:20, estrato:4, valorDia:110000, diasTrabajados:20},
    {id:8, nombres:'Jesus', apellidos:'Carvajal', cedula:17799905, edad:18, estrato:2, valorDia:150000, diasTrabajados:30},
    {id:9, nombres:'Anibal', apellidos:'Quimbaya', cedula:1996980, edad:19, estrato:1, valorDia:75000, diasTrabajados:30},
    {id:10, nombres:'Camilo', apellidos:'Charri', cedula:88992207, edad:20, estrato:3, valorDia:80000, diasTrabajados:30},

];
console.log(nomina)
// sueldo = nomina[0].valorDia*nomina[0].diasTrabajados;
// console.log(sueldo)

//calcular sueldo
for(iteracion=0;iteracion<nomina.length;iteracion++){
    calcularSueldo = nomina[iteracion].valorDia*nomina[iteracion].diasTrabajados;
    sueldo.push({nombres:nomina[iteracion].nombres, apellidos:nomina[iteracion].apellidos, sueldoPersona:calcularSueldo})
}
console.log(sueldo);

//funcion para validar subsidio de transporte
function transporte(sueldo){
    for(iteracion=0;iteracion<sueldo.length;iteracion++){
        let subTrans = sueldo[iteracion].sueldoPersona;
        // validacion de sueldo
        if(subTrans<salarioMinimo*2){
            sueldo[iteracion].transportePersona=trans;
        }else{
            sueldo[iteracion].transportePersona=0;
        }
    }
    return sueldo;
}
const sueldoTransporte = transporte(sueldo);

// para calcular pensión
function pension(sueldo){
    for(iteracion=0;iteracion<sueldo.length;iteracion++){
        let calcularPension = sueldo[iteracion].sueldoPersona*0.16;
        sueldo[iteracion].pensión=calcularPension;
    }
    return sueldo
}
const pensionPersona= pension(sueldo);

// para calcular ARL
function arl(sueldo){
    for(iteracion=0;iteracion<sueldo.length;iteracion++){
        let calcularArl = sueldo[iteracion].sueldoPersona*0.052;
        sueldo[iteracion].arl=calcularArl;
    }
    return sueldo
}
const arlPersona= arl(sueldo);

// para calcular abonos
function bonos(sueldo){
    for(iteracion=0;iteracion<sueldo.length;iteracion++){
        let sueldoPersona = sueldo[iteracion].sueldoPersona
        let estratoPersona = nomina[iteracion].estrato

        if(sueldoPersona === salarioMinimo && (estratoPersona === 1 || estratoPersona ===2)){
            let bonoPersona = sueldo[iteracion].sueldoPersona+1000000;
            sueldo[iteracion].bonoPersona=bonoPersona;
        }else{
            sueldo[iteracion].bonoPersona=0;
        }
    }
    return sueldo;
}
const calcularbono = bonos(sueldo);

// calcular salud de persona
function salud(sueldo){
    for(iteracion=0;iteracion<sueldo.length;iteracion++){
        let calcularSalud = sueldo[iteracion].sueldoPersona*0.12;
        sueldo[iteracion].Salud=calcularSalud;
    }
    return sueldo
}
const calcularSalud = salud(sueldo);

// para calcular la retencion dependiendo su sueldo
function retencion(sueldo){
    for(iteracion=0;iteracion<sueldo.length;iteracion++){
        let valorSueldo = sueldo[iteracion].sueldoPersona;
        let retencion
        let estratoPersona = sueldo[iteracion].estratoPersona
        if(valorSueldo >= salarioMinimo * 4 && valorSueldo < salarioMinimo * 6){
            retencion = valorSueldo * 0.03
            sueldo[iteracion].retencion=retencion;
            
        }else if (valorSueldo >= salarioMinimo *6 && valorSueldo < salarioMinimo * 8){
            retencion = valorSueldo * 0.04
            sueldo[iteracion].retencion=retencion;
            
        }else if(valorSueldo >= salarioMinimo * 8 && estratoPersona == 6){
            retencion = valorSueldo * 0.05
            sueldo[iteracion].retencion=retencion;
        }else{
            sueldo[iteracion].retencion = 0;
        }
    }
    return sueldo
}
const calcularRetencion = retencion(sueldo);

// calcular suelto total de las personas
function sueldoTotal(sueldo){
    for(iteracion=0;iteracion<sueldo.length;iteracion++){
        let sueldoInicial = sueldo[iteracion].sueldoPersona;
        let subsidioTrasn = sueldo[iteracion].transportePersona;
        let pensionTotal = sueldo[iteracion].pensión;
        let bonosTotal = sueldo[iteracion].bonoPersona;
        let arlTotal = sueldo[iteracion].arl;
        let saludTotal = sueldo[iteracion].Salud;
        let retencionToltal = sueldo[iteracion].retencion;
        let deducibles = pensionTotal+arlTotal+saludTotal+retencionToltal;
        let sueldoFinal = (sueldoInicial+subsidioTrasn+bonosTotal)-deducibles;
        sueldo[iteracion].SueldoPersonaTotal=sueldoFinal;
    }
    return sueldo;
}
const sueldoFinalPersona = sueldoTotal(sueldo);

// Iteración de la Nomina
