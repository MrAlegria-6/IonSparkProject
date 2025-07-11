import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Globe } from 'lucide-react';
import './AdminDash.css';

const AdminDash = () => {
  const lineData = [
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
  ];

  const pieData = [
    { name: 'Completed', value: 63, color: '#10B981' },
    { name: 'Remaining', value: 37, color: '#374151' }
  ];

  const historialItems = [
    "Project Name Data Analytics - Show More Text and Text",
    "Project Name Data Analytics - Show More Data Text",
    "Project Name Data Analytics - Show More Text"
  ];

  return (
    <div className="admin-dash-container">
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
          <div className="header-right">
            <nav className="nav">
              <a href="#" className="nav-link active">Home</a>
              <a href="#" className="nav-link">Dashboard</a>
              <a href="#" className="nav-link">Results</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="page-header">
          <h1 className="page-title">Last Inspection:</h1>
          <div className="page-subtitle">Results</div>
        </div>

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
                  <span className="pie-chart-value">63%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-value primary">74%</div>
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

        <div className="historial-section">
          <h3 className="section-title">Historial</h3>
          <div className="historial-list">
            {historialItems.map((item, index) => (
              <div key={index} className="historial-item">
                {item}
              </div>
            ))}
          </div>
          <div className="historial-footer">
            <button className="see-more-btn">See more</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Globe size={16} />
              </div>
              <span>IonSpark</span>
            </div>
          </div>
          <div className="footer-right">
            <div>Contact Us</div>
            <div>About us</div>
            <div>Privacy Policy</div>
            <div>About us</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminDash;
