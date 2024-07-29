/**calcular el promedio de notas con porcentaje.
 * Autor: Esteban Palomar Murcia
 * Fecha:  01 de julio del 2024
 */

function porNota(){
    let notaUno = parseInt(document.getElementById('txt-notaUno').value);
    let notaDos = parseInt(document.getElementById('txt-notaDos').value);
    let notaTres = parseInt(document.getElementById('txt-notaTres').value);

    if (notaUno && notaDos && notaTres){
        let porNotaUno = notaUno*0.3;
        let porNotaDos = notaDos*0.3;
        let porNotaTres = notaTres*0.4;
        let sumaPor = porNotaUno + porNotaDos +porNotaTres;

        let rPorNotaUno = `Porcentaje de la nota uno: ${porNotaUno} </br>`;
        let rPorNotados = `Porcentaje de la nota dos: ${porNotaDos} </br>`;
        let rPorNotaTres = `Porcentaje de la nota tres: ${porNotaTres} </br>`;
        let rSumaPor = `la suma de los Porcentajes: ${sumaPor}`;

        document.getElementById('porcentajesN').innerHTML = rPorNotaUno + rPorNotados + rPorNotaTres + rSumaPor;
    }
    else{
        document.getElementById('porcentajesN').innerHTML = 'ingrese notas en todas las casillas';
    }
    return false;
}