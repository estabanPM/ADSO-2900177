/**
 * formulario para saludar
 * Autor: Esteban Palomar Murucia
 * Fecha: 26 de junio del 2024
 */

function saludar(){
    let saludo = document.getElementById("txt-saludo").value;
    document.getElementById('saludo').innerHTML=`<strong>${saludo}</strong>`;
    return false;
}