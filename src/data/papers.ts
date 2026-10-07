import { Paper } from '../types';
import { paper1Units } from './paper1Data';
import { paper2Units } from './paper2Data';
import { paper3Units } from './paper3Data';
import { paper4Units } from './paper4Data';
import { paper5Units } from './paper5Data';
import { paper6Units } from './paper6Data';
import { paper7Units } from './paper7Data';
import { paper8Units } from './paper8Data';

export const allPapersPGDCA: Paper[] = [
  {
    id: 'pgdca-p1',
    paperNumber: 1,
    semester: 'Sem-I',
    title: 'Computer Fundamentals and AI Concepts',
    subtitle: 'कंप्यूटर फंडामेंटल्स एवं AI अवधारणाएं',
    code: '1PGDCA1',
    color: 'from-blue-600 to-indigo-700',
    accentBg: 'bg-blue-50 text-blue-700 border-blue-200',
    accentBorder: 'border-blue-500',
    icon: 'Cpu',
    description: 'Semester I: कंप्यूटर आर्किटेक्चर, मेमोरी, हार्डवेयर, इनपुट/आउटपुट, नेटवर्किंग एवं AI बेसिक्स।',
    units: paper1Units
  },
  {
    id: 'pgdca-p2',
    paperNumber: 2,
    semester: 'Sem-I',
    title: 'PC Packages with AI Essentials',
    subtitle: 'पीसी पैकेजेस विथ AI एसेंशियल्स',
    code: '1PGDCA2',
    color: 'from-emerald-600 to-teal-700',
    accentBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    accentBorder: 'border-emerald-500',
    icon: 'FileSpreadsheet',
    description: 'Semester I: विंडोज 11, एमएस वर्ड, एक्सेल, पावरपॉइंट, मेल मर्ज, मैक्रोज़ एवं आधुनिक एआई टूल्स।',
    units: paper2Units
  },
  {
    id: 'pgdca-p3',
    paperNumber: 3,
    semester: 'Sem-I',
    title: 'Digital Publishing',
    subtitle: 'डिजिटल पब्लिशिंग (PageMaker, Photoshop व InDesign)',
    code: '1PGDCA3(A)',
    color: 'from-purple-600 to-pink-700',
    accentBg: 'bg-purple-50 text-purple-700 border-purple-200',
    accentBorder: 'border-purple-500',
    icon: 'LayoutTemplate',
    description: 'Semester I: डीटीपी अवधारणाएं, ऑफसेट प्रिंटिंग, टाइपोग्राफी, एडोब पेजमेकर 7.0, फोटोशॉप व इनडिजाइन।',
    units: paper3Units
  },
  {
    id: 'pgdca-p4',
    paperNumber: 4,
    semester: 'Sem-I',
    title: 'MS-Access Database Management',
    subtitle: 'एमएस-एक्सेस डेटाबेस मैनेजमेंट',
    code: '1PGDCA4(B)',
    color: 'from-rose-600 to-red-700',
    accentBg: 'bg-rose-50 text-rose-700 border-rose-200',
    accentBorder: 'border-rose-500',
    icon: 'Database',
    description: 'Semester I: रिलेशनल डेटाबेस, नॉर्मलाइजेशन (1NF-3NF), टेबल्स, रिलेशनशिप्स, क्वेरीज, फॉर्म्स व रिपोर्ट्स।',
    units: paper4Units
  },
  {
    id: 'pgdca-p5',
    paperNumber: 5,
    semester: 'Sem-II',
    title: 'Emerging Digital Technologies',
    subtitle: 'इमर्जिंग डिजिटल टेक्नोलॉजीज',
    code: '2PGDCA1',
    color: 'from-amber-600 to-orange-700',
    accentBg: 'bg-amber-50 text-amber-700 border-amber-200',
    accentBorder: 'border-amber-500',
    icon: 'Sparkles',
    description: 'Semester II: क्लाउड कंप्यूटिंग, एआई/एमएल, इंटरनेट ऑफ थिंग्स (IoT), ब्लॉकचेन, साइबर सुरक्षा, 5G व एज।',
    units: paper5Units
  },
  {
    id: 'pgdca-p6',
    paperNumber: 6,
    semester: 'Sem-II',
    title: 'Web Development Technologies',
    subtitle: 'वेब डेवलपमेंट टेक्नोलॉजीज',
    code: '2PGDCA2',
    color: 'from-cyan-600 to-blue-700',
    accentBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    accentBorder: 'border-cyan-500',
    icon: 'Globe',
    description: 'Semester II: इंटरनेट प्रोटोकॉल्स, HTML5 टैग्स व फॉर्म्स, CSS3, जावास्क्रिप्ट DOM व वर्डप्रेस CMS।',
    units: paper6Units
  },
  {
    id: 'pgdca-p7',
    paperNumber: 7,
    semester: 'Sem-II',
    title: 'Financial Accounting with Tally',
    subtitle: 'फाइनेंशियल अकाउंटिंग विथ टैली',
    code: '2PGDCA3(A)',
    color: 'from-teal-600 to-green-700',
    accentBg: 'bg-teal-50 text-teal-700 border-teal-200',
    accentBorder: 'border-teal-500',
    icon: 'Calculator',
    description: 'Semester II: लेखांकन सिद्धांत, टैली प्राइम वाउचर्स, इन्वेंटरी, जीएसटी (CGST/SGST/IGST), टीडीएस व रिपोर्ट्स।',
    units: paper7Units
  },
  {
    id: 'pgdca-p8',
    paperNumber: 8,
    semester: 'Sem-II',
    title: 'Multimedia Design and Production',
    subtitle: 'मल्टीमीडिया डिज़ाइन एंड प्रोडक्शन',
    code: '2PGDCA4(A)',
    color: 'from-violet-600 to-indigo-700',
    accentBg: 'bg-violet-50 text-violet-700 border-violet-200',
    accentBorder: 'border-violet-500',
    icon: 'Film',
    description: 'Semester II: मल्टीमीडिया तत्व, कोरलड्रॉ वेक्टर डिजाइनिंग, शेप टूल्स व एडोब प्रीमियर प्रो वीडियो एडिटिंग।',
    units: paper8Units
  }
];

