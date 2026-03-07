import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Partners from './components/sections/Partners';
import Reviews from './components/sections/Reviews';
import Contact from './components/sections/Contact';
import HybridPage from './pages/services/HybridPage';
import OnGridPage from './pages/services/OnGridPage';
import BessPage from './pages/services/BessPage';
import PumpPage from './pages/services/PumpPage';
import EvPage from './pages/services/EvPage';
import UpsPage from './pages/services/UpsPage';
import ControllerPage from './pages/services/ControllerPage';

function MainPage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Partners />
      <Reviews />
      <Contact />
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services/hybrid" element={<HybridPage />} />
        <Route path="/services/ongrid" element={<OnGridPage />} />
        <Route path="/services/bess" element={<BessPage />} />
        <Route path="/services/pump" element={<PumpPage />} />
        <Route path="/services/ev" element={<EvPage />} />
        <Route path="/services/ups" element={<UpsPage />} />
        <Route path="/services/controller" element={<ControllerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
