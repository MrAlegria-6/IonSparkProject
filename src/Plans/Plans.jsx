import React, { useState } from 'react';
import {
  BarChart3, Users, Shield, Settings, HelpCircle, LogOut, Bell, Globe, CreditCard,
  ChevronLeft, ChevronRight, Crown, Gem, Rocket, Check
} from 'lucide-react';

import './Plans.css';

const Plans = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const plans = [
    {
      id: 1,
      icon: <Gem className="icon" />,
      type: "Basic",
      price: "$79",
      description: "Most popular plan",
      features: Array(5).fill("Most popular plan")
    },
    {
      id: 2,
      icon: <Crown className="icon" />,
      type: "Premium",
      price: "$79",
      description: "Most popular plan",
      badge: "Per Month",
      features: Array(6).fill("Most popular plan"),
      featured: true
    },
    {
      id: 3,
      icon: <Rocket className="icon" />,
      type: "Pro",
      price: "$79",
      description: "Most popular plan",
      features: Array(5).fill("Most popular plan")
    }
  ];

  const nextPlan = () => {
    setCurrentIndex((prev) => (prev + 1) % plans.length);
  };

  const prevPlan = () => {
    setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

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

      {/* Layout */}
      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-content">
            <div className="menu-section">
              <div className="menu-item">
                <BarChart3 size={20} />
                <span>Dashboard</span>
              </div>
              <div className="menu-item">
                <Users size={20} />
                <span>Profile</span>
              </div>
              <div className="menu-item">
                <Shield size={20} />
                <span>Network</span>
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
              <div className="menu-item active">
                <CreditCard size={20} />
                <span>Plans</span>
              </div>
              <div className="menu-item">
                <HelpCircle size={20} />
                <span>Help</span>
              </div>
            </div>

            <div className="logout-section">
              <div className="menu-item">
                <LogOut size={20} />
                <span>Logout</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="carousel-container">
            <button className="nav-button left" onClick={prevPlan}>
              <ChevronLeft className="chevron" />
            </button>

            <button className="nav-button right" onClick={nextPlan}>
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
