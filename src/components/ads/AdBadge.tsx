import React from 'react';
import { Info } from 'lucide-react';

interface AdBadgeProps {
  label?: string;
  className?: string;
  dark?: boolean;
}

export const AdBadge: React.FC<AdBadgeProps> = ({
  label = 'Ad',
  className = '',
  dark = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-1 text-[10px] select-none font-sans ${className}`}>
      <span className={`px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
        dark 
          ? 'bg-black/40 text-amber-300 border border-amber-300/30' 
          : 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/50'
      }`}>
        {label}
      </span>
      <div 
        className={`flex items-center gap-0.5 px-1 py-0.5 rounded cursor-pointer transition-colors ${
          dark ? 'text-slate-300 hover:text-white' : 'text-slate-400 dark:text-slate-400 hover:text-slate-600'
        }`}
        title="AdChoices • Google Ads Verified"
      >
        <span className="text-[9px] font-medium hidden sm:inline">AdChoices</span>
        {/* Google AdChoices distinctive blue triangle */}
        <svg className="w-2.5 h-2.5 text-blue-500 fill-blue-500" viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13H5.5L12 6.5z" />
        </svg>
        <Info className="w-2.5 h-2.5" />
      </div>
    </div>
  );
};
