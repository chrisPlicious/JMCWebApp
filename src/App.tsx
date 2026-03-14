import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import LoaderScreen from './components/ui/LoaderScreen';
import PageTransition from './components/ui/PageTransition';
import HomePage from './pages/home/HomePage';
import ServicesPage from './pages/services/ServiceIndex';
import ProjectsPage from './pages/projects/ProjectIndex';
import HybridPage from './pages/services/HybridPage';
import OnGridPage from './pages/services/OnGridPage';
import BessPage from './pages/services/BessPage';
import PumpPage from './pages/services/PumpPage';
import EvPage from './pages/services/EvPage';
import UpsPage from './pages/services/UpsPage';
import ControllerPage from './pages/services/ControllerPage';
import ProductsPage from './pages/products/ProductsIndex';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return () => clearTimeout(id);
    }
  }, [pathname, hash]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                   element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/services"           element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/projects"           element={<PageTransition><ProjectsPage /></PageTransition>} />
        <Route path="/services/hybrid"    element={<PageTransition><HybridPage /></PageTransition>} />
        <Route path="/services/ongrid"    element={<PageTransition><OnGridPage /></PageTransition>} />
        <Route path="/services/bess"      element={<PageTransition><BessPage /></PageTransition>} />
        <Route path="/services/pump"      element={<PageTransition><PumpPage /></PageTransition>} />
        <Route path="/services/ev"        element={<PageTransition><EvPage /></PageTransition>} />
        <Route path="/services/ups"       element={<PageTransition><UpsPage /></PageTransition>} />
        <Route path="/services/controller" element={<PageTransition><ControllerPage /></PageTransition>} />
        <Route path="/products"           element={<PageTransition><ProductsPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LoaderScreen />
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
