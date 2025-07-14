import React from 'react';
import { Sun, Wind, Thermometer } from 'lucide-react';
import './Notis.css';

const Notis = () => {
  const notifications = [
    {
      id: 1,
      title: 'Terrain Analysis Completed',
      description: 'The terrain analysis in San Juan Opico has been completed. Integration of solar energy is recommended.',
      image: '/logo.svg',
      icon: <Sun size={24} color="#FACC15" />
    },
    {
      id: 2,
      title: 'Potential for Wind Energy',
      description: 'The land in Colonia Tecpán shows favorable conditions for installing a wind farm.',
      image: '/logo.svg',
      icon: <Wind size={24} color="#4ADE80" />
    },
    {
      id: 3,
      title: 'Recommendation: Geothermal Installation',
      description: 'Geothermal analysis suggests that geothermal energy can be integrated in the Ahuachapán area.',
      image: '/logo.svg',
      icon: <Thermometer size={24} color="#FB923C" />
    },
    {
      id: 4,
      title: 'Feasibility Verified',
      description: 'The land in Villa Tzuchi has been verified as suitable for renewable energy integration.',
      image: '/logo.svg',
      icon: <Sun size={24} color="#FACC15" />
    },
  ];

  return (
    <div className="notis-main">
      <h1 className="notis-title-header">Notifications</h1>

      <div className="notis-card-list">
        {notifications.map((noti) => (
          <div key={noti.id} className="notis-card">
            <img src={noti.image} alt="icon" className="notis-avatar" />
            <div className="notis-card-content">
              <div className="notis-icon">{noti.icon}</div>
              <h3 className="notis-title">{noti.title}</h3>
              <p className="notis-description">{noti.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notis;
