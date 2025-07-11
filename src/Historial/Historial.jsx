import React, { useState } from 'react';
import { MapPin, Download } from 'lucide-react';
import "./Historial.css"


const Historial = () => {
  const [scans] = useState([
    {
      id: 1,
      location: "Zona Industrial Norte",
      coordinates: "13.6929, -89.2182",
      date: "2025-06-23",
      time: "14:30",
      status: "Completado",
      solarIrradiance: 850,
      temperature: 32,
      cloudCover: 15,
      efficiency: 87,
      recommendation: "Altamente Rentable"
    },
    {
      id: 2,
      location: "Sector Residencial Sur",
      coordinates: "13.6785, -89.2245",
      date: "2025-06-23",
      time: "12:15",
      status: "Completado",
      solarIrradiance: 920,
      temperature: 35,
      cloudCover: 8,
      efficiency: 92,
      recommendation: "Excelente"
    },
    {
      id: 3,
      location: "Parque Tecnológico",
      coordinates: "13.6842, -89.2156",
      date: "2025-06-23",
      time: "10:45",
      status: "En Proceso",
      solarIrradiance: 780,
      temperature: 29,
      cloudCover: 25,
      efficiency: 78,
      recommendation: "Moderadamente Rentable"
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completado': return 'var(--color-emerald-500)';
      case 'En Proceso': return '#f59e0b';
      case 'Fallido': return '#ef4444';
      default: return 'var(--color-slate-500)';
    }
  };

  const getRecommendationColor = (rec) => {
    switch (rec) {
      case 'Excelente': return 'var(--color-emerald-400)';
      case 'Altamente Rentable': return 'var(--color-emerald-500)';
      case 'Moderadamente Rentable': return '#f59e0b';
      case 'Poco Rentable': return '#f97316';
      case 'No Rentable': return '#ef4444';
      default: return 'var(--color-slate-500)';
    }
  };

  return (
    <div className="historial-container">
      <div className="page-header">
        <h1 className="page-title">Registro de Escaneos Solares</h1>
        <p className="page-subtitle">Análisis de viabilidad para instalación de paneles solares</p>
      </div>

      {/* Estadísticas */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="card-title">Escaneos Completados</div>
          <div className="stat-value primary">2</div>
          <div className="stat-label">Análisis finalizados</div>
          <div className="stat-description">
            Escaneos completados exitosamente con datos completos de viabilidad solar
          </div>
        </div>

        <div className="stat-card">
          <div className="card-title">En Proceso</div>
          <div className="stat-value secondary">1</div>
          <div className="stat-label">Escaneo activo</div>
          <div className="stat-description">
            Drone realizando análisis de irradiancia y condiciones atmosféricas
          </div>
        </div>

        <div className="stat-card">
          <div className="card-title">Irradiancia Promedio</div>
          <div className="stat-value primary">850 W/m²</div>
          <div className="stat-label">Radiación solar</div>
          <div className="stat-description">
            Promedio de irradiancia solar registrada en las áreas analizadas
          </div>
        </div>

        <div className="stat-card">
          <div className="card-title">Eficiencia Promedio</div>
          <div className="stat-value secondary">86%</div>
          <div className="stat-label">Rendimiento estimado</div>
          <div className="stat-description">
            Eficiencia promedio estimada para instalaciones de paneles solares
          </div>
        </div>
      </div>

      {/* Historial de escaneos */}
      <div className="historial-section">
        <div className="table-header">
          <h2 className="card-title">Historial de Escaneos</h2>
          <button className="export-btn">
            <Download size={16} />
            Exportar Datos
          </button>
        </div>
        <div className="scans-table">
          <table>
            <thead>
              <tr>
                <th>Ubicación</th>
                <th>Fecha/Hora</th>
                <th>Estado</th>
                <th>Irradiancia</th>
                <th>Temperatura</th>
                <th>Eficiencia</th>
                <th>Recomendación</th>
              </tr>
            </thead>
            <tbody>
              {scans.map((scan) => (
                <tr key={scan.id}>
                  <td>
                    <div className="location-cell">
                      <MapPin size={16} />
                      <div>
                        <div className="location-name">{scan.location}</div>
                        <div className="coordinates">{scan.coordinates}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="datetime-cell">
                      <div>{scan.date}</div>
                      <div className="time">{scan.time}</div>
                    </div>
                  </td>
                  <td>
                    <span
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(scan.status) }}
                    >
                      {scan.status}
                    </span>
                  </td>
                  <td>{scan.solarIrradiance} W/m²</td>
                  <td>{scan.temperature}°C</td>
                  <td>
                    <div className="efficiency-cell">
                      <div className="efficiency-bar">
                        <div
                          className="efficiency-fill"
                          style={{ width: `${scan.efficiency}%` }}
                        ></div>
                      </div>
                      <span>{scan.efficiency}%</span>
                    </div>
                  </td>
                  <td>
                    <span
                      className="recommendation-badge"
                      style={{ color: getRecommendationColor(scan.recommendation) }}
                    >
                      {scan.recommendation}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Historial;
