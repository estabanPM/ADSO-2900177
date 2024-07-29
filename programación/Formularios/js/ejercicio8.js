/**calcular las areas del cuadrado, triangulo y rectangulo.
 * Autor: Esteban Palomar Murcia
 * Fecha:  01 de julio del 2024
 */

function areaCuadrado(){
    let lado = parseInt(document.getElementById('txt-lado').value);

    if (lado){
        let area = lado * lado;

        let rArea =`El area del cuadrado es: ${area}`;

        document.getElementById('cuadrado').innerHTML = rArea;
    }
    else{
        document.getElementById('cuadrado').innerHTML = 'Ingrese los lados en las casillas';
    }
    return false;
}

function areaRectangulo(){
    let base = parseInt(document.getElementById('txt-base').value);
    let altura = parseInt(document.getElementById('txt-altura').value);

    if (base && altura){
        let area = base * altura;

        let rArea =`El area del rectangulo es: ${area}`;

        document.getElementById('rectangulo').innerHTML = rArea;
    }
    else{
        document.getElementById('rectangulo').innerHTML = 'Ingrese los datos en las casillas';
    }
    return false;
}

function areaTriangulo(){
    let base = parseInt(document.getElementById('txt-base').value);
    let altura = parseInt(document.getElementById('txt-altura').value);

    if (base && altura){
        let area = (base * altura)/2;

        let rArea =`El area del triangulo es: ${area}`;

        document.getElementById('triangulo').innerHTML = rArea;
    }
    else{
        document.getElementById('triangulo').innerHTML = 'Ingrese los datos en las casillas';
    }
    return false;
}