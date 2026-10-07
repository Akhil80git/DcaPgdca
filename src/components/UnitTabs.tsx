import React from 'react';
import { Unit } from '../types';
import { Layers, CheckCircle2 } from 'lucide-react';
import { Language } from '../utils/langHelper';

interface UnitTabsProps {
  units: Unit[];
  activeUnitIndex: number;
  onSelectUnit: (index: number) => void;
  completedQuestions: string[];
  lang?: Language;
}

export const UnitTabs: React.FC<UnitTabsProps> = ({
  units,
  activeUnitIndex,
  onSelectUnit,
  completedQuestions,
  lang = 'hi',
}) => {
  return (
    <div className="w-full mb-5 no-print">
      <div className="flex items-center gap-2 mb-2 px-1">
        <Layers className="w-4 h-4 text-indigo-500" />
        <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
          {lang === 'hi' ? 'यूनिट चुनें:' : 'Select Unit:'}
        </span>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {units.map((unit, idx) => {
          const isActive = idx === activeUnitIndex;
          const completedInThisUnit = unit.questions.filter(q => completedQuestions.includes(q.id)).length;
          const isDone = completedInThisUnit === unit.questions.length;

          return (
            <button
              key={unit.unitRoman}
              onClick={() => onSelectUnit(idx)}
              className={`flex-shrink-0 flex items-center gap-2.5 px-3 py-2 rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'bg-indigo-100/90 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700 shadow-2xs font-bold'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                  isActive
                    ? 'bg-indigo-200/80 dark:bg-indigo-900/80 text-indigo-900 dark:text-indigo-100'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {unit.unitNumber}
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-extrabold tracking-wide">
                    {unit.unitRoman}
                  </span>
                  {isDone && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  )}
                </div>

                <div className="flex items-center gap-1 mt-0.5">
                  <span className={`text-[10px] font-medium ${isActive ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-400'}`}>
                    {completedInThisUnit}/5 {lang === 'hi' ? 'तैयार' : 'done'}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
