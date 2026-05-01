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
      <div className={`relative h-[50px] sm:h-[60px] w-[100px] sm:w-[116px] px-2 flex items-center justify-center group rounded-xl sm:rounded-2xl border transition-all duration-300 ${
        isLight 
          ? 'bg-white/10 border-white/20' 
          : 'bg-zinc-100 border-zinc-200'
      }`}>
        <img 
          src="https://lh3.googleusercontent.com/sitesv/AA5AbUCyKu8e7uja0_hky0gXSoasPGZVq-ZSfiyBC5FpZUkUbxgoM9fO9cn5KCXwKrgT1FWlKKxKERoBC6ryhfoFVT2FcgPQe29EFLb2C6eywgJO-g973cDdkpKjpjk18fk7-t25lWbmKsIhIMZAdo3vC0lyKahXcYWV72EKu0jflzn7C_OZx_xYsOlMmMzwbF_l62qUp9y8y6RCvJ2nbw5AB2TJjhfnr8I3CKvRgGI=w1280" 
          alt="Golam Logo" 
          className="h-full w-full object-contain transition-all duration-300 relative z-20 rounded-xl"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.classList.add('hidden');
            const fallback = target.parentElement?.querySelector('.logo-fallback') as HTMLElement;
            if (fallback) fallback.classList.remove('hidden');
          }}
        />
        {/* Simple Fallback */}
        <div className="logo-fallback hidden">
          <span className={`font-display font-bold text-lg tracking-tighter ${isLight ? 'text-white' : 'text-blue-900'}`}>
            GOLAM
          </span>
        </div>
      </div>
    </div>
  );
}
