import React, { useState } from 'react';
import { X, Printer, FileText, CheckCircle, Download } from 'lucide-react';
import { Paper } from '../types';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPaper: Paper;
  activeUnitIndex: number;
}

export const PrintModal: React.FC<PrintModalProps> = ({
  isOpen,
  onClose,
  currentPaper,
  activeUnitIndex,
}) => {
  const [printScope, setPrintScope] = useState<'unit' | 'paper' | 'questionsOnly'>('unit');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150 no-print">
      <div 
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4 border-b pb-3 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
              प्रिंट एवं PDF सेव करें (Print / Save PDF)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 mb-6">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            प्रिंट डायलॉग में <strong>"Destination: Save as PDF"</strong> चुनकर आप संपूर्ण नोट्स अपने फोन या कंप्यूटर में ऑफलाइन सेव कर सकते हैं।
          </p>

          <div className="space-y-2">
            <label 
              onClick={() => setPrintScope('unit')}
              className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                printScope === 'unit'
                  ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-200'
                  : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              <input
                type="radio"
                name="printScope"
                checked={printScope === 'unit'}
                onChange={() => setPrintScope('unit')}
                className="mt-1"
              />
              <div>
                <div className="font-bold text-xs sm:text-sm">
                  वर्तमान यूनिट प्रिंट करें ({currentPaper.units[activeUnitIndex]?.unitRoman})
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  इस यूनिट के सभी 5 विस्तृत उत्तर एवं तुलना चार्ट
                </div>
              </div>
            </label>

            <label 
              onClick={() => setPrintScope('paper')}
              className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                printScope === 'paper'
                  ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-200'
                  : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              <input
                type="radio"
                name="printScope"
                checked={printScope === 'paper'}
                onChange={() => setPrintScope('paper')}
                className="mt-1"
              />
              <div>
                <div className="font-bold text-xs sm:text-sm">
                  सम्पूर्ण पेपर प्रिंट करें ({currentPaper.code} - 25 प्रश्न)
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  सभी 5 यूनिट्स के सम्पूर्ण 25 प्रश्नोत्तर बुकलेट रूप में
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            रद्द करें
          </button>
          <button
            onClick={() => {
              onClose();
              setTimeout(handlePrint, 200);
            }}
            className="flex-1 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-indigo-500/20"
          >
            <Printer className="w-4 h-4" />
            <span>प्रिंट शुरू करें</span>
          </button>
        </div>
      </div>
    </div>
  );
};
