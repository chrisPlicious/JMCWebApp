import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, LayoutGrid, Package } from 'lucide-react';
import { services } from '../../data/services';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close everything on navigation
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServicesActive = pathname.startsWith('/services') || pathname.startsWith('/products');

  const linkClass = (active: boolean) =>
    `text-md font-medium px-1.5 rounded-lg transition-colors ${
      active
        ? 'text-sky-500'
        : scrolled
          ? 'text-blue-950 hover:text-blue-400 hover:bg-white/5'
          : 'text-sky-500 hover:text-blue-400 hover:bg-white/5'
    }`;

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
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src="/Logos/JMC SOLAR.png" alt="JMC Solar Logo" />
          </div>
          <div className="leading-tight">
            <span className="font-montserrat text-base tracking-tight flex gap-1">
              <span className="font-black text-2xl text-blue-950">JMC</span>
              <span className="text-blue-700 text-2xl font-medium">SOLAR</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden text-xl lg:flex items-center gap-3">
          {/* Home */}
          <Link to="/" className={linkClass(pathname === '/')}>
            Home
          </Link>

          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`${linkClass(isServicesActive)} inline-flex items-center gap-1 cursor-pointer`}
            >
              Services
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown Panel */}
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                {/* Services overview */}
                <div className="px-4 pt-4 pb-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Overview
                  </p>
                  <Link
                    to="/services"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold text-navy-900 hover:bg-solar-50 hover:text-solar-600 transition-colors"
                  >
                    <LayoutGrid size={16} className="text-solar-500 shrink-0" />
                    All Services
                  </Link>
                </div>

                <div className="h-px bg-gray-100 mx-4" />

                {/* Individual service pages */}
                <div className="px-4 py-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Service Types
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {services.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.id}`}
                        className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                          pathname === `/services/${s.id}`
                            ? 'text-solar-600 bg-solar-50 font-medium'
                            : 'text-slate-600 hover:text-solar-600 hover:bg-solar-50'
                        }`}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-gray-100 mx-4" />

                {/* Products */}
                <div className="px-4 py-3">
                  <Link
                    to="/products"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold text-navy-900 hover:bg-solar-50 hover:text-solar-600 transition-colors"
                  >
                    <Package size={16} className="text-solar-500 shrink-0" />
                    Products
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Projects */}
          <Link to="/projects" className={linkClass(pathname === '/projects')}>
            Projects
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* <Link
            to="/#contact"
            className={`font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg
              ${scrolled
                ? 'bg-navy-800 text-white hover:bg-navy-700 hover:shadow-lg'
                : 'bg-white text-navy-900 hover:bg-gray-300 hover:shadow-lg'
               }`}
          >
            Get a Quote
          </Link> */}
          <a href="/#contact">
            <button
            
              className="font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg bg-navy-800 text-white hover:bg-navy-700"
            >
              Get a Quote
            </button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? 'text-navy-900 hover:bg-navy-100/50'
              : 'text-white hover:bg-white/10'
          }`}
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
          {/* Home */}
          <Link
            to="/"
            className={`text-base font-medium px-3 py-3 rounded-lg transition-colors border-b border-white/5 ${
              pathname === '/' ? 'text-solar-400' : 'text-white/80 hover:text-solar-400 hover:bg-white/5'
            }`}
          >
            Home
          </Link>

          {/* Services accordion */}
          <div className="border-b border-white/5">
            <button
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between text-base font-medium px-3 py-3 rounded-lg transition-colors ${
                isServicesActive ? 'text-solar-400' : 'text-white/80 hover:text-solar-400 hover:bg-white/5'
              }`}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="pl-3 pb-3 flex flex-col gap-0.5">
                {/* All Services link */}
                <Link
                  to="/services"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-solar-400 hover:bg-white/5 transition-colors"
                >
                  <LayoutGrid size={14} />
                  All Services
                </Link>

                <div className="h-px bg-white/10 my-1 mx-2" />

                {/* Individual services */}
                {services.map((s) => (
                  <Link
                    key={s.id}
                    to={`/services/${s.id}`}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      pathname === `/services/${s.id}`
                        ? 'text-solar-400 bg-white/5'
                        : 'text-white/70 hover:text-solar-400 hover:bg-white/5'
                    }`}
                  >
                    {s.title}
                  </Link>
                ))}

                <div className="h-px bg-white/10 my-1 mx-2" />

                {/* Products */}
                <Link
                  to="/products"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-white/80 hover:text-solar-400 hover:bg-white/5 transition-colors"
                >
                  <Package size={14} />
                  Products
                </Link>
              </div>
            )}
          </div>

          {/* Projects */}
          <Link
            to="/projects"
            className={`text-base font-medium px-3 py-3 rounded-lg transition-colors border-b border-white/5 ${
              pathname === '/projects' ? 'text-solar-400' : 'text-white/80 hover:text-solar-400 hover:bg-white/5'
            }`}
          >
            Projects
          </Link>

          <Link
            to="/#contact"
            className="mt-3 bg-solar-500 hover:bg-solar-400 text-navy-900 font-semibold text-base px-5 py-3 rounded-xl transition-all duration-200 text-center"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
