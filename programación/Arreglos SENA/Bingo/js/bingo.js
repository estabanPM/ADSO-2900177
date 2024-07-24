/**
 * bingo con JS
 * Autor: Esteban Palomar Murcia
 * Fecha: Miercoles 8 de mayo del 2024
*/

let bingo = [];
let interno= [];
let iteracion1;
let iteracion2;
let contador=0;
let tabla;
let cantidadPar=0;
let cantidadImpar=0;
let letraB =[];
let letraI =[];
let letraN =[];
let letraG = [];
let letraO = [];

// creacion de la matriz
for(iteracion1=0; iteracion1<5;iteracion1++){
    let interno=[];
    for(iteracion2=0; iteracion2<5;iteracion2++){
        contador=contador+1;
        tabla=contador*3;
        interno.push(tabla)
    }
    bingo.push(interno)
}
console.log(bingo);

for(iteracion1=0;iteracion1<5;iteracion1++){
    for(iteracion2=0;iteracion2<5;iteracion2++){
        if(bingo[iteracion1][iteracion2] % 2==0){
            cantidadPar= cantidadPar+1;
        }else{
            cantidadImpar=cantidadImpar+1;
        }

    }
}

console.log("cantidad de Números impares: "+cantidadImpar);
console.log("cantidad de Números pares: "+cantidadPar);

//letra B
for(iteracion1=0;iteracion1<5;iteracion1++){
    letraB.push(bingo[iteracion1][0])
}
console.log("numeros de la letra B: "+ letraB)

// letra I
for(iteracion1=0;iteracion1<5;iteracion1++){
    letraI.push(bingo[iteracion1][1])
}
console.log("numeros de la letra I: "+ letraI);

// letra N
for(iteracion1=0;iteracion1<5;iteracion1++){
    letraN.push(bingo[iteracion1][2])
}
console.log("numeros de la letra N: "+ letraN);

// letra G
for(iteracion1=0;iteracion1<5;iteracion1++){
    letraG.push(bingo[iteracion1][3])
}
console.log("numeros de la letra I: "+ letraG);

// letra O
for(iteracion1=0;iteracion1<5;iteracion1++){
    letraO.push(bingo[iteracion1][4])
}
console.log("numeros de la letra I: "+ letraO);