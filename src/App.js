import { Routes, Route } from "react-router-dom";
import Navbar from "../src/LandingPage/nabvar.js";
import Home from "./Pages/home.js";
import "../src/Styles/Landipage/navbar.css";
import "../src/Styles/Landipage/energyCarrousel.css";
import "../src/Styles/Landipage/energyServices.css";
import "../src/Styles/Landipage/Hero.css";
import "../src/Styles/Landipage/ourSolutions.css";
import "../src/Styles/Landipage/propellerSection.css";
import "../src/Styles/styles.css";


  



function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} /> 
            </Routes>
        </>
    );
}

export default App;