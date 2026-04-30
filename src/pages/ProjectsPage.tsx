import { motion } from 'motion/react';
import Projects from '../components/Projects';
import { MapPin, Building } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-display mb-6">Trayectoria y Obras</h1>
          <p className="text-zinc-500 text-xl max-w-2xl leading-relaxed">
            Un recorrido por los hitos arquitectónicos donde hemos dejado nuestra impronta mediante calidad y precisión técnica.
          </p>
        </div>
      </div>

      <Projects />

      <section className="section-padding bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl mb-12 text-center">Otros Trabajos Destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'IBM Martínez', loc: 'Martínez, Buenos Aires', desc: 'Revestimiento Cielorraso Corredor Central.' },
              { title: 'Toyota Argentina', loc: 'Nuñez, Olivos y River', desc: 'Cambio de Cartelería Institucional.' },
              { title: 'Santander Río', loc: 'Casa Matriz, Parque Lezama', desc: '3500 m2 de Aluminio Compuesto.' },
              { title: 'Sancor Seguros', loc: 'Sunchales, Santa Fe', desc: '1900 m2 de Placas Cementicias.' },
              { title: 'Museo del Bicentenario', loc: 'Capital Federal', desc: '800 m2 de Revestimiento AC.' },
              { title: 'Farmacity', loc: 'Múltiples Sucursales', desc: 'Revestimiento en Villa Crespo, Centro, Once.' },
            ].map((p, i) => (
              <div key={i} className="p-6 bg-white border border-zinc-200 rounded-2xl hover:border-blue-500 transition-colors">
                <div className="flex items-center gap-2 mb-3 text-blue-600">
                  <Building size={18} />
                  <span className="font-bold">{p.title}</span>
                </div>
                <div className="flex items-center gap-2 mb-4 text-xs text-zinc-400">
                  <MapPin size={12} />
                  <span>{p.loc}</span>
                </div>
                <p className="text-sm text-zinc-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
