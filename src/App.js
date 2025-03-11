import './App.scss';
import { useState, useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particles from './utils.js/particles';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navBar';


function App() {
  const [init, setInit] = useState(false);

  const location = useLocation();
  console.log(location);

  const renderparticlesJsInHomePage = location.pathname === "/";


  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App">
   
    {renderparticlesJsInHomePage && init && (
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={particles} />
    )}
     <Navbar />
    <div className="App_main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </div>
  
  );
}

export default App;
