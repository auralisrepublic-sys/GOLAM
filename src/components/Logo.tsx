import { motion } from 'motion/react';

import { Building2 } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative h-[50px] sm:h-[60px] flex items-center justify-start min-w-[120px]">
        <img 
          src="https://lh3.googleusercontent.com/sitesv/AA5AbUCyKu8e7uja0_hky0gXSoasPGZVq-ZSfiyBC5FpZUkUbxgoM9fO9cn5KCXwKrgT1FWlKKxKERoBC6ryhfoFVT2FcgPQe29EFLb2C6eywgJO-g973cDdkpKjpjk18fk7-t25lWbmKsIhIMZAdo3vC0lyKahXcYWV72EKu0jflzn7C_OZx_xYsOlMmMzwbF_l62qUp9y8y6RCvJ2nbw5AB2TJjhfnr8I3CKvRgGI=w1280" 
          alt="Golam" 
          className="h-full w-auto object-contain block opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
          onLoad={(e) => {
            (e.currentTarget as HTMLImageElement).classList.add('opacity-100');
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.parentElement?.querySelector('.logo-text');
            if (fallback) fallback.classList.remove('hidden');
          }}
        />
        <span className="logo-text hidden font-display font-black text-2xl tracking-tighter text-blue-600 whitespace-nowrap">
          GOLAM
        </span>
      </div>
    </div>
  );
}
