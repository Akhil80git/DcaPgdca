import React from 'react';
import { 
  Cpu, 
  FileSpreadsheet, 
  LayoutTemplate, 
  Database, 
  Sparkles, 
  Globe, 
  Calculator, 
  Film,
  CheckCircle2
} from 'lucide-react';
import { Paper } from '../types';
import { getPaperTitle, getPaperSubtitle, Language } from '../utils/langHelper';

interface PaperSelectorProps {
  papers: Paper[];
  selectedPaperId: string;
  onSelectPaper: (paperId: string) => void;
  completedQuestions: string[];
  currentSemester: 'Sem-I' | 'Sem-II';
  lang?: Language;
}

export const PaperSelector: React.FC<PaperSelectorProps> = ({
  papers,
  selectedPaperId,
  onSelectPaper,
  completedQuestions,
  currentSemester,
  lang = 'hi',
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'LayoutTemplate': return <LayoutTemplate className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Database': return <Database className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Globe': return <Globe className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Calculator': return <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Film': return <Film className="w-4 h-4 sm:w-5 sm:h-5" />;
      default: return <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  // Filter papers by current semester
  const semesterPapers = papers.filter(p => p.semester === currentSemester);

  return (
    <div className="w-full mb-4 no-print">
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40">
            {currentSemester}
          </span>
          <h2 className="text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-100">
            {lang === 'hi' ? `विषय सूची (${semesterPapers.length} पेपर्स)` : `Subjects (${semesterPapers.length} Papers)`}
          </h2>
        </div>

        <span className="text-[11px] font-medium text-slate-400">
          {lang === 'hi' ? 'पेपर चुनें' : 'Select Paper'}
        </span>
      </div>

      {/* Grid of papers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {semesterPapers.map((paper) => {
          const isSelected = paper.id === selectedPaperId;
          const totalQ = paper.units.reduce((acc, u) => acc + u.questions.length, 0);
          const doneQ = paper.units.reduce((acc, u) => 
            acc + u.questions.filter(q => completedQuestions.includes(q.id)).length, 0
          );
          const isFullyDone = doneQ === totalQ && totalQ > 0;

          const title = getPaperTitle(paper, lang);
          const subtitle = getPaperSubtitle(paper, lang);

          return (
            <div
              key={paper.id}
              onClick={() => onSelectPaper(paper.id)}
              className={`relative rounded-xl p-3 cursor-pointer transition-all border text-left group ${
                isSelected
                  ? 'bg-white dark:bg-slate-800 border-indigo-400/80 dark:border-indigo-500 shadow-sm ring-1 ring-indigo-400/30'
                  : 'bg-white/80 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${
                    isSelected
                      ? `bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800`
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {getIcon(paper.icon)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono">
                      {paper.code}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">
                      Paper {paper.paperNumber}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-slate-100 truncate" title={title}>
                    {title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    {subtitle}
                  </p>
                </div>
              </div>

              {/* Progress & Units Count Footer */}
              <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 dark:text-slate-400">
                  5 {lang === 'hi' ? 'यूनिट्स' : 'Units'}
                </span>

                <div className="flex items-center gap-1.5 font-medium">
                  {isFullyDone ? (
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {lang === 'hi' ? 'पूर्ण' : 'Done'}
                    </span>
                  ) : (
                    <span className="text-slate-600 dark:text-slate-300 font-bold">
                      {doneQ}/{totalQ}
                    </span>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
