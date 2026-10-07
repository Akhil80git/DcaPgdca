import { Unit } from '../types';

export const paper6Units: Unit[] = [
  {
    unitNumber: 1,
    unitRoman: 'Unit I',
    title: 'इंटरनेट की अवधारणा, WWW, वेब ब्राउज़र्स व प्रोटोकॉल्स',
    questions: [
      {
        id: 'p6-u1-q1',
        number: 1,
        question: 'Internet Evolution, Concept, Internet vs Intranet, ISP and its Functions समझाइए।',
        topics: ['ARPANET to Internet', 'Internet Definition', 'Internet vs Intranet vs Extranet', 'ISP Role & Tier Hierarchy'],
        answer: {
          summary: 'इंटरनेट दुनिया भर के नेटवर्कों का वैश्विक नेटवर्क है जिसकी शुरुआत 1969 में ARPANET से हुई थी। इंट्रानेट किसी संगठन का आंतरिक निजी नेटवर्क होता है और आईएसपी उपयोगकर्ताओं को इंटरनेट कनेक्टिविटी प्रदान करता है।',
          sections: [
            {
              heading: '1. इंटरनेट का विकास (Evolution of Internet)',
              content: '1969 में अमेरिकी रक्षा विभाग की एडवांस्ड रिसर्च प्रोजेक्ट्स एजेंसी (ARPA) ने चार विश्वविद्यालयों को जोड़कर ARPANET शुरू किया। 1983 में TCP/IP को मानक प्रोटोकॉल बनाया गया, और 1989-91 में टिम बर्नर्स-ली द्वारा वर्ल्ड वाइड वेब (WWW) के आविष्कार के बाद इंटरनेट का सार्वजनिक विस्तार हुआ।'
            },
            {
              heading: '2. Internet vs Intranet vs Extranet की तुलना',
              content: 'पहुंच और सुरक्षा के आधार पर अंतर:',
              table: {
                headers: ['लक्षण', 'इंटरनेट (Internet)', 'इंट्रानेट (Intranet)', 'एक्सट्रानेट (Extranet)'],
                rows: [
                  ['पहुंच (Access)', 'सार्वजनिक (पूरी दुनिया में किसी के लिए)', 'केवल संगठन के अधिकृत कर्मचारियों के लिए', 'कर्मचारियों तथा अधिकृत व्यावसायिक भागीदारों/ग्राहकों के लिए'],
                  ['सुरक्षा', 'सार्वजनिक नेटवर्क; साइबर खतरों का जोखिम', 'फायरवॉल द्वारा अत्यधिक सुरक्षित निजी नेटवर्क', 'फ़ायरवॉल और लॉगिन क्रेडेंशियल्स द्वारा नियंत्रित'],
                  ['स्वामित्व', 'किसी एकल व्यक्ति या संस्था का नहीं', 'विशिष्ट कंपनी या संगठन का निजी स्वामित्व', 'दो या अधिक सहयोगी संगठनों द्वारा साझा']
                ]
              }
            },
            {
              heading: '3. आईएसपी और उसके कार्य (ISP - Internet Service Provider)',
              content: 'आईएसपी वह दूरसंचार कंपनी है जो उपयोगकर्ताओं को इंटरनेट कनेक्शन प्रदान करती है (जैसे Jio, Airtel, BSNL)।',
              points: [
                'मुख्य कार्य: आईपी एड्रेस आवंटित करना, बैंडविड्थ और हाई-स्पीड डेटा ट्रांसमिशन उपलब्ध कराना, डीएनएस सेवाएं प्रदान करना और 24x7 नेटवर्क विश्वसनीयता सुनिश्चित करना।'
              ]
            }
          ],
          examTip: 'ARPANET का पूरा नाम (Advanced Research Projects Agency Network) और टिम बर्नर्स-ली का नाम लिखें।',
          keyTerms: ['ARPANET 1969', 'TCP/IP Adoption', 'Intranet vs Extranet', 'ISP Hierarchy', 'Bandwidth Gateway']
        }
      },
      {
        id: 'p6-u1-q2',
        number: 2,
        question: 'URLs, Portals, Internet Services and Applications समझाइए।',
        topics: ['URL Structure (Protocol, Domain, Path)', 'Web Portals vs Websites', 'Internet Services (VoIP, Cloud, E-commerce)'],
        answer: {
          summary: 'यूआरएल इंटरनेट पर किसी भी संसाधन का अद्वितीय वेब पता है। वेब पोर्टल विभिन्न सेवाओं का एकीकृत प्रवेश द्वार है।',
          sections: [
            {
              heading: '1. यूआरएल की संरचना (Structure of a URL)',
              content: 'URL (Uniform Resource Locator) के मुख्य घटक:',
              points: [
                'उदाहरण: `https://www.example.com:443/courses/pgdca.html?id=10#intro`',
                '1. प्रोटोकॉल (Scheme): `https://` (सुरक्षित वेब संचार)।',
                '2. डोमेन नाम / होस्ट: `www.example.com` (सर्वर का पहचानकर्ता)।',
                '3. पोर्ट नंबर: `:443` (HTTPS के लिए मानक पोर्ट)।',
                '4. पाथ (Path): `/courses/pgdca.html` (सर्वर की डायरेक्टरी में फाइल की स्थिति)।',
                '5. क्वेरी पैरामीटर: `?id=10` और एंकर फ्रैगमेंट: `#intro`।'
              ]
            },
            {
              heading: '2. वेब पोर्टल (Web Portals)',
              content: 'यह एक व्यापक गेटवे वेबसाइट होती है जो उपयोगकर्ताओं को एक ही स्थान पर कई प्रकार की सेवाएं (सर्च इंजन, ईमेल, समाचार, मौसम, फोरम, ऑनलाइन फॉर्म) प्रदान करती है (जैसे Yahoo!, MSN, सरकारी MPOnline पोर्टल)।'
            },
            {
              heading: '3. प्रमुख इंटरनेट सेवाएं और अनुप्रयोग',
              content: 'ईमेल, वीडियो कॉन्फ्रेंसिंग (VoIP - Zoom, Skype), फाइल ट्रांसफर (FTP), ऑनलाइन बैंकिंग, सोशल नेटवर्किंग और ई-लर्निंग।'
            }
          ],
          examTip: 'URL के सभी घटकों (Protocol, Domain, Path, Query) को अलग-अलग तीर बनाकर दिखाएं।',
          keyTerms: ['Uniform Resource Locator', 'Domain Name', 'Path & Query', 'Web Portal Gateway', 'VoIP Services']
        }
      },
      {
        id: 'p6-u1-q3',
        number: 3,
        question: 'E-mail Basics, Sending/Receiving, Free Email Services, Internet Chatting (Voice, Text) समझाइए।',
        topics: ['Email Architecture (SMTP, POP3, IMAP)', 'Email Headers (To, Cc, Bcc, Subject)', 'Free Email Services', 'Instant Messaging & Voice Chat'],
        answer: {
          summary: 'ईमेल इलेक्ट्रॉनिक पत्राचार का माध्यम है जो क्लाइंट-सर्वर प्रोटोकॉल्स पर काम करता है। सीसी और बीसीसी प्राप्तकर्ताओं की गोपनीयता नियंत्रित करते हैं।',
          sections: [
            {
              heading: '1. ईमेल के बुनियादी घटक और प्रोटोकॉल्स',
              content: 'ईमेल संचार के तीन मुख्य प्रोटोकॉल्स:',
              points: [
                'SMTP (Simple Mail Transfer Protocol): ईमेल भेजने (Send/Outbox) के लिए प्रयुक्त।',
                'POP3 (Post Office Protocol 3): ईमेल डाउनलोड करने का पुराना प्रोटोकॉल (सर्वर से डाउनलोड कर डिलीट कर देता है)।',
                'IMAP (Internet Message Access Protocol): आधुनिक प्रोटोकॉल जो ईमेल को सर्वर पर सुरक्षित रखता है और कई डिवाइसेस पर सिंक करता है।'
              ]
            },
            {
              heading: '2. ईमेल संदेश के हेडर फ़ील्ड्स (Headers)',
              content: 'To, Cc और Bcc में अंतर:',
              points: [
                'To: प्राथमिक प्राप्तकर्ता।',
                'Cc (Carbon Copy): अतिरिक्त प्राप्तकर्ता जिन्हें सूचना मात्र के लिए भेजा गया है। सभी प्राप्तकर्ता एक दूसरे का ईमेल पता देख सकते हैं।',
                'Bcc (Blind Carbon Copy): गुप्त प्रतिलिपि। इसमें जोड़े गए व्यक्ति का ईमेल आईडी अन्य किसी भी प्राप्तकर्ता को दिखाई नहीं देता।'
              ]
            },
            {
              heading: '3. मुफ्त ईमेल सेवाएं व इंटरनेट चैटिंग',
              content: 'Gmail, Outlook, Yahoo Mail 15GB+ मुफ्त क्लाउड स्टोरेज देते हैं। इंटरनेट चैटिंग में टेक्स्ट चैटिंग (WhatsApp, Telegram) और वॉयस/वीडियो चैटिंग (Google Meet, Skype) शामिल हैं।'
            }
          ],
          examTip: 'Cc (दिखने वाला) और Bcc (गोपनीय/अदृश्य) का अंतर परीक्षा में अवश्य लिखें।',
          keyTerms: ['SMTP Outgoing', 'IMAP Multi-device Sync', 'Carbon Copy (Cc)', 'Blind Carbon Copy (Bcc)', 'VoIP Audio Chat']
        }
      },
      {
        id: 'p6-u1-q4',
        number: 4,
        question: 'WWW: History, Working, Web Browsers and Functions, Search Engines, Searching the Web समझाइए।',
        topics: ['World Wide Web (WWW) History', 'Tim Berners-Lee 1989', 'Web Browsers & Rendering Engines', 'Search Engine Architecture (Crawling, Indexing, Ranking)'],
        answer: {
          summary: 'WWW इंटरनेट पर हाइपरटेक्स्ट दस्तावेजों का विशाल संग्रह है जिसे वेब ब्राउज़र के जरिए देखा जाता है। सर्च इंजन क्रॉलिंग, इंडेक्सिंग और रैंकिंग द्वारा प्रासंगिक सामग्री ढूंढते हैं।',
          sections: [
            {
              heading: '1. WWW का इतिहास और कार्यप्रणाली (Working of WWW)',
              content: '1989 में CERN (स्विट्जरलैंड) में सर टिम बर्नर्स-ली ने WWW का आविष्कार किया। कार्यप्रणाली: जब यूजर ब्राउज़र में यूआरएल टाइप करता है, तो ब्राउज़र DNS से आईपी पता पूछता है, वेब सर्वर को HTTP GET रिक्वेस्ट भेजता है, और सर्वर HTML/CSS/JS फाइल्स वापस भेजता है जिन्हें ब्राउज़र रेंडर करके दिखाता है।'
            },
            {
              heading: '2. वेब ब्राउज़र और उसके मुख्य कार्य (Web Browsers)',
              content: 'क्लाइंट-साइड सॉफ्टवेयर जो वेब पेजों को प्रदर्शित करता है (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari)।',
              points: [
                'मुख्य कार्य: HTML/CSS पार्सिंग और रेंडरिंग, जावास्क्रिप्ट एग्जीक्यूशन (V8 Engine), बुकमार्क्स, कुकीज और ब्राउजिंग हिस्ट्री का प्रबंधन, तथा SSL/TLS सुरक्षा प्रमाणपत्रों की जांच।'
              ]
            },
            {
              heading: '3. सर्च इंजन की कार्यप्रणाली (Search Engines)',
              content: 'गूगल या बिंग कैसे काम करते हैं:',
              points: [
                '1. क्रॉलिंग (Crawling): बॉट्स / स्पाइडर्स (Googlebot) लगातार वेब पेजों पर जाकर लिंक्स को फॉलो करते हैं।',
                '2. इंडेक्सिंग (Indexing): एकत्रित वेब पेजों के शब्दों और विषयों को विशाल डेटाबेस में अनुक्रमित (Index) करना।',
                '3. रैंकिंग (Ranking & Serving): जब यूजर कोई कीवर्ड टाइप करता है, तो एल्गोरिदम 200+ कारकों (प्रासंगिकता, बैकलिंक्स, पेज स्पीड) के आधार पर सर्वश्रेष्ठ परिणाम स्क्रीन पर प्रस्तुत करता है।'
              ]
            }
          ],
          examTip: 'सर्च इंजन के तीन चरण: Crawling -> Indexing -> Ranking का आरेख बनाएं।',
          keyTerms: ['Tim Berners-Lee CERN', 'Web Browser Rendering', 'V8 JS Engine', 'Crawling Bots', 'Indexing Database', 'PageRank']
        }
      },
      {
        id: 'p6-u1-q5',
        number: 5,
        question: 'HTTP, URLs, Web Servers, Web Protocols समझाइए।',
        topics: ['HTTP vs HTTPS (SSL/TLS)', 'Web Servers (Apache, Nginx, IIS)', 'Request-Response Cycle', 'Status Codes (200, 404, 500)'],
        answer: {
          summary: 'HTTP वर्ल्ड वाइड वेब का मुख्य संचार प्रोटोकॉल है। HTTPS डेटा को एन्क्रिप्ट करके सुरक्षित बनाता है, और वेब सर्वर क्लाइंट के अनुरोधों को पूरा करते हैं।',
          sections: [
            {
              heading: '1. HTTP बनाम HTTPS',
              content: 'प्रोटोकॉल्स में अंतर:',
              table: {
                headers: ['लक्षण', 'HTTP (Hypertext Transfer Protocol)', 'HTTPS (HTTP Secure)'],
                rows: [
                  ['सुरक्षा', 'असुरक्षित (प्लेन टेक्स्ट में डेटा प्रवाह)', 'अत्यधिक सुरक्षित (SSL/TLS एन्क्रिप्टेड)'],
                  ['पोर्ट नंबर', 'पोर्ट 80 (Port 80)', 'पोर्ट 443 (Port 443)'],
                  ['डेटा चोरी का खतरा', 'हैकर डेटा पढ़ सकते हैं (Sniffing)', 'डेटा पूरी तरह एन्क्रिप्टेड रहता है'],
                  ['ब्राउज़र संकेत', '"Not Secure" चेतावनी', 'हरा पैडलॉक (ताले का निशान)']
                ]
              }
            },
            {
              heading: '2. वेब सर्वर (Web Servers)',
              content: 'सॉफ्टवेयर और हार्डवेयर जो वेब फाइलों को होस्ट करते हैं और क्लाइंट्स के अनुरोधों पर उन्हें डिलीवर करते हैं (जैसे Apache HTTP Server, Nginx, Microsoft IIS)।'
            },
            {
              heading: '3. सामान्य HTTP स्टेटस कोड्स',
              content: '200 OK (सफल), 301 Moved Permanently (रीडायरेक्ट), 404 Not Found (पेज मौजूद नहीं), 500 Internal Server Error (सर्वर में खराबी)।'
            }
          ],
          examTip: 'पोर्ट 80 (HTTP) और पोर्ट 443 (HTTPS) तथा 404 Not Found स्टेटस कोड को याद रखें।',
          keyTerms: ['HTTP Request-Response', 'HTTPS Port 443', 'SSL/TLS Certificate', 'Apache & Nginx', 'Status 404 Not Found']
        }
      }
    ]
  },
  {
    unitNumber: 2,
    unitRoman: 'Unit II',
    title: 'HTML बेसिक्स, टेक्स्ट, इमेजेस, टेबल्स, फ्रेम्स व फॉर्म्स',
    questions: [
      {
        id: 'p6-u2-q1',
        number: 1,
        question: 'HTML: Concepts of Hypertext, Versions, Elements, Syntax, Tags & Attributes, Head & Body Sections, Building HTML Documents समझाइए।',
        topics: ['Hypertext Concept', 'HTML5 Standards', 'Tags vs Elements vs Attributes', 'Document Structure <!DOCTYPE html>'],
        answer: {
          summary: 'HTML (HyperText Markup Language) वेब पेजों के निर्माण की मानक मार्कअप भाषा है। यह टैग्स, एलिमेंट्स और एट्रिब्यूट्स के जरिए वेब पेज का कंकाल (संरचना) तैयार करती है।',
          sections: [
            {
              heading: '1. हाइपरटेक्स्ट और मार्कअप की मूल अवधारणा',
              content: 'हाइपरटेक्स्ट का अर्थ है ऐसा टेक्स्ट जिसमें अन्य दस्तावेजों के हाइपरलिंक्स होते हैं। मार्कअप का अर्थ है टेक्स्ट को विशेष टैग्स (जैसे `<p>`, `<h1>`) से चिह्नित करना ताकि ब्राउज़र समझ सके कि किस हिस्से को कैसे प्रदर्शित करना है।'
            },
            {
              heading: '2. मानक HTML5 दस्तावेज़ संरचना',
              content: 'प्रत्येक एचटीएमएल फाइल का बुनियादी ढांचा:',
              codeOrExample: `<!DOCTYPE html>
<html lang="hi">
  <head>
    <meta charset="UTF-8">
    <title>मेरा पहला वेब पेज</title>
  </head>
  <body>
    <h1>नमस्ते दुनिया!</h1>
    <p>यह मेरा पहला HTML5 वेब पेज है।</p>
  </body>
</html>`
            },
            {
              heading: '3. टैग्स, एलिमेंट्स और एट्रिब्यूट्स में अंतर',
              content: 'तीनों की स्पष्ट परिभाषा:',
              points: [
                'टैग (Tag): एंगल ब्रैकेट्स में बंद कीवर्ड (जैसे `<p>` ओपनिंग टैग, `</p>` क्लोजिंग टैग)।',
                'एलिमेंट (Element): ओपनिंग टैग से लेकर क्लोजिंग टैग और उसके बीच की सामग्री तक का पूरा हिस्सा (जैसे `<p>नमस्ते</p>`)।',
                'एट्रिब्यूट (Attribute): ओपनिंग टैग के अंदर दिया गया अतिरिक्त गुण (जैसे `<a href="index.html">` में `href` एट्रिब्यूट है)।'
              ]
            }
          ],
          examTip: 'HTML5 का कंकाल कोड (Skeleton Code) परीक्षा में कोड ब्लॉक बनाकर जरूर लिखें।',
          keyTerms: ['HyperText Markup Language', '<!DOCTYPE html>', '<head> vs <body>', 'Tags vs Attributes', 'Paired vs Empty Tags']
        }
      },
      {
        id: 'p6-u2-q2',
        number: 2,
        question: 'Inserting Texts, Images, Hyperlinks, Backgrounds, Color Controls, Different HTML Tags समझाइए।',
        topics: ['Headings (h1-h6) & Paragraphs', 'Image Tag (img src alt)', 'Anchor Tag (a href)', 'Body Background & Colors', 'Text Formatting Tags'],
        answer: {
          summary: 'वेब पेज में हेडिंग्स, पैराग्राफ, फॉर्मेटिंग टैग्स, छवियां और हाइपरलिंक्स जोड़कर उसे सूचनात्मक और इंटरैक्टिव बनाया जाता है।',
          sections: [
            {
              heading: '1. टेक्स्ट फॉर्मेटिंग टैग्स',
              content: 'अक्षरों की शैली और संरचना के टैग्स:',
              points: [
                '`<h1>` से `<h6>`: छह स्तरों की हेडिंग्स (`<h1>` सबसे बड़ी, `<h6>` सबसे छोटी)।',
                '`<p>`: पैराग्राफ टैग; `<br>`: लाइन ब्रेक (खाली टैग); `<hr>`: क्षैतिज विभाजक रेखा।',
                '`<b>` या `<strong>`: बोल्ड टेक्स्ट; `<i>` या `<em>`: इटैलिक टेक्स्ट; `<u>`: रेखांकित टेक्स्ट।',
                '`<sub>`: सबस्क्रिप्ट (H<sub>2</sub>O); `<sup>`: सुपरस्क्रिप्ट (x<sup>2</sup>)।'
              ]
            },
            {
              heading: '2. चित्र जोड़ना (`<img>` Tag)',
              content: 'यह एक एम्प्टी (Self-closing) टैग है: `<img src="photo.jpg" alt="छात्र की फोटो" width="300" height="200">`। `src` चित्र का पाथ है और `alt` इमेज न लोड होने पर वैकल्पिक टेक्स्ट दिखाता है।'
            },
            {
              heading: '3. हाइपरलिंक्स जोड़ना (`<a>` Anchor Tag)',
              content: 'दूसरे वेब पेज से लिंक करना: `<a href="https://example.com" target="_blank">क्लिक करें</a>`। `target="_blank"` लिंक को नए टैब में खोलता है।'
            }
          ],
          examTip: 'img टैग के दो अनिवार्य एट्रिब्यूट्स: src और alt का उदाहरण अवश्य लिखें।',
          keyTerms: ['Headings h1-h6', 'Empty Tag br hr img', 'Anchor a href', 'Target _blank', 'Subscript & Superscript']
        }
      },
      {
        id: 'p6-u2-q3',
        number: 3,
        question: 'Table Layout and Presentation, Creating Lists, Font Size & Attributes, List Types and Tags समझाइए।',
        topics: ['HTML Tables (table, tr, th, td)', 'Colspan & Rowspan', 'Ordered Lists (<ol>)', 'Unordered Lists (<ul>)', 'Description Lists (<dl>)'],
        answer: {
          summary: 'एचटीएमएल में डेटा को तालिकाओं (टेबल्स) में प्रदर्शित किया जाता है और सूचियों (ऑर्डर्ड, अनऑर्डर्ड और डिस्क्रिप्शन लिस्ट्स) द्वारा संरचित किया जाता है।',
          sections: [
            {
              heading: '1. एचटीएमएल टेबल्स की संरचना',
              content: 'टेबल बनाने के आवश्यक टैग्स:',
              points: [
                '`<table>`: टेबल की बाहरी बाउंड्री।',
                '`<tr>`: टेबल रो (Table Row)।',
                '`<th>`: टेबल हेडर सेल (Table Header - स्वतः बोल्ड और सेंटर-अलाइन)।',
                '`<td>`: टेबल डेटा सेल (Table Data)।',
                '`colspan="2"`: दो कॉलमों को क्षैतिज रूप से मिलाना; `rowspan="2"`: दो पंक्तियों को लंबवत मिलाना।'
              ]
            },
            {
              heading: '2. सूचियों के प्रकार (Types of Lists)',
              content: 'तीन प्रकार की सूचियाँ:',
              points: [
                '1. अनऑर्डर्ड लिस्ट (`<ul>`): बुलेटेड लिस्ट (टाइप: disc, circle, square)। उदाहरण: `<ul><li>सेब</li><li>केला</li></ul>`।',
                '2. ऑर्डर्ड लिस्ट (`<ol>`): क्रमांकित सूची (टाइप: 1, A, a, I, i)। उदाहरण: `<ol type="1"><li>पहला चरण</li></ol>`।',
                '3. डिस्क्रिप्शन लिस्ट (`<dl>`): शब्दावली सूची जिसमें पद (`<dt>`) और उसकी परिभाषा (`<dd>`) होती है।'
              ]
            }
          ],
          examTip: 'Colspan (कॉलम मिलाना) और Rowspan (रो मिलाना) का कोड उदाहरण परीक्षा में लिखें।',
          keyTerms: ['HTML Table', '<tr>, <th>, <td>', 'Colspan & Rowspan', 'Ordered List <ol>', 'Unordered List <ul>', '<dt> & <dd>']
        }
      },
      {
        id: 'p6-u2-q4',
        number: 4,
        question: 'Frames and Forms in Web Pages, Creating Frameset, Opening Pages into Frames समझाइए।',
        topics: ['Frameset & Frame (HTML4 History)', 'iframe (HTML5 Standard)', 'Targeting Frame Names'],
        answer: {
          summary: 'फ्रेम्स ब्राउज़र विंडो को कई अलग-अलग उप-विंडोज में विभाजित करते हैं जिनमें अलग-अलग वेब पेज एक साथ लोड होते हैं। आधुनिक HTML5 में इसके स्थान पर `<iframe>` का उपयोग होता है।',
          sections: [
            {
              heading: '1. फ्रेमसेट की ऐतिहासिक अवधारणा (HTML4 Frameset)',
              content: 'पुराने HTML में `<body>` टैग के स्थान पर `<frameset>` का प्रयोग होता था: `<frameset cols="25%, 75%"><frame src="menu.html" name="left"><frame src="content.html" name="right"></frameset>`।',
              points: [
                'टारगेटिंग (Targeting): जब बाईं ओर के मेनू में लिंक पर क्लिक किया जाता था, तो `target="right"` देने पर वह पेज दाईं फ्रेम में खुलता था।'
              ]
            },
            {
              heading: '2. आधुनिक इनलाइन फ्रेम (`<iframe>` in HTML5)',
              content: 'HTML5 में फ्रेम्स अप्रचलित (Deprecated) हो चुके हैं और उनके स्थान पर `<iframe>` का उपयोग होता है जो सामान्य वेब पेज के अंदर किसी भी अन्य वेबसाइट या यूट्यूब वीडियो को एम्बेड करता है: `<iframe src="https://maps.google.com" width="600" height="400"></iframe>`।'
            }
          ],
          examTip: 'यह स्पष्ट लिखें कि पुराने Frameset अब हट चुके हैं और HTML5 में `<iframe>` प्रयुक्त होता है।',
          keyTerms: ['Frameset cols/rows', 'Target Name', 'Deprecated HTML4', 'Inline Frame <iframe>', 'Embedding Maps/Videos']
        }
      },
      {
        id: 'p6-u2-q5',
        number: 5,
        question: 'Design Forms Control समझाइए।',
        topics: ['Form Tag (action, method GET/POST)', 'Input Types (text, password, radio, checkbox, submit)', 'Textarea & Select Options'],
        answer: {
          summary: 'एचटीएमएल फॉर्म्स वेब पेजों पर उपयोगकर्ता से इनपुट एकत्र करने और उसे प्रोसेसिंग के लिए सर्वर पर भेजने के लिए डिज़ाइन किए जाते हैं।',
          sections: [
            {
              heading: '1. फॉर्म टैग और विधियाँ (`<form>`)',
              content: '`<form action="submit.php" method="POST">`: `action` सर्वर स्क्रिप्ट का यूआरएल है और `method` डेटा भेजने का तरीका है:',
              points: [
                'GET Method: डेटा यूआरएल में क्वेरी स्ट्रिंग के रूप में दिखता है (कम सुरक्षित, सीमित लंबाई, सर्च के लिए)।',
                'POST Method: डेटा HTTP रिक्वेस्ट की बॉडी में छिपाकर भेजा जाता है (अत्यधिक सुरक्षित, पासवर्ड और फॉर्म सबमिशन के लिए)।'
              ]
            },
            {
              heading: '2. प्रमुख फॉर्म इनपुट कंट्रोल्स',
              content: 'आवश्यक फॉर्म तत्व:',
              points: [
                '`<input type="text" name="username">`: सिंगल-लाइन टेक्स्ट इनपुट।',
                '`<input type="password">`: छिपा हुआ टेक्स्ट (बिंदु/तारे)।',
                '`<input type="radio" name="gender" value="m">`: रेडियो बटन (समान नाम वाले में से केवल 1 का चयन)।',
                '`<input type="checkbox" name="hobbies">`: चेकबॉक्स (बहु-चयन)।',
                '`<textarea rows="4" cols="40">`: मल्टी-लाइन टेक्स्ट एरिया (पते या टिप्पणियों के लिए)।',
                '`<select><option>विकल्प</option></select>`: ड्रॉप-डाउन मेनू।',
                '`<input type="submit" value="जमा करें">` और `<input type="reset">`: सबमिट व रीसेट बटन्स।'
              ]
            }
          ],
          examTip: 'GET और POST विधि का अंतर (URL में डेटा दिखना बनाम बॉडी में छिपना) जरूर लिखें।',
          keyTerms: ['<form action method>', 'GET vs POST', 'Input Types', 'Radio vs Checkbox', '<textarea>', '<select Dropdown>']
        }
      }
    ]
  },
  {
    unitNumber: 3,
    unitRoman: 'Unit III',
    title: 'CSS स्टाइलिंग, जावास्क्रिप्ट बेसिक्स, DOM इवेंट्स व डायलॉग्स',
    questions: [
      {
        id: 'p6-u3-q1',
        number: 1,
        question: 'CSS: Introduction, Creating Style, Inline and External CSS, Divs with ID Style, Tag & Class Style, Font Family, Size, Colors, Borders, Navigation Links, Effects समझाइए।',
        topics: ['CSS Introduction', 'Inline, Internal, External CSS', 'Selectors (Tag, Class ., ID #)', 'Box Model (Margin, Border, Padding)', 'Navigation Bar Styling'],
        answer: {
          summary: 'CSS (Cascading Style Sheets) वेब पेजों के विजुअल डिजाइन, लेआउट, रंगों, फोंट्स और रिस्पॉन्सिवनेस को नियंत्रित करने वाली स्टाइलिंग भाषा है।',
          sections: [
            {
              heading: '1. सीएसएस लागू करने के तीन तरीके (3 Ways to Apply CSS)',
              content: 'प्राथमिकता के अनुसार तीन विधियाँ:',
              points: [
                'Inline CSS: सीधे एचटीएमएल टैग के अंदर `style` एट्रिब्यूट में लिखना (जैसे `<p style="color: blue;">`)। केवल उसी तत्व पर लागू।',
                'Internal CSS: `<head>` टैग के अंदर `<style>` ब्लॉक में लिखना। उस पूरे पेज के लिए।',
                'External CSS: अलग `.css` फाइल (जैसे `styles.css`) बनाकर `<link rel="stylesheet" href="styles.css">` द्वारा जोड़ना। पूरी वेबसाइट में एकरूपता और सर्वोत्तम प्रथा।'
              ]
            },
            {
              heading: '2. सीएसएस सेलेक्टर्स (Selectors)',
              content: 'तत्वों को लक्षित करने के नियम:',
              points: [
                'Tag Selector: `p { font-size: 16px; }` (सभी पैराग्राफ्स पर)।',
                'Class Selector (`.`): `.highlight { background: yellow; }` (किसी भी तत्व पर बार-बार प्रयुक्त)।',
                'ID Selector (`#`): `#header { background: navy; }` (पेज पर केवल एक अद्वितीय तत्व के लिए)।'
              ]
            },
            {
              heading: '3. सीएसएस बॉक्स मॉडल (Box Model)',
              content: 'प्रत्येक एचटीएमएल तत्व एक चौकोर बॉक्स होता है जिसमें चार परतें होती हैं: Content (मध्य में) -> Padding (सामग्री और बॉर्डर के बीच की जगह) -> Border (चारों ओर की सीमा) -> Margin (बॉर्डर के बाहर अन्य तत्वों से दूरी)।'
            }
          ],
          examTip: 'CSS Box Model का आरेख (Content -> Padding -> Border -> Margin) परीक्षा में अनिवार्य रूप से बनाएं।',
          keyTerms: ['Cascading Style Sheets', 'Inline vs Internal vs External', 'Class (.) vs ID (#)', 'CSS Box Model', 'Hover Effects']
        }
      },
      {
        id: 'p6-u3-q2',
        number: 2,
        question: 'JavaScript Overview, Syntax, Variables, Expressions, Branching & Looping Statements समझाइए।',
        topics: ['JavaScript Overview', 'Variables (var, let, const)', 'Data Types', 'Conditional (if-else, switch)', 'Loops (for, while)'],
        answer: {
          summary: 'जावास्क्रिप्ट एक हाई-लेवल, इंटरप्रिटेड क्लाइंट-साइड स्क्रिप्टिंग भाषा है जो स्थिर HTML वेब पेजों को डायनामिक, इंटरैक्टिव और प्रतिक्रियाशील बनाती है।',
          sections: [
            {
              heading: '1. जावास्क्रिप्ट चर (Variables: var, let, const)',
              content: 'ES6 मानकों के अनुसार चर घोषणा:',
              points: [
                '`var`: पुराना फ़ंक्शन-स्कोप चर जिसे दोबारा डिक्लेयर किया जा सकता है।',
                '`let`: ब्लॉक-स्कोप (Block-scoped) चर जिसका मान बदला जा सकता है (सर्वश्रेष्ठ प्रथा)।',
                '`const`: ब्लॉक-स्कोप स्थिर मान जिसे पुनः असाइन नहीं किया जा सकता।'
              ]
            },
            {
              heading: '2. निर्णय नियंत्रण कथन (Branching Statements)',
              content: '`if-else` और `switch-case`:',
              codeOrExample: `let marks = 75;
if (marks >= 60) {
  console.log("First Division");
} else if (marks >= 45) {
  console.log("Second Division");
} else {
  console.log("Fail");
}`
            },
            {
              heading: '3. लूपिंग कथन (Looping Statements)',
              content: 'दोहराव के लिए `for` और `while` लूप्स:',
              codeOrExample: `// 1 से 5 तक संख्याएं प्रिंट करना
for (let i = 1; i <= 5; i++) {
  console.log("संख्या: " + i);
}`
            }
          ],
          examTip: 'let और const (ES6) का अंतर परीक्षा में अवश्य लिखें।',
          keyTerms: ['Client-side Scripting', 'let vs const vs var', 'Block Scope', 'if-else Logic', 'for & while Loops']
        }
      },
      {
        id: 'p6-u3-q3',
        number: 3,
        question: 'Functions, Arrays, Objects समझाइए।',
        topics: ['Functions (Declaration & Return)', 'Arrays & Array Methods', 'JavaScript Objects (Key-Value)', 'JSON Format'],
        answer: {
          summary: 'फंक्शंस पुन: प्रयोज्य कोड ब्लॉक्स हैं, एरे क्रमिक मानों का संग्रह है, और ऑब्जेक्ट्स कुंजी-मान (Key-Value) जोड़ों में डेटा व्यवस्थित करते हैं।',
          sections: [
            {
              heading: '1. फ़ंक्शंस (Functions)',
              content: 'कोड का पुन: उपयोग करने का साधन:',
              codeOrExample: `function calculateTotal(price, qty) {
  return price * qty;
}
let bill = calculateTotal(500, 3); // 1500`
            },
            {
              heading: '2. एरे (Arrays)',
              content: 'एक ही चर में कई मानों की अनुक्रमित (0-Indexed) सूची:',
              codeOrExample: `let subjects = ["Fundamentals", "PC Packages", "Tally"];
subjects.push("Web Dev"); // नया आइटम जोड़ना
console.log(subjects[0]); // "Fundamentals"`
            },
            {
              heading: '3. ऑब्जेक्ट्स (Objects)',
              content: 'वास्तविक जीवन की वस्तुओं का मॉडलिंग:',
              codeOrExample: `let student = {
  rollNo: 101,
  name: "Rahul",
  course: "PGDCA",
  isEnrolled: true
};
console.log(student.name); // Dot notation से एक्सेस`
            }
          ],
          examTip: 'Array में इंडेक्स 0 से शुरू होता है और Object में key-value जोड़े होते हैं, यह कोड सहित लिखें।',
          keyTerms: ['Function Reusability', '0-based Array', 'Array push/pop', 'Object Properties', 'Key-Value Pairs']
        }
      },
      {
        id: 'p6-u3-q4',
        number: 4,
        question: 'Events & DOM: onClick, onMouseOver, onSubmit, onFocus, onChange, onBlur, onLoad, onUnload समझाइए।',
        topics: ['DOM (Document Object Model)', 'Event-Driven Architecture', 'Mouse Events (click, mouseover)', 'Form Events (submit, change, focus, blur)', 'Window Events (load)'],
        answer: {
          summary: 'DOM वेब पेज का एक ट्री-स्ट्रक्चर ऑब्जेक्ट मॉडल है। इवेंट्स उपयोगकर्ता द्वारा की गई क्रियाएं हैं जिन्हें जावास्क्रिप्ट डिटेक्ट करके प्रतिक्रिया देता है।',
          sections: [
            {
              heading: '1. DOM (Document Object Model) की अवधारणा',
              content: 'जब ब्राउज़र HTML लोड करता है, तो वह पूरे पेज को ऑब्जेक्ट्स के एक पदानुक्रमित पेड़ (Tree) में बदल देता है। जावास्क्रिप्ट `document.getElementById("myId")` या `querySelector()` द्वारा तत्वों की टेक्स्ट, स्टाइल और विशेषताओं को गतिशील रूप से बदल सकता है।'
            },
            {
              heading: '2. प्रमुख इवेंट्स और उनके उपयोग',
              content: 'इवेंट-हैंडलर्स का विस्तृत विवरण:',
              table: {
                headers: ['इवेंट', 'कब ट्रिगर होता है?', 'व्यावहारिक उपयोग'],
                rows: [
                  ['onclick', 'जब यूजर किसी बटन या लिंक पर क्लिक करता है', 'फॉर्म सबमिट करना या मेनू टॉगल करना'],
                  ['onmouseover', 'जब माउस कर्सर किसी तत्व के ऊपर आता है', 'ड्रॉप-डाउन मेनू खोलना या फोटो बदलना'],
                  ['onsubmit', 'जब फॉर्म सबमिट बटन दबाया जाता है', 'सर्वर पर डेटा जाने से पहले वैलिडेशन जांचना'],
                  ['onfocus', 'जब कोई इनपुट फील्ड सक्रिय (क्लिक) होती है', 'फील्ड का बैकग्राउंड रंग हाइलाइट करना'],
                  ['onblur', 'जब कर्सर इनपुट फील्ड से बाहर निकलता है', 'मोबाइल नंबर या ईमेल सही है या नहीं तुरंत जांचना'],
                  ['onchange', 'जब ड्रॉपडाउन या चेकबॉक्स का मान बदलता है', 'राज्य चुनने पर जिलों की सूची बदलना'],
                  ['onload', 'जब पूरा वेब पेज और सभी छवियां लोड हो जाती हैं', 'वेलकम पॉपअप या इनिशियल एनिमेशन शुरू करना']
                ]
              }
            }
          ],
          examTip: 'onsubmit इवेंट में `return validateForm();` लिखकर फॉर्म वैलिडेशन का कोड लिखें।',
          keyTerms: ['Document Object Model (DOM)', 'Event-Driven', 'onclick & onmouseover', 'onblur Validation', 'onsubmit Event']
        }
      },
      {
        id: 'p6-u3-q5',
        number: 5,
        question: 'Alerts, Prompts & Confirms समझाइए।',
        topics: ['window.alert()', 'window.confirm()', 'window.prompt()', 'Popup Dialogs Syntax'],
        answer: {
          summary: 'जावास्क्रिप्ट में उपयोगकर्ता को सूचना देने, पुष्टि लेने और त्वरित इनपुट प्राप्त करने के लिए तीन मानक पॉपअप डायलॉग बॉक्स (Alert, Confirm, Prompt) उपलब्ध हैं।',
          sections: [
            {
              heading: '1. अलर्ट बॉक्स (`window.alert()`)',
              content: 'उपयोगकर्ता को एक साधारण सूचना या चेतावनी संदेश दिखाता है। इसमें केवल एक "OK" बटन होता है जिसे दबाने तक यूजर पेज पर आगे काम नहीं कर सकता: `alert("फॉर्म सफलतापूर्वक जमा हो गया!");`।'
            },
            {
              heading: '2. कन्फर्म बॉक्स (`window.confirm()`)',
              content: 'उपयोगकर्ता से किसी महत्वपूर्ण निर्णय की पुष्टि लेता है। इसमें दो बटन "OK" और "Cancel" होते हैं। यदि यूजर OK दबाता है तो यह `true` रिटर्न करता है और Cancel दबाने पर `false`: `let result = confirm("क्या आप सचमुच इस रिकॉर्ड को हटाना चाहते हैं?");`।'
            },
            {
              heading: '3. प्रॉम्प्ट बॉक्स (`window.prompt()`)',
              content: 'उपयोगकर्ता से एक लाइन का टेक्स्ट इनपुट मांगता है। इसमें टेक्स्ट बॉक्स और OK/Cancel बटन होते हैं: `let name = prompt("कृपया अपना नाम दर्ज करें:", "Guest");`।'
            }
          ],
          examTip: 'तीनों डायलॉग्स (Alert: OK, Confirm: True/False, Prompt: Text String) के रिटर्न मानों को स्पष्ट लिखें।',
          keyTerms: ['window.alert()', 'window.confirm() Boolean', 'window.prompt() String', 'Modal Popups']
        }
      }
    ]
  },
  {
    unitNumber: 4,
    unitRoman: 'Unit IV',
    title: 'माइक्रोसॉफ्ट एक्सप्रेशन वेब: साइट निर्माण, फॉर्मेटिंग व सीएसएस टेबल्स',
    questions: [
      {
        id: 'p6-u4-q1',
        number: 1,
        question: 'Expression Web: Creating New Site, New Page समझाइए।',
        topics: ['Microsoft Expression Web Intro', 'WYSIWYG Editor', 'Create One-Page Site', 'Empty Site Structure'],
        answer: {
          summary: 'माइक्रोसॉफ्ट एक्सप्रेशन वेब एक पेशेवर WYSIWYG (What You See Is What You Get) वेब डिजाइनिंग सॉफ्टवेयर है जो फ्रंटपेज का आधुनिक उत्तराधिकारी है।',
          sections: [
            {
              heading: '1. एक्सप्रेशन वेब का परिचय',
              content: 'यह कोड लिखे बिना विजुअल इंटरफेस में वेबसाइट डिजाइन करने और साथ ही स्वच्छ W3C मानक कोड (HTML5/CSS3) उत्पन्न करने की सुविधा देता है। इसमें Design View, Code View और Split View (आधा कोड, आधा डिजाइन) उपलब्ध होते हैं।'
            },
            {
              heading: '2. नई वेबसाइट बनाना (Site > New Site)',
              content: 'वेबसाइट निर्माण के चरण:',
              points: [
                '1. Site Menu > "New Site..." पर क्लिक करें।',
                '2. General टैब से "One Page Site" या "Empty Site" चुनें।',
                '3. अपने कंप्यूटर पर लोकेशन फोल्डर निर्दिष्ट करें (जैसे `C:\\MyWebsites\\PGDCASite`)।',
                '4. OK पर क्लिक करें। एक्सप्रेशन वेब एक रूट फोल्डर और डिफ़ॉल्ट होम पेज (`default.html` या `index.html`) बना देगा।'
              ]
            },
            {
              heading: '3. नया वेब पेज जोड़ना',
              content: 'File > New > Page > HTML चुनें। Ctrl + S दबाकर पेज का नाम (जैसे `about.html`, `contact.html`) देकर सहेजें।'
            }
          ],
          examTip: 'Split View (आधा कोड और आधा विजुअल डिज़ाइन) का उल्लेख जरूर करें।',
          keyTerms: ['WYSIWYG Web Editor', 'Design, Code & Split Views', 'Site > New Site', 'Folder Hierarchy', 'index.html']
        }
      },
      {
        id: 'p6-u4-q2',
        number: 2,
        question: 'Inserting and Formatting Text, Creating & Inserting Images, Adjusting Transparency, Alternative Text, Aligning Images समझाइए।',
        topics: ['Visual Text Formatting', 'Insert Picture from File', 'Picture Properties (Alt Text)', 'Image Transparency Tool', 'Image Alignment'],
        answer: {
          summary: 'एक्सप्रेशन वेब में टेक्स्ट और छवियों को वर्ड प्रोसेसर की तरह विजुअल टूल्स द्वारा आसानी से फॉर्मेट, अलाइन और कस्टमाइज किया जाता है।',
          sections: [
            {
              heading: '1. टेक्स्ट फॉर्मेटिंग',
              content: 'टेक्स्ट टाइप करें और फॉर्मेट टूलबार से Paragraph Style (Heading 1 to 6), Font Family, Font Color, Bold, Italic और Alignment (Left, Center, Right) सीधे लागू करें।'
            },
            {
              heading: '2. चित्र डालना और पिक्चर प्रॉपर्टीज',
              content: 'छवि प्रबंधन:',
              points: [
                'Insert Menu > Picture > "From File..." द्वारा फोटो आयात करना।',
                'अल्टरनेटिव टेक्स्ट (Alt Text): Picture Properties डायलॉग में "Alternate text" भरना (सर्च इंजन और स्क्रीन रीडर के लिए आवश्यक)।',
                'इमेज एलाइनमेंट: Appearance टैब से Wrapping Style (Left, Right, None) सेट करना जिससे टेक्स्ट चित्र के चारों ओर खूबसूरती से लिपटे।'
              ]
            },
            {
              heading: '3. ट्रांसपेरेंसी टूल (Set Transparent Color Tool)',
              content: 'Pictures टूलबार में मौजूद "Set Transparent Color" पेंसिल टूल द्वारा किसी चित्र के एक-रंग वाले बैकग्राउंड (जैसे सफेद पृष्ठभूमि) पर क्लिक करके उसे तुरंत पारदर्शी (Transparent) बनाना।'
            }
          ],
          examTip: 'Set Transparent Color टूल और Alt Text का महत्व परीक्षा में लिखें।',
          keyTerms: ['Insert Picture', 'Picture Properties Alt Text', 'Text Wrapping Style', 'Set Transparent Color Tool']
        }
      },
      {
        id: 'p6-u4-q3',
        number: 3,
        question: 'Creating Email Link, Linking to Other Websites, Testing and Targeting Links समझाइए।',
        topics: ['Hyperlinks Dialog (Ctrl+K)', 'External URL Links', 'Email Mailto Links', 'Target Frame (_blank, _self)', 'Hyperlink Testing'],
        answer: {
          summary: 'हाइपरलिंक डायलॉग (Ctrl + K) के माध्यम से आंतरिक पेजों, बाहरी यूआरएल और ईमेल एड्रेसेस को सीधे टारगेट फ्रेम्स के साथ जोड़ा जाता है।',
          sections: [
            {
              heading: '1. हाइपरलिंक्स बनाना (Ctrl + K)',
              content: 'टेक्स्ट या इमेज सेलेक्ट करें > Insert > Hyperlink:',
              points: [
                'मौजूदा फाइल्स से लिंक (Internal Link): अपने प्रोजेक्ट के अन्य पेजों (`courses.html`) को ब्राउज़ करके चुनना।',
                'बाहरी वेबसाइट से लिंक (External Link): Address बॉक्स में पूर्ण यूआरएल (जैसे `https://www.google.com`) पेस्ट करना।'
              ]
            },
            {
              heading: '2. ईमेल लिंक बनाना (E-mail Address Link)',
              content: 'डायलॉग के बाईं ओर "E-mail Address" पर क्लिक करें। "E-mail address" बॉक्स में ईमेल टाइप करें (जैसे `info@example.com`) और विषय (Subject) लिखें। कोड में स्वतः `mailto:info@example.com?subject=Inquiry` बन जाता है।'
            },
            {
              heading: '3. टारगेटिंग और लिंक टेस्टिंग',
              content: '"Target Frame" बटन दबाकर चुनना: `_blank` (नए टैब/विंडो में खोलना) या `_self` (उसी विंडो में)। F12 दबाकर ब्राउज़र में पूर्वावलोकन (Preview in Browser) करके सभी लिंक्स की जांच करना।'
            }
          ],
          examTip: 'ईमेल लिंक के लिए `mailto:` प्रोटोकॉल का उपयोग होता है, यह कोड सहित लिखें।',
          keyTerms: ['Insert Hyperlink Ctrl+K', 'External URL', 'mailto: Protocol', 'Target Frame _blank', 'F12 Browser Preview']
        }
      },
      {
        id: 'p6-u4-q4',
        number: 4,
        question: 'Organizing Files & Folders, Designing Accessible Tables, Styling a Table, Editing Table Layouts समझाइए।',
        topics: ['Folder Structure (images, css, js)', 'Accessible Tables (th, caption, summary)', 'Table Layout Editing', 'Merge and Split Cells in Expression Web'],
        answer: {
          summary: 'एक पेशेवर वेबसाइट के लिए फोल्डर संगठन अनिवार्य है। एक्सेसिबल टेबल्स में स्पष्ट हेडिंग्स, कैप्शन और सीएसएस बॉर्डर स्टाइल्स का उपयोग किया जाता है।',
          sections: [
            {
              heading: '1. फाइलों और फोल्डर्स का संगठन',
              content: 'रूट फोल्डर में संगठित संरचना: मुख्य HTML फाइलें रूट में, छवियों के लिए `/images` फोल्डर, शैलियों के लिए `/css` फोल्डर, और स्क्रिप्ट्स के लिए `/js` फोल्डर। इससे वेबसाइट व्यवस्थित रहती है।'
            },
            {
              heading: '2. टेबल लेआउट बनाना और संपादित करना',
              content: 'Table Menu > Insert Table द्वारा पंक्तियाँ और स्तंभ निर्दिष्ट करना। टेबल टूलबार से Merge Cells (सेल्स मिलाना), Split Cells (सेल्स बांटना), Insert Rows/Columns और Delete Rows/Columns आसानी से करना।'
            },
            {
              heading: '3. एक्सेसिबल टेबल्स (Accessible Tables)',
              content: 'स्क्रीन रीडर्स और दिव्यांग उपयोगकर्ताओं के लिए टेबल में `<caption>` (शीर्षक), `<th>` (हेडर सेल्स) और `summary` गुण जोड़ना जिससे दृष्टिबाधित लोग भी डेटा समझ सकें।'
            }
          ],
          examTip: 'वेबसाइट का मानक फोल्डर स्ट्रक्चर (/images, /css, /js) बनाकर दिखाएं।',
          keyTerms: ['Website Folder Structure', 'Accessible HTML Table', 'Table Caption', 'Merge/Split Table Cells']
        }
      },
      {
        id: 'p6-u4-q5',
        number: 5,
        question: 'Adding Style to a Table using CSS समझाइए।',
        topics: ['Table CSS Properties', 'border-collapse', 'Zebra Striping (nth-child)', 'Hover Effects on Table Rows', 'Responsive Table Wrap'],
        answer: {
          summary: 'सीएसएस के माध्यम से टेबल्स को आकर्षक, आधुनिक और ज़ेबरा-स्ट्राइप्ड (वैकल्पिक रंगीन पंक्तियों) रूप में स्टाइल किया जाता है।',
          sections: [
            {
              heading: '1. टेबल स्टाइलिंग के मुख्य सीएसएस गुण',
              content: 'टेबल को पेशेवर बनाने के नियम:',
              points: [
                '`border-collapse: collapse;`: दोहरी बॉर्डर्स को मिलाकर एक साफ एकल बॉर्डर बनाना।',
                '`width: 100%;`: टेबल को पूरे कंटेनर में फैलाना।',
                '`padding: 12px;`: टेक्स्ट और बॉर्डर के बीच आरामदायक खाली जगह।',
                '`text-align: left;`: हेडर और डेटा का संरेखण।'
              ]
            },
            {
              heading: '2. ज़ेबरा स्ट्राइपिंग और होवर इफ़ेक्ट (CSS Code)',
              content: 'व्यावहारिक सीएसएस कोड उदाहरण:',
              codeOrExample: `table {
  width: 100%;
  border-collapse: collapse;
}
th {
  background-color: #1e3a8a;
  color: white;
  padding: 10px;
}
td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}
/* वैकल्पिक पंक्तियों का हल्का ग्रे रंग */
tr:nth-child(even) {
  background-color: #f2f2f2;
}
/* माउस ले जाने पर रो हाइलाइट होना */
tr:hover {
  background-color: #e2e8f0;
}`
            }
          ],
          examTip: '`border-collapse: collapse;` और `:nth-child(even)` का सीएसएस कोड ब्लॉक जरूर लिखें।',
          keyTerms: ['border-collapse: collapse', 'Zebra Striping nth-child', 'tr:hover Highlight', 'Padding Spacing']
        }
      }
    ]
  },
  {
    unitNumber: 5,
    unitRoman: 'Unit V',
    title: 'वर्डप्रेस सीएमएस, थीम्स, पोस्ट्स, नेटवर्क प्रोटोकॉल्स व वेब होस्टिंग',
    questions: [
      {
        id: 'p6-u5-q1',
        number: 1,
        question: 'WordPress: What is, Installation, Login, Admin Panel Overview, User Profile समझाइए।',
        topics: ['WordPress CMS Intro', 'LAMP/WAMP/XAMPP Local Install', 'WP Admin Dashboard', 'User Roles & Profiles'],
        answer: {
          summary: 'वर्डप्रेस दुनिया का सबसे लोकप्रिय ओपन-सोर्स कंटेंट मैनेजमेंट सिस्टम (CMS) है जो दुनिया की 40% से अधिक वेबसाइटों को संचालित करता है। यह PHP और MySQL पर आधारित है।',
          sections: [
            {
              heading: '1. वर्डप्रेस का परिचय और लाभ',
              content: 'वर्डप्रेस बिना कोडिंग जाने किसी भी व्यक्ति को ब्लॉग, ई-कॉमर्स (WooCommerce), समाचार पोर्टल या कॉर्पोरेट वेबसाइट बनाने की सुविधा देता है। विशाल थीम और प्लगइन इकोसिस्टम इसका सबसे बड़ा बल है।'
            },
            {
              heading: '2. इंस्टॉलेशन और लॉगिन (Installation & Login)',
              content: 'लोकल सर्वर (XAMPP) पर इंस्टॉलेशन चरण:',
              points: [
                '1. XAMPP चालू करें (Apache और MySQL स्टार्ट करें)।',
                '2. `phpMyAdmin` में जाकर नया डेटाबेस बनाएं (जैसे `wp_db`)।',
                '3. wordpress.org से जिप फाइल डाउनलोड कर `htdocs/mysite` में एक्सट्रेक्ट करें।',
                '4. ब्राउज़र में `localhost/mysite` खोलें; प्रसिद्ध 5-Minute Install विज़ार्ड चलेगा।',
                '5. डेटाबेस नाम, यूजर (root), पासवर्ड और साइट टाइटल दर्ज करें।',
                'लॉगिन: `localhost/mysite/wp-admin` पर जाकर एडमिन यूजरनेम व पासवर्ड दर्ज करें।'
              ]
            },
            {
              heading: '3. एडमिन डैशबोर्ड और उपयोगकर्ता भूमिकाएं (User Roles)',
              content: 'बाएं साइडबार में Posts, Media, Pages, Comments, Appearance, Plugins, Users, Settings मेनू होते हैं। उपयोगकर्ता भूमिकाएं: Administrator (पूर्ण नियंत्रण), Editor, Author, Contributor, और Subscriber।'
            }
          ],
          examTip: 'WordPress का लॉगिन यूआरएल `/wp-admin` और पाँच उपयोगकर्ता भूमिकाएं (Admin, Editor, Author, Contributor, Subscriber) लिखें।',
          keyTerms: ['WordPress CMS', 'PHP & MySQL Stack', 'XAMPP Localhost', 'wp-admin Login', 'Administrator vs Editor']
        }
      },
      {
        id: 'p6-u5-q2',
        number: 2,
        question: 'WordPress Themes, Themes Depository, Create & Add Logo, Set up Static Home Page समझाइए।',
        topics: ['WordPress Themes', 'Official Theme Repository', 'Site Identity & Logo', 'Static Front Page vs Latest Posts'],
        answer: {
          summary: 'थीम्स वर्डप्रेस वेबसाइट के बाहरी रूप, लेआउट और रंगों को निर्धारित करती हैं। कस्टमाइज़र से लोगो लगाना और स्टैटिक होम पेज सेट करना प्राथमिक सेटअप है।',
          sections: [
            {
              heading: '1. थीम्स और थीम रिपॉजिटरी (Themes)',
              content: 'Appearance > Themes > "Add New" पर जाकर वर्डप्रेस की आधिकारिक फ्री रिपॉजिटरी से हजारों पेशेवर थीम्स (जैसे Astra, OceanWP, GeneratePress) खोजी और एक क्लिक में "Install & Activate" की जा सकती हैं।'
            },
            {
              heading: '2. लोगो जोड़ना (Site Identity & Logo)',
              content: 'Appearance > Customize > Site Identity पर जाएं। "Select Logo" पर क्लिक कर अपनी कंपनी का लोगो अपलोड करें, क्रॉप करें और सहेजें।'
            },
            {
              heading: '3. स्टैटिक होम पेज सेट करना (Static Home Page)',
              content: 'डिफ़ॉल्ट रूप से वर्डप्रेस होम पेज पर नवीनतम ब्लॉग पोस्ट दिखाता है। व्यावसायिक वेबसाइट के लिए:',
              points: [
                'Settings > Reading (या Appearance > Customize > Homepage Settings) पर जाएं।',
                '"Your homepage displays" में "A static page" विकल्प चुनें।',
                'Homepage के लिए पहले से बना पेज (जैसे "Home") और Posts page के लिए (जैसे "Blog") चुनें। "Save Changes" दबाएं।'
              ]
            }
          ],
          examTip: 'Settings > Reading में जाकर Static Home Page सेट करने का पाथ परीक्षा में लिखें।',
          keyTerms: ['WordPress Themes Astra', 'Appearance > Themes', 'Site Identity Logo', 'Settings > Reading Static Page']
        }
      },
      {
        id: 'p6-u5-q3',
        number: 3,
        question: 'Create Posts, Delete Pages, Create Menu, Add/Delete Post, Add Widgets, Upload Images, Add Images to Post, Insert/Format Text, Add Hyperlink to Image/Text समझाइए।',
        topics: ['Posts vs Pages', 'Gutenberg Block Editor', 'Navigation Menus (Appearance > Menus)', 'Widgets & Sidebars'],
        answer: {
          summary: 'पोस्ट्स दिनांकित गतिशील ब्लॉग लेख होते हैं जबकि पेजेस स्थिर स्थायी पृष्ठ होते हैं। गुटेनबर्ग ब्लॉक एडिटर, मेनू और विजेट्स साइट प्रबंधन के मुख्य साधन हैं।',
          sections: [
            {
              heading: '1. पोस्ट्स बनाम पेजेस (Posts vs Pages)',
              content: 'दोनों में स्पष्ट अंतर:',
              points: [
                'Posts: समय-संवेदनशील, तारीख और लेखक के साथ प्रकाशित होते हैं, श्रेणियां (Categories) और टैग्स (Tags) होते हैं (जैसे ब्लॉग्स, खबरें)।',
                'Pages: समय-मुक्त, स्थिर सामग्री जो बार-बार नहीं बदलती, कोई कैटेगरी/टैग नहीं (जैसे About Us, Contact Us, Privacy Policy)।'
              ]
            },
            {
              heading: '2. गुटेनबर्ग ब्लॉक एडिटर में सामग्री निर्माण',
              content: 'Posts > Add New पर क्लिक करें:',
              points: [
                'शीर्षक दें। `+` आइकन पर क्लिक करके विभिन्न ब्लॉक्स जोड़ें: Paragraph, Heading, Image, Gallery, List, Button।',
                'चित्र पर क्लिक करके टूलबार से "Insert Link" द्वारा छवि को हाइपरलिंक बनाना।',
                'दाएं साइडबार से "Featured Image", "Categories" चुनकर "Publish" दबाएं।'
              ]
            },
            {
              heading: '3. नेविगेशन मेनू और विजेट्स (Menus & Widgets)',
              content: 'Appearance > Menus में नया मेनू बनाकर होम, अबाउट, कोर्सेज पेजेस जोड़ना और डिस्प्ले लोकेशन "Primary Menu" चुनना। Appearance > Widgets से साइडबार या फुटर में Search, Recent Posts, सोशल आइकन्स जोड़ना।'
            }
          ],
          examTip: 'Posts (तारीख, कैटेगरी सहित) और Pages (स्थिर, बिना कैटेगरी) का अंतर अवश्य लिखें।',
          keyTerms: ['Posts vs Pages', 'Gutenberg Blocks', 'Featured Image', 'Appearance > Menus', 'Widgets & Sidebars']
        }
      },
      {
        id: 'p6-u5-q4',
        number: 4,
        question: 'Protocols: Meaning, FTP, DNS, TCP, UDP, HTTP, IP Telnet; FTP Commands, FTP with Filezilla & CuteFTP समझाइए।',
        topics: ['Network Protocols Suite', 'FTP & FileZilla / CuteFTP', 'DNS Resolution', 'TCP vs UDP', 'Telnet Remote CLI'],
        answer: {
          summary: 'नेटवर्क प्रोटोकॉल कंप्यूटरों के बीच त्रुटिरहित डेटा संचार के नियमों का समूह है। एफटीपी फाइलों को सर्वर पर अपलोड करने का प्रमुख साधन है।',
          sections: [
            {
              heading: '1. प्रमुख नेटवर्क प्रोटोकॉल्स का अवलोकन',
              content: 'इंटरनेट की रीढ़ बनने वाले प्रोटोकॉल्स:',
              points: [
                'TCP (Transmission Control Protocol): कनेक्शन-ओरिएंटेड, विश्वसनीय प्रोटोकॉल जो 3-वे हैंडशेक और एरर-चेकिंग करता है।',
                'UDP (User Datagram Protocol): कनेक्शन-लेस, बिना गारंटी का तेज प्रोटोकॉल (वीडियो स्ट्रीमिंग, ऑनलाइन गेमिंग के लिए)।',
                'DNS (Domain Name System): इंटरनेट की फोनबुक जो डोमेन नाम (google.com) को कंप्यूटर के समझ योग्य आईपी पते (142.250.190.46) में बदलती है।',
                'FTP (File Transfer Protocol): पोर्ट 21 पर क्लाइंट और सर्वर के बीच फाइलों के आदान-प्रदान के लिए।',
                'Telnet: पोर्ट 23 पर रिमोट कंप्यूटर पर टेक्स्ट-कमांड चलाने का पुराना असुरक्षित प्रोटोकॉल (SSH द्वारा प्रतिस्थापित)।'
              ]
            },
            {
              heading: '2. फाइलज़िला (FileZilla) द्वारा FTP का उपयोग',
              content: 'वेबसाइट फाइलों को लाइव होस्टिंग सर्वर पर अपलोड करने की विधि:',
              points: [
                'Quickconnect बार में Host (जैसे `ftp.mysite.com`), Username, Password और Port (21) दर्ज करें और कनेक्ट करें।',
                'बाईं विंडो में आपका लोकल कंप्यूटर दिखता है और दाईं विंडो में रिमोट वेब सर्वर का `public_html` फोल्डर।',
                'लोकल फाइलों को सेलेक्ट करके दाईं विंडो में ड्रैग-एंड-ड्रॉप (Drag & Drop) करने से फाइल्स लाइव सर्वर पर अपलोड हो जाती हैं।'
              ]
            }
          ],
          examTip: 'TCP (विश्वसनीय) बनाम UDP (तेज, बिना गारंटी) और FileZilla के चार कनेक्शन पैरामीटर्स (Host, User, Pass, Port 21) लिखें।',
          keyTerms: ['Rules Protocol', 'TCP vs UDP 3-Way Handshake', 'DNS Resolution Phonebook', 'FTP Port 21', 'FileZilla public_html', 'Telnet Port 23']
        }
      },
      {
        id: 'p6-u5-q5',
        number: 5,
        question: 'Web Hosting: Concept, Domain Name & DNS, Procedure to Register Domain, Web Hosting, Space on Host Server समझाइए।',
        topics: ['Domain Name Registration (TLDs .com .in)', 'DNS Nameservers Pointing', 'Web Hosting Types (Shared, VPS, Dedicated, Cloud)', 'cPanel & public_html'],
        answer: {
          summary: 'वेबसाइट को इंटरनेट पर लाइव करने के लिए दो चीजें अनिवार्य हैं: डोमेन नाम (वेबसाइट का पता/पहचान) और वेब होस्टिंग (वेबसाइट की फाइलों को 24x7 इंटरनेट से जुड़े सर्वर पर रखने की जगह)।',
          sections: [
            {
              heading: '1. डोमेन नाम और टीएलडी (Domain Name & TLDs)',
              content: 'डोमेन नाम इंटरनेट पर आपका अद्वितीय ब्रांड पता है। इसके दो भाग होते हैं: नाम (जैसे `mycollege`) और एक्सटेंशन / TLD (Top-Level Domain जैसे `.com` कमर्शियल, `.org` संगठन, `.edu` शैक्षणिक, `.in` भारत)।'
            },
            {
              heading: '2. डोमेन पंजीकरण और होस्टिंग से जोड़ने की प्रक्रिया',
              content: 'चरणबद्ध विधि:',
              points: [
                'स्टेप 1: डोमेन रजिस्ट्रार (जैसे GoDaddy, Namecheap) पर जाकर वांछित नाम की उपलब्धता (Availability) जांचें और 1-2 वर्ष के लिए रजिस्टर करें।',
                'स्टेप 2: वेब होस्टिंग प्रदाता (Hostinger, Bluehost, AWS) से होस्टिंग पैकेज (Shared, VPS, Cloud) खरीदें।',
                'स्टेप 3 (DNS मैपिंग): रजिस्ट्रार के डैशबोर्ड में जाकर होस्टिंग कंपनी के नेम-सर्वर (जैसे `ns1.hosting.com` और `ns2.hosting.com`) अपडेट करें। 2-24 घंटे में DNS प्रोपेगेशन पूरा हो जाता है।',
                'स्टेप 4: होस्टिंग के cPanel में लॉगिन करें और File Manager द्वारा `public_html` डायरेक्टरी में अपनी वेबसाइट की फाइलें अपलोड करें।'
              ]
            },
            {
              heading: '3. वेब होस्टिंग के प्रमुख प्रकार',
              content: 'शेयर्ड होस्टिंग (सस्ती, कई वेबसाइट्स एक सर्वर साझा करती हैं), VPS (वर्चुअल प्राइवेट सर्वर - समर्पित संसाधन), और डेडिकेटेड सर्वर (पूरी मशीन केवल आपके लिए)।'
            }
          ],
          examTip: 'डोमेन (पता) और होस्टिंग (जमीन/मकान) का सादृश्य उदाहरण देकर समझाएं।',
          keyTerms: ['Domain Name TLD .com .in', 'Registrar GoDaddy', 'NameServers Mapping', 'Shared vs VPS Hosting', 'cPanel File Manager']
        }
      }
    ]
  }
];
