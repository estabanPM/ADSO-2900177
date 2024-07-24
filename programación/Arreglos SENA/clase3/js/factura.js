/**
 * Factura de una tienda usando arreglos nombre:valor
 * autor: Esteban Palomar Murcia
 * 15 de mayo del 2024
 */

let factura=[];
let valorTotal;
let iteracion;
let totalPagar=[];

factura=[
    {id:1, nombreProducto:'Tamal', cantidaProducto:4, precioProducto:6000},
    {id:2, nombreProducto:'Asado de carne', cantidaProducto:2, precioProducto:9000},
    {id:3, nombreProducto:'Lechona', cantidaProducto:5, precioProducto:7000},
    {id:4, nombreProducto:'Mazato', cantidaProducto:6, precioProducto:5000},
    {id:5, nombreProducto:'Limonada', cantidaProducto:9, precioProducto:4000},
];
console.log(factura);

// para calcular el total a pagar de un solo producto
valorTotal = factura[1].cantidaProducto * factura[1].precioProducto;
console.log("la canridad a pagar: "+valorTotal)

// para calcular el total a pagar
for(iteracion=0;iteracion<factura.length;iteracion++){
    valorTotal = factura[iteracion].cantidaProducto*factura[iteracion].precioProducto;
    totalPagar.push({nombre:factura[iteracion].nombreProducto, cantidaProducto:factura[iteracion].cantidaProducto, precioProducto:factura[iteracion].precioProducto, total:valorTotal});
}
console.log(totalPagar);