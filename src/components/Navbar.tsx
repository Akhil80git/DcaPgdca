import React from 'react';
import { 
  Search, 
  Sun, 
  Moon
} from 'lucide-react';
import { Language } from '../utils/langHelper';

interface NavbarProps {
  currentCourse: 'PGDCA' | 'DCA';
  onCourseChange: (c: 'PGDCA' | 'DCA') => void;
  currentSemester: 'Sem-I' | 'Sem-II';
  onSemesterChange: (s: 'Sem-I' | 'Sem-II') => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  lang?: Language;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCourse,
  onCourseChange,
  currentSemester,
  onSemesterChange,
  theme,
  onToggleTheme,
  onOpenSearch,
  lang = 'hi',
}) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 no-print bg-white/95 dark:bg-slate-900/95 border-slate-200/90 dark:border-slate-800 shadow-2xs">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-13 gap-2">
          
          {/* Left: Course Switcher with soft/light pastel colors (PGDCA / DCA) */}
          <div className="flex items-center bg-slate-100/80 dark:bg-slate-800/80 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <button
              onClick={() => onCourseChange('PGDCA')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                currentCourse === 'PGDCA'
                  ? 'bg-indigo-100/90 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200 border border-indigo-200/90 dark:border-indigo-800 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              PGDCA
            </button>
            <button
              onClick={() => onCourseChange('DCA')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                currentCourse === 'DCA'
                  ? 'bg-teal-100/90 text-teal-800 dark:bg-teal-950 dark:text-teal-200 border border-teal-200/90 dark:border-teal-800 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              DCA
            </button>
          </div>

          {/* Center: Compact Semester Switcher with soft/light colors (Sem: [1] [2]) */}
          <div className="flex items-center bg-slate-100/80 dark:bg-slate-800/80 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 pl-2 pr-1 select-none">
              Sem
            </span>
            <button
              onClick={() => onSemesterChange('Sem-I')}
              className={`w-6.5 h-6.5 sm:w-7 sm:h-7 flex items-center justify-center rounded-lg text-xs font-bold transition-all cursor-pointer ${
                currentSemester === 'Sem-I'
                  ? 'bg-indigo-100/90 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200 border border-indigo-200/90 dark:border-indigo-800 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
              title={lang === 'hi' ? "Semester 1 के विषय" : "Semester 1 Subjects"}
            >
              1
            </button>
            <button
              onClick={() => onSemesterChange('Sem-II')}
              className={`w-6.5 h-6.5 sm:w-7 sm:h-7 flex items-center justify-center rounded-lg text-xs font-bold transition-all cursor-pointer ${
                currentSemester === 'Sem-II'
                  ? 'bg-indigo-100/90 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200 border border-indigo-200/90 dark:border-indigo-800 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
              title={lang === 'hi' ? "Semester 2 के विषय" : "Semester 2 Subjects"}
            >
              2
            </button>
          </div>

          {/* Right: Search & Working Dark/Light Toggle */}
          <div className="flex items-center gap-1.5">
            
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium transition-all cursor-pointer
                bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100
                dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700"
              title={lang === 'hi' ? "खोजें (Ctrl+K)" : "Search (Ctrl+K)"}
            >
              <Search className="w-3.5 h-3.5 text-indigo-500" />
              <span className="hidden sm:inline">{lang === 'hi' ? 'खोजें' : 'Search'}</span>
            </button>

            {/* Dark/Light Mode Button */}
            <button
              onClick={onToggleTheme}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={theme === 'dark' ? (lang === 'hi' ? 'लाइट मोड चालू करें' : 'Switch to Light Mode') : (lang === 'hi' ? 'डार्क मोड चालू करें' : 'Switch to Dark Mode')}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 fill-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 fill-indigo-600" />
              )}
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
