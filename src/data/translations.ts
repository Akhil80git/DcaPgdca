/**
 * Complete Bilingual (Hindi & English) Translation Engine
 * Pure Hindi (no English fragments) & Pure English (no Hindi text)
 */

export interface QuestionTranslation {
  hi: string;
  en: string;
}

export const questionTranslations: Record<string, QuestionTranslation> = {
  "p1-u1-q1": {
    "hi": "कंप्यूटर सिस्टम की परिभाषा, अनुप्रयोग क्षेत्र, लाभ-हानियां तथा मुख्य घटक (कंट्रोल यूनिट, एएलयू, इनपुट/आउटपुट, मेमोरी, मदरबोर्ड) को समझाइए।",
    "en": "Explain the definition of computer system, application areas, advantages, limitations, and core components (Control Unit, ALU, Input/Output, Memory, Motherboard)."
  },
  "p1-u1-q2": {
    "hi": "कंप्यूटर की पीढ़ियों (प्रथम से पांचवीं पीढ़ी) तथा कंप्यूटर सिस्टम के कॉन्फ़िगरेशन को विस्तार से समझाइए।",
    "en": "Explain the generations of computers (1st to 5th generation) and computer system configuration in detail."
  },
  "p1-u1-q3": {
    "hi": "व्यक्तिगत कंप्यूटरों के प्रकार (डेस्कटॉप, लैपटॉप, नोटबुक, सुपरकंप्यूटर) की प्रमुख विशेषताएं और उपयोग लिखिए।",
    "en": "Describe the types of personal computers (Desktop, Laptop, Notebook, Supercomputer) along with their features and uses."
  },
  "p1-u1-q4": {
    "hi": "प्राइमरी और सेकेंडरी मेमोरी में अंतर स्पष्ट करते हुए रैम (RAM), रोम (ROM), ईप्रॉम (EPROM) और प्रॉम (PROM) को समझाइए।",
    "en": "Distinguish between Primary and Secondary Memory, and explain RAM, ROM, EPROM, and PROM."
  },
  "p1-u1-q5": {
    "hi": "हार्ड डिस्क, फ्लैश ड्राइव और सॉलिड-स्टेट ड्राइव (SSD) की कार्यप्रणाली, विशेषताएं और तुलना कीजिए।",
    "en": "Explain the working principle, features, and comparative analysis of Hard Disk, Flash Drive, and Solid-State Drive (SSD)."
  },
  "p1-u2-q1": {
    "hi": "इनपुट डिवाइस: कीबोर्ड, माउस, ट्रैकबॉल, लाइट पेन, टच स्क्रीन और वॉयस रिकग्निशन को समझाइए।",
    "en": "Explain Input Devices: Keyboard, Mouse, Trackball, Light Pen, Touch Screen, and Voice Recognition."
  },
  "p1-u2-q2": {
    "hi": "स्कैनर्स, डिजिटाइजिंग टैबलेट, डिजिटल कैमरा, एमआईसीआर (MICR), ओसीआर (OCR), ओएमआर (OMR), बारकोड रीडर और क्यूआर कोड का वर्णन कीजिए।",
    "en": "Describe Scanners, Digitizing Tablet, Digital Camera, MICR, OCR, OMR, Barcode Reader, and QR Code."
  },
  "p1-u2-q3": {
    "hi": "आउटपुट डिवाइस: मॉनिटर्स के प्रकार, साइज, रिज़ॉल्यूशन और रिफ्रेश रेट को विस्तार से समझाइए।",
    "en": "Explain Output Devices: Monitor types, screen size, display resolution, and refresh rate."
  },
  "p1-u2-q4": {
    "hi": "प्रिंटर्स: इम्पैक्ट बनाम नॉन-इम्पैक्ट, डॉट मैट्रिक्स, इंकजेट और लेजर प्रिंटर की कार्यप्रणाली और तुलना कीजिए।",
    "en": "Printers: Compare Impact vs Non-Impact printers, and explain Dot Matrix, Inkjet, and Laser Printers."
  },
  "p1-u2-q5": {
    "hi": "प्लॉटर, 3D प्रिंटर्स, साउंड कार्ड और स्पीकर्स की विशेषताएं और कार्यप्रणाली लिखिए।",
    "en": "Describe Plotters, 3D Printers, Sound Cards, and Speakers with their features and applications."
  },
  "p1-u3-q1": {
    "hi": "सॉफ्टवेयर की आवश्यकता, प्रकार (सिस्टम, एप्लीकेशन), ऑपरेटिंग सिस्टम की परिभाषा व कार्य, डिवाइस ड्राइवर्स और यूटिलिटी प्रोग्राम्स को समझाइए।",
    "en": "Explain the need for software, types (System, Application), Operating System definition and functions, Device Drivers, and Utility Programs."
  },
  "p1-u3-q2": {
    "hi": "ऑपरेटिंग सिस्टम्स: डॉस (DOS), विंडोज, लिनक्स, मैक और एंड्रॉइड का परिचय और प्रमुख विशेषताएं लिखिए।",
    "en": "Provide an introduction and key features of Operating Systems: DOS, Windows, Linux, Mac, and Android."
  },
  "p1-u3-q3": {
    "hi": "प्रोग्रामिंग भाषाएं: मशीन, असेंबली, हाई-लेवल, 4GL के गुण/दोष तथा असेम्बलर, कंपाइलर, इंटरप्रेटर में अंतर समझाइए।",
    "en": "Explain Programming Languages: Machine, Assembly, High Level, 4GL with merits/demerits, and compare Assembler, Compiler, and Interpreter."
  },
  "p1-u3-q4": {
    "hi": "वर्ड प्रोसेसिंग, स्प्रेडशीट, प्रेजेंटेशन ग्राफिक्स, डीबीएमएस, कम्युनिकेशन सॉफ्टवेयर और मल्टीमीडिया सॉफ्टवेयर का परिचय दीजिए।",
    "en": "Introduce Word Processing, Spreadsheet, Presentation Graphics, DBMS, Communication Software, and Multimedia Software."
  },
  "p1-u3-q5": {
    "hi": "कंप्यूटर कोडिंग सिस्टम: आस्की (ASCII), इस्की (ISCII), यूनिकोड तथा संख्या प्रणाली: बाइनरी, ऑक्टल, डेसिमल, हेक्साडेसिमल को उदाहरण सहित समझाइए।",
    "en": "Explain Computer Coding Systems: ASCII, ISCII, Unicode, and Number Systems: Binary, Octal, Decimal, Hexadecimal with conversion examples."
  },
  "p1-u4-q1": {
    "hi": "संचार और सूचना प्रौद्योगिकी का महत्व, संचार प्रक्रिया के घटक (सेंडर, रिसीवर, माध्यम, प्रोटोकॉल) और ट्रांसमिशन मोड्स को समझाइए।",
    "en": "Explain the importance of Communication and IT, components of Communication Process (Sender, Receiver, Medium, Protocol), and Transmission Modes."
  },
  "p1-u4-q2": {
    "hi": "नेटवर्क के प्रकार: लैन (LAN), वैन (WAN), मैन (MAN), पैन (PAN) और वायरलेस नेटवर्क की तुलना कीजिए।",
    "en": "Compare Network Types: LAN, WAN, MAN, PAN, and Wireless Networks."
  },
  "p1-u4-q3": {
    "hi": "नेटवर्क टोपोलॉजी: बस, स्टार, रिंग, मेश और हाइब्रिड टोपोलॉजी की संरचना, लाभ और हानियां समझाइए।",
    "en": "Explain Network Topologies: Bus, Star, Ring, Mesh, and Hybrid topologies with structures, merits, and limitations."
  },
  "p1-u4-q4": {
    "hi": "ट्रांसमिशन मीडिया: गाइडेड (ट्विस्टेड पेयर, कोएक्सियल, फाइबर ऑप्टिक) और अनगाइडेड (माइक्रोवेव, रेडियो, सैटेलाइट) को समझाइए।",
    "en": "Describe Transmission Media: Guided (Twisted Pair, Coaxial, Fiber Optic) and Unguided (Microwave, Radio, Satellite)."
  },
  "p1-u4-q5": {
    "hi": "नेटवर्क डिवाइसेज: हब, स्विच, राउटर, ब्रिज, गेटवे, मॉडम और रिपीटर के कार्य और उपयोग समझाइए।",
    "en": "Explain Network Devices: Hub, Switch, Router, Bridge, Gateway, Modem, and Repeater with their roles."
  },
  "p1-u5-q1": {
    "hi": "कृत्रिम बुद्धिमत्ता (AI) का परिचय, इतिहास, परिभाषा, प्रकार (नैरो, जनरल, सुपर एआई) तथा इसके अनुप्रयोग क्षेत्र समझाइए।",
    "en": "Explain Introduction to Artificial Intelligence (AI), history, definition, types (Narrow, General, Super AI), and application domains."
  },
  "p1-u5-q2": {
    "hi": "मशीन लर्निंग (ML) की अवधारणा, प्रकार (सुपरवाइज्ड, अनसुपरवाइज्ड, रीइन्फोर्समेंट लर्निंग) तथा डीप लर्निंग का परिचय दीजिए।",
    "en": "Explain Machine Learning (ML) concept, types (Supervised, Unsupervised, Reinforcement Learning), and introduction to Deep Learning."
  },
  "p1-u5-q3": {
    "hi": "नेचुरल लैंग्वेज प्रोसेसिंग (NLP), कंप्यूटर विजन और रोबोटिक्स की कार्यप्रणाली व दैनिक जीवन में उपयोग समझाइए।",
    "en": "Describe Natural Language Processing (NLP), Computer Vision, and Robotics with their working and daily life applications."
  },
  "p1-u5-q4": {
    "hi": "जेनरेटिव एआई (Generative AI), चैटबॉट्स (जैसे ChatGPT, Gemini) और लार्ज लैंग्वेज मॉडल्स (LLM) की अवधारणा समझाइए।",
    "en": "Explain Generative AI, Chatbots (like ChatGPT, Gemini), and Large Language Models (LLMs) concepts and capabilities."
  },
  "p1-u5-q5": {
    "hi": "एआई के नैतिक मुद्दे, डेटा प्राइवेसी, चुनौतियां और भविष्य की संभावनाएं विस्तार से लिखिए।",
    "en": "Discuss ethical issues in AI, data privacy, biases, challenges, and future prospects of Artificial Intelligence."
  },
  "p2-u1-q1": {
    "hi": "विंडोज 11 का परिचय, नई विशेषताएं, यूजर इंटरफेस (टास्कबार, स्टार्ट मेन्यू, विजेट्स, स्नैप लेआउट्स) को समझाइए।",
    "en": "Explain Windows 11 introduction, new features, and user interface (Taskbar, Start Menu, Widgets, Snap Layouts)."
  },
  "p2-u1-q2": {
    "hi": "विंडोज 11 में डेस्कटॉप पर्सनलाइजेशन, डिस्प्ले सेटिंग्स, थीम, बैकग्राउंड, स्क्रीन सेवर और वर्चुअल डेस्कटॉप को समझाइए।",
    "en": "Explain desktop personalization, display settings, themes, backgrounds, screen savers, and virtual desktops in Windows 11."
  },
  "p2-u1-q3": {
    "hi": "फाइल एक्सप्लोरर, फाइलों और फोल्डर्स का प्रबंधन, सर्चिंग, कंप्रेशन और क्लाउड स्टोरेज (वनड्राइव) इंटीग्रेशन को समझाइए।",
    "en": "Explain File Explorer, managing files and folders, searching, compression, and OneDrive cloud integration."
  },
  "p2-u1-q4": {
    "hi": "कंट्रोल पैनल और विंडोज सेटिंग्स: डिवाइसेज, नेटवर्क, प्राइवेसी, विंडोज अपडेट और सिक्योरिटी टूल्स समझाइए।",
    "en": "Explain Control Panel and Windows Settings: devices, network, privacy, Windows Update, and security tools."
  },
  "p2-u1-q5": {
    "hi": "विंडोज 11 के इन-बिल्ट एआई टूल्स: माइक्रोसॉफ्ट कोपायलट, स्निपिंग टूल एआई, फोटो री-टच और वॉयस एक्सेस को समझाइए।",
    "en": "Explain built-in AI tools in Windows 11: Microsoft Copilot, Snipping Tool AI, photo enhancement, and voice access."
  },
  "p2-u2-q1": {
    "hi": "माइक्रोसॉफ्ट वर्ड 2021/365 का परिचय, इंटरफेस (रिबन, क्विक एक्सेस टूलबार, स्टेटस बार) और नया डॉक्यूमेंट बनाना समझाइए।",
    "en": "Introduce Microsoft Word 2021/365, Ribbon interface, Quick Access Toolbar, Status Bar, and creating new documents."
  },
  "p2-u2-q2": {
    "hi": "टेक्स्ट फॉर्मेटिंग: फॉन्ट, पैराग्राफ फॉर्मेटिंग, बुलेट्स एवं नंबरिंग, ड्रॉप कैप, बॉर्डर्स और शेडिंग को समझाइए।",
    "en": "Explain text formatting: fonts, paragraph alignment, bullets & numbering, drop cap, borders, and shading."
  },
  "p2-u2-q3": {
    "hi": "पेज सेटअप: मार्जिन, ओरिएंटेशन (पोर्ट्रेट/लैंडस्केप), पेपर साइज, पेज ब्रेक, सेक्शन ब्रेक, हेडर व फुटर को समझाइए।",
    "en": "Explain page setup: margins, orientation (Portrait/Landscape), paper size, page breaks, section breaks, and headers/footers."
  },
  "p2-u2-q4": {
    "hi": "वर्ड में टेबल इंसर्ट करना, रो व कॉलम जोड़ना/हटाना, मर्ज व स्प्लिट सेल, टेबल स्टाइल्स और फॉर्मूला प्रयोग समझाइए।",
    "en": "Explain inserting tables in Word, adding/deleting rows & columns, merge/split cells, table styles, and formula usage."
  },
  "p2-u2-q5": {
    "hi": "वर्ड में फाइंड एंड रिप्लेस, स्पेलिंग व ग्रामर चेक, थिसॉरस, वर्ड काउंट और ऑटो-करेक्ट फीचर्स को समझाइए।",
    "en": "Explain Find & Replace, Spelling & Grammar check, Thesaurus, Word Count, and AutoCorrect features in Word."
  },
  "p2-u3-q1": {
    "hi": "मेल मर्ज की अवधारणा, लाभ, चरण: मुख्य डॉक्यूमेंट, डेटा सोर्स, मर्ज फील्ड्स जोड़ना और फाइनल डॉक्यूमेंट तैयार करना समझाइए।",
    "en": "Explain Mail Merge: concept, benefits, main document, data source creation, inserting merge fields, and final merging."
  },
  "p2-u3-q2": {
    "hi": "वर्ड में ग्राफिक्स, पिक्चर्स, स्मार्टआर्ट, चार्ट्स, शेप्स, वर्डआर्ट इंसर्ट करना और टेक्स्ट रैपिंग को समझाइए।",
    "en": "Explain inserting graphics, pictures, SmartArt, charts, shapes, WordArt, and text wrapping options in Word."
  },
  "p2-u3-q3": {
    "hi": "मैक्रोज़ की अवधारणा: मैक्रो रिकॉर्ड करना, शॉर्टकट की असाइन करना, मैक्रो रन करना और सुरक्षा सेटिंग्स समझाइए।",
    "en": "Explain Macros concept: recording a macro, assigning shortcut keys, running macros, and macro security settings."
  },
  "p2-u3-q4": {
    "hi": "ट्रैक चेंजेज, कमेंट्स, डॉक्यूमेंट तुलना, सुरक्षा (पासवर्ड प्रोटेक्ट) और शेयरिंग ऑप्शंस को समझाइए।",
    "en": "Explain Track Changes, comments, comparing documents, password protection, and collaboration sharing in Word."
  },
  "p2-u3-q5": {
    "hi": "माइक्रोसॉफ्ट वर्ड में एआई फीचर्स: माइक्रोसॉफ्ट कोपायलट से ड्राफ्ट तैयार करना, रीराइटिंग, समराइजेशन और ट्रांसलेशन समझाइए।",
    "en": "Explain AI features in Microsoft Word: Microsoft Copilot drafting, rewriting, summarization, and language translation."
  },
  "p2-u4-q1": {
    "hi": "माइक्रोसॉफ्ट एक्सेल का परिचय, वर्कबुक व वर्कशीट की संरचना, सेल एड्रेसिंग (रिलेटिव, एब्सोल्यूट, मिक्स्ड) को समझाइए।",
    "en": "Introduce Microsoft Excel, workbook and worksheet structure, and cell referencing (Relative, Absolute, Mixed)."
  },
  "p2-u4-q2": {
    "hi": "एक्सेल में डेटा एंट्री, डेटा टाइप्स, ऑटोफिल, फ्लैश फिल, सॉर्टिंग और कस्टम लिस्ट बनाना समझाइए।",
    "en": "Explain data entry, data types, AutoFill, Flash Fill, data sorting, and creating custom lists in Excel."
  },
  "p2-u4-q3": {
    "hi": "एक्सेल के प्रमुख फॉर्मूले व फंक्शंस: SUM, AVERAGE, COUNT, MAX, MIN, IF, VLOOKUP, XLOOKUP, CONCATENATE समझाइए।",
    "en": "Explain essential Excel formulas and functions: SUM, AVERAGE, COUNT, MAX, MIN, IF, VLOOKUP, XLOOKUP, CONCATENATE."
  },
  "p2-u4-q4": {
    "hi": "कंडीशनल फॉर्मेटिंग, डेटा वैलिडेशन, गोल सीक और फ्रीज पेन्स का उपयोग उदाहरण सहित समझाइए।",
    "en": "Explain Conditional Formatting, Data Validation, Goal Seek, and Freeze Panes with practical examples in Excel."
  },
  "p2-u4-q5": {
    "hi": "एक्सेल में चार्ट्स: कॉलम, बार, पाई, लाइन चार्ट बनाना, फॉर्मेटिंग और पिवट टेबल (Pivot Table) की सहायता से डेटा सारांश बनाना समझाइए।",
    "en": "Explain creating charts (Column, Bar, Pie, Line), chart formatting, and data summarization using Pivot Tables in Excel."
  },
  "p2-u5-q1": {
    "hi": "माइक्रोसॉफ्ट पावरपॉइंट का परिचय, प्रेजेंटेशन के सिद्धांत, व्यूज (नॉर्मल, स्लाइड सॉर्टर, स्लाइड शो) और स्लाइड लेआउट्स समझाइए।",
    "en": "Introduce Microsoft PowerPoint, presentation principles, views (Normal, Slide Sorter, Slide Show), and slide layouts."
  },
  "p2-u5-q2": {
    "hi": "पावरपॉइंट में टेक्स्ट, इमेजेस, वीडियो, ऑडियो, हाइपरलिंक और एक्शन बटन्स जोड़ना व फॉर्मेट करना समझाइए।",
    "en": "Explain adding and formatting text, images, video, audio, hyperlinks, and action buttons in PowerPoint slides."
  },
  "p2-u5-q3": {
    "hi": "स्लाइड ट्रांज़िशन और कस्टम एनिमेशन: एंट्रेंस, एम्फैसिस, एग्जिट, मोशन पाथ्स और टाइमिंग सेटिंग्स समझाइए।",
    "en": "Explain slide transitions and custom animations: entrance, emphasis, exit, motion paths, and rehearsal timings."
  },
  "p2-u5-q4": {
    "hi": "स्लाइड मास्टर, हैंडआउट मास्टर, नोट्स मास्टर का उपयोग और कस्टम टेम्प्लेट बनाना समझाइए।",
    "en": "Explain Slide Master, Handout Master, Notes Master, and creating custom presentation templates."
  },
  "p2-u5-q5": {
    "hi": "पावरपॉइंट में एआई टूल्स: डिज़ाइनर (Designer), कोपायलट से स्लाइड जेनरेशन और रिहर्सल विथ कोच समझाइए।",
    "en": "Explain AI features in PowerPoint: PowerPoint Designer, Copilot slide generation, and Rehearse with Coach."
  },
  "p3-u1-q1": {
    "hi": "डीटीपी (डेस्कटॉप पब्लिशिंग) की परिभाषा, आवश्यकता, इतिहास, अनुप्रयोग क्षेत्र और वर्ड प्रोसेसिंग से अंतर समझाइए।",
    "en": "Explain DTP (Desktop Publishing) definition, need, history, applications, and comparison with word processing."
  },
  "p3-u1-q2": {
    "hi": "प्रिंटिंग तकनीकें: लेटरप्रेस, ऑफसेट प्रिंटिंग, ग्रेव्योर, फ्लेक्सोग्राफी, सिल्क स्क्रीन और डिजिटल प्रिंटिंग की तुलना कीजिए।",
    "en": "Printing technologies: compare Letterpress, Offset Printing, Gravure, Flexography, Screen Printing, and Digital Printing."
  },
  "p3-u1-q3": {
    "hi": "टाइपोग्राफी की अवधारणा: टाइपफेस, फॉन्ट, सेरिफ बनाम सैंस-सेरिफ, कर्निंग, ट्रैकिंग, लीडिंग और फॉन्ट साइजिंग समझाइए।",
    "en": "Explain Typography concepts: typeface, font, Serif vs Sans-serif, kerning, tracking, leading, and font sizing."
  },
  "p3-u1-q4": {
    "hi": "पेज लेआउट के सिद्धांत: मार्जिन, कॉलम, ग्रिड सिस्टम, व्हाइट स्पेस, बैलेंस, कंट्रास्ट और विजुअल पदानुक्रम समझाइए।",
    "en": "Explain Page Layout principles: margins, columns, grid systems, whitespace, balance, contrast, and visual hierarchy."
  },
  "p3-u1-q5": {
    "hi": "कलर थ्योरी: आरजीबी (RGB) बनाम सीएमवाईके (CMYK) कलर मॉडल, स्पॉट कलर, प्रोसेस कलर और पैनटोन मैचिंग सिस्टम (PMS) समझाइए।",
    "en": "Explain Color Theory: RGB vs CMYK color models, Spot colors, Process colors, and Pantone Matching System (PMS)."
  },
  "p3-u2-q1": {
    "hi": "एडोब पेजमेकर 7.0 का परिचय, इंटरफेस (टूलबॉक्स, कंट्रोल पैलेट, स्टाइल पैलेट, कलर्स पैलेट) और नया पब्लिकेशन सेटअप समझाइए।",
    "en": "Introduce Adobe PageMaker 7.0, interface components (Toolbox, Control Palette, Styles, Colors), and document setup."
  },
  "p3-u2-q2": {
    "hi": "पेजमेकर में टेक्स्ट ब्लॉक बनाना, टेक्स्ट फ्लो (ऑटोफ्लो व मैनुअल फ्लो), थ्रेडेड व अनथ्रेडेड टेक्स्ट ब्लॉक्स समझाइए।",
    "en": "Explain creating text blocks in PageMaker, text flow (Autoflow vs manual), and threaded vs unthreaded text blocks."
  },
  "p3-u2-q3": {
    "hi": "कंट्रोल पैलेट के माध्यम से कैरेक्टर और पैराग्राफ फॉर्मेटिंग, इंडेंट्स, टैब्स, ड्रॉप कैप और हाइफनेशन समझाइए।",
    "en": "Explain character and paragraph formatting via Control Palette, indents, tabs, drop caps, and hyphenation settings."
  },
  "p3-u2-q4": {
    "hi": "मास्टर पेजेस की अवधारणा: मास्टर पेज बनाना, सिंगल व डबल साइडेड मास्टर, पेज नंबरिंग और कॉलम गाइड्स सेट करना समझाइए।",
    "en": "Explain Master Pages concept: creating master pages, single vs facing masters, page numbering, and column guides."
  },
  "p3-u2-q5": {
    "hi": "स्टोरी एडिटर (Story Editor) का उपयोग, स्पेलिंग चेक, फाइंड एंड चेंज और स्टाइल शीट बनाना व लागू करना समझाइए।",
    "en": "Explain using Story Editor in PageMaker, spell check, Find & Change, and creating/applying Style Sheets."
  },
  "p3-u3-q1": {
    "hi": "पेजमेकर में ग्राफिक्स इंसर्ट करना (Place कमांड), इमेज लिंकिंग बनाम एम्बेडिंग और इमेज फॉर्मेट्स (TIFF, EPS, JPEG) समझाइए।",
    "en": "Explain placing graphics in PageMaker, image linking vs embedding, and image formats (TIFF, EPS, JPEG)."
  },
  "p3-u3-q2": {
    "hi": "टेक्स्ट रैप (Text Wrap) फीचर: टेक्स्ट को ग्राफिक्स के चारों ओर लपेटना, कस्टम रैप बाउंड्री बनाना और स्टैंडऑफ़ सेट करना समझाइए।",
    "en": "Explain Text Wrap feature: wrapping text around graphics, custom wrap boundaries, and standoff settings."
  },
  "p3-u3-q3": {
    "hi": "ऑब्जेक्ट्स का प्रबंधन: ग्रुप, अनग्रुप, लॉक, अनलॉक, अरेंज (Bring to Front, Send to Back) और अलाइनमेंट समझाइए।",
    "en": "Explain managing objects: Group, Ungroup, Lock, Unlock, Arrange (Bring to Front/Send to Back), and Alignment."
  },
  "p3-u3-q4": {
    "hi": "पेजमेकर में टेबल बनाना: एडोब टेबल एडिटर का उपयोग, टेबल फॉर्मेटिंग और पब्लिकेशन में टेबल जोड़ना समझाइए।",
    "en": "Explain creating tables in PageMaker using Adobe Table Editor, formatting tables, and inserting tables into publications."
  },
  "p3-u3-q5": {
    "hi": "पब्लिकेशन का प्रिंट सेटअप, कलर सेपरेशन, ट्रैपिंग, प्रिंटर मार्क्स (क्रॉप मार्क्स) और पीडीएफ एक्सपोर्ट समझाइए।",
    "en": "Explain publication print setup, color separation, trapping, printer crop marks, and exporting to PDF."
  },
  "p3-u4-q1": {
    "hi": "एडोब फोटोशॉप का परिचय, इंटरफेस, रास्टर बनाम वेक्टर ग्राफिक्स, इमेज रेजोल्यूशन और पिक्सल डाइमेंशन समझाइए।",
    "en": "Introduce Adobe Photoshop, interface, Raster vs Vector graphics, image resolution, and pixel dimensions."
  },
  "p3-u4-q2": {
    "hi": "फोटोशॉप सिलेक्शन टूल्स: मार्की, लैसो, मैग्नेटिक लैसो, पॉलीगोनल लैसो, मैजिक वैंड, क्विक सिलेक्शन और ऑब्जेक्ट सिलेक्शन समझाइए।",
    "en": "Explain Photoshop selection tools: Marquee, Lasso, Polygonal, Magnetic Lasso, Magic Wand, and Quick Selection."
  },
  "p3-u4-q3": {
    "hi": "इमेज एडजस्टमेंट: ब्राइटनेस/कंट्रास्ट, लेवल्स, कर्ब्स, ह्यू/सैचुरेशन, कलर बैलेंस और इनवर्ट का उपयोग समझाइए।",
    "en": "Explain image adjustments: Brightness/Contrast, Levels, Curves, Hue/Saturation, Color Balance, and Invert."
  },
  "p3-u4-q4": {
    "hi": "रिटचिंग टूल्स: क्लोन स्टैम्प, हीलिंग ब्रश, स्पॉट हीलिंग ब्रश, पैच टूल, डॉज, बर्न और स्पंज टूल का उपयोग समझाइए।",
    "en": "Explain retouching tools: Clone Stamp, Healing Brush, Spot Healing, Patch Tool, Dodge, Burn, and Sponge."
  },
  "p3-u4-q5": {
    "hi": "ड्राइंग व पेंटिंग टूल्स: ब्रश टूल, पेंसिल टूल, इरेज़र टूल, ग्रेडिएंट टूल, पेंट बकेट टूल और पेन टूल (पाथ क्रिएशन) समझाइए।",
    "en": "Explain painting tools: Brush, Pencil, Eraser, Gradient, Paint Bucket, and Pen Tool for path creation."
  },
  "p3-u5-q1": {
    "hi": "फोटोशॉप में लेयर्स (Layers) की अवधारणा: लेयर बनाना, डुप्लिकेट, डिलीट, रीऑर्डर, लेयर ओपेसिटी और ब्लेंडिंग मोड्स समझाइए।",
    "en": "Explain Layers in Photoshop: creating, duplicating, deleting, reordering, layer opacity, and layer blending modes."
  },
  "p3-u5-q2": {
    "hi": "लेयर स्टाइल्स (इफेक्ट्स): ड्रॉप शैडो, इनर ग्लो, आउटर ग्लो, बेवेल व एम्बॉस, स्ट्रोक और कलर ओवरले समझाइए।",
    "en": "Explain Layer Styles: Drop Shadow, Inner/Outer Glow, Bevel & Emboss, Stroke, and Color Overlay."
  },
  "p3-u5-q3": {
    "hi": "लेयर मास्क (Layer Mask) और क्लिपिंग मास्क (Clipping Mask) की अवधारणा, अंतर और गैर-विनाशकारी एडिटिंग समझाइए।",
    "en": "Explain Layer Masks and Clipping Masks: concepts, differences, and non-destructive image editing workflow."
  },
  "p3-u5-q4": {
    "hi": "फोटोशॉप फिल्टर्स: ब्लर, शार्पन, लिक्विफाइ, डिस्टॉर्ट, नॉइज़ और कैमरा रॉ फिल्टर का उपयोग समझाइए।",
    "en": "Explain Photoshop Filters: Blur, Sharpen, Liquify, Distort, Noise, and Camera Raw Filter."
  },
  "p3-u5-q5": {
    "hi": "इमेज फाइल फॉर्मेट्स: PSD, TIFF, JPEG, PNG, GIF, BMP, वेब के लिए इमेज सेव करना और प्रिंट तैयार करना समझाइए।",
    "en": "Explain Image File Formats: PSD, TIFF, JPEG, PNG, GIF, BMP, saving for web, and preparing files for print."
  },
  "p4-u1-q1": {
    "hi": "डेटाबेस की मूल अवधारणाएं, डीबीएमएस (DBMS) बनाम आरडीबीएमएस (RDBMS), डेटा रिडंडेंसी, डेटा अखंडता और एक्सेस के लाभ समझाइए।",
    "en": "Explain Database Fundamentals: DBMS vs RDBMS, data redundancy, data integrity, and advantages of MS Access."
  },
  "p4-u1-q2": {
    "hi": "रिलेशनल डेटाबेस मॉडल: टेबल्स, रिकॉर्ड्स (टुपल्स), फील्ड्स (एट्रिब्यूट्स), कीज और डेटाबेस नॉर्मलाइजेशन (1NF, 2NF, 3NF) समझाइए।",
    "en": "Explain Relational Database Model: tables, records (tuples), fields (attributes), keys, and database normalization (1NF, 2NF, 3NF)."
  },
  "p4-u1-q3": {
    "hi": "कीज की अवधारणा: प्राइमरी की, कैंडिडेट की, फॉरेन की, कंपोजिट की और रेफरेंशियल इंटीग्रिटी के नियम समझाइए।",
    "en": "Explain database keys: Primary Key, Candidate Key, Foreign Key, Composite Key, and Referential Integrity rules."
  },
  "p4-u1-q4": {
    "hi": "टेबल्स के बीच संबंध: वन-टू-वन, वन-टू-मेनी, और मेनी-टू-मेनी रिलेशनशिप्स तथा रिलेशनशिप विंडो में संबंध स्थापित करना समझाइए।",
    "en": "Explain relationships between tables: One-to-One, One-to-Many, Many-to-Many, and establishing relationships in MS Access."
  },
  "p4-u1-q5": {
    "hi": "एमएस-एक्सेस डेटाबेस डिजाइन के चरण: आवश्यकता विश्लेषण, टेबल निर्धारण, फील्ड्स का चयन और रिलेशनशिप डिजाइन समझाइए।",
    "en": "Explain MS Access Database Design steps: requirement analysis, determining tables, selecting fields, and defining relationships."
  },
  "p4-u2-q1": {
    "hi": "एमएस-एक्सेस 2021/365 का यूजर इंटरफेस, नेविगेशन फलक, डेटाबेस ऑब्जेक्ट्स (टेबल, क्वेरी, फॉर्म, रिपोर्ट, मैक्रो, मॉड्यूल) समझाइए।",
    "en": "Explain MS Access user interface, Navigation Pane, and Database Objects (Tables, Queries, Forms, Reports, Macros, Modules)."
  },
  "p4-u2-q2": {
    "hi": "एक्सेस में टेबल बनाना: डेटाशीट व्यू और डिज़ाइन व्यू में टेबल निर्माण, फील्ड नेम और डेटा टाइप्स समझाइए।",
    "en": "Explain creating tables in MS Access: Datasheet View vs Design View, field naming conventions, and data types."
  },
  "p4-u2-q3": {
    "hi": "फील्ड प्रॉपर्टीज: फील्ड साइज, फॉर्मेट, इनपुट मास्क, कैप्शन, डिफॉल्ट वैल्यू, वैलिडेशन रूल और वैलिडेशन टेक्स्ट समझाइए।",
    "en": "Explain Field Properties: Field Size, Format, Input Mask, Caption, Default Value, Validation Rule, and Validation Text."
  },
  "p4-u2-q4": {
    "hi": "लुकअप विजार्ड (Lookup Wizard): वैल्यू लिस्ट और टेबल/क्वेरी से लुकअप फील्ड बनाना व फॉरेन की मैपिंग समझाइए।",
    "en": "Explain Lookup Wizard: creating lookup fields from value lists or tables/queries and foreign key mapping."
  },
  "p4-u2-q5": {
    "hi": "डेटाशीट व्यू में डेटा ऑपरेशन्स: रिकॉर्ड्स जोड़ना, एडिट करना, डिलीट करना, सॉर्टिंग, फिल्टरिंग और फाइंड/रिप्लेस समझाइए।",
    "en": "Explain Datasheet operations: adding, editing, deleting records, sorting, filtering, and Find & Replace in MS Access."
  },
  "p4-u3-q1": {
    "hi": "क्वेरी (Query) की अवधारणा, आवश्यकता, प्रकार (सेलेक्ट, एक्शन, पैरामीटर, क्रॉसटैब) और क्वेरी विजार्ड का उपयोग समझाइए।",
    "en": "Explain Queries in MS Access: concept, need, types (Select, Action, Parameter, Crosstab), and Query Wizard."
  },
  "p4-u3-q2": {
    "hi": "क्वेरी डिज़ाइन व्यू: टेबल्स जोड़ना, फील्ड्स चुनना, क्राइटेरिया (Criteria) सेट करना, सॉर्टिंग और ऑपरेटर का प्रयोग समझाइए।",
    "en": "Explain Query Design View: adding tables, selecting fields, setting criteria, sorting, and using relational/logical operators."
  },
  "p4-u3-q3": {
    "hi": "कैलकुलेटेड फील्ड्स और एक्सप्रेशन्स: एक्सप्रेशन बिल्डर का उपयोग, डेट और स्ट्रिंग फंक्शंस से क्वेरी बनाना समझाइए।",
    "en": "Explain calculated fields and expressions in queries using Expression Builder, date functions, and string functions."
  },
  "p4-u3-q4": {
    "hi": "एक्शन क्वेरीज (Action Queries): मेक-टेबल, अपेंड, अपडेट और डिलीट क्वेरी की कार्यप्रणाली और सुरक्षा सावधानियां समझाइए।",
    "en": "Explain Action Queries: Make-Table, Append, Update, and Delete queries with their execution and safety precautions."
  },
  "p4-u3-q5": {
    "hi": "एसक्यूएल (SQL) व्यू: बेसिक एसक्यूएल स्टेटमेंट्स (SELECT, WHERE, ORDER BY, GROUP BY, JOIN) लिखना और चलाना समझाइए।",
    "en": "Explain SQL View in MS Access: writing and running basic SQL statements (SELECT, WHERE, ORDER BY, GROUP BY, JOIN)."
  },
  "p4-u4-q1": {
    "hi": "फॉर्म्स (Forms) का परिचय, उद्देश्य, प्रकार: कॉलमर, टेबुलर, डेटाशीट, जस्टिफाइड और मेन/सबफॉर्म (Main/Subform) समझाइए।",
    "en": "Explain Forms in MS Access: purpose, types (Columnar, Tabular, Datasheet, Justified), and Main/Subform architecture."
  },
  "p4-u4-q2": {
    "hi": "फॉर्म डिज़ाइन व्यू: हेडर और फुटर जोड़ना, फील्ड्स इंसर्ट करना, लेबल्स, टेक्स्ट बॉक्स और फॉर्म फॉर्मेटिंग समझाइए।",
    "en": "Explain Form Design View: adding headers & footers, inserting fields, formatting labels, text boxes, and form layouts."
  },
  "p4-u4-q3": {
    "hi": "फॉर्म कंट्रोल्स: ऑप्शन बटन, चेक बॉक्स, कॉम्बो बॉक्स, लिस्ट बॉक्स, कमांड बटन और पिक्चर कंट्रोल का उपयोग समझाइए।",
    "en": "Explain Form Controls: Option Buttons, Check Boxes, Combo Boxes, List Boxes, Command Buttons, and Image Controls."
  },
  "p4-u4-q4": {
    "hi": "फॉर्म विजार्ड (Form Wizard) की सहायता से आकर्षक और यूजर-फ्रेंडली डेटा एंट्री फॉर्म बनाना सिखाइए।",
    "en": "Demonstrate creating user-friendly data entry forms using Form Wizard step-by-step in MS Access."
  },
  "p4-u4-q5": {
    "hi": "कस्टम टेम्प्लेट और नेविगेशन फॉर्म बनाना, फॉर्म में कमांड बटन विज़ार्ड से नेविगेशन एक्शन जोड़ना समझाइए।",
    "en": "Explain creating custom templates, navigation forms, and adding button navigation actions using Command Button Wizard."
  },
  "p4-u5-q1": {
    "hi": "रिपोर्ट्स (Reports) का परिचय, उद्देश्य, प्रकार: सिंगल कॉलम, टेबुलर, ग्रुपिंग व टोटल्स रिपोर्ट और मेलिंग लेबल्स समझाइए।",
    "en": "Explain Reports in MS Access: purpose, types (Single Column, Tabular, Grouped & Totals reports), and mailing labels."
  },
  "p4-u5-q2": {
    "hi": "सिंगल टेबल और मल्टी-टेबल रिपोर्ट्स: रिलेशनशिप्स के आधार पर जुड़े टेबल्स से डेटा संकलित कर रिपोर्ट बनाना समझाइए।",
    "en": "Explain creating single-table and multi-table reports based on relationships in MS Access."
  },
  "p4-u5-q3": {
    "hi": "रिपोर्ट प्रीव्यू, प्रिंट सेटिंग्स, पेज लेआउट, हेडर/फुटर, पेज नंबर और समरी कैलकुलेशन (Sum, Avg) जोड़ना समझाइए।",
    "en": "Explain Report Preview, print setup, page margins, headers/footers, page numbers, and summary calculations (Sum, Avg)."
  },
  "p4-u5-q4": {
    "hi": "लेबल विजार्ड (Label Wizard) का उपयोग करके एड्रेस व इन्वेंटरी लेबल्स बनाना और प्रिंट करना समझाइए।",
    "en": "Explain creating and printing address and inventory barcode labels using Label Wizard in MS Access."
  },
  "p4-u5-q5": {
    "hi": "रिपोर्ट विजार्ड (Report Wizard) की सहायता से ग्रुपिंग, सॉर्टिंग और सारांश के साथ प्रोफेशनल रिपोर्ट तैयार करना सिखाइए।",
    "en": "Demonstrate building professional reports with grouping, sorting, and summaries using Report Wizard in MS Access."
  },
  "p5-u1-q1": {
    "hi": "IT Evolution, Role of IT in Digital Economy, Impact on Society, Education, E-Governance, E-Democracy को विस्तार से समझाइए।",
    "en": "Explain IT Evolution, Role of IT in Digital Economy, Impact on Society, Education, E-Governance, E-Democracy in detail."
  },
  "p5-u1-q2": {
    "hi": "Government Efforts: PPP Model, E-Governance Websites & Services, MPONLINE, UIDAI & Aadhar, UMANG, Digital Locker, Digital Library को विस्तार से समझाइए।",
    "en": "Explain Government Efforts: PPP Model, E-Governance Websites & Services, MPONLINE, UIDAI & Aadhar, UMANG, Digital Locker, Digital Library in detail."
  },
  "p5-u1-q3": {
    "hi": "E-Commerce: Introduction, Concepts, Benefits, Impact को विस्तार से समझाइए।",
    "en": "Explain E-Commerce: Introduction, Concepts, Benefits, Impact in detail."
  },
  "p5-u1-q4": {
    "hi": "Electronic Payment Systems: RTGS, IMPS, NEFT, Payment Gateway, Debit/Credit Card, Internet Banking, Mobile Wallet, UPI, BHIM, PAYTM को विस्तार से समझाइए।",
    "en": "Explain Electronic Payment Systems: RTGS, IMPS, NEFT, Payment Gateway, Debit/Credit Card, Internet Banking, Mobile Wallet, UPI, BHIM, PAYTM in detail."
  },
  "p5-u1-q5": {
    "hi": "Online Shopping, Online Marketing, Green Computing, Sustainable IT Practices, Applications of AI/Cloud/IoT को विस्तार से समझाइए।",
    "en": "Explain Online Shopping, Online Marketing, Green Computing, Sustainable IT Practices, Applications of AI/Cloud/IoT in detail."
  },
  "p5-u2-q1": {
    "hi": "Cloud Computing: Introduction, Architecture, Types (Public, Private, Hybrid, Community) को विस्तार से समझाइए।",
    "en": "Explain Cloud Computing: Introduction, Architecture, Types (Public, Private, Hybrid, Community) in detail."
  },
  "p5-u2-q2": {
    "hi": "Service Models: IaaS, PaaS, SaaS को विस्तार से समझाइए।",
    "en": "Explain Service Models: IaaS, PaaS, SaaS in detail."
  },
  "p5-u2-q3": {
    "hi": "Virtualization: Hypervisors, Virtual Machines, Containers को विस्तार से समझाइए।",
    "en": "Explain Virtualization: Hypervisors, Virtual Machines, Containers in detail."
  },
  "p5-u2-q4": {
    "hi": "Cloud Security, Privacy, Challenges को विस्तार से समझाइए।",
    "en": "Explain Cloud Security, Privacy, Challenges in detail."
  },
  "p5-u2-q5": {
    "hi": "Major Cloud Providers: AWS, Microsoft Azure, Google Cloud को विस्तार से समझाइए।",
    "en": "Explain Major Cloud Providers: AWS, Microsoft Azure, Google Cloud in detail."
  },
  "p5-u3-q1": {
    "hi": "AI and ML Concepts, AI Applications in Automation, Healthcare, Education, Business को विस्तार से समझाइए।",
    "en": "Explain AI and ML Concepts, AI Applications in Automation, Healthcare, Education, Business in detail."
  },
  "p5-u3-q2": {
    "hi": "Machine Learning Models: Supervised, Unsupervised, Reinforcement Learning को विस्तार से समझाइए।",
    "en": "Explain Machine Learning Models: Supervised, Unsupervised, Reinforcement Learning in detail."
  },
  "p5-u3-q3": {
    "hi": "Data Science and Data Analytics Basics को विस्तार से समझाइए।",
    "en": "Explain Data Science and Data Analytics Basics in detail."
  },
  "p5-u3-q4": {
    "hi": "Predictive Analytics and Business Intelligence Tools को विस्तार से समझाइए।",
    "en": "Explain Predictive Analytics and Business Intelligence Tools in detail."
  },
  "p5-u3-q5": {
    "hi": "Generative AI and Chatbots को विस्तार से समझाइए।",
    "en": "Explain Generative AI and Chatbots in detail."
  },
  "p5-u4-q1": {
    "hi": "IoT: Concepts, Architecture, Applications को विस्तार से समझाइए।",
    "en": "Explain IoT: Concepts, Architecture, Applications in detail."
  },
  "p5-u4-q2": {
    "hi": "Smart Devices, Sensors, Communication Technologies को विस्तार से समझाइए।",
    "en": "Explain Smart Devices, Sensors, Communication Technologies in detail."
  },
  "p5-u4-q3": {
    "hi": "Blockchain: Structure, Function, Use Cases; Cryptocurrencies and Smart Contracts को विस्तार से समझाइए।",
    "en": "Explain Blockchain: Structure, Function, Use Cases; Cryptocurrencies and Smart Contracts in detail."
  },
  "p5-u4-q4": {
    "hi": "Cybersecurity: Threats, Attacks, Prevention को विस्तार से समझाइए।",
    "en": "Explain Cybersecurity: Threats, Attacks, Prevention in detail."
  },
  "p5-u4-q5": {
    "hi": "Data Privacy and Digital Ethics को विस्तार से समझाइए।",
    "en": "Explain Data Privacy and Digital Ethics in detail."
  },
  "p5-u5-q1": {
    "hi": "5G and Edge Computing को विस्तार से समझाइए।",
    "en": "Explain 5G and Edge Computing in detail."
  },
  "p5-u5-q2": {
    "hi": "AR, VR, Mixed Reality को विस्तार से समझाइए।",
    "en": "Explain AR, VR, Mixed Reality in detail."
  },
  "p5-u5-q3": {
    "hi": "RPA and Chatbots को विस्तार से समझाइए।",
    "en": "Explain RPA and Chatbots in detail."
  },
  "p5-u5-q4": {
    "hi": "Quantum Computing: Concept and Applications को विस्तार से समझाइए।",
    "en": "Explain Quantum Computing: Concept and Applications in detail."
  },
  "p5-u5-q5": {
    "hi": "Green and Ethical IT Practices को विस्तार से समझाइए।",
    "en": "Explain Green and Ethical IT Practices in detail."
  },
  "p6-u1-q1": {
    "hi": "Internet Evolution, Concept, Internet vs Intranet, ISP and its Functions को विस्तार से समझाइए।",
    "en": "Explain Internet Evolution, Concept, Internet vs Intranet, ISP and its Functions in detail."
  },
  "p6-u1-q2": {
    "hi": "URLs, Portals, Internet Services and Applications को विस्तार से समझाइए।",
    "en": "Explain URLs, Portals, Internet Services and Applications in detail."
  },
  "p6-u1-q3": {
    "hi": "E-mail Basics, Sending/Receiving, Free Email Services, Internet Chatting (Voice, Text) को विस्तार से समझाइए।",
    "en": "Explain E-mail Basics, Sending/Receiving, Free Email Services, Internet Chatting (Voice, Text) in detail."
  },
  "p6-u1-q4": {
    "hi": "WWW: History, Working, Web Browsers and Functions, Search Engines, Searching the Web को विस्तार से समझाइए।",
    "en": "Explain WWW: History, Working, Web Browsers and Functions, Search Engines, Searching the Web in detail."
  },
  "p6-u1-q5": {
    "hi": "HTTP, URLs, Web Servers, Web Protocols को विस्तार से समझाइए।",
    "en": "Explain HTTP, URLs, Web Servers, Web Protocols in detail."
  },
  "p6-u2-q1": {
    "hi": "HTML: Concepts of Hypertext, Versions, Elements, Syntax, Tags & Attributes, Head & Body Sections, Building HTML Documents को विस्तार से समझाइए।",
    "en": "Explain HTML: Concepts of Hypertext, Versions, Elements, Syntax, Tags & Attributes, Head & Body Sections, Building HTML Documents in detail."
  },
  "p6-u2-q2": {
    "hi": "Inserting Texts, Images, Hyperlinks, Backgrounds, Color Controls, Different HTML Tags को विस्तार से समझाइए।",
    "en": "Explain Inserting Texts, Images, Hyperlinks, Backgrounds, Color Controls, Different HTML Tags in detail."
  },
  "p6-u2-q3": {
    "hi": "Table Layout and Presentation, Creating Lists, Font Size & Attributes, List Types and Tags को विस्तार से समझाइए।",
    "en": "Explain Table Layout and Presentation, Creating Lists, Font Size & Attributes, List Types and Tags in detail."
  },
  "p6-u2-q4": {
    "hi": "Frames and Forms in Web Pages, Creating Frameset, Opening Pages into Frames को विस्तार से समझाइए।",
    "en": "Explain Frames and Forms in Web Pages, Creating Frameset, Opening Pages into Frames in detail."
  },
  "p6-u2-q5": {
    "hi": "Design Forms Control को विस्तार से समझाइए।",
    "en": "Explain Design Forms Control in detail."
  },
  "p6-u3-q1": {
    "hi": "CSS: Introduction, Creating Style, Inline and External CSS, Divs with ID Style, Tag & Class Style, Font Family, Size, Colors, Borders, Navigation Links, Effects को विस्तार से समझाइए।",
    "en": "Explain CSS: Introduction, Creating Style, Inline and External CSS, Divs with ID Style, Tag & Class Style, Font Family, Size, Colors, Borders, Navigation Links, Effects in detail."
  },
  "p6-u3-q2": {
    "hi": "JavaScript Overview, Syntax, Variables, Expressions, Branching & Looping Statements को विस्तार से समझाइए।",
    "en": "Explain JavaScript Overview, Syntax, Variables, Expressions, Branching & Looping Statements in detail."
  },
  "p6-u3-q3": {
    "hi": "Functions, Arrays, Objects को विस्तार से समझाइए।",
    "en": "Explain Functions, Arrays, Objects in detail."
  },
  "p6-u3-q4": {
    "hi": "Events & DOM: onClick, onMouseOver, onSubmit, onFocus, onChange, onBlur, onLoad, onUnload को विस्तार से समझाइए।",
    "en": "Explain Events & DOM: onClick, onMouseOver, onSubmit, onFocus, onChange, onBlur, onLoad, onUnload in detail."
  },
  "p6-u3-q5": {
    "hi": "Alerts, Prompts & Confirms को विस्तार से समझाइए।",
    "en": "Explain Alerts, Prompts & Confirms in detail."
  },
  "p6-u4-q1": {
    "hi": "Expression Web: Creating New Site, New Page को विस्तार से समझाइए।",
    "en": "Explain Expression Web: Creating New Site, New Page in detail."
  },
  "p6-u4-q2": {
    "hi": "Inserting and Formatting Text, Creating & Inserting Images, Adjusting Transparency, Alternative Text, Aligning Images को विस्तार से समझाइए।",
    "en": "Explain Inserting and Formatting Text, Creating & Inserting Images, Adjusting Transparency, Alternative Text, Aligning Images in detail."
  },
  "p6-u4-q3": {
    "hi": "Creating Email Link, Linking to Other Websites, Testing and Targeting Links को विस्तार से समझाइए।",
    "en": "Explain Creating Email Link, Linking to Other Websites, Testing and Targeting Links in detail."
  },
  "p6-u4-q4": {
    "hi": "Organizing Files & Folders, Designing Accessible Tables, Styling a Table, Editing Table Layouts को विस्तार से समझाइए।",
    "en": "Explain Organizing Files & Folders, Designing Accessible Tables, Styling a Table, Editing Table Layouts in detail."
  },
  "p6-u4-q5": {
    "hi": "Adding Style to a Table using CSS को विस्तार से समझाइए।",
    "en": "Explain Adding Style to a Table using CSS in detail."
  },
  "p6-u5-q1": {
    "hi": "WordPress: What is, Installation, Login, Admin Panel Overview, User Profile को विस्तार से समझाइए।",
    "en": "Explain WordPress: What is, Installation, Login, Admin Panel Overview, User Profile in detail."
  },
  "p6-u5-q2": {
    "hi": "WordPress Themes, Themes Depository, Create & Add Logo, Set up Static Home Page को विस्तार से समझाइए।",
    "en": "Explain WordPress Themes, Themes Depository, Create & Add Logo, Set up Static Home Page in detail."
  },
  "p6-u5-q3": {
    "hi": "Create Posts, Delete Pages, Create Menu, Add/Delete Post, Add Widgets, Upload Images, Add Images to Post, Insert/Format Text, Add Hyperlink to Image/Text को विस्तार से समझाइए।",
    "en": "Explain Create Posts, Delete Pages, Create Menu, Add/Delete Post, Add Widgets, Upload Images, Add Images to Post, Insert/Format Text, Add Hyperlink to Image/Text in detail."
  },
  "p6-u5-q4": {
    "hi": "Protocols: Meaning, FTP, DNS, TCP, UDP, HTTP, IP Telnet; FTP Commands, FTP with Filezilla & CuteFTP को विस्तार से समझाइए।",
    "en": "Explain Protocols: Meaning, FTP, DNS, TCP, UDP, HTTP, IP Telnet; FTP Commands, FTP with Filezilla & CuteFTP in detail."
  },
  "p6-u5-q5": {
    "hi": "Web Hosting: Concept, Domain Name & DNS, Procedure to Register Domain, Web Hosting, Space on Host Server को विस्तार से समझाइए।",
    "en": "Explain Web Hosting: Concept, Domain Name & DNS, Procedure to Register Domain, Web Hosting, Space on Host Server in detail."
  },
  "p7-u1-q1": {
    "hi": "Accounting: Meaning, Objectives, Importance, Types (Financial, Cost, Management), Users को विस्तार से समझाइए।",
    "en": "Explain Accounting: Meaning, Objectives, Importance, Types (Financial, Cost, Management), Users in detail."
  },
  "p7-u1-q2": {
    "hi": "Basic Terms & Concepts: Assets, Liabilities, Capital, Income, Expenditure, Profit, Loss, Debtors, Creditors, Double Entry System, Golden Rules, Accrual, Matching, Going Concern, Consistency, Prudence को विस्तार से समझाइए।",
    "en": "Explain Basic Terms & Concepts: Assets, Liabilities, Capital, Income, Expenditure, Profit, Loss, Debtors, Creditors, Double Entry System, Golden Rules, Accrual, Matching, Going Concern, Consistency, Prudence in detail."
  },
  "p7-u1-q3": {
    "hi": "Accounting Process: Journal Entries, Ledger Posting, Trial Balance; Subsidiary Books & Cash Book (Purchase, Sales, Returns, Single/Double/Triple Column) को विस्तार से समझाइए।",
    "en": "Explain Accounting Process: Journal Entries, Ledger Posting, Trial Balance; Subsidiary Books & Cash Book (Purchase, Sales, Returns, Single/Double/Triple Column) in detail."
  },
  "p7-u1-q4": {
    "hi": "Final Accounts: Trading Account, P&L, Balance Sheet with Adjustments को विस्तार से समझाइए।",
    "en": "Explain Final Accounts: Trading Account, P&L, Balance Sheet with Adjustments in detail."
  },
  "p7-u1-q5": {
    "hi": "Financial Statement Analysis: Fund Flow, Cash Flow (AS-3), Ratio Analysis (Liquidity, Profitability, Solvency, Activity), Interpretation, Mini Project को विस्तार से समझाइए।",
    "en": "Explain Financial Statement Analysis: Fund Flow, Cash Flow (AS-3), Ratio Analysis (Liquidity, Profitability, Solvency, Activity), Interpretation, Mini Project in detail."
  },
  "p7-u2-q1": {
    "hi": "Tally Prime: Features, Advantages, Installation, Navigation, Company Creation, Backup & Restore को विस्तार से समझाइए।",
    "en": "Explain Tally Prime: Features, Advantages, Installation, Navigation, Company Creation, Backup & Restore in detail."
  },
  "p7-u2-q2": {
    "hi": "Basic Operations: Gateway of Tally, Company Features & Configurations, Security & Password Management को विस्तार से समझाइए।",
    "en": "Explain Basic Operations: Gateway of Tally, Company Features & Configurations, Security & Password Management in detail."
  },
  "p7-u2-q3": {
    "hi": "Accounting Masters: Creating & Altering Groups, Ledgers, Chart of Accounts को विस्तार से समझाइए।",
    "en": "Explain Accounting Masters: Creating & Altering Groups, Ledgers, Chart of Accounts in detail."
  },
  "p7-u2-q4": {
    "hi": "Voucher Entries: Contra, Payment, Receipt, Journal, Purchase, Sales, Debit Note, Credit Note, Day Book, Trial Balance, Viewing/Printing Vouchers को विस्तार से समझाइए।",
    "en": "Explain Voucher Entries: Contra, Payment, Receipt, Journal, Purchase, Sales, Debit Note, Credit Note, Day Book, Trial Balance, Viewing/Printing Vouchers in detail."
  },
  "p7-u2-q5": {
    "hi": "Banking Features: Bank Reconciliation, Cheque Printing, Deposit Slips, Payment Advices, PDC Voucher; Non-Accounting Vouchers: Memorandum, Reversing Journal, Optional; Cost Centers, Cost Categories, Budgeting, Scenario Management को विस्तार से समझाइए।",
    "en": "Explain Banking Features: Bank Reconciliation, Cheque Printing, Deposit Slips, Payment Advices, PDC Voucher; Non-Accounting Vouchers: Memorandum, Reversing Journal, Optional; Cost Centers, Cost Categories, Budgeting, Scenario Management in detail."
  },
  "p7-u3-q1": {
    "hi": "Inventory Management: Introduction, Inventory Masters: Stock Groups, Categories, Items, Units of Measurement, Compound Units, Godowns को विस्तार से समझाइए।",
    "en": "Explain Inventory Management: Introduction, Inventory Masters: Stock Groups, Categories, Items, Units of Measurement, Compound Units, Godowns in detail."
  },
  "p7-u3-q2": {
    "hi": "Inventory Vouchers: Purchase Order, Sales Order, Delivery Note, Receipt Note, Rejection Out/In, Stock Journal, Physical Stock को विस्तार से समझाइए।",
    "en": "Explain Inventory Vouchers: Purchase Order, Sales Order, Delivery Note, Receipt Note, Rejection Out/In, Stock Journal, Physical Stock in detail."
  },
  "p7-u3-q3": {
    "hi": "Invoicing & Billing: Item vs Accounting Invoicing, Multiple Price Levels, Discounts, Standard Cost, Selling Price, MRP, Actual & Billed Quantity को विस्तार से समझाइए।",
    "en": "Explain Invoicing & Billing: Item vs Accounting Invoicing, Multiple Price Levels, Discounts, Standard Cost, Selling Price, MRP, Actual & Billed Quantity in detail."
  },
  "p7-u3-q4": {
    "hi": "Inventory Reports: Stock Summary, Movement Analysis, Shortage, Ageing, Batch-wise, Purchase Register, Sales Register को विस्तार से समझाइए।",
    "en": "Explain Inventory Reports: Stock Summary, Movement Analysis, Shortage, Ageing, Batch-wise, Purchase Register, Sales Register in detail."
  },
  "p7-u3-q5": {
    "hi": "Practical: Inventory Masters बनाकर Vouchers Record करना और Reports Generate करना सिखाइए।",
    "en": "Explain Practical: Inventory Masters बनाकर Vouchers Record करना और Reports Generate करना in detail."
  },
  "p7-u4-q1": {
    "hi": "GST Overview: Concept, Structure (CGST, SGST, IGST, UTGST), Registration, Returns, Tax Rates को विस्तार से समझाइए।",
    "en": "Explain GST Overview: Concept, Structure (CGST, SGST, IGST, UTGST), Registration, Returns, Tax Rates in detail."
  },
  "p7-u4-q2": {
    "hi": "GST Configuration in Tally: Enabling GST, Creating Tax Ledgers, Assigning GST Details to Masters को विस्तार से समझाइए।",
    "en": "Explain GST Configuration in Tally: Enabling GST, Creating Tax Ledgers, Assigning GST Details to Masters in detail."
  },
  "p7-u4-q3": {
    "hi": "Recording GST Transactions: Intra-state & Inter-state Sales & Purchases, Taxable & Exempt, Reverse Charge Mechanism को विस्तार से समझाइए।",
    "en": "Explain Recording GST Transactions: Intra-state & Inter-state Sales & Purchases, Taxable & Exempt, Reverse Charge Mechanism in detail."
  },
  "p7-u4-q4": {
    "hi": "GST Reports & Returns: GSTR-1, GSTR-2, GSTR-3B, Input Credit Summary को विस्तार से समझाइए।",
    "en": "Explain GST Reports & Returns: GSTR-1, GSTR-2, GSTR-3B, Input Credit Summary in detail."
  },
  "p7-u4-q5": {
    "hi": "Generating & Exporting Reports for Filing को विस्तार से समझाइए।",
    "en": "Explain Generating & Exporting Reports for Filing in detail."
  },
  "p7-u5-q1": {
    "hi": "TDS: Introduction, Applicability, TDS Ledgers & Configuration in Tally को विस्तार से समझाइए।",
    "en": "Explain TDS: Introduction, Applicability, TDS Ledgers & Configuration in Tally in detail."
  },
  "p7-u5-q2": {
    "hi": "Recording TDS on Expenses & Payments, TDS Reports को विस्तार से समझाइए।",
    "en": "Explain Recording TDS on Expenses & Payments, TDS Reports in detail."
  },
  "p7-u5-q3": {
    "hi": "MIS Reports: Balance Sheet, P&L, Ratio Analysis, Cash Flow & Fund Flow Statements को विस्तार से समझाइए।",
    "en": "Explain MIS Reports: Balance Sheet, P&L, Ratio Analysis, Cash Flow & Fund Flow Statements in detail."
  },
  "p7-u5-q4": {
    "hi": "Management Reports & Export Options को विस्तार से समझाइए।",
    "en": "Explain Management Reports & Export Options in detail."
  },
  "p7-u5-q5": {
    "hi": "Project Work: Full Accounting Cycle in Tally with GST & TDS, Real-world Business Scenario Simulation को विस्तार से समझाइए।",
    "en": "Explain Project Work: Full Accounting Cycle in Tally with GST & TDS, Real-world Business Scenario Simulation in detail."
  },
  "p8-u1-q1": {
    "hi": "Multimedia: Definition, Concept, Need, Applications, Development Platforms को विस्तार से समझाइए।",
    "en": "Explain Multimedia: Definition, Concept, Need, Applications, Development Platforms in detail."
  },
  "p8-u1-q2": {
    "hi": "Types: Linear and Non-linear, Multimedia Elements (Text, Images, Sound, Animation, Video) को विस्तार से समझाइए।",
    "en": "Explain Types: Linear and Non-linear, Multimedia Elements (Text, Images, Sound, Animation, Video) in detail."
  },
  "p8-u1-q3": {
    "hi": "Multimedia Hardware and Software Requirements को विस्तार से समझाइए।",
    "en": "Explain Multimedia Hardware and Software Requirements in detail."
  },
  "p8-u1-q4": {
    "hi": "Making Simple Multimedia with PowerPoint को विस्तार से समझाइए।",
    "en": "Explain Making Simple Multimedia with PowerPoint in detail."
  },
  "p8-u1-q5": {
    "hi": "Text as Component: Plain vs Formatted, RTF & HTML, OLE Concept, Fonts Need & Types; Importance of Sound, Graphics, Video, Animation को विस्तार से समझाइए।",
    "en": "Explain Text as Component: Plain vs Formatted, RTF & HTML, OLE Concept, Fonts Need & Types; Importance of Sound, Graphics, Video, Animation in detail."
  },
  "p8-u2-q1": {
    "hi": "Image Types: Raster and Vector Graphics; Image File Formats (JPEG, PNG, GIF, BMP, TIFF) को विस्तार से समझाइए।",
    "en": "Explain Image Types: Raster and Vector Graphics; Image File Formats (JPEG, PNG, GIF, BMP, TIFF) in detail."
  },
  "p8-u2-q2": {
    "hi": "Basics of Graphic Design: Color Theory, Resolution, Composition; Image Editing Tools and Techniques को विस्तार से समझाइए।",
    "en": "Explain Basics of Graphic Design: Color Theory, Resolution, Composition; Image Editing Tools and Techniques in detail."
  },
  "p8-u2-q3": {
    "hi": "CorelDraw: Introduction, Usage, Advantages, User Interface, Tool Panel, Workspaces को विस्तार से समझाइए।",
    "en": "Explain CorelDraw: Introduction, Usage, Advantages, User Interface, Tool Panel, Workspaces in detail."
  },
  "p8-u2-q4": {
    "hi": "Various Sizes and Formats of Panels and Layouts, File Layouts and Layout Properties को विस्तार से समझाइए।",
    "en": "Explain Various Sizes and Formats of Panels and Layouts, File Layouts and Layout Properties in detail."
  },
  "p8-u2-q5": {
    "hi": "Objects and Using Color Profiles को विस्तार से समझाइए।",
    "en": "Explain Objects and Using Color Profiles in detail."
  },
  "p8-u3-q1": {
    "hi": "Text Tools and Text Properties को विस्तार से समझाइए।",
    "en": "Explain Text Tools and Text Properties in detail."
  },
  "p8-u3-q2": {
    "hi": "Creating Vector Graphics using Editing Tools को विस्तार से समझाइए।",
    "en": "Explain Creating Vector Graphics using Editing Tools in detail."
  },
  "p8-u3-q3": {
    "hi": "Importing Images and Graphics in CorelDraw Layout; Creating and Editing Shapes को विस्तार से समझाइए।",
    "en": "Explain Importing Images and Graphics in CorelDraw Layout; Creating and Editing Shapes in detail."
  },
  "p8-u3-q4": {
    "hi": "Drawing and Editing Curves; Creating Special Text Effects को विस्तार से समझाइए।",
    "en": "Explain Drawing and Editing Curves; Creating Special Text Effects in detail."
  },
  "p8-u3-q5": {
    "hi": "Creating Special Object Effects; Using Color Effects को विस्तार से समझाइए।",
    "en": "Explain Creating Special Object Effects; Using Color Effects in detail."
  },
  "p8-u4-q1": {
    "hi": "Using Grid and Rulers को विस्तार से समझाइए।",
    "en": "Explain Using Grid and Rulers in detail."
  },
  "p8-u4-q2": {
    "hi": "Tracing Images and Graphics को विस्तार से समझाइए।",
    "en": "Explain Tracing Images and Graphics in detail."
  },
  "p8-u4-q3": {
    "hi": "Working with Borders and Page Arrangements को विस्तार से समझाइए।",
    "en": "Explain Working with Borders and Page Arrangements in detail."
  },
  "p8-u4-q4": {
    "hi": "Using Masking Effects with Text को विस्तार से समझाइए।",
    "en": "Explain Using Masking Effects with Text in detail."
  },
  "p8-u4-q5": {
    "hi": "Using Masking Effects with Objects को विस्तार से समझाइए।",
    "en": "Explain Using Masking Effects with Objects in detail."
  },
  "p8-u5-q1": {
    "hi": "Adobe Premiere: Introduction, Area of Use, Setting up New Project, Workspace (Project Video Display, Selected Clip Display, Project Panel, Timeline Toolbar) को विस्तार से समझाइए।",
    "en": "Explain Adobe Premiere: Introduction, Area of Use, Setting up New Project, Workspace (Project Video Display, Selected Clip Display, Project Panel, Timeline Toolbar) in detail."
  },
  "p8-u5-q2": {
    "hi": "Toolbar Description: Selection, Track Select Forward/Backward, Ripple Edit, Rolling Edit, Rate Stretch, Razor, Slip, Slide, Pen, Hand, Zoom को विस्तार से समझाइए।",
    "en": "Explain Toolbar Description: Selection, Track Select Forward/Backward, Ripple Edit, Rolling Edit, Rate Stretch, Razor, Slip, Slide, Pen, Hand, Zoom in detail."
  },
  "p8-u5-q3": {
    "hi": "Importing Files, Sequence, Titles, Video Motion, Video Opacity को विस्तार से समझाइए।",
    "en": "Explain Importing Files, Sequence, Titles, Video Motion, Video Opacity in detail."
  },
  "p8-u5-q4": {
    "hi": "Transition Panel, Effect Panel, Color Correction, Adjusting Video Speed को विस्तार से समझाइए।",
    "en": "Explain Transition Panel, Effect Panel, Color Correction, Adjusting Video Speed in detail."
  },
  "p8-u5-q5": {
    "hi": "Saving Project, Exporting Video को विस्तार से समझाइए।",
    "en": "Explain Saving Project, Exporting Video in detail."
  }
};

