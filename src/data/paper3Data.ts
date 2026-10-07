import { Unit } from '../types';

export const paper3Units: Unit[] = [
  {
    unitNumber: 1,
    unitRoman: 'Unit I',
    title: 'डीटीपी अवधारणाएं, प्रिंटिंग तकनीकें, टाइपोग्राफी व ऑफसेट शब्दावली',
    questions: [
      {
        id: 'p3-u1-q1',
        number: 1,
        question: 'DTP: Definition, Need, Area of Application; Offset Printing, Publications, Newspaper Printing में उपयोग समझाइए।',
        topics: ['DTP Definition', 'Need of DTP', 'Applications of DTP', 'Offset Printing Use', 'Newspaper Publishing'],
        answer: {
          summary: 'DTP (Desktop Publishing) व्यक्तिगत कंप्यूटर और विशेष लेआउट सॉफ्टवेयर की सहायता से मुद्रण योग्य दस्तावेजों, पत्र-पत्रिकाओं और पुस्तकों की डिजाइनिंग और प्रकाशन की कला है।',
          sections: [
            {
              heading: '1. डीटीपी की परिभाषा एवं आवश्यकता (Definition & Need)',
              content: 'पारंपरिक मुद्रण में टाइपसेटिंग, पेस्ट-अप और फोटोग्राफी के अलग-अलग जटिल मैनुअल चरण होते थे। डीटीपी ने एक ही कंप्यूटर स्क्रीन पर टेक्स्ट टाइपिंग, इमेज एडिटिंग और पेज लेआउट संयोजन को संभव बनाकर समय और लागत में भारी कमी की है।'
            },
            {
              heading: '2. अनुप्रयोग के प्रमुख क्षेत्र (Areas of Application)',
              content: 'डीटीपी का उपयोग निम्नलिखित क्षेत्रों में अनिवार्य है:',
              points: [
                'समाचार पत्र एवं पत्रिका प्रकाशन (Newspapers & Magazines): मल्टी-कॉलम लेआउट, आकर्षक हेडिंग्स और विज्ञापनों का संयोजन।',
                'पुस्तक प्रकाशन (Book Publishing): उपन्यासों, पाठ्यपुस्तकों और संदर्भ ग्रंथों की पेज-सेटिंग और इंडेक्सिंग।',
                'व्यावसायिक प्रचार सामग्री (Commercial Printing): विजिटिंग कार्ड्स, ब्रोशर्स, पम्फलेट्स, कैटलॉग और पैकेजिंग बॉक्स।',
                'ऑफसेट प्रिंटिंग प्रेसेस: प्लेट मेकिंग और रंग पृथक्करण (Color Separation) के लिए डिजिटल फाइलें तैयार करना।'
              ]
            }
          ],
          examTip: 'पारंपरिक मैनुअल टाइपसेटिंग और आधुनिक कंप्यूटर-आधारित डीटीपी की तुलना अवश्य करें।',
          keyTerms: ['Desktop Publishing (DTP)', 'Paste-up', 'Color Separation', 'Typesetting', 'Pagination']
        }
      },
      {
        id: 'p3-u1-q2',
        number: 2,
        question: 'Offset Printing Technology तथा Types of Printing (Lithography, Flexography, Gravure, Screen, Offset) समझाइए।',
        topics: ['Offset Printing Technology', 'Lithography', 'Flexography', 'Gravure / Rotogravure', 'Screen Printing'],
        answer: {
          summary: 'मुद्रण उद्योग में विभिन्न प्रौद्योगिकियों का उपयोग होता है। ऑफसेट प्रिंटिंग व्यावसायिक मुद्रण का सबसे प्रमुख प्रकार है जो तेल और पानी के परस्पर प्रतिकर्षण सिद्धांत पर आधारित है।',
          sections: [
            {
              heading: '1. ऑफसेट प्रिंटिंग तकनीक (Offset Printing Technology)',
              content: 'यह अप्रत्यक्ष (Indirect) मुद्रण तकनीक है। इसमें स्याही पहले मेटल प्लेट से एक रबर ब्लैंकेट (Rubber Blanket) सिलेंडर पर स्थानांतरित (Offset) होती है, और फिर रबर ब्लैंकेट से कागज पर छपती है। सिद्धांत: तेल (स्याही) और पानी एक दूसरे को प्रतिकर्षित करते हैं।'
            },
            {
              heading: '2. प्रिंटिंग के मुख्य प्रकार (Types of Printing)',
              content: 'उद्योग में प्रचलित पाँच प्रमुख मुद्रण तकनीकें:',
              points: [
                'लिथोग्राफी (Lithography): प्लानोग्राफिक (समतल सतह) मुद्रण जो ऑफसेट तकनीक का मूल आधार है।',
                'फ्लेक्सोग्राफी (Flexography): उभरे हुए रबर या फोटोपॉलीमर रिलीफ प्लेट्स पर आधारित। पैकेजिंग, पॉलीथिन बैग्स और लेबल प्रिंटिंग के लिए सर्वाधिक उपयुक्त।',
                'ग्रेव्योर / रोटोग्रेव्योर (Gravure): इंटैग्लियो (गहराई में खोदी गई प्लेट्स) तकनीक। लाखों प्रतियों वाले उच्च गुणवत्ता पत्रिकाओं और पैकेजिंग के लिए अत्यधिक टिकाऊ।',
                'स्क्रीन प्रिंटिंग (Screen / Serigraphy): नायलॉन/रेशम की महीन जाली (Mesh) पर स्टेंसिल बनाकर स्याही को स्क्वीजी (Squeegee) से दबाकर छापना। टी-शर्ट, शादी के कार्ड, प्लास्टिक और धातु पर प्रिंटिंग के लिए प्रयुक्त।'
              ]
            }
          ],
          examTip: 'ऑफसेट प्रिंटिंग में "प्लेट सिलेंडर -> रबर ब्लैंकेट सिलेंडर -> इम्प्रेशन सिलेंडर" का 3-सिलेंडर आरेख बनाएं।',
          keyTerms: ['Offset Principle', 'Rubber Blanket', 'Lithography', 'Flexography', 'Rotogravure', 'Screen Mesh']
        }
      },
      {
        id: 'p3-u1-q3',
        number: 3,
        question: 'Text Formatting: Typography, Fonts, Point Size, Spacing, Breaks, Measurements समझाइए।',
        topics: ['Typography Basics', 'Serif vs Sans-Serif', 'Point Size & Pica', 'Kerning, Tracking, Leading', 'Line & Page Breaks'],
        answer: {
          summary: 'टाइपोग्राफी लिखित सामग्री को दृश्य रूप से आकर्षक और पठनीय बनाने की कला है। इसमें फॉन्ट चयन, पॉइंट साइज, पाइका माप और अक्षरों व पंक्तियों के बीच की स्पेसिंग महत्वपूर्ण होती है।',
          sections: [
            {
              heading: '1. टाइपोग्राफी और फॉन्ट्स (Typography & Fonts)',
              content: 'फॉन्ट्स की दो मुख्य श्रेणियां:',
              points: [
                'सेरिफ (Serif Fonts): अक्षरों के सिरों पर छोटे सजावटी स्ट्रोक्स (पूंछ) होते हैं (जैसे Times New Roman)। मुद्रित पुस्तकों और अखबारों के लंबे पैराग्राफ पढ़ने के लिए सबसे आरामदायक।',
                'सैंस-सेरिफ (Sans-Serif Fonts): बिना सेरिफ के सीधे, आधुनिक और साफ अक्षर (जैसे Arial, Helvetica)। शीर्षकों और स्क्रीन पर पढ़ने के लिए श्रेष्ठ।'
              ]
            },
            {
              heading: '2. डीटीपी मापन इकाइयाँ (Measurements: Points & Picas)',
              content: 'मुद्रण उद्योग की मानक इकाइयाँ:',
              points: [
                '1 इंच = 72 पॉइंट्स (Points - pt)।',
                '1 पाइका (Pica) = 12 पॉइंट्स।',
                '1 इंच = 6 पाइकस (Picas)।'
              ]
            },
            {
              heading: '3. स्पेसिंग के तकनीकी प्रकार (Spacing Terms)',
              content: 'अक्षरों और पंक्तियों के बीच दूरी का सूक्ष्म नियंत्रण:',
              points: [
                'लीडिंग (Leading): दो लगातार पंक्तियों (Baselines) के बीच लंबवत दूरी (Line Spacing)।',
                'कर्निग (Kerning): दो विशिष्ट वर्णों (जैसे "AV" या "To") के बीच के अंतर को आनुपातिक रूप से संतुलित करना।',
                'ट्रैकिंग (Tracking): पूरे शब्द या चयनित पैराग्राफ में सभी अक्षरों के बीच समान दूरी (Letter Spacing) बढ़ाना या घटाना।'
              ]
            }
          ],
          examTip: 'गणितीय संबंध (72 Points = 1 Inch, 12 Points = 1 Pica) परीक्षा में अवश्य लिखें।',
          keyTerms: ['Typography', 'Serif vs Sans-Serif', 'Points & Picas', 'Leading', 'Kerning', 'Tracking']
        }
      },
      {
        id: 'p3-u1-q4',
        number: 4,
        question: 'Offset Printing Terms: Bleed, CMYK, Transparent Printouts (Bromide & Film), Halftone, Impression, Saddle Stitch, Perfect Bind समझाइए।',
        topics: ['Bleed Margins', 'CMYK Process Colors', 'Bromide & Film Negative', 'Halftone Screening', 'Binding Types'],
        answer: {
          summary: 'ऑफसेट प्रिंटिंग में उपयोग होने वाली विशिष्ट तकनीकी शब्दावली मुद्रण की गुणवत्ता, रंग पृथक्करण, कटिंग और बाइंडिंग प्रक्रियाओं को परिभाषित करती है।',
          sections: [
            {
              heading: '1. ब्लीड और सीएमवाईके (Bleed & CMYK)',
              content: 'कटिंग और रंगों के मानक:',
              points: [
                'ब्लीड (Bleed): पेज के कटने वाले किनारे (Trim Line) से बाहर 3mm से 5mm तक फैलाया गया अतिरिक्त बैकग्राउंड/चित्र, ताकि कटाई के समय कागज के किनारों पर कोई सफेद रेखा न छूटे।',
                'CMYK: 4-रंग प्रक्रिया (Cyan, Magenta, Yellow, Key/Black)। सभी रंगीन प्रिंटिंग इन चार रंगों के मिश्रण से की जाती है।'
              ]
            },
            {
              heading: '2. ट्रांसपेरेंट प्रिंटआउट्स और हाफटोन',
              content: 'प्लेट मेकिंग के मध्यवर्ती चरण:',
              points: [
                'ब्रोमाइड व फिल्म (Bromide & Film): डिजिटल डेटा से इमेज-सेटर मशीन द्वारा पारदर्शी फिल्म नेगेटिव या पॉजिटिव तैयार करना जिससे ऑफसेट प्लेट एक्सपोज की जाती है।',
                'हाफटोन (Halftone): निरंतर टोन वाले फोटोग्राफ्स को मुद्रण के लिए विभिन्न आकारों के सूक्ष्म बिंदुओं (Dots) के पैटर्न में बदलना।'
              ]
            },
            {
              heading: '3. बाइंडिंग के प्रकार (Binding Styles)',
              content: 'पुस्तकों को बांधने की विधियाँ:',
              points: [
                'सैडल स्टिच (Saddle Stitch): मुड़े हुए पन्नों के ठीक बीच के जोड़ (Spine) पर वायर स्टेपल (Staple) लगाना। पतली पत्रिकाओं और कॉपियों के लिए आदर्श।',
                'परफेक्ट बाइंडिंग (Perfect Binding): पन्नों के सिरों को खुरदरा करके गर्म गोंद (Hot Glue) से रीढ़ (Spine) पर चिपकाना और ऊपर मोटा कवर लगाना (जैसे पेपरबैक उपन्यास और मोटी किताबें)।'
              ]
            }
          ],
          examTip: 'सैडल स्टिच (स्टेपल आधारित) और परफेक्ट बाइंडिंग (गोंद/स्पाइन आधारित) का अंतर स्पष्ट करें।',
          keyTerms: ['Bleed Area', 'CMYK Model', 'Halftone Dots', 'Bromide Film', 'Saddle Stitch', 'Perfect Binding']
        }
      },
      {
        id: 'p3-u1-q5',
        number: 5,
        question: 'Negative & Positives for Plate Making तथा विभिन्न Printing Types की तुलना करें।',
        topics: ['Negative vs Positive Plates', 'CTP (Computer-to-Plate)', 'Printing Methods Comparison'],
        answer: {
          summary: 'ऑफसेट प्लेट बनाने के लिए पारंपरिक रूप से फिल्म नेगेटिव या पॉजिटिव का उपयोग किया जाता था, जो आज आधुनिक CTP (Computer to Plate) लेजर तकनीक में बदल चुका है।',
          sections: [
            {
              heading: '1. नेगेटिव और पॉजिटिव प्लेट मेकिंग (Plate Making)',
              content: 'प्लेट बनाने की रासायनिक व प्रकाशिक प्रक्रिया:',
              points: [
                'नेगेटिव प्लेट्स: इसमें फिल्म पर टेक्स्ट पारदर्शी (Clear) और बैकग्राउंड काला होता है। यूवी प्रकाश पारदर्शी भाग से गुजरकर प्लेट के रासायनिक इमल्शन को सख्त (Harden) कर देता है। धोने के बाद स्याही ग्रहण करने वाला क्षेत्र बन जाता है।',
                'पॉजिटिव प्लेट्स: फिल्म पर इमेज अपारदर्शी होती है। गैर-इमेज क्षेत्र पर प्रकाश पड़ता है जो धुलकर साफ हो जाता है।',
                'आधुनिक CTP (Computer to Plate): फिल्म नेगेटिव/पॉजिटिव की आवश्यकता को समाप्त कर सीधे कंप्यूटर से लेजर बीम द्वारा एल्यूमीनियम प्लेट्स को एक्सपोज किया जाता है, जिससे समय और त्रुटियां बचती हैं।'
              ]
            },
            {
              heading: '2. विभिन्न मुद्रण प्रकारों की तुलना',
              content: 'लागत, गति और गुणवत्ता का विश्लेषण:',
              table: {
                headers: ['प्रिंटिंग प्रकार', 'प्लेट / सिलिंडर', 'उपयुक्तता (Best For)', 'लागत संरचना'],
                rows: [
                  ['ऑफसेट प्रिंटिंग', 'एल्यूमीनियम प्लेट + रबर ब्लैंकेट', 'समाचार पत्र, किताबें, ब्रोशर्स (बड़ी मात्रा)', 'शुरुआती प्लेट लागत मध्यम, प्रति कॉपी बहुत सस्ती'],
                  ['डिजिटल प्रिंटिंग', 'कोई प्लेट नहीं (लेजर/इंकजेट)', 'त्वरित 1 से 500 प्रतियां, तुरंत डिलीवरी', 'शुरुआती लागत शून्य, प्रति कॉपी समान लागत'],
                  ['फ्लेक्सोग्राफी', 'लचीली फोटोपॉलीमर रिलीफ प्लेट', 'पैकेजिंग, लेबल्स, नालीदार डिब्बे', 'प्लेट महंगी, भारी मात्रा के लिए किफायती'],
                  ['स्क्रीन प्रिंटिंग', 'मेश फैब्रिक स्टेंसिल', 'टी-शर्ट्स, शादी कार्ड, बोर्ड्स', 'न्यूनतम सेटअप लागत, धीमी गति']
                ]
              }
            }
          ],
          examTip: 'CTP (Computer-to-Plate) तकनीक का उल्लेख अवश्य करें जो आधुनिक ऑफसेट प्रेसों में उपयोग होती है।',
          keyTerms: ['Plate Exposure', 'UV Light', 'Negative vs Positive', 'CTP Technology', 'Digital vs Offset']
        }
      }
    ]
  },
  {
    unitNumber: 2,
    unitRoman: 'Unit II',
    title: 'एडोब पेजमेकर 7.0 बेसिक्स, टूल्स, लेआउट्स व स्टोरी एडिटर',
    questions: [
      {
        id: 'p3-u2-q1',
        number: 1,
        question: 'Adobe PageMaker 7.0: Introduction, DTP Software, Difference from Word Processing समझाइए।',
        topics: ['PageMaker 7.0 Intro', 'DTP vs Word Processor', 'Pasteboard Concept'],
        answer: {
          summary: 'एडोब पेजमेकर 7.0 एक प्रसिद्ध डेस्कटॉप पब्लिशिंग (DTP) सॉफ्टवेयर है जो फ्रेम-आधारित टेक्स्ट और ऑब्जेक्ट प्लेसमेंट के साथ जटिल पत्र-पत्रिकाओं और पुस्तकों के पेज लेआउट बनाने के लिए डिज़ाइन किया गया है।',
          sections: [
            {
              heading: '1. पेजमेकर का परिचय और पेस्टबोर्ड अवधारणा',
              content: 'पेजमेकर में "पेस्टबोर्ड" (Pasteboard) की अवधारणा होती है - जैसे एक चित्रकार की टेबल जहां मुख्य पेज के चारों ओर खाली कार्यक्षेत्र होता है। आप किसी भी टेक्स्ट या चित्र को अस्थायी रूप से पेस्टबोर्ड पर रख सकते हैं और आवश्यकता पड़ने पर किसी भी पेज पर ड्रैग कर सकते हैं।'
            },
            {
              heading: '2. वर्ड प्रोसेसर बनाम डीटीपी सॉफ्टवेयर (Word Processing vs DTP)',
              content: 'दोनों के मूलभूत अंतर:',
              table: {
                headers: ['लक्षण', 'Word Processor (जैसे MS Word)', 'DTP Software (PageMaker / InDesign)'],
                rows: [
                  ['मूल उद्देश्य', 'टेक्स्ट ड्राफ्टिंग, टाइपिंग, पत्र व साधारण रिपोर्ट', 'जटिल ग्राफिकल पेज लेआउट, पब्लिशिंग व प्रिंटिंग'],
                  ['टेक्स्ट का प्रवाह', 'लीनियर (एक पेज से स्वतः दूसरे पेज पर बहना)', 'फ्रेम-आधारित (टेक्स्ट ब्लॉक्स में सटीक नियंत्रण)'],
                  ['कलर सेपरेशन', 'सीमित CMYK समर्थन', 'पेशेवर CMYK कलर सेपरेशन और स्पॉट कलर्स'],
                  ['ऑब्जेक्ट प्लेसमेंट', 'पैराग्राफ बाउंड्रीज के सापेक्ष', 'माइक्रो-प्रिसिजन (पॉइंट्स/पाइका स्तर पर फ्री प्लेसमेंट)'],
                  ['टाइपोग्राफी नियंत्रण', 'बुनियादी स्पेसिंग टूल्स', 'अत्यधिक उन्नत कर्निग, ट्रैकिंग और लीडिंग नियंत्रण']
                ]
              }
            }
          ],
          examTip: 'पेस्टबोर्ड (Pasteboard) की कार्यप्रणाली को रेखाचित्र द्वारा स्पष्ट करें।',
          keyTerms: ['Adobe PageMaker 7.0', 'Pasteboard', 'Linear Flow', 'Frame Placement', 'Spot Colors']
        }
      },
      {
        id: 'p3-u2-q2',
        number: 2,
        question: 'Attribute Settings: Tools, Styles, Menus, Templates, Alignments, Grids, Guides, Keyboard Shortcuts समझाइए।',
        topics: ['PageMaker Toolbox (14 Tools)', 'Control Palette', 'Ruler Guides', 'Styles Palette', 'Shortcuts'],
        answer: {
          summary: 'पेजमेकर 7.0 में 14 आवश्यक टूल्स का टूलबॉक्स, कंट्रोल पैलेट, रूलर गाइड्स और स्टाइल्स पैलेट सटीक पेज डिजाइनिंग के लिए मुख्य नियंत्रण प्रदान करते हैं।',
          sections: [
            {
              heading: '1. पेजमेकर टूलबॉक्स के मुख्य टूल्स (Toolbox)',
              content: 'टूलबॉक्स में 14 प्रमुख टूल्स होते हैं:',
              points: [
                'Pointer Tool (F9): ऑब्जेक्ट्स और टेक्स्ट ब्लॉक्स को सेलेक्ट, मूव और रिसाइज करने हेतु।',
                'Text Tool (T): टेक्स्ट टाइप और सेलेक्ट करने के लिए आई-बीम कर्सर।',
                'Rotating Tool: टेक्स्ट या ग्राफिक को किसी भी कोण पर घुमाने के लिए।',
                'Cropping Tool: इंपोर्ट किए गए ग्राफिक्स के अनचाहे किनारों को काटने के लिए।',
                'Line & Constrained Line Tools: सीधी या 45°/90° की रेखाएं खींचने के लिए।',
                'Rectangle, Ellipse, Polygon Tools: बुनियादी आकृतियाँ और उनके संबंधित फ्रेम टूल्स।',
                'Hand Tool व Zoom Tool: पेज को पैन करने और ज़ूम इन/आउट करने हेतु।'
              ]
            },
            {
              heading: '2. ग्रिड्स और गाइड्स (Grids & Ruler Guides)',
              content: 'सटीक एलाइनमेंट के लिए रूलर्स (Ctrl + R) से माउस द्वारा खींची गई नॉन-प्रिंटिंग नीली रेखाएं (Ruler Guides) जिनका उपयोग सभी कॉलम और छवियों को एक सीध में रखने के लिए किया जाता है (Snap to Guides - Ctrl + Shift + ;)।'
            },
            {
              heading: '3. कंट्रोल पैलेट (Control Palette - Ctrl + \')',
              content: 'स्क्रीन के नीचे स्थित तैरती पट्टी जो चयनित ऑब्जेक्ट या टेक्स्ट के आधार पर तुरंत फॉन्ट, साइज, लीडिंग, ट्रैकिंग या चौड़ाई/ऊंचाई (W/H) के सटीक मान बदलने की अनुमति देती है।'
            }
          ],
          examTip: 'पॉइंटर टूल (Pointer Tool) और टेक्स्ट टूल (Text Tool) के कीबोर्ड शॉर्टकट्स का उल्लेख करें।',
          keyTerms: ['Toolbox 14 Tools', 'Pointer Tool', 'Cropping Tool', 'Control Palette Ctrl+\'', 'Ruler Guides', 'Snap to Guides']
        }
      },
      {
        id: 'p3-u2-q3',
        number: 3,
        question: 'Page Layouts: Margins, Orientations, Page Sizes; Text Editing/Manipulation; Magazine & Newspaper Layouts समझाइए।',
        topics: ['Document Setup Margins', 'Page Orientation', 'Newspaper Multi-column', 'Text Manipulation'],
        answer: {
          summary: 'पेज लेआउट में पृष्ठ का आकार, मार्जिन, ओरिएंटेशन और मल्टी-कॉलम संरचना निर्धारित की जाती है। समाचार पत्रों और पत्रिकाओं के लिए विशेष ग्रिड लेआउट तैयार किए जाते हैं।',
          sections: [
            {
              heading: '1. डॉक्यूमेंट सेटअप (Document Setup - File > Document Setup)',
              content: 'नया दस्तावेज़ बनाते समय मुख्य सेटिंग्स:',
              points: [
                'Page Size: Letter, Legal, A4, A3 या Custom (कस्टम साइज)।',
                'Orientation: Tall (Portrait - लंबवत) या Wide (Landscape - क्षैतिज)।',
                'Margins: Inside, Outside, Top, Bottom मार्जिन (किताबों में बाइंडिंग के लिए Inside मार्जिन अधिक रखा जाता है)।',
                'Double-sided & Facing Pages: पुस्तक प्रारूप में आमने-सामने के पृष्ठ देखने हेतु।'
              ]
            },
            {
              heading: '2. समाचार पत्र व पत्रिका लेआउट (Newspaper & Magazine Layouts)',
              content: 'बहु-स्तंभ लेआउट की तकनीकें:',
              points: [
                'Layout > Column Guides द्वारा पेज को 4, 6 या 8 कॉलमों में विभाजित करना।',
                'गटर स्पेस (Gutter Space): दो निकटवर्ती कॉलमों के बीच की खाली जगह।',
                'शीर्षक (Headlines) पूरे पेज में फैलाए जाते हैं जबकि मुख्य खबरें संकीर्ण कॉलमों में नीचे बहती हैं।'
              ]
            }
          ],
          examTip: 'Facing Pages और Gutter Margin का व्यावहारिक उपयोग (पुस्तक बाइंडिंग) परीक्षा में लिखें।',
          keyTerms: ['Document Setup', 'Tall vs Wide', 'Column Guides', 'Gutter Space', 'Facing Pages']
        }
      },
      {
        id: 'p3-u2-q4',
        number: 4,
        question: 'Filters, Import/Export, Placing Text/Images, Autoflow, Story Editor, Layout Views, Control Palette, Layers समझाइए।',
        topics: ['File > Place (Ctrl+D)', 'Autoflow Feature', 'Story Editor (Ctrl+E)', 'Control Palette', 'Layers Palette'],
        answer: {
          summary: 'पेजमेकर में बाहरी फाइलों को लाने के लिए Place कमांड, लंबी टेक्स्ट को स्वचालित रूप से कई पेजों में प्रवाहित करने के लिए Autoflow और त्वरित प्रूफरीडिंग के लिए स्टोरी एडिटर का उपयोग होता है।',
          sections: [
            {
              heading: '1. प्लेस कमांड और ऑटोफ्लो (Place & Autoflow)',
              content: 'टेक्स्ट और चित्र आयात करने की विधि:',
              points: [
                'File > Place (Ctrl + D): बाहरी वर्ड फाइल (.doc/.docx) या इमेज (TIFF, JPEG, EPS) को कर्सर में लोड करना। कर्सर लोडेड आइकन में बदल जाता है जिसे क्लिक करके टेक्स्ट ब्लॉक बनाया जाता है।',
                'ऑटोफ्लो (Autoflow - Layout > Autoflow): जब लंबी 50-पेज की पुस्तक का टेक्स्ट इंपोर्ट किया जाता है, तो ऑटोफ्लो ऑन होने पर टेक्स्ट एक कॉलम से अगले कॉलम और आवश्यकता पड़ने पर नए पेज जोड़कर स्वतः अंतिम शब्द तक बहता जाता है।'
              ]
            },
            {
              heading: '2. स्टोरी एडिटर (Story Editor - Ctrl + E)',
              content: 'लेआउट के फॉन्ट और ग्राफिक्स को छुपाकर केवल शुद्ध टेक्स्ट को एक तेज़ वर्ड-प्रोसेसर जैसी विंडो में खोलने का फीचर। इसमें फाइंड/रिप्लेस और स्पेलिंग चेक तेजी से किया जा सकता है।'
            },
            {
              heading: '3. लेयर्स पैलेट (Layers Palette - Window > Show Layers)',
              content: 'जटिल डिजाइनों में बैकग्राउंड, टेक्स्ट, इलस्ट्रेशन और विज्ञापनों को अलग-अलग पारदर्शी परतों (Layers) पर रखना जिससे उन्हें स्वतंत्र रूप से लॉक या हाइड किया जा सके।'
            }
          ],
          examTip: 'Autoflow का फ्लो-चार्ट बनाएं और Ctrl + E (Story Editor) का शॉर्टकट जरूर लिखें।',
          keyTerms: ['File > Place (Ctrl+D)', 'Loaded Cursor', 'Autoflow Layout', 'Story Editor Ctrl+E', 'Layers Palette']
        }
      },
      {
        id: 'p3-u2-q5',
        number: 5,
        question: 'Tab Setting, Columns & Gutters, Styles, Palettes & Colors, Document Setup & Preferences, Master Pages समझाइए।',
        topics: ['Indents/Tabs Dialog', 'Styles Palette', 'Colors Palette', 'Master Pages (L/R)', 'Preferences'],
        answer: {
          summary: 'टैब सेटिंग्स से सारणीबद्ध डेटा संरेखित होता है। स्टाइल्स पैलेट से हेडिंग्स को एकरूपता मिलती है और मास्टर पेज संपूर्ण पब्लिकेशन में दोहराए जाने वाले तत्वों को नियंत्रित करता है।',
          sections: [
            {
              heading: '1. इंडेंट्स और टैब्स (Indents / Tabs - Ctrl + I)',
              content: 'टेक्स्ट सेलेक्ट करके Type > Indents/Tabs डायलॉग बॉक्स खोला जाता है। इसमें रूलर पर Left, Right, Center और Decimal टैब स्टॉप्स लगाए जाते हैं और लीडर कैरेक्टर्स (जैसे डॉट्स ...... ) जोड़े जाते हैं।'
            },
            {
              heading: '2. स्टाइल्स और कलर्स पैलेट (Styles & Colors)',
              content: 'डिज़ाइन की निरंतरता:',
              points: [
                'Styles Palette (Ctrl + B): हेडिंग, सब-हेडिंग और बॉडी टेक्स्ट के लिए पूर्वनिर्धारित स्टाइल (Font, Size, Leading) बनाना और एक क्लिक में लागू करना।',
                'Colors Palette (Ctrl + J): टेक्स्ट या आकृतियों के लिए CMYK, RGB या पैनटोन (Pantone) शेड्स चुनना।'
              ]
            },
            {
              heading: '3. मास्टर पेजेस (Master Pages - L & R Icons)',
              content: 'पेजमेकर विंडो के सबसे नीचे बाएं कोने में L (Left) और R (Right) मास्टर पेज आइकन होते हैं। मास्टर पेज पर रखी गई कोई भी वस्तु (जैसे रनिंग हेडर, बॉर्डर, पेज नंबर `Ctrl + Alt + P`) दस्तावेज़ के प्रत्येक संबंधित पृष्ठ पर स्वतः दिखाई देती है।'
            }
          ],
          examTip: 'पेज नंबरिंग के लिए मास्टर पेज पर `Ctrl + Alt + P` दबाया जाता है (जिससे `LM` या `RM` मार्कर आता है), यह तथ्य जरूर लिखें।',
          keyTerms: ['Indents/Tabs Ctrl+I', 'Styles Ctrl+B', 'Colors Ctrl+J', 'Master Pages L/R', 'Automatic Page Numbering']
        }
      }
    ]
  },
  {
    unitNumber: 3,
    unitRoman: 'Unit III',
    title: 'एडवांस्ड पेजमेकर: टेक्स्ट रैपिंग, फ्रेम ऑप्शंस, ओएलई व प्रिंटिंग',
    questions: [
      {
        id: 'p3-u3-q1',
        number: 1,
        question: 'Page/Document Setup, Rulers, Unit Measurement, Bullets, Column Balancing, Breaks Arrange, Fill & Stroke समझाइए।',
        topics: ['Unit Measurements (Inches/Picas)', 'Bullets & Numbering Plugin', 'Column Balancing', 'Fill and Stroke (Ctrl+U)'],
        answer: {
          summary: 'दस्तावेज़ की सूक्ष्म सेटिंग्स में रूलर यूनिट्स बदलना, कॉलमों के टेक्स्ट की ऊंचाई को संतुलित करना और आकृतियों के भराव व सीमाओं (Fill & Stroke) को नियंत्रित करना शामिल है।',
          sections: [
            {
              heading: '1. रूलर्स और यूनिट मापन (Preferences)',
              content: 'File > Preferences > General (Ctrl + K) से रूलर की इकाइयाँ Inches, Millimeters, Picas या Points में बदली जा सकती हैं।'
            },
            {
              heading: '2. कॉलम बैलेंसिंग (Column Balancing)',
              content: 'Utilities > Plug-ins > Balance Columns: बहु-स्तंभ लेआउट में जब अंतिम पृष्ठ पर एक कॉलम में अधिक टेक्स्ट और दूसरे में कम होता है, तो यह प्लगइन दोनों कॉलमों की नीचे की पंक्ति को एक समान स्तर पर संतुलित कर देता है।'
            },
            {
              heading: '3. फिल और स्ट्रोक (Fill and Stroke - Element > Fill and Stroke)',
              content: 'किसी भी बंद आकृति (आयत, वृत्त, बहुभुज) के आंतरिक रंग (Fill - None, Solid, Paper, Tint %) और बाहरी सीमा रेखा (Stroke - मोटाई 0.5pt, 1pt, 2pt, Dashed, Dotted) को निर्धारित करना।'
            }
          ],
          examTip: 'Balance Columns प्लगइन का उद्देश्य परीक्षा में स्पष्ट करें।',
          keyTerms: ['Preferences Ctrl+K', 'Balance Columns Plugin', 'Fill and Stroke', 'Border Tints']
        }
      },
      {
        id: 'p3-u3-q2',
        number: 2,
        question: 'Text Wrapping, Orphan Lines, Revert Command, Drop Caps, Style Formats, Editing Graphics & Frames, Defining Styles समझाइए।',
        topics: ['Text Wrap (Element > Text Wrap)', 'Widow & Orphan Lines', 'Revert Command', 'Drop Cap Plugin', 'Text Frames'],
        answer: {
          summary: 'टेक्स्ट रैप किसी ग्राफिक के चारों ओर टेक्स्ट को प्रवाहित करता है। विडो और ऑर्फ़न पंक्तियों को टाइपोग्राफी में रोका जाता है और रिवर्ट कमांड से अंतिम सेव की गई अवस्था में वापस आया जाता है।',
          sections: [
            {
              heading: '1. टेक्स्ट रैपिंग (Text Wrap - Element > Text Wrap)',
              content: 'जब किसी चित्र को टेक्स्ट के बीच रखा जाता है, तो तीन विकल्प मिलते हैं:',
              points: [
                '1. No Wrap (टेक्स्ट चित्र के ऊपर या पीछे से बहता है)।',
                '2. Rectangular Wrap (टेक्स्ट चित्र के चारों ओर आयताकार सीमा में मुड़ता है)।',
                '3. Custom Wrap (चित्र के अनियमित आकार के अनुसार डॉट्स को खींचकर टेक्स्ट को चारों ओर लपेटना)। स्टैंडऑफ (Standoff) द्वारा चित्र और टेक्स्ट के बीच की दूरी तय होती है।'
              ]
            },
            {
              heading: '2. ऑर्फ़न और विडो पंक्तियाँ (Orphan & Widow Lines)',
              content: 'अवांछित अलग-थलग पंक्तियाँ:',
              points: [
                'Orphan: किसी पैराग्राफ की पहली पंक्ति जो पेज के बिल्कुल तल (Bottom) पर अकेली रह जाती है।',
                'Widow: किसी पैराग्राफ की अंतिम छोटी पंक्ति जो अगले पेज के शीर्ष (Top) पर अकेली चली जाती है। इसे टाइपोग्राफी में दोष माना जाता है।'
              ]
            },
            {
              heading: '3. रिवर्ट कमांड (File > Revert)',
              content: 'यदि डिज़ाइन में गलत बदलाव हो गए हों, तो बिना फाइल बंद किए सीधे अंतिम सेव की गई (Last Saved) स्थिति पर लौटने के लिए Revert का उपयोग होता है।'
            }
          ],
          examTip: 'Custom Text Wrap में बाउंड्री डॉट्स (Standoff boundary) को मॉडिफाई करने का उल्लेख करें।',
          keyTerms: ['Text Wrap Standoff', 'Widow & Orphan Control', 'File > Revert', 'Drop Cap Plugin', 'Frame Options']
        }
      },
      {
        id: 'p3-u3-q3',
        number: 3,
        question: 'OLE & Embedding, Plugins, Mathematic Equation, Table Editor, Polygon Setting, Rounded Corners समझाइए।',
        topics: ['OLE (Object Linking & Embedding)', 'PageMaker Plugins', 'Adobe Table Editor', 'Polygon Settings', 'Rounded Corners'],
        answer: {
          summary: 'पेजमेकर बाहरी एप्लिकेशनों से ओएलई के जरिए लाइव डेटा जोड़ सकता है और इसमें बहुभुज सेटिंग्स, टेबल एडिटर व प्लगइन्स की समृद्ध क्षमताएं हैं।',
          sections: [
            {
              heading: '1. ओएलई और एम्बेडिंग (OLE - Object Linking & Embedding)',
              content: 'विंडोज की तकनीक जिसके द्वारा एक्सेल चार्ट या वर्ड दस्तावेज़ को पेजमेकर में डाला जाता है। यदि लिंक की गई मूल एक्सेल फाइल में डेटा बदलता है, तो पेजमेकर में वह चार्ट स्वतः अपडेट हो जाता है।'
            },
            {
              heading: '2. एडोब टेबल एडिटर (Adobe Table Editor)',
              content: 'पेजमेकर के साथ आने वाला एक अलग यूटिलिटी प्रोग्राम जिसमें जटिल वित्तीय और सारणीबद्ध डेटा की टेबल्स बनाकर उन्हें सीधे पेजमेकर लेआउट में इंपोर्ट किया जाता है।'
            },
            {
              heading: '3. पॉलीगॉन सेटिंग्स और राउंडेड कॉर्नर्स',
              content: 'आकृतियों का कस्टमाइजेशन:',
              points: [
                'Element > Polygon Settings: भुजाओं की संख्या (Number of sides - 3 से 100) और स्टार इन्सेट (Star Inset %) बदलकर तारे (Stars) या बहुभुज बनाना।',
                'Element > Rounded Corners: आयत के तीखे कोनों को 6 अलग-अलग शैलियों में गोल घुमावदार बनाना।'
              ]
            }
          ],
          examTip: 'Polygon Settings में "Star Inset" का उपयोग स्टार शेप्स (जैसे डिस्काउंट बैज) बनाने के लिए होता है, यह लिखें।',
          keyTerms: ['OLE Linking', 'Adobe Table Editor', 'Polygon Settings Star Inset', 'Rounded Corners', 'Plug-ins']
        }
      },
      {
        id: 'p3-u3-q4',
        number: 4,
        question: 'Master Pages, Headers/Footers, Frame Options, View Menu, Print Setup, Paste Multiple/Special समझाइए।',
        topics: ['Multiple Master Pages', 'Headers & Footers', 'Frame Content Attachment', 'Paste Multiple', 'Print Dialog'],
        answer: {
          summary: 'मास्टर पेजेस सामान्य तत्वों को दोहराते हैं। पेस्ट मल्टीपल से एक ही ऑब्जेक्ट की दर्जनों कॉपियां एक निश्चित ऑफसेट पर तुरंत बनाई जाती हैं।',
          sections: [
            {
              heading: '1. फ्रेम ऑप्शंस (Element > Frame)',
              content: 'पेजमेकर में आकृतियों (Rectangles, Ellipses) को फ्रेम में बदला जा सकता है। किसी टेक्स्ट या चित्र को फ्रेम से जोड़ने के लिए "Attach Content" का उपयोग किया जाता है। फ्रेम का आकार बदलने पर अंदर की सामग्री स्वतः समायोजित होती है।'
            },
            {
              heading: '2. पेस्ट मल्टीपल (Edit > Paste Multiple)',
              content: 'किसी ऑब्जेक्ट (जैसे टिकट, कूपन या लेबल) को कॉपी करने के बाद, एक ही क्लिक में उसकी 10 या 20 कॉपियाँ क्षैतिज और लंबवत निश्चित दूरी (Horizontal & Vertical Offset) पर एक साथ चिपकाना।'
            },
            {
              heading: '3. प्रिंट सेटअप (File > Print - Ctrl + P)',
              content: 'व्यावसायिक मुद्रण के लिए प्रिंट सेटिंग्स: Printer चयन, Copies, Pages (All, Ranges), Print Color Separations (प्रत्येक CMYK प्लेट अलग छापना), Tiling (बड़े पेजों को टुकड़ों में छापना), और PostScript ऑप्शंस।'
            }
          ],
          examTip: 'Paste Multiple का व्यावहारिक उपयोग (आईडी कार्ड्स या कूपन्स की ग्रिड बनाना) परीक्षा में लिखें।',
          keyTerms: ['Attach Content to Frame', 'Paste Multiple Offset', 'Color Separation Print', 'Tiling Large Pages']
        }
      },
      {
        id: 'p3-u3-q5',
        number: 5,
        question: 'Managing & Printing Publications (Tiles, Multiple Copies); Page Layout Designing के उदाहरण दीजिए।',
        topics: ['Tile Printing (Manual & Auto)', 'Multiple Copies Collate', 'Practical Layout: Visiting Card', 'Practical Layout: Book Chapter'],
        answer: {
          summary: 'बड़े बैनरों या पोस्टरों को छोटे प्रिंटर पर छापने के लिए टाइलिंग का उपयोग होता है। विजिटिंग कार्ड और पुस्तक लेआउट की व्यावहारिक डिजाइनिंग में सटीक मार्जिन और ग्रिड्स का महत्व है।',
          sections: [
            {
              heading: '1. टाइल प्रिंटिंग (Tiling in Print)',
              content: 'जब किसी दस्तावेज़ का आकार (जैसे A2 या बैनर) प्रिंटर के कागज आकार (A4) से बड़ा होता है, तो File > Print > Features में "Tiling" विकल्प चुना जाता है।',
              points: [
                'Manual Tiling: यूजर स्वयं तय करता है कि कौन सा हिस्सा किस पेज पर छपेगा।',
                'Auto Tiling: पेजमेकर पूरे बड़े पेज को ओवरलैप (जैसे 0.5 इंच) के साथ कई A4 पन्नों पर स्वतः विभाजित कर देता है, जिन्हें बाद में आपस में चिपकाकर बड़ा बैनर बनाया जाता है।'
              ]
            },
            {
              heading: '2. व्यावहारिक डिज़ाइन उदाहरण: विजिटिंग कार्ड (Business Card Layout)',
              content: 'चरणबद्ध डिज़ाइन:',
              points: [
                'मानक आकार: 3.5 x 2.0 इंच। डॉक्यूमेंट सेटअप में साइज सेट करें।',
                'गाइड्स: चारों ओर 0.125 इंच का सेफ मार्जिन लगाएं।',
                'कंपोनेंट्स: शीर्ष पर कंपनी लोगो, बीच में Bold नाम (12pt), पद (9pt), नीचे फोन, ईमेल और पता (8pt)।',
                'आउटपुट: 10 कार्ड्स प्रति A4 शीट पर Paste Multiple द्वारा व्यवस्थित करके मुद्रित करना।'
              ]
            }
          ],
          examTip: 'विजिटिंग कार्ड का मानक आकार 3.5 x 2.0 इंच और उसका रफ लेआउट पेंसिल से बनाएं।',
          keyTerms: ['Tile Printing Overlap', 'Collate Copies', 'Business Card 3.5x2"', 'Safe Margin', 'Imposition']
        }
      }
    ]
  },
  {
    unitNumber: 4,
    unitRoman: 'Unit IV',
    title: 'फोटोशॉप फंडामेंटल्स, वेक्टर बनाम रास्टर, कलर मोड्स व रेजोल्यूशन',
    questions: [
      {
        id: 'p3-u4-q1',
        number: 1,
        question: 'Photoshop Documents, Graphic File Extensions (JPG, GIF, PNG, TIF, BMP, PSD, CDR, SVG), Photoshop Environment समझाइए।',
        topics: ['Photoshop Environment', 'Graphic File Formats', 'PSD vs JPEG vs PNG vs TIFF', 'Vector vs Raster Extensions'],
        answer: {
          summary: 'एडोब फोटोशॉप उद्योग-मानक रास्टर इमेज एडिटिंग और डिजिटल आर्ट सॉफ्टवेयर है। यह विभिन्न ग्राफिक फाइल प्रारूपों का समर्थन करता है जिनमें से प्रत्येक के विशिष्ट उपयोग हैं।',
          sections: [
            {
              heading: '1. फोटोशॉप कार्य परिवेश (Workspace Environment)',
              content: 'फोटोशॉप विंडो के मुख्य घटक: मेनू बार, ऑप्शन बार (टूल की सेटिंग्स), टूलबॉक्स (बाईं ओर), एक्टिव इमेज कैनवास (मध्य में), और पैलेट्स (दाईं ओर - लेयर्स, हिस्ट्री, कलर्स, चैनल्स)।'
            },
            {
              heading: '2. ग्राफिक फाइल एक्सटेंशन और उनकी विशेषताएं',
              content: 'सर्वाधिक उपयोग किए जाने वाले फॉर्मेट्स:',
              table: {
                headers: ['एक्सटेंशन', 'पूर्ण नाम', 'प्रकार', 'मुख्य उपयोग व विशेषता'],
                rows: [
                  ['.PSD', 'Photoshop Document', 'रास्टर (नेगेटिव)', 'फोटोशॉप की मूल फाइल; लेयर्स, मास्क, टेक्स्ट को संपादन योग्य रखती है'],
                  ['.JPEG / .JPG', 'Joint Photographic Experts Group', 'रास्टर (लॉसी)', 'डिजिटल फोटोग्राफी और वेब; छोटा फाइल साइज, पारदर्शी नहीं'],
                  ['.PNG', 'Portable Network Graphics', 'रास्टर (लॉसलेस)', 'वेब ग्राफिक्स, पारदर्शी पृष्ठभूमि (Transparent Background) समर्थन'],
                  ['.GIF', 'Graphics Interchange Format', 'रास्टर (8-बिट)', 'अधिकतम 256 रंग, साधारण वेब एनिमेशन और आइकन्स'],
                  ['.TIFF', 'Tagged Image File Format', 'रास्टर (लॉसलेस)', 'हाई-क्वालिटी प्रिंटिंग, प्री-प्रेस और प्रोफेशनल स्कैनिंग'],
                  ['.SVG', 'Scalable Vector Graphics', 'वेक्टर (XML)', 'वेब पर बिना पिक्सेल फटे किसी भी आकार में स्केल होने वाले आइकन्स'],
                  ['.CDR', 'CorelDraw Document', 'वेक्टर', 'कोरलड्रॉ की मूल फाइल लेआउट और लोगो डिजाइन के लिए']
                ]
              }
            }
          ],
          examTip: 'PSD (लेयर्स सुरक्षित रखता है) और JPEG (फ्लैट लॉसी कंप्रेस) का अंतर परीक्षा में अवश्य लिखें।',
          keyTerms: ['Photoshop Workspace', 'PSD Native Format', 'Lossy vs Lossless', 'Transparency in PNG', 'TIFF Pre-press']
        }
      },
      {
        id: 'p3-u4-q2',
        number: 2,
        question: 'Vector vs Raster Images: Definition, Features, Advantages/Disadvantages; Bitmap Graphics, Pixels, Application Programs समझाइए।',
        topics: ['Raster / Bitmap Graphics', 'Vector Graphics', 'Pixels & Resolution', 'तुलनात्मक तालिका', 'Software Examples'],
        answer: {
          summary: 'डिजिटल ग्राफिक्स दो प्रकार के होते हैं: रास्टर (पिक्सेल ग्रिड पर आधारित) और वेक्टर (गणितीय सूत्रों और बिंदुओं पर आधारित)।',
          sections: [
            {
              heading: '1. रास्टर बनाम वेक्टर ग्राफिक्स की तुलना',
              content: 'विस्तृत तकनीकी तुलना:',
              table: {
                headers: ['लक्षण', 'रास्टर ग्राफिक्स (Bitmap / Pixels)', 'वेक्टर ग्राफिक्स (Vector / Mathematical)'],
                rows: [
                  ['मूल इकाई', 'पिक्सेल (रंगीन चौकोर डॉट्स का ग्रिड)', 'गणितीय सूत्र, रेखाएं, वक्र (Bézier curves) और नोड्स'],
                  ['स्केलेबिलिटी', 'ज़ूम करने पर पिक्सेलेट (Pixelated / ब्लर) हो जाती है', 'अनंत स्केलेबिलिटी; चाहे कितना भी बड़ा करें, शार्पनेस वही रहती है'],
                  ['फाइल साइज', 'बड़ा साइज (रेजोल्यूशन और आयाम पर निर्भर)', 'अपेक्षाकृत बहुत छोटा फाइल साइज'],
                  ['उपयुक्तता', 'वास्तविक फोटोग्राफ्स, जटिल शेडिंग, पेंटिंग', 'लोगो, टाइपोग्राफी, आइकन्स, तकनीकी आरेख'],
                  ['प्रमुख सॉफ्टवेयर', 'Adobe Photoshop, Corel Photo-Paint, MS Paint', 'Adobe Illustrator, CorelDraw, Figma, Inkscape'],
                  ['एक्सटेंशन', '.PSD, .JPG, .PNG, .BMP, .TIFF', '.AI, .CDR, .SVG, .EPS']
                ]
              }
            },
            {
              heading: '2. पिक्सेल (Pixel) की अवधारणा',
              content: 'पिक्सेल "Picture Element" का संक्षिप्त रूप है। यह किसी भी डिजिटल रास्टर इमेज की सबसे छोटी व्यक्तिगत रंगीन इकाई है। मॉनिटर या प्रिंट पर लाखों पिक्सेल मिलकर एक संपूर्ण चित्र का निर्माण करते हैं।'
            }
          ],
          examTip: 'वेक्टर ग्राफिक्स को कितना भी बड़ा करने पर गुणवत्ता नहीं घटती (Resolution Independent), यह मुख्य बिंदु लिखें।',
          keyTerms: ['Raster vs Vector', 'Picture Element Pixel', 'Pixelation', 'Resolution Independent', 'Bézier Curves']
        }
      },
      {
        id: 'p3-u4-q3',
        number: 3,
        question: 'Color Modes/Models: HSB, RGB, CMYK, Bitmap, Grayscale, Duotone; Color Mode Conversion समझाइए।',
        topics: ['RGB Model (Additive)', 'CMYK Model (Subtractive)', 'HSB Model', 'Grayscale & Duotone', 'Mode Conversion'],
        answer: {
          summary: 'कलर मोड्स यह निर्धारित करते हैं कि डिजिटल इमेज में रंगों को कैसे प्रदर्शित और प्रोसेस किया जाए। स्क्रीन के लिए RGB और प्रिंटिंग के लिए CMYK प्राथमिक मॉडल हैं।',
          sections: [
            {
              heading: '1. प्रमुख कलर मोड्स (Color Modes & Models)',
              content: 'विभिन्न प्रकाशिक और प्रिंट मॉडल:',
              points: [
                'RGB (Red, Green, Blue): योगात्मक (Additive) मॉडल। मॉनिटर, स्मार्टफोन और कैमरों के लिए। तीनों को मिलाने पर शुद्ध सफेद (White) बनता है। प्रत्येक चैनल 0 से 255 (कुल 1.67 करोड़ रंग)।',
                'CMYK (Cyan, Magenta, Yellow, Black): घटावपरक (Subtractive) मॉडल। ऑफसेट और रंगीन प्रिंटिंग के लिए। चारों को मिलाने पर गहरा काला बनता है (प्रतिशत 0% से 100%)।',
                'HSB (Hue, Saturation, Brightness): मानव दृष्टि के आधार पर रंग का नाम (Hue 0-360°), शुद्धता (Saturation 0-100%) और चमक (Brightness 0-100%)।',
                'Grayscale: 8-बिट मोड जिसमें केवल 256 ग्रे शेड्स (शुद्ध काले से सफेद तक) होते हैं।',
                'Bitmap (1-bit): केवल दो रंग - शुद्ध काला या शुद्ध सफेद (कोई ग्रे शेड नहीं)।',
                'Duotone: दो अलग-अलग रंगों (जैसे काला + नेवी ब्लू या सेपिया) के मिश्रण से बनाई गई कलात्मक मोनोक्रोम प्रिंटिंग।'
              ]
            },
            {
              heading: '2. कलर मोड रूपांतरण (Image > Mode)',
              content: 'प्रिंटिंग के लिए तैयार करने हेतु RGB फाइल को Image > Mode > CMYK Color में बदला जाता है। ध्यान रहे कि कुछ चमकीले RGB नियॉन रंग CMYK में परिवर्तित होने पर थोड़े फीके (Gamut Warning) हो सकते हैं।'
            }
          ],
          examTip: 'RGB योगात्मक (Additive - प्रकाश) है और CMYK घटावपरक (Subtractive - स्याही) है, यह वैज्ञानिक अंतर लिखें।',
          keyTerms: ['RGB Additive', 'CMYK Subtractive', 'Color Gamut', 'HSB Model', 'Grayscale 256 Shades', 'Duotone']
        }
      },
      {
        id: 'p3-u4-q4',
        number: 4,
        question: 'Image Size & Resolution, Changing, Getting from Input Devices, Creating New Image समझाइए।',
        topics: ['PPI vs DPI', 'Image Dimensions', 'Resampling (Bicubic)', 'File > New Canvas Setup', 'Scanner/Camera Acquisition'],
        answer: {
          summary: 'इमेज का आकार और रेजोल्यूशन उसकी छपाई गुणवत्ता और स्क्रीन स्पष्टता तय करते हैं। इमेज साइज डायलॉग बॉक्स से आयाम और रेजोल्यूशन को नियंत्रित किया जाता है।',
          sections: [
            {
              heading: '1. इमेज रेजोल्यूशन (Resolution: PPI vs DPI)',
              content: 'रेजोल्यूशन प्रति इंच पिक्सल्स की सघनता को दर्शाता है:',
              points: [
                'वेब और स्क्रीन के लिए मानक: 72 PPI (Pixels Per Inch) या 96 PPI (छोटा फाइल साइज, तेज लोडिंग)।',
                'हाई-क्वालिटी प्रिंटिंग के लिए मानक: 300 DPI (Dots Per Inch) या PPI। 300 DPI से कम होने पर प्रिंट धुंधला या पिक्सेलेटेड आता है।'
              ]
            },
            {
              heading: '2. इमेज साइज बदलना (Image > Image Size - Alt + Ctrl + I)',
              content: 'डायलॉग बॉक्स में दो विकल्प:',
              points: [
                'Pixel Dimensions: स्क्रीन पर चौड़ाई और ऊंचाई पिक्सल्स में।',
                'Document Size: वास्तविक प्रिंट आकार (Inches/cm में) और रेजोल्यूशन।',
                'रीसैंपलिंग (Resample Image): पिक्सल्स की संख्या बढ़ाना (Upscale - Bicubic Smoother) या घटाना (Downscale - Bicubic Sharper)।'
              ]
            },
            {
              heading: '3. नया कैनवास बनाना (File > New - Ctrl + N)',
              content: 'Width, Height, Units, Resolution, Color Mode और Background Contents (White, Black, Transparent) चुनकर नया खाली कैनवास बनाना।'
            }
          ],
          examTip: 'वेब के लिए 72 PPI और प्रिंटिंग के लिए 300 DPI का मानक मान परीक्षा में अवश्य लिखें।',
          keyTerms: ['PPI vs DPI', '300 DPI Standard', 'Resampling Bicubic', 'Canvas Setup Ctrl+N', 'Aspect Ratio Lock']
        }
      },
      {
        id: 'p3-u4-q5',
        number: 5,
        question: 'File Browser, Opening/Importing, Selecting Image, Adjusting Pixel, Snap Command, Saving/Loading/Deleting Selection समझाइए।',
        topics: ['Adobe Bridge / File Browser', 'Selection Tools (Marquee, Lasso, Magic Wand)', 'Snap Command', 'Save Selection Channel'],
        answer: {
          summary: 'फोटोशॉप में संपादन का मूल नियम है "Select first, then modify"। चयन (Selection) को सहेजना, लोड करना और स्नैप कमांड सटीक एडिटिंग के आधार हैं।',
          sections: [
            {
              heading: '1. इमेज ओपन करना और फाइल ब्राउज़र (Adobe Bridge)',
              content: 'File > Open (Ctrl + O) या Adobe Bridge का उपयोग करके थंबनेल पूर्वावलोकन, मेटाडेटा और रेटिंग के साथ फोटो ब्राउज़ करके खोलना।'
            },
            {
              heading: '2. मुख्य सिलेक्शन टूल्स (Selection Tools)',
              content: 'वांछित हिस्से को चुनने के साधन:',
              points: [
                'Marquee Tools: आयताकार (Rectangular) या अंडाकार (Elliptical) चयन।',
                'Lasso Tools: Freehand Lasso, Polygonal Lasso (सीधी रेखाएं), और Magnetic Lasso (किनारों से चिपकने वाला)।',
                'Magic Wand व Quick Selection: समान रंग शेड वाले पिक्सल्स को एक क्लिक में चुनना (टॉलरेंस सेटिंग्स के साथ)।',
                'Object Selection Tool: एआई आधारित टूल जो विषय (Subject) को स्वतः पहचानकर सेलेक्ट कर लेता है।'
              ]
            },
            {
              heading: '3. सिलेक्शन को सेव और लोड करना (Save / Load Selection)',
              content: 'जटिल चयन (जैसे बालों या जटिल मॉडल का सिलेक्शन) को बार-बार बनाने से बचने के लिए Select > Save Selection चुनकर उसे एक अल्फा चैनल (Alpha Channel) के रूप में नाम देकर सहेजा जाता है। बाद में Select > Load Selection से पुनः सक्रिय किया जा सकता है।'
            },
            {
              heading: '4. स्नैप कमांड (View > Snap)',
              content: 'जब कोई ऑब्जेक्ट या सिलेक्शन गाइड्स, ग्रिड या लेयर एज के पास जाता है, तो वह चुंबक की तरह सटीक संरेखण में चिपक (Snap) जाता है।'
            }
          ],
          examTip: 'Save Selection द्वारा अल्फा चैनल (Alpha Channel) बनता है, इसका उल्लेख तकनीकी रूप से करें।',
          keyTerms: ['Marquee Tools', 'Magnetic Lasso', 'Magic Wand Tolerance', 'Save Selection', 'Alpha Channel', 'Snap to Guides']
        }
      }
    ]
  },
  {
    unitNumber: 5,
    unitRoman: 'Unit V',
    title: 'लेयर्स, फिल्टर्स, मास्किंग, एडोब इनडिजाइन व AI डिजाइन टूल्स',
    questions: [
      {
        id: 'p3-u5-q1',
        number: 1,
        question: 'Photoshop PSD Files, Screen & Work Area Interfaces: Menu Bar, Option Bar, Palette, Active Image Area, Tool Box समझाइए।',
        topics: ['PSD File Structure', 'Menu Bar & Options Bar', 'Toolbox Organization', 'Docked Palettes', 'Document Window'],
        answer: {
          summary: 'फोटोशॉप का वर्कस्पेस एक अत्यंत संगठित कार्यक्षेत्र है जहां मेनू बार, संदर्भ-संवेदनशील ऑप्शन बार, टूलबॉक्स और डॉक्ड पैलेट्स मिलकर काम करते हैं। PSD इसकी मूल मल्टी-लेयर फाइल होती है।',
          sections: [
            {
              heading: '1. वर्कस्पेस के पाँच मुख्य घटक',
              content: 'स्क्रीन संरचना का विवरण:',
              points: [
                '1. मेनू बार (Menu Bar): शीर्ष पर स्थित File, Edit, Image, Layer, Select, Filter, View, Window मेनू।',
                '2. ऑप्शन बार (Options Bar): मेनू बार के ठीक नीचे स्थित। आप टूलबॉक्स से जो भी टूल चुनते हैं (जैसे ब्रश या लासो), यह बार उस टूल के विशिष्ट विकल्प (Size, Hardness, Opacity, Tolerance) प्रदर्शित करता है।',
                '3. टूलबॉक्स (Toolbox): बाईं ओर स्थित 60+ टूल्स का संग्रह (Selection, Crop, Retouch, Paint, Draw, Navigate)।',
                '4. एक्टिव इमेज एरिया (Canvas): मध्य में खुला दस्तावेज़ जहाँ चित्र का वास्तविक संपादन होता है।',
                '5. पैलेट्स / पैनल्स (Palettes): दाईं ओर डॉक किए गए पैनल्स जैसे Layers, Channels, Paths, History, Adjustments, Color Swatches।'
              ]
            },
            {
              heading: '2. PSD फाइल की संरचना',
              content: 'PSD (Photoshop Document) एक गैर-विनाशकारी (Non-destructive) मास्टर फाइल है जो सभी अलग-अलग लेयर्स, वेक्टर मास्क, एडजस्टमेंट लेयर्स, स्मार्ट ऑब्जेक्ट्स और टेक्स्ट को भविष्य के संपादन के लिए सुरक्षित रखती है।'
            }
          ],
          examTip: 'ऑप्शन बार (Options Bar) चयनित टूल के अनुसार गतिशील रूप से बदलता है, यह बिंदु लिखें।',
          keyTerms: ['Options Bar Dynamic', 'Toolbox Clusters', 'Active Canvas', 'Docked Palettes', 'Master PSD']
        }
      },
      {
        id: 'p3-u5-q2',
        number: 2,
        question: 'Opening, Saving, Closing Files; Tools: Icons, Names, Usage; History Option; Basic Image Manipulations समझाइए।',
        topics: ['Basic File Operations', 'History Palette & Undo', 'Clone Stamp & Healing Brush', 'Crop & Rotate Canvas'],
        answer: {
          summary: 'फोटोशॉप में फाइलों का प्रबंधन, हिस्ट्री पैलेट द्वारा गैर-विनाशकारी पूर्ववत (Undo), और क्लोन स्टैम्प व हीलिंग ब्रश जैसे बेसिक मैनिपुलेशन टूल्स दोषरहित फोटो सुधार संभव बनाते हैं।',
          sections: [
            {
              heading: '1. प्रमुख रीटचिंग टूल्स (Retouching Tools)',
              content: 'तस्वीरों को सुधारने के आवश्यक टूल्स:',
              points: [
                'स्पॉट हीलिंग ब्रश (Spot Healing Brush): पिंपल्स, झुर्रियों या खरोंचों पर सिर्फ क्लिक करने से आसपास के पिक्सल्स को ब्लेंड करके दोष मिटा देता है।',
                'क्लोन स्टैम्प टूल (Clone Stamp Tool - S): Alt कुंजी दबाकर किसी अच्छे हिस्से का सैंपल लेता है और उसे दूसरे हिस्से पर हूबहू पेंट कर देता है।',
                'इरेज़र टूल (Eraser Tool - E): पिक्सल्स को मिटाना (बैकग्राउंड लेयर पर बैकग्राउंड कलर या सामान्य लेयर पर ट्रांसपेरेंसी बनाता है)।'
              ]
            },
            {
              heading: '2. हिस्ट्री पैलेट (History Palette)',
              content: 'यह उपयोगकर्ता द्वारा किए गए पिछले 20 से 50 चरणों (States) की क्रमिक सूची दिखाता है। किसी भी पिछली स्थिति पर क्लिक करके उस समय के कैनवास पर तुरंत वापस जाया जा सकता है।',
              points: [
                'स्नैपशॉट (Snapshot): संपादन के किसी विशिष्ट महत्वपूर्ण पड़ाव का स्थायी बैकअप बनाना।'
              ]
            },
            {
              heading: '3. बुनियादी इमेज मैनिपुलेशन (Basic Manipulations)',
              content: 'Image > Image Rotation (90° CW, 180°, Flip Horizontal), Crop Tool (C) से अनावश्यक भाग काटना, और Free Transform (Ctrl + T) से आकार व कोण बदलना।'
            }
          ],
          examTip: 'Clone Stamp टूल में स्रोत (Source) सेलेक्ट करने के लिए `Alt + Click` किया जाता है, यह जरूर लिखें।',
          keyTerms: ['Spot Healing Brush', 'Clone Stamp Alt+Click', 'History States', 'Snapshot', 'Free Transform Ctrl+T']
        }
      },
      {
        id: 'p3-u5-q3',
        number: 3,
        question: 'Layers & Palettes: Use, Creating, Layer Palette; Working with Layered Image: Layer Sets, Selecting, Displaying, Duplicating, Changing Order, Renaming, Deleting समझाइए।',
        topics: ['Layer Concept (Transparent Sheets)', 'Layer Operations', 'Layer Groups / Sets', 'Blending Modes', 'Layer Opacity'],
        answer: {
          summary: 'लेयर्स फोटोशॉप का सबसे शक्तिशाली स्तंभ हैं। इन्हें एक के ऊपर एक रखी पारदर्शी कांच की शीटों की तरह समझा जा सकता है। किसी एक लेयर पर काम करने से बाकी लेयर्स का डेटा सुरक्षित रहता है।',
          sections: [
            {
              heading: '1. लेयर्स की मूल अवधारणा और लेयर पैलेट (F7)',
              content: 'लेयर्स के बिना जटिल ग्राफिक्स डिजाइन करना असंभव है। लेयर पैलेट में दृश्यता आंख (Eye Icon), ओपेसिटी (Opacity 0-100%), और ब्लेंडिंग मोड्स (Normal, Multiply, Screen, Overlay) होते हैं।'
            },
            {
              heading: '2. लेयर संचालन (Working with Layers)',
              content: 'महत्वपूर्ण लेयर क्रियाएं:',
              points: [
                'नई लेयर बनाना: Ctrl + Shift + N या लेयर पैलेट के नीचे "+" आइकन पर क्लिक करना।',
                'डुप्लिकेट लेयर (Duplicate): Ctrl + J दबाकर वर्तमान लेयर की तुरंत हूबहू नकल बनाना।',
                'क्रम बदलना (Reordering): लेयर को माउस से ऊपर या नीचे ड्रैग करना; सबसे ऊपर वाली लेयर सबसे आगे दिखाई देती है (Ctrl + [ या Ctrl + ])।',
                'लेयर सेट्स / ग्रुप्स (Layer Groups): संबंधित लेयर्स को सेलेक्ट करके Ctrl + G दबाना जिससे एक फोल्डर (Group) बन जाता है। इससे जटिल प्रोजेक्ट सुव्यवस्थित रहते हैं।',
                'नाम बदलना व हटाना: लेयर के नाम पर डबल-क्लिक करके रीनेम करना; हटाने के लिए Delete कुंजी दबाना।'
              ]
            }
          ],
          examTip: 'लेयर डुप्लिकेट करने का शॉर्टकट `Ctrl + J` और ग्रुप बनाने का `Ctrl + G` है, इसे उत्तर में हाइलाइट करें।',
          keyTerms: ['Transparent Sheets', 'Layer Palette F7', 'Ctrl+J Duplicate', 'Ctrl+G Group', 'Blending Modes', 'Opacity']
        }
      },
      {
        id: 'p3-u5-q4',
        number: 4,
        question: 'Filters: Filter Gallery, Dialogue Box, Applying/Blending Filters, Choosing Effects; Masking Tools & Effects; Channels समझाइए।',
        topics: ['Filter Gallery Effects', 'Smart Filters', 'Layer Masking (Black/White Concept)', 'Clipping Mask', 'Channels (RGB Channels)'],
        answer: {
          summary: 'फिल्टर्स विशेष कलात्मक और सुधारात्मक प्रभाव लागू करते हैं। लेयर मास्किंग गैर-विनाशकारी संपादन का आधार है, और चैनल्स रंग घटकों की जानकारी रखते हैं।',
          sections: [
            {
              heading: '1. फिल्टर्स और फिल्टर गैलरी (Filter Gallery)',
              content: 'फिल्टर मेनू में सैकड़ों प्रभाव होते हैं:',
              points: [
                'Artistic, Brush Strokes, Distort, Sketch, Stylize, Texture प्रभावों का इंटरैक्टिव पूर्वावलोकन।',
                'Blur Filters: Gaussian Blur, Motion Blur (पृष्ठभूमि को धुंधला करके विषय को उभारना - बोकेह प्रभाव)।',
                'स्मार्ट फिल्टर्स (Smart Filters): लेयर को "Convert to Smart Object" में बदलकर फिल्टर लगाने से फिल्टर को कभी भी दोबारा एडिट या बंद किया जा सकता है।'
              ]
            },
            {
              heading: '2. लेयर मास्किंग (Layer Masking - Black & White Concept)',
              content: 'पिक्सल्स को हमेशा के लिए मिटाने के बजाय उन्हें छिपाने की गैर-विनाशकारी तकनीक:',
              points: [
                'लेयर पैलेट के नीचे "Add Layer Mask" आइकन पर क्लिक करने से लेयर के बगल में एक सफेद मास्क थंबनेल जुड़ता है।',
                'स्वर्णिम नियम: "Black Conceals, White Reveals" - जब आप मास्क पर काले रंग (Black Brush) से पेंट करते हैं, तो वह हिस्सा छिप (Transparent) जाता है; और जब सफेद रंग (White Brush) से पेंट करते हैं, तो वह पुनः दिखने लगता है।'
              ]
            },
            {
              heading: '3. चैनल्स पैलेट (Channels Palette)',
              content: 'आरजीबी मोड में चार चैनल्स होते हैं: Composite RGB, Red, Green, Blue। यह दर्शाता है कि प्रत्येक रंग का कितना योगदान है। अल्फा चैनल्स (Alpha Channels) में सहेजे गए सिलेक्शन्स स्टोर होते हैं।'
            }
          ],
          examTip: 'मास्किंग का मूल मंत्र "Black Conceals, White Reveals (काला छुपाता है, सफेद दिखाता है)" परीक्षा में जरूर लिखें।',
          keyTerms: ['Filter Gallery', 'Gaussian Blur', 'Smart Filters', 'Layer Mask Black Conceals White Reveals', 'Alpha Channels']
        }
      },
      {
        id: 'p3-u5-q5',
        number: 5,
        question: 'InDesign: Introduction, Interfaces, Commands, Inserting Text & Images, Newspaper & Magazine Design; Microsoft AI Designer, Figma समझाइए।',
        topics: ['Adobe InDesign Intro', 'Master Pages & Frames', 'Text Threading', 'Microsoft Designer AI', 'Figma UI/UX Tool'],
        answer: {
          summary: 'एडोब इनडिजाइन आधुनिक पेशेवर मल्टी-पेज पब्लिशिंग का वैश्विक मानक है जिसने पेजमेकर का स्थान लिया है। साथ ही फिगमा और माइक्रोसॉफ्ट डिज़ाइनर आधुनिक डिजिटल डिज़ाइन में क्रांति ला रहे हैं।',
          sections: [
            {
              heading: '1. एडोब इनडिजाइन (Adobe InDesign Overview)',
              content: 'पेजमेकर का आधुनिक उत्तराधिकारी:',
              points: [
                'मल्टी-पेज पब्लिकेशन: हजारों पेजों की किताबें, कैटलॉग, ई-बुक्स और इंटरैक्टिव पीडीएफ डिजाइन करने का पेशेवर टूल।',
                'टेक्स्ट थ्रेडिंग (Text Threading): एक फ्रेम से दूसरे फ्रेम में आउट-पोर्ट और इन-पोर्ट क्लिक करके टेक्स्ट को सुचारू रूप से जोड़ना।',
                'मास्टर पेजेस (Parent Pages): हेडर, फुटर, पेज नंबर और ग्रिड्स का पूर्ण स्वचालित नियंत्रण।',
                'पैराग्राफ और कैरेक्टर स्टाइल्स: एक क्लिक में पूरी पुस्तक के फॉन्ट्स और शैलियों का केंद्रीकृत प्रबंधन।'
              ]
            },
            {
              heading: '2. माइक्रोसॉफ्ट डिज़ाइनर (Microsoft Designer AI)',
              content: 'DALL-E 3 और जनरेटिव AI पर आधारित वेब टूल जो केवल एक प्राकृतिक भाषा प्रॉम्प्ट (जैसे: "Create an Instagram post for national science day with a cute robot") से पेशेवर पोस्टर, बैनर और सोशल मीडिया विजुअल्स तुरंत बना देता है।'
            },
            {
              heading: '3. फिगमा (Figma)',
              content: 'क्लाउड-आधारित सहयोगात्मक यूआई/यूएक्स (UI/UX) डिजाइन टूल। मोबाइल ऐप्स, वेबसाइट वायरफ्रेम्स और प्रोटोटाइप्स को टीम के साथ लाइव ब्राउज़र में डिजाइन करने के लिए दुनिया भर में अग्रणी।'
            }
          ],
          examTip: 'InDesign में Text Threading (आउट-पोर्ट से इन-पोर्ट लिंक) का रेखाचित्र बनाएं।',
          keyTerms: ['Adobe InDesign', 'Text Threading', 'Parent Pages', 'Paragraph Styles', 'Microsoft Designer AI', 'Figma Collaboration']
        }
      }
    ]
  }
];
