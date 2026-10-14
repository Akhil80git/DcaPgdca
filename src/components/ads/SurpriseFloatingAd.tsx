import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Star, Bell, Sparkles } from 'lucide-react';
import { REAL_ADS, Advertisement } from '../../data/adsData';
import { AdBadge } from './AdBadge';

type AdPosition = 'bottom-left' | 'top-right' | 'middle-left' | 'middle-right';

export const SurpriseFloatingAd: React.FC = () => {
  const [currentAd, setCurrentAd] = useState<Advertisement | null>(null);
  const [position, setPosition] = useState<AdPosition>('bottom-left');
  const [isVisible, setIsVisible] = useState(false);

  const positions: AdPosition[] = ['bottom-left', 'top-right', 'middle-left', 'middle-right'];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const scheduleNextSurprise = () => {
      // Random delay between 14 to 26 seconds
      const delay = Math.floor(Math.random() * 12000) + 14000;

      timeoutId = setTimeout(() => {
        // Pick random ad and random unpredictable position
        const randomAd = REAL_ADS[Math.floor(Math.random() * REAL_ADS.length)];
        const randomPos = positions[Math.floor(Math.random() * positions.length)];
        
        setCurrentAd(randomAd);
        setPosition(randomPos);
        setIsVisible(true);
      }, delay);
    };

    scheduleNextSurprise();

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);

    // Schedule next unexpected surprise ad in 18 to 32 seconds
    const nextDelay = Math.floor(Math.random() * 14000) + 18000;
    setTimeout(() => {
      const randomAd = REAL_ADS[Math.floor(Math.random() * REAL_ADS.length)];
      const randomPos = positions[Math.floor(Math.random() * positions.length)];
      setCurrentAd(randomAd);
      setPosition(randomPos);
      setIsVisible(true);
    }, nextDelay);
  };

  const handleOpenAd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentAd) {
      window.open(currentAd.targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (!isVisible || !currentAd) return null;

  // Position specific CSS classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'fixed top-14 sm:top-16 right-3 sm:right-6 z-40 max-w-sm animate-in slide-in-from-top-4 duration-300';
      case 'bottom-left':
        return 'fixed bottom-14 sm:bottom-16 left-3 sm:left-6 z-40 max-w-sm animate-in slide-in-from-bottom-4 duration-300';
      case 'middle-left':
        return 'fixed top-1/2 -translate-y-1/2 left-2 sm:left-4 z-40 max-w-xs animate-in slide-in-from-left duration-300';
      case 'middle-right':
      default:
        return 'fixed top-1/2 -translate-y-1/2 right-2 sm:right-4 z-40 max-w-xs animate-in slide-in-from-right duration-300';
    }
  };

  return (
    <aside 
      aria-label="Surprise promotional notification"
      className={`${getPositionClasses()} no-print`}
    >
      <div 
        onClick={handleOpenAd}
        className="bg-white dark:bg-slate-900 border-2 border-indigo-500/40 dark:border-indigo-500/50 rounded-2xl shadow-2xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-all"
      >
        {/* Micro Header with Google Ads & Close Button */}
        <div className="flex items-center justify-between px-3 py-1 bg-gradient-to-r from-indigo-50 via-amber-50 to-transparent dark:from-slate-800 dark:via-slate-850 dark:to-slate-800 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <AdBadge label="Sponsored Alert" />
          </div>

          <button
            onClick={handleClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-black/5 transition-colors cursor-pointer"
            title="बंद करें (Close)"
            aria-label="Close Surprise Ad"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Ad Body Content */}
        <div className="p-3 sm:p-3.5 flex items-start gap-3">
          <div className={`w-11 h-11 rounded-xl ${currentAd.logoBg} text-white flex items-center justify-center font-black text-sm shadow-md flex-shrink-0 group-hover:rotate-6 transition-transform`}>
            {currentAd.iconLetter}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1 mb-0.5">
              <span className="text-xs font-black text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                {currentAd.brand}
              </span>
              {currentAd.badge && (
                <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 truncate">
                  {currentAd.badge}
                </span>
              )}
            </div>

            <h5 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-snug line-clamp-2">
              {currentAd.headline}
            </h5>

            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
              {currentAd.tagline}
            </p>

            <div className="mt-2 flex items-center justify-between">
              {currentAd.rating ? (
                <div className="flex items-center gap-1 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>{currentAd.rating}</span>
                </div>
              ) : <span />}

              <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-indigo-600 dark:text-indigo-400 group-hover:underline">
                <span>{currentAd.ctaText}</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