export interface PaperTranslation {
  titleHi: string;
  titleEn: string;
  subtitleHi: string;
  subtitleEn: string;
}

export const paperTranslations: Record<string, PaperTranslation> = {
  "pgdca-p1": {
    titleHi: "कंप्यूटर फंडामेंटल्स एवं AI अवधारणाएं",
    titleEn: "Computer Fundamentals and AI Concepts",
    subtitleHi: "कंप्यूटर आर्किटेक्चर, मेमोरी, नेटवर्किंग व एआई बेसिक्स",
    subtitleEn: "Computer Architecture, Memory, Networking & AI Basics"
  },
  "pgdca-p2": {
    titleHi: "पीसी पैकेजेस विथ AI एसेंशियल्स",
    titleEn: "PC Packages with AI Essentials",
    subtitleHi: "विंडोज 11, वर्ड, एक्सेल, पावरपॉइंट व एआई टूल्स",
    subtitleEn: "Windows 11, MS Word, Excel, PowerPoint & AI Tools"
  },
  "pgdca-p3": {
    titleHi: "डिजिटल पब्लिशिंग (PageMaker व Photoshop)",
    titleEn: "Digital Publishing (PageMaker & Photoshop)",
    subtitleHi: "डीटीपी, टाइपोग्राफी, पेजमेकर 7.0 व फोटोशॉप",
    subtitleEn: "DTP Concepts, Typography, Adobe PageMaker & Photoshop"
  },
  "pgdca-p4": {
    titleHi: "एमएस-एक्सेस डेटाबेस मैनेजमेंट",
    titleEn: "MS-Access Database Management",
    subtitleHi: "रिलेशनल डेटाबेस, टेबल्स, क्वेरीज, फॉर्म्स व रिपोर्ट्स",
    subtitleEn: "Relational Database, Tables, Queries, Forms & Reports"
  },
  "pgdca-p5": {
    titleHi: "उभरती डिजिटल प्रौद्योगिकियां",
    titleEn: "Emerging Digital Technologies",
    subtitleHi: "क्लाउड कंप्यूटिंग, एआई/एमएल, आईओटी, ब्लॉकचेन व साइबर सुरक्षा",
    subtitleEn: "Cloud Computing, AI/ML, IoT, Blockchain & Cybersecurity"
  },
  "pgdca-p6": {
    titleHi: "वेब डेवलपमेंट टेक्नोलॉजीज",
    titleEn: "Web Development Technologies",
    subtitleHi: "इंटरनेट, एचटीएमएल, सीएसएस, जावास्क्रिप्ट व वर्डप्रेस",
    subtitleEn: "Internet Concepts, HTML, CSS, JavaScript & WordPress"
  },
  "pgdca-p7": {
    titleHi: "टैली के साथ वित्तीय लेखांकन",
    titleEn: "Financial Accounting with Tally",
    subtitleHi: "अकाउंटिंग सिद्धांत, टैली प्राइम, इन्वेंटरी, जीएसटी व टीडीएस",
    subtitleEn: "Accounting Principles, Tally Prime, Inventory, GST & TDS"
  },
  "pgdca-p8": {
    titleHi: "मल्टीमीडिया डिजाइन एवं प्रोडक्शन",
    titleEn: "Multimedia Design and Production",
    subtitleHi: "मल्टीमीडिया बेसिक्स, कोरलड्रॉ व एडोब प्रीमियर प्रो",
    subtitleEn: "Multimedia Fundamentals, CorelDraw & Adobe Premiere Pro"
  },
  "dca-p1": {
    titleHi: "कंप्यूटर फंडामेंटल्स एवं AI अवधारणाएं",
    titleEn: "Computer Fundamentals and AI Concepts",
    subtitleHi: "कंप्यूटर हार्डवेयर, सॉफ्टवेयर व एआई बेसिक्स",
    subtitleEn: "Computer Hardware, Software & AI Basics"
  },
  "dca-p2": {
    titleHi: "पीसी पैकेजेस एवं AI ऑफिस टूल्स",
    titleEn: "PC Packages and AI Office Tools",
    subtitleHi: "विंडोज, एमएस वर्ड, एक्सेल, पावरपॉइंट व एआई",
    subtitleEn: "Windows, MS Word, Excel, PowerPoint & AI"
  },
  "dca-p3": {
    titleHi: "एमएस एक्सेस द्वारा डेटाबेस प्रबंधन",
    titleEn: "Database Using MS Access",
    subtitleHi: "टेबल्स, डेटा एंट्री, क्वेरी, फॉर्म्स व रिपोर्ट्स",
    subtitleEn: "Tables, Data Entry, Queries, Forms & Reports"
  },
  "dca-p4": {
    titleHi: "मल्टीमीडिया एवं वर्तमान आईटी रुझान",
    titleEn: "Multimedia and Current IT Trends",
    subtitleHi: "मल्टीमीडिया, क्लाउड, एआई व आधुनिक आईटी प्रवृत्तियां",
    subtitleEn: "Multimedia, Cloud, AI & Modern IT Trends"
  },
  "dca-p5": {
    titleHi: "वेब टेक्नोलॉजीज एवं ई-कॉमर्स",
    titleEn: "Web Technologies and E-Commerce",
    subtitleHi: "इंटरनेट, एचटीएमएल, सीएसएस व ई-कॉमर्स सिस्टम",
    subtitleEn: "Internet, HTML, CSS & E-Commerce Systems"
  },
  "dca-p6": {
    titleHi: "डिजिटल मीडिया पब्लिशिंग (PageMaker/Photoshop)",
    titleEn: "Digital Media Publishing",
    subtitleHi: "डीटीपी, पेजमेकर व फोटोशॉप ग्राफिक डिजाइन",
    subtitleEn: "DTP, PageMaker & Photoshop Graphic Design"
  }
};

