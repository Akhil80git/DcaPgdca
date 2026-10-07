import React from 'react';
import { Bookmark, X, ExternalLink, Trash2 } from 'lucide-react';
import { allPapers } from '../data/papers';
import { getQuestionText, Language } from '../utils/langHelper';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedIds: string[];
  onRemoveBookmark: (id: string) => void;
  onJumpToQuestion: (paperId: string, unitIndex: number, questionId: string) => void;
  lang?: Language;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedIds,
  onRemoveBookmark,
  onJumpToQuestion,
  lang = 'hi',
}) => {
  if (!isOpen) return null;

  // Find all bookmarked questions details
  const bookmarkedItems: {
    paperId: string;
    paperTitle: string;
    paperCode: string;
    unitIndex: number;
    unitRoman: string;
    questionId: string;
    questionNumber: number;
    questionTitle: string;
  }[] = [];

  for (const paper of allPapers) {
    for (let uIdx = 0; uIdx < paper.units.length; uIdx++) {
      const unit = paper.units[uIdx];
      for (const q of unit.questions) {
        if (bookmarkedIds.includes(q.id)) {
          bookmarkedItems.push({
            paperId: paper.id,
            paperTitle: paper.title,
            paperCode: paper.code,
            unitIndex: uIdx,
            unitRoman: unit.unitRoman,
            questionId: q.id,
            questionNumber: q.number,
            questionTitle: getQuestionText(q, lang),
          });
        }
      }
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col border-l border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
            <div>
              <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                {lang === 'hi' ? 'बुकमार्क किए गए प्रश्न' : 'Bookmarked Questions'}
              </h3>
              <p className="text-xs text-slate-500">
                {bookmarkedItems.length} {lang === 'hi' ? 'प्रश्न सहेजे गए' : 'questions saved'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bookmarks List */}
        <div className="p-4 space-y-3 flex-1 overflow-y-auto scrollbar-thin">
          {bookmarkedItems.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <Bookmark className="w-12 h-12 mx-auto mb-3 opacity-30 text-amber-500" />
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                {lang === 'hi' ? 'कोई प्रश्न बुकमार्क नहीं किया गया' : 'No bookmarked questions yet'}
              </p>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                {lang === 'hi' 
                  ? 'महत्वपूर्ण प्रश्नों को दोबारा पढ़ने के लिए बुकमार्क आइकन (🔖) पर क्लिक करें।' 
                  : 'Click the bookmark icon (🔖) on any question to save it for quick review.'}
              </p>
            </div>
          ) : (
            bookmarkedItems.map((item) => (
              <div
                key={item.questionId}
                className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-100/60 dark:hover:bg-slate-800 transition-colors group flex items-start justify-between gap-3"
              >
                <div 
                  className="flex-1 cursor-pointer"
                  onClick={() => {
                    onJumpToQuestion(item.paperId, item.unitIndex, item.questionId);
                    onClose();
                  }}
                >
                  <div className="flex items-center gap-2 mb-1 text-[11px] font-bold">
                    <span className="text-indigo-600 dark:text-indigo-400 font-mono">
                      {item.paperCode}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">
                      {item.unitRoman} (Q{item.questionNumber})
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {item.questionTitle}
                  </h4>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => {
                      onJumpToQuestion(item.paperId, item.unitIndex, item.questionId);
                      onClose();
                    }}
                    className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-700"
                    title={lang === 'hi' ? 'प्रश्न पर जाएं' : 'Go to Question'}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveBookmark(item.questionId)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40"
                    title={lang === 'hi' ? 'बुकमार्क से हटाएं' : 'Remove from bookmarks'}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-400">
          {lang === 'hi' ? 'स्थानीय डिवाइस पर सुरक्षित' : 'Saved locally on your device'}
        </div>
      </div>
    </div>
  );
};
