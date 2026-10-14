import React, { useState } from 'react';
import { X, ExternalLink, Star, ShieldCheck } from 'lucide-react';
import { Advertisement } from '../../data/adsData';
import { AdBadge } from './AdBadge';

interface InFeedAdCardProps {
  ad: Advertisement;
}

export const InFeedAdCard: React.FC<InFeedAdCardProps> = ({ ad }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <div className="p-2 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-center text-[10px] text-slate-400">
        विज्ञापन बंद कर दिया गया (Ad dismissed)
      </div>
    );
  }

  const handleOpenAd = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(ad.targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <article 
      onClick={handleOpenAd}
      className="rounded-2xl border border-amber-200/80 dark:border-amber-900/40 bg-gradient-to-r from-amber-500/5 via-amber-500/10 to-transparent dark:from-amber-950/20 dark:via-slate-850 dark:to-slate-900 p-3.5 sm:p-4 my-3 cursor-pointer group shadow-2xs hover:shadow-xs transition-all no-print"
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <AdBadge label="Sponsored" />
          <span className="text-[10px] text-slate-500 font-medium">Google Ads</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setDismissed(true);
          }}
          className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-black/5 transition-colors cursor-pointer"
          title="विज्ञापन बंद करें (Close ad)"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className={`w-12 h-12 rounded-xl ${ad.logoBg} text-white flex items-center justify-center font-black text-base shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform`}>
            {ad.iconLetter}
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-sm font-black text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {ad.brand}: {ad.headline}
              </h4>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5 line-clamp-2">
              {ad.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-1.5 text-[10px] text-slate-500">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">{ad.category}</span>
              {ad.rating && (
                <span className="flex items-center gap-0.5 font-bold text-amber-600 dark:text-amber-400">
                  <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                  {ad.rating}
                </span>
              )}
              {ad.downloads && <span>• {ad.downloads}</span>}
              <span className="font-mono text-slate-400">• {ad.targetUrl.replace('https://', '')}</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleOpenAd}
          className="w-full sm:w-auto flex items-center justify-center gap-1 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-all cursor-pointer flex-shrink-0"
        >
          <span>{ad.ctaText}</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </article>
  );
};
