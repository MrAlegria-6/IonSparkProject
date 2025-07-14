import React, { useState } from 'react';
import { MapPin, Download } from 'lucide-react';
import "./Historial.css";

const History = () => {
  const [scans] = useState([
    {
      id: 1,
      location: "North Industrial Zone",
      coordinates: "13.6929, -89.2182",
      date: "2025-06-23",
      time: "14:30",
      status: "Completed",
      solarIrradiance: 850,
      temperature: 32,
      cloudCover: 15,
      efficiency: 87,
      recommendation: "Highly Profitable"
    },
    {
      id: 2,
      location: "South Residential Sector",
      coordinates: "13.6785, -89.2245",
      date: "2025-06-23",
      time: "12:15",
      status: "Completed",
      solarIrradiance: 920,
      temperature: 35,
      cloudCover: 8,
      efficiency: 92,
      recommendation: "Excellent"
    },
    {
      id: 3,
      location: "Technology Park",
      coordinates: "13.6842, -89.2156",
      date: "2025-06-23",
      time: "10:45",
      status: "In Progress",
      solarIrradiance: 780,
      temperature: 29,
      cloudCover: 25,
      efficiency: 78,
      recommendation: "Moderately Profitable"
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'var(--color-emerald-500)';
      case 'In Progress': return '#f59e0b';
      case 'Failed': return '#ef4444';
      default: return 'var(--color-slate-500)';
    }
  };

  const getRecommendationColor = (rec) => {
    switch (rec) {
      case 'Excellent': return 'var(--color-emerald-400)';
      case 'Highly Profitable': return 'var(--color-emerald-500)';
      case 'Moderately Profitable': return '#f59e0b';
      case 'Low Profitability': return '#f97316';
      case 'Not Profitable': return '#ef4444';
      default: return 'var(--color-slate-500)';
    }
  };

  return (
    <div className="historial-container">
      <div className="page-header">
        <h1 className="page-title">Solar Scan Records</h1>
        <p className="page-subtitle">Feasibility analysis for solar panel installation</p>
      </div>

      {/* Statistics */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="card-title">Completed Scans</div>
          <div className="stat-value primary">2</div>
          <div className="stat-label">Finalized Analyses</div>
          <div className="stat-description">
            Scans successfully completed with full solar viability data
          </div>
        </div>

        <div className="stat-card">
          <div className="card-title">In Progress</div>
          <div className="stat-value secondary">1</div>
          <div className="stat-label">Active Scan</div>
          <div className="stat-description">
            Drone currently analyzing irradiance and atmospheric conditions
          </div>
        </div>

        <div className="stat-card">
          <div className="card-title">Average Irradiance</div>
          <div className="stat-value primary">850 W/m²</div>
          <div className="stat-label">Solar Radiation</div>
          <div className="stat-description">
            Average solar irradiance recorded in analyzed areas
          </div>
        </div>

        <div className="stat-card">
          <div className="card-title">Average Efficiency</div>
          <div className="stat-value secondary">86%</div>
          <div className="stat-label">Estimated Performance</div>
          <div className="stat-description">
            Estimated average efficiency for solar panel installations
          </div>
        </div>
      </div>

      {/* Scan History */}
      <div className="historial-section">
        <div className="table-header">
          <h2 className="card-title">Scan History</h2>
          <button className="export-btn">
            <Download size={16} />
            Export Data
          </button>
        </div>
        <div className="scans-table">
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Date/Time</th>
                <th>Status</th>
                <th>Irradiance</th>
                <th>Temperature</th>
                <th>Efficiency</th>
                <th>Recommendation</th>
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

export default History;
