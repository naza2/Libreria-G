// miLibreria.js

// Función para dibujar gráficos de líneas
function drawLineChart(data, labels, ctx) {
    // Validar que los datos y etiquetas sean arreglos del mismo tamaño
    if (!Array.isArray(data) || !Array.isArray(labels) || data.length !== labels.length) {
        console.error("Los datos y las etiquetas deben ser arreglos del mismo tamaño.");
        return;
    }

    // Limpiar el canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Configuración del gráfico
    const padding = 40; // Espacio alrededor del gráfico
    const width = ctx.canvas.width - padding * 2;
    const height = ctx.canvas.height - padding * 2;

    // Encontrar el valor máximo para escalar el gráfico
    const maxDataValue = Math.max(...data);
    
    // Dibujar los ejes
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height + padding);
    ctx.lineTo(width + padding, height + padding);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    // Dibujar la línea
    ctx.beginPath();
    ctx.moveTo(padding, height + padding - (data[0] / maxDataValue) * height);
    
    for (let i = 1; i < data.length; i++) {
        const x = padding + (i * width) / (data.length - 1);
        const y = height + padding - (data[i] / maxDataValue) * height;
        ctx.lineTo(x, y);
    }
    
    ctx.strokeStyle = 'rgba(54, 162, 235, 1)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Dibujar los puntos
    ctx.fillStyle = 'rgba(54, 162, 235, 1)';
    for (let i = 0; i < data.length; i++) {
        const x = padding + (i * width) / (data.length - 1);
        const y = height + padding - (data[i] / maxDataValue) * height;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
    }

    // Etiquetas en el eje X
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    for (let i = 0; i < labels.length; i++) {
        const x = padding + (i * width) / (labels.length - 1);
        ctx.fillText(labels[i], x, height + padding + 20);
    }
}

// Función para dibujar gráficos de pastel
function drawPieChart(data, labels, ctx) {
    // Validar que los datos y etiquetas sean arreglos del mismo tamaño
    if (!Array.isArray(data) || !Array.isArray(labels) || data.length !== labels.length) {
        console.error("Los datos y las etiquetas deben ser arreglos del mismo tamaño.");
        return;
    }

    // Limpiar el canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Calcular el total de los datos
    const total = data.reduce((acc, value) => acc + value, 0);

    // Variables para el ángulo
    let startAngle = 0;

    // Dibujar cada segmento del pastel
    for (let i = 0; i < data.length; i++) {
        const sliceAngle = (data[i] / total) * 2 * Math.PI;

        // Dibujar el segmento
        ctx.beginPath();
        ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
        ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, Math.min(ctx.canvas.width, ctx.canvas.height) / 2 - 10, startAngle, startAngle + sliceAngle);
        ctx.closePath();

        // Asignar un color aleatorio para el segmento
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        ctx.fill();

        // Actualizar el ángulo de inicio para el siguiente segmento
        startAngle += sliceAngle;
    }

    // Dibujar etiquetas
    startAngle = 0;
    for (let i = 0; i < data.length; i++) {
        const sliceAngle = (data[i] / total) * 2 * Math.PI;
        const labelX = ctx.canvas.width / 2 + Math.cos(startAngle + sliceAngle / 2) * (Math.min(ctx.canvas.width, ctx.canvas.height) / 2 - 30);
        const labelY = ctx.canvas.height / 2 + Math.sin(startAngle + sliceAngle / 2) * (Math.min(ctx.canvas.width, ctx.canvas.height) / 2 - 30);
        ctx.fillStyle = '#000';
        ctx.fillText(labels[i], labelX, labelY);
        startAngle += sliceAngle;
    }
}

