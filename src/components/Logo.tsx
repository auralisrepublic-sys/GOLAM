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
          src="https://lh3.googleusercontent.com/sitesv/AA5AbUBNAD93iXKV1XJxyxjGAHV3NoCtmoI4qU9gK1OjJR2VvupLeacaE7fIeKfYXckqFXqMaJpnZvD4smWBapCJM5VXYWQL4Fn3jvMAEK9Pug1a415SH3rW-k4Z2i8BLuQU_lqWKpKdL7ePCnExEURBBHkH5buJwf_njlgE8grN17ASoL8Lpypy5aa81qHyRqLwFOYgBFQ2gpkXSAXZ-qdyrTNRavjhItkdFZVYmgk=w1280" 
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
