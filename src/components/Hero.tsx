import { motion } from 'motion/react';
import { ArrowRight, Drill, Ruler, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-zinc-950">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Líderes en el Mercado Nacional
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display text-white mb-6 leading-[0.9] tracking-tight">
            GOLAM <br /> <span className="text-zinc-500 text-5xl md:text-7xl">REVESTIMIENTOS</span>
          </h1>
          
          <p className="text-zinc-400 text-xl mb-10 max-w-lg leading-relaxed">
            Especialistas en fachadas de alta complejidad, aluminio compuesto e intervenciones integrales que transforman la arquitectura urbana.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contacto"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all hover:scale-105"
            >
              Consultar Proyecto <ArrowRight size={20} />
            </Link>
            <Link 
              to="/servicios"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all"
            >
              Ver Servicios
            </Link>
          </div>

          <div className="mt-16 flex gap-12 border-t border-white/5 pt-8">
            <div>
              <p className="text-3xl font-display font-bold text-white tracking-tight">20+</p>
              <p className="text-xs text-zinc-500 uppercase font-black tracking-widest mt-1">Años de Exp.</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white tracking-tight">500+</p>
              <p className="text-xs text-zinc-500 uppercase font-black tracking-widest mt-1">Obras Realizadas</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white tracking-tight">100%</p>
              <p className="text-xs text-zinc-500 uppercase font-black tracking-widest mt-1">Compromiso</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-transparent to-transparent z-10"></div>
          
          {/* Main Visual Placeholder */}
          <div className="w-full aspect-square rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl relative">
             <img 
               src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" 
               alt="Arquitectura Corporativa"
               className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
             <p className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-500 font-mono text-[10px] uppercase tracking-tighter">[ Imagen Principal de Obra ]</p>
          </div>

          {/* Floating info card */}
          <div className="absolute -bottom-6 -left-6 p-6 glass-card rounded-2xl bg-white text-zinc-900 z-20 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <HardHat size={24} />
              </div>
              <div>
                <p className="font-bold text-sm">Personal Certificado</p>
                <p className="text-xs text-zinc-500">Capacitado en Obra - Art & Normas IRAM</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
