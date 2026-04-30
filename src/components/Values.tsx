import { motion } from 'motion/react';
import { Shield, Award, Sparkles, Factory, Truck, Building2, UserCheck, Settings } from 'lucide-react';

const values = [
  { icon: Shield, title: 'SERIEDAD', desc: 'Compromiso total con los plazos y la calidad acordada.' },
  { icon: Award, title: 'EXPERIENCIA', desc: 'Décadas en el mercado nacional con obras de gran envergadura.' },
  { icon: Sparkles, title: 'CALIDAD', desc: 'Excelencia en materiales y mano de obra especializada.' }
];

const highlights = [
  { icon: Building2, text: 'Montaje de Frentes Integrales' },
  { icon: Factory, text: 'Fabricación en taller propio' },
  { icon: Truck, text: 'Montajes en obras en todo el país' },
  { icon: Building2, text: 'Intervención integral en edificios' }
];

export default function Values() {
  return (
    <section className="section-padding bg-[#fcfdff] overflow-hidden" id="nosotros">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 font-display font-bold text-blue-900 uppercase tracking-tighter">Nuestros Valores</h2>
            <div className="grid gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                    <v.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-950 mb-1">{v.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="p-6 bg-white rounded-3xl border border-blue-100 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                    <h.icon size={32} />
                  </div>
                  <p className="font-bold text-xs uppercase tracking-widest text-blue-900">{h.text}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-blue-900 text-white rounded-[2rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
                  <UserCheck size={80} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck size={24} className="text-blue-400" />
                    <h4 className="text-lg font-bold uppercase tracking-tight">Personal Capacitado</h4>
                  </div>
                  <p className="text-sm text-blue-100 leading-relaxed font-light">
                    Capacitación mensual en Seguridad e Higiene, a cargo del Ing. Monetti; entrega de elementos de seguridad correspondientes.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-zinc-950 text-white rounded-[2rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
                  <Settings size={80} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings size={24} className="text-blue-500" />
                    <h4 className="text-lg font-bold uppercase tracking-tight">Depto. Técnico</h4>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light">
                    Estudio y desarrollo de obras a cotizar a cargo del Arquitecto Alejandro Marginet Campos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
