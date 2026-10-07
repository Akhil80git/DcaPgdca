import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Bookmark, 
  CheckCircle2, 
  Copy, 
  Check, 
  Volume2, 
  VolumeX, 
  Lightbulb, 
  Tag, 
  FileText
} from 'lucide-react';
import { Question } from '../types';
import { getQuestionText, Language } from '../utils/langHelper';

interface QuestionCardProps {
  question: Question;
  paperTitle: string;
  paperCode: string;
  unitRoman: string;
  isCompleted: boolean;
  isBookmarked: boolean;
  onToggleComplete: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  defaultExpanded?: boolean;
  lang?: Language;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  paperTitle,
  paperCode,
  unitRoman,
  isCompleted,
  isBookmarked,
  onToggleComplete,
  onToggleBookmark,
  fontSize,
  defaultExpanded = true,
  lang = 'hi',
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const questionDisplay = getQuestionText(question, lang);

  const getFontSizeClasses = () => {
    switch (fontSize) {
      case 'sm':
        return {
          title: 'text-sm sm:text-base',
          body: 'text-xs sm:text-sm leading-relaxed',
          heading: 'text-xs sm:text-sm font-bold',
        };
      case 'lg':
        return {
          title: 'text-lg sm:text-xl',
          body: 'text-base sm:text-lg leading-relaxed',
          heading: 'text-base sm:text-lg font-bold',
        };
      case 'xl':
        return {
          title: 'text-xl sm:text-2xl',
          body: 'text-lg sm:text-xl leading-relaxed',
          heading: 'text-lg sm:text-xl font-bold',
        };
      case 'base':
      default:
        return {
          title: 'text-base sm:text-lg',
          body: 'text-sm sm:text-base leading-relaxed',
          heading: 'text-sm sm:text-base font-bold',
        };
    }
  };

  const fontClasses = getFontSizeClasses();

