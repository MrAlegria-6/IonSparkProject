import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell} from 'recharts';
import {BarChart3, Users, Shield, Settings, HelpCircle, LogOut, Bell, Globe, CreditCard, History} from 'lucide-react';
import IonSparkSection from '../LandingPage/IonSparkSection';

import './Dashboard.css';


const Dashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [lineData, setLineData] = useState([
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
    "Project Name Data Analytics - Show More Text and Text",
    "Project Name Data Analytics - Show More Data Text",
    "Project Name Data Analytics - Show More Text"
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Acceso denegado. Por favor inicia sesión.');
      navigate('/');
    } else {
      // Obtener posts protegidos
      fetch('http://127.0.0.1:8000/posts/', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setPosts(data);
          // Puedes usar los datos si quieres actualizar la gráfica también
          console.log('Datos recibidos:', data);
        })
        .catch(err => {
          console.error('Error al obtener datos:', err);
        });
    }
  }, [navigate]);

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">
              <div className="logo-icon">
                <Globe size={20} />
              </div>
              <span className="logo-text">IonSpark</span>
            </div>
          </div>
        </div>
      </header>

      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-content">
            <div className="menu-section">
              <div className="menu-item active">
                <BarChart3 size={20} />
                <span>Dashboard</span>
              </div>
              <div className="menu-item">
                <Users size={20} />
                <span>Profile</span>
              </div>
              <div className="menu-item">
                <History size={20} />
                <span>Historial</span>
              </div>
              <div className="menu-item">
                <Bell size={20} />
                <span>Notifications</span>
              </div>
              <div className="menu-item">
                <Settings size={20} />
                <span>Settings</span>
              </div>
            </div>

            <div className="help-section">
              <h3 className="section-title">Help & Support</h3>
              <div className="menu-item">
                <CreditCard size={20} />
                <span>Plans</span>
              </div>
              <div className="menu-item">
                <Settings size={20} />
                <span>Services</span>
              </div>
            </div>

            <div className="logout-section">
              <div className="menu-item" onClick={() => {
                localStorage.removeItem('token');
                navigate('/');
              }}>
                <LogOut size={20} />
                <span>Logout</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="page-header">
            <h1 className="page-title">Last Inspection:</h1>
            <div className="page-subtitle">Your results</div>
          </div>

          {/* Chart Section */}
          <div className="chart-container">
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                  />
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
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="card-title">Overview</h3>
              <div className="pie-chart-container">
                <div className="pie-chart-wrapper">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={35}
                        outerRadius={60}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="pie-chart-center">
                    <span className="pie-chart-value">85%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-value primary">85%</div>
              <div className="stat-label">Performance</div>
            </div>

            <div className="stat-card">
              <div className="stat-value secondary">31%</div>
              <div className="stat-label">Success Rate</div>
              <div className="stat-description">
                Project Name Data Analytics shows that the most recent data from your monitoring applications shows that the process was successful and completed at 31%.
              </div>
            </div>
          </div>

          {/* Historial Section */}
          <div className="historial-section">
            <h3 className="section-title">Historial</h3>
            <div className="historial-list">
              {historialItems.map((item, index) => (
                <div key={index} className="historial-item">
                  {item}
                </div>
              ))}
              {/* Mostrar posts reales (opcional) */}
              {posts.map((post, i) => (
                <div key={i} className="historial-item">

                </div>
              ))}
            </div>
            <div className="historial-footer">
              <button className="see-more-btn">See more</button>
            </div>
          </div>
        </main>
      </div>
      <IonSparkSection />
    </div>
  );
};

export default Dashboard;
