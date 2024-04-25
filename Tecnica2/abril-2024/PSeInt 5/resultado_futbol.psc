Algoritmo Resultados_de_futbol
	//la función de este Algoritmo es para calcular unos resultados de futbol.
	definir equipo1, equipo2 Como Caracter
	Definir golIda1, golIda2, golVuelta1, golVuelta2, global1, global2, diferenciaGlo, diferenciaIda, diferenciaVuel, promedioGol, porTarjetas, tarjetas Como Real
	Definir respuesta, equipoGanador, equipoSiguienteRonda como Cadena
    
	Escribir "pseudocodigo que funciona para ver los resultados de un partido de futbol"
	Escribir NL
    valido <- 0
    
    Mientras valido = 0 Hacer
        Escribir "¿El partido de futbol es ida y vuelta? (si/no) "
        Leer respuesta
        
        Si respuesta = "si" Entonces
             valido <- 1
			Escribir "Ingrese el nombre del primer equipo: "
			leer equipo1
			Escribir "Ingrese el nombre del segundo equipo: "
			leer equipo2
			Escribir "ingrese los goles que marcó el "+equipo1+" en el partido de ida: "
			leer golIda1
			Escribir "ingrese los goles que marcó el "+equipo2+" en el partido ida: "
			leer golIda2
			Escribir "ingrese los goles que marcó el "+equipo1+" en el partido de vuelta: "
			leer golVuelta1
			Escribir "ingrese los goles que marcó el "+equipo2+" en el partido de vuelta: "
			leer golVuelta2
			
			global1 = golIda1+golVuelta1
			global2 = golIda2+golVuelta2
			promedioGol = (golIda1+golVuelta1+golIda2+golVuelta2)/4
			
			si golIda1 == golIda2 Entonces
				diferenciaIda = golIda1-golIda2
				Escribir NL
				Escribir "EL "+equipo1+" y el "+equipo2+" empataron en el partido de ida con: "
				Escribir golIda1 " - " golIda2
				Escribir NL
				Escribir "La diferencia de gol en la ida es de: " diferenciaIda
			SiNo
				si golIda1 > golIda2 Entonces
					diferenciaIda = golIda1-golIda2
					Escribir NL
					Escribir "En el partido de ida el ganador fue el "+equipo1+" con: "
					Escribir golIda1 " - " golIda2
					Escribir NL
					Escribir "La diferencia de gol en la ida es de: " diferenciaIda
				SiNo
					diferenciaIda = golIda2-golIda1
					Escribir NL
					Escribir "En el partido de ida el ganador fue el "+equipo2+" con: "
					Escribir golIda1 " - " golIda2
					Escribir NL
					Escribir "La diferencia de gol en la ida es de: " diferenciaIda
				FinSi
			FinSi
			
			si golVuelta1 == golVuelta2 Entonces
				diferenciaVuel = golVuelta1-golVuelta2
				Escribir NL
				Escribir "EL "+equipo1+" y el "+equipo2+" empataron en el marcador de vuelta con: "
				Escribir golVuelta1 " - " golVuelta2
				Escribir NL
				Escribir "La diferencia de gol en la vuelta es de: " diferenciaVuel
			SiNo
				si golVuelta1 > golVuelta2 Entonces
					diferenciaVuel = golVuelta1-golVuelta2
					Escribir NL
					Escribir "En el partido de vuelta el ganador fue el "+equipo1+" con: "
					Escribir golVuelta1 " - " golVuelta2
					Escribir NL
					Escribir "La diferencia de gol en la vuelta es de: " diferenciaVuel
				SiNo
					diferenciaVuel = golVuelta2-golVuelta1
					Escribir NL
					Escribir "En el partido de vuelta el ganador fue el "+equipo2+" con: "
					Escribir golVuelta1 " - " golVuelta2
					Escribir NL
					Escribir "La diferencia de gol en la vuelta es de: " diferenciaVuel
				FinSi
			FinSi
			
			si global1 == global2 Entonces
				diferenciaGlo = global1-global2
				Escribir NL
				Escribir "EL "+equipo1+" y el "+equipo2+" empataron en el marcador global con: "
				Escribir global1 " - " global2
				Escribir NL
				Escribir "La diferencia de gol es de: " diferenciaGlo
				Escribir NL
			SiNo
				si global1 > global2 Entonces
					diferenciaGlo = global1-global2
					Escribir NL
					Escribir "En el marcador global el ganador fue el "+equipo1+" con: "
					Escribir global1 " - " global2
					Escribir NL
					Escribir "La diferencia de gol en el global es de: " diferenciaGlo
					Escribir NL
				SiNo
					diferenciaGlo = global2-global1
					Escribir NL
					Escribir "En el marcador global el ganador fue el "+equipo2+" con: "
					Escribir global1 " - " global2
					Escribir NL
					Escribir "La diferencia de gol en el global es de: " diferenciaGlo
					Escribir NL
				FinSi
			FinSi
			Escribir "El promedio de gol en los dos partidos fue de: " promedioGol
		SiNo 
			Si respuesta = "no" Entonces
				valido <- 1
				Escribir "Ingrese el nombre del primer equipo: "
				leer equipo1
				Escribir "Ingrese el nombre del segundo equipo: "
				leer equipo2
				Escribir "ingrese los goles que marcó el "+equipo1
				leer golIda1
				Escribir "ingrese los goles que marcó el "+equipo2
				leer golIda2
				Escribir "¿Cuantas tarjetas amarillas hubo en el partido?"
				leer tarjetas
				porTarjetas = (tarjetas/22)*100
				
				si golIda1 == golIda2 Entonces
					diferenciaIda = golIda1-golIda2
					Escribir NL
					Escribir "EL "+equipo1+" y el "+equipo2+" empataron en el partido con: "
					Escribir golIda1 " - " golIda2
					Escribir NL
					Escribir "La diferencia de gol en el partido fue de: " diferenciaIda
					Escribir NL
					Escribir "El porcentaje de tarjetas amarillas en el partido fue de: " porTarjetas "%"
				SiNo
					si golIda1 > golIda2 Entonces
						diferenciaIda = golIda1-golIda2
						Escribir NL
						Escribir "El ganador del partido fue el "+equipo1+" con: "
						Escribir golIda1 " - " golIda2
						Escribir NL
						Escribir "La diferencia de gol en el partido fue de: " diferenciaIda
						Escribir NL
						Escribir "El porcentaje de tarjetas amarillas en el partido fue de: " porTarjetas "%"
					SiNo
						diferenciaIda = golIda2-golIda1
						Escribir NL
						Escribir "El ganador del partido fue el "+equipo2+" con: "
						Escribir golIda1 " - " golIda2
						Escribir NL
						Escribir "La diferencia de gol en el partido fue de: " diferenciaIda
						Escribir NL
						Escribir "El porcentaje de tarjetas amarillas en el partido fue de: " porTarjetas "%"
					FinSi
				FinSi
			FinSi
        FinSi
    FinMientras
FinAlgoritmo
