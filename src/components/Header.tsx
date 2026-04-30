import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const headerBgStyle = isScrolled 
    ? 'bg-white/80 backdrop-blur-lg py-4 shadow-sm border-b border-zinc-200' 
    : (isHomePage ? 'bg-transparent py-6' : 'bg-white border-b border-zinc-100 py-4 shadow-sm');

  const textColorStyle = isScrolled || !isHomePage ? 'text-zinc-900' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgStyle}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Logo variant={isScrolled || !isHomePage ? 'dark' : 'light'} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                isScrolled || !isHomePage ? 'text-zinc-600 hover:text-blue-600' : 'text-zinc-300 hover:text-white'
              } ${location.pathname === link.href ? (isScrolled || !isHomePage ? 'text-blue-600' : 'text-white') : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact info shortcut */}
        <div className="hidden lg:block">
          <a 
            href="tel:+541163747529"
            className={`text-sm font-bold flex items-center gap-2 ${textColorStyle}`}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            +54 11-6374-7529
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} className="text-zinc-900" /> : <Menu size={28} className={textColorStyle} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 p-6 flex flex-col gap-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-bold uppercase tracking-widest text-lg ${
                  location.pathname === link.href ? 'text-blue-600' : 'text-zinc-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-zinc-100">
              <p className="text-xs text-zinc-400 font-black tracking-widest uppercase mb-2">Asistencia Inmediata</p>
              <p className="text-xl font-bold text-blue-600">+54 11-6374-7529</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
