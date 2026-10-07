import React, { useState } from 'react';
import { Paper, Question } from '../types';
import { 
  HelpCircle, 
  Tag, 
  ArrowRight, 
  CheckCircle2, 
  Bookmark, 
  ChevronRight, 
  Layers,
  FileQuestion,
  Eye
} from 'lucide-react';
import { getQuestionText, getPaperTitle, getPaperSubtitle, Language, getUi } from '../utils/langHelper';

interface QuestionsOnlyViewProps {
  currentPaper: Paper;
  activeUnitIndex: number;
  onSelectUnit: (idx: number) => void;
  onJumpToAnswer: (paperId: string, unitIndex: number, questionId: string) => void;
  completedQuestions: string[];
  bookmarkedQuestions: string[];
  onToggleComplete: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  lang?: Language;
}

export const QuestionsOnlyView: React.FC<QuestionsOnlyViewProps> = ({
  currentPaper,
  activeUnitIndex,
  onSelectUnit,
  onJumpToAnswer,
  completedQuestions,
  bookmarkedQuestions,
  onToggleComplete,
  onToggleBookmark,
  lang = 'hi',
}) => {
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<number | 'all'>(activeUnitIndex);

  const unitsToShow = selectedUnitFilter === 'all' 
    ? currentPaper.units 
    : [currentPaper.units[selectedUnitFilter] || currentPaper.units[0]];

  const paperTitle = getPaperTitle(currentPaper, lang);
  const paperSubtitle = getPaperSubtitle(currentPaper, lang);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-12 animate-in fade-in duration-200">
      
      {/* Header Banner */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-4 sm:p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40">
                {currentPaper.code}
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {lang === 'hi' ? 'केवल प्रश्न बैंक (Question Paper Mode)' : 'Questions Bank (Paper Mode)'}
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              {paperTitle}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {paperSubtitle} • {lang === 'hi' ? 'स्वयं मूल्यांकन और मॉक टेस्ट के लिए प्रश्न सूची' : 'Questions list for self-assessment and mock practice'}
            </p>
          </div>

          {/* Unit Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start sm:self-auto">
            <button
              onClick={() => setSelectedUnitFilter('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all ${
                selectedUnitFilter === 'all'
                  ? 'bg-indigo-100/90 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700 shadow-2xs'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              {lang === 'hi' ? 'सभी 25 प्रश्न' : 'All 25 Questions'}
            </button>
            {currentPaper.units.map((u, idx) => (
              <button
                key={u.unitRoman}
                onClick={() => {
                  setSelectedUnitFilter(idx);
                  onSelectUnit(idx);
                }}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl border transition-all ${
                  selectedUnitFilter === idx
                    ? 'bg-indigo-100/90 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700 shadow-2xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                {u.unitRoman}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Units & Questions */}
      <div className="space-y-6">
        {unitsToShow.map((unit, uIdx) => {
          const actualUnitIndex = selectedUnitFilter === 'all' ? uIdx : selectedUnitFilter;

          return (
            <div 
              key={unit.unitRoman}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 shadow-2xs overflow-hidden"
            >
              {/* Unit Title Header */}
              <div className="p-3.5 sm:p-4 bg-slate-50/80 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-extrabold text-xs flex items-center justify-center">
                    {unit.unitRoman}
                  </span>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                      {unit.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {lang === 'hi' ? '5 प्रश्न (यूनिट का पूरा सिलेबस)' : '5 Questions (Full Unit Coverage)'}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {unit.questions.filter(q => completedQuestions.includes(q.id)).length}/5 {lang === 'hi' ? 'तैयार' : 'done'}
                </span>
              </div>

              {/* Questions List */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {unit.questions.map((q) => {
                  const isDone = completedQuestions.includes(q.id);
                  const isFav = bookmarkedQuestions.includes(q.id);
                  const qDisplay = getQuestionText(q, lang);

                  return (
                    <div 
                      key={q.id}
                      className="p-4 sm:p-5 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5"
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        {/* Question Number Badge - prominent and clear */}
                        <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                          {q.number}
                        </span>

                        <div className="space-y-1.5 flex-1 min-w-0">
                          {/* Question text - MAIN FOCUS OF ATTENTION */}
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100 leading-snug">
                            {qDisplay}
                          </h4>

                          {/* Topic tags */}
                          {q.topics && q.topics.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                              {q.topics.map((t, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100/90 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400 font-medium"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right action buttons - LIGHT, SUBTLE, NON-DISTRACTING */}
                      <div className="flex items-center gap-1.5 self-end sm:self-auto flex-shrink-0">
                        {/* Bookmark button */}
                        <button
                          onClick={() => onToggleBookmark(q.id)}
                          className={`p-1.5 sm:p-2 rounded-lg border text-xs transition-colors ${
                            isFav
                              ? 'bg-amber-50 text-amber-600 border-amber-300 dark:bg-amber-950/40 dark:text-amber-400'
                              : 'text-slate-400 hover:text-slate-600 border-slate-200 dark:border-slate-700 dark:hover:bg-slate-700'
                          }`}
                          title={isFav ? (lang === 'hi' ? 'बुकमार्क हटाएं' : 'Remove Bookmark') : (lang === 'hi' ? 'बुकमार्क करें' : 'Bookmark')}
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${isFav ? 'fill-amber-500' : ''}`} />
                        </button>

                        {/* Complete button */}
                        <button
                          onClick={() => onToggleComplete(q.id)}
                          className={`p-1.5 sm:p-2 rounded-lg border text-xs transition-colors ${
                            isDone
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300'
                              : 'text-slate-400 hover:text-slate-600 border-slate-200 dark:border-slate-700 dark:hover:bg-slate-700'
                          }`}
                          title={isDone ? (lang === 'hi' ? 'अपूर्ण करें' : 'Mark Undone') : (lang === 'hi' ? 'तैयार मार्क करें' : 'Mark Done')}
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 ${isDone ? 'fill-emerald-500 text-white' : ''}`} />
                        </button>

                        {/* LIGHT / SUBTLE View Answer Button (No dark blue!) */}
                        <button
                          onClick={() => onJumpToAnswer(currentPaper.id, actualUnitIndex, q.id)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50/70 hover:border-indigo-200 hover:text-indigo-700 dark:hover:bg-slate-700 dark:hover:text-indigo-300 text-slate-600 dark:text-slate-300 font-semibold text-xs transition-colors cursor-pointer"
                          title={lang === 'hi' ? 'उत्तर देखें' : 'View Answer'}
                        >
                          <Eye className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                          <span>{lang === 'hi' ? 'उत्तर देखें' : 'View Answer'}</span>
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
