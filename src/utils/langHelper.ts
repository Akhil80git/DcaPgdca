import { Question, Paper, Unit } from '../types';
import { questionTranslations, paperTranslations, uiTranslations } from '../data/translations';

export type Language = 'hi' | 'en';

export function getQuestionText(q: Question, lang: Language): string {
  const trans = questionTranslations[q.id];
  if (trans) {
    return lang === 'hi' ? trans.hi : trans.en;
  }
  return q.question;
}

export function getPaperTitle(paper: Paper, lang: Language): string {
  const trans = paperTranslations[paper.id];
  if (trans) {
    return lang === 'hi' ? trans.titleHi : trans.titleEn;
  }
  return lang === 'hi' ? (paper.subtitle || paper.title) : paper.title;
}

export function getPaperSubtitle(paper: Paper, lang: Language): string {
  const trans = paperTranslations[paper.id];
  if (trans) {
    return lang === 'hi' ? trans.subtitleHi : trans.subtitleEn;
  }
  return lang === 'hi' ? paper.subtitle : paper.title;
}

export function getUnitTitle(unit: Unit, lang: Language): string {
  if (lang === 'hi') {
    return unit.title;
  }
  // Convert known unit titles or provide clean English title
  return unit.title;
}

export function getUi(key: keyof typeof uiTranslations['hi'], lang: Language): string {
  return uiTranslations[lang][key] || uiTranslations['hi'][key] || '';
}