export const allPapersDCA: Paper[] = [
  {
    id: 'dca-p1',
    paperNumber: 1,
    semester: 'Sem-I',
    title: 'Computer Fundamentals and AI Concepts',
    subtitle: 'कंप्यूटर फंडामेंटल्स एवं AI अवधारणाएं',
    code: '1DCA1',
    color: 'from-blue-600 to-indigo-700',
    accentBg: 'bg-blue-50 text-blue-700 border-blue-200',
    accentBorder: 'border-blue-500',
    icon: 'Cpu',
    description: 'Semester I: कंप्यूटर फंडामेंटल्स, सीपीयू संरचना, मेमोरी, इनपुट/आउटपुट डिवाइसेस एवं एआई बेसिक्स।',
    units: paper1Units
  },
  {
    id: 'dca-p2',
    paperNumber: 2,
    semester: 'Sem-I',
    title: 'PC Packages and AI Office Tools',
    subtitle: 'पीसी पैकेजेस एंड AI ऑफिस टूल्स',
    code: '1DCA2',
    color: 'from-emerald-600 to-teal-700',
    accentBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    accentBorder: 'border-emerald-500',
    icon: 'FileSpreadsheet',
    description: 'Semester I: विंडोज 11, वर्ड प्रोसेसिंग (MS Word), स्प्रेडशीट्स (Excel), प्रेजेंटेशन व कोपायलट AI।',
    units: paper2Units
  },
  {
    id: 'dca-p3',
    paperNumber: 3,
    semester: 'Sem-I',
    title: 'Database Using MS Access',
    subtitle: 'डेटाबेस यूजिंग एमएस एक्सेस',
    code: '1DCA3(B)',
    color: 'from-rose-600 to-red-700',
    accentBg: 'bg-rose-50 text-rose-700 border-rose-200',
    accentBorder: 'border-rose-500',
    icon: 'Database',
    description: 'Semester I: रिलेशनल डेटाबेस, टेबल्स, फील्ड प्रॉपर्टीज, रिलेशनशिप्स, क्वेरीज, फॉर्म्स एवं रिपोर्ट्स।',
    units: paper4Units
  },
  {
    id: 'dca-p4',
    paperNumber: 4,
    semester: 'Sem-II',
    title: 'Multimedia and Current IT Trends',
    subtitle: 'मल्टीमीडिया एंड करंट IT ट्रेंड्स',
    code: '2DCA1',
    color: 'from-violet-600 to-indigo-700',
    accentBg: 'bg-violet-50 text-violet-700 border-violet-200',
    accentBorder: 'border-violet-500',
    icon: 'Film',
    description: 'Semester II: मल्टीमीडिया तत्व (ऑडियो, वीडियो, एनिमेशन), ग्राफिक्स टूल्स, वीडियो संपादन व आधुनिक रुझान।',
    units: paper8Units
  },
  {
    id: 'dca-p5',
    paperNumber: 5,
    semester: 'Sem-II',
    title: 'Web Technologies and E-Commerce',
    subtitle: 'वेब टेक्नोलॉजीज एंड ई-कॉमर्स',
    code: '2DCA2',
    color: 'from-cyan-600 to-blue-700',
    accentBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    accentBorder: 'border-cyan-500',
    icon: 'Globe',
    description: 'Semester II: इंटरनेट अवधारणाएं, HTML5, CSS3, बेसिक जावास्क्रिप्ट, वेब डिजाइनिंग टूल्स एवं वेबसाइट पब्लिशिंग।',
    units: paper6Units
  },
  {
    id: 'dca-p6',
    paperNumber: 6,
    semester: 'Sem-II',
    title: 'Digital Media Publishing',
    subtitle: 'डिजिटल मीडिया पब्लिशिंग (PageMaker व Photoshop)',
    code: '2DCA3(A)',
    color: 'from-purple-600 to-pink-700',
    accentBg: 'bg-purple-50 text-purple-700 border-purple-200',
    accentBorder: 'border-purple-500',
    icon: 'LayoutTemplate',
    description: 'Semester II: डीटीपी लेआउट, एडोब पेजमेकर 7.0, एडोब फोटोशॉप इमेज एडिटिंग, लेयर्स, फिल्टर्स व प्रिंटिंग।',
    units: paper3Units
  }
];

export const allPapers = allPapersPGDCA;

export const getPapersByCourse = (course: 'PGDCA' | 'DCA'): Paper[] => {
  return course === 'PGDCA' ? allPapersPGDCA : allPapersDCA;
};
