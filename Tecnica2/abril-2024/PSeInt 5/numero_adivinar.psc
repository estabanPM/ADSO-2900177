Algoritmo Juego_Adivinanza
	
    Definir numeroAdivinar, numeroUsuario Como Entero
    Definir intentos Como Entero
    Definir rangoMinimo, rangoMaximo Como Entero
    Definir continuar Como Logico
    Definir respuesta Como Cadena
    
    continuar = Verdadero
    intentos = 0
    rangoMinimo = 1
    rangoMaximo = 100
    numeroAdivinar = Azar(rangoMaximo - rangoMinimo + 1) + rangoMinimo
    
    Escribir "�Bienvenido al juego de adivinanza de n�meros!"
    Escribir "Trata de adivinar un n�mero entre ", rangoMinimo, " y ", rangoMaximo

    Mientras continuar Hacer
        intentos = intentos + 1
        Escribir "Intento ", intentos, ". Ingresa tu n�mero:"
        Leer numeroUsuario
		
        Si numeroUsuario < rangoMinimo o numeroUsuario > rangoMaximo Entonces
            Escribir "El n�mero debe estar dentro del rango de ", rangoMinimo, " y ", rangoMaximo
        Sino
            Si numeroUsuario = numeroAdivinar Entonces
                Escribir "�Felicidades! �Has adivinado el n�mero ", numeroAdivinar, " en ", intentos, " intentos!"
                continuar = Falso
            Sino
                Si numeroUsuario < numeroAdivinar Entonces
                    Escribir "El n�mero es mayor al que digit�."
                Sino
                    Escribir "El n�mero es menor al que digit�."
                FinSi
            FinSi
        FinSi
        
        Si continuar Entonces
            Escribir "�Deseas continuar adivinando? (si/no)"
            Leer respuesta
            continuar = (respuesta = "si")
			si respuesta == "no" Entonces
				Escribir "el numero que tenias que adivinar era el " numeroAdivinar
			SiNo
				respuesta = ""
				Escribir "caracter no valido. solo digita (si/no)"
				continuar = (respuesta = "")
			FinSi
        FinSi
    FinMientras
    
FinAlgoritmo

