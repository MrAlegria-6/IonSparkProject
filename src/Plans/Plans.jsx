import React, { useState } from 'react';
import {
  Globe, Gem, Crown, Rocket, Check, ChevronLeft, ChevronRight
} from 'lucide-react';
import './Plans.css';

const Plans = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const plans = [
    {
      id: 1,
      icon: <Gem className="icon" />,
      type: "Basic",
      price: "$49",
      description: "Ideal para usuarios individuales",
      badge: "Mensual",
      features: [
        "1 usuario",
        "5 reportes al mes",
        "Soporte estándar",
        "Acceso a mapas",
        "Escaneos manuales"
      ]
    },
    {
      id: 2,
      icon: <Crown className="icon" />,
      type: "Premium",
      price: "$79",
      description: "Recomendado para empresas medianas",
      badge: "Mensual",
      features: [
        "5 usuarios",
        "Escaneos ilimitados",
        "Soporte prioritario",
        "Mapas avanzados",
        "Predicciones solares",
        "Exportación de datos"
      ],
      featured: true
    },
    {
      id: 3,
      icon: <Rocket className="icon" />,
      type: "Pro",
      price: "$129",
      description: "Para proyectos a gran escala",
      badge: "Mensual",
      features: [
        "Usuarios ilimitados",
        "Escaneo con dron automático",
        "API disponible",
        "Soporte 24/7",
        "Predicciones personalizadas"
      ]
    }
  ];

  const nextPlan = () => setCurrentIndex((prev) => (prev + 1) % plans.length);
  const prevPlan = () => setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">
              <div className="logo-icon"><Globe size={20} /></div>
              <span className="logo-text">IonSpark</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="main-layout">
        <main className="main-content" style={{ width: '100%' }}>
          <div className="carousel-container">
            <button className="nav-button left" onClick={prevPlan} aria-label="Plan anterior">
              <ChevronLeft className="chevron" />
            </button>

            <button className="nav-button right" onClick={nextPlan} aria-label="Plan siguiente">
              <ChevronRight className="chevron" />
            </button>

            <div className="cards-wrapper">
              {plans.map((plan, index) => {
                const isActive = index === currentIndex;
                const isNext = index === (currentIndex + 1) % plans.length;
                const isPrev = index === (currentIndex - 1 + plans.length) % plans.length;

                let cardClass = 'card';
                if (isActive) cardClass += ' active';
                else if (isNext) cardClass += ' next';
                else if (isPrev) cardClass += ' prev';
                else cardClass += ' hidden';

                return (
                  <div key={plan.id} className={cardClass} onClick={() => setCurrentIndex(index)}>
                    <div className={`card-inner ${plan.featured ? 'featured' : ''}`}>
                      {plan.badge && <div className="badge">{plan.badge}</div>}
                      <div className={`icon-container ${plan.featured ? 'highlight' : ''}`}>
                        {plan.icon}
                      </div>
                      <div className="type">{plan.type}</div>
                      <div className="price">{plan.price}</div>
                      <div className="description">{plan.description}</div>
                      <ul className="features">
                        {plan.features.map((f, i) => (
                          <li key={i}>
                            <Check className={`check-icon ${plan.featured ? 'highlight-text' : ''}`} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button className={`start-button ${plan.featured ? 'highlight' : ''}`}>
                        Get Started
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="indicators">
              {plans.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`indicator ${i === currentIndex ? 'active' : ''}`}
                />
              ))}
            </div>

            <div className="info">
              <h2>Plan {plans[currentIndex].type}</h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Plans;
