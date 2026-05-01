import { motion } from 'motion/react';
import { ExternalLink, Trophy } from 'lucide-react';

const standoutProjects = [
  {
    title: 'Hospital Fleni Escobar',
    image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUBBL6s2iuUjd3dWlGIY9ATUCxY0Y17EIGZr3QybVcpdBx4Jf7cowKrjG-Z7bD6pYxSq3xpBn0JmtKS0mrMEkxPuh5oStdXZIuweGrnOFcVtgURtd1eEOdjHhSyMiVz7mHu-LaFYal0sHODj93MonyXUY46Y6IshlHOeZP1R_3bb3sw3jpVt0kwOfy4=w1280',
    details: 'Fachadas exteriores y Marquesinas vidriadas (20.000 m2).',
    year: '2000'
  },
  {
    title: 'Hotel Sheraton Tucumán',
    image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUAhFnTFjfhcXpkqnrf3Xn-PO0MCwfrS5_u3aKRjnn3Y8HSE6wjL1nNagAqhl2fDtKVPGMZ7QB2fY_Vbv1H3itCxz-OKwRANqsbeY1wawSbTqrOR8w3sN-UYRXvAnVCty8PJgcSUUdZJp3EK1efoIYvCw_-dPYXaUJlTtSf0LgGMYmOW6uQavomT_tlh0xUh3VP_yz0piXvr_-LyUD0uy0HLcOmaURwsfYa7tgQ=w1280',
    details: 'Cenefas y Marquesinas Vidriadas sobre frente de acceso (1250 m2).',
    year: '2014'
  },
  {
    title: 'Santander Río Casa Matriz',
    image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUCEK7o7-68gea_I8PiHo9WCMmxYdEr0EaHt0UmsRiXid58eSe0ePI2LkufkdxJJ5pvv1T4YtTafQY2AYKJLGn2qgehDVvCyxgrxfypDNfGIuakUZevGBbKCgvOEzQx0vN1ki7odcqa9B09ysWvlkbGC47zLA9TvSU44Pk-jwgWgJ0jyoPt8-NlVDzDTanSchx3zmzXZC3XEmEkP6xpEBxFvEHdgVrRYDH1k2F8=w1280',
    details: 'Parque Lezama. Revestimiento de Aluminio Compuesto (3500 m2).',
    year: '2016'
  },
  {
    title: 'L’Avenue (Zaha Hadid)',
    image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUDmGAOgXJ5NvLsMLTa1rWMCZzc21g2xBeYKdtE60LA1nBkqflmGcDf4aaBAanyeYhkQx-XmouVjzm-d0_F3ZIAjwmO0G3e78SAVb_Dw3AHsjCKbN2OUq9Zkwrv8Mlq00kbDsF2uAKEoncc9ueUE6Ws9BaFpRhRc6WBdO-MHwgDTF4QC9JpHIXhejSpDDN-QkhgTkoCMNyLjzMlVwGdqMCKrSSi2B0B8IGjLzWQ=w1280',
    details: 'Revestimientos sobre fachada y terminaciones de terrazas.',
    year: 'Finalizado'
  },
  {
    title: 'Club Atlético River Plate',
    image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUBHedHI_Hsu1tFck2Ab-tcvHkSK8KMIgHUzPI_JKVHO_RZgNWmRu4EQvGDHrPhKc9_v0aJHuTu7Vw2k8P6Zw7EJ-BH_A3ymul-R5RucdrZUXXMlLMmadCRDvcY2NsDCePCniEaH08SySyPBzbcYoRkqkVo7llWTqbJNFTsgGTkYjkX_dPCi_siy4d2_5yZgVgXxnD_nPM4djK3ZjlnzUrDKQuNdtbF4jS6dWk4=w1280',
    details: 'Estadio Mâs Monumental. Revestimientos sobre Piel de Vidrio, Palcos y Bandera institucional.',
    year: '2023/2024',
    isLarge: true
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {standoutProjects.map((p, i) => (
            <motion.a
              key={i}
              href={p.image}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative flex flex-col rounded-[2rem] bg-zinc-800/50 border border-zinc-700/50 overflow-hidden hover:bg-zinc-800 transition-all duration-500 cursor-pointer shadow-xl shadow-black/5 ${
                'isLarge' in p && p.isLarge ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              {/* Image Container */}
              <div className="aspect-video w-full bg-zinc-900 overflow-hidden relative rounded-t-[2rem] hidden sm:block">
                {p.image ? (
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 sm:rounded-t-[2rem]"
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
                  <div className="flex flex-col gap-1">
                    <span className="text-blue-500 font-mono text-xs uppercase tracking-widest sm:hidden mb-2">{p.year}</span>
                    <h3 className="text-2xl sm:text-2xl leading-tight group-hover:text-blue-300 transition-colors uppercase font-black sm:font-bold">{p.title}</h3>
                  </div>
                  <ExternalLink size={18} className="text-zinc-600 group-hover:text-blue-400 transition-colors mt-1 hidden sm:block" />
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 hidden sm:block">{p.details}</p>
                
                {/* Mobile Button */}
                <div className="sm:hidden mt-4">
                  <div className="flex items-center justify-center gap-3 w-full py-5 bg-blue-600 rounded-full font-display font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">
                    Ver Imagen del Proyecto
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.a>
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
