let bingo = [];
let interno = [];
let interacion1;
let interacion2;
let contador = 0;
let tabla;
let printResultado = '';

// Generar la tabla de bingo
for (interacion1 = 0; interacion1 < 5; interacion1++) {
    interno = [];
    for (interacion2 = 0; interacion2 < 5; interacion2++) {
        contador = contador + 1;
        tabla = contador * 3;
        interno.push(tabla);
    }
    bingo.push(interno);
}

// Botones para seleccionar columnas
printResultado += '<div class="btn-group" role="group" aria-label="Basic example">';
printResultado += '<button type="button" class="btn btn-primary color" id="fila1">Columna 1</button>';
printResultado += '<button type="button" class="btn btn-primary color" id="fila2">Columna 2</button>';
printResultado += '<button type="button" class="btn btn-primary color" id="fila3">Columna 3</button>';
printResultado += '<button type="button" class="btn btn-primary color" id="fila4">Columna 4</button>';
printResultado += '<button type="button" class="btn btn-primary color" id="fila5">Columna 5</button>';
printResultado += '<button type="button" class="btn btn-primary color" id="X1">Una X</button>';
printResultado += '<button type="button" class="btn btn-primary color" id="X2">Triple X</button>';
printResultado += '</div>';

// Estructura del bingo
printResultado += '<table class="table">';
printResultado += '<thead>';
printResultado += '<tr>';
printResultado += '<th>B</th><th>I</th><th>N</th><th>G</th><th>O</th>';
printResultado += '</tr>';
printResultado += '</thead>';
printResultado += '<tbody>';
for (interacion1 = 0; interacion1 < 5; interacion1++) {
    printResultado += '<tr>';
    for (interacion2 = 0; interacion2 < 5; interacion2++) {
        let value = bingo[interacion1][interacion2];
        let clase = `cambio${interacion2 + 1}`;
        
        if (value % 2 === 1 && (interacion1 === interacion2 || interacion1 + interacion2 === 4)) {
            printResultado += `<td class="${clase} cambioX">${value}</td>`;
        } else {
            printResultado += `<td class="${clase}">${value}</td>`;
        }
    }
    printResultado += '</tr>';
}
printResultado += '</tbody>';
printResultado += '</table>';

document.getElementById("bingo").innerHTML = printResultado;

// Función para cambiar el color de las celdas
const colorX = (elements, color) => {
    elements.forEach((element) => {
        element.style.color = "white";
        element.style.background = color;
        element.style.transition = "all 2s ease";
    });
};

// Variable para rastrear la columna actualmente seleccionada
let columnaSeleccionada = null;

// Función para restaurar el color original de todas las celdas de una columna
const restaurarColorColumna = (columna) => {
    let celdas = document.querySelectorAll(`.cambio${columna}`);
    celdas.forEach((element) => {
        element.style.color = "";
        element.style.background = "";
        element.style.transition = "all 2s ease";
    });
};

// Función para restaurar el color original de la "X" y de la columna seleccionada previamente
const restaurarColoresAnteriores = () => {
    // Restaurar color de la columna previamente seleccionada si hay una seleccionada
    if (columnaSeleccionada !== null) {
        restaurarColorColumna(columnaSeleccionada);
    }
    
    // Restaurar color de la "X"
    let cambioX = document.querySelectorAll(".cambioX");
    cambioX.forEach((element) => {
        element.style.color = "";
        element.style.background = "";
        element.style.transition = "all 2s ease";
    });
    
    // Restaurar color de los números específicos
    let colorX1 = document.querySelectorAll(".cambioX1");
    colorX1.forEach((element) => {
        element.style.color = "";
        element.style.background = "";
        element.style.transition = "all 2s ease";
    });
    let colorX2 = document.querySelectorAll(".cambioX2");
    colorX2.forEach((element) => {
        element.style.color = "";
        element.style.background = "";
        element.style.transition = "all 2s ease";
    });
};

// Asignar eventos a los botones de las columnas y el botón "X"
const buttons = ['fila1', 'fila2', 'fila3', 'fila4', 'fila5', 'X1', 'X2'];
buttons.forEach((btn, index) => {
    document.getElementById(btn).addEventListener("click", () => {
        // Restaurar colores anteriores
        restaurarColoresAnteriores();
        
        // Resaltar la columna seleccionada o activar la "X"
        if (btn.startsWith('fila')) {
            columnaSeleccionada = index + 1;
            let cambioColumna = document.querySelectorAll(`.cambio${columnaSeleccionada}`);
            cambioColumna.forEach((element) => {
                element.style.color = "white";
                element.style.background = "#015d52";
                element.style.transition = "all 2s ease";
            });
        } else if (btn === 'X1') {
            let cambioX1 = document.querySelectorAll(".cambioX");
            colorX(cambioX1, "#bbee44");
        } else if (btn === 'X2') {
            let colorX1 = document.querySelectorAll("td");
            colorX1.forEach((element) => {
                if ([6, 12, 24, 36, 42].includes(parseInt(element.textContent))){
                    element.classList.add("cambioX1");
                    element.style.background = "#008080"; // Color azul
                }
                if ([33, 39, 45, 51, 57, 63, 69, 75].includes(parseInt(element.textContent))) {
                    element.classList.add("cambioX2");
                    element.style.background = "#ff7f7f"; // Color rosado
                }
            });
        }
    });
});
