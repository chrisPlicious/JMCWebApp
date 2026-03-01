import { type MouseEvent } from 'react';
import { Phone, Mail, MapPin, Facebook, Zap, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'About Us',    href: '#about' },
  { label: 'Services',    href: '#services' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Our Partners',href: '#partners' },
  { label: 'Reviews',     href: '#reviews' },
  { label: 'Contact',     href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-solar-500 rounded-lg flex items-center justify-center">
                <Zap size={20} className="text-navy-900" fill="currentColor" />
              </div>
              <div>
                <span className="text-white font-black text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  JMC Solar PH
                </span>
                <span className="block text-solar-400 text-[10px] font-medium tracking-widest uppercase">
                  Future is Electric
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Renewable energy advocates serving Ormoc City and Eastern Visayas. Providing free and clean energy for every Filipino home, farm, and business.
            </p>
            <a
              href="https://www.facebook.com/JMCSolarPH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
            >
              <Facebook size={18} />
              <span>JMC Solar PH</span>
              <span className="text-slate-500 text-xs">(3,300+ Followers)</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-solar-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="text-solar-500/50 group-hover:text-solar-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-solar-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+639175088220" className="text-slate-400 hover:text-white transition-colors text-sm">
                  0917 508 8220
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-solar-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:jmcsolarph@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm break-all">
                  jmcsolarph@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-solar-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  Lilia Avenue, Cogon,<br />
                  Ormoc City, Leyte 6541<br />
                  Philippines
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} JMC Solar PH. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Renewable Energy Advocates · Ormoc City, Leyte, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
