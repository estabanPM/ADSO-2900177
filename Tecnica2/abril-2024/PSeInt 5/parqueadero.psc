Algoritmo Calculo_Parqueadero
	
    Definir tipoVehiculo Como Caracter
    Definir horaEntrada, horaSalida, tiempoEstadia, totalPagar Como Entero
    Definir horasAdicionales Como Real
    Definir tarifaCarro, tarifaMoto, tiempoLimite, tarifaHoraAdicional Como Entero
	Definir valido Como Logico
	
	valido <- Falso
	Escribir "Bienvenido al sistema de c�lculo de parqueadero."
	Escribir NL
    Mientras no valido Hacer
		Escribir nl
        Escribir "Por favor, ingrese el tipo de veh�culo (carro/moto):"
        Leer tipoVehiculo
        
        Si tipoVehiculo = "carro" o tipoVehiculo = "moto" Entonces
            valido <- Verdadero
        Sino
            Escribir "Tipo de veh�culo no v�lido. Por favor, ingrese la palabra carro o moto."
			Escribir nl
        FinSi
    FinMientras
    
    Escribir "Ingrese la hora de entrada del veh�culo (en formato militar):"
    Leer horaEntrada
    Escribir "Ingrese la hora de salida del veh�culo:"
    Leer horaSalida
    
    Si tipoVehiculo = "carro" Entonces
        tarifaCarro = 5000
        tiempoLimite = 4
        tarifaHoraAdicional = 1000
    Sino 
		Si tipoVehiculo = "moto" Entonces
			tarifaMoto = 3000
			tiempoLimite = 4
			tarifaHoraAdicional = 1000
		FinSi
	FinSi
		Si horaSalida >= horaEntrada Entonces
			tiempoEstadia = horaSalida - horaEntrada
		Sino
			tiempoEstadia = (24 - horaEntrada) + horaSalida
		FinSi
		
		Si tipoVehiculo = "carro" Entonces
			Si tiempoEstadia <= tiempoLimite Entonces
				totalPagar = tarifaCarro
			Sino
				horasAdicionales = tiempoEstadia - tiempoLimite
				totalPagar = tarifaCarro + (horasAdicionales * tarifaHoraAdicional)
			FinSi
		Sino 
			Si tipoVehiculo = "moto" Entonces
				Si tiempoEstadia <= tiempoLimite Entonces
					totalPagar = tarifaMoto
				Sino
					horasAdicionales = tiempoEstadia - tiempoLimite
					totalPagar = tarifaMoto + (horasAdicionales * tarifaHoraAdicional)
				FinSi
			FinSi
		FinSi
			Escribir "El tiempo de estad�a fue de ", tiempoEstadia, " horas."
			Escribir "El total a pagar es de ", totalPagar, " pesos."
			
FinAlgoritmo

