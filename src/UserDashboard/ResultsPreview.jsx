import React from "react";
import { Line, Bar } from 'react-chartjs-2';

// Aquí reutilizamos los datos y opciones de Results.jsx (puedes importarlos si los exportas)
const lineChartData = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  datasets: [
    {
      label: 'Producción Energética (kWh)',
      data: [120, 150, 180, 57, 200, 78, 154, 254, 198, 95, 249, 198],
      borderColor: '#9DCD66',
      backgroundColor: 'rgba(157, 205, 102, 0.3)',
      pointBackgroundColor: '#9DCD66',
      tension: 0.3,
      fill: true,
    },
  ],
};

const barChartData = {
  labels: ['Irradiancia Solar', 'Cobertura Nubes', 'Temperatura', 'Velocidad Viento'],
  datasets: [{
    label: 'Métricas Ambientales',
    data: [6.4, 22, 21, 4.8],
    backgroundColor: ['#2E5F99', '#2C8BB9', '#41B8D6', '#4BC0C0'],
    borderRadius: 10,
    borderSkipped: false,
  }],
};

const barChartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: true, text: 'Métricas Ambientales Clave', font: { size: 14 } }
  },
  scales: {
    x: { beginAtZero: true, grid: { display: false } },
    y: { beginAtZero: true, grid: { display: true } },
  }
};

import { useNavigate } from "react-router-dom";

const ResultsPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="results-preview-card">
      <h3>Resumen rápido del escaneo energético</h3>
      <div style={{height: '250px'}}>
        <Line data={lineChartData} options={{...barChartOptions, plugins: {legend: {display: true}}}} />
      </div>

      <div className="mini-summary" style={{marginTop: '1rem'}}>
        <p><b>Irradiancia Solar:</b> 6.4 kWh/m²/día</p>
        <p><b>Cobertura de Nubes:</b> 22%</p>
        <p><b>Temperatura promedio:</b> 21 °C</p>
        <p><b>Velocidad del viento:</b> 4.8 m/s</p>
      </div>

      <button
        className="see-more-button"
        onClick={() => navigate("/results")}
        style={{
          marginTop: '1.5rem',
          padding: '0.6rem 1.2rem',
          borderRadius: '6px',
          backgroundColor: '#9dcd66',
          border: 'none',
          color: '#0f172a',
          fontWeight: '700',
          cursor: 'pointer'
        }}
      >
        See More
      </button>
    </section>
  );
};

export default ResultsPreview;
