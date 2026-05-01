import React from 'react';
import { motion } from 'motion/react';
import Projects from '../components/Projects';
import { MapPin, Building } from 'lucide-react';

export default function ProjectsPage() {
  const [showAll, setShowAll] = React.useState(false);

  const fullProjectList = [
    "Colegio South Creek School Terralagos: Revestimiento exterior de la ampliación del colegio, colocación de Durlock interior pintado con esmalte satinado (etapa 2) y carpintería y rejas exteriores e interiores.",
    "Clínica Fleni Escobar, revestimiento de aluminio compuesto en fachadas exteriores y Marquesinas vidriadas en accesos principales, 20.000 m2, año 2000. Ruta panamericana km 51, Buenos Aires. Trabajos realizados para SADE y Acristal S.A.",
    "Fundación Pérez Companc, revestimiento de aluminio compuesto en cenefa superior, 2450 m2, año 2000. Ruta Panamericana km 52,5, Buenos Aires. Trabajos realizados para SADE y Acristal S.A.",
    "IBM Martínez. Revestimiento de Aluminio Compuesto cielorraso de Corredor central, 200m2, año 2015 H. Yrigoyen 2149, Martínez, Buenos Aires Trabajos realizados directamente para IBM Argentina.",
    "Farmacity, revestimiento de aluminio compuesto en diferentes sucursales, años 2010 a 2012 Sucursales Villa Crespo, Paternal, Tribunales, Once y Centro",
    "COTO, revestimientos de aluminio compuesto. Sucursales Castelar, Temperley y Morón. Trabajos realizados para la Empresa Dicky",
    "Museo del Bicentenario, revestimiento de aluminio compuesto, 800 m2. Calle Balcarce 50, Capital Federal. Trabajos realizados para la Empresa Carpeal S.A.",
    "Claro Argentina, revestimiento de aluminio compuesto. Belgrano, Merlo y Avellaneda. Trabajos realizados para las Empresas Identidad y Arqcrópolis Construcciones.",
    "TOYOTA ARGENTINA, Cambio de Cartelería Institucional, año 2015 y 2016. Sucursales Nuñez, Olivos y River. Trabajos realizados para la Empresa Identidad.",
    "BANCO CREDICOOP, revestimiento de aluminio compuesto, 70 m2 Sucursal Centro, San Martin 453, Capital Federal Trabajos realizados para EGEA Construcciones",
    "Mc DONALDS Argentina, revestimiento de aluminio compuesto. Sucursales Olivos, Centro y Belgrano Trabajos realizados para la Empresa Condag Construcciones",
    "SWISS MEDICAL, revestimiento en aluminio compuesto, 130 m2 Sucursal Microcentro Trabajos realizados para la Empresa Identidad. SWISS MEDICAL (TOM), Revestimientos de aluminio compuesto en paredes interiores.",
    "SANTANDER RIO, Casa Matriz, Parque Lezama Revestimiento de Aluminio Compuesto, 3500 m2 sobre Frentes e interiores de Edificio",
    "HOTEL PANAMERICANO, Capital, Remodelación de Acceso a Hotel Revestimiento de Aluminio Compuesto and estructura de alineación de cielorrasos",
    "SANCOR SEGUROS, Sunchales Santa Fe, Revestimiento de Placas Cementicias sobre fachadas de edificio (1900m2) , y Revestimiento de Aluminio Compuesto en sectores de Acceso",
    "BIOGENESIS BAGO, Garin, Revestimeinto de Aluminio Compuesto sobre acceso a Edificio",
    "CLUB ATLÉTICO RIVER PLATE, Revestimientos de Aluminio Compuesto sobre Piel de Vidrio y Terminaciones en Palcos. Bandera institucional y puente que une palcos con estacionamiento.",
    "OBRA L’AVENUE (ZAHA HADID), Revestimientos de aluminio compuesto sobre fachada y terminaciones de terrazas de edificio.",
    "LOCAL “KING OF THE KONGO”, Revestimientos interiores de aluminio compuesto.",
    "TORRE “MIRABILIA”, Revestimientos sobre fachadas exteriores de edificio en aluminio compuesto.",
    "TORRE “ARREDONDO 2437”, Revestimientos de aluminio compuesto sobre fachada principal.",
    "HOTEL HILTON (TUCUMAN), Revestimientos interiores en aluminio compuesto.",
    "BURGER KING (NORDELTA), Revestimiento de aluminio compuesto en cenefas y marquesinas institucionales.",
    "TORRE MENDOZA, Revestimientos de aluminio compuesto sobre fachadas principales de edificio.",
    "CISSAB (CANNING), Revestimiento de viviendas en aluminio compuesto.",
    "CIRCULO HEBREO, Revestimiento de viviendas en aluminio compuesto.",
    "MARQUESINAS, Estructuras metálicas revestidas en aluminio compuesto.",
    "PARAGUAY 415. Restauración y puesta en valor de fachada con revestimiento acrilico texturado simil piedra Paris."
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <div className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display mb-6">Trayectoria y Obras</h1>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl leading-relaxed">
            Un recorrido por los hitos arquitectónicos donde hemos dejado nuestra impronta mediante calidad y precisión técnica.
          </p>
        </div>
      </div>

      <Projects />

      <section className="py-20 bg-zinc-50 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {!showAll ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2 mx-auto"
            >
              <Building size={20} />
              VER TODOS NUESTROS TRABAJOS
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative z-10 bg-white p-5 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-blue-100 max-w-5xl mx-auto text-left"
            >
              <div className="flex justify-between items-center mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-zinc-100">
                <h2 className="text-xl sm:text-3xl font-display font-bold text-blue-900 uppercase">Listado Completo de Obras</h2>
                <button 
                  onClick={() => setShowAll(false)}
                  className="text-zinc-400 hover:text-red-500 transition-colors p-2"
                >
                  X
                </button>
              </div>
              
              <div className="grid md:grid-cols-1 gap-4 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                {fullProjectList.map((project, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-colors border-b border-zinc-50 last:border-0 group">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {index + 1}
                    </div>
                    <p className="text-zinc-600 text-sm leading-relaxed">{project}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-100 text-center">
                <button 
                  onClick={() => setShowAll(false)}
                  className="text-zinc-400 font-bold uppercase tracking-widest text-xs hover:text-blue-600 transition-colors"
                >
                  Cerrar listado
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
