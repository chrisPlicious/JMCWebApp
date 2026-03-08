import Layout from '../../components/layout/Layout';
import Hero from './Hero';
import About from './About';
import Partners from './Partners';
import Reviews from './Reviews';
import Contact from './Contact';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Partners />
      <Reviews />
      <Contact />
    </Layout>
  );
}
