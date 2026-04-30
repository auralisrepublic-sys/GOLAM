import { motion } from 'motion/react';
import { ExternalLink, Trophy } from 'lucide-react';

const standoutProjects = [
  {
    title: 'Aeropuertos Argentina 2000',
    image: '/regenerated_image_1777583820216.png',
    details: 'Aeroparque Jorge Newbery. Revestimiento de aluminio compuesto, cielorrasos y mangas de embarque (3200 m2).',
    year: '1999/2000'
  },
  {
    title: 'Hospital Fleni Escobar',
    image: '/regenerated_image_1777583819319.png',
    details: 'Fachadas exteriores y Marquesinas vidriadas (20.000 m2).',
    year: '2000'
  },
  {
    title: 'Hotel Sheraton Tucumán',
    image: '/regenerated_image_1777583821443.png',
    details: 'Cenefas y Marquesinas Vidriadas sobre frente de acceso (1250 m2).',
    year: '2014'
  },
  {
    title: 'Santander Río Casa Matriz',
    image: '/regenerated_image_1777583822119.png',
    details: 'Parque Lezama. Revestimiento de Aluminio Compuesto (3500 m2).',
    year: '2016'
  },
  {
    title: 'Club Atlético River Plate',
    image: '/regenerated_image_1777583823283.png',
    details: 'Revestimientos sobre Piel de Vidrio, Palcos y Bandera institucional.',
    year: 'Proceso/Finalizado'
  },
  {
    title: 'L’Avenue (Zaha Hadid)',
    image: '/regenerated_image_1777583824096.png',
    details: 'Revestimientos sobre fachada y terminaciones de terrazas.',
    year: 'Finalizado'
  }
];

const references = [
  'IBM Martínez', 'Toyota Argentina', 'Clarín / Claro', 'Farmacity', 'McDonalds', 'Swiss Medical', 'BMW / Hilton', 'Burger King', 'Coto', 'Banco Credicoop'
];

export default function Projects() {
  return (
    <section className="section-padding bg-zinc-900 text-white overflow-hidden" id="proyectos">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="text-yellow-500" size={24} />
            <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">Trayectoria Impecable</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">Obras Destacadas</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {standoutProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col rounded-3xl bg-zinc-800/50 border border-zinc-700/50 overflow-hidden hover:bg-zinc-800 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-video w-full bg-zinc-900 overflow-hidden relative">
                {p.image ? (
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                    <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-tighter">[ Imagen de Obra ]</p>
                  </div>
                )}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-blue-600 font-mono text-[10px] rounded-full text-white">{p.year}</span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl leading-tight group-hover:text-blue-300 transition-colors">{p.title}</h3>
                  <ExternalLink size={18} className="text-zinc-600 group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{p.details}</p>
              </div>
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <div className="pt-16 border-t border-zinc-800">
          <h3 className="text-xl mb-12 text-center text-zinc-400">Clientes que confían en nosotros</h3>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-50 contrast-125">
            {references.map((r, i) => (
              <span key={i} className="text-2xl font-display font-black tracking-tighter opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
