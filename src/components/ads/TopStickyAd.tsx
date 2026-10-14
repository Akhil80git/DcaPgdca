import React from 'react';
import { X, ExternalLink, Star } from 'lucide-react';
import { Advertisement } from '../../data/adsData';
import { AdBadge } from './AdBadge';

interface TopStickyAdProps {
  ad: Advertisement;
  isOpen: boolean;
  onClose: () => void;
}

export const TopStickyAd: React.FC<TopStickyAdProps> = ({
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
      aria-label="Sponsored advertisement"
      className="sticky top-12 sm:top-13 z-30 w-full bg-amber-50 dark:bg-slate-900 border-b border-amber-200 dark:border-amber-900/50 shadow-xs transition-all animate-in slide-in-from-top-2 duration-300 no-print"
    >
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Ad Left: Badge + Icon + Headline */}
        <div 
          onClick={handleOpenAd}
          className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 cursor-pointer group"
        >
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <AdBadge label="Ad" />
            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${ad.logoBg} text-white flex items-center justify-center font-black text-xs shadow-xs flex-shrink-0`}>
              {ad.iconLetter}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xs text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                {ad.brand}: {ad.headline}
              </span>
              {ad.rating && (
                <span className="hidden md:flex items-center gap-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                  <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                  {ad.rating}
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate hidden sm:block">
              {ad.tagline}
            </p>
          </div>
        </div>

        {/* Ad Right: Action Button + Close Cross */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <button
            onClick={handleOpenAd}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-2xs transition-all cursor-pointer"
          >
            <span className="hidden xs:inline">{ad.ctaText}</span>
            <span className="xs:hidden">Open</span>
            <ExternalLink className="w-3 h-3" />
          </button>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            title="विज्ञापन हटाएं (Remove Ad)"
            aria-label="Close Top Advertisement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
