/**imprimir el area de un cuadrado, rectangulo y triangulo.
 * Autor: Esteban Palomar Murcia
 * Fecha: Jueves 04 de abril del 2024
 */

//con parametro
function AreaCua(plado1,plado2){
    let lado1= plado1;
    let lado2= plado2;
    let area;
    area= lado1*lado2;
    return area;
}
function AreaTri(pbase,paltura){
    let base= pbase;
    let altura= paltura;
    let area;
    area= (base*altura)/2;
    return area;
}
function AreaRec(pbase,paltura){
    let base= pbase;
    let altura= paltura;
    let area;
    area= base*altura;
    return area;
}

//con expresión
const AreaCuaExp = function(plado1,plado2){
    let lado1= plado1;
    let lado2= plado2;
    let area;
    area= lado1*lado2;
    return area;
}
const AreaTriExp = function(pbase,paltura){
    let base= pbase;
    let altura= paltura;
    let area;
    area= (base*altura)/2;
    return area;
}
const AreaRecExp = function(pbase,paltura){
    let base= pbase;
    let altura= paltura;
    let area;
    area= base*altura;
    return area;
}
