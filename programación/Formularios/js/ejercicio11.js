/**
 * formulario para calcular la edad de una persona.
 * Autor: Esteban Palomar Murucia
 * Fecha: 1 de julio del 2024
 */

function obtenerEdad(fechaNacimiento) {
    const fechaNac = new Date(fechaNacimiento);
    const fechaHoy = new Date();
    const añoActual = fechaHoy.getFullYear();
    const mesActual = fechaHoy.getMonth() + 1;
    const diaActual = fechaHoy.getDate();

    const añoNac = fechaNac.getFullYear();
    const mesNac = fechaNac.getMonth() + 1;
    const diaNac = fechaNac.getDate();

    let edad = añoActual - añoNac;

    if (mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)) {
        edad--;
    }

    return edad;
}

function mayorEdad() {
    const fechaNacimiento = document.getElementById("txt-fechaNacimiento").value;

    if (!fechaNacimiento) {
        document.getElementById('edadCalculada').innerHTML = 'Ingrese los datos completos';
    } else {
        const edad = obtenerEdad(fechaNacimiento);
        if (edad >= 18) {
            let edadPersona=`Tu edad es ${edad} años, ya eres mayor de edad.`
            document.getElementById("edadCalculada").innerHTML = edadPersona;
        } else {
            let edadPersona = `Tu edad es ${edad} años, todavía eres menor de edad`
            document.getElementById("edadCalculada").innerHTML = edadPersona;
        }
    }

    return false;
}