import { Unit } from '../types';

export const paper8Units: Unit[] = [
  {
    unitNumber: 1,
    unitRoman: 'Unit I',
    title: 'मल्टीमीडिया अवधारणाएं, घटक, हार्डवेयर/सॉफ्टवेयर आवश्यकताएं व पावरपॉइंट',
    questions: [
      {
        id: 'p8-u1-q1',
        number: 1,
        question: 'Multimedia: Definition, Concept, Need, Applications, Development Platforms समझाइए।',
        topics: ['Multimedia Definition', 'Multi + Medium Concept', 'Need for Multimedia', 'Industry Applications', 'Development Platforms (Macromedia, Adobe)'],
        answer: {
          summary: 'मल्टीमीडिया (Multi + Media) विभिन्न माध्यमों - टेक्स्ट, ऑडियो, इमेजेस, एनिमेशन और वीडियो का एकीकृत डिजिटल संयोजन है जिसे कंप्यूटर द्वारा नियंत्रित और संप्रेषित किया जाता है।',
          sections: [
            {
              heading: '1. मल्टीमीडिया की अवधारणा और आवश्यकता',
              content: '"Multi" का अर्थ है अनेक और "Media" का अर्थ है संचार का माध्यम। केवल सादा टेक्स्ट पढ़ने की तुलना में दृश्य और श्रव्य तत्वों का मिश्रण मानवीय मस्तिष्क में 80% अधिक समय तक याद रहता है। यह जटिल विचारों को सरल, रोचक और इंटरैक्टिव बनाने के लिए अनिवार्य है।'
            },
            {
              heading: '2. अनुप्रयोग के प्रमुख क्षेत्र (Applications)',
              content: 'उद्योगों में मल्टीमीडिया का प्रभाव:',
              points: [
                'शिक्षा व ई-लर्निंग (EdTech): डिजिटल क्लासरूम, सिमुलेशन लैब्स, इंटरैक्टिव इनसाइक्लोपीडिया (Encarta)।',
                'मनोरंजन व सिनेमा (Entertainment): वीएफएक्स (VFX), 3D एनिमेशन फिल्में, ओटीटी स्ट्रीमिंग, वीडियो गेम्स।',
                'व्यापार व विज्ञापन (Advertising): डिजिटल बिलबोर्ड्स, उत्पाद डेमो, कॉर्पोरेट प्रेजेंटेशन।',
                'चिकित्सा (Medicine): वर्चुअल सर्जरी ट्रेनिंग और 3D एनाटॉमी सिमुलेशन।'
              ]
            },
            {
              heading: '3. डेवलपमेंट प्लेटफॉर्म्स (Authoring Platforms)',
              content: 'मल्टीमीडिया प्रोजेक्ट्स को संयोजित करने वाले प्लेटफॉर्म्स: Adobe Creative Cloud (Premiere, After Effects, Photoshop, Animate), Unity / Unreal Engine (इंटरैक्टिव 3D और गेमिंग), और पुराने Macromedia Director/Authorware।'
            }
          ],
          examTip: '"Multi + Medium" की व्युत्पत्ति और चारों अनुप्रयोग क्षेत्रों को हेडिंग्स बनाकर लिखें।',
          keyTerms: ['Multi + Medium', 'Sensory Immersion', 'EdTech Simulation', 'VFX & Animation', 'Multimedia Authoring Tools', 'Adobe Stack']
        }
      },
      {
        id: 'p8-u1-q2',
        number: 2,
        question: 'Types: Linear and Non-linear, Multimedia Elements (Text, Images, Sound, Animation, Video) समझाइए।',
        topics: ['Linear vs Non-linear Multimedia', '5 Core Elements (Text, Graphics, Audio, Video, Animation)', 'Interactive Hypermedia'],
        answer: {
          summary: 'संरचना के आधार पर मल्टीमीडिया लीनियर (दर्शक का कोई नियंत्रण नहीं) या नॉन-लीनियर (इंटरैक्टिव) होता है। इसके 5 आधारभूत घटक टेक्स्ट, चित्र, ध्वनि, वीडियो और एनिमेशन हैं।',
          sections: [
            {
              heading: '1. लीनियर बनाम नॉन-लीनियर मल्टीमीडिया',
              content: 'दोनों प्रकारों में मुख्य अंतर:',
              table: {
                headers: ['लक्षण', 'लीनियर मल्टीमीडिया (Linear)', 'नॉन-लीनियर मल्टीमीडिया (Non-linear)'],
                rows: [
                  ['उपयोगकर्ता नियंत्रण', 'शून्य नेविगेशन नियंत्रण; केवल मूक दर्शक', 'पूर्ण इंटरैक्टिविटी; उपयोगकर्ता तय करता है कि आगे क्या देखना है'],
                  ['प्रवाह (Flow)', 'आरंभ से अंत तक एक सीधी रेखा में चलता है', 'हाइपरलिंक्स, मेनू और बटनों के जरिए शाखित (Branching) प्रवाह'],
                  ['उदाहरण', 'सिनेमा घर में फिल्म देखना, टीवी प्रसारण', 'वीडियो गेम, वेबसाइट्स, ई-लर्निंग कोर्स, कियोस्क सॉफ्टवेयर']
                ]
              }
            },
            {
              heading: '2. मल्टीमीडिया के 5 मूलभूत तत्व (5 Core Elements)',
              content: 'संवेदी माध्यमों का संयोजन:',
              points: [
                '1. टेक्स्ट (Text): शीर्षक, विवरण, मेनू और उपशीर्षक प्रदान करने वाला प्राथमिक सूचनात्मक तत्व।',
                '2. चित्र / ग्राफिक्स (Images): रेखाचित्र, तस्वीरें, आइकन्स (रास्टर और वेक्टर)।',
                '3. ध्वनि / ऑडियो (Audio): वॉयस-ओवर, बैकग्राउंड म्यूजिक, साउंड इफेक्ट्स (Foley Sound)।',
                '4. वीडियो (Video): प्रति सेकंड 24 से 60 गतिशील फ्रेम्स की रिकॉर्ड की गई वास्तविक फुटेज।',
                '5. एनिमेशन (Animation): स्थिर चित्रों या कंप्यूटर मॉडल्स को तेजी से बदलकर गति का भ्रम (Illusion of Motion) पैदा करना।'
              ]
            }
          ],
          examTip: 'लीनियर (फिल्म) और नॉन-लीनियर (वीडियो गेम/वेबसाइट) का तुलनात्मक चार्ट बनाएं।',
          keyTerms: ['Linear vs Non-linear', '5 Elements of Multimedia', 'Hypermedia', 'Branching Navigation', 'Illusion of Motion']
        }
      },
      {
        id: 'p8-u1-q3',
        number: 3,
        question: 'Multimedia Hardware and Software Requirements समझाइए।',
        topics: ['Hardware Stack (CPU, GPU, RAM, Capture Devices, Sound Card)', 'Software Stack (Authoring, Editing, Players)', 'MPC Standards (Historical Context)'],
        answer: {
          summary: 'मल्टीमीडिया उत्पादन के लिए हाई-स्पीड हार्डवेयर (मल्टी-कोर सीपीयू, डेडिकेटेड जीपीयू, अधिक रैम, हाई-कलर डिस्प्ले) और विशेष संपादन सॉफ्टवेयर्स की आवश्यकता होती है।',
          sections: [
            {
              heading: '1. आवश्यक हार्डवेयर विनिर्देश (Hardware Requirements)',
              content: 'मल्टीमीडिया वर्कस्टेशन के मुख्य घटक:',
              points: [
                'प्रोसेसर (CPU): मल्टी-कोर प्रोसेसर (Intel Core i7/i9 या AMD Ryzen 7/9) वीडियो रेंडरिंग के लिए।',
                'ग्राफिक्स कार्ड (GPU): डेडिकेटेड ग्राफिक्स कार्ड (NVIDIA RTX 4060+ 8GB VRAM) CUDA कोर्स और 3D प्रोसेसिंग के लिए।',
                'मेमोरी (RAM): न्यूनतम 16GB, 4K वीडियो एडिटिंग के लिए 32GB या 64GB DDR5।',
                'स्टोरेज: फास्ट NVMe M.2 SSD (तीव्र वीडियो स्क्रैच डिस्क और रियल-टाइम प्लेबैक हेतु)।',
                'कैप्चर डिवाइसेस: 4K डिजिटल कैमरा, प्रोफेशनल XLR माइक्रोफोन, ऑडियो इंटरफेस, ग्राफिक टैबलेट (Wacom)।',
                'आउटपुट उपकरण: 100% sRGB/DCI-P3 कलर एक्यूरेट IPS मॉनिटर और स्टूडियो मॉनिटर स्पीकर्स।'
              ]
            },
            {
              heading: '2. आवश्यक सॉफ्टवेयर टूल्स (Software Requirements)',
              content: 'संबंधित संपादन श्रेणियां: इमेज एडिटिंग (Photoshop, CorelDraw), ऑडियो एडिटिंग (Audacity, Adobe Audition), वीडियो एडिटिंग (Premiere Pro, DaVinci Resolve), और 3D/एनिमेशन (Blender, Maya)।'
            }
          ],
          examTip: 'GPU (CUDA Cores), VRAM और कलर-एक्यूरेट मॉनिटर का तकनीकी विवरण अवश्य लिखें।',
          keyTerms: ['Dedicated GPU VRAM', 'Multi-core CPU', 'NVMe Scratch Disk', 'Wacom Tablet', 'Authoring Software Stack']
        }
      },
      {
        id: 'p8-u1-q4',
        number: 4,
        question: 'Making Simple Multimedia with PowerPoint समझाइए।',
        topics: ['PowerPoint as Multimedia Tool', 'Audio Narration Recording', 'Video Insertion & Trim', 'Action Buttons & Hyperlinks', 'Export as Video (MP4)'],
        answer: {
          summary: 'एमएस पावरपॉइंट एक सहज मल्टीमीडिया ऑथरिंग टूल है जो गैर-प्रोग्रामर्स को टेक्स्ट, ऑडियो नरेशन, वीडियो क्लिप्स, इंटरैक्टिव एक्शन बटन्स और एनिमेशन के संयोजन से मल्टीमीडिया प्रोजेक्ट बनाने की सुविधा देता है।',
          sections: [
            {
              heading: '1. पावरपॉइंट में मल्टीमीडिया प्रोजेक्ट निर्माण के चरण',
              content: 'इंटरैक्टिव प्रस्तुति बनाने की विधि:',
              points: [
                'स्टेप 1 (थीम व विजुअल्स): 16:9 वाइडस्क्रीन लेआउट चुनें, आकर्षक स्लाइड बैकग्राउंड और उच्च-गुणवत्ता वाली छवियां व स्मार्टआर्ट जोड़ें।',
                'स्टेप 2 (ऑडियो नरेशन): Insert > Audio > "Record Audio" द्वारा प्रत्येक स्लाइड के लिए अपनी आवाज में व्याख्या रिकॉर्ड करें।',
                'स्टेप 3 (वीडियो एम्बेडिंग): Insert > Video द्वारा प्रासंगिक वीडियो क्लिप लगाएं और Video Tools से ट्रिमिंग और फेड-इन/फेड-आउट सेट करें।',
                'स्टेप 4 (इंटरैक्टिविटी व एक्शन बटन्स): Insert > Shapes से "Action Buttons" (Home, Next, Sound, Info) जोड़ें। बटन क्लिक पर विशिष्ट स्लाइड या वेब लिंक खोलने के लिए Action सेटिंग्स लगाएं (नॉन-लीनियर नेविगेशन)।',
                'स्टेप 5 (एनिमेशन): तत्वों पर एंट्रेंस और मोशन पाथ एनिमेशन लगाएं।'
              ]
            },
            {
              heading: '2. वीडियो के रूप में निर्यात (Export to MP4)',
              content: 'File > Export > "Create a Video" चुनकर Full HD (1080p) या 4K में प्रेजेंटेशन को एक स्टैंडअलोन MP4 वीडियो फाइल में बदलें जिसे बिना पावरपॉइंट के किसी भी फोन या टीवी पर चलाया जा सके।'
            }
          ],
          examTip: 'Action Buttons द्वारा नॉन-लीनियर नेविगेशन बनाना और Export to MP4 का उल्लेख करें।',
          keyTerms: ['Action Buttons Interactivity', 'Embedded Audio Narration', 'Video Trimming', 'Motion Paths', 'Export to MP4 Video']
        }
      },
      {
        id: 'p8-u1-q5',
        number: 5,
        question: 'Text as Component: Plain vs Formatted, RTF & HTML, OLE Concept, Fonts Need & Types; Importance of Sound, Graphics, Video, Animation समझाइए।',
        topics: ['Plain Text (.txt) vs Rich Text (.rtf)', 'HTML Formatting', 'OLE (Object Linking & Embedding)', 'Font Categories', 'Sensory Synergies of Media'],
        answer: {
          summary: 'टेक्स्ट मल्टीमीडिया का मूल संदेशवाहक है जो प्लेन या रिच टेक्स्ट में हो सकता है। फॉन्ट शैलियाँ पठनीयता तय करती हैं और ऑडियो-वीडियो भावनात्मक गहराई जोड़ते हैं।',
          sections: [
            {
              heading: '1. टेक्स्ट के रूप: प्लेन बनाम फॉर्मेटेड टेक्स्ट',
              content: 'प्रारूपों में अंतर:',
              points: [
                'Plain Text (.txt): केवल ASCII या Unicode कैरेक्टर कोड्स; इसमें कोई फॉन्ट, रंग, साइज या स्टाइलिंग जानकारी नहीं होती।',
                'Rich Text Format (.rtf): माइक्रोसॉफ्ट का मानक जो टेक्स्ट के साथ-साथ फॉन्ट साइज, बोल्ड, इटैलिक, अलाइनमेंट और रंगों को स्टोर करता है।',
                'HTML Text: वेब मानकों के अनुसार टैग्स (`<h1>`, `<b>`) द्वारा फॉर्मेटेड टेक्स्ट।'
              ]
            },
            {
              heading: '2. ओएलई अवधारणा (OLE - Object Linking & Embedding)',
              content: 'एक मल्टीमीडिया एप्लिकेशन के अंदर किसी अन्य एप्लिकेशन की वस्तु (जैसे वर्ड डॉक्यूमेंट के अंदर एक्सेल चार्ट या पावरपॉइंट के अंदर ऑडेसिटी ऑडियो) को लाइव लिंक या एम्बेड करने की तकनीक।'
            },
            {
              heading: '3. अन्य घटकों का संयुक्त महत्व',
              content: 'ध्वनि ध्यान आकर्षित करती है और माहौल (Ambiance) बनाती है; ग्राफिक्स अमूर्त विचारों को रूप देते हैं; वीडियो वास्तविकता का सीधा अनुभव कराता है; और एनिमेशन सूक्ष्म या अदृश्य प्रक्रियाओं (जैसे परमाणु संरचना या इंजन के काम) को दृश्यमान बनाता है।'
            }
          ],
          examTip: 'प्लेन टेक्स्ट (.txt) और रिच टेक्स्ट (.rtf) का तुलनात्मक अंतर परीक्षा में लिखें।',
          keyTerms: ['Plain Text ASCII', 'Rich Text Format RTF', 'OLE Technology', 'Font Readability', 'Sensory Synergy']
        }
      }
    ]
  },
  {
    unitNumber: 2,
    unitRoman: 'Unit II',
    title: 'ग्राफिक डिज़ाइन बेसिक्स, कोरलड्रॉ परिचय, वर्कस्पेस व कलर प्रोफाइल्स',
    questions: [
      {
        id: 'p8-u2-q1',
        number: 1,
        question: 'Image Types: Raster and Vector Graphics; Image File Formats (JPEG, PNG, GIF, BMP, TIFF) समझाइए।',
        topics: ['Raster Pixels vs Vector Math', 'Resolution Independence', 'Graphic Formats Characteristics', 'Lossy vs Lossless Compression'],
        answer: {
          summary: 'रास्टर इमेजेस पिक्सल्स से बनी होती हैं और रेजोल्यूशन-डिपेंडेंट होती हैं, जबकि वेक्टर इमेजेस गणितीय वक्रों (वेक्टर्स) पर आधारित होती हैं और अनंत रूप से स्केलेबल होती हैं।',
          sections: [
            {
              heading: '1. रास्टर बनाम वेक्टर ग्राफिक्स',
              content: 'मूलभूत अंतर:',
              points: [
                'रास्टर ग्राफिक्स (Bitmap): पिक्सल्स की ग्रिड। ज़ूम करने पर पिक्सेलेट (धुंधली) हो जाती हैं। वास्तविक फोटोग्राफी के लिए उपयुक्त (जैसे Photoshop की फाइलें)।',
                'वेक्टर ग्राफिक्स: बिंदुओं, रेखाओं, वक्रों (Bézier curves) और बहुभुजों के गणितीय समीकरण। चाहे 100 गुना बड़ा करें, किनारे हमेशा क्रिस्टल क्लियर रहते हैं। लोगो, टाइपोग्राफी और फ्लेक्स बैनर के लिए आदर्श (जैसे CorelDraw की फाइलें)।'
              ]
            },
            {
              heading: '2. प्रमुख इमेज फाइल फॉर्मेट्स की तुलना',
              content: 'डिजिटल मल्टीमीडिया फॉर्मेट्स:',
              table: {
                headers: ['फॉर्मेट', 'संपीड़न (Compression)', 'रंग क्षमता', 'सर्वश्रेष्ठ उपयोग'],
                rows: [
                  ['JPEG', 'लॉसी (Lossy - कुछ डेटा खो जाता है)', '16.7 मिलियन (24-बिट)', 'डिजिटल कैमरा फोटोग्राफी, वेब इमेजेस'],
                  ['PNG', 'लॉसलेस (Lossless - पूर्ण गुणवत्ता)', '24-बिट + 8-बिट अल्फा ट्रांसपेरेंसी', 'पारदर्शी बैकग्राउंड वाले लोगो और यूआई आइकन्स'],
                  ['GIF', 'लॉसलेस (8-बिट सीमित)', 'अधिकतम 256 रंग', 'साधारण 2D वेब एनिमेशन और बटन'],
                  ['BMP', 'असंपीड़ित (Uncompressed)', 'पूर्ण रंग', 'विंडोज सिस्टम ग्राफिक्स (विशाल फाइल साइज)'],
                  ['TIFF', 'लॉसलेस (LZW/ZIP)', 'व्यावसायिक उच्च गुणवत्ता', 'ऑफसेट प्रिंटिंग, मेडिकल स्कैनिंग, पब्लिशिंग']
                ]
              }
            }
          ],
          examTip: 'PNG की ट्रांसपेरेंसी और JPEG के लॉसी संपीड़न का अंतर परीक्षा में लिखें।',
          keyTerms: ['Raster vs Vector', 'Resolution Independence', 'Lossy JPEG', 'Lossless PNG Transparency', 'TIFF Commercial Print']
        }
      },
      {
        id: 'p8-u2-q2',
        number: 2,
        question: 'Basics of Graphic Design: Color Theory, Resolution, Composition; Image Editing Tools and Techniques समझाइए।',
        topics: ['Color Wheel & Harmonies', 'Principles of Design (Balance, Contrast, Hierarchy)', 'Rule of Thirds', 'Resolution (PPI/DPI)'],
        answer: {
          summary: 'ग्राफिक डिज़ाइन दृश्य संचार की कला है। रंग सिद्धांत, संतुलन, कंट्रास्ट और संरचना (रूल ऑफ थर्ड्स) इसके मूल सिद्धांत हैं।',
          sections: [
            {
              heading: '1. रंग सिद्धांत (Color Theory & Harmonies)',
              content: 'कलर व्हील (Color Wheel) पर आधारित रंग संयोजन:',
              points: [
                'प्राथमिक रंग (Primary): Red, Yellow, Blue। द्वितीयक रंग (Secondary): Green, Orange, Purple।',
                'रंग सामंजस्य: Complementary (कलर व्हील पर आमने-सामने - उच्च कंट्रास्ट, जैसे नीला और नारंगी), Analogous (निकटवर्ती रंग - शांत प्रभाव), Monochromatic (एक ही रंग के विभिन्न शेड्स)।',
                'रंग मनोविज्ञान: लाल (ऊर्जा/आक्रामकता), नीला (विश्वास/शांति), हरा (प्रकृति/स्वास्थ्य)।'
              ]
            },
            {
              heading: '2. संरचना के सिद्धांत (Composition Principles)',
              content: 'दृश्य आकर्षण के नियम:',
              points: [
                'रूल ऑफ थर्ड्स (Rule of Thirds): कैनवास को 3x3 ग्रिड में बांटना और महत्वपूर्ण विषय को रेखाओं के कटाव बिंदुओं (Intersection Points) पर रखना।',
                'संतुलन (Balance): सममित (Symmetrical) या विषम (Asymmetrical) संतुलन।',
                'कंट्रास्ट और पदानुक्रम (Hierarchy): सबसे महत्वपूर्ण तत्व को सबसे बड़ा और गहरा दिखाना ताकि आंखें सबसे पहले उस पर जाएं।'
              ]
            }
          ],
          examTip: 'Rule of Thirds का 3x3 ग्रिड आरेख बनाकर फोकल पॉइंट दिखाएं।',
          keyTerms: ['Color Wheel Harmonies', 'Complementary Colors', 'Rule of Thirds Grid', 'Visual Hierarchy', 'Color Psychology']
        }
      },
      {
        id: 'p8-u2-q3',
        number: 3,
        question: 'CorelDraw: Introduction, Usage, Advantages, User Interface, Tool Panel, Workspaces समझाइए।',
        topics: ['CorelDraw Overview', 'Vector Design Advantages', 'UI (Title, Menu, Property Bar, Toolbox, Docker)', 'Color Palette Dock'],
        answer: {
          summary: 'कोरलड्रॉ एक उद्योग-अग्रणी वेक्टर ग्राफिक्स सॉफ्टवेयर है जिसका उपयोग लोगो डिजाइन, पैकेजिंग, फ्लेक्स-होर्डिंग्स और ब्रोशर लेआउट के लिए दुनिया भर में किया जाता है।',
          sections: [
            {
              heading: '1. कोरलड्रॉ का परिचय और प्रमुख लाभ',
              content: 'कनाडा की कोरल कॉर्पोरेशन द्वारा विकसित वेक्टर सॉफ्टवेयर:',
              points: [
                'अनंत स्केलेबिलिटी: डिजाइन को बिना पिक्सेल फटे 1 इंच के विजिटिंग कार्ड से लेकर 50 फीट के हाईवे होर्डिंग तक स्केल किया जा सकता है।',
                'शक्तिशाली टाइपोग्राफी और वक्र संपादन (Curve Editing)।',
                'व्यावसायिक प्रिंटिंग और कटिंग प्लॉटर्स (विनाइल कटिंग) के साथ सहज अनुकूलता।'
              ]
            },
            {
              heading: '2. यूजर इंटरफेस के मुख्य घटक (UI Elements)',
              content: 'कोरलड्रॉ स्क्रीन की संरचना:',
              points: [
                'मेनू बार: File, Edit, View, Layout, Object, Effects, Text, Tools.',
                'प्रॉपर्टी बार (Property Bar): मेनू बार के ठीक नीचे। यह संदर्भ-संवेदनशील (Context-sensitive) होता है - जो टूल या ऑब्जेक्ट चुना जाता है, यह तुरंत उसके गुण (Size, Position, Angle, Mirror) दिखाता है।',
                'टूलबॉक्स (Toolbox): बाईं ओर स्थित टूल्स की लंबवत पट्टी (Pick, Shape, Crop, Zoom, Freehand, Pen, Rectangle, Ellipse, Text, Interactive Fill)।',
                'ड्राइंग पेज (Drawing Page): मध्य में सफेद मुद्रण क्षेत्र। चारों ओर का खाली क्षेत्र ड्राइंग विंडो कहलाता है।',
                'डॉकर्स (Dockers): दाईं ओर स्थित फ्लोटिंग/डॉक्ड पैनल्स (Properties, Objects, Align & Distribute)।',
                'कलर पैलेट (Color Palette): सबसे दाईं ओर स्थित ऊर्ध्वाधर रंग पट्टी।'
              ]
            }
          ],
          examTip: 'Property Bar की विशेषता (चयनित ऑब्जेक्ट के अनुसार गतिशील बदलना) जरूर लिखें।',
          keyTerms: ['CorelDraw Vector Suite', 'Infinite Scalability', 'Property Bar Context-sensitive', 'Toolbox Panel', 'Dockers & Color Palette']
        }
      },
      {
        id: 'p8-u2-q4',
        number: 4,
        question: 'Various Sizes and Formats of Panels and Layouts, File Layouts and Layout Properties समझाइए।',
        topics: ['Standard Paper Sizes (A4, A3, Letter, Business Card)', 'Orientation (Portrait/Landscape)', 'Bleed & Page Setup', 'Multi-page Documents in CorelDraw'],
        answer: {
          summary: 'कोरलड्रॉ में लेआउट सेटिंग्स के जरिए पृष्ठ का आकार, ओरिएंटेशन, ब्लीड क्षेत्र और बहु-पृष्ठ दस्तावेजों का प्रबंधन किया जाता है।',
          sections: [
            {
              heading: '1. पेज सेटअप और मानक आकार (Page Setup)',
              content: 'Layout Menu > Page Setup (या प्रॉपर्टी बार से):',
              points: [
                'मानक आकार: A4 (210 x 297 mm), A3 (297 x 420 mm), Letter (8.5 x 11 इंच), Business Card (3.5 x 2.0 इंच)।',
                'Custom Size: बिलबोर्ड या बड़े होर्डिंग्स के लिए मनचाहे फीट या मीटर में आकार तय करना।',
                'Orientation: Portrait (लंबवत) या Landscape (क्षैतिज)।'
              ]
            },
            {
              heading: '2. ब्लीड सेटिंग्स और गाइड्स (Bleed & Facing Pages)',
              content: 'मुद्रण के लिए अतिरिक्त किनारा:',
              points: [
                'Bleed Area: कटाई की सुरक्षा के लिए पेज बाउंड्री से 3mm से 5mm का ब्लीड निर्धारित करना और "Show Bleed Area" पर टिक लगाना।',
                'मल्टी-पेज कैटलॉग: नीचे पेज टैब्स (Page 1, Page 2) द्वारा कई पेजों की ब्रोशर डिजाइनिंग और "Facing Pages" (पुस्तक प्रारूप) सक्षम करना।'
              ]
            }
          ],
          examTip: 'A4 का मानक माप (210 x 297 mm) और ब्लीड (3mm-5mm) का मान अवश्य लिखें।',
          keyTerms: ['Page Setup A4 210x297mm', 'Custom Dimensions', 'Portrait vs Landscape', 'Bleed Setup 3mm', 'Facing Pages Booklet']
        }
      },
      {
        id: 'p8-u2-q5',
        number: 5,
        question: 'Objects and Using Color Profiles समझाइए।',
        topics: ['Object Manipulation (Selecting, Sizing, Rotating, Skewing)', 'Color Management (Color Engine)', 'RGB vs CMYK Profiles', 'Pantone Spot Colors'],
        answer: {
          summary: 'कोरलड्रॉ में प्रत्येक तत्व एक ऑब्जेक्ट होता है जिसे ट्रांसफॉर्म किया जा सकता है। कलर प्रोफाइल्स यह सुनिश्चित करते हैं कि स्क्रीन पर दिखने वाला रंग मुद्रण के बाद भी हूबहू वैसा ही निकले।',
          sections: [
            {
              heading: '1. ऑब्जेक्ट्स का बुनियादी हेरफेर (Object Operations)',
              content: 'पिक टूल (Pick Tool) द्वारा नियंत्रण:',
              points: [
                'एक बार क्लिक करने पर आठ स्केलिंग हैंडल्स (चतुर्भुज) दिखते हैं - आकार बदलने (Resize) के लिए।',
                'दूसरी बार क्लिक करने पर रोटेशन हैंडल्स (तीर) दिखते हैं - किसी भी कोण पर घुमाने (Rotate) और तिरछा करने (Skew) के लिए।',
                'ऑर्डरिंग (Order): Ctrl + Page Up (एक स्तर आगे लाना) या Shift + Page Down (सबसे पीछे भेजना)।'
              ]
            },
            {
              heading: '2. कलर प्रोफाइल्स और कलर मैनेजमेंट (Color Management)',
              content: 'स्क्रीन और प्रिंटर के बीच रंगों की विसंगति का समाधान:',
              points: [
                'Tools > Color Management > Default Settings।',
                'RGB प्रोफाइल: स्क्रीन व डिजिटल मीडिया के लिए (sRGB IEC61966-2.1)।',
                'CMYK प्रोफाइल: ऑफसेट प्रिंटिंग के लिए (U.S. Web Coated SWOP या Coated FOGRA39)।',
                'पैनटोन (Pantone Matching System - PMS): विशिष्ट कॉर्पोरेट लोगो के लिए सटीक स्पॉट कलर्स (Spot Colors) जिनका रंग दुनिया के किसी भी कोने में छपने पर 100% एक समान रहता है।'
              ]
            }
          ],
          examTip: 'Pantone (Spot Colors) और sRGB बनाम CMYK FOGRA प्रोफाइल्स का उल्लेख करें।',
          keyTerms: ['Pick Tool Transformations', 'Rotate and Skew', 'Order Shift+PageDown', 'Color Profiles (sRGB / FOGRA)', 'Pantone PMS Spot Colors']
        }
      }
    ]
  },
  {
    unitNumber: 3,
    unitRoman: 'Unit III',
    title: 'टेक्स्ट टूल्स, वक्र संपादन, शेप्स व विशेष प्रभाव (कोरलड्रॉ)',
    questions: [
      {
        id: 'p8-u3-q1',
        number: 1,
        question: 'Text Tools and Text Properties समझाइए।',
        topics: ['Text Tool (F8)', 'Artistic Text vs Paragraph Text', 'Text Properties Docker (Ctrl+T)', 'Fit Text to Path'],
        answer: {
          summary: 'कोरलड्रॉ में दो प्रकार के टेक्स्ट होते हैं: आर्टिस्टिक टेक्स्ट (शीर्षकों और लोगो के लिए) और पैराग्राफ टेक्स्ट (पुस्तकों और विवरण के लिए)। "Fit Text to Path" से टेक्स्ट को किसी भी वक्र रेखा के साथ मोड़ा जाता है।',
          sections: [
            {
              heading: '1. आर्टिस्टिक टेक्स्ट बनाम पैराग्राफ टेक्स्ट (F8)',
              content: 'दोनों प्रकारों में स्पष्ट अंतर:',
              table: {
                headers: ['लक्षण', 'आर्टिस्टिक टेक्स्ट (Artistic Text)', 'पैराग्राफ टेक्स्ट (Paragraph Text)'],
                rows: [
                  ['निर्माण विधि', 'कैनवास पर कहीं भी एक बार क्लिक करके सीधे टाइप करना', 'माउस से ड्रैग करके एक टेक्स्ट बाउंडिंग बॉक्स बनाकर अंदर टाइप करना'],
                  ['उपयुक्तता', 'शीर्षक, स्लोगन, लोगो, 1-2 पंक्तियों के सजावटी शब्द', 'लंबे पैराग्राफ, ब्रोशर, अखबार के कॉलम, किताबें'],
                  ['ट्रांसफॉर्मेशन', 'पिक टूल से सीधे स्ट्रेच, रोटेट और विकृत किया जा सकता है', 'फ्रेम का आकार बदलने पर केवल टेक्स्ट अंदर रिफ्लो (Re-flow) होता है'],
                  ['विशेष प्रभाव', 'एक्सट्रूड, कंटूर, ब्लेंड जैसे 3D प्रभाव लागू होते हैं', 'केवल फॉन्ट और पैराग्राफ अलाइनमेंट सेटिंग्स लागू होती हैं']
                ]
              }
            },
            {
              heading: '2. फिट टेक्स्ट टू पाथ (Fit Text to Path)',
              content: 'किसी वृत्त (Circle) या लहरदार रेखा के ऊपर टेक्स्ट को मोड़ना (जैसे स्कूल की गोल सील या मोहर बनाना): Text Menu > "Fit Text to Path" चुनें और माउस को वृत्त की परिधि पर ले जाएं; टेक्स्ट स्वतः गोल घूमकर चिपक जाता है।'
            }
          ],
          examTip: 'गोल सील बनाने के लिए "Fit Text to Path" का उपयोग होता है, इसका चित्र बनाकर समझाएं।',
          keyTerms: ['Artistic Text Click', 'Paragraph Text Frame', 'Text Properties Ctrl+T', 'Fit Text to Path Curved Text']
        }
      },
      {
        id: 'p8-u3-q2',
        number: 2,
        question: 'Creating Vector Graphics using Editing Tools समझाइए।',
        topics: ['Shape Tool (F10)', 'Convert to Curves (Ctrl+Q)', 'Nodes Types (Cusp, Smooth, Symmetrical)', 'Weld, Trim, Intersect Operations'],
        answer: {
          summary: 'शेप टूल (F10) और "कन्वर्ट टू कर्व्स" (Ctrl + Q) कोरलड्रॉ में किसी भी बुनियादी आकृति को जटिल वेक्टर कलाकृति में बदलने के मुख्य औजार हैं। बूलियन ऑपरेशंस (Weld, Trim) नई आकृतियाँ बनाते हैं।',
          sections: [
            {
              heading: '1. कन्वर्ट टू कर्व्स (Convert to Curves - Ctrl + Q)',
              content: 'जब आप कोई आयत या टेक्स्ट बनाते हैं, तो वह एक निश्चित ज्यामितीय ऑब्जेक्ट होता है। Ctrl + Q दबाते ही वह बिंदुओं (Nodes) और वक्रों (Bézier curves) के एक लचीले वेक्टर पाथ में बदल जाता है।'
            },
            {
              heading: '2. शेप टूल (Shape Tool - F10) और नोड्स के प्रकार',
              content: 'नोड्स को खींचकर वक्रता बदलना:',
              points: [
                'Cusp Node: दोनों दिशाओं के हैंडल्स स्वतंत्र होते हैं; तीखे नुकीले कोने बनाने के लिए।',
                'Smooth Node: दोनों हैंडल्स 180° सीधी रेखा में रहते हैं; चिकनी वक्रता के लिए।',
                'Symmetrical Node: दोनों हैंडल्स की दिशा और लंबाई दोनों बिल्कुल समान रहती हैं।'
              ]
            },
            {
              heading: '3. शेपिंग ऑपरेशंस (Weld, Trim, Intersect)',
              content: 'दो या अधिक ओवरलैप होने वाली आकृतियों को जोड़ना और काटना:',
              points: [
                'Weld: दो या अधिक आकृतियों को मिलाकर एक ही एकल आकृति बनाना।',
                'Trim: एक आकृति का उपयोग करके दूसरी आकृति के उस हिस्से को काटना जो उसके नीचे ढका है।',
                'Intersect: केवल उस साझे क्षेत्र (Common Overlapping Area) से एक नई आकृति बनाना।'
              ]
            }
          ],
          examTip: 'Ctrl + Q (Convert to Curves) और Weld/Trim/Intersect का आरेख बनाकर समझाएं।',
          keyTerms: ['Convert to Curves Ctrl+Q', 'Shape Tool F10', 'Cusp vs Smooth Nodes', 'Weld Shapes', 'Trim Cookie-Cutter', 'Intersect Area']
        }
      },
      {
        id: 'p8-u3-q3',
        number: 3,
        question: 'Importing Images and Graphics in CorelDraw Layout; Creating and Editing Shapes समझाइए।',
        topics: ['File > Import (Ctrl+I)', 'Crop & PowerClip Images', 'Rectangle, Ellipse, Polygon Tools', 'Smart Fill Tool'],
        answer: {
          summary: 'बाहरी फाइलों को Ctrl + I से आयात किया जाता है। बुनियादी आकृतियों को खींचकर और स्मार्ट फिल टूल का उपयोग करके तुरंत नए जटिल आकार भरे जाते हैं।',
          sections: [
            {
              heading: '1. चित्र और ग्राफिक्स आयात करना (Import - Ctrl + I)',
              content: 'File > Import चुनकर बाहरी फोटो (JPEG, PNG, TIFF) या वेक्टर (AI, EPS, PDF) को लोड करना। कर्सर लोडेड कोण में बदल जाता है; क्लिक करने पर मूल आकार में या ड्रैग करने पर मनचाहे आकार में चित्र कैनवास पर आता है।'
            },
            {
              heading: '2. बेसिक शेप्स टूल्स',
              content: 'टूलबॉक्स से आकृतियाँ खींचना:',
              points: [
                'Rectangle Tool (F6): आयत या वर्ग (Ctrl दबाकर पूर्ण वर्ग)।',
                'Ellipse Tool (F7): अंडाकार या वृत्त (Ctrl दबाकर पूर्ण वृत्त)। प्रॉपर्टी बार से Pie (पाई चार्ट टुकड़ा) या Arc (चाप) में बदलना।',
                'Polygon Tool (Y): 3 से 500 भुजाओं वाले बहुभुज और तारे (Stars) बनाना।'
              ]
            },
            {
              heading: '3. स्मार्ट फिल टूल (Smart Fill Tool)',
              content: 'कोरलड्रॉ का जादुई टूल: जब कई रेखाएं और आकृतियाँ आपस में एक-दूसरे को काटती हैं, तो स्मार्ट फिल टूल किसी भी बंद खंड के अंदर क्लिक करते ही उस खाली जगह के आकार की एक नई स्वतंत्र रंगीन आकृति स्वतः बना देता है।'
            }
          ],
          examTip: 'Smart Fill टूल की कार्यप्रणाली (ओवरलैपिंग लाइनों के बीच नया ऑब्जेक्ट बनाना) जरूर लिखें।',
          keyTerms: ['Import Ctrl+I', 'F6 Rectangle', 'F7 Ellipse (Pie/Arc)', 'Polygon Tool Y', 'Smart Fill Magic Tool']
        }
      },
      {
        id: 'p8-u3-q4',
        number: 4,
        question: 'Drawing and Editing Curves; Creating Special Text Effects समझाइए।',
        topics: ['Drawing Tools (Freehand, Bézier, Pen, 3-Point Curve)', 'Contour Effect', 'Drop Shadow Effect', 'Extrude 3D Effect', 'Envelope Tool'],
        answer: {
          summary: 'पेन और बेज़िएर टूल्स सटीक वक्र रेखाएं खींचते हैं। कोरलड्रॉ में ड्रॉप शैडो, कंटूर, एक्सट्रूड और एनवेलप टूल्स टेक्स्ट को त्रि-आयामी (3D) और आकर्षक रूप देते हैं।',
          sections: [
            {
              heading: '1. वक्र रेखा खींचने के टूल्स (Curve Drawing Tools)',
              content: 'फ्रीहैंड और प्रिसिजन टूल्स:',
              points: [
                'Freehand Tool (F5): पेंसिल की तरह स्वतंत्र स्केचिंग करना।',
                'Bézier Tool व Pen Tool: क्लिक करके सीधे नोड्स लगाना और ड्रैग करके दिशात्मक हैंडल्स (Tangent Handles) से अत्यंत सटीक वक्र खींचना (कार या लोगो ट्रेसिंग के लिए सर्वोत्तम)।',
                '3-Point Curve: तीन बिंदुओं (शुरुआत, अंत, और वक्रता बिंदु) पर क्लिक करके चाप बनाना।'
              ]
            },
            {
              heading: '2. विशेष टेक्स्ट प्रभाव (Special Text Effects)',
              content: 'टूलबॉक्स के इंटरैक्टिव प्रभाव:',
              points: [
                'ड्रॉप शैडो (Drop Shadow): टेक्स्ट के पीछे यथार्थवादी नरम छाया (Soft Shadow) बनाना जिससे टेक्स्ट बैकग्राउंड से बाहर उभरा हुआ दिखता है।',
                'कंटूर टूल (Contour): टेक्स्ट के अंदर या बाहर संकेंद्रित रंगीन छल्ले/सीमाएं (Concentric Outlines) बनाना (स्टिकर कटिंग और विज्ञापनों में लोकप्रिय)।',
                'एक्सट्रूड (Extrude Tool): 2D टेक्स्ट को गहराई (Depth), प्रकाश (Lighting) और बेवेलिंग देकर 3D ब्लॉक में बदलना।',
                'एनवेलप टूल (Envelope): टेक्स्ट को किसी धनुष, वृत्त या कस्टम आकार के ढांचे में विकृत (Bend/Distort) करना।'
              ]
            }
          ],
          examTip: 'Bézier Pen टूल और Contour Effect (स्टिकर बॉर्डर) का उदाहरण अवश्य लिखें।',
          keyTerms: ['Bézier Tool', 'Pen Tool Tangents', 'Drop Shadow Softness', 'Contour Outlines', '3D Extrude Bevel', 'Envelope Distortion']
        }
      },
      {
        id: 'p8-u3-q5',
        number: 5,
        question: 'Creating Special Object Effects; Using Color Effects समझाइए।',
        topics: ['Blend Tool (Morphing)', 'Transparency Tool (Uniform, Fountain)', 'Interactive Fill (Mesh Fill)', 'PowerClip (Inside Container)'],
        answer: {
          summary: 'ब्लेंड टूल दो आकृतियों के बीच क्रमिक रूपांतरण बनाता है, ट्रांसपेरेंसी टूल पारदर्शी कांच प्रभाव देता है, और पावरक्लिप किसी भी चित्र को मनचाही आकृति के अंदर सुरक्षित रूप से फ्रेम करता है।',
          sections: [
            {
              heading: '1. ब्लेंड टूल (Blend Tool)',
              content: 'दो अलग-अलग आकृतियों और रंगों के बीच क्रमिक रूपांतरण (Morphing) बनाना। उदाहरण: एक छोटे पीले वृत्त से एक बड़े लाल तारे के बीच 20 चरणों का ब्लेंड खींचना। यह 3D ट्यूब और ग्रेडिएंट रिबन बनाने में काम आता है।'
            },
            {
              heading: '2. ट्रांसपेरेंसी टूल (Transparency Tool)',
              content: 'ऑब्जेक्ट्स को आंशिक रूप से पारदर्शी बनाना ताकि नीचे की चीजें दिखाई दें। प्रकार: Uniform (समान), Fountain (एक कोने से दूसरे कोने तक ग्रेडिएंट ट्रांसपेरेंसी), और Pattern Transparency।'
            },
            {
              heading: '3. पावरक्लिप प्रभाव (PowerClip - Object > PowerClip)',
              content: 'कोरलड्रॉ का सर्वाधिक प्रयुक्त प्रभाव: किसी भी फोटो या जटिल पैटर्न को सेलेक्ट करें > Object > PowerClip > "Place Inside Frame" चुनें और किसी आकृति (जैसे दिल का आकार, वृत्त, या टेक्स्ट) पर क्लिक करें। फोटो उस आकृति के अंदर मास्क हो जाती है।'
            },
            {
              heading: '4. मेश फिल टूल (Mesh Fill - M)',
              content: 'ऑब्जेक्ट को एक जटिल ग्रिड में विभाजित करना और प्रत्येक नोड पर अलग-अलग रंग भरकर फोटो-यथार्थवादी (Photo-realistic) शेडिंग और 3D फल या कार डिजाइन करना।'
            }
          ],
          examTip: 'PowerClip (Place Inside Frame) का व्यावहारिक उपयोग परीक्षा में जरूर समझाएं।',
          keyTerms: ['Blend Tool Morphing', 'Fountain Transparency', 'PowerClip Inside Frame', 'Mesh Fill 3D Realism']
        }
      }
    ]
  },
  {
    unitNumber: 4,
    unitRoman: 'Unit IV',
    title: 'ग्रिड, रूलर्स, इमेज ट्रेसिंग, बॉर्डर्स, पेज अरेंजमेंट व मास्किंग',
    questions: [
      {
        id: 'p8-u4-q1',
        number: 1,
        question: 'Using Grid and Rulers समझाइए।',
        topics: ['Rulers Calibration', 'Document Grid vs Pixel Grid', 'Dynamic Guidelines', 'Snap to Grid / Guidelines'],
        answer: {
          summary: 'रूलर्स सटीक मापन प्रदान करते हैं, ग्रिड संरचनात्मक संरेखण सुनिश्चित करती है, और स्नैप कमांड वस्तुओं को चुंबक की तरह सटीक ग्रिड बिंदुओं पर लॉक करती है।',
          sections: [
            {
              heading: '1. रूलर्स का विन्यास (Rulers - View > Rulers)',
              content: 'शीर्ष और बाईं ओर स्थित रूलर्स। रूलर के संगम बिंदु (शून्य बिंदु 0,0) को ड्रैग करके पेज के किसी भी कोने पर रीसेट किया जा सकता है। इकाइयों को Inches, Millimeters, Pixels या Feet में बदला जा सकता है।'
            },
            {
              heading: '2. ग्रिड (Document Grid - View > Grid)',
              content: 'पूरे कार्यक्षेत्र पर दिखाई देने वाला ग्राफ पेपर जैसा महीन जाल। यह लेआउट डिजाइन करते समय प्रत्येक बॉक्स और मार्जिन को एक समान दूरी पर रखने में सहायता करता है।'
            },
            {
              heading: '3. स्नैपिंग और डायनामिक गाइड्स (Snap to)',
              content: 'View > Snap To > "Guidelines" या "Document Grid": जब आप किसी ऑब्जेक्ट को मूव करते हैं, तो वह खुद ब खुद गाइडलाइन या ग्रिड के सबसे करीबी बिंदु पर चिपक जाता है जिससे मानवीय आंख की गलतियाँ समाप्त हो जाती हैं।'
            }
          ],
          examTip: 'Ruler के 0,0 ओरिजिन (Origin) को बदलने का तरीका परीक्षा में लिखें।',
          keyTerms: ['Ruler Origin (0,0)', 'Document Grid Graph', 'Snap to Guidelines', 'Dynamic Alignment Guides']
        }
      },
      {
        id: 'p8-u4-q2',
        number: 2,
        question: 'Tracing Images and Graphics समझाइए।',
        topics: ['Bitmap to Vector Conversion', 'Quick Trace', 'Centerline Trace', 'Outline Trace (Logo, Clipart, High Quality)'],
        answer: {
          summary: 'इमेज ट्रेसिंग (PowerTRACE) निम्न-गुणवत्ता वाली रास्टर बिटमैप इमेज (JPEG/PNG) को संपादन योग्य, उच्च-गुणवत्ता वाले वेक्टर ग्राफिक्स में स्वचालित रूप से बदलने की तकनीक है।',
          sections: [
            {
              heading: '1. बिटमैप ट्रेसिंग की आवश्यकता',
              content: 'जब क्लाइंट कंपनी के लोगो की केवल एक छोटी कम-रेजोल्यूशन वाली व्हाट्सएप फोटो देता है जिसे बड़े होर्डिंग पर छापना होता है, तो उसे सीधे प्रिंट करने पर पिक्सेल फट जाते हैं। ट्रेसिंग उस फोटो को शार्प वेक्टर में बदल देती है।'
            },
            {
              heading: '2. पावरट्रेस के मुख्य प्रकार (Types of Trace)',
              content: 'Bitmaps > Outline Trace मेनू के विकल्प:',
              points: [
                'Quick Trace: एक क्लिक में बिना किसी डायलॉग के बुनियादी ट्रेसिंग।',
                'Line Art / Clipart: काले और सफेद रेखाचित्रों और क्लिपआर्ट के लिए।',
                'Logo: 2 से 4 रंगों वाले सरल कंपनी लोगो के लिए।',
                'Detailed Logo: ग्रेडिएंट्स और बारीक अक्षरों वाले विस्तृत लोगो के लिए।',
                'High Quality Image: जटिल रंगों वाली तस्वीरों को सटीक वेक्टर पाथ्स में बदलना।'
              ]
            },
            {
              heading: '3. ट्रेसिंग डायलॉग सेटिंग्स',
              content: 'Detail स्लाइडर (विवरण बढ़ाना), Smoothing (किनारों को चिकना करना), और "Delete original image" व "Remove background color" पर टिक लगाकर सफेद बैकग्राउंड को स्वतः हटाना।'
            }
          ],
          examTip: 'PowerTRACE के प्रकार (Logo, Clipart, High Quality Image) और बैकग्राउंड हटाने का विकल्प लिखें।',
          keyTerms: ['Bitmap to Vector Trace', 'PowerTRACE Engine', 'Outline Trace Logo', 'Detail & Smoothing', 'Remove Background']
        }
      },
      {
        id: 'p8-u4-q3',
        number: 3,
        question: 'Working with Borders and Page Arrangements समझाइए।',
        topics: ['Page Border Setup', 'Artistic Borders & Frames', 'Page Sorter View', 'Multi-page Brochure Imposition'],
        answer: {
          summary: 'सजावटी बॉर्डर्स प्रमाणपत्रों और शादी के कार्डों को भव्य रूप देते हैं, और पेज सॉर्टर व्यू बहु-पृष्ठ कैटलॉग्स के क्रम और व्यवस्थापन को नियंत्रित करता है।',
          sections: [
            {
              heading: '1. बॉर्डर्स और कॉर्नर फ्रेम्स (Borders & Frames)',
              content: 'पेज की सीमाओं को सजाना:',
              points: [
                'Layout > Page Setup > "Add Page Frame": पेज के सटीक प्रिंट किनारों पर एक क्लिक में आयताकार बॉर्डर लगाना।',
                'सजावटी कॉर्नर्स (Corner Flourishes): वेक्टर कॉर्नर एलिमेंट्स को आयात करके चारों कोनों पर मिरर (Mirror Horizontally / Vertically) करके सटीक बैठाना।',
                'सर्टिफिकेट बॉर्डर्स: ज्यामितीय और क्लासिक गिलोश पैटर्न्स (Guilloche Patterns) का उपयोग।'
              ]
            },
            {
              heading: '2. पेज व्यवस्थापन (Page Sorter View)',
              content: 'View > Page Sorter View: यह सभी पेजों को थंबनेल्स के रूप में एक ही स्क्रीन पर दिखाता है। पेजों को ड्रैग-एंड-ड्रॉप करके उनका क्रम बदला जा सकता है, नए पेज जोड़े या हटाए जा सकते हैं।'
            }
          ],
          examTip: 'Add Page Frame फीचर और Page Sorter View का उल्लेख करें।',
          keyTerms: ['Add Page Frame', 'Decorative Vector Borders', 'Mirror Horizontally/Vertically', 'Page Sorter View']
        }
      },
      {
        id: 'p8-u4-q4',
        number: 4,
        question: 'Using Masking Effects with Text समझाइए।',
        topics: ['Text Masking Concept', 'PowerClip Text (Image Inside Text)', 'Transparency Mask with Text', 'Knockout Effects'],
        answer: {
          summary: 'टेक्स्ट मास्किंग में मोटे, बोल्ड टेक्स्ट को एक खिड़की (Mask) के रूप में उपयोग किया जाता है जिसके अंदर से कोई खूबसूरत लैंडस्केप फोटो, आग की लपटें या धातु का टेक्सचर दिखाई देता है।',
          sections: [
            {
              heading: '1. पावरक्लिप द्वारा टेक्स्ट मास्किंग (PowerClip Text Mask)',
              content: 'चरणबद्ध प्रक्रिया:',
              points: [
                'स्टेप 1: कैनवास पर एक बड़ा, बोल्ड फॉन्ट में शब्द टाइप करें (जैसे "NATURE" या "INDIA" - Impact या Arial Black फॉन्ट, साइज 100pt+)।',
                'स्टेप 2: एक सुंदर उच्च-रेजोल्यूशन प्रकृति या तिरंगे की फोटो आयात करें (Ctrl + I)।',
                'स्टेप 3: फोटो को सेलेक्ट करें > Object > PowerClip > "Place Inside Frame" चुनें।',
                'स्टेप 4: माउस तीर को टेक्स्ट के ऊपर लाकर क्लिक करें। फोटो तुरंत अक्षरों के अंदर समा जाएगी।',
                'स्टेप 5: यदि फोटो की स्थिति ठीक न हो, तो Ctrl दबाकर टेक्स्ट पर क्लिक करें (Edit PowerClip) और फोटो को खिसकाकर Ctrl + Click बाहर करके संपादन समाप्त करें।'
              ]
            },
            {
              heading: '2. ट्रांसपेरेंसी मास्क (Transparency Masking)',
              content: 'टेक्स्ट के ऊपर ग्रेडिएंट ट्रांसपेरेंसी लागू करके अक्षरों को नीचे से ऊपर की ओर धीरे-धीरे गायब (Fade out) होने वाला सिनेमाई प्रभाव देना।'
            }
          ],
          examTip: 'PowerClip Text Maskिंग के 5 चरणों का क्रमबद्ध उत्तर लिखें।',
          keyTerms: ['Text as Mask', 'Bold Impact Font', 'PowerClip Place Inside Frame', 'Edit PowerClip In-place', 'Cinematic Fade Out']
        }
      },
      {
        id: 'p8-u4-q5',
        number: 5,
        question: 'Using Masking Effects with Objects समझाइए।',
        topics: ['Vector Clipping Masks', 'PowerClip Multi-Object Masks', 'Inverting Masks', 'Creative Layout Masking'],
        answer: {
          summary: 'ऑब्जेक्ट मास्किंग में किसी जटिल वेक्टर आकृति या समूह को कंटेनर बनाकर उसके अंदर अन्य ग्राफिक्स को क्लिप किया जाता है जिससे सीमाओं के बाहर का भाग छिप जाता है।',
          sections: [
            {
              heading: '1. ऑब्जेक्ट मास्किंग की कार्यप्रणाली',
              content: 'व्यावसायिक अनुप्रयोग:',
              points: [
                'वेक्टर मास्क: किसी वृत्त या हेक्सागोन (षट्कोण) के अंदर उत्पाद की तस्वीर मास्क करना।',
                'मल्टी-ऑब्जेक्ट कंटेनर: कई आकृतियों को मिलाकर (Ctrl + G Group या Ctrl + L Combine) एक साथ उनके अंदर पूरी तस्वीर को फैलाना।',
                'पॉप-आउट 3D मास्क इफ़ेक्ट: किसी मॉडल के सिर को वृत्त के फ्रेम से बाहर निकलते हुए दिखाना (आधा मास्क अंदर, आधा मास्क बाहर)।'
              ]
            },
            {
              heading: '2. मास्क को एडिट और एक्सट्रेक्ट करना',
              content: 'Right Click > "Extract Contents" द्वारा मास्क की गई सामग्री को कभी भी कंटेनर से अलग करके बाहर निकाला जा सकता है।'
            }
          ],
          examTip: '3D Pop-out Effect (फ्रेम से बाहर निकलता सिर) का रचनात्मक उदाहरण लिखें।',
          keyTerms: ['Vector Clipping Mask', 'Combine Ctrl+L Container', 'Pop-out 3D Effect', 'Extract Contents']
        }
      }
    ]
  },
  {
    unitNumber: 5,
    unitRoman: 'Unit V',
    title: 'एडोब प्रीमियर प्रो, वर्कस्पेस, टाइमलाइन टूल्स, ट्रांजिशन्स व एक्सपोर्ट',
    questions: [
      {
        id: 'p8-u5-q1',
        number: 1,
        question: 'Adobe Premiere: Introduction, Area of Use, Setting up New Project, Workspace (Project Video Display, Selected Clip Display, Project Panel, Timeline Toolbar) समझाइए।',
        topics: ['Premiere Pro Overview', 'Non-Linear Editing (NLE)', 'New Project & Scratch Disks', '4 Quadrant Workspace Panels'],
        answer: {
          summary: 'एडोब प्रीमियर प्रो हॉलीवुड और यूट्यूब इंडस्ट्री का मानक नॉन-लीनियर वीडियो एडिटिंग (NLE) सॉफ्टवेयर है। इसका वर्कस्पेस 4 मुख्य पैनल्स (प्रोजेक्ट, सोर्स मॉनिटर, प्रोग्राम मॉनिटर, टाइमलाइन) में बंटा होता है।',
          sections: [
            {
              heading: '1. एडोब प्रीमियर का परिचय और उपयोग क्षेत्र',
              content: 'पेशेवर वीडियो संपादन:',
              points: [
                'सिनेमा फिल्में, टीवी धारावाहिक, वृत्तचित्र (Documentaries), संगीत वीडियो और यूट्यूब व रील्स कंटेंट निर्माण।',
                'नॉन-लीनियर एडिटिंग (NLE): मूल रॉ फुटेज को नुकसान पहुँचाए बिना (Non-destructive) टाइमलाइन पर किसी भी क्रम में क्लिप्स को काटना, जोड़ना और ट्रिम करना।'
              ]
            },
            {
              heading: '2. 4 मुख्य पैनल्स का वर्कस्पेस (The 4 Quadrant Workspace)',
              content: 'स्क्रीन का क्लासिक विभाजन:',
              table: {
                headers: ['पैनल का नाम', 'स्थिति', 'भूमिका व कार्य'],
                rows: [
                  ['Project Panel (प्रोजेक्ट बिन)', 'निचला बायाँ कोना', 'सभी आयातित रॉ वीडियो, ऑडियो, फोटो और सीक्वेंसेज का मुख्य फोल्डर/बिन'],
                  ['Source Monitor (सोर्स डिस्प्ले)', 'ऊपरी बायाँ कोना', 'व्यक्तिगत रॉ क्लिप को चलाकर देखना और In (I) व Out (O) पॉइंट्स चिह्नित करना'],
                  ['Program Monitor (प्रोग्राम डिस्प्ले)', 'ऊपरी दायाँ कोना', 'टाइमलाइन पर संपादित हो रहे अंतिम वीडियो का लाइव पूर्वावलोकन (Preview)'],
                  ['Timeline Panel (टाइमलाइन)', 'निचला दायाँ कोना', 'मुख्य कार्यक्षेत्र जहाँ वीडियो (V1, V2, V3) और ऑडियो (A1, A2) ट्रैक्स पर क्लिप्स जोड़ी जाती हैं']
                ]
              }
            }
          ],
          examTip: 'प्रीमियर प्रो के 4 पैनल्स का क्लासिक 2x2 ग्रिड आरेख (Project, Source, Program, Timeline) जरूर बनाएं।',
          keyTerms: ['Non-Linear Editing (NLE)', 'Project Panel Bin', 'Source Monitor In/Out', 'Program Monitor Live', 'Timeline V/A Tracks']
        }
      },
      {
        id: 'p8-u5-q2',
        number: 2,
        question: 'Toolbar Description: Selection, Track Select Forward/Backward, Ripple Edit, Rolling Edit, Rate Stretch, Razor, Slip, Slide, Pen, Hand, Zoom समझाइए।',
        topics: ['Timeline Tools Bar', 'Selection (V) & Razor (C)', 'Ripple (B) vs Rolling (N)', 'Rate Stretch (X Speed)', 'Slip (Y) & Slide (U)'],
        answer: {
          summary: 'टाइमलाइन टूलबार में 11 आवश्यक संपादन टूल्स होते हैं। रेज़र टूल क्लिप्स को काटता है और रिपल एडिट कटने के बाद टाइमलाइन के गैप को स्वतः बंद कर देता है।',
          sections: [
            {
              heading: '1. प्रमुख टाइमलाइन टूल्स का विस्तृत विवरण',
              content: 'टूलबार के सभी टूल्स और उनके शॉर्टकट्स:',
              table: {
                headers: ['टूल का नाम', 'शॉर्टकट', 'कार्य और उपयोग'],
                rows: [
                  ['Selection Tool', 'V', 'डिफ़ॉल्ट टूल; क्लिप्स को सेलेक्ट, मूव और ट्रिम करने के लिए'],
                  ['Track Select Forward', 'A', 'कर्सर के आगे मौजूद सभी ट्रैक्स की सभी क्लिप्स को एक साथ सेलेक्ट करना'],
                  ['Ripple Edit Tool', 'B', 'क्लिप को ट्रिम करता है और शेष बची खाली जगह (Gap) को आगे की क्लिप्स को खींचकर स्वतः बंद कर देता है'],
                  ['Rolling Edit Tool', 'N', 'दो क्लिप्स के बीच के कट पॉइंट को खिसकाता है (एक क्लिप बढ़ती है, दूसरी घटती है; कुल अवधि समान रहती है)'],
                  ['Rate Stretch Tool', 'X', 'क्लिप को खींचकर या दबाकर उसकी प्लेबैक गति (Speed/Slow Motion) बदलना'],
                  ['Razor Tool', 'C', 'ब्लेड की तरह क्लिप को किसी भी बिंदु पर दो टुकड़ों में काटना'],
                  ['Slip Tool', 'Y', 'टाइमलाइन पर क्लिप की स्थिति और अवधि बदले बिना उसके अंदर के In और Out फ्रेम बदलना'],
                  ['Slide Tool', 'U', 'क्लिप को पड़ोसी क्लिप्स के ऊपर खिसकाना'],
                  ['Pen, Hand, Zoom', 'P, H, Z', 'कीफ्रेम्स बनाना (Pen), टाइमलाइन को पैन करना (Hand), और ज़ूम इन/आउट (Zoom)']
                ]
              }
            }
          ],
          examTip: 'Selection (V), Razor (C), Ripple (B) और Rate Stretch (X) के शॉर्टकट्स परीक्षा में अवश्य लिखें।',
          keyTerms: ['Selection Tool V', 'Razor Blade C', 'Ripple Edit B (Close Gap)', 'Rolling Edit N', 'Rate Stretch X Slow Motion', 'Slip & Slide']
        }
      },
      {
        id: 'p8-u5-q3',
        number: 3,
        question: 'Importing Files, Sequence, Titles, Video Motion, Video Opacity समझाइए।',
        topics: ['Media Import (Ctrl+I)', 'New Sequence Settings (1080p 24fps)', 'Essential Graphics (Titles)', 'Effect Controls (Position, Scale, Rotation, Opacity, Keyframes)'],
        answer: {
          summary: 'फाइलों को इम्पोर्ट करने के बाद सीक्वेंस बनाया जाता है। इफेक्ट कंट्रोल्स पैनल से मोशन (पोजिशन, स्केल, रोटेशन) और ओपेसिटी को कीफ्रेम्स के जरिए एनिमेट किया जाता है।',
          sections: [
            {
              heading: '1. मीडिया इम्पोर्ट और नया सीक्वेंस (Sequence)',
              content: 'प्रोजेक्ट सेटअप:',
              points: [
                'Import: Project Panel में डबल-क्लिक करें या Ctrl + I दबाकर वीडियो, संगीत और तस्वीरें लोड करें।',
                'Sequence: फाइल को सीधे टाइमलाइन पर ड्रैग करने से फुटेज के अनुसार स्वतः मैचिंग सीक्वेंस बन जाता है (जैसे 1920x1080 Full HD, 24 या 30 FPS)।'
              ]
            },
            {
              heading: '2. टाइटल्स और टेक्स्ट (Essential Graphics)',
              content: 'टाइप टूल (T) से सीधे प्रोग्राम मॉनिटर पर क्लिक करके शीर्षक, लोअर-थर्ड्स (Lower Thirds) और सबटाइटल्स लिखना और Essential Graphics पैनल से फॉन्ट व एनिमेशन सेट करना।'
            },
            {
              heading: '3. वीडियो मोशन और ओपेसिटी (Effect Controls Panel)',
              content: 'क्लिप सेलेक्ट करने पर Effect Controls में बुनियादी ट्रांसफॉर्म गुण:',
              points: [
                'Position (X, Y निर्देशांक): स्क्रीन पर वीडियो को इधर-उधर खिसकाना।',
                'Scale (आकार %): ज़ूम-इन या ज़ूम-आउट करना।',
                'Rotation (कोण): वीडियो को घुमाना।',
                'Opacity (पारदर्शिता 0-100%): फेड-इन या फेड-आउट करना।',
                'कीफ्रेम्स (Keyframes - स्टॉपवॉच आइकन): समय के साथ मोशन बदलने के लिए शुरुआत और अंत में कीफ्रेम लगाना (जैसे धीरे-धीरे ज़ूम होना)।'
              ]
            }
          ],
          examTip: 'Effect Controls में स्टॉपवॉच (Stopwatch) आइकन पर क्लिक करके Keyframe एनिमेशन शुरू होता है, यह लिखें।',
          keyTerms: ['Sequence 1080p 24fps', 'Essential Graphics Lower Thirds', 'Effect Controls Panel', 'Position & Scale', 'Keyframe Animation']
        }
      },
      {
        id: 'p8-u5-q4',
        number: 4,
        question: 'Transition Panel, Effect Panel, Color Correction, Adjusting Video Speed समझाइए।',
        topics: ['Video Transitions (Cross Dissolve, Dip to Black)', 'Video Effects (Lumetri Color, Warp Stabilizer)', 'Color Grading Wheels', 'Speed/Duration (Ctrl+R)'],
        answer: {
          summary: 'ट्रांजिशन्स दो क्लिप्स के बीच सहज बदलाव लाते हैं, ल्यूमेट्री कलर पैनल पेशेवर कलर ग्रेडिंग करता है और वार्प स्टेबलाइजर हिलती हुई फुटेज को स्थिर करता है।',
          sections: [
            {
              heading: '1. वीडियो ट्रांजिशन्स (Video Transitions)',
              content: 'Effects Panel > Video Transitions में उपलब्ध लोकप्रिय बदलाव:',
              points: [
                'Cross Dissolve (Ctrl + D): सबसे मानक ट्रांजिशन जहां पहली क्लिप धीरे-धीरे दूसरी क्लिप में घुलती है।',
                'Dip to Black: दृश्य बदलने पर स्क्रीन पहले धीरे से काली होती है और फिर अगला दृश्य आता है।'
              ]
            },
            {
              heading: '2. ल्यूमेट्री कलर पैनल (Lumetri Color - Color Correction & Grading)',
              content: 'सिनेमाई लुक देने के लिए 6 सेक्शंस:',
              points: [
                'Basic Correction: वाइट बैलेंस (Temperature/Tint), एक्सपोजर, कंट्रास्ट, हाइलाइट्स और शैडोज़ को ठीक करना।',
                'Creative (LUTs): सिनेमाई रंगीन फ़िल्टर लगाना।',
                'Curves & Color Wheels: आरजीबी कर्व्स और शैडो/मिडटोन/हाइलाइट्स के पहिये घुमाकर सटीक रंग देना।'
              ]
            },
            {
              heading: '3. वीडियो गति समायोजन (Speed/Duration - Ctrl + R)',
              content: 'क्लिप पर राइट क्लिक कर "Speed/Duration" चुनें: Speed 50% (स्लो मोशन) या 200% (फास्ट फॉरवर्ड); Reverse Speed (उल्टी दिशा में चलाना)। Time Interpolation में "Optical Flow" चुनने से स्लो मोशन अत्यधिक स्मूथ बनता है।'
            }
          ],
          examTip: 'Cross Dissolve का शॉर्टकट (Ctrl + D), Speed का (Ctrl + R), और Lumetri Color का उल्लेख करें।',
          keyTerms: ['Cross Dissolve Ctrl+D', 'Dip to Black', 'Lumetri Color Grading', 'LUTs Profiles', 'Speed/Duration Ctrl+R', 'Optical Flow']
        }
      },
      {
        id: 'p8-u5-q5',
        number: 5,
        question: 'Saving Project, Exporting Video समझाइए।',
        topics: ['Saving .prproj Project File', 'Export Settings (Ctrl+M)', 'H.264 / MP4 Format', 'Bitrate (VBR 2-Pass)', 'Adobe Media Encoder Queue'],
        answer: {
          summary: 'प्रोजेक्ट सेव करने पर `.prproj` मास्टर फाइल बनती है। अंतिम वीडियो को Ctrl + M दबाकर H.264 (MP4) प्रारूप में यूट्यूब या सोशल मीडिया के लिए एक्सपोर्ट किया जाता है।',
          sections: [
            {
              heading: '1. प्रोजेक्ट सेव करना (Ctrl + S)',
              content: 'File > Save द्वारा प्रोजेक्ट फाइल सहेजी जाती है जिसका एक्सटेंशन `.prproj` (Premiere Project) होता है। यह फाइल केवल प्रोजेक्ट की एडिटिंग टाइमलाइन, कट्स और लिंक्स स्टोर करती है (वास्तविक वीडियो इसमें नहीं होते, इसलिए मूल वीडियो फाइल्स को कभी डिलीट या मूव नहीं करना चाहिए)।'
            },
            {
              heading: '2. अंतिम वीडियो एक्सपोर्ट करना (File > Export > Media - Ctrl + M)',
              content: 'एक्सपोर्ट विंडो की प्रमुख सेटिंग्स:',
              points: [
                'Format: "H.264" (यूट्यूब, टीवी, मोबाइल के लिए विश्व मानक, उच्च गुणवत्ता व छोटा फाइल साइज)।',
                'Preset: "Match Source - High bitrate" या "YouTube 1080p Full HD" या "4K Ultra HD"।',
                'Output Name: वीडियो फाइल का नाम और सेव करने का फोल्डर चुनना (जैसे `MyVideo.mp4`)।',
                'Video Settings: Render at Maximum Depth, Bitrate Encoding (VBR 1-Pass या VBR 2-Pass - टारगेट 15-20 Mbps)।',
                'Audio Settings: AAC, 48000 Hz, Stereo, 320 kbps।'
              ]
            },
            {
              heading: '3. एक्सपोर्ट या कतार (Export vs Queue)',
              content: '"Export" दबाने पर प्रीमियर प्रो सीधे वीडियो रेंडर करता है; जबकि "Queue" दबाने पर यह बैकग्राउंड में Adobe Media Encoder में चला जाता है जिससे आप प्रीमियर में काम जारी रख सकते हैं।'
            }
          ],
          examTip: 'एक्सपोर्ट का शॉर्टकट Ctrl + M, मानक कोडेक H.264 (.mp4), और Adobe Media Encoder का उल्लेख करें।',
          keyTerms: ['.prproj Native File', 'Export Media Ctrl+M', 'H.264 MP4 Standard', 'YouTube 1080p Preset', 'VBR Bitrate', 'Media Encoder Queue']
        }
      }
    ]
  }
];
