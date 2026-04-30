import Hero from '../components/Hero';
import Values from '../components/Values';
import Services from '../components/Services';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      {/* Short Experience Section */}
      <section className="py-20 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Expertos en soluciones integrales</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-10">
            Con más de 20 años de trayectoria, brindamos servicios de alta calidad en revestimientos, carpintería y restauración de edificios en todo el país.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/nosotros" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Conocer más sobre nosotros <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-zinc-50">
        <Services />
      </div>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6 leading-tight">¿Tiene un proyecto en mente?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Consulte con nuestro departamento técnico para el desarrollo y cotización de su obra.
            </p>
            <Link to="/contacto" className="px-8 py-4 bg-white text-blue-900 rounded-xl font-bold inline-block hover:scale-105 transition-transform">
              Contactar Ahora
            </Link>
          </div>
          <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-blue-200">Asesoramiento Técnico</span>
                <span className="font-bold">Incluido</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-blue-200">Presupuestos</span>
                <span className="font-bold">Entrega Inmediata</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200">Cobertura</span>
                <span className="font-bold">Todo el País</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
