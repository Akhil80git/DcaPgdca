import React from 'react';
import { 
  FileQuestion, 
  BookOpenCheck, 
  GraduationCap,
  Languages
} from 'lucide-react';
import { Language } from '../utils/langHelper';

export type MainTabType = 'questionsOnly' | 'qa' | 'examPattern';

interface BottomNavProps {
  currentTab: MainTabType;
  onTabChange: (tab: MainTabType) => void;
  currentCourse: 'PGDCA' | 'DCA';
  currentLang: Language;
  onToggleLang: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onTabChange,
  currentCourse,
  currentLang,
  onToggleLang,
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/90 dark:border-slate-800 shadow-xl py-1 px-2 no-print">
      <div className="max-w-lg mx-auto grid grid-cols-4 gap-1 sm:gap-1.5">
        
        {/* Tab 1: केवल प्रश्न / Questions Only */}
        <button
          onClick={() => onTabChange('questionsOnly')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-all cursor-pointer ${
            currentTab === 'questionsOnly'
              ? 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-extrabold shadow-2xs'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
          title={currentLang === 'hi' ? 'केवल प्रश्न देखें' : 'View questions only'}
        >
          <FileQuestion className={`w-4 h-4 ${currentTab === 'questionsOnly' ? 'stroke-[2.5]' : ''}`} />
          <span className="text-[10px] leading-tight font-bold mt-0.5 truncate">
            {currentLang === 'hi' ? 'केवल प्रश्न' : 'Questions'}
          </span>
        </button>

        {/* Tab 2: प्रश्न + उत्तर / Q & A */}
        <button
          onClick={() => onTabChange('qa')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-all cursor-pointer ${
            currentTab === 'qa'
              ? 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-extrabold shadow-2xs'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
          title={currentLang === 'hi' ? 'प्रश्न और विस्तृत उत्तर' : 'Questions with detailed answers'}
        >
          <BookOpenCheck className={`w-4 h-4 ${currentTab === 'qa' ? 'stroke-[2.5]' : ''}`} />
          <span className="text-[10px] leading-tight font-bold mt-0.5 truncate">
            {currentLang === 'hi' ? 'प्रश्न + उत्तर' : 'Q & A'}
          </span>
        </button>

        {/* Tab 3: परीक्षा पैटर्न / Exam Scheme */}
        <button
          onClick={() => onTabChange('examPattern')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-all cursor-pointer ${
            currentTab === 'examPattern'
              ? 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-extrabold shadow-2xs'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
          title={currentLang === 'hi' ? 'परीक्षा पैटर्न व अंक योजना' : 'Exam Pattern & Marks Scheme'}
        >
          <GraduationCap className={`w-4 h-4 ${currentTab === 'examPattern' ? 'stroke-[2.5]' : ''}`} />
          <span className="text-[10px] leading-tight font-bold mt-0.5 truncate">
            {currentLang === 'hi' ? 'परीक्षा पैटर्न' : 'Scheme'}
          </span>
        </button>

        {/* Tab 4: हिंदी / English Translation Toggle Button */}
        <button
          onClick={onToggleLang}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg border transition-all cursor-pointer ${
            currentLang === 'hi'
              ? 'bg-amber-50/80 border-amber-200/80 dark:bg-amber-950/40 dark:border-amber-800/60 text-amber-900 dark:text-amber-200'
              : 'bg-emerald-50/80 border-emerald-200/80 dark:bg-emerald-950/40 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200'
          }`}
          title={
            currentLang === 'hi'
              ? 'अंग्रेजी में बदलें (Click to switch to English)'
              : 'हिंदी में बदलें (Click to switch to Hindi)'
          }
        >
          <div className="flex items-center gap-1">
            <Languages className="w-3.5 h-3.5" />
            <span className="text-[9px] font-black uppercase tracking-wider px-1 py-0.2 rounded bg-black/5 dark:bg-white/10">
              {currentLang === 'hi' ? 'HI' : 'EN'}
            </span>
          </div>
          <span className="text-[10px] leading-tight font-extrabold mt-0.5">
            {currentLang === 'hi' ? 'हिंदी' : 'English'}
          </span>
        </button>

      </div>
    </nav>
  );
};
