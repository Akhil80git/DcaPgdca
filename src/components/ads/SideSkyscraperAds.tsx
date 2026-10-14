import React from 'react';
import { X, ExternalLink, Star, ShieldCheck } from 'lucide-react';
import { Advertisement } from '../../data/adsData';
import { AdBadge } from './AdBadge';

interface SideSkyscraperAdsProps {
  leftAd?: Advertisement;
  rightAd?: Advertisement;
  showLeft: boolean;
  showRight: boolean;
  onCloseLeft: () => void;
  onCloseRight: () => void;
}

export const SideSkyscraperAds: React.FC<SideSkyscraperAdsProps> = ({
  leftAd,
  rightAd,
  showLeft,
  showRight,
  onCloseLeft,
  onCloseRight,
}) => {
  const handleOpenAd = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* LEFT VERTICAL SKYSCRAPER AD */}
      {showLeft && leftAd && (
        <aside 
          aria-label="Left sponsored vertical advertisement"
          className="hidden 2xl:flex flex-col fixed left-2 top-24 bottom-24 w-40 z-30 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg overflow-hidden transition-all animate-in slide-in-from-left duration-300 no-print"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
            <AdBadge label="Ad" />
            <button
              onClick={onCloseLeft}
              className="p-0.5 rounded text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
              title="बंद करें (Close)"
              aria-label="Close Left Ad"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Visual Card */}
          <div 
            onClick={() => handleOpenAd(leftAd.targetUrl)}
            className="flex-1 flex flex-col p-3 cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
          >
            <div className={`w-full py-4 rounded-xl ${leftAd.logoBg} text-white flex flex-col items-center justify-center text-center shadow-xs mb-2.5 group-hover:scale-102 transition-transform`}>
              <span className="font-black text-xl mb-0.5">{leftAd.iconLetter}</span>
              <span className="text-[11px] font-bold tracking-tight px-1 truncate max-w-full">
                {leftAd.brand}
              </span>
            </div>

            <div className="flex items-center gap-1 mb-1.5">
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                {leftAd.category}
              </span>
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
            </div>

            <h5 className="text-xs font-black text-slate-900 dark:text-slate-100 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-1">
              {leftAd.headline}
            </h5>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-auto line-clamp-4">
              {leftAd.tagline}
            </p>

            {leftAd.rating && (
              <div className="my-2 flex items-center justify-center gap-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 rounded-lg py-1 text-xs font-bold text-amber-700 dark:text-amber-400">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                <span>{leftAd.rating} / 5</span>
              </div>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenAd(leftAd.targetUrl);
              }}
              className="w-full mt-2 py-2 px-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer transition-all"
            >
              <span className="truncate">{leftAd.ctaText}</span>
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </button>
          </div>
        </aside>
      )}

      {/* RIGHT VERTICAL SKYSCRAPER AD */}
      {showRight && rightAd && (
        <aside 
          aria-label="Right sponsored vertical advertisement"
          className="hidden 2xl:flex flex-col fixed right-2 top-24 bottom-24 w-40 z-30 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg overflow-hidden transition-all animate-in slide-in-from-right duration-300 no-print"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
            <AdBadge label="Sponsored" />
            <button
              onClick={onCloseRight}
              className="p-0.5 rounded text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
              title="बंद करें (Close)"
              aria-label="Close Right Ad"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Visual Card */}
          <div 
            onClick={() => handleOpenAd(rightAd.targetUrl)}
            className="flex-1 flex flex-col p-3 cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
          >
            <div className={`w-full py-4 rounded-xl ${rightAd.logoBg} text-white flex flex-col items-center justify-center text-center shadow-xs mb-2.5 group-hover:scale-102 transition-transform`}>
              <span className="font-black text-xl mb-0.5">{rightAd.iconLetter}</span>
              <span className="text-[11px] font-bold tracking-tight px-1 truncate max-w-full">
                {rightAd.brand}
              </span>
            </div>

            <div className="flex items-center gap-1 mb-1.5">
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                {rightAd.category}
              </span>
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
            </div>

            <h5 className="text-xs font-black text-slate-900 dark:text-slate-100 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-1">
              {rightAd.headline}
            </h5>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-auto line-clamp-4">
              {rightAd.tagline}
            </p>

            {rightAd.downloads && (
              <div className="my-2 text-center text-[11px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 py-1 rounded-lg">
                {rightAd.downloads}
              </div>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenAd(rightAd.targetUrl);
              }}
              className="w-full mt-2 py-2 px-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer transition-all"
            >
              <span className="truncate">{rightAd.ctaText}</span>
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </button>
          </div>
        </aside>
      )}
    </>
  );
};