export const uiTranslations = {
  hi: {
    questionsOnly: "केवल प्रश्न",
    qa: "प्रश्न + उत्तर",
    examPattern: "परीक्षा पैटर्न",
    langName: "हिंदी",
    langAlt: "English",
    switchTo: "English में देखें",
    viewAnswer: "उत्तर देखें",
    hideAnswer: "उत्तर समेटें",
    search: "खोजें",
    searchPlaceholder: "सभी 200 प्रश्नों में खोजें (उदा: SSD, Tally, Normalization, CSS)...",
    noResults: "के लिए कोई प्रश्न नहीं मिला",
    searchResults: "परिणाम",
    questionsFound: "प्रश्न मिले",
    pressEscOrClick: "क्लिक करके बंद करें",
    completed: "तैयार",
    markComplete: "तैयार चिह्नित करें",
    markIncomplete: "अपूर्ण चिह्नित करें",
    bookmark: "बुकमार्क करें",
    removeBookmark: "बुकमार्क हटाएं",
    listen: "उत्तर सुनें",
    stopAudio: "ऑडियो रोकें",
    copy: "उत्तर कॉपी करें",
    copied: "कॉपी हो गया!",
    all25Questions: "सभी 25 प्रश्न",
    questionPaperMode: "केवल प्रश्न बैंक (Question Paper Mode)",
    selfEvaluationNotice: "स्वयं मूल्यांकन और मॉक टेस्ट के लिए प्रश्न सूची",
    syllabusCoveredNotice: "5 प्रश्न (यूनिट का पूरा सिलेबस)",
    prevUnit: "पिछली यूनिट",
    nextUnit: "अगली यूनिट",
    unitProgress: "यूनिट",
    subjectList: "विषय सूची",
    papers: "पेपर्स",
    sem1Title: "Semester 1 के विषय",
    sem2Title: "Semester 2 के विषय",
    quickSummary: "संक्षिप्त सार",
    examTip: "परीक्षा टिप",
    keyTerms: "महत्वपूर्ण शब्दावली",
    codeOrExample: "उदाहरण / सिंटैक्स",
    filterAll: "सभी 5 प्रश्न",
    filterUnread: "शेष प्रश्न",
    filterCompleted: "तैयार प्रश्न",
    filterBookmarked: "बुकमार्क किए गए",
    expandAll: "सभी उत्तर खोलें",
    collapseAll: "उत्तर समेटें"
  },
  en: {
    questionsOnly: "Questions Only",
    qa: "Questions + Answers",
    examPattern: "Exam Scheme",
    langName: "English",
    langAlt: "हिंदी",
    switchTo: "हिंदी में देखें",
    viewAnswer: "View Answer",
    hideAnswer: "Hide Answer",
    search: "Search",
    searchPlaceholder: "Search across all 200 questions (e.g., SSD, Tally, CSS)...",
    noResults: "No questions found for",
    searchResults: "Results",
    questionsFound: "questions found",
    pressEscOrClick: "Click to close",
    completed: "Completed",
    markComplete: "Mark as Done",
    markIncomplete: "Mark as Undone",
    bookmark: "Bookmark",
    removeBookmark: "Remove Bookmark",
    listen: "Listen Audio",
    stopAudio: "Stop Audio",
    copy: "Copy Answer",
    copied: "Copied!",
    all25Questions: "All 25 Questions",
    questionPaperMode: "Question Paper Mode",
    selfEvaluationNotice: "Question list for self-assessment and exam mock tests",
    syllabusCoveredNotice: "5 Questions (Full Unit Syllabus)",
    prevUnit: "Previous Unit",
    nextUnit: "Next Unit",
    unitProgress: "Unit",
    subjectList: "Subjects List",
    papers: "Papers",
    sem1Title: "Semester 1 Subjects",
    sem2Title: "Semester 2 Subjects",
    quickSummary: "Quick Summary",
    examTip: "Exam Tip",
    keyTerms: "Key Terms",
    codeOrExample: "Example / Syntax",
    filterAll: "All 5 Questions",
    filterUnread: "Unread Only",
    filterCompleted: "Completed",
    filterBookmarked: "Bookmarked",
    expandAll: "Expand All",
    collapseAll: "Collapse All"
  }
};
