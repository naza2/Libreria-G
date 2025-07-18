# libreria.js (Gráficas y Resultados Estadisticos)

## Descripción
`libreria.js` es una librería JavaScript que permite crear gráficos de líneas, gráficos de pastel y histogramas, así como calcular estadísticas como la media, mediana y moda. Esta librería es útil para visualizar datos y realizar análisis estadísticos de manera sencilla y efectiva.

### ¿Qué Problema Resuelve?
En el mundo actual, la visualización de datos es crucial para la toma de decisiones informadas. Sin embargo, muchos enfrentan desafíos al intentar representar datos de manera clara y efectiva. `libreria.js` aborda este problema al proporcionar herramientas fáciles de usar que permiten transformar datos complejos en representaciones visuales comprensibles.

## Instalación
Para incluir la librería en tu proyecto HTML, simplemente descarga el archivo `libreria.js` y agrégalo a tu proyecto. Luego, inclúyelo en tu archivo HTML de la siguiente manera:

## Uso
A continuación, se presenta un ejemplo de implementación de `libreria.js` en un archivo HTML. Este ejemplo muestra cómo crear gráficos de líneas, gráficos de pastel y histogramas, así como calcular estadísticas como la media, mediana y moda.

### Ejemplo de Implementación

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de miLibreria.js</title>
</head>
<body>
    <h1>Ejemplo de Gráficos y Estadísticas</h1>
    <canvas id="lineChart" width="400" height="200"></canvas>
    <canvas id="pieChart" width="200" height="200"></canvas>
    <canvas id="barChart" width="400" height="200"></canvas>
    <div id="estadisticas">
        <h2>Estadísticas</h2>
        <p id="media"></p>
        <p id="mediana"></p>
        <p id="moda"></p>
    </div>
    <script src="libreria.js"></script> <!-- Asegúrate de que la ruta sea correcta -->
</body>
</html>
```
# Métodos
## drawLineChart(data, labels, ctx)
Dibuja un gráfico de líneas en el contexto del canvas proporcionado.
### Parámetros:
- data: Un arreglo de números que representan los valores a graficar.
- labels: Un arreglo de cadenas que representan las etiquetas para el eje X.
- ctx: El contexto del canvas donde se dibujará el gráfico.
## drawPieChart(data, labels, ctx)
Dibuja un gráfico de pastel en el contexto del canvas proporcionado.
### Parámetros:
- data: Un arreglo de números que representan los valores a graficar.
- labels: Un arreglo de cadenas que representan las etiquetas para cada segmento del pastel.
- ctx: El contexto del canvas donde se dibujará el gráfico.
## drawBarChart(data, labels, ctx)
Dibuja un histograma en el contexto del canvas proporcionado.
### Parámetros:
- data: Un arreglo de números que representan los valores a graficar.
- labels: Un arreglo de cadenas que representan las etiquetas para el eje X.
- ctx: El contexto del canvas donde se dibujará el gráfico.
## calcularMedia(valores)
Calcula la media de un arreglo de números.
### Parámetros:
valores: Un arreglo de números.
### Retorna: 
La media de los valores.
## calcularMediana(valores)
Calcula la mediana de un arreglo de números.
### Parámetros:
valores: Un arreglo de números.
### Retorna: 
La mediana de los valores.
## calcularModa(valores)
Calcula la moda de un arreglo de números.
### Parámetros:
valores: Un arreglo de números.
### Retorna: 
Un arreglo con los valores que aparecen con mayor frecuencia.
## updateAllCharts()
Actualiza todos los gráficos y estadísticas en la página.

# Video
https://youtu.be/7H8NDeDmpFI?si=liNCue3QCYMBVqLx

# GitHub Pages
https://naza2.github.io/Libreria-G/

# Integrantes del Equipo 6
- Hernandez Hernandez Maria de Lourdes
- Ramirez Cruz Nazario
