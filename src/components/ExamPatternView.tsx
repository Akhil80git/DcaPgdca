import React, { useState } from 'react';
import { pgdcaPattern, dcaPattern, passingCriteria, typingDetails } from '../data/examSchemeData';
import { 
  Award, 
  CheckCircle, 
  Keyboard, 
  FileSpreadsheet, 
  Info, 
  GraduationCap, 
  BookOpen,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

import { Language } from '../utils/langHelper';

interface ExamPatternViewProps {
  initialCourse?: 'PGDCA' | 'DCA';
  onSwitchToCourse?: (c: 'PGDCA' | 'DCA') => void;
  lang?: Language;
}

export const ExamPatternView: React.FC<ExamPatternViewProps> = ({
  initialCourse = 'PGDCA',
  onSwitchToCourse,
  lang = 'hi',
}) => {
  const [course, setCourse] = useState<'PGDCA' | 'DCA'>(initialCourse);

  const pattern = course === 'PGDCA' ? pgdcaPattern : dcaPattern;

  const handleCourseChange = (c: 'PGDCA' | 'DCA') => {
    setCourse(c);
    if (onSwitchToCourse) onSwitchToCourse(c);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-12 animate-in fade-in duration-200">
      
      {/* Course Scheme Banner */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-xs">
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>July-2026 Examination Scheme</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              {pattern.courseName} – सम्पूर्ण पेपर पैटर्न व अंक तालिका
            </h1>
            <p className="text-sm text-indigo-200 mt-1">
              {pattern.fullName} • कुल {pattern.totalPapers} पेपर्स • Grand Total: {pattern.grandTotal} Marks
            </p>

            {/* Selected Subjects Pills */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-amber-300">आपके चयनित विषय:</span>
              {pattern.selectedElectives.map((el, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white/15 border border-white/10 text-white font-medium"
                >
                  ✓ {el}
                </span>
              ))}
            </div>
          </div>

          {/* Course Switch Buttons */}
          <div className="flex bg-slate-950/60 p-1.5 rounded-2xl border border-white/15 backdrop-blur-md flex-shrink-0 self-stretch sm:self-auto justify-center">
            <button
              onClick={() => handleCourseChange('PGDCA')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                course === 'PGDCA'
                  ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              📘 PGDCA (8 पेपर्स)
            </button>
            <button
              onClick={() => handleCourseChange('DCA')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                course === 'DCA'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              📗 DCA (6 पेपर्स)
            </button>
          </div>
        </div>
      </div>

      {/* Semester - I Table */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-900/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-extrabold text-sm flex items-center justify-center">
              S1
            </span>
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                SEMESTER - I
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                प्रथम सेमेस्टर विषय-वार थ्योरी, प्रैक्टिकल व इंटरनल अंक
              </p>
            </div>
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
            Sem I Total: {pattern.sem1Papers.reduce((sum, p) => sum + p.total, 0)} Marks
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100/70 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-bold">
                <th className="p-3 pl-4">Paper Code</th>
                <th className="p-3">Subject Name</th>
                <th className="p-3 text-center">Theory</th>
                <th className="p-3 text-center">Practical</th>
                <th className="p-3 text-center">Internal</th>
                <th className="p-3 pr-4 text-right">Total Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 font-medium">
              {pattern.sem1Papers.map((paper, idx) => (
                <tr key={idx} className="hover:bg-indigo-50/30 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="p-3 pl-4 font-bold font-mono text-indigo-600 dark:text-indigo-400">
                    {paper.code}
                  </td>
                  <td className="p-3 text-slate-800 dark:text-slate-200 font-semibold">
                    {paper.subject}
                  </td>
                  <td className="p-3 text-center text-slate-600 dark:text-slate-300">
                    {paper.theory}
                  </td>
                  <td className="p-3 text-center text-slate-600 dark:text-slate-300">
                    {paper.practical}
                  </td>
                  <td className="p-3 text-center text-slate-600 dark:text-slate-300">
                    {paper.internal}
                  </td>
                  <td className="p-3 pr-4 text-right font-black text-slate-900 dark:text-slate-100">
                    {paper.total}
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-50 dark:bg-slate-900/60 font-bold text-slate-900 dark:text-slate-100 border-t-2 border-slate-300 dark:border-slate-700">
                <td colSpan={2} className="p-3 pl-4 text-indigo-700 dark:text-indigo-300 uppercase tracking-wide">
                  Semester - I कुल योग (Total)
                </td>
                <td className="p-3 text-center">{pattern.sem1Papers.reduce((s, p) => s + p.theory, 0)}</td>
                <td className="p-3 text-center">{pattern.sem1Papers.reduce((s, p) => s + p.practical, 0)}</td>
                <td className="p-3 text-center">{pattern.sem1Papers.reduce((s, p) => s + p.internal, 0)}</td>
                <td className="p-3 pr-4 text-right text-indigo-600 dark:text-indigo-400 font-black text-sm">
                  {pattern.sem1Papers.reduce((s, p) => s + p.total, 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Semester - II Table */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-900/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-extrabold text-sm flex items-center justify-center">
              S2
            </span>
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                SEMESTER - II
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                द्वितीय सेमेस्टर विषय-वार थ्योरी, प्रैक्टिकल व इंटरनल अंक
              </p>
            </div>
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            Sem II Total: {pattern.sem2Papers.reduce((sum, p) => sum + p.total, 0)} Marks
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100/70 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-bold">
                <th className="p-3 pl-4">Paper Code</th>
                <th className="p-3">Subject Name</th>
                <th className="p-3 text-center">Theory</th>
                <th className="p-3 text-center">Practical</th>
                <th className="p-3 text-center">Internal</th>
                <th className="p-3 pr-4 text-right">Total Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 font-medium">
              {pattern.sem2Papers.map((paper, idx) => (
                <tr key={idx} className="hover:bg-emerald-50/30 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="p-3 pl-4 font-bold font-mono text-emerald-600 dark:text-emerald-400">
                    {paper.code}
                  </td>
                  <td className="p-3 text-slate-800 dark:text-slate-200 font-semibold">
                    {paper.subject}
                  </td>
                  <td className="p-3 text-center text-slate-600 dark:text-slate-300">
                    {paper.theory}
                  </td>
                  <td className="p-3 text-center text-slate-600 dark:text-slate-300">
                    {paper.practical}
                  </td>
                  <td className="p-3 text-center text-slate-600 dark:text-slate-300">
                    {paper.internal}
                  </td>
                  <td className="p-3 pr-4 text-right font-black text-slate-900 dark:text-slate-100">
                    {paper.total}
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-50 dark:bg-slate-900/60 font-bold text-slate-900 dark:text-slate-100 border-t-2 border-slate-300 dark:border-slate-700">
                <td colSpan={2} className="p-3 pl-4 text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                  Semester - II कुल योग (Total)
                </td>
                <td className="p-3 text-center">{pattern.sem2Papers.reduce((s, p) => s + p.theory, 0)}</td>
                <td className="p-3 text-center">{pattern.sem2Papers.reduce((s, p) => s + p.practical, 0)}</td>
                <td className="p-3 text-center">{pattern.sem2Papers.reduce((s, p) => s + p.internal, 0)}</td>
                <td className="p-3 pr-4 text-right text-emerald-600 dark:text-emerald-400 font-black text-sm">
                  {pattern.sem2Papers.reduce((s, p) => s + p.total, 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Passing Criteria & Typing Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Passing Criteria Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-extrabold text-sm border-b pb-2.5 dark:border-slate-700">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span>उत्तीर्ण होने के नियम (PASSING CRITERIA)</span>
          </div>
          
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {passingCriteria.map((crit, idx) => (
              <li key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60">
                <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <span className="font-bold text-slate-900 dark:text-slate-100">{crit.item}: </span>
                  <span>{crit.criteria}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Optional Typing Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-extrabold text-sm border-b pb-2.5 dark:border-slate-700">
            <Keyboard className="w-5 h-5 text-amber-500" />
            <span>ऐच्छिक टाइपिंग परीक्षा (OPTIONAL TYPING)</span>
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="p-2.5 rounded-lg bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30">
              <span className="font-bold text-amber-900 dark:text-amber-300">हिंदी टाइपिंग: </span>
              <span>{typingDetails.hindi}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/50 dark:border-indigo-900/30">
              <span className="font-bold text-indigo-900 dark:text-indigo-300">अंग्रेजी टाइपिंग: </span>
              <span>{typingDetails.english}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                <strong>समय अवधि:</strong> {typingDetails.duration}
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                <strong>परीक्षा केंद्र:</strong> {typingDetails.center}
              </div>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
              <strong>फीस:</strong> {typingDetails.fees}
            </p>
          </div>
        </div>

      </div>

      {/* Short Summary Comparison Box */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-5">
        <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-3">
          <FileSpreadsheet className="w-4 h-4 text-indigo-500" />
          <span>तुलनात्मक सारांश (SHORT SUMMARY)</span>
        </h4>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white dark:bg-slate-800">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700/60 font-bold border-b border-slate-200 dark:border-slate-700">
                <th className="p-2.5 pl-3">Course</th>
                <th className="p-2.5 text-center">Total Papers</th>
                <th className="p-2.5 text-center">Theory Marks</th>
                <th className="p-2.5 text-center">Practical Marks</th>
                <th className="p-2.5 text-center">Internal Marks</th>
                <th className="p-2.5 pr-3 text-right">Grand Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              <tr className={course === 'PGDCA' ? 'bg-indigo-50/50 dark:bg-indigo-950/40 font-bold' : ''}>
                <td className="p-2.5 pl-3 font-extrabold text-indigo-600 dark:text-indigo-400">PGDCA</td>
                <td className="p-2.5 text-center">8</td>
                <td className="p-2.5 text-center">560</td>
                <td className="p-2.5 text-center">180</td>
                <td className="p-2.5 text-center">180</td>
                <td className="p-2.5 pr-3 text-right font-black text-indigo-600 dark:text-indigo-400">920</td>
              </tr>
              <tr className={course === 'DCA' ? 'bg-emerald-50/50 dark:bg-emerald-950/40 font-bold' : ''}>
                <td className="p-2.5 pl-3 font-extrabold text-emerald-600 dark:text-emerald-400">DCA</td>
                <td className="p-2.5 text-center">6</td>
                <td className="p-2.5 text-center">420</td>
                <td className="p-2.5 text-center">140</td>
                <td className="p-2.5 text-center">120</td>
                <td className="p-2.5 pr-3 text-right font-black text-emerald-600 dark:text-emerald-400">680</td>
              </tr>
            </tbody>
          </table>
        </div>

        {pattern.note && (
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
            <span>{pattern.note}</span>
          </p>
        )}
      </div>

    </div>
  );
};
