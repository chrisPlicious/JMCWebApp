import './App.css';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Partners from './components/sections/Partners';
import Reviews from './components/sections/Reviews';
import Contact from './components/sections/Contact';

function App() {
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

export default App;
