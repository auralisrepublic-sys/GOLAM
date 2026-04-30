import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Wind, 
  Droplets, 
  Layers, 
  GalleryVertical, 
  Box, 
  Maximize, 
  Monitor,
  Layout,
  Construction
} from 'lucide-react';

const services = [
  { icon: Building2, text: 'Intervención integral en edificios' },
  { icon: Droplets, text: 'Recupero de fachadas, hidro lavado y pintura' },
  { icon: Wind, text: 'Impermeabilización de terrazas' },
  { icon: Layers, text: 'Provisión y montaje de ALUMINIO COMPUESTO' },
  { icon: Box, text: 'Stock de material con entrega inmediata' },
  { icon: GalleryVertical, text: 'Montaje de placas de FENÓLICO SÓLIDO' },
  { icon: Monitor, text: 'Piel de vidrio y carpinterías de aluminio/hierro' },
  { icon: Construction, text: 'Estructuras metálicas y Marquesinas vidriadas' },
  { icon: Maximize, text: 'Impermeabilización de FRENTES INTEGRALES' },
  { icon: Layout, text: 'Revestimientos símil Hunter Douglas y parasoles' }
];

import { Building2 } from 'lucide-react';

export default function Services() {
  return (
    <section className="section-padding bg-[#fcfdff]" id="servicios">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 font-display font-bold text-blue-900 uppercase tracking-tighter">Nuestros Servicios</h2>
            <p className="text-zinc-500 max-w-xl font-light">
              Ofrecemos soluciones integrales para la arquitectura moderna, especializándonos en envolventes de alta tecnología y restauración estructural.
            </p>
          </motion.div>
          <div className="h-0.5 shrink-0 bg-blue-100 flex-1 hidden md:block mb-6 mx-12"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-8 rounded-[2rem] bg-white border border-blue-50 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
            >
              <div className="mb-6 p-4 w-fit rounded-2xl bg-blue-50 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                <s.icon size={28} />
              </div>
              <p className="text-lg font-medium leading-tight text-zinc-700 group-hover:text-blue-900 transition-colors">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
