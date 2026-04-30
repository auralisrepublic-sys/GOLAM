import { motion } from 'motion/react';
import { Phone, Mail, Clock, MessageSquare, User, Tag } from 'lucide-react';
import { useRef, useState, useEffect, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    emailjs.init('FFt_I-9kzc7EVd00s');
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    const serviceID = 'default_service';
    const templateID = 'template_wfdxofv';

    emailjs.sendForm(serviceID, templateID, formRef.current)
      .then(() => {
        alert('¡Enviado con éxito!');
        formRef.current?.reset();
      })
      .catch((err) => {
        alert('Error: ' + JSON.stringify(err));
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contacto" className="section-padding bg-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6">Contáctenos</h2>
            <p className="text-zinc-600 mb-8 max-w-md">
              Estamos listos para asesorarlo en su próximo proyecto. Nuestro equipo técnico responderá sus consultas con la mayor brevedad.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Teléfono</p>
                  <p className="font-semibold">+54 11-6374-7529</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="font-semibold text-wrap">golamrevestimientos@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <form ref={formRef} onSubmit={handleSubmit} id="form" className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="title" className="text-xs uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-2">
                  <Tag size={14} /> Asunto / Título
                </label>
                <input 
                  type="text" 
                  name="title" 
                  id="title" 
                  required
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="name" className="text-xs uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-2">
                  <User size={14} /> Nombre
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="time" className="text-xs uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-2">
                  <Clock size={14} /> Horario de contacto
                </label>
                <input 
                  type="text" 
                  name="time" 
                  id="time" 
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-xs uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-2">
                  <Mail size={14} /> Email comercial
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-2">
                  <MessageSquare size={14} /> Mensaje
                </label>
                <textarea 
                  name="message" 
                  id="message" 
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                id="button"
                disabled={isSending}
                className="w-full py-4 bg-[#4460AA] hover:bg-[#354c8a] disabled:bg-zinc-400 text-white font-bold rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                {isSending ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
