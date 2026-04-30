import { motion } from 'motion/react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <div className="bg-blue-600 text-white py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-display mb-6">Canales de Atención</h1>
            <p className="text-blue-100 text-xl max-w-xl mx-auto italic">
              "Para el estudio y desarrollo de las obras a cotizar."
            </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
      </div>

      <div className="py-20 bg-gradient-to-b from-blue-50/50 to-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 mb-20 text-blue-900 font-display">
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-blue-100 hover:border-blue-400 transition-colors">
               <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/20">
                  <Phone size={32} />
               </div>
               <h3 className="text-xl mb-2 font-bold uppercase tracking-tight">Llámenos</h3>
               <p className="text-zinc-500 text-sm mb-4">Atención comercial inmediata</p>
               <a href="tel:+541163747529" className="text-2xl font-black text-blue-600">+54 11-6374-7529</a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-blue-100 hover:border-blue-400 transition-colors">
               <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
                  <Mail size={32} />
               </div>
               <h3 className="text-xl mb-2 font-bold uppercase tracking-tight">Email</h3>
               <p className="text-zinc-500 text-sm mb-4">Consultas y presupuestos</p>
               <a href="mailto:golamrevestimientos@gmail.com" className="font-bold text-blue-900 break-all border-b-2 border-blue-200 hover:border-blue-600 transition-colors">golamrevestimientos@gmail.com</a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-blue-100 hover:border-blue-400 transition-colors">
               <div className="w-16 h-16 bg-blue-400 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-400/20">
                  <MapPin size={32} />
               </div>
               <h3 className="text-xl mb-2 font-bold uppercase tracking-tight">Ubicación</h3>
               <p className="text-zinc-500 text-sm mb-4">Buenos Aires - Argentina</p>
               <p className="font-bold text-blue-900">Montajes en todo el país</p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto p-12 bg-white rounded-[3rem] shadow-xl border border-blue-50">
            <h2 className="text-3xl text-center mb-12 font-display font-bold text-blue-900 uppercase tracking-tighter">Formulario de Contacto</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
