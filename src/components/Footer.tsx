import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="block mb-6">
              <Logo className="h-10 opacity-80 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-sm leading-relaxed mb-8">
              Líderes en soluciones de fachadas y revestimientos de aluminio compuesto en Argentina. Calidad, seriedad y experiencia que respaldan cada proyecto.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navegación</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/proyectos" className="hover:text-white transition-colors">Obras Realizadas</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Servicios</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Aluminio Compuesto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fenólico Sólido</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Piel de Vidrio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Impermeabilización</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Estructuras Metálicas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contacto Central</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Mail size={16} className="shrink-0 text-blue-500" />
                <span className="break-all">golamrevestimientos@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="shrink-0 text-blue-500" />
                <span>+54 11-6374-7529</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="shrink-0 text-blue-500" />
                <span>Buenos Aires, Argentina <br /> Montajes en todo el país</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Golam Revestimientos. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
