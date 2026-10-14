import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Star, ShieldCheck, Download } from 'lucide-react';
import { Advertisement } from '../../data/adsData';
import { AdBadge } from './AdBadge';

interface InterstitialAdModalProps {
  ad: Advertisement;
  isOpen: boolean;
  onClose: () => void;
}

export const InterstitialAdModal: React.FC<InterstitialAdModalProps> = ({
  ad,
  isOpen,
  onClose,
}) => {
  const [countdown, setCountdown] = useState<number>(3);
  const [canSkipDirectly, setCanSkipDirectly] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) return;
    setCountdown(3);
    setCanSkipDirectly(false);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanSkipDirectly(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOpenAd = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(ad.targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with Google Ad badge & Close cross button */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/90 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700/80">
          <div className="flex items-center gap-2">
            <AdBadge label="Sponsored Ad" />
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              Google Ads Partner
            </span>
          </div>

          <div className="flex items-center gap-2">
            {!canSkipDirectly && countdown > 0 && (
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 tabular-nums">
                Skip in {countdown}s
              </span>
            )}
            <button
              onClick={onClose}
              className="p-1 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-200/80 dark:bg-slate-700/80 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all cursor-pointer"
              title="बंद करें (Close Ad)"
              aria-label="Close Advertisement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Visual Banner */}
        <div 
          onClick={handleOpenAd}
          className={`relative p-6 sm:p-7 bg-gradient-to-br ${ad.bannerGradient} text-white cursor-pointer select-none group transition-all`}
        >
          <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity">
            <ExternalLink className="w-20 h-20" />
          </div>

          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-14 h-14 rounded-2xl bg-white text-slate-900 shadow-xl flex items-center justify-center font-black text-xl flex-shrink-0 group-hover:scale-105 transition-transform">
              {ad.iconLetter}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">{ad.brand}</h3>
                <ShieldCheck className="w-4 h-4 text-emerald-300 fill-emerald-300/30" />
              </div>
              <p className="text-xs text-white/80 font-medium">{ad.category}</p>
            </div>
          </div>

          <h4 className="text-base sm:text-lg font-extrabold leading-snug drop-shadow-xs mb-1.5">
            {ad.headline}
          </h4>

          <p className="text-xs sm:text-sm text-white/90 line-clamp-2 leading-relaxed">
            {ad.tagline}
          </p>

          {/* Social Proof stats */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
            {ad.rating && (
              <div className="flex items-center gap-1 bg-black/25 px-2.5 py-1 rounded-full backdrop-blur-xs font-bold">
                <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                <span>{ad.rating}</span>
                <span className="text-[10px] text-white/75 font-normal">Rating</span>
              </div>
            )}
            {ad.downloads && (
              <div className="flex items-center gap-1 bg-black/25 px-2.5 py-1 rounded-full backdrop-blur-xs font-bold">
                <Download className="w-3.5 h-3.5 text-white/80" />
                <span>{ad.downloads}</span>
              </div>
            )}
            {ad.badge && (
              <div className="bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-xs text-[11px] font-bold">
                {ad.badge}
              </div>
            )}
          </div>
        </div>

        {/* Ad Body Content */}
        <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-3 bg-white dark:bg-slate-900">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {ad.description}
          </p>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              सत्यापित विज्ञापन (Verified Official Portal)
            </span>
            <span className="font-mono text-[11px] truncate max-w-[160px]">
              {ad.targetUrl.replace('https://', '')}
            </span>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            बंद करें (Dismiss)
          </button>

          <button
            onClick={handleOpenAd}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all cursor-pointer"
          >
            <span>{ad.ctaText}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
