import React from "react";
import '../results/results.css';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    DoughnutController,
    ArcElement,
    BarElement,
    BarController
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    DoughnutController,
    ArcElement,
    BarElement,
    BarController
);

// --- Datos realistas ---
const barChartData = {
    labels: ['Irradiancia Solar', 'Cobertura Nublada', 'Temperatura', 'Viento', 'CO₂', 'Humedad'],
    datasets: [{
        label: 'Datos Ambientales',
        data: [6.4, 22, 21, 4.8, 412, 55],
        backgroundColor: ['#2E5F99', '#2C8BB9', '#41B8D6', '#4BC0C0', '#FFC107', '#00BCD4'],
        borderRadius: 10
    }]
};

const barChartOptions = {
    responsive: true,
    plugins: {
        legend: { display: false },
        title: { display: true, text: 'Métricas del Sitio' },
        tooltip: {
            callbacks: {
                label: (context) => {
                    switch (context.label) {
                        case 'Irradiancia Solar': return ` ${context.parsed.y} kWh/m²/día`;
                        case 'Cobertura Nublada': return ` ${context.parsed.y}%`;
                        case 'Temperatura': return ` ${context.parsed.y} °C`;
                        case 'Viento': return ` ${context.parsed.y} m/s`;
                        case 'CO₂': return ` ${context.parsed.y} ppm`;
                        case 'Humedad': return ` ${context.parsed.y} %`;
                        default: return context.parsed.y;
                    }
                }
            }
        }
    },
    scales: {
        x: { grid: { display: false } },
        y: { beginAtZero: true }
    }
};

const donutData = {
    labels: ['Plano', 'Colinas', 'Valle', 'Otros'],
    datasets: [{
        data: [50, 20, 15, 15],
        backgroundColor: ['#2E5F99', '#2C8BB9', '#41B8D6', '#4BC0C0']
    }]
};

const lineData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [{
        label: 'Producción Estimada (kWh)',
        data: [120, 150, 180, 57, 200, 78, 154, 254, 198, 95, 249, 198],
        borderColor: '#9DCD66',
        backgroundColor: 'rgba(157, 205, 102, 0.3)',
        tension: 0.3,
        fill: true
    }]
};

const Results = () => {
    return (
        <div className="results-main">
            <section className="intro-section">
                <h2>Resumen de Escaneo Energético</h2>
                <p>
                    Esta visualización muestra datos capturados por IonXplorer en el último escaneo. A partir de estos datos,
                    nuestro sistema calcula el potencial energético, condiciones técnicas y recomendaciones específicas.
                </p>
            </section>

            <section className="charts-section">
                <div className="chart-card">
                    <h3>Producción Energética Estimada</h3>
                    <div className="chart-wrapper">
                        <Line data={lineData} options={{ responsive: true }} />
                    </div>
                </div>

                <div className="chart-card">
                    <h3>Métricas Ambientales</h3>
                    <div className="chart-wrapper">
                        <Bar data={barChartData} options={barChartOptions} />
                    </div>
                </div>

                <div className="chart-card small-chart-card">
                    <h3>Topografía del Terreno</h3>
                    <div className="chart-wrapper small-chart">
                        <Doughnut data={donutData} options={{ responsive: true, maintainAspectRatio: true }} />
                    </div>
                </div>
            </section>

            <section className="analysis-section">
                <div className="analysis-grid">
                    <div className="analysis-card">
                        <h4>Ubicación</h4>
                        <ul>
                            <li><b>Coordenadas:</b> 13.7° N, 89.2° O</li>
                            <li><b>Altura:</b> 450 m</li>
                            <li><b>Pendiente:</b> 5–12%</li>
                        </ul>
                    </div>

                    <div className="analysis-card">
                        <h4>Producción y Diseño</h4>
                        <ul>
                            <li><b>Potencial:</b> 2.1 GWh/año</li>
                            <li><b>Tipo sugerido:</b> Solar fotovoltaico</li>
                            <li><b>Paneles recomendados:</b> Monocristalinos, 2.5 MW</li>
                        </ul>
                    </div>

                    <div className="analysis-card">
                        <h4>Factibilidad Económica</h4>
                        <ul>
                            <li><b>Retorno estimado:</b> 6.2 años</li>
                            <li><b>Ahorros anuales:</b> $275,000</li>
                            <li><b>Comparativa:</b> 3.8x más eficiente que diésel</li>
                        </ul>
                    </div>

                    <div className="analysis-card">
                        <h4>Clima Extremo</h4>
                        <ul>
                            <li><b>Temp. Máxima registrada:</b> 38°C</li>
                            <li><b>Temp. Mínima registrada:</b> 9°C</li>
                            <li><b>Riesgo de tormentas:</b> Bajo</li>
                            <li><b>Meses críticos:</b> Septiembre - Octubre</li>
                        </ul>
                    </div>

                    <div className="analysis-card">
                        <h4>Viabilidad Técnica</h4>
                        <ul>
                            <li><b>Distancia a red eléctrica:</b> 1.2 km</li>
                            <li><b>Accesibilidad del sitio:</b> Alta</li>
                            <li><b>Zonas de sombra:</b> 1.2 ha</li>
                            <li><b>Superficie utilizable:</b> 12.5 ha</li>
                        </ul>
                    </div>

                    <div className="analysis-card">
                        <h4>Impacto Ambiental Estimado</h4>
                        <ul>
                            <li><b>CO₂ evitado por año:</b> 1,350 toneladas</li>
                            <li><b>Equivalente a:</b> 290 autos fuera de circulación</li>
                            <li><b>Beneficio local:</b> Disminución de dependencia al diésel</li>
                        </ul>
                    </div>

                    <div className="analysis-card recommendations-card">
                        <h4>Recomendaciones</h4>
                        <ul>
                            <li>Inversores con MPPT</li>
                            <li>Monitoreo de vegetación</li>
                            <li>Considerar batería complementaria</li>
                            <li>Posible hibridación con eólica</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Results;

