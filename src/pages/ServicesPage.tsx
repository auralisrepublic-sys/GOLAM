import { motion } from 'motion/react';
import Services from '../components/Services';
import { Settings, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <div className="bg-blue-600 text-white py-32 border-b border-blue-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-6 text-blue-200">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Settings size={24} className="animate-spin-slow" />
              </div>
              <span className="text-xs uppercase font-black tracking-[0.3em]">Nuestras Capacidades</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-display mb-8 tracking-tighter">Servicios <br /><span className="text-blue-100/50">Especializados</span></h1>
            <p className="text-blue-50 text-xl max-w-2xl leading-relaxed font-light">
              Desde la fabricación propia hasta el montaje en obra en todo el país, cubrimos cada etapa con precisión milimétrica.
            </p>
          </motion.div>
        </div>
        {/* Engineering-style background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <Services />

      <section className="section-padding bg-blue-50/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-zinc-900 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 md:p-20 text-white overflow-hidden relative">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl mb-8">Ventajas Competitivas</h2>
                <div className="space-y-6">
                  {[
                    'Montaje de Frentes Integrales en todo el país',
                    'Fabricación en taller propio con tecnología de punta',
                    'Stock permanente para entrega inmediata',
                    'Asesoramiento arquitectónico especializado'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle className="text-blue-500 shrink-0" size={24} />
                      <span className="text-lg text-zinc-300">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-600 aspect-video rounded-2xl border border-blue-500 shadow-2xl flex items-center justify-center p-0 overflow-hidden group">
                 <img 
                   src="https://lh3.googleusercontent.com/sitesv/AA5AbUCEK7o7-68gea_I8PiHo9WCMmxYdEr0EaHt0UmsRiXid58eSe0ePI2LkufkdxJJ5pvv1T4YtTafQY2AYKJLGn2qgehDVvCyxgrxfypDNfGIuakUZevGBbKCgvOEzQx0vN1ki7odcqa9B09ysWvlkbGC47zLA9TvSU44Pk-jwgWgJ0jyoPt8-NlVDzDTanSchx3zmzXZC3XEmEkP6xpEBxFvEHdgVrRYDH1k2F8=w1280" referrerPolicy="no-referrer" 
                   alt="Taller de Aluminio" 
                   className="w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white font-display font-black text-2xl tracking-tighter uppercase drop-shadow-md">Taller Propio</p>
                 </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-transparent"></div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