  // Copy answer to clipboard
  const handleCopy = () => {
    const fullText = `[PGDCA ${paperCode} - ${unitRoman} - ${lang === 'hi' ? 'प्रश्न' : 'Q'}${question.number}]\n${questionDisplay}\n\n[${lang === 'hi' ? 'संक्षिप्त सार' : 'Summary'}]:\n${question.answer.summary}\n\n` +
      question.answer.sections.map(s => {
        let text = `${s.heading}\n${s.content}\n`;
        if (s.points) text += s.points.map(p => `• ${p}`).join('\n') + '\n';
        if (s.codeOrExample) text += `\n${lang === 'hi' ? 'उदाहरण / कोड' : 'Example / Code'}:\n${s.codeOrExample}\n`;
        return text;
      }).join('\n') +
      (question.answer.examTip ? `\n[${lang === 'hi' ? 'परीक्षा टिप' : 'Exam Tip'}]: ${question.answer.examTip}\n` : '');

    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Text to Speech
  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) {
      alert(lang === 'hi' ? 'आपके ब्राउज़र में Text-to-Speech समर्थित नहीं है।' : 'Text-to-Speech is not supported in your browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    // Construct text to read
    const textToRead = `${questionDisplay}. ${question.answer.summary}. ` +
      question.answer.sections.map(s => `${s.heading}. ${s.content}`).join('. ');

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
    utterance.rate = 0.95;

    // Try finding matched voice
    const voices = window.speechSynthesis.getVoices();
    if (lang === 'hi') {
      const hindiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('Hindi'));
      if (hindiVoice) utterance.voice = hindiVoice;
    } else {
      const enVoice = voices.find(v => v.lang.includes('en'));
      if (enVoice) utterance.voice = enVoice;
    }

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <article
      id={`q-${question.id}`}
      className={`rounded-2xl border transition-all duration-200 mb-5 overflow-hidden shadow-2xs ${
        isCompleted
          ? 'border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/20 dark:bg-emerald-950/10'
          : 'border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800'
      }`}
    >
      {/* Question Header Card */}
      <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-700/60">
        <div className="flex items-start justify-between gap-3">
          
          <div className="flex-1 min-w-0">
            {/* Meta Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
              <span className="px-2 py-0.5 rounded-md font-bold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40">
                {unitRoman} • Q{question.number}
              </span>
              <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">
                {paperCode}
              </span>
              {isCompleted && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {lang === 'hi' ? 'तैयार' : 'Completed'}
                </span>
              )}
            </div>

            {/* Question Text - MAIN HERO OF THE CARD */}
            <h3
              onClick={() => setIsExpanded(!isExpanded)}
              className={`font-black text-slate-900 dark:text-slate-100 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors leading-snug ${fontClasses.title}`}
            >
              <span className="text-indigo-600 dark:text-indigo-400 mr-1.5 font-bold">
                {lang === 'hi' ? `प्र. ${question.number}:` : `Q${question.number}.`}
              </span>
              {questionDisplay}
            </h3>

            {/* Sub-topics Covered */}
            {question.topics && question.topics.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                <Tag className="w-3 h-3 text-slate-400" />
                {question.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action Bar (Subtle Buttons) */}
          <div className="flex items-center gap-1 flex-shrink-0 no-print">
            {/* Listen Audio */}
            <button
              onClick={handleSpeak}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isSpeaking
                  ? 'bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-900/50 dark:text-amber-300 animate-pulse'
                  : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-100 border-slate-200 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
              title={isSpeaking ? (lang === 'hi' ? 'ऑडियो रोकें' : 'Stop Audio') : (lang === 'hi' ? 'उत्तर सुनें' : 'Listen Audio')}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Bookmark */}
            <button
              onClick={() => onToggleBookmark(question.id)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-100 text-amber-600 border-amber-300 dark:bg-amber-900/40 dark:text-amber-400'
                  : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-100 border-slate-200 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
              title={isBookmarked ? (lang === 'hi' ? 'बुकमार्क हटाएं' : 'Remove Bookmark') : (lang === 'hi' ? 'बुकमार्क करें' : 'Bookmark')}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
            </button>

            {/* Mark as Done */}
            <button
              onClick={() => onToggleComplete(question.id)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-900/40 dark:text-emerald-300'
                  : 'text-slate-500 hover:text-emerald-600 hover:bg-slate-100 border-slate-200 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
              title={isCompleted ? (lang === 'hi' ? 'अपूर्ण चिह्नित करें' : 'Mark Undone') : (lang === 'hi' ? 'पूर्ण चिह्नित करें' : 'Mark Done')}
            >
              <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'fill-emerald-500 text-white' : ''}`} />
            </button>

            {/* Expand / Collapse Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
              title={isExpanded ? (lang === 'hi' ? 'उत्तर समेटें' : 'Collapse Answer') : (lang === 'hi' ? 'उत्तर देखें' : 'Expand Answer')}
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Answer Body (Accordion / Detailed View) */}
      {isExpanded && (
        <div className="p-4 sm:p-6 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-700/40 answer-content">
          
          {/* Answer Quick Summary Box */}
          {question.answer.summary && (
            <div className="mb-5 p-3.5 sm:p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-extrabold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>{lang === 'hi' ? 'संक्षिप्त सार (Quick Summary):' : 'Quick Summary:'}</span>
              </div>
              <p className={`text-slate-800 dark:text-slate-200 font-medium ${fontClasses.body}`}>
                {question.answer.summary}
              </p>
            </div>
          )}

          {/* Detailed Sections */}
          <div className="space-y-5">
            {question.answer.sections.map((section, idx) => (
              <div key={idx} className="space-y-2.5">
                <h4 className={`text-slate-900 dark:text-slate-100 border-l-4 border-indigo-500 pl-2.5 ${fontClasses.heading}`}>
                  {section.heading}
                </h4>

                {section.content && (
                  <p className={`text-slate-700 dark:text-slate-300 leading-relaxed ${fontClasses.body}`}>
                    {section.content}
                  </p>
                )}

                {/* Bullet Points */}
                {section.points && section.points.length > 0 && (
                  <ul className="space-y-2 pl-2">
                    {section.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                        <span className={fontClasses.body}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Responsive Comparison Table */}
                {section.table && (
                  <div className="my-3 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-2.5 sm:p-3 font-bold whitespace-nowrap">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/60">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-indigo-50/40 dark:hover:bg-slate-800/40 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-2.5 sm:p-3 text-slate-700 dark:text-slate-300 align-top">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Code or Practical Syntax Block */}
                {section.codeOrExample && (
                  <div className="my-3 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100">
                    <div className="px-4 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                      <span>{lang === 'hi' ? 'उदाहरण / सिंटैक्स' : 'Example / Syntax'}</span>
                      <span>Code Block</span>
                    </div>
                    <pre className="p-3.5 text-xs sm:text-sm font-mono overflow-x-auto whitespace-pre leading-relaxed text-emerald-400">
                      <code>{section.codeOrExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Exam Tip */}
          {question.answer.examTip && (
            <div className="mt-5 p-3.5 rounded-xl bg-amber-50/90 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider mb-0.5">
                  {lang === 'hi' ? 'परीक्षा स्कोरिंग टिप (Exam Tip):' : 'Exam Scoring Tip:'}
                </h5>
                <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
                  {question.answer.examTip}
                </p>
              </div>
            </div>
          )}

          {/* Key Terms */}
          {question.answer.keyTerms && question.answer.keyTerms.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-1">
                {lang === 'hi' ? 'महत्वपूर्ण शब्दावली:' : 'Key Terms:'}
              </span>
              {question.answer.keyTerms.map((term, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold"
                >
                  {term}
                </span>
              ))}
            </div>
          )}

          {/* Bottom Card Actions: Copy Answer Button */}
          <div className="mt-5 pt-3.5 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between no-print">
            <span className="text-[11px] text-slate-400">
              PGDCA 2026 Model Answer
            </span>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {lang === 'hi' ? 'कॉपी हो गया!' : 'Copied!'}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'उत्तर कॉपी करें' : 'Copy Answer'}</span>
                </>
              )}
            </button>
          </div>

        </div>
      )}
    </article>
  );
};
