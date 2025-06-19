import Navbar from "../LandingPage/nabvar.js";
import Example from "../LandingPage/hero.js";
import OurSolutions from "../LandingPage/OurSolutions.js";
import PropellerSection from "../LandingPage/PropellerSection.js";
import EnergyCarrousel from "../LandingPage/EnergyCarrousel.js";
import EnergyServices from "../LandingPage/EnergyServices.js";



const Home = () => {
  return (
    <div>
      <Navbar />
      <Example />
      <OurSolutions/>
      <PropellerSection/>
      <EnergyCarrousel/>
      <EnergyServices/>
      
    </div>
  );
};

export default Home;
