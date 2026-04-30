import { motion } from 'motion/react';

import { Building2 } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isLight = variant === 'light';
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-16 w-48 flex items-center group">
        <img 
          src="/logo.png" 
          alt="Golam Logo" 
          className="h-full w-full object-contain transition-all duration-300 relative z-20 rounded-xl"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.classList.add('hidden');
            const fallback = target.parentElement?.querySelector('.logo-fallback') as HTMLElement;
            if (fallback) fallback.classList.remove('hidden');
          }}
        />
        {/* Polished CSS Fallback mimicking the provided logo exactly - stays hidden if image loads */}
        <div className="logo-fallback hidden flex items-center gap-4">
          <div className="relative h-12 flex items-end gap-[3px]">
            {/* Shard 1 (Leftmost) */}
            <div className="w-[6px] bg-gradient-to-t from-blue-600 to-cyan-400 h-[55%]" style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)' }}></div>
            {/* Shard 2 */}
            <div className="w-[6px] bg-gradient-to-t from-blue-600 to-cyan-400 h-[75%]" style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)' }}></div>
            {/* Shard 3 */}
            <div className="w-[6px] bg-gradient-to-t from-blue-600 to-cyan-400 h-[95%]" style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)' }}></div>
            
            {/* Gap with slight separation */}
            <div className="w-[2px]"></div>
            
            {/* Shard 4 (Peaked Building Shape) */}
            <div className="w-[8px] bg-gradient-to-t from-blue-800 to-blue-400 h-[100%]" style={{ clipPath: 'polygon(50% 0, 100% 15%, 100% 100%, 0 100%, 0 15%)' }}></div>
            {/* Shard 5 (Rightmost) */}
            <div className="w-[6px] bg-gradient-to-t from-blue-800 to-blue-500 h-[80%]" style={{ clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 100%)' }}></div>
            
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full -z-10"></div>
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-4xl leading-none tracking-tight ${isLight ? 'text-white' : 'text-blue-900'}`}>
              GOLAM
            </span>
            <div className="h-[2px] w-full bg-cyan-400 mt-1 mb-0.5"></div>
            <span className={`text-[8px] font-black uppercase tracking-[0.4em] ${isLight ? 'text-white' : 'text-blue-600'}`}>
              Revestimientos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
