import { useEffect, useState } from 'react';
import solarBg from '../../assets/solar.jpg';
import { ArrowRight, ChevronDown, Star, Users, Zap } from 'lucide-react';
import Button from '../ui/Button';

const stats = [
  { value: '100%', label: 'Recommend Rate', icon: <Star size={20} /> },
  { value: '3.3K+', label: 'Facebook Followers', icon: <Users size={20} /> },
  { value: '6–100kW+', label: 'System Capacities', icon: <Zap size={20} /> },
  { value: '9+', label: 'Completed Projects', icon: <ArrowRight size={20} /> },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${solarBg})` }} />
      {/* <div className="absolute inset-0 bg-linear-to-b from-white/50 via-navy-900 to-navy-800 opacity-80" /> */}
      <div className="absolute inset-0 " />
      {/* Decorative sun rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-solar-500/10 border border-solar-500/30 text-solar-400 text-sm font-semibold px-4 py-2 rounded-full mb-8">
          <Zap size={14} fill="currentColor" />
          Renewable Energy Advocates · Ormoc City, Leyte
        </div>

        {/* Headline */}
        <h1
          className="text-white font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Future is{' '}
          <span className="text-solar-400 relative">
            Electric
            
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Professional Solar Installation Services in{' '}
          <span className="text-white font-semibold">Ormoc City, Leyte</span>
        </p>
        <p className="text-slate-400 text-base max-w-xl mx-auto mb-10">
          From residential rooftops to 100kW+ industrial solar farms — we make clean, free energy accessible for every Filipino.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="primary" size="lg" href="#contact">
            Get a Free Quote
            <ArrowRight size={18} />
          </Button>
          <Button variant="outline" size="lg" href="#projects">
            View Our Projects
          </Button>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-solar-400 flex justify-center mb-1">{stat.icon}</div>
              <div
                className="text-white font-black text-2xl lg:text-3xl"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-slate-400 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-solar-400 transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
