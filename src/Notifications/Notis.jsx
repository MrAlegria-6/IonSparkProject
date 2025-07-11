import React from 'react';
import { Sun, Wind, Thermometer } from 'lucide-react';
import './Notis.css';

const Notis = () => {
  const notificaciones = [
    {
      id: 1,
      title: 'Análisis de terreno completado',
      description: 'El análisis del terreno en San Juan Opico ha concluido. Se recomienda la integración de energía solar.',
      image: '/logo.svg',
      icon: <Sun size={24} color="#FACC15" />
    },
    {
      id: 2,
      title: 'Potencial para energía eólica',
      description: 'El terreno en Colonia Tecpán presenta condiciones favorables para instalar un parque eólico.',
      image: '/logo.svg',
      icon: <Wind size={24} color="#4ADE80" />
    },
    {
      id: 3,
      title: 'Recomendación: Instalación geotérmica',
      description: 'El análisis geotérmico sugiere que se puede integrar energía geotérmica en el área de Ahuachapán.',
      image: '/logo.svg',
      icon: <Thermometer size={24} color="#FB923C" />
    },
    {
      id: 4,
      title: 'Verificación de viabilidad',
      description: 'El terreno en colonia Villa Tzuchi ha sido verificado como apto para la integración de energía renovable.',
      image: '/logo.svg',
      icon: <Sun size={24} color="#FACC15" />
    },
  ];

  return (
    <div className="notis-main">
      <h1 className="notis-title-header">Notificaciones</h1>

      <div className="notis-card-list">
        {notificaciones.map((noti) => (
          <div key={noti.id} className="notis-card">
            <img src={noti.image} alt="icono" className="notis-avatar" />
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
