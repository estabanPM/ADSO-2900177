/**
 * formulario para calcular la edad de tres personas y mostrar si es mayor de edad.
 * Autor: Esteban Palomar Murucia
 * Fecha: 1 de julio del 2024
 */

function calcularEdad(pFechaNacimiento){
    let fechaNacimiento = pFechaNacimiento
    let fechaActual = new Date
    let añoActual = parseInt(fechaActual.getFullYear());
    let mesActual = parseInt(fechaActual.getMonth()+1);
    let diaActual = parseInt(fechaActual.getDate());

    let añoNacimiento = parseInt(String(fechaNacimiento).substring(0,4));
    let mesNacimiento = parseInt(String(fechaNacimiento).substring(5,7));
    let diaNacimiento = parseInt(String(fechaNacimiento).substring(8,10));
    
    let edad = añoActual - añoNacimiento;
    if(mesActual < mesNacimiento){
        edad--;
    }else if(mesActual === mesNacimiento){
        if(diaActual < diaNacimiento){
            edad--;
        }
    }

    return edad;
}

function validacion(pfechaNacimiento) {
    let edad = calcularEdad(pfechaNacimiento);
    let mensaje 
    if(edad > 17){
        mensaje = "Es Mayor de edad"
    }else{
        mensaje = "Es Menor de edad";
    }
    return { 
        texto: mensaje, 
        edad: edad };
}




function mayorEdad() {
    let primeraFechaNacimiento = document.getElementById("txt-fechaNacimientoUno").value;
    let segundaFechaNacimiento = document.getElementById("txt-fechaNacimientoDos").value;
    let terceraFechaNacimiento = document.getElementById("txt-fechaNacimientoTres").value;
    if(primeraFechaNacimiento == "" || segundaFechaNacimiento == "" || terceraFechaNacimiento == ""){
        document.getElementById('mayor').innerHTML = 'Ingrese un número en la casillas';
    }else{
        let edadUno = validacion(primeraFechaNacimiento)
        let mensajeUno = validacion(primeraFechaNacimiento)

        let edadDos = validacion(segundaFechaNacimiento)
        let mensajeDos = validacion(segundaFechaNacimiento)

        let edadTres = validacion(terceraFechaNacimiento)
        let mensajeTres = validacion(terceraFechaNacimiento)

        document.getElementById("edadCalculada").innerHTML = `La edad de la Primera Persona es: 
        ${edadUno.edad} años. </br> ${mensajeUno.texto}</br></br>La edad de la Segunda Persona es: 
        ${edadDos.edad} años. </br> ${mensajeDos.texto}</br></br>La edad de la Tercera Persona es: 
        ${edadTres.edad} años. </br> ${mensajeTres.texto}</br>`;

        // document.getElementById("edadCalculada").innerHTML = `<strong>La edad de la Segunda Persona es: 
        // ${edadDos.edad} años. </br> ${mensajeDos.texto}</br></strong>`;
        
        // document.getElementById("edadCalculada").innerHTML = `<strong>La edad de la Tercera Persona es: 
        // ${edadTres.edad} años. </br> ${mensajeTres.texto}</br></strong>`;
        
        

    }

    return false;
}