import { motion } from 'motion/react';

import { Building2 } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative flex items-center">
        <img 
          src="https://plain-enam-prod-public.komododecks.com/202605/02/wlNYeRGz6Ew3cASJl8ba/image.png" 
          alt="Golam" 
          className="h-[50px] sm:h-[60px] w-auto block object-contain"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.style.display = 'block';
            }
          }}
        />
        <span className="hidden font-display font-black text-2xl tracking-tighter text-blue-900 whitespace-nowrap">
          GOLAM
        </span>
      </div>
    </div>
  );
}
