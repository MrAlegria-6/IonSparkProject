import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [lineData] = useState([
    { name: '10', value: 20 },
    { name: '20', value: 35 },
    { name: '30', value: 25 },
    { name: '40', value: 45 },
    { name: '50', value: 30 },
    { name: '60', value: 55 },
    { name: '70', value: 40 },
    { name: '80', value: 65 },
    { name: '90', value: 50 },
    { name: '100', value: 70 },
  ]);

  const pieData = [
    { name: 'Completed', value: 85, color: '#10B981' },
    { name: 'Remaining', value: 15, color: '#374151' }
  ];

  const historialItems = [
    "Project A completed successfully",
    "Inspection B pending analysis",
    "Deployment C initialized"
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Acceso denegado. Por favor inicia sesión.');
      navigate('/');
    } else {
      fetch('http://127.0.0.1:8000/posts/', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setPosts(data);
        })
        .catch(err => {
          console.error('Error al obtener datos:', err);
        });
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      {/* Header vacío removido */}
      <div className="page-header">
        <h1 className="page-title">Última Inspección</h1>
        <div className="page-subtitle">Tus Resultados</div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
            <YAxis hide />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#10B981' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3 className="card-title">Overview</h3>
          <div className="pie-chart-wrapper">
            <ResponsiveContainer width="100%" height={120}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={50}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="pie-center-text">85%</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-value primary">85%</div>
          <div className="stat-label">Performance</div>
          <div className="stat-description">
            El análisis muestra que el 85% del proceso fue exitoso en la última ejecución.
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-value secondary">31%</div>
          <div className="stat-label">Success Rate</div>
          <div className="stat-description">
            El análisis muestra que el 31% del proceso fue exitoso en la última ejecución.
          </div>
        </div>
      </div>

      <div className="historial-section">
        <h3>Historial</h3>
        <div className="historial-list">
          {historialItems.map((item, i) => (
            <div key={i} className="historial-item">{item}</div>
          ))}
        </div>

        {/* Botón para ir a Resultados */}
        <button
          className="see-more-btn"
          onClick={() => navigate('/results')}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
