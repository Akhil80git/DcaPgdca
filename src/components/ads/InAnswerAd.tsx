import React, { useState } from 'react';
import { X, ExternalLink, Star, ShieldCheck } from 'lucide-react';
import { Advertisement } from '../../data/adsData';
import { AdBadge } from './AdBadge';

interface InAnswerAdProps {
  ad: Advertisement;
}

export const InAnswerAd: React.FC<InAnswerAdProps> = ({ ad }) => {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  const handleOpenAd = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(ad.targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleOpenAd}
      className="my-4 p-3.5 sm:p-4 rounded-xl border border-dashed border-amber-300 dark:border-amber-800/80 bg-gradient-to-r from-amber-50/70 via-indigo-50/40 to-transparent dark:from-slate-900/80 dark:via-indigo-950/20 dark:to-slate-900/80 shadow-2xs hover:shadow-xs transition-all cursor-pointer group no-print"
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5">
          <AdBadge label="Sponsored Recommendation" />
          <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">• Verified Partner</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setClosed(true);
          }}
          className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-black/5 transition-colors cursor-pointer"
          title="विज्ञापन बंद करें (Close ad)"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-xl ${ad.logoBg} text-white flex items-center justify-center font-black text-xs shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform`}>
            {ad.iconLetter}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h5 className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {ad.brand}: {ad.headline}
              </h5>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium mt-0.5 line-clamp-1">
              {ad.tagline}
            </p>
          </div>
        </div>

        <button
          onClick={handleOpenAd}
          className="self-end sm:self-center flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-all cursor-pointer flex-shrink-0"
        >
          <span>{ad.ctaText}</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
