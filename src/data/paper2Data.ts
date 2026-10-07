import { Unit } from '../types';

export const paper2Units: Unit[] = [
  {
    unitNumber: 1,
    unitRoman: 'Unit I',
    title: 'विंडोज 11 ऑपरेटिंग सिस्टम, पर्सनलाइजेशन व AI टूल्स',
    questions: [
      {
        id: 'p2-u1-q1',
        number: 1,
        question: 'Windows 11 का Overview, Basic Operations (Start, Login, Logoff, Shutdown) समझाइए।',
        topics: ['Windows 11 Overview', 'Start Menu', 'Login / Sign In', 'Logoff / Sign Out', 'Shutdown Options'],
        answer: {
          summary: 'विंडोज 11 माइक्रोसॉफ्ट का नवीनतम डेस्कटॉप ओएस है जिसमें केंद्रित टास्कबार, गोल कोने (Rounded Corners), स्नैप लेआउट्स और कोपायलट AI एकीकरण है। इसके बुनियादी संचालन सिस्टम स्टार्ट, लॉगिन और सुरक्षित शटडाउन हैं।',
          sections: [
            {
              heading: '1. विंडोज 11 का अवलोकन (Windows 11 Overview)',
              content: 'विंडोज 11 में आधुनिक डिजाइन भाषा (Fluent Design System) का उपयोग किया गया है। प्रमुख मुख्य विशेषताएं:',
              points: [
                'सेंटर्ड टास्कबार और नया स्टार्ट मेनू (पिन किए गए ऐप्स और सुझाई गई फाइल्स के साथ)।',
                'स्नैप लेआउट्स (Snap Layouts) व स्नैप ग्रुप्स (मल्टीटास्किंग के लिए स्क्रीन को 2, 3 या 4 ग्रिड्स में बांटना)।',
                'विजेट्स पैनल (Widgets - मौसम, समाचार, कैलेंडर, शेयर बाजार)।',
                'विंडोज कोपायलट (Copilot - डीप AI इंटीग्रेशन)।',
                'सुरक्षा: TPM 2.0 और सिक्योर बूट (Secure Boot) की अनिवार्यता।'
              ]
            },
            {
              heading: '2. बुनियादी संचालन (Basic Operations)',
              content: 'सिस्टम का दैनिक संचालन निम्न प्रक्रियाओं द्वारा किया जाता है:',
              points: [
                'स्टार्ट / बूटिंग (Start / Booting): पावर बटन दबाने पर UEFI/BIOS हार्डवेयर चेक (POST) करता है और विंडोज कर्नेल को रैम में लोड करके लॉक स्क्रीन प्रस्तुत करता है।',
                'लॉगिन (Login / Sign-in): पासवर्ड, पिन (PIN) या Windows Hello (बायोमेट्रिक फिंगरप्रिंट या फेशियल रिकॉग्निशन) दर्ज करके डेस्कटॉप में प्रवेश करना।',
                'लॉगऑफ / साइन आउट (Sign Out / Lock): जब कई यूजर्स एक कंप्यूटर साझा करते हैं, तो Win + L दबाकर स्क्रीन लॉक की जा सकती है, या Start > Profile Icon > Sign Out पर क्लिक करके वर्तमान सेशन बंद किया जा सकता है।',
                'शटडाउन / रीस्टार्ट / स्लीप (Shutdown, Restart, Sleep): Start बटन पर क्लिक कर Power आइकन चुनें। Shutdown (सभी प्रक्रियाएं बंद कर पीसी ऑफ करना), Restart (ताजा रिबूट करना), और Sleep (कम बिजली पर वर्तमान कार्य रैम में सुरक्षित रखना)।'
              ]
            }
          ],
          examTip: 'Windows Hello और स्नैप लेआउट्स (Snap Layouts) का उल्लेख विंडोज 11 के मुख्य नए फीचर्स के रूप में करें।',
          keyTerms: ['Fluent Design', 'Snap Layouts', 'Windows Hello', 'TPM 2.0', 'Sign Out', 'Sleep Mode']
        }
      },
      {
        id: 'p2-u1-q2',
        number: 2,
        question: 'Desktop Personalization: Background, Screen Saver, Themes, Date & Time, Task Bar, Files & Folders, Shortcuts, Recycle Bin समझाइए।',
        topics: ['Desktop Background', 'Screen Saver', 'Themes', 'Taskbar Settings', 'Files/Folders', 'Shortcuts', 'Recycle Bin'],
        answer: {
          summary: 'डेस्कटॉप पर्सनलाइजेशन के जरिए यूजर अपने कंप्यूटर के लुक और फील को अनुकूलित करता है। इसके अंतर्गत बैकग्राउंड वॉलपेपर, थीम्स, टास्कबार कस्टमाइजेशन और फाइल प्रबंधन शामिल हैं।',
          sections: [
            {
              heading: '1. पर्सनलाइजेशन सेटिंग्स (Personalization)',
              content: 'डेस्कटॉप पर राइट-क्लिक करके "Personalize" चुनकर निम्नलिखित बदलाव किए जा सकते हैं:',
              points: [
                'बैकग्राउंड (Background): पिक्चर (Picture), सॉलिड कलर (Solid Color), स्लाइड शो या विंडोज स्पॉटलाइट चुनना।',
                'थीम्स (Themes): वॉलपेपर, एक्सेंट कलर, साउंड स्कीम और माउस कर्सर का समन्वित संग्रह। Microsoft Store से नई थीम्स डाउनलोड की जा सकती हैं।',
                'स्क्रीन सेवर (Screen Saver): कंप्यूटर निष्क्रिय रहने पर स्क्रीन पर चलने वाला 3D टेक्स्ट, बबल्स या फोटो गैलरी।',
                'डेट और टाइम (Date & Time): टास्कबार के कोने पर समय, टाइम जोन (IST) और ऑटो-सिंक सेटिंग्स।'
              ]
            },
            {
              heading: '2. टास्कबार और नेविगेशन (Taskbar Customization)',
              content: 'टास्कबार सेटिंग्स से आइकनों का संरेखण (Center या Left), टास्कबार आइटम्स (Search, Task View, Widgets) को चालू/बंद करना, और ऑटो-हाइड टास्कबार सेट करना।'
            },
            {
              heading: '3. फाइल्स, फोल्डर्स, शॉर्टकट्स और रिसाइकल बिन',
              content: 'विंडोज में डेटा संगठन की मूल इकाइयाँ:',
              points: [
                'फाइल्स व फोल्डर्स: फाइल डेटा का संग्रह है जबकि फोल्डर (डायरेक्टरी) फाइलों का कंटेनर है। नया फोल्डर बनाने हेतु: Ctrl + Shift + N।',
                'शॉर्टकट (Shortcut): किसी प्रोग्राम या फाइल के वास्तविक पाथ (Path) का त्वरित लिंक, जिसके आइकन पर छोटा घुमावदार तीर (Arrow) होता है।',
                'रिसाइकल बिन (Recycle Bin): डिलीट की गई फाइलों का अस्थायी डस्टबिन। यहाँ से फाइलों को "Restore" (पुनर्प्राप्त) या "Empty Recycle Bin" द्वारा स्थायी रूप से मिटाया जा सकता है (Shift + Delete से सीधे परमानेंट डिलीट)।'
              ]
            }
          ],
          examTip: 'Shift + Delete (स्थायी डिलीट) और Recycle Bin Restore का व्यावहारिक उदाहरण परीक्षा में अवश्य लिखें।',
          keyTerms: ['Fluent Personalize', 'Screen Saver', 'Snap Taskbar', 'Folder Hierarchy', 'Recycle Bin Restore']
        }
      },
      {
        id: 'p2-u1-q3',
        number: 3,
        question: 'Accessories: MS Paint, Notepad, WordPad, Windows Media Player, Calculator; Control Panel: Language Settings, Add/Remove Devices, Software & Fonts समझाइए।',
        topics: ['MS Paint', 'Notepad & WordPad', 'Calculator', 'Control Panel', 'Language & Fonts', 'Programs & Features'],
        answer: {
          summary: 'विंडोज एक्सेसरीज अंतर्निहित मिनी-सॉफ्टवेयर्स हैं जो बुनियादी चित्रकारी, संपादन और गणना में काम आते हैं। कंट्रोल पैनल सिस्टम सेटिंग्स, डिवाइसेस, फोंट्स और प्रोग्राम्स का केंद्रीय प्रशासनिक केंद्र है।',
          sections: [
            {
              heading: '1. विंडोज एक्सेसरीज टूल्स (Windows Accessories)',
              content: 'दैनिक कार्यों के लिए उपयोगी टूल्स:',
              points: [
                'MS Paint: सरल 2D रास्टर ड्राइंग टूल। ब्रश, शेप्स, क्रॉप, रिसाइज और विंडोज 11 में AI कोक्रिएटर (Cocreator) व लेयर्स सपोर्ट।',
                'Notepad: बुनियादी प्लेन-टेक्स्ट एडिटर (Plain Text - .txt)। कोडिंग, एचटीएमएल और त्वरित नोट्स के लिए उपयुक्त।',
                'WordPad: रिच टेक्स्ट एडिटर (Rich Text - .rtf) जिसमें बेसिक फॉन्ट फॉर्मेटिंग, पैराग्राफ एलाइनमेंट और पिक्चर इंसर्ट की सुविधा होती है।',
                'Calculator: मानक (Standard), वैज्ञानिक (Scientific), प्रोग्रामर (Programmer - बाइनरी/हेक्स) और मुद्रा परिवर्तक मोड्स।',
                'Windows Media Player: ऑडियो (MP3, WAV) और वीडियो (MP4, MKV) फाइलों को चलाने व प्लेलिस्ट बनाने का टूल।'
              ]
            },
            {
              heading: '2. कंट्रोल पैनल (Control Panel Management)',
              content: 'कंप्यूटर के हार्डवेयर और सॉफ्टवेयर को नियंत्रित करने वाला मुख्य पैनल:',
              points: [
                'लैंग्वेज सेटिंग्स (Time & Language): कीबोर्ड लेआउट बदलना (जैसे हिंदी इंडिक इनपुट 3, रेमिंगटन गेल/सीबीआई लेआउट जोड़ना)।',
                'डिवाइसेज और प्रिंटर्स (Add/Remove Devices): ब्लूटूथ, नए प्रिंटर या स्कैनर को कनेक्ट करना और उनके ड्राइवर्स मैनेज करना।',
                'प्रोग्राम्स एंड फीचर्स (Add/Remove Programs): सिस्टम से अनचाहे सॉफ्टवेयर को सुरक्षित रूप से अनइंस्टॉल (Uninstall) या रिपेयर करना।',
                'फॉन्ट्स (Fonts): नए फॉन्ट (.ttf, .otf) फाइलों को ड्रैग-एंड-ड्रॉप करके सिस्टम-वाइड इंस्टॉल करना और पूर्वावलोकन देखना।'
              ]
            }
          ],
          examTip: 'Notepad (प्लेन टेक्स्ट) और WordPad (फॉर्मेटेड रिच टेक्स्ट) का अंतर परीक्षा में अक्सर पूछा जाता है।',
          keyTerms: ['MS Paint Cocreator', 'Notepad .txt', 'WordPad .rtf', 'Control Panel', 'Device Manager', 'TrueType Fonts']
        }
      },
      {
        id: 'p2-u1-q4',
        number: 4,
        question: 'Performance Enhancement: Disk Cleanup, Disk Defragmenter की प्रक्रिया लिखिए।',
        topics: ['Disk Cleanup', 'Disk Defragmentation (Optimize Drives)', 'सिस्टम परफॉर्मेंस', 'कस्टम मेंटेनेंस'],
        answer: {
          summary: 'विंडोज कंप्यूटर की गति बढ़ाने और डिस्क स्पेस खाली करने के लिए डिस्क क्लीनअप (अस्थायी फाइलें हटाना) और डिस्क डीफ्रैग्मेंटर (फाइल टुकड़ों को पास लाना) अनिवार्य रखरखाव टूल्स हैं।',
          sections: [
            {
              heading: '1. डिस्क क्लीनअप की कार्यप्रणाली व प्रक्रिया (Disk Cleanup)',
              content: 'यह टूल गैर-जरूरी और अस्थायी फाइलों को पहचानकर सुरक्षित रूप से हटाता है जिससे सी-ड्राइव पर जगह बनती है:',
              points: [
                'प्रक्रिया: 1. Start मेनू में "Disk Cleanup" टाइप करें या Win + R दबाकर "cleanmgr" चलाएं।',
                '2. वह ड्राइव चुनें जिसे साफ करना है (सामान्यतः C: ड्राइव)।',
                '3. टूल ड्राइव को स्कैन करेगा। सूची में से Temporary Files, Thumbnails, Recycle Bin, Temporary Internet Files आदि पर टिक लगाएं।',
                '4. "Clean up system files" पर क्लिक करके पुरानी Windows Update बैकअप फाइलें भी हटाई जा सकती हैं।',
                '5. OK पर क्लिक करें और "Delete Files" की पुष्टि करें।'
              ]
            },
            {
              heading: '2. डिस्क डीफ्रैग्मेंटर / ऑप्टिमाइज़ ड्राइव्स (Disk Defragmenter)',
              content: 'जब हम फाइल्स सेव, एडिट या डिलीट करते हैं, तो फाइलों के टुकड़े हार्ड डिस्क के अलग-अलग सेक्टर्स में बिखर जाते हैं (Fragmentation)। इससे डिस्क हेड को फाइल पढ़ने में अधिक समय लगता है।',
              points: [
                'कार्य: Defragmenter बिखरे हुए डेटा ब्लॉक्स को एक क्रमबद्ध अनुक्रम में पुनः व्यवस्थित करता है, जिससे रीड/राइट स्पीड बढ़ जाती है।',
                'प्रक्रिया: 1. Start में "Defragment and Optimize Drives" खोलें।',
                '2. ड्राइव सेलेक्ट करें और पहले "Analyze" पर क्लिक करें (यह बताएगा कि कितना प्रतिशत फ्रैगमेंटेशन है)।',
                '3. "Optimize" बटन दबाएं। प्रक्रिया पूर्ण होने तक प्रतीक्षा करें।',
                'महत्वपूर्ण नोट: SSD (सॉलिड-स्टेट ड्राइव्स) को पारंपरिक डिफ्रैगमेंटेशन की आवश्यकता नहीं होती, विंडोज उनके लिए स्वचालित TRIM कमांड चलाता है।'
              ]
            }
          ],
          examTip: 'यह स्पष्ट लिखें कि डिफ्रैगमेंटेशन HDD के लिए होता है, जबकि SSDs के लिए TRIM ऑप्टिमाइजेशन उपयुक्त होता है।',
          keyTerms: ['Disk Cleanup', 'cleanmgr', 'Fragmentation', 'Defragmenter', 'Optimize Drives', 'TRIM Command']
        }
      },
      {
        id: 'p2-u1-q5',
        number: 5,
        question: 'AI in daily computing, AI Productivity Tools (ChatGPT, Copilot, Gemini, Notion AI), AI-powered features in Windows (Copilot) समझाइए।',
        topics: ['Daily AI Computing', 'ChatGPT', 'Microsoft Copilot', 'Google Gemini', 'Notion AI', 'Windows Copilot Integration'],
        answer: {
          summary: 'दैनिक कंप्यूटिंग में एआई टूल्स का उपयोग ईमेल ड्राफ्टिंग, कोड जनरेशन, मीटिंग समरी और रचनात्मक सामग्री निर्माण में हो रहा है। विंडोज 11 में एकीकृत कोपायलट ओएस-स्तरीय एआई सहायता प्रदान करता है।',
          sections: [
            {
              heading: '1. दैनिक कंप्यूटिंग में एआई का प्रभाव',
              content: 'आज का व्यक्तिगत कंप्यूटर केवल गणना उपकरण नहीं, बल्कि जनरेटिव एआई के साथ एक व्यक्तिगत बौद्धिक सहायक बन चुका है, जिससे उत्पादकता 40-60% बढ़ जाती है।'
            },
            {
              heading: '2. प्रमुख एआई उत्पादकता टूल्स (Productivity Tools)',
              content: 'आधुनिक पेशेवरों के लिए अनिवार्य एआई प्लेटफॉर्म्स:',
              points: [
                'ChatGPT (OpenAI): वार्तालाप आधारित एआई मॉडल जो लेख, ईमेल, प्रोग्रामिंग कोड, ट्रांसलेशन और जटिल समस्याओं को हल करता है।',
                'Microsoft Copilot: वेब सर्च और माइक्रोसॉफ्ट 365 सुइट में एकीकृत। DALL-E 3 द्वारा इमेज जनरेशन और दस्तावेज़ संपादन में सक्षम।',
                'Google Gemini: गूगल वर्कस्पेस (Docs, Gmail, Drive) से जुड़ा मल्टीमॉडल एआई जो टेक्स्ट, इमेज, वीडियो और कोड को एक साथ समझता है।',
                'Notion AI: वर्कस्पेस और नोट्स ऐप में एकीकृत एआई जो डॉक्यूमेंट्स का सारांश बनाता है, स्पेलिंग सुधारता है और एक्शन आइटम्स निकालता है।'
              ]
            },
            {
              heading: '3. विंडोज 11 में Copilot के AI-संचालित फीचर्स',
              content: 'Win + C दबाते ही स्क्रीन के दाईं ओर कोपायलट साइडबार खुलता है:',
              points: [
                'सिस्टम सेटिंग्स बदलना: "Turn on Dark Mode", "Mute Volume", "Turn on Bluetooth" जैसी प्राकृतिक भाषा कमांड से सेटिंग्स बदलना।',
                'स्क्रीनशॉट विश्लेषण: Snipping Tool से स्नैपशॉट लेकर कोपायलट से पूछना कि उस तस्वीर में क्या है या टेक्स्ट निकालना।',
                'फाइल और वेब सारांश: एज ब्राउज़र में खुली किसी भी 50-पेज की पीडीएफ का तुरंत एक पैराग्राफ में सार प्रस्तुत करना।'
              ]
            }
          ],
          examTip: 'विंडोज में कोपायलट खोलने का शॉर्टकट (Win + C) और इसके वॉयस/टेक्स्ट कमांड्स का उदाहरण परीक्षा में लिखें।',
          keyTerms: ['Generative AI', 'ChatGPT', 'Copilot Win+C', 'Google Gemini', 'Notion AI', 'Snipping Tool AI']
        }
      }
    ]
  },
  {
    unitNumber: 2,
    unitRoman: 'Unit II',
    title: 'ऑफिस सुइट्स, एमएस वर्ड बेसिक्स, टेक्स्ट फॉर्मेटिंग व गूगल डॉक्स',
    questions: [
      {
        id: 'p2-u2-q1',
        number: 1,
        question: 'Modern office activities, software requirements, office suites (OpenOffice, LibreOffice, WPS, Google Docs, MS Office) की तुलना करें।',
        topics: ['Modern Office Work', 'Office Suites Comparison', 'OpenOffice', 'LibreOffice', 'WPS Office', 'Google Docs', 'MS Office'],
        answer: {
          summary: 'आधुनिक कार्यालयों में दस्तावेजीकरण, पत्राचार, डेटा विश्लेषण और प्रेजेंटेशन की आवश्यकता होती है। इसके लिए माइक्रोसॉफ्ट ऑफिस, लिब्रेऑफिस, डब्ल्यूपीएस और गूगल डॉक्स जैसे विभिन्न ऑफिस सुइट्स उपलब्ध हैं।',
          sections: [
            {
              heading: '1. आधुनिक कार्यालयीन गतिविधियाँ व सॉफ्टवेयर आवश्यकताएं',
              content: 'एक आधुनिक डिजिटल कार्यालय में दैनिक कार्यप्रणाली:',
              points: [
                'डॉक्यूमेंटेशन और पत्र व्यवहार (Word Processor आवश्यक)।',
                'बजट, वेतन गणना, इन्वेंटरी और टैक्स ऑडिट (Spreadsheet आवश्यक)।',
                'क्लाइंट प्रपोजल, सेमिनार और मीटिंग्स (Presentation Tool आवश्यक)।',
                'ईमेल और शेड्यूलिंग (Email Client आवश्यक)।'
              ]
            },
            {
              heading: '2. प्रमुख ऑफिस सुइट्स की तुलनात्मक तालिका',
              content: 'लागत, प्लेटफॉर्म और विशेषताओं के आधार पर तुलना:',
              table: {
                headers: ['ऑफिस सुइट', 'प्रकार / लाइसेंस', 'प्लेटफॉर्म सपोर्ट', 'विशेष खूबियाँ / कमियाँ'],
                rows: [
                  ['Microsoft Office (M365)', 'कमर्शियल (सशुल्क)', 'Windows, Mac, Web, Mobile', 'उद्योग मानक (Industry Standard), सर्वाधिक शक्तिशाली फीचर्स, Copilot AI'],
                  ['Google Docs / Workspace', 'क्लाउड-आधारित (मुफ्त / बिज़नेस)', 'वेब ब्राउज़र, Android, iOS', 'सर्वश्रेष्ठ रीयल-टाइम टीम कोलैबोरेशन, ऑटो-सेव ड्राइव, Gemini AI'],
                  ['LibreOffice', 'ओपन-सोर्स (पूर्णतः निःशुल्क)', 'Windows, Linux, Mac', 'विज्ञापनों से मुक्त, कोई सदस्यता शुल्क नहीं, लिनक्स पर डिफ़ॉल्ट'],
                  ['WPS Office', 'फ्रीमियम (विज्ञापन / प्रो)', 'Windows, Android, iOS, Linux', 'टैब्ड इंटरफेस, पीडीएफ एडिटिंग टूल शामिल, हल्का सॉफ्टवेयर'],
                  ['Apache OpenOffice', 'ओपन-सोर्स (मुफ्त)', 'Windows, Linux, Mac', 'पुराना लोकप्रिय ओपन-सोर्स प्रोजेक्ट, अब अपडेट्स धीमे']
                ]
              }
            }
          ],
          examTip: 'Google Docs का सबसे बड़ा लाभ "Real-time Collaboration" (एक ही डॉक्यूमेंट पर कई लोग एक साथ काम करना) जरूर लिखें।',
          keyTerms: ['Office Suite', 'Proprietary vs Open Source', 'Real-time Collaboration', 'LibreOffice Writer', 'WPS Tabbed UI']
        }
      },
      {
        id: 'p2-u2-q2',
        number: 2,
        question: 'MS Word: Introduction, Features, Menus, Ribbon, Toolbars, Wizards, Templates, Creating Document, Page Views/Layouts समझाइए।',
        topics: ['MS Word Intro', 'Ribbon Interface', 'Quick Access Toolbar', 'Templates & Wizards', 'Page Views'],
        answer: {
          summary: 'MS Word दुनिया का सर्वाधिक प्रयुक्त वर्ड प्रोसेसर है। इसका रिबन इंटरफेस, टेम्प्लेट्स, और विभिन्न पेज व्यूज पेशेवर डॉक्यूमेंट्स बनाने के लिए व्यापक सुविधाएं देते हैं।',
          sections: [
            {
              heading: '1. एमएस वर्ड का परिचय एवं प्रमुख विशेषताएं',
              content: 'माइक्रोसॉफ्ट वर्ड में स्पेल-चेक, ग्रामर-चेक, ऑटो-करेक्ट, मेल मर्ज, टेबल इंसर्ट, ग्राफिक्स और स्टाइल शीट्स की समृद्ध सुविधाएं हैं। फाइल एक्सटेंशन `.docx` होता है।'
            },
            {
              heading: '2. इंटरफेस घटक (Ribbon, Menus & Toolbars)',
              content: 'वर्ड विंडो के प्रमुख भाग:',
              points: [
                'रिबन (Ribbon): शीर्ष पर स्थित टैब्स (Home, Insert, Layout, References, Review, View) का समूह। प्रत्येक टैब संबंधित कमांड्स के ग्रुप्स में विभाजित होता है।',
                'क्विक एक्सेस टूलबार (QAT): सबसे ऊपर बाएं कोने में स्थित टूलबार (Save, Undo, Redo) जिसे कस्टमाइज किया जा सकता है।',
                'टेम्प्लेट्स (Templates) और विज़ार्ड्स: पहले से डिजाइन किए गए रेडीमेड फॉर्मेट्स (रेज़्यूमे, ब्रोशर, लेटरहेड) जिनका उपयोग करके तुरंत काम शुरू किया जा सकता है।'
              ]
            },
            {
              heading: '3. नया डॉक्यूमेंट बनाना और सेव करना',
              content: 'File > New > Blank Document (या Ctrl + N)। सेव करने हेतु File > Save As (Ctrl + S) दबाकर फोल्डर और फाइल का नाम चुनें।'
            },
            {
              heading: '4. विभिन्न पेज व्यूज (Page Views / Layouts)',
              content: 'डॉक्यूमेंट को देखने के विभिन्न तरीके:',
              points: [
                'Print Layout (डिफ़ॉल्ट व्यू): डॉक्यूमेंट छपने पर कैसा दिखेगा (मार्जिन, हेडर/फुटर सहित)।',
                'Read Mode (फुल स्क्रीन रीडिंग): बिना किसी टूलबार के पढ़ने के लिए अनुकूलित पुस्तक जैसी स्क्रीन।',
                'Web Layout: वेब ब्राउज़र पर पेज कैसा दिखेगा।',
                'Outline View: हेडिंग्स और सब-हेडिंग्स की पदानुक्रमित संरचना देखने हेतु।',
                'Draft View: त्वरित टेक्स्ट टाइपिंग और एडिटिंग के लिए बिना मार्जिन का व्यू।'
              ]
            }
          ],
          examTip: 'पांचों पेज व्यूज (Print Layout, Read Mode, Web Layout, Outline, Draft) को पॉइंट्स में स्पष्ट करें।',
          keyTerms: ['Ribbon Tabs', 'Quick Access Toolbar', 'Templates .dotx', 'Print Layout', 'Read Mode', 'Outline View']
        }
      },
      {
        id: 'p2-u2-q3',
        number: 3,
        question: 'Text Enhancements, Fonts, Styles, Formatting (Autoformat, Paragraph, Page, Line Spacing, Margins, Borders, Shading, Tabs, Indents, Bullets, Numbering, Printing, Spell Check, Headers/Footers) समझाइए।',
        topics: ['Text Formatting', 'Paragraph Spacing', 'Margins & Borders', 'Tabs & Indents', 'Bullets & Numbering', 'Header/Footer', 'Spell Check'],
        answer: {
          summary: 'वर्ड में टेक्स्ट, पैराग्राफ और पेज स्तर पर व्यापक फॉर्मेटिंग टूल्स उपलब्ध हैं। इनमें फॉन्ट स्टाइलिंग, मार्जिन, लाइन स्पेसिंग, इंडेंटेशन, हेडर-फुटर और स्पेलिंग चेक मुख्य हैं।',
          sections: [
            {
              heading: '1. फॉन्ट और कैरेक्टर फॉर्मेटिंग (Font Formatting)',
              content: 'होम टैब के फॉन्ट ग्रुप में: Font Family (Calibri, Times New Roman, Mangal), Font Size, Bold (Ctrl+B), Italic (Ctrl+I), Underline (Ctrl+U), Strikethrough, Subscript (x₂ - Ctrl+=), Superscript (x² - Ctrl+Shift++), Text Highlight Color और Font Color।'
            },
            {
              heading: '2. पैराग्राफ फॉर्मेटिंग (Paragraph Formatting)',
              content: 'टेक्स्ट के प्रवाह और लेआउट का नियंत्रण:',
              points: [
                'संरेखण (Alignment): Left (Ctrl+L), Center (Ctrl+E), Right (Ctrl+R), Justify (Ctrl+J)।',
                'लाइन व पैराग्राफ स्पेसिंग: 1.0, 1.15, 1.5 या 2.0 लाइनों की दूरी सेट करना।',
                'इंडेंटेशन (Indents): Left Indent, Right Indent, First Line Indent और Hanging Indent।',
                'टैब्स (Tab Stops): Tab कुंजी दबाने पर कर्सर के रुकने की दूरी (Left, Right, Center, Decimal Tab)।',
                'बुलेट्स और नंबरिंग: लिस्ट्स को अनऑर्डर्ड (Dots/Ticks) या ऑर्डर्ड (1, 2, 3 / a, b, c) बनाना।'
              ]
            },
            {
              heading: '3. पेज फॉर्मेटिंग, बॉर्डर्स व हेडर-फुटर',
              content: 'दस्तावेज़ की संपूर्ण संरचना:',
              points: [
                'मार्जिन (Margins): पेज के चारों कोनों से छोड़ी गई खाली जगह (Normal, Narrow, Wide)।',
                'बॉर्डर्स और शेडिंग (Borders & Shading): पेज बॉर्डर या पैराग्राफ के चारों ओर बॉक्स व बैकग्राउंड रंग।',
                'हेडर और फुटर (Header & Footer): पृष्ठ के शीर्ष (Header) और तल (Footer) पर स्वतः दोहराई जाने वाली जानकारी (जैसे दस्तावेज़ शीर्षक, पेज नंबर, लेखक का नाम)।'
              ]
            },
            {
              heading: '4. स्पेल चेक और प्रिंटिंग (Proofing & Printing)',
              content: 'F7 कुंजी दबाकर Spelling & Grammar चेकर चालू होता है (लाल रेखा = स्पेलिंग त्रुटि, नीली रेखा = व्याकरण त्रुटि)। Ctrl + P दबाकर प्रिंटर चयन, पेज रेंज और प्रतियों की संख्या चुनकर प्रिंट निकाला जाता है।'
            }
          ],
          examTip: 'लाल लहरदार रेखा (Spelling Error) और नीली/हरी रेखा (Grammar Error) का अंतर जरूर लिखें।',
          keyTerms: ['Subscript/Superscript', 'Alignment Ctrl+J', 'Hanging Indent', 'Header & Footer', 'Spelling F7', 'Print Preview']
        }
      },
      {
        id: 'p2-u2-q4',
        number: 4,
        question: 'MS Word में Table बनाना और Edit करना सिखाइए।',
        topics: ['Insert Table', 'Draw Table', 'Merge & Split Cells', 'Table Styles', 'Formulas in Table'],
        answer: {
          summary: 'एमएस वर्ड में तालिका (Table) पंक्तियों (Rows) और स्तंभों (Columns) का जाल होती है। इसके जरिए डेटा को व्यवस्थित, तुलनात्मक और सारणीबद्ध रूप में प्रस्तुत किया जाता है।',
          sections: [
            {
              heading: '1. टेबल बनाने की विधियाँ (Creating a Table)',
              content: 'वर्ड में टेबल बनाने के तीन प्रमुख तरीके हैं:',
              points: [
                'विधि 1 (Grid Selector): Insert Tab > Table पर क्लिक करें और माउस को ग्रिड पर ड्रैग करके आवश्यक Rows और Columns (जैसे 4x3) चुनें।',
                'विधि 2 (Insert Table Dialog): Insert > Table > "Insert Table..." पर क्लिक करें और Number of Columns तथा Number of Rows की संख्या टाइप करें।',
                'विधि 3 (Draw Table): Insert > Table > "Draw Table" चुनकर पेंसिल कर्सर से स्क्रीन पर मनचाही तालिका बनाएं।'
              ]
            },
            {
              heading: '2. टेबल का संपादन (Editing Table)',
              content: 'टेबल पर क्लिक करते ही दो नए संदर्भ टैब (Table Design और Layout) खुलते हैं:',
              points: [
                'पंक्ति/स्तंभ जोड़ना व हटाना: Layout Tab > Insert Above / Insert Below (रो जोड़ने के लिए) या Insert Left / Insert Right (कॉलम जोड़ने के लिए)। हटाने के लिए Delete > Delete Rows / Columns।',
                'सेल्स को मर्ज करना (Merge Cells): दो या दो से अधिक चुनिंदा सेल्स को मिलाकर एक सेल बनाना (जैसे हेडिंग के लिए)।',
                'सेल्स को विभाजित करना (Split Cells): एक सेल को कई पंक्तियों या स्तंभों में विभाजित करना।',
                'ऑटोफिट (AutoFit): AutoFit Contents (डेटा के अनुसार चौड़ाई) या AutoFit Window (पेज की चौड़ाई के अनुसार)।',
                'टेबल डिजाइन और बॉर्डर्स: Table Design टैब से विभिन्न रंगीन टेबल स्टाइल्स, बॉर्डर्स और शेडिंग लगाना।'
              ]
            }
          ],
          examTip: 'तालिका बनाने के चरणों के साथ Merge Cells और Split Cells का स्पष्ट अंतर लिखें।',
          keyTerms: ['Insert Table', 'Rows & Columns', 'Merge Cells', 'Split Cells', 'Table Layout Tab', 'AutoFit']
        }
      },
      {
        id: 'p2-u2-q5',
        number: 5,
        question: 'Google Docs, Smart Compose, AI Summarizer के बारे में लिखिए।',
        topics: ['Google Docs Cloud', 'Smart Compose & Autocomplete', 'AI Summarization', 'Real-time Sharing'],
        answer: {
          summary: 'गूगल डॉक्स एक क्लाउड-आधारित वर्ड प्रोसेसर है जो बिना इंस्टॉल किए सीधे ब्राउज़र में चलता है। इसमें स्मार्ट कंपोज़ और एआई समराइज़र जैसी उन्नत मशीन लर्निंग सुविधाएं अंतर्निहित हैं।',
          sections: [
            {
              heading: '1. गूगल डॉक्स की मुख्य विशेषताएँ',
              content: 'गूगल वर्कस्पेस का प्रमुख टूल:',
              points: [
                'क्लाउड ऑटो-सेव: प्रत्येक शब्द टाइप करते ही गूगल ड्राइव में तुरंत सेव होता है, डेटा खोने का शून्य जोखिम।',
                'रीयल-टाइम कोलैबोरेशन: एक ही डॉक्यूमेंट पर दुनिया भर से कई लोग एक साथ मिलकर टाइप कर सकते हैं और कमेंट्स दे सकते हैं।',
                'वर्जन हिस्ट्री (Version History): पुराने किसी भी संशोधन पर एक क्लिक में वापस जाने की सुविधा।'
              ]
            },
            {
              heading: '2. स्मार्ट कंपोज़ (Smart Compose)',
              content: 'गूगल का एआई-संचालित ऑटो-कम्प्लीट फीचर। जैसे ही आप टाइप करना शुरू करते हैं, यह अगले संभावित शब्दों और पूरे वाक्यों का हल्का ग्रे सुझाव (Ghost Text) प्रस्तुत करता है। केवल "Tab" की दबाते ही वह वाक्य अपने आप पूरा हो जाता है, जिससे टाइपिंग स्पीड दोगुनी हो जाती है।'
            },
            {
              heading: '3. एआई समराइज़र और हेल्प मी राइट (AI Summarizer)',
              content: 'गूगल जेमिनी एआई का एकीकरण:',
              points: [
                'दस्तावेज़ का स्वचालित सारांश: लंबे 20-30 पेज के रिसर्च पेपर या मीटिंग नोट्स के शीर्ष पर एक क्लिक में मुख्य बिंदुओं का बुलेट सारांश प्रस्तुत करता है।',
                'Help Me Write: प्रॉम्प्ट लिखकर जैसे "Draft a leave application for 3 days" लिखने पर संपूर्ण औपचारिक पत्र कुछ सेकंडों में जनरेट कर देता है।'
              ]
            }
          ],
          examTip: 'स्मार्ट कंपोज़ में वाक्य पूरा करने के लिए "Tab" कुंजी दबाई जाती है, इसका उल्लेख करें।',
          keyTerms: ['Google Docs', 'Version History', 'Smart Compose Tab Key', 'Ghost Text', 'Gemini AI Summarizer']
        }
      }
    ]
  },
  {
    unitNumber: 3,
    unitRoman: 'Unit III',
    title: 'ग्राफिक्स, वर्डआर्ट, मेल मर्ज, मैक्रोज़ व AI राइटिंग टूल्स',
    questions: [
      {
        id: 'p2-u3-q1',
        number: 1,
        question: 'Graphics in MS Word: Importing Graphics, Clipart, Insert Picture, Shapes, SmartArt, Drawing Features समझाइए।',
        topics: ['Insert Picture', 'Shapes Tool', 'SmartArt Graphics', 'Text Wrapping', 'Picture Styles'],
        answer: {
          summary: 'एमएस वर्ड में डॉक्यूमेंट को आकर्षक बनाने के लिए चित्र, रेडीमेड शेप्स, क्लिपआर्ट और स्मार्टआर्ट ग्राफिक्स जोड़े जा सकते हैं। इंसर्ट टैब के जरिए इन्हें आसानी से फॉर्मेट किया जाता है।',
          sections: [
            {
              heading: '1. पिक्चर इंसर्ट करना (Insert Picture & Clipart)',
              content: 'कंप्यूटर से फोटो या ऑनलाइन इमेज जोड़ना:',
              points: [
                'प्रक्रिया: Insert Tab > Illustrations Group > Pictures > "This Device" (या Online Pictures) चुनें।',
                'पिक्चर फॉर्मेटिंग: पिक्चर सेलेक्ट करने पर "Picture Format" टैब खुलता है, जिससे Remove Background, Corrections (Brightness/Contrast), Color Effects, Picture Styles (3D Frames, Shadows) लगाए जा सकते हैं।',
                'टेक्स्ट रैपिंग (Wrap Text): चित्र के चारों ओर टेक्स्ट को व्यवस्थित करना (In Line with Text, Square, Tight, Behind Text, In Front of Text)।'
              ]
            },
            {
              heading: '2. शेप्स और ड्राइंग टूल्स (Shapes & Drawing Features)',
              content: 'Insert > Shapes से रेखाएं, आयत, तीर (Arrows), बैनर, कॉलआउट्स और फ्लोचार्ट सिम्बल्स खींचना। Shape Format टैब से Shape Fill, Shape Outline और 3D Effects देना।'
            },
            {
              heading: '3. स्मार्टआर्ट ग्राफिक्स (SmartArt Graphics)',
              content: 'जटिल सूचनाओं, सूचियों और पदानुक्रम को विजुअल आरेखों में बदलने का टूल:',
              points: [
                'प्रकार: List, Process (प्रक्रिया प्रवाह), Cycle (चक्रीय प्रक्रिया), Hierarchy (संगठनात्मक चार्ट), Relationship, Matrix, Pyramid।'
              ]
            }
          ],
          examTip: 'Wrap Text के विभिन्न विकल्पों (Square, Tight, Behind Text) का आरेख बनाकर समझाएं।',
          keyTerms: ['Insert Picture', 'Wrap Text', 'Picture Styles', 'Shapes', 'SmartArt Hierarchy', 'Flowchart']
        }
      },
      {
        id: 'p2-u3-q2',
        number: 2,
        question: 'WordArt, Drop Cap, Templates का उपयोग कैसे करें? लिखिए।',
        topics: ['WordArt Styles', 'Drop Cap (Dropped vs Margin)', 'Templates Usage'],
        answer: {
          summary: 'वर्डआर्ट फैंसी डेकोरेटिव टेक्स्ट बनाने, ड्रॉप कैप पैराग्राफ के पहले अक्षर को विशाल आकार देने तथा टेम्प्लेट्स पेशेवर लेआउट तुरंत तैयार करने के लिए उपयोगी हैं।',
          sections: [
            {
              heading: '1. वर्डआर्ट (WordArt)',
              content: 'टेक्स्ट को कलात्मक रूप से सजाने का टूल:',
              points: [
                'प्रक्रिया: Insert Tab > Text Group > WordArt आइकन पर क्लिक करें और मनचाही स्टाइल चुनें।',
                'टेक्स्ट टाइप करें। इसके बाद Shape Format टैब से Text Fill, Text Outline और Text Effects (Shadow, Reflection, Glow, 3D Rotation, Transform / Curve) लागू करें।'
              ]
            },
            {
              heading: '2. ड्रॉप कैप (Drop Cap)',
              content: 'समाचार पत्रों और पत्रिकाओं की तरह किसी पैराग्राफ के पहले अक्षर को बड़ा (3 या अधिक पंक्तियों की ऊंचाई के बराबर) बनाना:',
              points: [
                'प्रक्रिया: पैराग्राफ में कर्सर रखें > Insert Tab > Drop Cap चुनें।',
                'दो मुख्य शैलियाँ: 1. Dropped (अक्षर बड़ा होकर पैराग्राफ के अंदर 3 पंक्तियों को घेरता है), 2. In Margin (अक्षर बाएं मार्जिन में बाहर स्थित होता है)।'
              ]
            },
            {
              heading: '3. टेम्प्लेट्स का उपयोग (Using Templates)',
              content: 'File > New पर क्लिक करें। सर्च बार में "Resume", "Brochure", "Invoice", "Certificate" खोजें। मनचाहा टेम्प्लेट चुनकर "Create" पर क्लिक करें और प्लेसहोल्डर टेक्स्ट को अपने विवरण से बदलें।'
            }
          ],
          examTip: 'Drop Cap की दोनों शैलियों (Dropped और In Margin) का अंतर स्पष्ट लिखें।',
          keyTerms: ['WordArt Transform', 'Drop Cap Dropped', 'In Margin', 'Pre-designed Templates', 'Placeholders']
        }
      },
      {
        id: 'p2-u3-q3',
        number: 3,
        question: 'Mail Merge: Concept, Envelopes, Mailing Labels की प्रक्रिया समझाइए।',
        topics: ['Mail Merge Concept', 'Main Document', 'Data Source', 'Merged Document', 'Envelopes & Labels'],
        answer: {
          summary: 'मेल मर्ज एमएस वर्ड का एक अत्यंत शक्तिशाली फीचर है जिसके द्वारा एक ही पत्र (Letter), लिफाफे (Envelopes) या लेबल्स (Labels) को सैकड़ों अलग-अलग प्राप्तकर्ताओं के नाम और पते के साथ स्वतः व्यक्तिगत रूप से तैयार किया जाता है।',
          sections: [
            {
              heading: '1. मेल मर्ज की मूल अवधारणा (Mail Merge Concept)',
              content: 'मेल मर्ज प्रक्रिया में तीन मुख्य घटक होते हैं:',
              points: [
                '1. मुख्य दस्तावेज़ (Main Document): वह मूल पत्र जिसमें वह संदेश होता है जो सभी प्राप्तकर्ताओं के लिए समान रहता है।',
                '2. डेटा स्रोत (Data Source / Recipient List): वह फाइल (Excel शीट, Access डेटाबेस या Outlook संपर्क) जिसमें प्राप्तकर्ताओं के नाम, पते, मोबाइल नंबर आदि रिकॉर्ड होते हैं।',
                '3. मर्ज दस्तावेज़ (Merged Document): मुख्य दस्तावेज़ और डेटा स्रोत को मिलाकर तैयार किए गए अंतिम व्यक्तिगत पत्रों का समूह।'
              ]
            },
            {
              heading: '2. मेल मर्ज के चरणबद्ध स्टेप्स',
              content: 'मेल मर्ज करने की चरण-दर-चरण प्रक्रिया:',
              points: [
                'स्टेप 1: Mailings Tab > Start Mail Merge > Letters (या Step-by-Step Mail Merge Wizard) चुनें।',
                'स्टेप 2: Select Recipients > "Use an Existing List..." चुनें और अपनी एक्सेल फाइल लोड करें।',
                'स्टेप 3: पत्र में जहाँ नाम और पता चाहिए, वहाँ Mailings > "Insert Merge Field" (जैसे «Name», «City») इंसर्ट करें।',
                'स्टेप 4: "Preview Results" पर क्लिक करके देख लें कि नाम सही आ रहे हैं।',
                'स्टेप 5: "Finish & Merge" > "Edit Individual Documents" या सीधे "Print Documents" पर क्लिक करें।'
              ]
            },
            {
              heading: '3. लिफाफे (Envelopes) और मेलिंग लेबल्स (Labels)',
              content: 'Mailings > Envelopes से डिलीवरी एड्रेस व रिटर्न एड्रेस सेट करके प्रिंट किया जाता है। Labels से स्टिकर शीट्स पर एक साथ कई ग्राहकों के पते प्रिंट किए जा सकते हैं।'
            }
          ],
          examTip: 'मेल मर्ज के तीनों घटक (Main Document, Data Source, Merged Document) की परिभाषा अवश्य लिखें।',
          keyTerms: ['Main Document', 'Data Source', 'Merge Fields « »', 'Envelopes', 'Mailing Labels', 'Finish & Merge']
        }
      },
      {
        id: 'p2-u3-q4',
        number: 4,
        question: 'Import/Export Formats, Macros: Introduction, Recording, Editing, Running समझाइए।',
        topics: ['Import & Export Formats (PDF, RTF, TXT)', 'Macros Intro', 'Record Macro', 'Run Macro', 'VBA Code'],
        answer: {
          summary: 'वर्ड विभिन्न फाइल प्रारूपों (PDF, HTML, RTF) में डेटा आयात/निर्यात कर सकता है। मैक्रो दोहराव वाले कार्यों को रिकॉर्ड करके एक शॉर्टकट की से स्वचालित (Automate) करने का टूल है।',
          sections: [
            {
              heading: '1. इम्पोर्ट और एक्सपोर्ट प्रारूप (Import / Export Formats)',
              content: 'फाइलों का आदान-प्रदान:',
              points: [
                'Export to PDF / XPS: File > Export > Create PDF/XPS। बिना फॉन्ट बिगड़े सुरक्षित और सार्वभौमिक रूप से साझा करने योग्य।',
                'RTF (Rich Text Format): विभिन्न वर्ड प्रोसेसर्स के बीच स्टाइलिंग सहित साझा करने योग्य प्रारूप।',
                'Plain Text (.txt): केवल कच्चा टेक्स्ट बिना किसी फॉर्मेटिंग के।',
                'PDF Reflow (Import): वर्ड 2013+ में किसी भी पीडीएफ फाइल को सीधे वर्ड में खोलकर संपादन योग्य दस्तावेज़ में बदला जा सकता है।'
              ]
            },
            {
              heading: '2. मैक्रो क्या है? (What is a Macro?)',
              content: 'मैक्रो कीस्ट्रोक्स और माउस क्लिक्स की एक रिकॉर्ड की गई श्रृंखला है जो Visual Basic for Applications (VBA) कोड के रूप में सहेजी जाती है। इसका उपयोग बार-बार किए जाने वाले फॉर्मेटिंग कार्यों को एक क्लिक में करने हेतु होता है।'
            },
            {
              heading: '3. मैक्रो रिकॉर्ड करने और चलाने की प्रक्रिया',
              content: 'चरण-दर-चरण विधि:',
              points: [
                'रिकॉर्ड करना: View Tab (या Developer Tab) > Macros > "Record Macro" पर क्लिक करें।',
                'मैक्रो का नाम दें (जैसे MyHeaderFormat) और उसे एक Keyboard Shortcut (जैसे Alt + H) या Button असाइन करें।',
                'OK दबाते ही माउस कर्सर कैसेट टेप आइकन में बदल जाता है। अब जो भी फॉर्मेटिंग (फॉन्ट, साइज, कलर) आप करेंगे, वह रिकॉर्ड होगा।',
                'कार्य पूरा होने पर View > Macros > "Stop Recording" पर क्लिक करें।',
                'चलाना (Run): भविष्य में कभी भी Alt + H दबाते ही या Macros > "View Macros" > Run चुनते ही संपूर्ण कार्य सेकंडों में पूरा हो जाएगा।'
              ]
            }
          ],
          examTip: 'मैक्रो VBA (Visual Basic for Applications) में कोड स्टोर करता है, इस तथ्य को लिखें।',
          keyTerms: ['PDF Export', 'PDF Reflow', 'Macro Automation', 'VBA Code', 'Record Macro', 'Stop Recording']
        }
      },
      {
        id: 'p2-u3-q5',
        number: 5,
        question: 'AI-generated Templates, AI tools for grammar checking and content suggestions के बारे में लिखिए।',
        topics: ['AI Templates', 'Grammarly', 'Microsoft Editor', 'QuillBot Paraphrasing', 'Content Suggestions'],
        answer: {
          summary: 'आधुनिक लेखन में एआई-संचालित टेम्प्लेट्स, व्याकरण सुधारक और रीफ्रेजिंग टूल्स लेखकों की उत्पादकता, सटीकता और शब्दावली को अभूतपूर्व रूप से समृद्ध करते हैं।',
          sections: [
            {
              heading: '1. एआई-जनरेटेड टेम्प्लेट्स (AI-generated Templates)',
              content: 'पारंपरिक स्थिर टेम्प्लेट्स के विपरीत, Canva AI, Microsoft Designer और Notion AI में यूजर केवल अपनी आवश्यकता का एक वाक्य लिखता है (जैसे: "Create a 2-page sponsorship proposal for a college tech fest") और एआई प्रासंगिक हेडिंग्स, डमी टेक्स्ट और लेआउट के साथ संपूर्ण कस्टमाइज्ड टेम्प्लेट तैयार कर देता है।'
            },
            {
              heading: '2. एआई व्याकरण और शैली जांचक टूल्स (Grammar & Style Checkers)',
              content: 'लेखन को त्रुटिरहित और परिष्कृत बनाने वाले प्रमुख टूल्स:',
              points: [
                'Grammarly: वास्तविक समय में वर्तनी (Spelling), व्याकरण (Grammar), विराम चिह्न (Punctuation) और वाक्य की टोन (Formal, Casual, Persuasive) का विश्लेषण करता है।',
                'Microsoft Editor: वर्ड और ब्राउज़र में एकीकृत एआई टूल जो संक्षिप्तता (Conciseness), समावेशी भाषा और शब्दावली सुधार के सुझाव देता है।',
                'QuillBot: एआई पैराफ्रेसिंग टूल जो जटिल वाक्यों को अधिक स्पष्ट, सरल और अकादमिक भाषा में पुनः लिखता है।',
                'Wordtune: एक क्लिक में किसी भी वाक्य को लंबा (Expand), छोटा (Shorten) या अधिक प्रभावशाली बनाने के विकल्प प्रदान करता है।'
              ]
            }
          ],
          examTip: 'Grammarly, Microsoft Editor और QuillBot के अलग-अलग कार्यों का उदाहरण सहित उल्लेख करें।',
          keyTerms: ['AI Templates', 'Grammarly AI', 'Microsoft Editor', 'Tone Detection', 'Paraphrasing QuillBot', 'Conciseness']
        }
      }
    ]
  },
  {
    unitNumber: 4,
    unitRoman: 'Unit IV',
    title: 'एमएस एक्सेल बेसिक्स, फॉर्मेटिंग, चार्ट्स व AI डेटा इनसाइट्स',
    questions: [
      {
        id: 'p2-u4-q1',
        number: 1,
        question: 'MS Excel: Basics, Workbook & Worksheets, Wizards, Data Types, Selecting Cells, Entering/Editing Text/Numbers, Rows/Columns, Formulas, Referencing, Moving/Copying Cells, Sorting, Views समझाइए।',
        topics: ['Workbook vs Worksheet', 'Cell Referencing (Relative/Absolute/Mixed)', 'Basic Formulas', 'Sorting & Filtering', 'Excel Views'],
        answer: {
          summary: 'एमएस एक्सेल एक शक्तिशाली स्प्रेडशीट प्रोग्राम है जिसमें वर्कबुक्स, शीट्स, गणितीय फॉर्मूले, फंक्शन और सेल संदर्भ डेटा विश्लेषण का आधार बनते हैं।',
          sections: [
            {
              heading: '1. वर्कबुक और वर्कशीट की मूल अवधारणा',
              content: 'वर्कबुक (.xlsx) संपूर्ण एक्सेल फाइल है जो कई वर्कशीट्स का संग्रह होती है। एक वर्कशीट 1,048,576 पंक्तियों (Rows) और 16,384 स्तंभों (Columns - A से XFD) का ग्रिड होती है। पंक्ति और स्तंभ का प्रतिच्छेदन सेल (Cell) कहलाता है (जैसे B5)।'
            },
            {
              heading: '2. डेटा प्रकार और सेल सिलेक्शन',
              content: 'एक्सेल में डेटा के मुख्य प्रकार: Text (बायें अलाइन), Numbers (दायें अलाइन), Date/Time, और Formulas। सेल रेंज सेलेक्ट करने के लिए Shift + Arrow या माउस ड्रैग का उपयोग होता है।'
            },
            {
              heading: '3. फॉर्मूले और सेल संदर्भ (Cell Referencing)',
              content: 'प्रत्येक फॉर्मूला बराबर के चिह्न (=) से शुरू होता है (जैसे `=A1+B1` या `=SUM(A1:A10)`):',
              points: [
                'रिलेटिव रेफरेंस (Relative - A1): कॉपी करने पर रो और कॉलम अपने आप बदल जाते हैं।',
                'एब्सोल्यूट रेफरेंस (Absolute - $A$1): डॉलर चिह्न ($) लगाकर रो और कॉलम को लॉक किया जाता है; कॉपी करने पर भी सेल नहीं बदलता।',
                'मिक्स्ड रेफरेंस (Mixed - $A1 या A$1): या तो केवल कॉलम लॉक होता है या केवल रो।'
              ]
            },
            {
              heading: '4. सॉर्टिंग और एक्सेल व्यूज (Sorting & Views)',
              content: 'डेटा को आरोही (A-Z) या अवरोही (Z-A) क्रम में क्रमबद्ध करना। व्यूज: Normal View, Page Break Preview (प्रिंट पेज की सीमाएं देखना), और Page Layout View।'
            }
          ],
          examTip: 'रिलेटिव ($ रहित) और एब्सोल्यूट ($A$1) सेल रेफरेंस का अंतर फॉर्मूले सहित जरूर समझाएं।',
          keyTerms: ['Workbook vs Worksheet', 'Cell Address', 'Absolute Reference $', 'Relative Reference', 'Page Break Preview', 'Sort A-Z']
        }
      },
      {
        id: 'p2-u4-q2',
        number: 2,
        question: 'Excel Formatting: Cell Formatting, Column Width/Row Height, Autoformat, Fonts, Borders, Colors, Hiding Rows/Columns, Splitting, Merging, Data Ranges, Column Freezing समझाइए।',
        topics: ['Cell Formatting (Number, Currency, Date)', 'Row/Column Dimensions', 'Merge & Center', 'Freeze Panes', 'Hide/Unhide'],
        answer: {
          summary: 'एक्सेल फॉर्मेटिंग डेटा को पठनीय, स्पष्ट और व्यावसायिक रूप देती है। इसमें सेल फॉर्मेट, बॉर्डर्स, फ्रीज पेन्स और कॉलम हाइडिंग प्रमुख टूल्स हैं।',
          sections: [
            {
              heading: '1. सेल फॉर्मेटिंग (Format Cells - Ctrl + 1)',
              content: 'सेल में डेटा के प्रदर्शन का नियंत्रण:',
              points: [
                'Number, Currency (₹, $), Accounting, Percentage (%), Date (DD-MM-YYYY) और Time फॉर्मेट्स।',
                'अलाइनमेंट: Horizontal (Left, Center, Right), Vertical (Top, Middle, Bottom), तथा Wrap Text (लंबी टेक्स्ट को एक ही सेल में कई लाइनों में मोड़ना)।'
              ]
            },
            {
              heading: '2. मर्ज और स्प्लिट (Merge & Center)',
              content: 'कई सेल्स को मिलाकर एक बड़ी हेडिंग सेल बनाना (Merge & Center)। अनमर्ज करने के लिए पुनः क्लिक करना।'
            },
            {
              heading: '3. रो/कॉलम आयाम और छिपाना (Hide/Unhide)',
              content: 'हेडर बॉर्डर को ड्रैग करके या Home > Format > Row Height / Column Width से सटीक आकार देना। गोपनीय डेटा या अनावश्यक कॉलम को Right Click > Hide करके छिपाया जा सकता है।'
            },
            {
              heading: '4. फ्रीज पेन्स (Freeze Panes)',
              content: 'जब हजारों पंक्तियों का डेटा स्क्रॉल किया जाता है, तो शीर्ष हेडिंग्स ऊपर छिप जाती हैं। View Tab > Freeze Panes > "Freeze Top Row" करने से हेडर रो हमेशा स्क्रीन पर स्थिर (Locked) दिखाई देती है, चाहे आप कितना भी नीचे स्क्रॉल करें।'
            }
          ],
          examTip: 'Freeze Panes का व्यावहारिक उपयोग (हजारों रिकॉर्ड्स स्क्रॉल करते समय हेडिंग दिखते रहना) जरूर लिखें।',
          keyTerms: ['Format Cells Ctrl+1', 'Wrap Text', 'Merge & Center', 'Freeze Top Row', 'Hide/Unhide Columns']
        }
      },
      {
        id: 'p2-u4-q3',
        number: 3,
        question: 'Excel Charts: Parts, Terminology, Chart Wizard, Types, Printing, Deleting Charts समझाइए।',
        topics: ['Chart Components (Title, Legend, Axes, Data Series)', 'Column Chart', 'Bar Chart', 'Pie Chart', 'Line Chart'],
        answer: {
          summary: 'चार्ट संख्यात्मक डेटा का सचित्र निरूपण (Graphical Representation) है। यह प्रवृत्तियों (Trends) और अनुपातों को तुरंत समझने में मदद करता है।',
          sections: [
            {
              heading: '1. चार्ट के मुख्य भाग और शब्दावली (Chart Terminology)',
              content: 'चार्ट के अनिवार्य संरचनात्मक घटक:',
              points: [
                'चार्ट टाइटल (Chart Title): चार्ट का मुख्य शीर्षक।',
                'एक्स-अक्ष (X-Axis / Category Axis): क्षैतिज अक्ष जो श्रेणियों (जैसे महीने, नाम) को दर्शाता है।',
                'वाई-अक्ष (Y-Axis / Value Axis): लंबवत अक्ष जो संख्यात्मक मानों (जैसे बिक्री, अंक) को दर्शाता है।',
                'डेटा सीरीज़ (Data Series): चार्ट में प्लॉट की गई बार्स, लाइन्स या स्लाइस।',
                'लेजेंड (Legend): रंगों और प्रतीकों की कुंजी जो दर्शाती है कि कौन सा रंग किस डेटा का प्रतिनिधित्व करता है।',
                'ग्रिडलाइन्स (Gridlines): मानों को आसानी से पढ़ने में सहायक पृष्ठभूमि रेखाएं।'
              ]
            },
            {
              heading: '2. चार्ट के प्रमुख प्रकार (Types of Charts)',
              content: 'डेटा की प्रकृति के अनुसार चार्ट चयन:',
              points: [
                'कॉलम चार्ट (Column Chart): विभिन्न श्रेणियों के बीच तुलना के लिए लंबवत बार्स (Vertical Bars)।',
                'बार चार्ट (Bar Chart): क्षैतिज बार्स (Horizontal Bars) जो लंबी श्रेणियों के लिए उपयोगी हैं।',
                'पाई चार्ट (Pie Chart): संपूर्ण 100% में विभिन्न घटकों के आनुपातिक हिस्से (Slices) को दर्शाने हेतु (केवल 1 डेटा सीरीज़ के लिए)।',
                'लाइन चार्ट (Line Chart): समय के साथ होने वाले बदलावों और रुझानों (Trends over time) को दिखाने हेतु।'
              ]
            },
            {
              heading: '3. चार्ट बनाना और हटाना',
              content: 'डेटा रेंज सेलेक्ट करें > Insert Tab > Charts ग्रुप से मनचाहा चार्ट आइकन चुनें (शॉर्टकट: F11 दबाने पर नई शीट में सीधे चार्ट बन जाता है)। हटाने के लिए चार्ट बॉर्डर पर क्लिक करके Delete कुंजी दबाएं।'
            }
          ],
          examTip: 'F11 शॉर्टकट की (तुरंत चार्ट बनाने के लिए) और पाई चार्ट केवल 1 डेटा सीरीज के लिए बनता है, यह विशेष तथ्य लिखें।',
          keyTerms: ['Data Series', 'Legend', 'X/Y Axes', 'Column vs Bar', 'Pie Slices', 'F11 Shortcut']
        }
      },
      {
        id: 'p2-u4-q4',
        number: 4,
        question: 'AI in Excel: Data Insights, Trend Prediction, Analyze Data, ChatGPT for Formula Generation समझाइए।',
        topics: ['Analyze Data (Ideas)', 'Trend Prediction', 'Formula by Prompt', 'ChatGPT Excel Formulas', 'Copilot in Excel'],
        answer: {
          summary: 'आधुनिक एक्सेल में एआई फीचर्स जैसे "Analyze Data" जटिल विश्लेषण को एक क्लिक में ऑटोमेट करते हैं और चैटजीपीटी जटिल फॉर्मूलों को सेकंडों में जनरेट कर देता है।',
          sections: [
            {
              heading: '1. एक्सेल में "Analyze Data" (पूर्व में Ideas)',
              content: 'होम टैब में दाईं ओर स्थित "Analyze Data" बटन पर क्लिक करते ही एक्सेल का मशीन लर्निंग इंजन संपूर्ण डेटासेट को स्वतः स्कैन करता है और बिना किसी फॉर्मूले के पिवट टेबल, सहसंबंध (Correlations), आउटलायर्स और ट्रेंड चार्ट्स सुझाता है। आप प्राकृतिक भाषा में प्रश्न भी पूछ सकते हैं (जैसे: "Which region had highest sales in Q3?").'
            },
            {
              heading: '2. ट्रेंड भविष्यवाणी (Trend Prediction & Forecast Sheet)',
              content: 'ऐतिहासिक समय-श्रृंखला डेटा (Time-series data) के आधार पर Data Tab > Forecast Sheet फीचर एक्सपोनेंशियल स्मूथिंग (ETS) एल्गोरिदम का उपयोग करके भविष्य की बिक्री या इन्वेंटरी आवश्यकताओं का पूर्वानुमान लगाता है।'
            },
            {
              heading: '3. फॉर्मूला जनरेशन के लिए ChatGPT / Copilot का उपयोग',
              content: 'उपयोगकर्ता जटिल फॉर्मूलों को याद रखने के बजाय सीधे अपनी आवश्यकता लिख सकता है:',
              points: [
                'प्रॉम्प्ट: "Write an Excel formula to find employee name from Column B where Employee ID matches cell F2, and return \'Not Found\' if missing."',
                'एआई उत्तर: `=IFERROR(VLOOKUP(F2, B:D, 3, FALSE), "Not Found")` या आधुनिक `=XLOOKUP(F2, A:A, B:B, "Not Found")`। साथ ही यह फॉर्मूले के प्रत्येक तर्क की व्याख्या भी करता है।'
              ]
            }
          ],
          examTip: 'Analyze Data में प्राकृतिक भाषा क्वेरी (Natural Language Query) पूछने की क्षमता का उदाहरण जरूर दें।',
          keyTerms: ['Analyze Data', 'Natural Language Query', 'Forecast Sheet ETS', 'XLOOKUP Prompt', 'Copilot in Excel']
        }
      },
      {
        id: 'p2-u4-q5',
        number: 5,
        question: 'Practical: Excel में Worksheet बनाकर Formatting, Formulas, Charts और AI Features का उपयोग दिखाइए।',
        topics: ['Practical Student Marksheet', 'SUM & AVERAGE', 'IF Formula', 'Conditional Formatting', 'Chart Creation'],
        answer: {
          summary: 'एक व्यावहारिक उदाहरण द्वारा एक्सेल में छात्र अंकसूची (Marksheet) बनाकर उसमें गणना, फॉर्मेटिंग, चार्ट और विश्लेषण को चरणबद्ध रूप से प्रदर्शित किया गया है।',
          sections: [
            {
              heading: '1. मार्कशीट का व्यावहारिक डेटा संरचना',
              content: 'कॉलम हेडिंग्स: Roll No (A), Name (B), Hindi (C), English (D), Computer (E), Total (F), Percentage (G), Result (H)।',
              table: {
                headers: ['Roll No', 'Name', 'Hindi', 'English', 'Computer', 'Total', 'Percentage', 'Result'],
                rows: [
                  ['101', 'Rahul Sharma', '78', '82', '90', '=SUM(C2:E2)', '=F2/3', '=IF(G2>=40, "PASS", "FAIL")'],
                  ['102', 'Priya Verma', '85', '88', '94', '=SUM(C3:E3)', '=F3/3', '=IF(G3>=40, "PASS", "FAIL")'],
                  ['103', 'Amit Kumar', '32', '35', '38', '=SUM(C4:E4)', '=F4/3', '=IF(G4>=40, "PASS", "FAIL")']
                ]
              }
            },
            {
              heading: '2. लागू की गई फॉर्मेटिंग तकनीकें',
              content: 'व्यावहारिक चरण:',
              points: [
                'शीर्ष हेडिंग (A1:H1) को "Merge & Center" किया और 16pt Bold व Dark Blue Fill Color दिया।',
                'कंडीशनल फॉर्मेटिंग (Conditional Formatting): 40 से कम अंक वाले सेल्स को स्वतः Red Highlight किया।',
                'प्रतिशत कॉलम (G) पर Number Formatting से 2 दशमलव स्थान (0.00%) सेट किए।'
              ]
            },
            {
              heading: '3. चार्ट और एआई का एकीकरण',
              content: 'छात्रों के नामों और टोटल अंकों (B2:B4 और F2:F4) को सेलेक्ट करके 3D Clustered Column Chart इंसर्ट किया। इसके बाद Home > Analyze Data पर क्लिक करके टॉप परफॉर्मर और सब्जेक्ट-वाइज एवरेज का ऑटो-एनालिसिस जनरेट किया।'
            }
          ],
          examTip: 'परीक्षा में टेबल बनाकर तीनों मुख्य फॉर्मूलों (=SUM, =AVERAGE, =IF) को स्पष्ट रूप से दर्शाएं।',
          keyTerms: ['Student Marksheet', '=SUM()', '=AVERAGE()', '=IF()', 'Conditional Formatting', 'Clustered Column']
        }
      }
    ]
  },
  {
    unitNumber: 5,
    unitRoman: 'Unit V',
    title: 'एमएस पावरपॉइंट, स्लाइड डिजाइन, एनिमेशन व AI प्रेजेंटेशन टूल्स',
    questions: [
      {
        id: 'p2-u5-q1',
        number: 1,
        question: 'MS PowerPoint: Introduction, Area of Use, Creating New Presentation, Working with Presentation, Wizards समझाइए।',
        topics: ['PowerPoint Intro', 'Areas of Use', 'Blank Presentation vs Template', 'AutoContent Wizard'],
        answer: {
          summary: 'एमएस पावरपॉइंट एक शक्तिशाली प्रेजेंटेशन सॉफ्टवेयर है जिसके माध्यम से स्लाइड्स, टेक्स्ट, चित्र, चार्ट और एनिमेशन का उपयोग करके दर्शकों को प्रभावी प्रस्तुति दी जाती है।',
          sections: [
            {
              heading: '1. पावरपॉइंट का परिचय एवं उपयोग के क्षेत्र',
              content: 'पावरपॉइंट (.pptx) विचारों को दृश्य रूप से संप्रेषित करने का माध्यम है। प्रमुख उपयोग क्षेत्र:',
              points: [
                'शिक्षा व प्रशिक्षण (Education & Training): शिक्षकों द्वारा क्लासरूम लेक्चर्स और ऑनलाइन कोर्सेस।',
                'व्यापार व कॉर्पोरेट (Business Pitches): नए प्रोजेक्ट्स, सेल्स रिपोर्ट्स, बजट और क्लाइंट प्रेजेंटेशन।',
                'सेमिनार व अनुसंधान (Seminars & Research): सम्मेलनों में शोध पत्रों और केस स्टडीज की प्रस्तुति।'
              ]
            },
            {
              heading: '2. नई प्रेजेंटेशन बनाना',
              content: 'File > New पर जाकर विकल्प:',
              points: [
                'Blank Presentation (Ctrl + N): अपनी पसंद के अनुसार शून्य से डिजाइन बनाना।',
                'Pre-designed Themes: रेडीमेड कलर स्कीम और बैकग्राउंड के साथ शुरू करना।',
                'पुराने संस्करणों में AutoContent Wizard: यह एक चरणबद्ध विज़ार्ड था जो विषय (जैसे कंपनी मीटिंग) पूछकर स्लाइड्स की रूपरेखा और सामग्री का खाका स्वतः तैयार करता था।'
              ]
            }
          ],
          examTip: 'पावरपॉइंट के उपयोग के तीन प्रमुख क्षेत्र (शिक्षा, व्यवसाय, सेमिनार) को उदाहरण सहित लिखें।',
          keyTerms: ['Slide Show', '.pptx Extension', 'Blank Presentation', 'AutoContent Wizard', 'Design Themes']
        }
      },
      {
        id: 'p2-u5-q2',
        number: 2,
        question: 'Slides: Different Views, Insert/Delete/Copy Slides; Notes, Handouts, Columns, Lists समझाइए।',
        topics: ['Slide Views (Normal, Sorter, Reading)', 'Insert/Duplicate Slide', 'Speaker Notes', 'Handouts Printing'],
        answer: {
          summary: 'पावरपॉइंट में स्लाइड्स को विभिन्न दृष्टिकोणों (Views) से प्रबंधित किया जाता है। स्पीकर नोट्स और हैंडआउट्स वक्ता और दर्शकों के संदर्भ के लिए तैयार किए जाते हैं।',
          sections: [
            {
              heading: '1. पावरपॉइंट के प्रमुख व्यूज (Slide Views)',
              content: 'व्यू टैब में उपलब्ध मुख्य व्यूज:',
              points: [
                'Normal View (डिफ़ॉल्ट): बाईं ओर थंबनेल पेन और दाईं ओर मुख्य बड़ी स्लाइड जहाँ संपादन होता है।',
                'Slide Sorter View: सभी स्लाइड्स के छोटे-छोटे थंबनेल्स एक स्क्रीन पर दिखते हैं। स्लाइड्स का क्रम बदलने (Drag & Drop) या ट्रांजिशन देखने के लिए सर्वोत्तम।',
                'Notes Page View: प्रत्येक स्लाइड के नीचे वक्ता के निजी नोट्स (Speaker Notes) टाइप करने और देखने का व्यू।',
                'Reading View: बिना पूरी स्क्रीन घेरे एक साधारण विंडो में प्रेजेंटेशन की जांच करना।',
                'Slide Show View (F5): पूर्ण स्क्रीन पर दर्शकों को प्रेजेंटेशन प्रदर्शित करना।'
              ]
            },
            {
              heading: '2. स्लाइड संचालन (Slide Operations)',
              content: 'Home Tab > New Slide (Ctrl + M) से नई स्लाइड जोड़ना; स्लाइड पर राइट क्लिक कर "Duplicate Slide" (Ctrl + D) या "Delete Slide" करना।'
            },
            {
              heading: '3. स्पीकर नोट्स और हैंडआउट्स (Speaker Notes & Handouts)',
              content: 'वक्ता प्रस्तुति के दौरान खुद याद रखने के लिए स्लाइड के नीचे नोट्स लिखता है (जो दर्शकों को नहीं दिखते)। हैंडआउट्स स्लाइड्स के प्रिंटआउट्स होते हैं (जैसे प्रति पेज 3 या 6 स्लाइड्स) जो दर्शकों को अध्ययन सामग्री के रूप में बांटे जाते हैं।'
            }
          ],
          examTip: 'नई स्लाइड जोड़ने का शॉर्टकट Ctrl + M है (Ctrl + N नई फाइल के लिए होता है), यह अंतर अवश्य लिखें।',
          keyTerms: ['Normal View', 'Slide Sorter View', 'F5 Slide Show', 'Ctrl+M New Slide', 'Ctrl+D Duplicate', 'Speaker Notes', 'Handouts']
        }
      },
      {
        id: 'p2-u5-q3',
        number: 3,
        question: 'Adding Graphics, Shapes, Screenshots, SmartArt, Charts; Sounds & Movies; PowerPoint Objects समझाइए।',
        topics: ['Graphics & Shapes', 'Screenshot Tool', 'SmartArt in PPT', 'Audio & Video Embedding', 'PowerPoint Objects'],
        answer: {
          summary: 'मल्टीमीडिया तत्वों (ऑडियो, वीडियो, ग्राफिक्स, स्क्रीनशॉट्स और चार्ट्स) को जोड़ने से प्रेजेंटेशन अधिक सजीव, इंटरैक्टिव और प्रभावशाली बन जाती है।',
          sections: [
            {
              heading: '1. ग्राफिक्स, शेप्स और स्क्रीनशॉट्स जोड़ना',
              content: 'इंसर्ट टैब द्वारा दृश्य तत्व शामिल करना:',
              points: [
                'Pictures & Shapes: Insert > Pictures या Shapes से चित्र व फ्लोचार्ट सिम्बल्स जोड़ना।',
                'स्क्रीनशॉट टूल (Screenshot): Insert > Screenshot > Screen Clipping द्वारा कंप्यूटर स्क्रीन पर खुली किसी भी अन्य विंडो का स्नैपशॉट सीधे स्लाइड में डालना।',
                'स्मार्टआर्ट व चार्ट्स: संगठनात्मक संरचना या बिक्री डेटा को प्रदर्शित करने के लिए एक्सेल-लिंक्ड चार्ट्स जोड़ना।'
              ]
            },
            {
              heading: '2. ऑडियो और वीडियो जोड़ना (Audio & Video Embedding)',
              content: 'Insert Tab > Media ग्रुप के जरिए:',
              points: [
                'Video: "This Device" से वीडियो फाइल (MP4) जोड़ना। Playback टैब से Start Automatically, Loop until Stopped, और ट्रिमिंग सेट करना।',
                'Audio: बैकग्राउंड म्यूजिक या वॉयस-ओवर रिकॉर्डिंग (Record Audio) जोड़ना और "Play Across Slides" सेट करना।'
              ]
            },
            {
              heading: '3. पावरपॉइंट ऑब्जेक्ट्स (OLE Objects)',
              content: 'Insert > Object द्वारा अन्य सॉफ्टवेयर की फाइलों (जैसे Excel Worksheet, Word Doc, PDF) को सीधे स्लाइड में एक लाइव ऑब्जेक्ट के रूप में एम्बेड करना।'
            }
          ],
          examTip: 'ऑडियो/वीडियो में "Playback Tab" के फीचर्स (Loop, Play Across Slides) का उल्लेख करें।',
          keyTerms: ['Screen Clipping', 'SmartArt Visuals', 'Embedded MP4 Video', 'Background Audio', 'OLE Object']
        }
      },
      {
        id: 'p2-u5-q4',
        number: 4,
        question: 'Slide Show Design: Backgrounds, Size, Animation, Transitions, Printing, Notes, Handouts, Slide Master, Handout Master, Notes Master समझाइए।',
        topics: ['Slide Transitions', 'Custom Animation', 'Slide Master', 'Handout Master', 'Slide Show Setup'],
        answer: {
          summary: 'स्लाइड ट्रांजिशन दो स्लाइड्स के बीच का बदलाव है जबकि एनिमेशन स्लाइड के अंदर के तत्वों की गति है। स्लाइड मास्टर पूरी प्रेजेंटेशन में एकरूपता (Consistency) बनाए रखने का मुख्य नियंत्रण केंद्र है।',
          sections: [
            {
              heading: '1. ट्रांजिशन बनाम एनिमेशन (Transitions vs Animations)',
              content: 'दोनों में स्पष्ट अंतर:',
              table: {
                headers: ['लक्षण', 'स्लाइड ट्रांजिशन (Transitions)', 'कस्टम एनिमेशन (Animations)'],
                rows: [
                  ['लागू होने का स्थान', 'पूरी स्लाइड पर (स्लाइड बदलते समय)', 'स्लाइड के अंदर मौजूद व्यक्तिगत ऑब्जेक्ट्स पर (टेक्स्ट, इमेज, शेप)'],
                  ['टैब', 'Transitions Tab (Fade, Push, Wipe, Morph)', 'Animations Tab (Entrance, Emphasis, Exit, Motion Paths)'],
                  ['उद्देश्य', 'एक स्लाइड से दूसरी स्लाइड पर सहजता से जाना', 'दर्शकों का ध्यान विशिष्ट बुलेट पॉइंट्स पर केंद्रित करना']
                ]
              }
            },
            {
              heading: '2. स्लाइड मास्टर (Slide Master)',
              content: 'View Tab > Slide Master पर जाकर खोला जाता है। यह शीर्ष स्लाइड है जो पूरी प्रेजेंटेशन के फॉन्ट, लोगो, बैकग्राउंड रंग और लेआउट को नियंत्रित करती है। यदि आप स्लाइड मास्टर पर कंपनी का लोगो लगाते हैं, तो वह स्वतः सभी 50 स्लाइड्स पर एक साथ लग जाता है।'
            },
            {
              heading: '3. हैंडआउट मास्टर व नोट्स मास्टर',
              content: 'हैंडआउट्स और स्पीकर नोट्स के प्रिंट लेआउट, हेडर, फुटर, पेज नंबर और ओरिएंटेशन को एक साथ कस्टमाइज करने वाले मास्टर्स।'
            }
          ],
          examTip: 'स्लाइड मास्टर का मुख्य लाभ (एक जगह बदलाव करने से सभी स्लाइड्स में स्वतः लागू होना) जरूर लिखें।',
          keyTerms: ['Transitions vs Animations', 'Morph Transition', 'Slide Master View', 'Handout Master', 'Notes Master']
        }
      },
      {
        id: 'p2-u5-q5',
        number: 5,
        question: 'AI Tools for Presentation Creation (Beautiful.ai, Tome, Canva AI) तथा AI-based Presentation बनाना सिखाइए।',
        topics: ['AI Presentation Makers', 'Beautiful.ai', 'Tome App', 'Canva Magic Design', 'Gamma App', 'AI Prompt to PPT'],
        answer: {
          summary: 'आधुनिक एआई प्रेजेंटेशन टूल्स केवल एक प्रॉम्प्ट या डॉक्यूमेंट के आधार पर स्वतः प्रोफेशनल लेआउट, कंटेंट, इमेजेस और चार्ट्स के साथ संपूर्ण स्लाइड डेक कुछ ही सेकंडों में तैयार कर देते हैं।',
          sections: [
            {
              heading: '1. प्रमुख एआई प्रेजेंटेशन टूल्स',
              content: 'स्लाइड निर्माण को स्वचालित करने वाले टूल्स:',
              points: [
                'Gamma App / Tome: एक प्रॉम्प्ट (जैसे "Create a 8-slide presentation on Cyber Security Challenges in 2026") से टेक्स्ट, थीम और जनरेटिव इमेजेस के साथ संपूर्ण इंटरैक्टिव डेक बनाता है।',
                'Beautiful.ai: स्मार्ट स्लाइड डिजाइनर जो यूजर द्वारा कंटेंट जोड़ते ही लेआउट और स्पेसिंग को गणितीय रूप से खुद एडजस्ट कर देता है (No manual alignment needed)।',
                'Canva Magic Design: अपनी रूपरेखा या शीर्षक पेस्ट करते ही दर्जनों ब्रांडेड टेम्प्लेट्स में कस्टमाइज्ड प्रेजेंटेशन तैयार करता है।'
              ]
            },
            {
              heading: '2. AI-आधारित प्रेजेंटेशन बनाने की चरणबद्ध विधि',
              content: 'व्यावहारिक प्रक्रिया:',
              points: [
                'स्टेप 1 (प्रॉम्प्टिंग): स्पष्ट उद्देश्य, लक्षित दर्शक (Target Audience) और स्लाइड संख्या निर्दिष्ट करें।',
                'स्टेप 2 (आउटलाइन समीक्षा): एआई द्वारा सुझाई गई रूपरेखा (Slide Titles) को संशोधित करें।',
                'स्टेप 3 (जनरेशन): "Generate" पर क्लिक करें; एआई प्रत्येक स्लाइड के लिए टेक्स्ट और ग्राफिक्स बनाएगा।',
                'स्टेप 4 (कस्टमाइजेशन व एक्सपोर्ट): अपने व्यक्तिगत आंकड़े जोड़ें और फाइल को `.pptx` प्रारूप में डाउनलोड कर पावरपॉइंट में खोलें।'
              ]
            }
          ],
          examTip: 'Gamma, Tome और Beautiful.ai के नाम और "Prompt-to-Presentation" अवधारणा का उल्लेख करें।',
          keyTerms: ['Prompt to Presentation', 'Gamma App', 'Tome AI', 'Beautiful.ai Smart Slides', 'Canva Magic Design']
        }
      }
    ]
  }
];