// Función para dibujar histogramas
function drawBarChart(data, labels, ctx) {
    // Validar que los datos y etiquetas sean arreglos del mismo tamaño
    if (!Array.isArray(data) || !Array.isArray(labels) || data.length !== labels.length) {
        console.error("Los datos y las etiquetas deben ser arreglos del mismo tamaño.");
        return;
    }

    // Limpiar el canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Configuración del gráfico
    const padding = 40; // Espacio alrededor del gráfico
    const barWidth = (ctx.canvas.width - padding * 2) / data.length; // Ancho de cada barra
    const maxDataValue = Math.max(...data); // Valor máximo para escalar el gráfico
    const height = ctx.canvas.height - padding * 2; // Altura del área del gráfico

    // Dibujar las barras
    for (let i = 0; i < data.length; i++) {
        const x = padding + i * barWidth; // Posición X de la barra
        const barHeight = (data[i] / maxDataValue) * height; // Altura de la barra
        
        ctx.fillStyle = 'rgba(54, 162, 235, 0.6)'; // Color de la barra
        ctx.fillRect(x, height + padding - barHeight, barWidth - 10, barHeight); // Dibujar la barra

        // Dibujar etiquetas en la parte inferior de cada barra
        ctx.fillStyle = '#000'; // Color de la etiqueta
        ctx.textAlign = 'center';
        ctx.fillText(labels[i], x + barWidth / 2 - 5, height + padding + 20);
    }

    // Dibujar el eje Y
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height + padding);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    // Dibujar el eje X
    ctx.beginPath();
    ctx.moveTo(padding, height + padding);
    ctx.lineTo(ctx.canvas.width - padding, height + padding);
    ctx.strokeStyle = '#000';
    ctx.stroke();
}

// Función para calcular la media
function calcularMedia(valores) {
    if (!Array.isArray(valores) || valores.length === 0) {
        console.error("Se requiere un arreglo de valores no vacío.");
        return null;
    }
    const suma = valores.reduce((acumulador, valor) => acumulador + valor, 0);
    return suma / valores.length;
}

// Función para calcular la mediana
function calcularMediana(valores) {
    if (!Array.isArray(valores) || valores.length === 0) {
        console.error("Se requiere un arreglo de valores no vacío.");
        return null;
    }
    const valoresOrdenados = [...valores].sort((a, b) => a - b);
    const mitad = Math.floor(valoresOrdenados.length / 2);
    return valoresOrdenados.length % 2 === 0 
        ? (valoresOrdenados[mitad - 1] + valoresOrdenados[mitad]) / 2 
        : valoresOrdenados[mitad];
}

// Función para calcular la moda
function calcularModa(valores) {
    if (!Array.isArray(valores) || valores.length === 0) {
        console.error("Se requiere un arreglo de valores no vacío.");
        return null;
    }
    const frecuencia = {};
    valores.forEach(valor => {
        frecuencia[valor] = (frecuencia[valor] || 0) + 1;
    });
    const maxFrecuencia = Math.max(...Object.values(frecuencia));
    return Object.keys(frecuencia).filter(key => frecuencia[key] === maxFrecuencia);
}

// Función para actualizar todos los gráficos y estadísticas
function updateAllCharts() {
    // Extraer datos y etiquetas 
    const data = excelData.map(item => item.valor); // Extraer valores
    const labels = excelData.map(item => item.mes); // Extraer etiquetas
    
    // Llamar a las funciones de dibujo para cada tipo de gráfico
    drawLineChart(data, labels, document.getElementById('lineChart').getContext('2d'));
    drawPieChart(data, labels, document.getElementById('pieChart').getContext('2d')); 
    drawBarChart(data, labels, document.getElementById('barChart').getContext('2d'));
    
    // Calcular y mostrar estadísticas
    const media = calcularMedia(data);
    const mediana = calcularMediana(data);
    const moda = calcularModa(data);
    
    // Mostrar resultados en el HTML
    document.getElementById('media').innerText = `Media: ${media !== null ? media.toFixed(2) : 'N/A'}`;
    document.getElementById('mediana').innerText = `Mediana: ${mediana !== null ? mediana : 'N/A'}`;
    document.getElementById('moda').innerText = `Moda: ${moda !== null ? moda.join(', ') : 'N/A'}`;
}

// Llamar a la función para dibujar los gráficos al cargar la página
window.onload = function() {
    updateAllCharts();
};
