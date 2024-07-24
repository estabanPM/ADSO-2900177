/**
 * Tienda usando arreglos nombre:valor
 * autor: Esteban Palomar Murcia
 * 08 de mayo del 2024
 */

let tienda = [];
let iteracion=0;

tienda=[
    {id: 1, nombreProducto:"frijoles",tipoProducto:"granos",cantidadProducto:"1000",tipoCantidad:"gramos",precioProducto:"2500"},
    {id: 2, nombreProducto:"Arroz",tipoProducto:"granos",cantidadProducto:"2000",tipoCantidad:"gramos",precioProducto:"1000"},
    {id: 3, nombreProducto:"espaguetis",tipoProducto:"pasta",cantidadProducto:"3",tipoCantidad:"unidad",precioProducto:"3500"},
    {id: 4, nombreProducto:"garbanzo",tipoProducto:"granos",cantidadProducto:"3000",tipoCantidad:"gramos",precioProducto:"2000"},
    {id: 5, nombreProducto:"lentejas",tipoProducto:"granos",cantidadProducto:"1000",tipoCantidad:"gramos",precioProducto:"3000"}
]

//mostrar arreglo Nombre:Valor
console.log(tienda);

//para iterar elementos que cumplan una condicion
for(iteracion=0;iteracion<5;iteracion++){
    if(tienda[iteracion].cantidadProducto>=2000 && tienda[iteracion].tipoCantidad =="gramos"){
        
    console.log("posición: "+iteracion+": ");
    console.log(tienda[iteracion]);
    }else{
        console.log("no hay elementos")
    }
}