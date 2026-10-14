import React from 'react';
import { X, ExternalLink, Star } from 'lucide-react';
import { Advertisement } from '../../data/adsData';
import { AdBadge } from './AdBadge';

interface BottomFloatingAdProps {
  ad: Advertisement;
  isOpen: boolean;
  onClose: () => void;
}

export const BottomFloatingAd: React.FC<BottomFloatingAdProps> = ({
  ad,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleOpenAd = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(ad.targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside 
      aria-label="Bottom sponsored advertisement"
      className="fixed bottom-13 sm:bottom-14 left-2 right-2 sm:left-auto sm:right-6 sm:max-w-md z-30 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden animate-in slide-in-from-bottom-3 duration-300 no-print"
    >
      {/* Top micro bar with Ad label & Close button */}
      <div className="flex items-center justify-between px-3 py-1 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-800">
        <AdBadge label="Sponsored" />
        <button
          onClick={onClose}
          className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
          title="विज्ञापन बंद करें (Close ad)"
          aria-label="Close Ad"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main interactive card area */}
      <div 
        onClick={handleOpenAd}
        className="p-3 flex items-center gap-3 cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
      >
        <div className={`w-11 h-11 rounded-xl ${ad.logoBg} text-white flex items-center justify-center font-black text-sm shadow-md flex-shrink-0 group-hover:scale-105 transition-transform`}>
          {ad.iconLetter}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1">
            <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              {ad.brand}
            </h4>
            {ad.rating && (
              <span className="flex items-center gap-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                {ad.rating}
              </span>
            )}
          </div>

          <p className="text-[11px] font-medium text-slate-600 dark:text-slate-300 line-clamp-1">
            {ad.headline}
          </p>
          <p className="text-[10px] text-slate-400 dark:text-slate-500 truncate">
            {ad.tagline}
          </p>
        </div>

        <button
          onClick={handleOpenAd}
          className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
        >
          <span>{ad.ctaText.split(' ')[0]}</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </aside>
  );
};
