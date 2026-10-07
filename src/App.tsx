/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { getPapersByCourse, allPapersPGDCA, allPapersDCA } from './data/papers';
import { Navbar } from './components/Navbar';
import { BottomNav, MainTabType } from './components/BottomNav';
import { PaperSelector } from './components/PaperSelector';
import { UnitTabs } from './components/UnitTabs';
import { QuestionCard } from './components/QuestionCard';
import { QuestionsOnlyView } from './components/QuestionsOnlyView';
import { ExamPatternView } from './components/ExamPatternView';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { 
  ChevronRight, 
  ChevronLeft, 
  Maximize2, 
  Minimize2
} from 'lucide-react';
import { Language, getPaperTitle, getPaperSubtitle } from './utils/langHelper';

export default function App() {
  // Course Mode: PGDCA or DCA
  const [course, setCourse] = useState<'PGDCA' | 'DCA'>(() => {
    return (localStorage.getItem('pgdca_dca_course') as 'PGDCA' | 'DCA') || 'PGDCA';
  });

  // Semester Filter: Sem-I or Sem-II
  const [semester, setSemester] = useState<'Sem-I' | 'Sem-II'>(() => {
    return (localStorage.getItem('pgdca_dca_sem') as 'Sem-I' | 'Sem-II') || 'Sem-I';
  });

  // Current Bottom Tab: 'questionsOnly' | 'qa' | 'examPattern'
  const [currentTab, setCurrentTab] = useState<MainTabType>(() => {
    return (localStorage.getItem('pgdca_dca_tab') as MainTabType) || 'qa';
  });

  // Language: Default is 'hi' (Hindi). When toggled, switches to 'en' (English)
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('pgdca_dca_lang') as Language) || 'hi';
  });

  // Theme: light or dark only
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('pgdca_theme_v2');
    if (saved) return saved === 'dark' ? 'dark' : 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Sync theme with DOM documentElement
  useEffect(() => {
    localStorage.setItem('pgdca_theme_v2', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  // Sync Language
  useEffect(() => {
    localStorage.setItem('pgdca_dca_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const handleToggleLang = () => {
    setLang(prev => (prev === 'hi' ? 'en' : 'hi'));
  };

  // Sync Course & Semester to localStorage
  useEffect(() => {
    localStorage.setItem('pgdca_dca_course', course);
  }, [course]);

  useEffect(() => {
    localStorage.setItem('pgdca_dca_sem', semester);
  }, [semester]);

  useEffect(() => {
    localStorage.setItem('pgdca_dca_tab', currentTab);
  }, [currentTab]);

  // Papers for current course
  const coursePapers = useMemo(() => getPapersByCourse(course), [course]);

  // Selected Paper state
  const [selectedPaperId, setSelectedPaperId] = useState<string>(() => {
    const firstForSem = coursePapers.find(p => p.semester === semester);
    return firstForSem ? firstForSem.id : coursePapers[0].id;
  });

  // When Course or Semester changes, select first paper of that semester
  const handleSemesterChange = (newSem: 'Sem-I' | 'Sem-II') => {
    setSemester(newSem);
    const firstForSem = coursePapers.find(p => p.semester === newSem);
    if (firstForSem) {
      setSelectedPaperId(firstForSem.id);
      setActiveUnitIndex(0);
    }
  };

  const handleCourseChange = (newCourse: 'PGDCA' | 'DCA') => {
    setCourse(newCourse);
    const newPapers = getPapersByCourse(newCourse);
    const firstForSem = newPapers.find(p => p.semester === semester) || newPapers[0];
    setSelectedPaperId(firstForSem.id);
    setActiveUnitIndex(0);
  };

  // Active Unit Index (0 to 4)
  const [activeUnitIndex, setActiveUnitIndex] = useState<number>(0);

  // Completed & Bookmarked tracking
  const [completedQuestions, setCompletedQuestions] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pgdca_completed_v2');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pgdca_bookmarks_v2');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Question Filters in Q&A mode
  const [filterMode, setFilterMode] = useState<'all' | 'unread' | 'completed' | 'bookmarked'>('all');
  const [expandAll, setExpandAll] = useState<boolean>(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('pgdca_completed_v2', JSON.stringify(completedQuestions));
  }, [completedQuestions]);

  useEffect(() => {
    localStorage.setItem('pgdca_bookmarks_v2', JSON.stringify(bookmarkedQuestions));
  }, [bookmarkedQuestions]);

  // Current active paper & unit
  const currentPaper = useMemo(() => {
    return coursePapers.find(p => p.id === selectedPaperId) || coursePapers[0];
  }, [coursePapers, selectedPaperId]);

  const currentUnit = useMemo(() => {
    return currentPaper.units[activeUnitIndex] || currentPaper.units[0];
  }, [currentPaper, activeUnitIndex]);

  // Filtered questions in Q&A mode
  const displayedQuestions = useMemo(() => {
    if (!currentUnit) return [];
    return currentUnit.questions.filter(q => {
      if (filterMode === 'unread') return !completedQuestions.includes(q.id);
      if (filterMode === 'completed') return completedQuestions.includes(q.id);
      if (filterMode === 'bookmarked') return bookmarkedQuestions.includes(q.id);
      return true;
    });
  }, [currentUnit, filterMode, completedQuestions, bookmarkedQuestions]);

  // Toggle handlers
  const handleToggleComplete = (id: string) => {
    setCompletedQuestions(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleToggleBookmark = (id: string) => {
    setBookmarkedQuestions(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleJumpToAnswer = (paperId: string, unitIndex: number, questionId: string) => {
    const targetPaper = coursePapers.find(p => p.id === paperId);
    if (targetPaper && targetPaper.semester !== semester) {
      setSemester(targetPaper.semester);
    }
    setSelectedPaperId(paperId);
    setActiveUnitIndex(unitIndex);
    setCurrentTab('qa');
    setTimeout(() => {
      const el = document.getElementById(`q-${questionId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  const handleSelectSearchResult = (paperId: string, unitIndex: number, questionId: string) => {
    const inCurrent = coursePapers.some(p => p.id === paperId);
    if (!inCurrent) {
      const targetCourse = course === 'PGDCA' ? 'DCA' : 'PGDCA';
      setCourse(targetCourse);
      const targetPapers = getPapersByCourse(targetCourse);
      const targetP = targetPapers.find(p => p.id === paperId);
      if (targetP) setSemester(targetP.semester);
    } else {
      const targetP = coursePapers.find(p => p.id === paperId);
      if (targetP) setSemester(targetP.semester);
    }
    setSelectedPaperId(paperId);
    setActiveUnitIndex(unitIndex);
    setCurrentTab('qa');
    setTimeout(() => {
      const el = document.getElementById(`q-${questionId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  const paperTitle = getPaperTitle(currentPaper, lang);
  const paperSubtitle = getPaperSubtitle(currentPaper, lang);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200 text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950">
      
      {/* Top Navbar: soft pastel colors, compact, search, and dark/light toggle */}
      <Navbar
        currentCourse={course}
        onCourseChange={handleCourseChange}
        currentSemester={semester}
        onSemesterChange={handleSemesterChange}
        theme={theme}
        onToggleTheme={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
        onOpenSearch={() => setIsSearchOpen(true)}
        lang={lang}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 pt-3 pb-20">

        {/* VIEW 1: परीक्षा पैटर्न (Exam Pattern & Marks Scheme) */}
        {currentTab === 'examPattern' && (
          <ExamPatternView
            initialCourse={course}
            onSwitchToCourse={handleCourseChange}
            lang={lang}
          />
        )}

        {/* VIEW 2: केवल प्रश्न (Questions Only Mode) */}
        {currentTab === 'questionsOnly' && (
          <div>
            <PaperSelector
              papers={coursePapers}
              selectedPaperId={selectedPaperId}
              onSelectPaper={(id) => {
                setSelectedPaperId(id);
                setActiveUnitIndex(0);
              }}
              completedQuestions={completedQuestions}
              currentSemester={semester}
              lang={lang}
            />

            <QuestionsOnlyView
              currentPaper={currentPaper}
              activeUnitIndex={activeUnitIndex}
              onSelectUnit={(idx) => setActiveUnitIndex(idx)}
              onJumpToAnswer={handleJumpToAnswer}
              completedQuestions={completedQuestions}
              bookmarkedQuestions={bookmarkedQuestions}
              onToggleComplete={handleToggleComplete}
              onToggleBookmark={handleToggleBookmark}
              lang={lang}
            />
          </div>
        )}

        {/* VIEW 3: प्रश्न + उत्तर (Full Q & A Mode) */}
        {currentTab === 'qa' && (
          <div>
            <PaperSelector
              papers={coursePapers}
              selectedPaperId={selectedPaperId}
              onSelectPaper={(id) => {
                setSelectedPaperId(id);
                setActiveUnitIndex(0);
              }}
              completedQuestions={completedQuestions}
              currentSemester={semester}
              lang={lang}
            />

            {/* Paper Hero Card */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-3.5 sm:p-5 mb-4 shadow-2xs relative overflow-hidden">
              <div className={`absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b ${currentPaper.color}`} />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pl-2">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40 font-mono">
                      {currentPaper.code}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {course} • {currentPaper.semester} • Paper {currentPaper.paperNumber}
                    </span>
                  </div>

                  <h1 className="text-base sm:text-xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                    {paperTitle}
                  </h1>
                  <h2 className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    {paperSubtitle}
                  </h2>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
                    {currentPaper.description}
                  </p>
                </div>

                {/* Progress Mini Box */}
                <div className="flex-shrink-0 flex items-center gap-2 pl-2 md:pl-0 border-t md:border-t-0 pt-2 md:pt-0 border-slate-100 dark:border-slate-700">
                  <div className="text-center px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <div className="text-[9px] text-slate-400 font-bold uppercase">
                      {lang === 'hi' ? 'तैयार प्रश्न' : 'Completed'}
                    </div>
                    <div className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                      {currentPaper.units.flatMap(u => u.questions).filter(q => completedQuestions.includes(q.id)).length}/25
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Unit Navigation Tabs (Unit I to V) */}
            <UnitTabs
              units={currentPaper.units}
              activeUnitIndex={activeUnitIndex}
              onSelectUnit={(idx) => {
                setActiveUnitIndex(idx);
                setFilterMode('all');
              }}
              completedQuestions={completedQuestions}
              lang={lang}
            />

            {/* Unit Header & Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3 px-1 no-print">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800">
                    {currentUnit?.unitRoman}
                  </span>
                  <h2 className="text-sm sm:text-base font-black text-slate-800 dark:text-slate-100">
                    {currentUnit?.title}
                  </h2>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {lang === 'hi'
                    ? 'विस्तृत उत्तर, तुलना तालिकाएं व परीक्षा टिप्स'
                    : 'Detailed answers, comparison tables, and exam scoring tips'}
                </p>
              </div>

              {/* Filters & Expand All */}
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-0.5 text-xs font-medium">
                  <button
                    onClick={() => setFilterMode('all')}
                    className={`px-2.5 py-0.5 rounded-lg transition-colors text-xs cursor-pointer ${
                      filterMode === 'all'
                        ? 'bg-indigo-100/90 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200 font-bold border border-indigo-200/90 dark:border-indigo-800 shadow-2xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600'
                    }`}
                  >
                    {lang === 'hi' ? 'सभी (5)' : 'All (5)'}
                  </button>
                  <button
                    onClick={() => setFilterMode('unread')}
                    className={`px-2.5 py-0.5 rounded-lg transition-colors text-xs cursor-pointer ${
                      filterMode === 'unread'
                        ? 'bg-indigo-100/90 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200 font-bold border border-indigo-200/90 dark:border-indigo-800 shadow-2xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600'
                    }`}
                  >
                    {lang === 'hi' ? 'शेष' : 'Unread'}
                  </button>
                  <button
                    onClick={() => setFilterMode('bookmarked')}
                    className={`px-2.5 py-0.5 rounded-lg transition-colors text-xs cursor-pointer ${
                      filterMode === 'bookmarked'
                        ? 'bg-amber-100/90 text-amber-800 dark:bg-amber-950 dark:text-amber-200 font-bold border border-amber-200/90 dark:border-amber-800 shadow-2xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-amber-500'
                    }`}
                  >
                    {lang === 'hi' ? 'बुकमार्क' : 'Saved'}
                  </button>
                </div>

                <button
                  onClick={() => setExpandAll(!expandAll)}
                  className="p-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs flex items-center gap-1 font-semibold cursor-pointer"
                  title={expandAll ? (lang === 'hi' ? 'सभी उत्तर समेटें' : 'Collapse All') : (lang === 'hi' ? 'सभी उत्तर खोलें' : 'Expand All')}
                >
                  {expandAll ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">
                    {expandAll ? (lang === 'hi' ? 'समेटें' : 'Collapse') : (lang === 'hi' ? 'खोलें' : 'Expand')}
                  </span>
                </button>
              </div>
            </div>

            {/* Questions List with Full Detailed Answers */}
            {displayedQuestions.length === 0 ? (
              <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/40">
                <p className="text-sm font-semibold text-slate-500">
                  {lang === 'hi' ? 'इस फिल्टर में कोई प्रश्न नहीं है।' : 'No questions matching this filter.'}
                </p>
                <button
                  onClick={() => setFilterMode('all')}
                  className="mt-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                >
                  {lang === 'hi' ? 'सभी प्रश्न देखें' : 'View all questions'}
                </button>
              </div>
            ) : (
              <div className="space-y-3.5">
                {displayedQuestions.map((q) => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    paperTitle={paperTitle}
                    paperCode={currentPaper.code}
                    unitRoman={currentUnit.unitRoman}
                    isCompleted={completedQuestions.includes(q.id)}
                    isBookmarked={bookmarkedQuestions.includes(q.id)}
                    onToggleComplete={handleToggleComplete}
                    onToggleBookmark={handleToggleBookmark}
                    fontSize="base"
                    defaultExpanded={expandAll}
                    lang={lang}
                  />
                ))}
              </div>
            )}

            {/* Unit Pagination Controls */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between no-print">
              <button
                onClick={() => {
                  if (activeUnitIndex > 0) setActiveUnitIndex(activeUnitIndex - 1);
                }}
                disabled={activeUnitIndex === 0}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold disabled:opacity-40 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'पिछली यूनिट' : 'Previous Unit'}</span>
              </button>

              <span className="text-xs font-bold text-slate-500">
                {lang === 'hi' ? `यूनिट ${activeUnitIndex + 1} / 5` : `Unit ${activeUnitIndex + 1} of 5`}
              </span>

              <button
                onClick={() => {
                  if (activeUnitIndex < currentPaper.units.length - 1) setActiveUnitIndex(activeUnitIndex + 1);
                }}
                disabled={activeUnitIndex === currentPaper.units.length - 1}
                className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold disabled:opacity-40 cursor-pointer transition-colors shadow-2xs"
              >
                <span>{lang === 'hi' ? 'अगली यूनिट' : 'Next Unit'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

      </main>

      {/* SLEEK COMPACT BOTTOM NAVIGATION: 3 primary icons + Hindi/English translation toggle */}
      <BottomNav
        currentTab={currentTab}
        onTabChange={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currentCourse={course}
        currentLang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectSearchResult}
        lang={lang}
      />

      {/* Bookmarks Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedIds={bookmarkedQuestions}
        onRemoveBookmark={handleToggleBookmark}
        onJumpToQuestion={handleSelectSearchResult}
        lang={lang}
      />

    </div>
  );
}
