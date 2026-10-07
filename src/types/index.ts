export interface QuestionSection {
  heading: string;
  content: string;
  points?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  codeOrExample?: string;
}

export interface QuestionAnswer {
  summary: string;
  sections: QuestionSection[];
  examTip?: string;
  keyTerms?: string[];
}

export interface Question {
  id: string;
  number: number;
  question: string;
  topics: string[];
  answer: QuestionAnswer;
}

export interface Unit {
  unitNumber: number;
  unitRoman: string;
  title: string;
  questions: Question[];
}

export interface Paper {
  id: string;
  paperNumber: number;
  semester: 'Sem-I' | 'Sem-II';
  title: string;
  subtitle: string;
  code: string;
  color: string;
  accentBg: string;
  accentBorder: string;
  icon: string;
  description: string;
  units: Unit[];
}

export interface StudyProgress {
  completedQuestions: string[];
  bookmarkedQuestions: string[];
  notes: Record<string, string>;
  lastVisitedPaperId?: string;
  lastVisitedUnit?: number;
}
