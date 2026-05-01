import { motion } from 'motion/react';
import Values from '../components/Values';
import { UserCheck, ShieldCheck, Mail, Phone, Award } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <div className="bg-blue-900 text-white py-32 mb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-display mb-8 tracking-tighter">Sobre <span className="text-blue-400">Nosotros</span></h1>
            <p className="text-blue-100 text-xl max-w-2xl leading-relaxed font-light">
              Lideramos la industria de los revestimientos en Argentina mediante una fusión impecable de <span className="font-bold text-white uppercase text-sm tracking-widest bg-blue-800 px-2 py-1 rounded">Ingeniería</span> y <span className="font-bold text-white uppercase text-sm tracking-widest bg-blue-800 px-2 py-1 rounded">Arquitectura</span>.
            </p>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/3"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <Values />

      <section className="section-padding bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://lh3.googleusercontent.com/sitesv/AA5AbUDmGAOgXJ5NvLsMLTa1rWMCZzc21g2xBeYKdtE60LA1nBkqflmGcDf4aaBAanyeYhkQx-XmouVjzm-d0_F3ZIAjwmO0G3e78SAVb_Dw3AHsjCKbN2OUq9Zkwrv8Mlq00kbDsF2uAKEoncc9ueUE6Ws9BaFpRhRc6WBdO-MHwgDTF4QC9JpHIXhejSpDDN-QkhgTkoCMNyLjzMlVwGdqMCKrSSi2B0B8IGjLzWQ=w1280')] bg-cover bg-center grayscale"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-8 border-l-4 border-blue-600 pl-4 font-display font-bold text-white">Personal Capacitado</h2>
              <div className="space-y-6">
                <div className="p-6 bg-blue-800/50 backdrop-blur-sm rounded-2xl border border-blue-700 shadow-sm flex gap-4 hover:border-blue-400 transition-colors">
                  <UserCheck className="text-blue-300 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-2 text-white">Seguridad e Higiene</h4>
                    <p className="text-sm text-blue-100 leading-relaxed">Se realiza una capacitación mensual a cargo del Ing. Monetti, asegurando el cumplimiento de todas las normas vigentes.</p>
                  </div>
                </div>
                <div className="p-6 bg-blue-800/50 backdrop-blur-sm rounded-2xl border border-blue-700 shadow-sm flex gap-4 hover:border-blue-400 transition-colors">
                  <Award className="text-blue-300 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-2 text-white">Equipamiento Normado</h4>
                    <p className="text-sm text-blue-100 leading-relaxed">Todo el personal cuenta con los elementos de seguridad correspondientes y certificados de ART.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-8 border-l-4 border-blue-600 pl-4 font-display font-bold text-white">Referentes Comerciales</h2>
              <ul className="space-y-3">
                {[
                  { name: 'Dicky SACIFICA', lead: 'Ing. Máximo Aldunate', tel: '4641.6073' },
                  { name: 'CG SA', lead: 'Ing. Alejo', tel: '4250-7666' },
                  { name: 'Estudio IMA Architects', lead: 'Arq. Mateo Sikorski', tel: '4733-3307' },
                  { name: 'Carpeal S.A.', lead: 'Arq. Martín Carrizo', tel: '11-4044-9214' }
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-center p-4 bg-blue-800/30 backdrop-blur-sm rounded-xl border border-blue-700 shadow-sm hover:shadow-md hover:border-blue-400 transition-all">
                    <div>
                      <span className="block font-bold text-white">{item.name}</span>
                      <span className="text-xs text-blue-300 font-medium italic">{item.lead}</span>
                    </div>
                    <span className="font-mono text-xs bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full border border-blue-700">{item.tel}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
