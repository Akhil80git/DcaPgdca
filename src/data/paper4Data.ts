import { Unit } from '../types';

export const paper4Units: Unit[] = [
  {
    unitNumber: 1,
    unitRoman: 'Unit I',
    title: 'डेटाबेस अवधारणाएं, रिलेशनल डेटाबेस, नॉर्मलाइजेशन व एक्सेस ऑब्जेक्ट्स',
    questions: [
      {
        id: 'p4-u1-q1',
        number: 1,
        question: 'Database: Definition, Why Relational Database, Overview of Database Design समझाइए।',
        topics: ['Database Definition', 'RDBMS Concepts', 'Need of RDBMS', 'Database Design Lifecycle'],
        answer: {
          summary: 'डेटाबेस परस्पर संबंधित डेटा का एक व्यवस्थित और संरचित संग्रह है। रिलेशनल डेटाबेस (RDBMS) डेटा को टेबल्स (संबंधों) में व्यवस्थित करता है जिससे रिडंडेंसी समाप्त होती है और डेटा अखंडता सुनिश्चित होती है।',
          sections: [
            {
              heading: '1. डेटाबेस की परिभाषा और पारंपरिक फाइल सिस्टम की कमियाँ',
              content: 'पारंपरिक फाइल सिस्टम (जैसे साधारण एक्सेल या टेक्स्ट फाइल) में डेटा का दोहराव (Data Redundancy), असंगतता (Inconsistency), सुरक्षा की कमी और समवर्ती पहुंच (Concurrent Access) की समस्याएं होती हैं। DBMS/RDBMS इन सभी समस्याओं का समाधान करता है।'
            },
            {
              heading: '2. रिलेशनल डेटाबेस की आवश्यकता (Why Relational Database?)',
              content: 'डॉ. ई.एफ. कॉड (Dr. E.F. Codd) द्वारा प्रस्तावित रिलेशनल मॉडल के लाभ:',
              points: [
                'डेटा टेबल्स (Entities) के रूप में पंक्तियों (Tuples / Records) और स्तंभों (Attributes / Fields) में संग्रहित होता है।',
                'प्राइमरी और फॉरेन की के माध्यम से टेबल्स आपस में तार्किक रूप से जुड़ती हैं।',
                'डेटा रिडंडेंसी (अनावश्यक नकल) समाप्त होती है जिससे स्टोरेज बचता है।',
                'डेटा अखंडता (Data Integrity): रेफरेंशियल इंटीग्रिटी द्वारा अमान्य डेटा की प्रविष्टि रोकी जाती है।'
              ]
            },
            {
              heading: '3. डेटाबेस डिज़ाइन का अवलोकन (Database Design Steps)',
              content: 'एक मजबूत डेटाबेस तैयार करने के चरण:',
              points: [
                '1. आवश्यकता विश्लेषण (Requirement Analysis): आवश्यक डेटा और रिपोर्ट्स का निर्धारण।',
                '2. टेबल्स का निर्धारण (Determining Tables): संस्थाओं (जैसे Students, Courses, Fees) की पहचान।',
                '3. फील्ड्स का निर्धारण (Determining Fields): प्रत्येक टेबल के गुणों (Attributes) की सूची।',
                '4. प्राइमरी की का चयन (Primary Key Selection): प्रत्येक रिकॉर्ड को विशिष्ट रूप से पहचानने वाली फील्ड।',
                '5. संबंध स्थापित करना (Relationships) और नॉर्मलाइजेशन लागू करना।'
              ]
            }
          ],
          examTip: 'डॉ. ई.एफ. कॉड (E.F. Codd) और RDBMS के मुख्य लाभ (No Redundancy, Data Integrity) जरूर लिखें।',
          keyTerms: ['Database', 'RDBMS', 'Dr. E.F. Codd', 'Data Redundancy', 'Data Integrity', 'Tuples & Attributes']
        }
      },
      {
        id: 'p4-u1-q2',
        number: 2,
        question: 'Data Normalization: Determining Tables, Fields, Relationships समझाइए।',
        topics: ['Data Normalization', '1NF (Atomic Values)', '2NF (Partial Dependency)', '3NF (Transitive Dependency)'],
        answer: {
          summary: 'नॉर्मलाइजेशन एक व्यवस्थित प्रक्रिया है जिसके द्वारा एक बड़े, जटिल और रिडंडेंट डेटाबेस को छोटी, सुव्यवस्थित टेबल्स में विभाजित किया जाता है ताकि इंसर्शन, अपडेशन और डिलीशन विसंगतियां (Anomalies) समाप्त हो जाएं।',
          sections: [
            {
              heading: '1. नॉर्मलाइजेशन की आवश्यकता और विसंगतियां (Anomalies)',
              content: 'खराब डिजाइन वाले डेटाबेस में तीन प्रकार की विसंगतियां होती हैं: Insertion Anomaly (नया रिकॉर्ड जोड़ने में कठिनाई), Deletion Anomaly (एक रिकॉर्ड हटाने पर अन्य आवश्यक डेटा नष्ट होना), और Update Anomaly (एक जगह बदलाव करने पर दूसरी जगह पुराना डेटा रह जाना)।'
            },
            {
              heading: '2. नॉर्मलाइजेशन के प्रमुख चरण (Normal Forms)',
              content: '1NF से 3NF तक के नियम:',
              points: [
                'First Normal Form (1NF): प्रत्येक फील्ड में केवल एकल / परमाणु मान (Atomic Values) होने चाहिए। कोई बहु-मूल्य (Multi-valued) या रिपीटिंग ग्रुप नहीं होना चाहिए।',
                'Second Normal Form (2NF): टेबल 1NF में होनी चाहिए, और कोई भी गैर-कुंजी फील्ड कंपोजिट प्राइमरी की पर आंशिक रूप से निर्भर (No Partial Dependency) नहीं होनी चाहिए। प्रत्येक फील्ड पूरी प्राइमरी की पर निर्भर हो।',
                'Third Normal Form (3NF): टेबल 2NF में होनी चाहिए, और इसमें कोई सकर्मक निर्भरता (No Transitive Dependency - X -> Y -> Z) नहीं होनी चाहिए। यानी गैर-कुंजी फील्ड किसी अन्य गैर-कुंजी फील्ड पर निर्भर न हो।'
              ]
            }
          ],
          examTip: 'तीनों नॉर्मल फॉर्म्स (1NF: Atomic, 2NF: No Partial Dependency, 3NF: No Transitive Dependency) को चार्ट बनाकर लिखें।',
          keyTerms: ['Normalization', 'Anomalies (Insert/Update/Delete)', 'Atomic Values 1NF', 'Partial Dependency 2NF', 'Transitive Dependency 3NF']
        }
      },
      {
        id: 'p4-u1-q3',
        number: 3,
        question: 'Integrity Rules: Primary/Foreign Key, One-to-Many, Many-to-Many, One-to-One समझाइए।',
        topics: ['Primary Key vs Foreign Key', 'Referential Integrity', 'One-to-One (1:1)', 'One-to-Many (1:N)', 'Many-to-Many (N:M)'],
        answer: {
          summary: 'इंटीग्रिटी रूल्स डेटा की शुद्धता और वैधता की गारंटी देते हैं। प्राइमरी और फॉरेन की के आधार पर टेबल्स के बीच तीन प्रकार के संबंध (1:1, 1:N, N:M) स्थापित होते हैं।',
          sections: [
            {
              heading: '1. कुंजियाँ (Keys in Database)',
              content: 'टेबल्स को जोड़ने वाली मुख्य कुंजियाँ:',
              points: [
                'प्राइमरी की (Primary Key): टेबल की वह फील्ड जो प्रत्येक रिकॉर्ड को विशिष्ट रूप से पहचानती है। यह कभी Null (खाली) नहीं हो सकती और इसमें डुप्लिकेट मान नहीं हो सकते (जैसे Roll_No, Aadhar_No)।',
                'फॉरेन की (Foreign Key): एक टेबल की वह फील्ड जो किसी दूसरी संबंधित टेबल की प्राइमरी की को संदर्भित (Reference) करती है।'
              ]
            },
            {
              heading: '2. संबंधों के प्रकार (Types of Relationships)',
              content: 'व्यावहारिक उदाहरण सहित संबंध:',
              points: [
                'One-to-One (1:1): टेबल A का एक रिकॉर्ड टेबल B के केवल एक रिकॉर्ड से संबंधित होता है (जैसे: एक नागरिक - एक पासपोर्ट)।',
                'One-to-Many (1:N - सर्वाधिक सामान्य): टेबल A का एक रिकॉर्ड टेबल B के कई रिकॉर्ड्स से संबंधित होता है (जैसे: एक ग्राहक - कई ऑर्डर्स; एक कॉलेज - कई छात्र)।',
                'Many-to-Many (N:M): टेबल A का एक रिकॉर्ड टेबल B के कई रिकॉर्ड्स से और टेबल B का एक रिकॉर्ड टेबल A के कई रिकॉर्ड्स से जुड़ सकता है (जैसे: कई छात्र - कई कोर्सेज)। इसे RDBMS में एक मध्यवर्ती जंक्शन टेबल (Junction Table) बनाकर दो 1:N संबंधों में तोड़ा जाता है।'
              ]
            }
          ],
          examTip: 'Many-to-Many संबंध को सीधे लागू नहीं किया जा सकता, इसके लिए Junction Table (Bridge Table) चाहिए, यह विशेष बिंदु लिखें।',
          keyTerms: ['Primary Key', 'Foreign Key', 'Entity Integrity', 'Referential Integrity', 'One-to-Many', 'Junction Table']
        }
      },
      {
        id: 'p4-u1-q4',
        number: 4,
        question: 'MS Access Objects: Tables, Queries, Forms, Reports का परिचय दें।',
        topics: ['Access Database Objects', 'Tables (Storage)', 'Queries (Processing)', 'Forms (Input/UI)', 'Reports (Output/Print)'],
        answer: {
          summary: 'एमएस एक्सेस एक रिलेशनल डेटाबेस मैनेजमेंट सिस्टम (RDBMS) है जो चार मुख्य ऑब्जेक्ट्स (टेबल्स, क्वेरीज, फॉर्म्स और रिपोर्ट्स) पर आधारित है।',
          sections: [
            {
              heading: '1. एक्सेस के चार मुख्य ऑब्जेक्ट्स (The 4 Access Objects)',
              content: 'प्रत्येक ऑब्जेक्ट की विशिष्ट भूमिका:',
              table: {
                headers: ['ऑब्जेक्ट', 'उद्देश्य व भूमिका', 'दृश्य (Views) / विशेषता'],
                rows: [
                  ['तालिका (Table)', 'कच्चा डेटा संग्रहित करना (डेटाबेस की नींव)', 'Datasheet View (डेटा एंट्री), Design View (फील्ड प्रकार व गुण)'],
                  ['क्वेरी (Query)', 'डेटा खोजना, फिल्टर करना, गणना करना और विश्लेषण करना', 'Select Query, Action Query, SQL View, Query Design'],
                  ['फॉर्म (Form)', 'उपयोगकर्ता-अनुकूल डेटा प्रविष्टि और संपादन इंटरफेस', 'Form View, Layout View, Design View; बटन्स और कॉम्बो बॉक्स'],
                  ['रिपोर्ट (Report)', 'डेटा को मुद्रण और सारांश के लिए पेशेवर रूप में प्रस्तुत करना', 'Report View, Print Preview, Design View; ग्रुपिंग और कुल योग']
                ]
              }
            },
            {
              heading: '2. ऑब्जेक्ट्स का आपसी समन्वय',
              content: 'टेबल्स डेटा स्टोर करती हैं -> क्वेरी टेबल्स से आवश्यक डेटा निकालती हैं -> फॉर्म्स टेबल्स में डेटा फीड करने का काम सरल बनाते हैं -> रिपोर्ट्स क्वेरीज या टेबल्स के आधार पर सुंदर प्रिंटआउट्स बनाती हैं।'
            }
          ],
          examTip: 'चारों ऑब्जेक्ट्स (Tables, Queries, Forms, Reports) का संबंध आरेख (Data Flow) बनाकर समझाएं।',
          keyTerms: ['Access Objects', 'Tables Storage', 'Queries Logic', 'Forms Interface', 'Reports Printable']
        }
      },
      {
        id: 'p4-u1-q5',
        number: 5,
        question: 'MS Access Navigation और Workspace को समझाइए।',
        topics: ['Navigation Pane', 'Access Workspace', 'Object Tabs', 'Design View vs Datasheet View', 'Status Bar'],
        answer: {
          summary: 'एमएस एक्सेस का वर्कस्पेस नेविगेशन पेन, रिबन बार, ऑब्जेक्ट टैब्स और व्यू स्विचिंग बटन्स से सुसज्जित है जो डेटाबेस के त्वरित प्रबंधन की सुविधा प्रदान करता है।',
          sections: [
            {
              heading: '1. नेविगेशन पेन (Navigation Pane)',
              content: 'स्क्रीन के बाईं ओर स्थित केंद्रीय पेन जो डेटाबेस के सभी ऑब्जेक्ट्स (Tables, Queries, Forms, Reports, Macros, Modules) को एक पदानुक्रम में सूचीबद्ध करता है। उपयोगकर्ता इन्हें प्रकार (Object Type) या तारीख के अनुसार समूहीकृत कर सकते हैं।'
            },
            {
              heading: '2. एक्सेस वर्कस्पेस के मुख्य तत्व',
              content: 'कार्यक्षेत्र के प्रमुख भाग:',
              points: [
                'ऑब्जेक्ट टैब्स (Tabbed Documents): खुले हुए टेबल्स, फॉर्म्स और क्वेरीज शीर्ष पर टैब्स के रूप में दिखाई देते हैं जिससे उनके बीच स्विच करना आसान होता है।',
                'रिबन बार (Ribbon): File, Home, Create, External Data, Database Tools टैब्स।',
                'क्विक व्यू स्विचर (View Switcher): निचले दाएं कोने में स्थित बटन्स जो एक क्लिक में Datasheet View और Design View के बीच स्विच करने की अनुमति देते हैं।',
                'रिकॉर्ड नेविगेशन बार (Record Navigation Bar): तालिका या फॉर्म के नीचे स्थित बार जो First Record, Previous, Current Record Number, Next, Last Record और New Record बटन प्रदर्शित करता है।'
              ]
            }
          ],
          examTip: 'Record Navigation Bar के बटन्स (|<< < [1 of 50] > >>* >*) का रफ चित्र बनाएं।',
          keyTerms: ['Navigation Pane', 'Tabbed Documents', 'Datasheet View', 'Design View', 'Record Navigation Bar']
        }
      }
    ]
  },
  {
    unitNumber: 2,
    unitRoman: 'Unit II',
    title: 'टेबल निर्माण, डेटा प्रकार, फील्ड प्रॉपर्टीज व डेटा एडिटिंग',
    questions: [
      {
        id: 'p4-u2-q1',
        number: 1,
        question: 'MS Access में Table बनाना: Data Types, Field Properties, Names, Types, Default Values, Format, Caption, Validation Rules समझाइए।',
        topics: ['Table Design View', 'Access Data Types', 'Field Properties', 'Default Value & Format', 'Validation Rule & Text'],
        answer: {
          summary: 'टेबल डेटाबेस की आधारशिला है। डिज़ाइन व्यू में फील्ड नाम, डेटा प्रकार और फील्ड प्रॉपर्टीज (डिफ़ॉल्ट वैल्यू, फॉर्मेट, वैलिडेशन रूल) निर्धारित करके त्रुटिहीन डेटा प्रविष्टि सुनिश्चित की जाती है।',
          sections: [
            {
              heading: '1. एक्सेस के प्रमुख डेटा प्रकार (Access Data Types)',
              content: 'फील्ड्स के लिए उपलब्ध डेटा प्रकार:',
              points: [
                'Short Text: नाम, पते आदि के लिए 255 वर्णों तक का अल्फ़ान्यूमेरिक डेटा।',
                'Long Text (Memo): 64,000+ वर्णों तक का लंबा विवरण या नोट्स।',
                'Number: गणना योग्य संख्यात्मक मान (Byte, Integer, Long Integer, Single, Double)।',
                'Date/Time: दिनांक और समय की प्रविष्टि।',
                'Currency: वित्तीय मान (मुद्रा प्रतीक और दो दशमलव स्थान)।',
                'AutoNumber: प्रत्येक नए रिकॉर्ड पर एक्सेस द्वारा स्वतः उत्पन्न क्रमिक अद्वितीय संख्या (प्राइमरी की के लिए आदर्श)।',
                'Yes/No (Boolean): बूलियन मान (True/False, On/Off)।',
                'OLE Object / Attachment: फोटो, दस्तावेज या पीडीएफ अटैच करना।',
                'Lookup Wizard: ड्रॉप-डाउन सूची से मान चुनने के लिए।'
              ]
            },
            {
              heading: '2. प्रमुख फील्ड प्रॉपर्टीज (Field Properties)',
              content: 'फील्ड के व्यवहार को नियंत्रित करने वाले गुण:',
              points: [
                'Field Size: फील्ड में अधिकतम वर्ण या नंबर का प्रकार सीमित करना (जैसे Short Text के लिए 20)।',
                'Format: डेटा के प्रदर्शन का तरीका (जैसे Date के लिए "Medium Date": 15-Aug-2026)।',
                'Default Value: यदि यूजर कुछ न भरे तो स्वतः आने वाला मान (जैसे City के लिए "Bhopal")।',
                'Caption: डेटाशीट व्यू में फील्ड नाम के स्थान पर दिखने वाला उपयोगकर्ता-अनुकूल लेबल।',
                'Required: "Yes" करने पर इस फील्ड को खाली (Null) नहीं छोड़ा जा सकता।',
                'Validation Rule: स्वीकार्य डेटा की शर्त (जैसे Age के लिए: `>= 18 AND <= 60`)।',
                'Validation Text: यदि यूजर अमान्य डेटा भरता है तो स्क्रीन पर आने वाला चेतावनी संदेश (जैसे: "कृपया 18 से 60 वर्ष के बीच आयु भरें!")।'
              ]
            }
          ],
          examTip: 'Validation Rule (शर्त) और Validation Text (एरर मैसेज) का उदाहरण सहित अंतर जरूर लिखें।',
          keyTerms: ['Short Text', 'AutoNumber', 'Field Size', 'Default Value', 'Validation Rule', 'Validation Text', 'Caption']
        }
      },
      {
        id: 'p4-u2-q2',
        number: 2,
        question: 'Data Entry: Add/Delete Record, Edit Text समझाइए।',
        topics: ['Datasheet Data Entry', 'Add New Record', 'Delete Record Confirmation', 'Edit and Cancel (Esc)'],
        answer: {
          summary: 'डेटाशीट व्यू में रिकॉर्ड्स जोड़ना, संपादित करना और हटाना सरल और त्वरित होता है। प्रत्येक पंक्ति एक रिकॉर्ड और प्रत्येक स्तंभ एक फील्ड का प्रतिनिधित्व करता है।',
          sections: [
            {
              heading: '1. नया रिकॉर्ड जोड़ना (Add Record)',
              content: 'डेटाशीट के सबसे नीचे स्थित अंतिम खाली पंक्ति (जिस पर तारे `*` का चिह्न होता है) पर क्लिक करके या रिकॉर्ड नेविगेशन बार के "New (Blank) Record" बटन पर क्लिक करके नया डेटा टाइप किया जाता है। Tab कुंजी दबाकर अगली फील्ड में जाया जाता है।'
            },
            {
              heading: '2. टेक्स्ट संपादित करना (Edit Text)',
              content: 'वांछित सेल पर क्लिक करके सीधे टाइप करें या F2 कुंजी दबाकर संपादन मोड चालू करें। यदि गलत टाइप हो गया हो और सेव नहीं करना चाहते, तो Escape (Esc) कुंजी दबाकर संपादन रद्द किया जा सकता है।'
            },
            {
              heading: '3. रिकॉर्ड हटाना (Delete Record)',
              content: 'पंक्ति के सबसे बाएं कोने में स्थित रिकॉर्ड सेलेक्टर (Record Selector) बॉक्स पर क्लिक करें जिससे पूरी पंक्ति हाइलाइट हो जाएगी। इसके बाद Delete कुंजी दबाएं। एक्सेस एक चेतावनी बॉक्स दिखाएगा: "You are about to delete 1 record(s)... You cannot undo this delete operation!"। "Yes" चुनने पर रिकॉर्ड स्थायी रूप से हट जाता है।'
            }
          ],
          examTip: 'डिलीट किए गए रिकॉर्ड को Undo नहीं किया जा सकता, यह चेतावनी एक्सेस में अनिवार्य होती है, इसे लिखें।',
          keyTerms: ['Datasheet View', 'Record Selector', 'New Record *', 'F2 Edit Mode', 'Esc Cancel', 'Permanent Delete Warning']
        }
      },
      {
        id: 'p4-u2-q3',
        number: 3,
        question: 'Sort, Find/Replace, Filter/Select समझाइए।',
        topics: ['Sort Ascending/Descending', 'Find and Replace Dialog', 'Filter by Selection', 'Filter by Form'],
        answer: {
          summary: 'हजारों रिकॉर्ड्स में से विशिष्ट जानकारी को तुरंत खोजने, व्यवस्थित करने और केवल चयनित मानदंडों के रिकॉर्ड्स देखने के लिए सॉर्ट, फाइंड और फिल्टर का उपयोग होता है।',
          sections: [
            {
              heading: '1. रिकॉर्ड्स को सॉर्ट करना (Sorting)',
              content: 'किसी भी कॉलम के हेडर पर क्लिक करके Home Tab > Sort & Filter ग्रुप से:',
              points: [
                'Ascending (A to Z या छोटे से बड़ा): आरोही क्रम।',
                'Descending (Z to A या बड़े से छोटा): अवरोही क्रम।',
                'Remove Sort: मूल क्रम पर वापस लौटना।'
              ]
            },
            {
              heading: '2. फाइंड और रिप्लेस (Find & Replace - Ctrl + F / Ctrl + H)',
              content: 'विशिष्ट शब्द या आईडी खोजना और बदलना:',
              points: [
                'Look In: Current Field (केवल चुनिंदा कॉलम में) या Current Document (पूरी टेबल में)।',
                'Match: Whole Field (पूरा सेल मिले), Any Part of Field (सेल के किसी भी हिस्से में शब्द हो), या Start of Field।',
                'Replace With: पुराने मान को नए मान से एक-एक करके या एक साथ (Replace All) बदलना।'
              ]
            },
            {
              heading: '3. फिल्टरिंग (Filtering: Selection vs Toggle)',
              content: 'विशिष्ट शर्तों के रिकॉर्ड्स देखना:',
              points: [
                'Filter by Selection: किसी विशिष्ट मान (जैसे "Indore") को सेलेक्ट करें और Selection > "Equals Indore" पर क्लिक करें। केवल इंदौर के रिकॉर्ड्स दिखेंगे।',
                'Toggle Filter: फिल्टर लागू करने और हटाने के बीच स्विच करना।'
              ]
            }
          ],
          examTip: 'Filter by Selection और Toggle Filter के उपयोग को स्टेप-बाय-स्टेप लिखें।',
          keyTerms: ['Sort Ascending/Descending', 'Find Ctrl+F', 'Replace Ctrl+H', 'Filter by Selection', 'Toggle Filter']
        }
      },
      {
        id: 'p4-u2-q4',
        number: 4,
        question: 'Rearrange Columns, Freeze Columns समझाइए।',
        topics: ['Column Reordering', 'Freeze Fields', 'Unfreeze All Fields', 'Hide/Unhide Columns'],
        answer: {
          summary: 'डेटाशीट में स्तंभों के क्रम को ड्रैग करके बदला जा सकता है और फ्रीज कॉलम से महत्वपूर्ण पहचान फील्ड्स (जैसे आईडी और नाम) को हमेशा स्क्रीन पर स्थिर रखा जाता है।',
          sections: [
            {
              heading: '1. कॉलम का पुनर्व्यवस्थापन (Rearrange Columns)',
              content: 'कॉलम हेडर पर एक बार क्लिक करके पूरे कॉलम को सेलेक्ट करें। माउस के बाएँ बटन को दबाए रखते हुए कॉलम को दाईं या बाईं ओर ड्रैग करें। जहाँ ले जाना चाहते हैं वहाँ एक काली वर्टिकल लाइन दिखेगी; माउस बटन छोड़ते ही कॉलम नए स्थान पर आ जाएगा।'
            },
            {
              heading: '2. फ्रीज कॉलम्स (Freeze Columns)',
              content: 'जब टेबल में 20-30 कॉलम्स होते हैं और यूजर दाईं ओर स्क्रॉल करता है, तो छात्र का नाम और रोल नंबर छिप जाता है जिससे यह पता नहीं चलता कि डेटा किसका है।',
              points: [
                'प्रक्रिया: Roll_No और Name कॉलम को सेलेक्ट करें > Right Click करें > "Freeze Fields" चुनें।',
                'परिणाम: ये कॉलम्स डेटाशीट के सबसे बाईं ओर लॉक हो जाते हैं। अब आप क्षैतिज रूप से कितना भी स्क्रॉल करें, ये फील्ड्स हमेशा दिखाई देती रहेंगी।',
                'अनफ्रीज करना: किसी भी कॉलम पर राइट-क्लिक करके "Unfreeze All Fields" चुनें।'
              ]
            }
          ],
          examTip: 'Freeze Fields का व्यावहारिक महत्व (डेटा प्रविष्टि के दौरान गलत रिकॉर्ड में एंट्री रोकने हेतु) लिखें।',
          keyTerms: ['Drag and Drop Columns', 'Freeze Fields', 'Unfreeze All Fields', 'Horizontal Scroll Lock']
        }
      },
      {
        id: 'p4-u2-q5',
        number: 5,
        question: 'Edit Tables: Copy, Delete, Import, Modify Table Structure, Find, Replace समझाइए।',
        topics: ['Table Structure Modification', 'Importing External Data (Excel/CSV)', 'Copy Table (Structure only vs Structure & Data)', 'Table Deletion'],
        answer: {
          summary: 'टेबल्स की संरचना में संशोधन डिज़ाइन व्यू से किया जाता है। बाहरी डेटा आयात करने और टेबल की संरचना की प्रतिलिपि बनाने की व्यापक सुविधाएं उपलब्ध हैं।',
          sections: [
            {
              heading: '1. टेबल संरचना में संशोधन (Modify Table Structure)',
              content: 'टेबल पर राइट-क्लिक करके "Design View" खोलें। यहाँ नई फील्ड्स जोड़ी जा सकती हैं (Insert Rows), पुरानी फील्ड्स हटाई जा सकती हैं (Delete Rows), फील्ड का नाम, डेटा प्रकार या फील्ड साइज बदला जा सकता है।'
            },
            {
              heading: '2. टेबल कॉपी करना (Copy Table Dialog)',
              content: 'नेविगेशन पेन में टेबल पर Right Click > Copy करें और फिर Paste (Ctrl + V) करें। एक्सेस एक डायलॉग बॉक्स पूछता है:',
              points: [
                '1. Structure Only: केवल खाली टेबल का ढांचा (फील्ड्स और डेटा प्रकार) कॉपी करना।',
                '2. Structure and Data (डिफ़ॉल्ट): संरचना और अंदर का सारा डेटा दोनों कॉपी करना।',
                '3. Append Data to Existing Table: डेटा को किसी मौजूदा टेबल के अंत में जोड़ना।'
              ]
            },
            {
              heading: '3. डेटा इम्पोर्ट करना (External Data > Import)',
              content: 'एक्सेल स्प्रेडशीट (.xlsx), टेक्स्ट फाइल (.csv), या अन्य एक्सेस डेटाबेस से सीधे विज़ार्ड के माध्यम से डेटा को नई टेबल के रूप में आयात करना।'
            }
          ],
          examTip: 'पेस्ट टेबल में "Structure Only" और "Structure and Data" के तीनों विकल्पों का उल्लेख करें।',
          keyTerms: ['Design View Modification', 'Paste Table Dialog', 'Structure Only', 'External Data Import', 'CSV Import']
        }
      }
    ]
  },
  {
    unitNumber: 3,
    unitRoman: 'Unit III',
    title: 'रिलेशनशिप्स, रेफरेंशियल इंटीग्रिटी व क्वेरी प्रोसेसिंग',
    questions: [
      {
        id: 'p4-u3-q1',
        number: 1,
        question: 'Setting up Relationships: Define, Add, Referential Integrity, Change Join Type, Delete, Save समझाइए।',
        topics: ['Database Tools > Relationships', 'Enforce Referential Integrity', 'Cascade Update & Delete', 'Join Types (Inner vs Outer)'],
        answer: {
          summary: 'रिलेशनशिप्स कई टेबल्स के बीच तार्किक संबंध बनाती हैं। रेफरेंशियल इंटीग्रिटी अनाथ रिकॉर्ड्स (Orphan Records) बनने से रोकती है और जॉइन टाइप्स डेटा मिलान को नियंत्रित करते हैं।',
          sections: [
            {
              heading: '1. रिलेशनशिप बनाने की चरणबद्ध प्रक्रिया',
              content: 'Database Tools Tab > Relationships विंडो खोलें:',
              points: [
                'Add Tables: संबंधित टेबल्स (जैसे Students और Fees) को विंडो में जोड़ें।',
                'ड्रैग एंड ड्रॉप: पैरेंट टेबल (Students) की प्राइमरी की (StudentID) को पकड़कर चाइल्ड टेबल (Fees) की फॉरेन की (StudentID) के ऊपर छोड़ें। "Edit Relationships" डायलॉग खुलेगा।',
                'Enforce Referential Integrity पर टिक लगाएं और "Create" पर क्लिक करें।'
              ]
            },
            {
              heading: '2. रेफरेंशियल इंटीग्रिटी और कैस्केड विकल्प',
              content: 'डेटा सुरक्षा के अनिवार्य नियम:',
              points: [
                'Enforce Referential Integrity: चाइल्ड टेबल में ऐसा कोई स्टूडेंट आईडी नहीं डाला जा सकता जो मूल स्टूडेंट्स टेबल में मौजूद न हो।',
                'Cascade Update Related Fields: यदि पैरेंट टेबल में स्टूडेंट आईडी बदलती है, तो चाइल्ड टेबल में भी स्वतः अपडेट हो जाएगी।',
                'Cascade Delete Related Records: यदि पैरेंट टेबल से कोई छात्र हटाया जाता है, तो उसकी सभी संबंधित फीस रिकॉर्ड्स भी स्वतः डिलीट हो जाएंगी।'
              ]
            },
            {
              heading: '3. जॉइन प्रकार (Join Types)',
              content: 'Edit Relationships में "Join Type" बटन दबाने पर:',
              points: [
                'Type 1 (Inner Join): केवल वही रिकॉर्ड्स शामिल होते हैं जहाँ दोनों टेबल्स के मान बिल्कुल मेल खाते हैं।',
                'Type 2 (Left Outer Join): टेबल 1 के सभी रिकॉर्ड्स और केवल टेबल 2 के मेल खाने वाले रिकॉर्ड्स।',
                'Type 3 (Right Outer Join): टेबल 2 के सभी रिकॉर्ड्स और केवल टेबल 1 के मेल खाने वाले रिकॉर्ड्स।'
              ]
            }
          ],
          examTip: 'Cascade Update और Cascade Delete की परिभाषा और जॉइन के तीनों प्रकार (Inner, Left Outer, Right Outer) अवश्य लिखें।',
          keyTerms: ['Edit Relationships', 'Referential Integrity', 'Cascade Update', 'Cascade Delete', 'Inner Join', 'Outer Join']
        }
      },
      {
        id: 'p4-u3-q2',
        number: 2,
        question: 'Queries & Filter: Difference, Filter using Multiple Fields AND, OR, Advanced Filter समझाइए।',
        topics: ['Query vs Filter Differences', 'Criteria Row (AND vs OR)', 'Advanced Filter/Sort'],
        answer: {
          summary: 'फिल्टर एक त्वरित, अस्थायी टूल है जो केवल खुली हुई टेबल में काम करता है; जबकि क्वेरी एक सहेजा जाने योग्य डेटाबेस ऑब्जेक्ट है जो कई टेबल्स से डेटा निकालकर गणनाएं और विश्लेषण कर सकता है।',
          sections: [
            {
              heading: '1. क्वेरी और फिल्टर में अंतर (Query vs Filter)',
              content: 'मूलभूत तकनीकी अंतर:',
              table: {
                headers: ['लक्षण', 'फिल्टर (Filter)', 'क्वेरी (Query)'],
                rows: [
                  ['ऑब्जेक्ट प्रकृति', 'अस्थायी टूल (ऑब्जेक्ट नहीं है)', 'स्थायी डेटाबेस ऑब्जेक्ट (नेविगेशन पेन में सेव होता है)'],
                  ['टेबल स्रोत', 'केवल एक खुली टेबल पर कार्य करता है', 'एक साथ कई संबंधित टेबल्स से डेटा मिला सकता है'],
                  ['कैलकुलेटेड फील्ड्स', 'नई गणनाएं या फॉर्मूले नहीं बना सकता', 'नए फॉर्मूले (जैसे Fee*0.18) बना सकता है'],
                  ['पुनः प्रयोज्यता', 'फाइल बंद होते ही समाप्त', 'भविष्य में कभी भी बार-बार रन की जा सकती है'],
                  ['फॉर्म व रिपोर्ट का आधार', 'नहीं बन सकता', 'फॉर्म्स और रिपोर्ट्स का मुख्य डेटा स्रोत बनती है']
                ]
              }
            },
            {
              heading: '2. मल्टीपल फील्ड्स में AND और OR लॉजिक',
              content: 'क्वेरी डिज़ाइन ग्रिड में Criteria और Or पंक्तियों का उपयोग:',
              points: [
                'AND लॉजिक (दोनों शर्तें सत्य हों): दोनों शर्तों को Criteria की एक ही पंक्ति (Same Row) में लिखा जाता है (जैसे City = "Bhopal" और Marks >= 75)।',
                'OR लॉजिक (कोई भी एक शर्त सत्य हो): एक शर्त को Criteria पंक्ति में और दूसरी शर्त को ठीक नीचे वाली "Or" पंक्ति में लिखा जाता है (जैसे City = "Indore" OR City = "Gwalior")।'
              ]
            }
          ],
          examTip: 'Criteria पंक्ति में एक ही रो = AND लॉजिक, और अलग-अलग रो = OR लॉजिक, यह ग्रिड आरेख बनाकर समझाएं।',
          keyTerms: ['Query vs Filter Table', 'Criteria Row AND', 'Or Row Logic', 'Advanced Filter/Sort', 'Calculated Field']
        }
      },
      {
        id: 'p4-u3-q3',
        number: 3,
        question: 'Create Query with One Table; Find Record with Select Query समझाइए।',
        topics: ['Query Design Window', 'Field, Table, Sort, Show, Criteria', 'Run Query (! Red Exclamation)'],
        answer: {
          summary: 'सेलेक्ट क्वेरी सबसे सामान्य क्वेरी है जो विशिष्ट मानदंडों के आधार पर टेबल से रिकॉर्ड्स खोजकर डायनामिक डेटाशीट (Dynaset) के रूप में प्रदर्शित करती है।',
          sections: [
            {
              heading: '1. सेलेक्ट क्वेरी बनाने की चरणबद्ध विधि',
              content: 'Create Tab > Query Design पर क्लिक करें:',
              points: [
                'Show Table डायलॉग से अपनी टेबल (जैसे "Students") चुनें और "Add" करें।',
                'क्वेरी डिज़ाइन ग्रिड (QBE - Query By Example Grid) में आवश्यक फील्ड्स (RollNo, Name, Course, Fees) को डबल-क्लिक करके नीचे ग्रिड के कॉलमों में जोड़ें।',
                'सॉर्टिंग सेट करें (जैसे Name पर Ascending)।',
                'शर्त (Criteria) लिखें: उदाहरण के लिए Course फील्ड के नीचे Criteria में `"PGDCA"` टाइप करें।',
                'Show चेकबॉक्स: यदि किसी फील्ड को केवल शर्त जांचने के लिए इस्तेमाल करना है और परिणाम में नहीं दिखाना, तो टिक हटा दें।'
              ]
            },
            {
              heading: '2. क्वेरी को रन करना (Run Query)',
              content: 'Design Tab > "Run" (लाल विस्मयादिबोधक चिह्न `!`) पर क्लिक करें। एक्सेस तुरंत केवल PGDCA कोर्स वाले छात्रों की डेटाशीट दिखा देगा। इसे Ctrl + S दबाकर "qry_PGDCA_Students" नाम से सेव करें।'
            }
          ],
          examTip: 'QBE ग्रिड की पाँच पंक्तियाँ: Field, Table, Sort, Show, Criteria का आरेख बनाएं।',
          keyTerms: ['Query Design', 'QBE Grid', 'Criteria Box', 'Run Query !', 'Select Query Dynaset']
        }
      },
      {
        id: 'p4-u3-q4',
        number: 4,
        question: 'Find Duplicate Record with Query; Find Unmatched Record with Query समझाइए।',
        topics: ['Find Duplicates Query Wizard', 'Find Unmatched Query Wizard', 'Data Cleaning', 'Orphan Record Detection'],
        answer: {
          summary: 'एक्सेस में विशेष विज़ार्ड्स उपलब्ध हैं जो डेटाबेस में डुप्लिकेट प्रविष्टियों को खोजने और दो टेबल्स के बीच असंबद्ध (Unmatched) रिकॉर्ड्स का पता लगाने में मदद करते हैं।',
          sections: [
            {
              heading: '1. फाइंड डुप्लिकेट्स क्वेरी विज़ार्ड (Find Duplicates)',
              content: 'जब एक ही मोबाइल नंबर, ईमेल या नाम गलती से कई बार दर्ज हो जाता है:',
              points: [
                'विधि: Create Tab > Query Wizard > "Find Duplicates Query Wizard" चुनें।',
                'टेबल चुनें (जैसे Customers)।',
                'वह फील्ड चुनें जिसमें डुप्लिकेट मान हो सकते हैं (जैसे Phone_No या Email)।',
                'अतिरिक्त फील्ड्स चुनें जिन्हें परिणाम में देखना चाहते हैं (जैसे Name, Address)।',
                'Finish पर क्लिक करें। क्वेरी उन सभी रिकॉर्ड्स की सूची दिखाएगी जहाँ फोन नंबर दो या अधिक बार आया है।'
              ]
            },
            {
              heading: '2. फाइंड अनमैच्ड क्वेरी विज़ार्ड (Find Unmatched)',
              content: 'यह उन रिकॉर्ड्स को ढूंढती है जिनका संबंधित टेबल में कोई लिंक नहीं है:',
              points: [
                'उदाहरण: ऐसे ग्राहक (Customers) जिन्होंने अब तक एक भी ऑर्डर (Orders) नहीं दिया है, या ऐसे छात्र जिनकी कोई फीस रिकॉर्ड नहीं है।',
                'विधि: Query Wizard > "Find Unmatched Query Wizard" चुनें। पहली टेबल (Customers) और दूसरी संबंधित टेबल (Orders) चुनें। दोनों की कॉमन फील्ड (CustomerID) चुनें। Finish दबाएं। यह उन सभी ग्राहकों को दिखा देगा जिनका Orders टेबल में कोई मेल नहीं है।'
              ]
            }
          ],
          examTip: 'Find Unmatched Query का व्यावसायिक उपयोग (निष्क्रिय ग्राहकों की पहचान करना) परीक्षा में लिखें।',
          keyTerms: ['Query Wizard', 'Find Duplicates Wizard', 'Find Unmatched Wizard', 'Data Cleansing', 'Orphan Detection']
        }
      },
      {
        id: 'p4-u3-q5',
        number: 5,
        question: 'Run Query, Save and Change Query समझाइए।',
        topics: ['Run Query Action', 'Modify Query in Design View', 'Action Queries (Update, Delete, Append, Make Table)'],
        answer: {
          summary: 'क्वेरी को चलाने पर परिणामी डायनासेट प्राप्त होता है। डिज़ाइन व्यू में जाकर क्वेरी के मानदंडों और फील्ड्स में कभी भी बदलाव किया जा सकता है।',
          sections: [
            {
              heading: '1. क्वेरी को रन करना और सेव करना',
              content: 'क्वेरी डिज़ाइन तैयार होने पर Design Tab > Run (`!`) दबाया जाता है। परिणाम देखने के बाद Ctrl + S दबाकर मानक नामकरण (जैसे `qry_FeeDefaulters`) से सेव किया जाता है।'
            },
            {
              heading: '2. क्वेरी में संशोधन करना (Modify Query)',
              content: 'नेविगेशन पेन में क्वेरी पर Right Click > "Design View" चुनें।',
              points: [
                'नए कॉलम जोड़ना या हटाना।',
                'क्राइटेरिया बदलना: जैसे `> 5000` के स्थान पर `Between 5000 And 10000` करना।',
                'सॉर्टिंग ऑर्डर बदलना।'
              ]
            },
            {
              heading: '3. एक्शन क्वेरीज का संक्षिप्त परिचय (Action Queries)',
              content: 'सेलेक्ट क्वेरी के अलावा चार एक्शन क्वेरीज जो वास्तविक डेटा में बदलाव करती हैं:',
              points: [
                'Update Query: एक साथ कई रिकॉर्ड्स के मान बदलना (जैसे फीस में 10% की वृद्धि)।',
                'Delete Query: शर्तों के अनुसार एक साथ कई रिकॉर्ड्स मिटाना।',
                'Append Query: एक टेबल के रिकॉर्ड्स दूसरी टेबल में जोड़ना।',
                'Make-Table Query: क्वेरी के परिणामों से एक नई स्वतंत्र टेबल बनाना।'
              ]
            }
          ],
          examTip: 'चारों एक्शन क्वेरीज (Update, Delete, Append, Make-Table) के नाम जरूर लिखें।',
          keyTerms: ['Run Query !', 'Modify Design View', 'Update Query', 'Delete Query', 'Append Query', 'Make-Table Query']
        }
      }
    ]
  },
  {
    unitNumber: 4,
    unitRoman: 'Unit IV',
    title: 'फॉर्म्स: प्रकार, डिज़ाइन, कंट्रोल्स, विज़ार्ड व टेम्प्लेट्स',
    questions: [
      {
        id: 'p4-u4-q1',
        number: 1,
        question: 'Introduction to Forms, Types: Columnar, Tabular, Datasheet, Main/Subforms समझाइए।',
        topics: ['Forms Definition', 'Columnar Form', 'Tabular Form', 'Datasheet Form', 'Main Form and Subform'],
        answer: {
          summary: 'फॉर्म एक ग्राफिकल यूजर इंटरफेस (GUI) है जो उपयोगकर्ताओं को डेटाबेस में डेटा प्रविष्ट, संपादित और प्रदर्शित करने की एक आकर्षक और सहज खिड़की प्रदान करता है।',
          sections: [
            {
              heading: '1. फॉर्म की आवश्यकता',
              content: 'डेटाशीट में सीधे डेटा भरने से ऑपरेटर द्वारा गलत कॉलम में टाइप करने या डेटा लीक होने का खतरा रहता है। फॉर्म एक समय में एक रिकॉर्ड को सुंदर लेआउट, बटन्स और लेबल के साथ दिखाता है जिससे डेटा एंट्री अत्यंत आसान और सुरक्षित हो जाती है।'
            },
            {
              heading: '2. फॉर्म्स के मुख्य प्रकार (Types of Forms)',
              content: 'लेआउट के आधार पर चार प्रमुख प्रकार:',
              points: [
                'कॉलमर फॉर्म (Columnar Form): सबसे लोकप्रिय प्रारूप। इसमें एक समय में केवल एक ही रिकॉर्ड स्क्रीन पर दिखता है। फील्ड्स लंबवत कॉलम में व्यवस्थित होती हैं।',
                'टैबुलर फॉर्म (Tabular Form): एक साथ कई रिकॉर्ड्स तालिका के रूप में दिखते हैं, लेकिन प्रत्येक पंक्ति कस्टम स्टाइल और बटनों से सजी होती है।',
                'डेटाशीट फॉर्म (Datasheet Form): बिल्कुल एक्सेल या मूल टेबल की तरह ग्रिड लेआउट में दिखता है।',
                'मेन/सबफॉर्म (Main / Subform): एक-से-अनेक (1:N) संबंधों को दर्शाने के लिए सर्वोत्तम। मुख्य फॉर्म में पैरेंट रिकॉर्ड (जैसे ग्राहक का विवरण) और अंदर एम्बेडेड सबफॉर्म में उसके सभी संबंधित रिकॉर्ड्स (जैसे उसके सभी ऑर्डर्स) एक साथ प्रदर्शित होते हैं।'
              ]
            }
          ],
          examTip: 'Main Form और Subform का उदाहरण (Order Header और Order Items) परीक्षा में अवश्य लिखें।',
          keyTerms: ['User-friendly GUI', 'Columnar Form', 'Tabular Form', 'Datasheet Form', 'Main and Subform 1:N']
        }
      },
      {
        id: 'p4-u4-q2',
        number: 2,
        question: 'Add Headers and Footers, Add Fields to Form, Add Text to Form समझाइए।',
        topics: ['Form Header/Footer', 'Field List Panel (Add Existing Fields)', 'Detail Section', 'Form Text / Titles'],
        answer: {
          summary: 'फॉर्म डिज़ाइन व्यू में तीन मुख्य खंड (Form Header, Detail, Form Footer) होते हैं। फील्ड लिस्ट पैनल से टेबल की फील्ड्स को ड्रैग करके फॉर्म पर जोड़ा जाता है।',
          sections: [
            {
              heading: '1. फॉर्म के तीन मुख्य खंड (Form Sections)',
              content: 'फॉर्म विंडो का विभाजन:',
              points: [
                'फॉर्म हेडर (Form Header): स्क्रीन के शीर्ष पर स्थित भाग जहाँ फॉर्म का शीर्षक (Title), कंपनी का लोगो और वर्तमान तारीख प्रदर्शित होती है।',
                'डिटेल सेक्शन (Detail Section): फॉर्म का मुख्य शरीर जहाँ वास्तविक रिकॉर्ड्स की इनपुट फील्ड्स (टेक्स्ट बॉक्स, कॉम्बो बॉक्स) स्थित होती हैं।',
                'फॉर्म फुटर (Form Footer): नीचे स्थित भाग जहाँ कमांड बटन्स (Save, Exit, Next), गणना किए गए कुल योग या कॉपीराइट संदेश होते हैं।'
              ]
            },
            {
              heading: '2. फील्ड्स जोड़ना (Add Existing Fields)',
              content: 'Design Tab > "Add Existing Fields" पर क्लिक करें। दाईं ओर "Field List" टास्क पेन खुलेगा। वहाँ से आवश्यक फील्ड्स (जैसे RollNo, StudentName) को माउस से पकड़कर Detail सेक्शन में ड्रैग करें। एक्सेस स्वतः एक टेक्स्ट बॉक्स और उससे जुड़ा एक लेबल बना देता है।'
            },
            {
              heading: '3. टेक्स्ट और शीर्षक जोड़ना',
              content: 'Controls गैलरी से "Label" टूल (Aa) चुनें, हेडर पर क्लिक करें और मनचाहा टेक्स्ट (जैसे "STUDENT ADMISSION FORM") टाइप करें और फॉन्ट साइज 18pt Bold सेट करें।'
            }
          ],
          examTip: 'फॉर्म के तीनों सेक्शंस (Form Header, Detail, Form Footer) का आरेख बनाएं।',
          keyTerms: ['Form Header', 'Detail Section', 'Form Footer', 'Add Existing Fields', 'Field List Tool']
        }
      },
      {
        id: 'p4-u4-q3',
        number: 3,
        question: 'Use Label, Option Button, Check Box, Combo Box, List Box समझाइए।',
        topics: ['Label Control (Aa)', 'Option Group / Radio Buttons', 'Check Box Control', 'Combo Box (Dropdown)', 'List Box'],
        answer: {
          summary: 'फॉर्म कंट्रोल्स वे विजुअल घटक हैं जिनका उपयोग डेटा प्रदर्शित करने, यूजर से इनपुट लेने और क्रियाएं ट्रिगर करने के लिए किया जाता है।',
          sections: [
            {
              heading: '1. प्रमुख फॉर्म कंट्रोल्स का विस्तृत विवरण',
              content: 'टूलबॉक्स के आवश्यक कंट्रोल्स:',
              points: [
                'लेबल (Label Control - Aa): स्थिर (Static) टेक्स्ट प्रदर्शित करने हेतु (जैसे "Enter Student Name:"). इसमें यूजर कुछ टाइप नहीं कर सकता।',
                'ऑप्शन बटन (Option / Radio Button): परस्पर अनन्य (Mutually Exclusive) विकल्पों में से केवल एक चुनने के लिए (जैसे Gender: Male / Female / Other).',
                'चेक बॉक्स (Check Box): हाँ/ना (Yes/No या True/False) स्थितियों के लिए (जैसे "Fees Paid?", "Hostel Facility Required?").',
                'कॉम्बो बॉक्स (Combo Box - Dropdown): टेक्स्ट बॉक्स और ड्रॉप-डाउन लिस्ट का संयोजन। यूजर सूची में से चुन भी सकता है या नया मान टाइप कर सकता है। स्क्रीन पर न्यूनतम जगह घेरता है (जैसे State / City चयन).',
                'लिस्ट बॉक्स (List Box): हमेशा खुली रहने वाली सूची जिसमें कई विकल्प एक साथ स्क्रीन पर दिखते हैं। यूजर एक या अधिक मान चुन सकता है।'
              ]
            },
            {
              heading: '2. कॉम्बो बॉक्स बनाम लिस्ट बॉक्स',
              content: 'कॉम्बो बॉक्स क्लिक करने पर खुलता है और स्क्रीन स्पेस बचाता है; जबकि लिस्ट बॉक्स हमेशा खुला रहता है और स्क्रॉल बार रखता है।'
            }
          ],
          examTip: 'कॉम्बो बॉक्स (ड्रॉपडाउन) और लिस्ट बॉक्स (स्थिर सूची) का तुलनात्मक अंतर परीक्षा में लिखें।',
          keyTerms: ['Label Static', 'Option Radio Button', 'Check Box Boolean', 'Combo Box Dropdown', 'List Box Scroll']
        }
      },
      {
        id: 'p4-u4-q4',
        number: 4,
        question: 'Forms Wizard की सहायता से Form बनाना सिखाइए।',
        topics: ['Form Wizard Steps', 'Tables/Queries Selection', 'Layout Selection (Columnar, Tabular, Datasheet, Justified)', 'Finish & View'],
        answer: {
          summary: 'फॉर्म विज़ार्ड नौसिखिए और अनुभवी दोनों उपयोगकर्ताओं के लिए एक चरणबद्ध गाइड है जो बिना मैनुअल डिज़ाइनिंग के कुछ ही क्लिक्स में पेशेवर फॉर्म तैयार कर देता है।',
          sections: [
            {
              heading: '1. फॉर्म विज़ार्ड के चरणबद्ध स्टेप्स',
              content: 'Create Tab > Forms ग्रुप में "Form Wizard" आइकन पर क्लिक करें:',
              points: [
                'स्टेप 1 (टेबल/क्वेरी व फील्ड चयन): "Tables/Queries" ड्रॉप-डाउन से स्रोत चुनें। उपलब्ध फील्ड्स में से आवश्यक फील्ड्स को `>` या `>>` बटन से "Selected Fields" बॉक्स में ले जाएं। Next दबाएं।',
                'स्टेप 2 (लेआउट चयन): चार लेआउट विकल्पों में से एक चुनें: Columnar, Tabular, Datasheet, या Justified। Next दबाएं।',
                'स्टेप 3 (शीर्षक व मोड): फॉर्म का शीर्षक दें (जैसे "frm_StudentEntry")। फिर चुनें: "Open the form to view or enter information" (सीधे उपयोग के लिए) अथवा "Modify the form\'s design" (डिज़ाइन व्यू में खोलने हेतु)।',
                'स्टेप 4: "Finish" पर क्लिक करें। आपका संपूर्ण फॉर्म तैयार होकर स्क्रीन पर खुल जाएगा।'
              ]
            }
          ],
          examTip: 'विज़ार्ड के चारों लेआउट विकल्पों (Columnar, Tabular, Datasheet, Justified) के नाम लिखें।',
          keyTerms: ['Form Wizard Icon', 'Selected Fields >>', 'Columnar Layout', 'Justified Layout', 'Finish Button']
        }
      },
      {
        id: 'p4-u4-q5',
        number: 5,
        question: 'Create Template समझाइए।',
        topics: ['Database Templates', 'Application Parts', 'Saving Form as Template', 'Pre-built Templates'],
        answer: {
          summary: 'टेम्प्लेट एक पूर्व-निर्मित डेटाबेस या फॉर्म संरचना है जिसमें टेबल्स, फॉर्म्स, रिपोर्ट्स और संबंध पहले से डिजाइन किए होते हैं। यह दोहराव वाले विकास कार्य को समाप्त करता है।',
          sections: [
            {
              heading: '1. एक्सेस इनबिल्ट टेम्प्लेट्स का उपयोग',
              content: 'एक्सेस शुरू करते समय File > New पर जाएं। वहाँ "Asset Tracking", "Contacts", "Students", "Event Management", "Task Management" जैसे दर्जनों रेडीमेड पेशेवर टेम्प्लेट्स उपलब्ध होते हैं। किसी पर भी क्लिक करके "Create" दबाने पर संपूर्ण कार्यशील डेटाबेस लोड हो जाता है।'
            },
            {
              heading: '2. एप्लिकेशन पार्ट्स (Application Parts)',
              content: 'मौजूदा डेटाबेस में Create Tab > "Application Parts" द्वारा पहले से बने फॉर्म्स और टेबल्स (जैसे "Quick Start: Contacts" या "Users") को सीधे अपने प्रोजेक्ट में एक क्लिक में जोड़ा जा सकता है।'
            },
            {
              heading: '3. कस्टम फॉर्म टेम्प्लेट बनाना',
              content: 'एक सुंदर फॉर्म डिजाइन करें जिसमें कंपनी का लोगो, मानक रंग और नेविगेशन बटन्स हों। इसे सहेजकर भविष्य के सभी नए फॉर्म्स के लिए आधार के रूप में उपयोग करें।'
            }
          ],
          examTip: 'एप्लिकेशन पार्ट्स (Application Parts) का उल्लेख करें जो आधुनिक एक्सेस में टेम्प्लेट का हिस्सा हैं।',
          keyTerms: ['Database Templates', 'Application Parts', 'Asset Tracking Template', 'Pre-built Schemas']
        }
      }
    ]
  },
  {
    unitNumber: 5,
    unitRoman: 'Unit V',
    title: 'रिपोर्ट्स: प्रकार, ग्रुपिंग, गणनाएं, प्रिंटिंग व रिपोर्ट विज़ार्ड',
    questions: [
      {
        id: 'p4-u5-q1',
        number: 1,
        question: 'Introduction to Reports, Types: Single Column, Tabular Report Groups/Total समझाइए।',
        topics: ['Report Definition & Need', 'Columnar Report', 'Tabular Report', 'Grouped Report with Subtotals & Grand Totals'],
        answer: {
          summary: 'रिपोर्ट एमएस एक्सेस का वह आउटपुट ऑब्जेक्ट है जो डेटाबेस के डेटा को मुद्रण (Printing), निर्णय लेने और औपचारिक प्रस्तुति के लिए सारांशित, समूहीकृत और फॉर्मेट करके प्रस्तुत करता है।',
          sections: [
            {
              heading: '1. रिपोर्ट की परिभाषा एवं फॉर्म से अंतर',
              content: 'फॉर्म मुख्य रूप से स्क्रीन पर डेटा प्रविष्टि और संपादन के लिए होता है, जबकि रिपोर्ट केवल पढ़ने और प्रिंट निकालने (Hard Copy Output) के लिए डिज़ाइन की जाती है। रिपोर्ट में सीधे डेटा टाइप नहीं किया जा सकता।'
            },
            {
              heading: '2. रिपोर्ट्स के मुख्य प्रकार (Types of Reports)',
              content: 'प्रारूप और संरचना के आधार पर वर्गीकरण:',
              points: [
                'सिंगल कॉलम रिपोर्ट (Single Column / Columnar Report): प्रत्येक रिकॉर्ड लंबवत कॉलम में छपता है (जैसे व्यक्तिगत छात्र का पूर्ण बायोडेटा कार्ड)।',
                'टैबुलर रिपोर्ट (Tabular Report): सबसे आम रिपोर्ट प्रारूप। पंक्तियों और स्तंभों में सभी रिकॉर्ड्स सारणीबद्ध रूप में छपते हैं (जैसे छात्रों की मार्कशीट सूची)।',
                'समूहीकृत रिपोर्ट (Grouped Report with Groups/Total): डेटा को किसी विशिष्ट श्रेणी (जैसे Course या Department) के आधार पर अलग-अलग वर्गों में समूहीकृत किया जाता है। प्रत्येक ग्रुप के अंत में सबटोटल (Subtotal) और रिपोर्ट के अंत में महायोग (Grand Total) स्वतः मुद्रित होता है।'
              ]
            }
          ],
          examTip: 'फॉर्म (डेटा एंट्री) और रिपोर्ट (केवल प्रिंटिंग व सारांश) का अंतर परीक्षा में अवश्य स्पष्ट करें।',
          keyTerms: ['Printable Output', 'Columnar Report', 'Tabular Report', 'Grouped Report', 'Subtotal & Grand Total']
        }
      },
      {
        id: 'p4-u5-q2',
        number: 2,
        question: 'Single Table Report, Multi-Table Report समझाइए।',
        topics: ['Single Table Report', 'Multi-Table Relational Report', 'Report Record Source (Query vs Tables)'],
        answer: {
          summary: 'एकल टेबल रिपोर्ट केवल एक तालिका से डेटा लेती है, जबकि बहु-तालिका रिपोर्ट दो या अधिक संबंधित टेबल्स या सेलेक्ट क्वेरी के आधार पर व्यापक डेटा प्रदर्शित करती है।',
          sections: [
            {
              heading: '1. सिंगल टेबल रिपोर्ट (Single Table Report)',
              content: 'जब सारा आवश्यक डेटा एक ही टेबल में मौजूद हो (जैसे Employee टेबल से फोन डायरेक्टरी बनाना)। विधि: नेविगेशन पेन में टेबल सेलेक्ट करें और Create > Report पर क्लिक करें। एक्सेस तुरंत एक प्राथमिक रिपोर्ट तैयार कर देता है।'
            },
            {
              heading: '2. मल्टी-टेबल रिपोर्ट (Multi-Table Report)',
              content: 'व्यावसायिक अनुप्रयोगों में डेटा कई टेबल्स में बंटा होता है (जैसे Customers, Orders, Order_Details, Products):',
              points: [
                'सर्वोत्तम तरीका: पहले Query Design द्वारा एक ऐसी क्वेरी तैयार करें जो सभी आवश्यक टेबल्स को जॉइन करके आवश्यक फील्ड्स निकाले।',
                'फिर उस क्वेरी को रिपोर्ट का "Record Source" बनाएं।',
                'परिणाम: रिपोर्ट में ग्राहक का नाम, उसके द्वारा दिए गए सभी ऑर्डर्स, उत्पादों के नाम और कुल बिल राशि एक साथ सुव्यवस्थित रूप से मुद्रित होती है।'
              ]
            }
          ],
          examTip: 'Multi-Table Report बनाने के लिए क्वेरी को रिकॉर्ड सोर्स (Record Source) बनाना सर्वोत्तम होता है, यह लिखें।',
          keyTerms: ['Single Table Source', 'Multi-Table Relational', 'Record Source Property', 'Joined Query Source']
        }
      },
      {
        id: 'p4-u5-q3',
        number: 3,
        question: 'Preview Report, Print Report समझाइए।',
        topics: ['Print Preview View', 'Page Setup (Margins & Orientation)', 'Zoom & Multi-page', 'Print Dialog'],
        answer: {
          summary: 'प्रिंट प्रीव्यू उपयोगकर्ता को यह देखने की अनुमति देता है कि रिपोर्ट कागज पर मुद्रित होने के बाद कैसी दिखेगी, जिससे कागज और स्याही की बर्बादी रोकी जा सकती है।',
          sections: [
            {
              heading: '1. प्रिंट प्रीव्यू के टूल्स (Print Preview View)',
              content: 'नेविगेशन पेन में रिपोर्ट पर Right Click > "Print Preview" चुनें। प्रिंट प्रीव्यू रिबन में उपलब्ध टूल्स:',
              points: [
                'Print: सीधे प्रिंटर पर भेजने के लिए डायलॉग खोलना।',
                'Page Size: Letter, Legal, A4 आदि कागज आकार का चयन।',
                'Margins: Normal, Wide, Narrow या Custom Margins सेट करना।',
                'Orientation: Portrait (लंबवत) या Landscape (क्षैतिज)।',
                'Zoom Controls: 100%, Fit to Window, Two Pages (आमने-सामने दो पेज देखना), या More Pages (4, 8, 12 पेज एक साथ)।',
                'Export Options: रिपोर्ट को एक क्लिक में PDF/XPS, Excel, Text, या Word प्रारूप में निर्यात करना।'
              ]
            },
            {
              heading: '2. रिपोर्ट प्रिंट करना (Ctrl + P)',
              content: 'Print डायलॉग में प्रिंटर का चयन, पेज रेंज (All या Pages From ... To ...), और प्रतियों की संख्या (Number of Copies) चुनकर "OK" दबाया जाता है।'
            }
          ],
          examTip: 'प्रिंट प्रीव्यू से सीधे PDF में एक्सपोर्ट करने के विकल्प का उल्लेख करें।',
          keyTerms: ['Print Preview View', 'Page Setup A4', 'Portrait vs Landscape', 'Zoom Controls', 'Export to PDF']
        }
      },
      {
        id: 'p4-u5-q4',
        number: 4,
        question: 'Creating Reports and Labels समझाइए।',
        topics: ['Mailing Labels Wizard', 'Standard Avery Labels', 'Label Dimensions', 'Prototype Label Fields'],
        answer: {
          summary: 'मेलिंग लेबल्स रिपोर्ट का एक विशेष रूप हैं जिन्हें स्टिकर शीट्स पर ग्राहकों के पते या उत्पादों के बारकोड प्रिंट करने के लिए डिज़ाइन किया जाता है।',
          sections: [
            {
              heading: '1. मेलिंग लेबल्स विज़ार्ड (Label Wizard)',
              content: 'चरणबद्ध प्रक्रिया: Create Tab > Reports > "Labels" पर क्लिक करें:',
              points: [
                'स्टेप 1 (लेबल आकार चयन): मानक निर्माता (जैसे Avery) और उत्पाद संख्या (जैसे Avery 5160) चुनें, या Custom आयाम (ऊंचाई, चौड़ाई, प्रति शीट पंक्तियाँ) दर्ज करें।',
                'स्टेप 2 (फॉन्ट व रंग): फॉन्ट का नाम (Arial), साइज (10pt), रंग और मोटाई चुनें।',
                'स्टेप 3 (प्रोटोटाइप लेबल निर्माण): उपलब्ध फील्ड्स में से नाम, पता, शहर, पिनकोड को प्रोटोटाइप बॉक्स में ड्रैग करें और बीच में स्पेस या कॉमा लगाएं।',
                'स्टेप 4 (सॉर्टिंग): लेबल्स को पिनकोड या ग्राहक नाम के अनुसार सॉर्ट करें ताकि डाक विभाग में छंटाई आसान हो।',
                'स्टेप 5: Finish पर क्लिक करें। एक्सेस स्टिकर शीट के अनुसार बिल्कुल सटीक संरेखण में लेबल्स की ग्रिड तैयार कर देगा।'
              ]
            }
          ],
          examTip: 'Avery लेबल मानक और प्रोटोटाइप लेबल (Prototype Label) बॉक्स का उल्लेख करें।',
          keyTerms: ['Label Wizard', 'Mailing Labels', 'Avery Label Standard', 'Prototype Label', 'Sticky Sheet Alignment']
        }
      },
      {
        id: 'p4-u5-q5',
        number: 5,
        question: 'Wizard की सहायता से Report बनाना सिखाइए।',
        topics: ['Report Wizard Steps', 'Grouping Levels (Priority)', 'Sorting and Summary Options', 'Layout Styles (Stepped, Block, Outline)'],
        answer: {
          summary: 'रिपोर्ट विज़ार्ड जटिल ग्रुपिंग, सबटोटल्स, लेआउट शैलियों और सारांश विकल्पों के साथ संपूर्ण व्यावसायिक रिपोर्ट बनाने का सबसे कुशल साधन है।',
          sections: [
            {
              heading: '1. रिपोर्ट विज़ार्ड के चरणबद्ध स्टेप्स (Report Wizard)',
              content: 'Create Tab > "Report Wizard" पर क्लिक करें:',
              points: [
                'स्टेप 1 (टेबल/क्वेरी व फील्ड्स): स्रोत चुनें और आवश्यक फील्ड्स को `>>` बटन से जोड़ें। Next दबाएं।',
                'स्टेप 2 (ग्रुपिंग स्तर - Grouping Levels): डेटा को समूहीकृत करने के लिए प्राथमिकता फील्ड चुनें (जैसे "Department" या "Course")। यह डेटा को डिपार्टमेंट-वाइज अलग बॉक्स में बांटेगा।',
                'स्टेप 3 (सॉर्टिंग और समरी ऑप्शंस): 4 स्तरों तक सॉर्टिंग चुनें (जैसे RollNo Ascending)। "Summary Options" बटन पर क्लिक करके संख्यात्मक फील्ड्स (जैसे Fees) के लिए Sum, Avg, Min, Max पर टिक लगाएं।',
                'स्टेप 4 (लेआउट व ओरिएंटेशन): लेआउट चुनें (Stepped, Block, या Outline) और ओरिएंटेशन (Portrait या Landscape) चुनें।',
                'स्टेप 5 (शीर्षक व समाप्ति): रिपोर्ट को नाम दें (जैसे "rpt_DepartmentalFeeSummary") और "Finish" दबाएं।'
              ]
            }
          ],
          examTip: 'Summary Options में उपलब्ध चार फंक्शंस (Sum, Avg, Min, Max) का उल्लेख जरूर करें।',
          keyTerms: ['Report Wizard', 'Grouping Levels', 'Summary Options (Sum/Avg)', 'Stepped vs Block Layout', 'Landscape Mode']
        }
      }
    ]
  }
];
