import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/home/HomePage';
import ServicesPage from './pages/services';
import ProjectsPage from './pages/projects';
import HybridPage from './pages/services/HybridPage';
import OnGridPage from './pages/services/OnGridPage';
import BessPage from './pages/services/BessPage';
import PumpPage from './pages/services/PumpPage';
import EvPage from './pages/services/EvPage';
import UpsPage from './pages/services/UpsPage';
import ControllerPage from './pages/services/ControllerPage';
import ProductsPage from './pages/products';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Give the page a tick to render before scrolling to the element
      const id = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(id);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services/hybrid" element={<HybridPage />} />
        <Route path="/services/ongrid" element={<OnGridPage />} />
        <Route path="/services/bess" element={<BessPage />} />
        <Route path="/services/pump" element={<PumpPage />} />
        <Route path="/services/ev" element={<EvPage />} />
        <Route path="/services/ups" element={<UpsPage />} />
        <Route path="/services/controller" element={<ControllerPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
