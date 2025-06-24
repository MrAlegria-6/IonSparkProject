// src/LandingPage/page.js

import Carrusel from './Carrusel';
import ContactSection from './ContactSection';
import EolicSection from './EolicSection';
import HeroSection from './HeroSection';
import IonSparkSection from './IonSparkSection';
import ServicesSection from './ServicesSection';
import SolutionSection from './Solutionsection';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <SolutionSection />
      <EolicSection />
      <Carrusel />
      <ServicesSection />
      <ContactSection />
      <IonSparkSection />
    </>
  );
};

export default LandingPage;
