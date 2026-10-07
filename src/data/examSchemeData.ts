export interface PaperMarks {
  code: string;
  subject: string;
  theory: number;
  practical: number;
  internal: number;
  total: number;
  semester: 'Sem-I' | 'Sem-II';
}

export interface CoursePattern {
  courseName: string;
  fullName: string;
  selectedElectives: string[];
  sem1Papers: PaperMarks[];
  sem2Papers: PaperMarks[];
  grandTotal: number;
  totalPapers: number;
  totalTheory: number;
  totalPractical: number;
  totalInternal: number;
  note?: string;
}

export const pgdcaPattern: CoursePattern = {
  courseName: 'PGDCA',
  fullName: 'Post Graduate Diploma in Computer Applications',
  selectedElectives: [
    'Digital Publishing (Python नहीं)',
    'MS-Access (MySQL नहीं)',
    'Tally (Linux नहीं)',
    'Multimedia Design (Power BI नहीं)'
  ],
  sem1Papers: [
    { code: '1PGDCA1', subject: 'Computer Fundamentals and AI Concepts', theory: 70, practical: 30, internal: 0, total: 100, semester: 'Sem-I' },
    { code: '1PGDCA2', subject: 'PC Packages with AI Essentials', theory: 70, practical: 20, internal: 30, total: 120, semester: 'Sem-I' },
    { code: '1PGDCA3(A)', subject: 'Digital Publishing', theory: 70, practical: 20, internal: 30, total: 120, semester: 'Sem-I' },
    { code: '1PGDCA4(B)', subject: 'MS-Access Database Management', theory: 70, practical: 20, internal: 30, total: 120, semester: 'Sem-I' },
  ],
  sem2Papers: [
    { code: '2PGDCA1', subject: 'Emerging Digital Technologies', theory: 70, practical: 30, internal: 0, total: 100, semester: 'Sem-II' },
    { code: '2PGDCA2', subject: 'Web Development Technologies', theory: 70, practical: 20, internal: 30, total: 120, semester: 'Sem-II' },
    { code: '2PGDCA3(A)', subject: 'Financial Accounting with Tally', theory: 70, practical: 20, internal: 30, total: 120, semester: 'Sem-II' },
    { code: '2PGDCA4(A)', subject: 'Multimedia Design and Production', theory: 70, practical: 20, internal: 30, total: 120, semester: 'Sem-II' },
  ],
  grandTotal: 920,
  totalPapers: 8,
  totalTheory: 560,
  totalPractical: 180,
  totalInternal: 180,
  note: 'PGDCA के अंक MCU / यूनिवर्सिटी के आधिकारिक विषय-वार सिलेबस टेबल के अनुसार हैं।'
};

export const dcaPattern: CoursePattern = {
  courseName: 'DCA',
  fullName: 'Diploma in Computer Applications',
  selectedElectives: [
    'MS Access (MySQL नहीं)',
    'Digital Media Publishing (CorelDRAW नहीं)'
  ],
  sem1Papers: [
    { code: '1DCA1', subject: 'Computer Fundamentals and AI Concepts', theory: 70, practical: 30, internal: 0, total: 100, semester: 'Sem-I' },
    { code: '1DCA2', subject: 'PC Packages and AI Office Tools', theory: 70, practical: 20, internal: 30, total: 120, semester: 'Sem-I' },
    { code: '1DCA3(B)', subject: 'Database Using MS Access', theory: 70, practical: 20, internal: 30, total: 120, semester: 'Sem-I' },
  ],
  sem2Papers: [
    { code: '2DCA1', subject: 'Multimedia and Current IT Trends', theory: 70, practical: 30, internal: 0, total: 100, semester: 'Sem-II' },
    { code: '2DCA2', subject: 'Web Technologies and E-Commerce', theory: 70, practical: 20, internal: 30, total: 120, semester: 'Sem-II' },
    { code: '2DCA3(A)', subject: 'Digital Media Publishing', theory: 70, practical: 20, internal: 30, total: 120, semester: 'Sem-II' },
  ],
  grandTotal: 680,
  totalPapers: 6,
  totalTheory: 420,
  totalPractical: 140,
  totalInternal: 120,
  note: 'DCA PDF में अंक तालिका नहीं दी गई है, अतः यह PGDCA पैटर्न के आधार पर अपेक्षित है।'
};

export const passingCriteria = [
  { item: 'Theory Paper', criteria: 'Minimum 40% (अलग से प्रत्येक पेपर में पास होना अनिवार्य)' },
  { item: 'Practical Exam', criteria: 'Minimum 40% (अलग से प्रत्येक प्रैक्टिकल में पास होना अनिवार्य)' },
  { item: 'Internal Evaluation', criteria: 'Minimum 40% (अलग से अनिवार्य)' },
  { item: 'Semester Pass', criteria: 'Aggregate Minimum 45% (कुल योग 45% अनिवार्य)' },
];

export const typingDetails = {
  hindi: '20 NWPM – Minimum 50% passing',
  english: '30 NWPM – Minimum 50% passing',
  duration: '15 Minutes',
  center: 'MPOnline Exam Centers',
  fees: '₹250 + 18% GST (प्रति टाइपिंग परीक्षा अलग से)',
};
