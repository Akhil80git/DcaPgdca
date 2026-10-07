import React, { useState } from 'react';
import { X, Sparkles, Lightbulb, ChevronRight, BookOpen, Layers } from 'lucide-react';
import { allPapers } from '../data/papers';

interface QuickRevisionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPaperId?: string;
  defaultUnitIndex?: number;
}

export const QuickRevisionModal: React.FC<QuickRevisionModalProps> = ({
  isOpen,
  onClose,
  defaultPaperId = 'paper-1',
  defaultUnitIndex = 0,
}) => {
  const [selectedPaperId, setSelectedPaperId] = useState(defaultPaperId);
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(defaultUnitIndex);

  if (!isOpen) return null;

  const currentPaper = allPapers.find(p => p.id === selectedPaperId) || allPapers[0];
  const currentUnit = currentPaper.units[selectedUnitIndex] || currentPaper.units[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>एग्जाम क्विक रीविजन मोड (Exam Revision Flashcards)</span>
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                परीक्षा कक्ष में प्रवेश से पूर्व त्वरित 5-पॉइंट सारांश एवं आवश्यक शब्दावली
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Paper & Unit Selectors */}
        <div className="p-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-wrap gap-2 items-center justify-between">
          {/* Paper Dropdown */}
          <select
            value={selectedPaperId}
            onChange={(e) => {
              setSelectedPaperId(e.target.value);
              setSelectedUnitIndex(0);
            }}
            className="text-xs sm:text-sm font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-800 dark:text-slate-100 focus:outline-none"
          >
            {allPapers.map((p) => (
              <option key={p.id} value={p.id}>
                Paper {p.paperNumber}: {p.code} - {p.title}
              </option>
            ))}
          </select>

          {/* Unit Pills */}
          <div className="flex gap-1 overflow-x-auto">
            {currentPaper.units.map((u, idx) => (
              <button
                key={u.unitRoman}
                onClick={() => setSelectedUnitIndex(idx)}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg border transition-all ${
                  selectedUnitIndex === idx
                    ? 'bg-amber-500 text-white border-amber-500'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                {u.unitRoman}
              </button>
            ))}
          </div>
        </div>

        {/* Unit Summary Title */}
        <div className="px-5 py-2.5 bg-amber-50/50 dark:bg-amber-950/20 border-b border-amber-100 dark:border-amber-900/30 flex items-center justify-between">
          <span className="text-xs font-bold text-amber-900 dark:text-amber-300">
            {currentUnit.unitRoman}: {currentUnit.title}
          </span>
          <span className="text-[11px] font-semibold text-slate-400">
            5 मुख्य प्रश्न
          </span>
        </div>

        {/* Revision Cards Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 scrollbar-thin">
          {currentUnit.questions.map((q) => (
            <div
              key={q.id}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-xs space-y-2.5"
            >
              {/* Question Headline */}
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {q.number}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                  {q.question}
                </h4>
              </div>

              {/* Core Revision Summary */}
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {q.answer.summary}
              </div>

              {/* Key Exam Tip */}
              {q.answer.examTip && (
                <div className="flex items-start gap-1.5 text-xs text-amber-800 dark:text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-300/30">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>परीक्षा टिप:</strong> {q.answer.examTip}</span>
                </div>
              )}

              {/* Key terms */}
              {q.answer.keyTerms && (
                <div className="flex flex-wrap gap-1 text-[10px]">
                  {q.answer.keyTerms.map((term, tIdx) => (
                    <span key={tIdx} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-mono">
                      {term}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between text-xs text-slate-500">
          <span>PGDCA सम्पूर्ण 8 पेपर्स परीक्षा तैयारी गाइड</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700"
          >
            पूर्ण (Done)
          </button>
        </div>
      </div>
    </div>
  );
};
