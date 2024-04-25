Algoritmo Facturacion_Ventas_Vehiculos
	
    Definir IMPUESTO_VEHICULO Como Real
    Definir DESCUENTO_CONTADO Como Real
    IMPUESTO_VEHICULO = 0.15   
    DESCUENTO_CONTADO = 0.05
	
    Definir precioVehiculo, totalPagar Como Real
    Definir esContado Como Logico
    Definir continuar Como Logico
	Definir modelo, nombrePersona Como Caracter
	Definir opcionP Como numerico
	
    continuar = Verdadero
    
    Mientras continuar Hacer
        Escribir "CONCESIONARIO DE MOTOCICLETAS KTMOTOR "
        Escribir "1. Registrar una venta."
        Escribir "2. Salir."
        Escribir "Seleccione una opción:"
        Leer opcionP
		
		Si opcionP <> 1 y opcionP <> 2 Entonces
			Escribir "Opción no válida. Seleccione 1 para registrar una venta o 2 para salir."
			Escribir NL
		FinSi
 
        Segun opcionP Hacer
            Caso 1:
				escribir "ingrese la marca y la serie de la motocicleta: "
				leer modelo
                Escribir "Ingrese el precio de la mototcicleta:"
                Leer precioVehiculo
				Escribir "Ingrse el nombre del comprador: "
				Leer nombrePersona
                
                Si precioVehiculo <= 0 Entonces
                    Escribir "El precio del vehículo debe ser mayor que ."
                Sino
                    Escribir "¿Es una venta al contado? (si/no)"
					Leer respuestaContado
					esContado = (respuestaContado = "si")
                    
                    totalPagar = precioVehiculo + (precioVehiculo * IMPUESTO_VEHICULO)
                    
                    Si esContado Entonces
                        totalPagar = totalPagar - (totalPagar * DESCUENTO_CONTADO)
                    FinSi
                    
					Escribir NL
                    Escribir "FACTURA DE VENTA"
					Escribir "Propietario de la mototocicleta: ", nombrePersona 
				   Escribir "Motocicleta: ", modelo
                    Escribir "Precio del vehículo: ", precioVehiculo
                    Si esContado Entonces
                        Escribir "Descuento al contado: ", (precioVehiculo * DESCUENTO_CONTADO)
                    FinSi
                    Escribir "Impuesto del vehículo: ", (precioVehiculo * IMPUESTO_VEHICULO)
                    Escribir "Total a pagar: ", totalPagar
					Escribir "Gracias por su compra señor ", nombrePersona, "!"
					Escribir NL
                FinSi
            Caso 2:
                continuar = Falso
                Escribir "Vuelva Pronto!"
				
        FinSegun
    FinMientras
    
FinAlgoritmo

