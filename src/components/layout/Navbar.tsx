import { useEffect, useState, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import type { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Partners', href: '#partners' },
  { label: 'Reviews',  href: '#reviews' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(href);
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveSection(href);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <img src="/Logos/JMC SOLAR.png" alt="JMC Solar Logo" />
          </div>
          <div className="leading-tight">
            <span className="font-montserrat text-base tracking-tight flex gap-1">
              <span className="font-black text-2xl text-blue-950">JMC</span>
              <span className="text-blue-700 text-2xl font-medium">SOLAR</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-md font-medium px-1.5 rounded-lg transition-colors 
                ${activeSection === item.href
                  ? 'text-blue-400 active'
                  : scrolled
                   ? 'text-blue-950 hover:text-blue-400 hover:bg-white/5'
                   : 'text-white hover:text-blue-400 hover:bg-white/5'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-solar-500 hover:bg-solar-400 text-navy-900 font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-navy-900/98 backdrop-blur-md border-t border-white/10`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-base font-medium px-3 py-3 rounded-lg transition-colors border-b border-white/5 last:border-0
                ${activeSection === item.href
                  ? 'text-solar-400'
                  : 'text-white/80 hover:text-solar-400 hover:bg-white/5'
                }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-3 bg-solar-500 hover:bg-solar-400 text-navy-900 font-semibold text-base px-5 py-3 rounded-xl transition-all duration-200 text-center"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
}