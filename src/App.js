import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Description from './components/content/Description';
import Intro from './components/content/Intro';
import Projects from './components/content/Projects';
import Frame from './components/Frame';
import NavMenu from './components/NavMenu';
import NoiseBG from './components/threeBG/NoiseBG';
import { useState, useEffect } from "react";
import ProjectsMenu from './components/content/ProjectsMenu';

function App() {
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {visible &&
        <Intro />
      }
      <header>
        <div className='text-white fixed left-5 z-50 select-none'>
          <h1 className='text-2xl'>
            Juan Pablo Amaya García
          </h1>
          <span className='text-md'>Egresado // Desarrollador</span>
        </div>
      </header>

      <body>
        <div className='overflow-hidden'>
          <div>
            <div className='fixed z-40 h-16 w-screen top-0 bg-black/80'></div>
            <div className='fixed z-40 h-5 w-screen bottom-0 bg-black/80'></div>
          </div>
          <Frame />

          <div className='fixed inset-5 top-16 z-30'>
            <NoiseBG />
            <NavMenu />
          </div>

          <main>
            <AnimatePresence>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Description />} />
                <Route path="/proyectos" element={<ProjectsMenu />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </body >
    </div >
  );
}

export default App;
