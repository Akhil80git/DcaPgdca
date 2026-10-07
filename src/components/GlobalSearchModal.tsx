import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Layers, ArrowRight, CornerDownLeft } from 'lucide-react';
import { allPapers } from '../data/papers';
import { getQuestionText, Language } from '../utils/langHelper';

interface SearchResult {
  paperId: string;
  paperTitle: string;
  paperCode: string;
  paperNumber: number;
  unitIndex: number;
  unitRoman: string;
  unitTitle: string;
  questionId: string;
  questionNumber: number;
  questionTitle: string;
  summary: string;
  matchedField: string;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (paperId: string, unitIndex: number, questionId: string) => void;
  lang?: Language;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
  lang = 'hi',
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo<SearchResult[]>(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed || trimmed.length < 2) return [];

    const matches: SearchResult[] = [];

    for (const paper of allPapers) {
      for (let uIdx = 0; uIdx < paper.units.length; uIdx++) {
        const unit = paper.units[uIdx];
        for (const q of unit.questions) {
          const qTextHi = getQuestionText(q, 'hi').toLowerCase();
          const qTextEn = getQuestionText(q, 'en').toLowerCase();
          const qTopics = q.topics.map(t => t.toLowerCase()).join(' ');
          const summary = q.answer.summary.toLowerCase();
          const keyTerms = (q.answer.keyTerms || []).map(k => k.toLowerCase()).join(' ');
          
          let matchedField = '';
          if (qTextHi.includes(trimmed) || qTextEn.includes(trimmed)) {
            matchedField = lang === 'hi' ? 'प्रश्न में (In Question)' : 'In Question';
          } else if (qTopics.includes(trimmed)) {
            matchedField = lang === 'hi' ? 'टॉपिक टैग में (Topic Tag)' : 'In Topic Tag';
          } else if (keyTerms.includes(trimmed)) {
            matchedField = lang === 'hi' ? 'महत्वपूर्ण शब्दावली में (Key Term)' : 'In Key Terms';
          } else if (summary.includes(trimmed)) {
            matchedField = lang === 'hi' ? 'सारांश में (In Summary)' : 'In Summary';
          } else {
            // Check in sections
            for (const sec of q.answer.sections) {
              if (sec.heading.toLowerCase().includes(trimmed) || sec.content.toLowerCase().includes(trimmed)) {
                matchedField = lang === 'hi' ? 'विस्तृत उत्तर में (In Answer)' : 'In Detailed Answer';
                break;
              }
            }
          }

          if (matchedField) {
            matches.push({
              paperId: paper.id,
              paperTitle: paper.title,
              paperCode: paper.code,
              paperNumber: paper.paperNumber,
              unitIndex: uIdx,
              unitRoman: unit.unitRoman,
              unitTitle: unit.title,
              questionId: q.id,
              questionNumber: q.number,
              questionTitle: getQuestionText(q, lang),
              summary: q.answer.summary,
              matchedField,
            });
          }
        }
      }
    }

    return matches;
  }, [query, lang]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-10 sm:pt-16 px-3 sm:px-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header with ALWAYS-VISIBLE Cross (Close) Icon */}
        <div className="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2.5">
          <Search className="w-5 h-5 text-indigo-500 flex-shrink-0" />
          
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              lang === 'hi'
                ? "सभी 200 प्रश्नों में खोजें (उदा: SSD, Tally, Normalization, CSS)..."
                : "Search in all 200 questions (e.g. SSD, Tally, Normalization, CSS)..."
            }
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none font-medium"
          />

          {/* Clear query button if query is present */}
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              title="सर्च टेक्स्ट साफ़ करें"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* ALWAYS VISIBLE PROMINENT CLOSE BUTTON (Cross Icon) */}
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors flex-shrink-0 cursor-pointer shadow-2xs"
            title={lang === 'hi' ? "खोज बंद करें (Close)" : "Close Search"}
            aria-label="Close search modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-2 flex-1 scrollbar-thin">
          {query.trim().length < 2 ? (
            <div className="text-center py-10 px-4 text-slate-400">
              <BookOpen className="w-10 h-10 mx-auto mb-2 opacity-40 text-indigo-500" />
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                {lang === 'hi'
                  ? "PGDCA के सभी 8 पेपर्स व 200 प्रश्नों में तुरंत खोजें"
                  : "Instant search across all 8 PGDCA papers and 200 questions"}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'hi'
                  ? 'सुझाव: "Mail Merge", "GSTR-1", "Docker", "Photoshop", "RAM vs ROM", "Primary Key"'
                  : 'Suggestions: "Mail Merge", "GSTR-1", "Docker", "Photoshop", "RAM vs ROM", "Primary Key"'}
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10 text-slate-500">
              <p className="text-sm font-semibold">
                "{query}" {lang === 'hi' ? 'के लिए कोई प्रश्न नहीं मिला' : 'no questions found'}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'hi' ? 'कृपया कोई अन्य कीवर्ड टाइप करके देखें' : 'Please try another keyword'}
              </p>
            </div>
          ) : (
            <>
              <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex justify-between">
                <span>
                  {lang === 'hi' ? `परिणाम (${results.length} प्रश्न मिले)` : `Results (${results.length} found)`}
                </span>
                <span>{lang === 'hi' ? 'क्लिक करके खोलें' : 'Click to open'}</span>
              </div>

              {results.map((res) => (
                <div
                  key={res.questionId}
                  onClick={() => {
                    onSelectResult(res.paperId, res.unitIndex, res.questionId);
                    onClose();
                  }}
                  className="p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50/40 dark:hover:bg-slate-800/60 cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-2 mb-1 text-[11px] font-bold">
                    <span className="px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40">
                      Paper {res.paperNumber}: {res.paperCode}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {res.unitRoman} (Q{res.questionNumber})
                    </span>
                    <span className="ml-auto text-[10px] px-1.5 py-0.2 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-semibold border border-amber-200/60 dark:border-amber-800/40">
                      {res.matchedField}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {res.questionTitle}
                  </h4>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                    {res.summary}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-[11px] text-slate-500 flex items-center justify-between">
          <span>
            {lang === 'hi' ? 'कुल 8 पेपर्स • 40 यूनिट्स • 200 प्रश्नोत्तर' : 'All 8 Papers • 40 Units • 200 Q&As'}
          </span>
          <button
            onClick={onClose}
            className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium"
          >
            <X className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'बंद करें (Close)' : 'Close'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
