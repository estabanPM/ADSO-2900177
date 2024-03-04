# Taller Pseudocódigo
## 1. Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.
### Desarrollo
```
 INICIO
     Definir inversionP1, inversionP2, inversionP3, inversionTotal, porcentajeP1, porcentajeP2, porcentajeP3 como real
     inversionP1= 0.0
     inversionP2= 0.0
     inversionP3= 0.0
     inversionTotal= 0.0
     porcentajeP1= 0.0
     porcentajeP2= 0.0
     porcentajeP3= 0.0

     Escribir "Ingresa el valor que invirtieron las tres personas: "
     leer P1
     leer P2
     leer P3
     
     InversionTotal= inversionP1 + inversionP2 + inversionP3
     porcentajeP1= (inversionP1 / inversionTotal)*100
     porcentajeP2= (inversionP2 / inversionTotal)*100
     porcentajeP3= (inversionP3 / inversionTotal)*100

     escribir "El porcentaje que le corresponde a la persona 1 es: ",porcentajeP1
     escribir "El porcentaje que le corresponde a la persona 2 es: ",porcentajeP2
     escribir "El porcentaje que le corresponde a la persona 3 es: ",porcentajeP3
 FIN
```
## 2. Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación:
- La calificación de Matemáticas se obtiene de la siguiente manera: Examen 90% Promedio de tareas 10% En esta materia se pidió un total de tres tareas.
- La calificación de Física se obtiene de la siguiente manera: Examen 80% Promedio de tareas 20% En esta materia se pidió un total de dos tareas.
- La calificación de Química se obtiene de la siguiente manera: Examen 85% Promedio de tareas 15% En esta materia se pidió un promedio de tres tareas.
### Desarrollo
```
 INICIO
      Definir examenM, examenF, examenQ, tareaM1, tareaM2, tareaM3, tareaF1, tareaF2,
      tareaQ1, tareaQ2, tareaQ3, promedioTareasM, promedioTareasF, promedioTareasQ, 
      porcentajeTareaM, porcentajeTareaF, porcentajeTareaQ, porcentajeExamenM, porcentajeExamenF, porcentajeExamenQ, promedioM, promedioF, promedioQ, promedioGeneral como real 
      examenM= 0.0
      examenF= 0.0
      examenQ= 0.0
      tareaM1= 0.0
      tareaM2= 0.0
      tareaM3= 0.0
      tareaF1= 0.0
      tareaF2= 0.0
      tareaQ1= 0.0
      tareaQ2= 0.0
      promedioTareasM= 0.0
      promedioTareasF= 0.0
      promedioTareasQ= 0.0
      porcentajeTareaM= 0.0
      porcentajeTareaF= 0.0
      porcentajeTareaQ= 0.0
      porcentajeExamenM= 0.0
      porcentajeExamenF= 0.0
      porcentajeExamenQ= 0.0
      promedioM= 0.0
      promedioF= 0.0
      promedioGeneral= 0.0
      promedioQ= 0.0

      
      Escribir "Digite las notas de las tres tareas de matematicas: "
      leer tareaM1
      leer tareaM2
      leer tareaM3
      Escribir "Digite la nota del examen de matematicas: "
      leer examenM

      Escribir "Digite las notas de las dos tareas de fisica: "
      leer tareaF1
      leer tareaF2
      Escribir "Digite la nota del examen de fisica: "
      leer examenF

      Escribir "Digite las notas de las tres tareas de química: "
      leer tareaQ1
      leer tareaQ2
      leer tareaQ3
      Escribir "Digite la nota del examen de química: "
      leer examenQ

      promedioTareasM= (tareaM1 + tareaM2 + tareaM3)/3
      porcentajeTareaM= (promedioTareasM * 0.10)
      porcentajeExamenM= (examenM * 0.9)
      promedioM= porcentajeExamenM + porcentajeTareaM

      promedioTareasF= (tareaF1 + tareaF2)/2
      porcentajeTareaF= (promedioTareasF * 0.8)
      porcentajeExamenF= (examenF * 0.2)
      promedioF= porcentajeExamenF + porcentajeTareaF

      promedioTareasQ= (tareaQ1 + tareaQ2 + tareaQ3)/3
      porcentajeTareaQ= (promedioTareasQ * 0.85)
      porcentajeExamenQ= (examenQ * 0.15)
      promedioQ= porcentajeExamenQ + porcentajeTareaQ

      promedioGeneral= (promedioM + promedioF + promedioQ)/3

      Escribir "El promedio de la materia Matematicas es: ", promedioM
      Escribir "El promedio de la materia Fisica es: ", promedioF
      Escribir "El promedio de la materia Quimica es: ", promedioQ
      Escribir "El promedio general del las tres materias es: ", promedioGeneral
 FIN
```

## 3. Leer un real e imprimir si el número es positivo o negativo.

### Desarrollo

```
 INICIO
    Definir num como real 
    num= 0.0

    Escribir "Digite un número "
    Leer num 

    Si num > 0 entonces
       Escribir "El número digitado es positivo"
    SiNO entonces
       Escribir "El núero digitado es negativo"
    FinSi   
 FIN 
```

## 4. Leer un real e imprimir si el número es mayor a 200 o no.

### Desarrollo
```
 INICIO
    Definir num como real 
    num= 0.0

    Escribir "Digite un número "
    Leer num 

    Si num > 200 entonces
       Escribir "El número digitado es mayor a 200"
    SiNO entonces
       Escribir "El número digitado es menor a 200"
    FinSi   
 FIN 
```

## 5. Leer un real e imprimir si el número está en el rango de 50 y 100.

### Desarrollo
```
 INICIO
    Definir num como real 
    num= 0.0

    Escribir "Digite un número "
    Leer num 

    Si num >= 50 y num <= 100 entonces
       Escribir "El número digitado se encuentra en el rango de 50-100"
    SiNO entonces
       Escribir "El número digitado no se encuentra en el rango de 50-100"
    FinSi   
 FIN 
```
