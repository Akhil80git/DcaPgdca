import { Unit } from '../types';

export const paper7Units: Unit[] = [
  {
    unitNumber: 1,
    unitRoman: 'Unit I',
    title: 'लेखांकन के सिद्धांत, जर्नल, लेजर, ट्रायल बैलेंस व अंतिम खाते',
    questions: [
      {
        id: 'p7-u1-q1',
        number: 1,
        question: 'Accounting: Meaning, Objectives, Importance, Types (Financial, Cost, Management), Users समझाइए।',
        topics: ['Accounting Definition (AICPA)', 'Objectives of Accounting', 'Financial vs Cost vs Management', 'Internal & External Users'],
        answer: {
          summary: 'लेखांकन (Accounting) वित्तीय प्रकृति के लेन-देनों को सुव्यवस्थित रूप से पहचानने, दर्ज करने, वर्गीकृत करने, सारांश निकालने और परिणामों को संप्रेषित करने की कला व विज्ञान है।',
          sections: [
            {
              heading: '1. लेखांकन के मुख्य उद्देश्य एवं महत्व',
              content: 'वित्तीय प्रबंधन के आधारभूत लक्ष्य:',
              points: [
                'व्यवसायिक लेन-देनों का व्यवस्थित और स्थायी रिकॉर्ड रखना।',
                'निश्चित वित्तीय अवधि में शुद्ध लाभ या हानि (Net Profit/Loss) का निर्धारण करना।',
                'व्यवसाय की वास्तविक वित्तीय स्थिति (Assets & Liabilities) का ज्ञान प्राप्त करना।',
                'धोखाधड़ी, त्रुटियों और गबन की रोकथाम करना, तथा कर (Taxation) गणना का आधार बनना।'
              ]
            },
            {
              heading: '2. लेखांकन की तीन प्रमुख शाखाएँ (Branches of Accounting)',
              content: 'विशिष्ट उद्देश्यों के अनुसार विभाजन:',
              points: [
                'वित्तीय लेखांकन (Financial Accounting): ऐतिहासिक वित्तीय लेन-देनों को दर्ज करना और ट्रेडिंग, पीएंडएल व बैलेंस शीट बनाकर बाह्य पक्षों को वित्तीय स्थिति दिखाना।',
                'लागत लेखांकन (Cost Accounting): वस्तुओं या सेवाओं की उत्पादन लागत (Cost of Production) का निर्धारण, नियंत्रण और न्यूनतम करने का अध्ययन।',
                'प्रबंधकीय लेखांकन (Management Accounting): आंतरिक प्रबंधकों को भविष्य की योजना, बजटिंग और रणनीतिक निर्णय लेने हेतु प्रासंगिक रिपोर्ट व अनुपात प्रस्तुत करना।'
              ]
            },
            {
              heading: '3. लेखांकन सूचनाओं के उपयोगकर्ता (Users of Accounting)',
              content: 'आंतरिक उपयोगकर्ता (मालिक, निदेशक, प्रबंधक) और बाह्य उपयोगकर्ता (निवेशक, बैंक/ऋणदाता, आपूर्तिकर्ता, ग्राहक, सरकार व टैक्स विभाग)।'
            }
          ],
          examTip: 'AICPA की मानक परिभाषा और Financial, Cost व Management Accounting के बीच का अंतर जरूर लिखें।',
          keyTerms: ['Financial Transactions', 'Cost Accounting', 'Management Accounting', 'Internal vs External Users', 'Taxation Compliance']
        }
      },
      {
        id: 'p7-u1-q2',
        number: 2,
        question: 'Basic Terms & Concepts: Assets, Liabilities, Capital, Income, Expenditure, Profit, Loss, Debtors, Creditors, Double Entry System, Golden Rules, Accrual, Matching, Going Concern, Consistency, Prudence समझाइए।',
        topics: ['Basic Accounting Terminology', 'Golden Rules of Accounting', 'Accounting Principles (GAAP)', 'Dual Aspect Equation'],
        answer: {
          summary: 'दोहरा लेखा प्रणाली (Double Entry System) के अनुसार प्रत्येक सौदे के दो पहलू (डेबिट और क्रेडिट) होते हैं। लेखांकन के तीन स्वर्णिम नियम (Golden Rules) और मूलभूत अवधारणाएं (GAAP) वित्तीय अनुशासन तय करती हैं।',
          sections: [
            {
              heading: '1. बुनियादी लेखांकन शब्दावली (Basic Terms)',
              content: 'मुख्य व्यावसायिक पद:',
              points: [
                'पूंजी (Capital): स्वामी द्वारा व्यवसाय में लगाया गया धन या संपत्ति।',
                'संपत्तियाँ (Assets): व्यवसाय के आर्थिक संसाधन (Current: Cash, Stock; Fixed: Building, Machinery)।',
                'दायित्व (Liabilities): व्यवसाय द्वारा दूसरों को चुकाने योग्य ऋण (Loans, Creditors)। लेखांकन समीकरण: `Assets = Capital + Liabilities`।',
                'देनदार (Debtors): वे ग्राहक जिनसे उधार बिक्री का पैसा वसूलना है।',
                'लेनदार (Creditors): वे व्यापारी जिनसे उधार माल खरीदा गया है और उन्हें भुगतान करना है।'
              ]
            },
            {
              heading: '2. लेखांकन के तीन स्वर्णिम नियम (Golden Rules of Accounting)',
              content: 'खातों के प्रकार और डेबिट/क्रेडिट के सार्वभौमिक नियम:',
              table: {
                headers: ['खाते का प्रकार (Account Type)', 'किससे संबंधित है?', 'डेबिट का नियम (Debit)', 'क्रेडिट का नियम (Credit)'],
                rows: [
                  ['व्यक्तिगत खाता (Personal A/c)', 'व्यक्ति, फर्म, बैंक, कंपनी', 'पाने वाले को डेबिट (Debit the Receiver)', 'देने वाले को क्रेडिट (Credit the Giver)'],
                  ['वास्तविक खाता (Real A/c)', 'भौतिक संपत्तियाँ (Cash, Machinery, Building)', 'जो वस्तु व्यापार में आए उसे डेबिट (Debit what comes in)', 'जो वस्तु व्यापार से जाए उसे क्रेडिट (Credit what goes out)'],
                  ['नाममात्र खाता (Nominal A/c)', 'खर्चे, हानियाँ, आय और लाभ', 'सभी खर्चों व हानियों को डेबिट (Debit all expenses & losses)', 'सभी आय व लाभों को क्रेडिट (Credit all incomes & gains)']
                ]
              }
            },
            {
              heading: '3. महत्वपूर्ण लेखांकन अवधारणाएं (Accounting Concepts)',
              content: 'मानक लेखा सिद्धांत:',
              points: [
                'सतत व्यवसाय की अवधारणा (Going Concern): माना जाता है कि व्यवसाय अनिश्चित काल तक निरंतर चलता रहेगा।',
                'उपार्जन अवधारणा (Accrual Concept): आय और व्यय उसी अवधि में दर्ज होते हैं जब वे अर्जित या देय होते हैं, भले ही नकद मिला हो या नहीं।',
                'मिलान अवधारणा (Matching Concept): किसी अवधि के राजस्व (Revenue) से उसी अवधि के संबंधित खर्चों का मिलान करना।',
                'रूढ़िवादिता / विवेक (Prudence): संभावित हानियों का पहले से प्रावधान करना, लेकिन संभावित लाभों को तब तक न मानना जब तक वे प्राप्त न हों।'
              ]
            }
          ],
          examTip: 'तीनों Golden Rules की तालिका बनाकर प्रत्येक का एक-एक उदाहरण (जैसे Cash A/c Dr to Sales A/c) लिखें।',
          keyTerms: ['Double Entry System', 'Personal, Real, Nominal', 'Debit & Credit Rules', 'Accounting Equation', 'Going Concern', 'Accrual & Prudence']
        }
      },
      {
        id: 'p7-u1-q3',
        number: 3,
        question: 'Accounting Process: Journal Entries, Ledger Posting, Trial Balance; Subsidiary Books & Cash Book (Purchase, Sales, Returns, Single/Double/Triple Column) समझाइए।',
        topics: ['Accounting Cycle', 'Journal Entries Format', 'Ledger Accounts & Balancing', 'Trial Balance Preparation', 'Subsidiary & Cash Books'],
        answer: {
          summary: 'लेखा चक्र में प्रारंभिक प्रविष्टि रोजनामचा (Journal) में होती है, फिर खातों में खतौनी (Ledger Posting) की जाती है, और अंत में गणितीय शुद्धता की जांच हेतु तलपट (Trial Balance) बनाया जाता है।',
          sections: [
            {
              heading: '1. संपूर्ण लेखांकन चक्र (The Accounting Cycle)',
              content: 'क्रमबद्ध प्रक्रिया: 1. वित्तीय लेनदेन -> 2. वाउचर -> 3. जर्नल / सहायक बहियां -> 4. लेजर खतौनी -> 5. शेष निकालना (Balancing) -> 6. ट्रायल बैलेंस -> 7. अंतिम खाते (Final Accounts)।'
            },
            {
              heading: '2. जर्नल और लेजर खतौनी',
              content: 'जर्नल के 5 कॉलम: Date, Particulars, L.F., Debit (₹), Credit (₹)। जर्नल से संबंधित लेजर खाते में पोस्टिंग की जाती है (डेबिट पक्ष में `To ...` और क्रेडिट पक्ष में `By ...`)।'
            },
            {
              heading: '3. सहायक बहियाँ और रोकड़ बही (Cash Book)',
              content: 'बड़े व्यवसायों में जर्नल के स्थान पर विशेष बहियां रखी जाती हैं:',
              points: [
                'Purchase Book (उधार क्रय), Sales Book (उधार विक्रय), Purchase Return और Sales Return Books।',
                'Single Column Cash Book: केवल नकद लेन-देन।',
                'Double Column Cash Book: नकद (Cash) और बैंक (Bank) कॉलम।',
                'Triple Column Cash Book: Cash, Bank और छूट (Discount) कॉलम। Contra Entry (बैंक में नकद जमा या निकासी) दोनों पक्षों में दर्ज होती है।'
              ]
            },
            {
              heading: '4. तलपट (Trial Balance)',
              content: 'सभी लेजर खातों के शेषों (Debit and Credit Balances) की एक सूची जो दोहरे लेखा प्रणाली के गणितीय संतुलन को प्रमाणित करती है। इसका कुल योग हमेशा बराबर (Tally) होना चाहिए।'
            }
          ],
          examTip: 'कैश बुक में Contra Entry (C) का नियम और जर्नल का 5-कॉलम प्रारूप परीक्षा में अवश्य बनाएं।',
          keyTerms: ['Journal 5 Columns', 'Ledger Balancing', 'Trial Balance Arithmetical Accuracy', 'Subsidiary Books', 'Contra Entry (C)', 'Triple Column Cash Book']
        }
      },
      {
        id: 'p7-u1-q4',
        number: 4,
        question: 'Final Accounts: Trading Account, P&L, Balance Sheet with Adjustments समझाइए।',
        topics: ['Final Accounts Preparation', 'Trading Account (Gross Profit)', 'Profit & Loss Account (Net Profit)', 'Balance Sheet (Financial Position)', 'Year-end Adjustments'],
        answer: {
          summary: 'अंतिम खाते वित्तीय वर्ष के अंत में तैयार किए जाते हैं। व्यापारिक खाता सकल लाभ, लाभ-हानि खाता शुद्ध लाभ और चिट्ठा (Balance Sheet) वित्तीय सुदृढ़ता को दर्शाता है।',
          sections: [
            {
              heading: '1. व्यापारिक खाता (Trading Account)',
              content: 'यह प्रत्यक्ष लागतों (Direct Expenses) और माल के क्रय-विक्रय से संबंधित होता है:',
              points: [
                'डेबिट पक्ष: प्रारंभिक स्टॉक (Opening Stock), शुद्ध क्रय (Purchases less Returns), प्रत्यक्ष खर्चे (मजदूरी Wages, भाड़ा Carriage Inward, फैक्ट्री खर्चे)।',
                'क्रेडिट पक्ष: शुद्ध विक्रय (Sales less Returns), अंतिम स्टॉक (Closing Stock)।',
                'परिणाम: यदि क्रेडिट अधिक हो तो सकल लाभ (Gross Profit c/d), अन्यथा सकल हानि (Gross Loss)।'
              ]
            },
            {
              heading: '2. लाभ और हानि खाता (Profit & Loss Account)',
              content: 'यह अप्रत्यक्ष खर्चों (Indirect Expenses) और अप्रत्यक्ष आय को दर्ज करता है:',
              points: [
                'डेबिट: वेतन (Salaries), किराया, विज्ञापन, ब्याज, ह्रास (Depreciation)।',
                'क्रेडिट: सकल लाभ (b/d), कमीशन प्राप्त, बट्टा प्राप्त, ब्याज प्राप्त।',
                'परिणाम: शुद्ध लाभ (Net Profit) जो पूंजी में जोड़ा जाता है, या शुद्ध हानि।'
              ]
            },
            {
              heading: '3. आर्थिक चिट्ठा (Balance Sheet) और समायोजन (Adjustments)',
              content: 'दायित्व (Liabilities) और संपत्ति (Assets) का विवरण। महत्वपूर्ण समायोजन:',
              points: [
                'Closing Stock (ट्रेडिंग Cr और एसेट्स में)।',
                'अदत्त व्यय (Outstanding Expenses - P&L Dr में जोड़ना और देनदारियों में दिखाना)।',
                'पूर्वदत्त व्यय (Prepaid Expenses - P&L Dr से घटाना और एसेट्स में दिखाना)।',
                'मूल्यह्रास (Depreciation - P&L Dr और संबंधित एसेट में से घटाना)।'
              ]
            }
          ],
          examTip: 'समायोजन प्रविष्टियों (Adjustments) के दोहरे प्रभाव (एक P&L में और दूसरा Balance Sheet में) को स्पष्ट लिखें।',
          keyTerms: ['Trading Account Gross Profit', 'P&L Net Profit', 'Balance Sheet Assets/Liabilities', 'Outstanding & Prepaid', 'Depreciation Adjustment']
        }
      },
      {
        id: 'p7-u1-q5',
        number: 5,
        question: 'Financial Statement Analysis: Fund Flow, Cash Flow (AS-3), Ratio Analysis (Liquidity, Profitability, Solvency, Activity), Interpretation, Mini Project समझाइए।',
        topics: ['Financial Analysis Methods', 'Cash Flow Statement (AS-3 Operating, Investing, Financing)', 'Fund Flow (Working Capital)', 'Ratio Analysis Categories'],
        answer: {
          summary: 'वित्तीय विवरण विश्लेषण व्यापार की वित्तीय सुदृढ़ता, तरलता और लाभप्रदता का मूल्यांकन करता है। अनुपात विश्लेषण और लेखा मानक 3 (AS-3) के तहत कैश फ्लो स्टेटमेंट इसके प्रमुख औजार हैं।',
          sections: [
            {
              heading: '1. कैश फ्लो स्टेटमेंट (Cash Flow Statement - AS-3)',
              content: 'रोकड़ प्रवाह विवरण नकद के अंतर्वाह (Inflow) और बहिर्वाह (Outflow) को तीन गतिविधियों में बांटता है:',
              points: [
                '1. परिचालन गतिविधियाँ (Operating Activities): मुख्य व्यावसायिक आय और खर्च (ग्राहकों से नकद प्राप्ति, सप्लायर्स को भुगतान)।',
                '2. निवेश गतिविधियाँ (Investing Activities): स्थायी संपत्तियों और निवेशों की खरीद-बिक्री (मशीनरी खरीदना, ब्याज प्राप्त होना)।',
                '3. वित्तीय गतिविधियाँ (Financing Activities): शेयर जारी करना, दीर्घकालिक ऋण लेना या चुकाना, लाभांश (Dividend) भुगतान।'
              ]
            },
            {
              heading: '2. फंड फ्लो स्टेटमेंट (Fund Flow Statement)',
              content: 'दो वित्तीय वर्षों के बीच कार्यशील पूंजी (Working Capital = Current Assets - Current Liabilities) में हुए शुद्ध परिवर्तनों और उनके स्रोतों व उपयोगों का विश्लेषण।'
            },
            {
              heading: '3. अनुपात विश्लेषण (Ratio Analysis)',
              content: 'चार मुख्य अनुपात श्रेणियां:',
              points: [
                'तरलता अनुपात (Liquidity): Current Ratio (`Current Assets / Current Liabilities` - आदर्श 2:1), Quick Ratio (आदर्श 1:1)।',
                'लाभप्रदता अनुपात (Profitability): Gross Profit Ratio (`GP / Net Sales * 100`), Net Profit Ratio, Return on Equity (ROE)।',
                'शोधन क्षमता अनुपात (Solvency): Debt-Equity Ratio (`Debt / Equity`), ब्याज आवरण अनुपात (Interest Coverage)।',
                'क्रियाशीलता अनुपात (Activity/Turnover): Inventory Turnover Ratio, Debtors Turnover Ratio.'
              ]
            }
          ],
          examTip: 'Cash Flow (AS-3) के तीनों हेड्स (Operating, Investing, Financing) और Current Ratio (2:1) जरूर लिखें।',
          keyTerms: ['AS-3 Cash Flow', 'Operating vs Investing vs Financing', 'Working Capital Fund Flow', 'Current Ratio 2:1', 'Debt-Equity Solvency']
        }
      }
    ]
  },
  {
    unitNumber: 2,
    unitRoman: 'Unit II',
    title: 'टैली प्राइम बेसिक्स, कंपनी निर्माण, मास्टर्स, वाउचर्स व बैंकिंग',
    questions: [
      {
        id: 'p7-u2-q1',
        number: 1,
        question: 'Tally Prime: Features, Advantages, Installation, Navigation, Company Creation, Backup & Restore समझाइए।',
        topics: ['Tally Prime Overview', 'Top Menu Navigation (Alt+G Go To)', 'Company Creation (F3 / Alt+F3)', 'Backup & Restore Data', 'Tally Vault Password'],
        answer: {
          summary: 'टैली प्राइम भारत का सर्वाधिक लोकप्रिय ईआरपी लेखांकन सॉफ्टवेयर है। इसमें आधुनिक यूजर इंटरफेस, "Go To" सर्च बार, निर्बाध कंपनी निर्माण और मजबूत डेटा बैकअप सुविधाएं हैं।',
          sections: [
            {
              heading: '1. टैली प्राइम की मुख्य विशेषताएं और लाभ',
              content: 'आधुनिक व्यापारिक ईआरपी:',
              points: [
                'पूर्ण जीएसटी और टीडीएस अनुपालन।',
                '"Go To" (Alt + G): बिना वर्तमान स्क्रीन छोड़े किसी भी रिपोर्ट या वाउचर पर तुरंत जाने की सुविधा।',
                'मल्टी-टास्किंग: बिल बनाते समय तुरंत स्टॉक सारांश या ग्राहक लेजर देखना।',
                'डेटा सुरक्षा: TallyVault एन्क्रिप्शन और यूजर-स्तरीय अधिकार नियंत्रण।'
              ]
            },
            {
              heading: '2. कंपनी निर्माण प्रक्रिया (Company Creation)',
              content: 'टैली शुरू करने के बाद Create Company पर जाएं:',
              points: [
                'Company Name और Mailing Name दर्ज करें।',
                'Address, State (जैसे Madhya Pradesh), Country (India), Pincode, Mobile, Email।',
                'Financial Year beginning from: 01-Apr-2026; Books beginning from: 01-Apr-2026।',
                'Base Currency Symbol: ₹ (INR)। Ctrl + A दबाकर तुरंत सेव करें।'
              ]
            },
            {
              heading: '3. बैकअप और रीस्टोर (Backup & Restore)',
              content: 'डेटा सुरक्षा के लिए Alt + Y (Data Menu):',
              points: [
                'Backup: कंपनी का चयन करें और बैकअप पाथ (जैसे पेन ड्राइव `E:\\TallyBackup`) देकर फ़ाइल सेव करें (TBK फ़ाइल बनती है)।',
                'Restore: सिस्टम खराब होने पर बैकअप फ़ाइल से डेटा को पुनः मूल स्थिति में वापस लाना।'
              ]
            }
          ],
          examTip: 'टैली प्राइम का क्रांतिकारी फीचर "Alt + G (Go To)" और कंपनी निर्माण का शॉर्टकट `Ctrl + A` (तुरंत सेव) लिखें।',
          keyTerms: ['Tally Prime', 'Alt+G Go To', 'Company Creation F3', 'Financial Year 1st April', 'Data Backup & Restore Alt+Y', 'TallyVault']
        }
      },
      {
        id: 'p7-u2-q2',
        number: 2,
        question: 'Basic Operations: Gateway of Tally, Company Features & Configurations, Security & Password Management समझाइए।',
        topics: ['Gateway of Tally (GOT)', 'F11 Features (Accounting, Inventory, Statutory)', 'F12 Configuration', 'Security Control (Users & Passwords)'],
        answer: {
          summary: 'गेटवे ऑफ टैली मुख्य नियंत्रण कक्ष है। F11 फीचर्स से संगठन की आवश्यकता अनुसार मॉड्यूल चालू किए जाते हैं और F12 से प्रत्येक स्क्रीन का व्यवहार कॉन्फ़िगर होता है।',
          sections: [
            {
              heading: '1. गेटवे ऑफ टैली (Gateway of Tally - GOT)',
              content: 'टैली की मुख्य मेनू स्क्रीन जो चार प्रमुख भागों में बंटी होती है: Masters (Create, Alter, Chart of Accounts), Transactions (Vouchers, Day Book), Utilities (Banking), और Reports (Balance Sheet, Profit & Loss A/c, Stock Summary, Ratio Analysis)।'
            },
            {
              heading: '2. F11 फीचर्स और F12 कॉन्फ़िगरेशन में अंतर',
              content: 'दोनों का तकनीकी अंतर:',
              table: {
                headers: ['लक्षण', 'F11: कंपनी फीचर्स (Company Features)', 'F12: कॉन्फ़िगरेशन (Configuration)'],
                rows: [
                  ['दायरा', 'पूरी कंपनी के लिए वैश्विक (Global for Company)', 'वर्तमान खुली हुई स्क्रीन/वाउचर के लिए स्थानीय'],
                  ['श्रेणियां', 'Accounting, Inventory, Taxation (GST/TDS)', 'वाउचर स्क्रीन फ़ील्ड्स, प्रिंटिंग, इनवॉइस विवरण'],
                  ['उदाहरण', 'Maintain Accounts with Inventory = Yes', 'Provide Buyer details = Yes; Provide GST details = Yes']
                ]
              }
            },
            {
              heading: '3. सुरक्षा और पासवर्ड प्रबंधन (Security & User Roles)',
              content: 'कंपनी सेटिंग्स में Security Control चालू करके विभिन्न स्तरों के उपयोगकर्ता (Owner, Data Entry Operator) बनाना और उनके अधिकार सीमित करना (जैसे ऑपरेटर बैलेंस शीट न देख सके)।'
            }
          ],
          examTip: 'F11 (कंपनी-व्यापी फीचर्स) और F12 (वर्तमान स्क्रीन सेटिंग्स) का अंतर परीक्षा में अवश्य स्पष्ट करें।',
          keyTerms: ['Gateway of Tally (GOT)', 'F11 Features Matrix', 'F12 Local Config', 'Security Control Roles', 'Data Entry Restriction']
        }
      },
      {
        id: 'p7-u2-q3',
        number: 3,
        question: 'Accounting Masters: Creating & Altering Groups, Ledgers, Chart of Accounts समझाइए।',
        topics: ['Primary & Secondary Groups (28 Pre-defined)', 'Ledger Creation (Capital, Cash, Bank, Debtors)', 'Chart of Accounts View', 'Alteration & Deletion'],
        answer: {
          summary: 'लेखांकन मास्टर्स टैली में लेन-देन दर्ज करने के बुनियादी खाते हैं। टैली में 28 पूर्वनिर्धारित समूह होते हैं जिनके अंतर्गत व्यक्तिगत बहीखाते (Ledgers) बनाए जाते हैं।',
          sections: [
            {
              heading: '1. ग्रुप्स (Groups) और उनका वर्गीकरण',
              content: 'टैली में 28 पहले से बने ग्रुप्स होते हैं (15 प्राथमिक प्राइमरी ग्रुप्स और 13 सब-ग्रुप्स):',
              points: [
                'बैलेंस शीट ग्रुप्स: Capital Account, Loans (Liability), Current Liabilities, Fixed Assets, Current Assets, Investments।',
                'लाभ-हानि ग्रुप्स: Sales Accounts, Purchase Accounts, Direct Incomes, Indirect Incomes, Direct Expenses, Indirect Expenses।'
              ]
            },
            {
              heading: '2. लेजर निर्माण (Ledger Creation)',
              content: 'टैली में केवल दो लेजर्स पहले से बने होते हैं: "Cash" और "Profit & Loss A/c"। बाकी सभी लेजर्स यूजर को बनाने होते हैं:',
              points: [
                'पथ: Gateway of Tally > Create > Ledger।',
                'उदाहरण 1: State Bank of India -> Under "Bank Accounts".',
                'उदाहरण 2: Ramesh Traders (जिससे माल खरीदा) -> Under "Sundry Creditors".',
                'उदाहरण 3: Office Rent -> Under "Indirect Expenses".',
                'उदाहरण 4: Machinery A/c -> Under "Fixed Assets".'
              ]
            },
            {
              heading: '3. चार्ट ऑफ अकाउंट्स (Chart of Accounts)',
              content: 'Gateway of Tally > Chart of Accounts में जाकर सभी ग्रुप्स और उनसे जुड़े लेजर्स का संपूर्ण वृक्षनुमा पदानुक्रम (Hierarchical Tree) एक नज़र में देखना और संपादित करना।'
            }
          ],
          examTip: 'टैली में पहले से बने 2 लेजर्स (Cash और P&L) और 28 ग्रुप्स की संख्या को जरूर याद रखें।',
          keyTerms: ['28 Predefined Groups', '15 Primary & 13 Sub-groups', 'Pre-existing Cash & P&L', 'Sundry Debtors/Creditors', 'Chart of Accounts Tree']
        }
      },
      {
        id: 'p7-u2-q4',
        number: 4,
        question: 'Voucher Entries: Contra, Payment, Receipt, Journal, Purchase, Sales, Debit Note, Credit Note, Day Book, Trial Balance, Viewing/Printing Vouchers समझाइए।',
        topics: ['8 Standard Vouchers', 'F4 Contra, F5 Payment, F6 Receipt, F7 Journal, F8 Sales, F9 Purchase', 'Alt+F5 Debit Note, Alt+F6 Credit Note', 'Day Book & Printing'],
        answer: {
          summary: 'वाउचर वित्तीय लेनदेन का कानूनी प्रमाण पत्र है। टैली में प्रत्येक प्रकार के सौदे के लिए एक समर्पित वाउचर प्रकार और समर्पित फंक्शन की होती है।',
          sections: [
            {
              heading: '1. आठ प्रमुख वाउचर प्रकार (8 Standard Accounting Vouchers)',
              content: 'फंक्शन कीज और उनके उपयोग की व्यापक तालिका:',
              table: {
                headers: ['वाउचर का नाम', 'शॉर्टकट की', 'कब उपयोग होता है?', 'उदाहरण लेनदेन'],
                rows: [
                  ['Contra Voucher', 'F4', 'केवल नकद और बैंक के बीच आंतरिक लेन-देन', 'बैंक में नकद ₹10,000 जमा किए / निकाले'],
                  ['Payment Voucher', 'F5', 'किसी भी प्रकार का नकद या बैंक से भुगतान', 'मकान मालिक को किराया ₹5,000 दिया'],
                  ['Receipt Voucher', 'F6', 'किसी भी स्रोत से नकद या बैंक में राशि प्राप्त होना', 'ग्राहक से चेक प्राप्त हुआ / कमीशन मिला'],
                  ['Journal Voucher', 'F7', 'गैर-नकद समायोजन (No Cash/Bank involved)', 'मशीनरी पर ह्रास लगाया / उधार संपत्ति खरीदी'],
                  ['Sales Voucher', 'F8', 'माल या सेवाओं की बिक्री (नकद या उधार)', 'अनिल को ₹25,000 का माल बेचा'],
                  ['Purchase Voucher', 'F9', 'माल का क्रय (नकद या उधार)', 'सप्लायर से ₹50,000 का माल खरीदा'],
                  ['Debit Note', 'Alt + F5', 'क्रय वापसी (Purchase Return) या विक्रेता को डेबिट', 'सप्लायर को खराब माल वापस लौटाया'],
                  ['Credit Note', 'Alt + F6', 'विक्रय वापसी (Sales Return) या ग्राहक को क्रेडिट', 'ग्राहक ने खराब माल वापस लौटा दिया']
                ]
              }
            },
            {
              heading: '2. डे बुक (Day Book) और वाउचर प्रिंटिंग',
              content: 'Gateway of Tally > Day Book से किसी निश्चित दिन या अवधि (F2 Period) में दर्ज सभी वाउचर्स की सूची देखना। किसी भी वाउचर को खोलकर Ctrl + P दबाने से पेशेवर वाउचर रसीद या टैक्स इनवॉइस का प्रिंट निकलता है।'
            }
          ],
          examTip: 'आठों वाउचर्स की शॉर्टकट कीज (F4 से F9 और Alt+F5, Alt+F6) की तालिका परीक्षा में पूरे अंक दिलाती है।',
          keyTerms: ['F4 Contra', 'F5 Payment', 'F6 Receipt', 'F7 Journal', 'F8 Sales', 'F9 Purchase', 'Debit/Credit Notes', 'Day Book F2 Period']
        }
      },
      {
        id: 'p7-u2-q5',
        number: 5,
        question: 'Banking Features: Bank Reconciliation, Cheque Printing, Deposit Slips, Payment Advices, PDC Voucher; Non-Accounting Vouchers: Memorandum, Reversing Journal, Optional; Cost Centers, Cost Categories, Budgeting, Scenario Management समझाइए।',
        topics: ['Bank Reconciliation Statement (BRS)', 'Cheque Printing & Deposit Slips', 'Post-Dated Cheques (PDC)', 'Memorandum & Optional Vouchers', 'Cost Centers & Categories', 'Budget vs Actual'],
        answer: {
          summary: 'टैली की उन्नत बैंकिंग सुविधाएं बैंक रिकॉन्सिलेशन और चेक प्रिंटिंग को आसान बनाती हैं। गैर-लेखांकन वाउचर्स और कॉस्ट सेंटर्स लागत विश्लेषण व बजट प्रबंधन में सक्षम हैं।',
          sections: [
            {
              heading: '1. बैंकिंग सुविधाएं और बैंक समाधान विवरण (BRS)',
              content: 'कंपनी की कैश बुक और बैंक पासबुक के शेष में अंतर का समाधान:',
              points: [
                'Bank Reconciliation: Gateway of Tally > Banking > Bank Reconciliation। चेक क्लियरेंस की तारीख (Bank Date) दर्ज करते ही टैली स्वतः BRS तैयार कर देता है।',
                'Cheque Printing: लेजर में बैंक का नाम और चेक प्रारूप कॉन्फ़िगर करके सीधे प्रिंटर से चेक प्रिंट करना।',
                'Deposit Slip: बैंक में नकद जमा करते समय स्वतः करेंसी नोट डिनॉमिनेशन स्लिप बनाना।',
                'PDC (Post-Dated Cheque): भविष्य की तारीख का चेक मिलने पर वाउचर में Ctrl + T दबाकर PDC चिह्नित करना; यह नियत तारीख पर ही खातों को प्रभावित करता है।'
              ]
            },
            {
              heading: '2. गैर-लेखांकन वाउचर्स (Non-Accounting Vouchers)',
              content: 'अस्थायी वाउचर्स जो मुख्य खातों को प्रभावित नहीं करते:',
              points: [
                'Memorandum Voucher: कर्मचारियों को दिए गए अस्थायी अग्रिम (Suspense Advance) को याद रखने हेतु।',
                'Optional Voucher (Ctrl + L): किसी भी सामान्य वाउचर को वैकल्पिक बनाना; यह रिपोर्ट में शामिल नहीं होता जब तक इसे रेगुलर न किया जाए।',
                'Reversing Journal: केवल एक निश्चित तारीख तक मान्य समायोजन वाउचर जो अगली तारीख पर स्वतः निष्प्रभावी हो जाता है।'
              ]
            },
            {
              heading: '3. कॉस्ट सेंटर्स और बजट (Cost Centers & Budgeting)',
              content: 'लागत और व्यय का सूक्ष्म विश्लेषण:',
              points: [
                'Cost Centers: किसी विशिष्ट विभाग (HR, IT, Sales) या प्रोजेक्ट के अनुसार खर्चों का आवंटन करना।',
                'Budgeting: वित्तीय वर्ष के लिए व्यय सीमाएं निर्धारित करना और Budget vs Actual रिपोर्ट से ओवर-स्पेंडिंग पर नियंत्रण रखना।'
              ]
            }
          ],
          examTip: 'BRS में "Bank Date" डालने पर ऑटो-रिकॉन्सिलेशन होना और PDC (Ctrl + T) का उल्लेख करें।',
          keyTerms: ['Bank Reconciliation (BRS)', 'Cheque Printing', 'Post-Dated Cheque (Ctrl+T)', 'Memorandum Voucher', 'Cost Centers Allocations', 'Budget Variance']
        }
      }
    ]
  },
  {
    unitNumber: 3,
    unitRoman: 'Unit III',
    title: 'इन्वेंटरी प्रबंधन, स्टॉक मास्टर्स, इन्वेंटरी वाउचर्स व बिलिंग',
    questions: [
      {
        id: 'p7-u3-q1',
        number: 1,
        question: 'Inventory Management: Introduction, Inventory Masters: Stock Groups, Categories, Items, Units of Measurement, Compound Units, Godowns समझाइए।',
        topics: ['Inventory Management Need', 'Units of Measure (Simple vs Compound)', 'Stock Groups & Categories', 'Stock Items Creation', 'Godowns / Locations'],
        answer: {
          summary: 'इन्वेंटरी प्रबंधन माल के क्रय, भंडारण और विक्रय का सटीक स्टॉक रिकॉर्ड रखता है। इसमें स्टॉक ग्रुप्स, कैटेगरीज, आइटम्स, माप की इकाइयाँ और गोदाम मास्टर्स शामिल हैं।',
          sections: [
            {
              heading: '1. माप की इकाइयाँ (Units of Measurement - UoM)',
              content: 'स्टॉक को मापने के मानक:',
              points: [
                'सरल इकाइयाँ (Simple Units): जैसे Nos (Numbers), Pcs (Pieces), Kg (Kilograms), Mtr (Meters)।',
                'मिश्रित इकाइयाँ (Compound Units): दो सरल इकाइयों का अनुपात। उदाहरण: `1 Box = 20 Pcs` या `1 Dozen = 12 Nos`।'
              ]
            },
            {
              heading: '2. स्टॉक वर्गीकरण (Groups, Categories & Items)',
              content: 'पदानुक्रमित संगठन:',
              points: [
                'Stock Groups: ब्रांड या मुख्य प्रकार (जैसे "Television" या "Smartphones")।',
                'Stock Categories: क्रॉस-ग्रुप वर्गीकरण (जैसे "32 Inch", "LED", "5G Models")।',
                'Stock Item: वास्तविक बिकने वाली वस्तु (जैसे "Sony Bravia 43 Inch 4K LED TV")। इसमें यूनिट, जीएसटी दर, और ओपनिंग स्टॉक दर्ज होता है।'
              ]
            },
            {
              heading: '3. गोदाम / स्थान (Godowns / Locations)',
              content: 'जब माल कई अलग-अलग स्थानों या वेयरहाउसों में रखा जाता है (जैसे Main Godown, Bhopal Warehouse, Showroom)। माल खरीदते या बेचते समय गोदाम निर्दिष्ट किया जाता है।'
            }
          ],
          examTip: 'Compound Unit का उदाहरण (1 Box = 10 Pcs) और Stock Hierarchy का आरेख बनाएं।',
          keyTerms: ['Simple Units Nos/Kg', 'Compound Units (Box of Pcs)', 'Stock Groups vs Categories', 'Stock Item Master', 'Godowns Warehousing']
        }
      },
      {
        id: 'p7-u3-q2',
        number: 2,
        question: 'Inventory Vouchers: Purchase Order, Sales Order, Delivery Note, Receipt Note, Rejection Out/In, Stock Journal, Physical Stock समझाइए।',
        topics: ['Order Processing (PO / SO)', 'Tracking Vouchers (Receipt Note / Delivery Note)', 'Rejections In/Out', 'Stock Journal (Transfer & Consumption)', 'Physical Stock (Alt+F10)'],
        answer: {
          summary: 'इन्वेंटरी वाउचर्स सामग्री के भौतिक प्रवाह (ऑर्डर से लेकर डिलीवरी और गोदाम ट्रांसफर) को ट्रैक करते हैं बिना खातों में वित्तीय प्रविष्टि किए।',
          sections: [
            {
              heading: '1. ऑर्डर प्रोसेसिंग वाउचर्स (Order Processing)',
              content: 'व्यापारिक अनुबंध चरण:',
              points: [
                'Purchase Order (Ctrl + F9): सप्लायर को माल भेजने का औपचारिक लिखित आदेश।',
                'Sales Order (Ctrl + F8): ग्राहक से प्राप्त खरीद आदेश।'
              ]
            },
            {
              heading: '2. माल की प्राप्ति और सुपुर्दगी (Challan Vouchers)',
              content: 'चालान आधारित भौतिक आवागमन:',
              points: [
                'Receipt Note (Alt + F9): सप्लायर से माल के साथ चालान (Goods Inward) प्राप्त होना। स्टॉक बढ़ता है।',
                'Delivery Note (Alt + F8): ग्राहक को माल चालान के साथ भेजना (Goods Outward)। स्टॉक घटता है।',
                'Rejection Out (Alt + F5): सप्लायर से प्राप्त खराब माल को बिल बनने से पहले वापस लौटाना।',
                'Rejection In (Ctrl + F6): ग्राहक द्वारा लौटाया गया खराब माल वापस लेना।'
              ]
            },
            {
              heading: '3. स्टॉक जर्नल और फिजिकल स्टॉक',
              content: 'आंतरिक गोदाम प्रबंधन:',
              points: [
                'स्टॉक जर्नल (Alt + F7): एक गोदाम से दूसरे गोदाम में माल स्थानांतरित करना (Destination Godown Transfer), या विनिर्माण में कच्चे माल से पक्का माल बनाना (Manufacturing Journal)।',
                'फिजिकल स्टॉक (Ctrl + F7): महीने के अंत में गोदाम में वास्तविक गिनती करने पर यदि चोरी या नुकसान के कारण कम माल मिले, तो टैली के स्टॉक को वास्तविक भौतिक स्टॉक के बराबर करना।'
              ]
            }
          ],
          examTip: 'संपूर्ण चक्र: Purchase Order -> Receipt Note -> Rejection Out -> Purchase Bill का प्रवाह चार्ट बनाएं।',
          keyTerms: ['Purchase Order Ctrl+F9', 'Receipt Note Alt+F9', 'Delivery Note Alt+F8', 'Stock Journal Alt+F7', 'Physical Stock Verification']
        }
      },
      {
        id: 'p7-u3-q3',
        number: 3,
        question: 'Invoicing & Billing: Item vs Accounting Invoicing, Multiple Price Levels, Discounts, Standard Cost, Selling Price, MRP, Actual & Billed Quantity समझाइए।',
        topics: ['Item Invoice vs Accounting Invoice (Ctrl+H)', 'Multiple Price Levels (Retail, Wholesale)', 'Trade vs Cash Discount', 'Actual & Billed Quantity Columns'],
        answer: {
          summary: 'टैली में इनवॉइसिंग मोड्स (आइटम या एकाउंटिंग), एकाधिक मूल्य स्तर (होलसेल/रिटेल), एमआरपी और "एक्चुअल व बिल्ड क्वांटिटी" व्यापारिक आवश्यकताओं को पूरा करते हैं।',
          sections: [
            {
              heading: '1. आइटम इनवॉइस बनाम एकाउंटिंग इनवॉइस (Ctrl + H Change Mode)',
              content: 'इनवॉइस के दो रूप:',
              points: [
                'Item Invoice: जब माल (Goods) बेचा जाता है; इसमें Name of Item, Quantity, Rate, Amount कॉलम होते हैं।',
                'Accounting Invoice: जब कोई सेवा (Service) बेची जाती है (जैसे कंसल्टेंसी); इसमें केवल सर्विस लेजर और कुल राशि होती है (कोई क्वांटिटी नहीं)।'
              ]
            },
            {
              heading: '2. एकाधिक मूल्य स्तर (Multiple Price Levels)',
              content: 'विभिन्न प्रकार के ग्राहकों के लिए अलग-अलग मूल्य सूची तय करना: जैसे "Wholesale" (50 पीस से अधिक खरीदने पर ₹400 प्रति पीस) और "Retail" (₹500 प्रति पीस)। बिक्री बिल बनाते समय केवल Price Level चुनने से दरें स्वतः आ जाती हैं।'
            },
            {
              heading: '3. वास्तविक और बिल की गई मात्रा (Actual & Billed Quantity)',
              content: '"Buy 10 Get 2 Free" जैसी योजनाओं के लिए F11 में "Use Separate Actual and Billed Quantity Columns" चालू किया जाता है।',
              points: [
                'Actual Qty: गोदाम से 12 पीस निकलते हैं (स्टॉक 12 से घटता है)।',
                'Billed Qty: ग्राहक से केवल 10 पीस का मूल्य लिया जाता है।'
              ]
            }
          ],
          examTip: 'Actual & Billed Qty (Buy 10 Get 2 Free) का उदाहरण परीक्षा में बहुत सराहा जाता है।',
          keyTerms: ['Item Invoice vs Accounting Invoice', 'Ctrl+H Change Mode', 'Multiple Price Levels (Wholesale/Retail)', 'Actual & Billed Qty Buy 10 Get 2']
        }
      },
      {
        id: 'p7-u3-q4',
        number: 4,
        question: 'Inventory Reports: Stock Summary, Movement Analysis, Shortage, Ageing, Batch-wise, Purchase Register, Sales Register समझाइए।',
        topics: ['Stock Summary Report (F10)', 'Stock Ageing Analysis', 'Movement Analysis (Fast/Slow Moving)', 'Batch-wise & Expiry Reports', 'Registers'],
        answer: {
          summary: 'इन्वेंटरी रिपोर्ट्स स्टॉक स्तरों, डेड स्टॉक, धीमी गति से बिकने वाले उत्पादों और एक्सपायरी तिथियों पर पूर्ण नियंत्रण प्रदान करती हैं।',
          sections: [
            {
              heading: '1. स्टॉक सारांश (Stock Summary - F10)',
              content: 'Gateway of Tally > Stock Summary: यह वर्तमान में प्रत्येक आइटम का उपलब्ध परिमाण (Closing Quantity), प्रति यूनिट दर (Rate) और कुल स्टॉक मूल्य (Closing Value) दिखाता है। F12 से ग्रॉस प्रॉफिट और इनवर्ड/आउटवर्ड प्रवाह भी देखा जा सकता है।'
            },
            {
              heading: '2. एजिंग और मूवमेंट विश्लेषण (Ageing & Movement Analysis)',
              content: 'इन्वेंटरी नियंत्रण की तकनीकें:',
              points: [
                'Stock Ageing Analysis: यह दर्शाता है कि कौन सा माल गोदाम में कितने दिनों से (जैसे <30 दिन, 30-60 दिन, >90 दिन) पड़ा हुआ है ताकि पुराना स्टॉक पहले निकाला जा सके।',
                'Movement Analysis: तेजी से बिकने वाले (Fast Moving) और कभी न बिकने वाले (Slow/Non-moving) आइटम्स की पहचान करना।'
              ]
            },
            {
              heading: '3. बैच-वाइज और एक्सपायरी रिपोर्ट्स (Batch-wise Details)',
              content: 'दवाइयों और खाद्य पदार्थों के लिए बैच नंबर, विनिर्माण तिथि (Mfg Date) और एक्सपायरी तिथि (Expiry Date) ट्रैक करना ताकि एक्सपायर हो चुका माल गलती से भी न बिके।'
            }
          ],
          examTip: 'दवाइयों के व्यापार में Batch-wise और Expiry Date ट्रैकिंग का उपयोग अवश्य लिखें।',
          keyTerms: ['Stock Summary F10', 'Stock Ageing Analysis (FIFO)', 'Fast/Slow Moving Items', 'Batch-wise Mfg & Expiry', 'Purchase/Sales Registers']
        }
      },
      {
        id: 'p7-u3-q5',
        number: 5,
        question: 'Practical: Inventory Masters बनाकर Vouchers Record करना और Reports Generate करना सिखाइए।',
        topics: ['Practical Computer Store Setup', 'Unit, Group, Item Creation', 'Purchase Entry with Godown', 'Sales Entry with Profit', 'Stock Summary Result'],
        answer: {
          summary: 'एक व्यावहारिक कंप्यूटर स्टोर के उदाहरण द्वारा मास्टर्स निर्माण, खरीद, बिक्री और स्टॉक समरी रिपोर्ट को चरणबद्ध रूप से समझाया गया है।',
          sections: [
            {
              heading: '1. इन्वेंटरी मास्टर्स का निर्माण',
              content: 'टैली में व्यावहारिक इनपुट:',
              points: [
                '1. Unit: Create > Unit > Symbol: "Pcs", Formal Name: "Pieces"।',
                '2. Stock Group: "Laptops" (Under Primary)।',
                '3. Godown: "City Showroom" और "Main Warehouse"।',
                '4. Stock Item: "Dell Inspiron 15" -> Under "Laptops", Units: "Pcs", GST: 18%।'
              ]
            },
            {
              heading: '2. वाउचर्स रिकॉर्डिंग',
              content: 'व्यावहारिक लेन-देन:',
              points: [
                'Purchase (F9): सप्लायर "Dell India" से 10 Pcs @ ₹45,000 Main Warehouse में खरीदे। कुल बिल: ₹4,50,000 + GST।',
                'Sales (F8): ग्राहक "Amit Verma" को 2 Pcs @ ₹55,000 Main Warehouse से बेचे। कुल बिल: ₹1,10,000 + GST।'
              ]
            },
            {
              heading: '3. रिपोर्ट का सत्यापन',
              content: 'Stock Summary में जाने पर Dell Inspiron 15 का क्लोजिंग बैलेंस 8 Pcs @ ₹45,000 = ₹3,60,000 दिखाई देगा। F7 दबकर देखने पर 2 पीस की बिक्री पर ₹20,000 का ग्रॉस प्रॉफिट प्रदर्शित होगा।'
            }
          ],
          examTip: 'खरीद (10 Pcs @ 45,000) और बिक्री (2 Pcs @ 55,000) का व्यावहारिक उदाहरण उत्तर में लिखकर क्लोजिंग स्टॉक (8 Pcs) निकालें।',
          keyTerms: ['Practical Simulation', 'Dell Laptops Master', 'Purchase F9 Godown', 'Sales F8 Profit Margin', 'Stock Summary Balance']
        }
      }
    ]
  },
  {
    unitNumber: 4,
    unitRoman: 'Unit IV',
    title: 'जीएसटी (GST) अवधारणा, विन्यास, लेन-देन व जीएसटीआर रिटर्न्स',
    questions: [
      {
        id: 'p7-u4-q1',
        number: 1,
        question: 'GST Overview: Concept, Structure (CGST, SGST, IGST, UTGST), Registration, Returns, Tax Rates समझाइए।',
        topics: ['Goods and Services Tax (GST)', 'One Nation One Tax', 'CGST, SGST, IGST, UTGST Structure', 'GST Tax Slabs (0%, 5%, 12%, 18%, 28%)', 'GSTIN 15-Digit Format'],
        answer: {
          summary: 'जीएसटी (वस्तु एवं सेवा कर) भारत में 1 जुलाई 2017 से लागू एकल, व्यापक, गंतव्य-आधारित अप्रत्यक्ष कर है जिसने दर्जनों पुराने करों (वैट, उत्पाद शुल्क, सेवा कर) का स्थान लिया है।',
          sections: [
            {
              heading: '1. जीएसटी की संरचना (Structure of GST)',
              content: 'भौगोलिक सीमा के आधार पर करों का विभाजन:',
              points: [
                'अंतःराज्यीय बिक्री (Intra-State Supply - राज्य के अंदर ही): इसमें दो कर समान अनुपात में लगते हैं - केंद्रीय जीएसटी (CGST) और राज्य जीएसटी (SGST) या केंद्र शासित प्रदेश जीएसटी (UTGST)। उदाहरण: यदि 18% कर है तो 9% CGST और 9% SGST।',
                'अंतरराज्यीय बिक्री (Inter-State Supply - एक राज्य से दूसरे राज्य में): इसमें केवल एकीकृत जीएसटी (IGST) लगता है जो केंद्र सरकार द्वारा एकत्र होकर उपभोक्ता राज्य को साझा होता है।'
              ]
            },
            {
              heading: '2. 15-अंकीय जीएसटी पहचान संख्या (GSTIN Format)',
              content: 'उदाहरण: `23AAAAA0000A1Z5`:',
              points: [
                'पहले 2 अंक: राज्य कोड (जैसे 23 मध्य प्रदेश के लिए, 27 महाराष्ट्र, 07 दिल्ली)।',
                'अगले 10 अक्षर: व्यवसाय का स्थायी खाता संख्या (PAN Card Number)।',
                '13वां अंक: राज्य में पैन की इकाई संख्या (Entity Number)।',
                '14वां अक्षर: डिफ़ॉल्ट अक्षर \'Z\'। 15वां अंक: चेकसम कोड।'
              ]
            },
            {
              heading: '3. मानक कर स्लैब्स (Tax Slabs)',
              content: '0% (अनाज, दूध, नमक), 5% (आवश्यक दवाएं, तेल), 12% (कंप्यूटर, प्रोसेस्ड फूड), 18% (आईटी सेवाएं, इलेक्ट्रॉनिक्स, फर्नीचर), और 28% (विलासिता की वस्तुएं, कारें, तंबाकू)।'
            }
          ],
          examTip: 'GSTIN का 15-अंकीय संरचना चार्ट (2 State Code + 10 PAN + 1 Entity + Z + Checksum) जरूर बनाएं।',
          keyTerms: ['One Nation One Tax', 'Intra-State CGST+SGST', 'Inter-State IGST', '15-Digit GSTIN Structure', 'Tax Slabs 5, 12, 18, 28%']
        }
      },
      {
        id: 'p7-u4-q2',
        number: 2,
        question: 'GST Configuration in Tally: Enabling GST, Creating Tax Ledgers, Assigning GST Details to Masters समझाइए।',
        topics: ['Enable GST in F11', 'State, Registration Type, GSTIN', 'Creating Tax Ledgers (CGST, SGST, IGST)', 'HSN/SAC Code & Rate in Stock Item'],
        answer: {
          summary: 'टैली में जीएसटी लागू करने के लिए F11 में जीएसटी विवरण सक्षम किया जाता है, कर खाते (CGST, SGST, IGST) बनाए जाते हैं और स्टॉक आइटम्स में HSN कोड व कर दरें निर्धारित की जाती हैं।',
          sections: [
            {
              heading: '1. F11 में जीएसटी सक्षम करना',
              content: 'पथ: Gateway of Tally > F11 Features > "Enable Goods and Services Tax (GST)" को Yes करें:',
              points: [
                'State: Madhya Pradesh; Registration type: Regular (या Composition)।',
                'GSTIN/UIN: 15-अंकीय जीएसटी नंबर दर्ज करें।',
                'Periodicity of GSTR-1: Monthly या Quarterly।',
                'e-Way Bill और e-Invoicing लागू करने की सीमाएं सेट करें। Ctrl + A से सेव करें।'
              ]
            },
            {
              heading: '2. टैक्स लेजर्स का निर्माण (Creating Tax Ledgers)',
              content: 'Duties & Taxes समूह के अंतर्गत तीन लेजर्स बनाएं:',
              points: [
                '1. CGST -> Under: Duties & Taxes -> Type of Duty: GST -> Tax Type: Central Tax.',
                '2. SGST -> Under: Duties & Taxes -> Type of Duty: GST -> Tax Type: State Tax.',
                '3. IGST -> Under: Duties & Taxes -> Type of Duty: GST -> Tax Type: Integrated Tax.'
              ]
            },
            {
              heading: '3. मास्टर्स में जीएसटी विवरण सेट करना',
              content: 'स्टॉक आइटम (जैसे Laptop) बनाते समय: "GST Applicable" -> Set/Alter GST Details: Yes -> HSN Code दर्ज करें (जैसे 8471) -> Taxability: Taxable -> Integrated Tax: 18% (टैली स्वतः 9% Central और 9% State Tax विभाजित कर लेगा)।'
            }
          ],
          examTip: 'तीनों टैक्स लेजर्स का सही समूह "Duties & Taxes" और Tax Type (Central, State, Integrated) लिखें।',
          keyTerms: ['F11 Enable GST', 'Regular vs Composition', 'Duties & Taxes Group', 'Central vs State vs Integrated Tax', 'HSN/SAC Code 8471']
        }
      },
      {
        id: 'p7-u4-q3',
        number: 3,
        question: 'Recording GST Transactions: Intra-state & Inter-state Sales & Purchases, Taxable & Exempt, Reverse Charge Mechanism समझाइए।',
        topics: ['Local Sales (CGST+SGST)', 'Interstate Sales (IGST)', 'Exempt / Nil Rated Sales', 'Reverse Charge Mechanism (RCM)'],
        answer: {
          summary: 'टैली ग्राहक या सप्लायर के राज्य के आधार पर स्वतः पहचानती है कि बिल पर CGST+SGST लगाना है या IGST। रिवर्स चार्ज में टैक्स चुकाने की जिम्मेदारी क्रेता पर होती है।',
          sections: [
            {
              heading: '1. स्थानीय बिक्री (Intra-state Sales Entry)',
              content: 'मध्य प्रदेश के व्यापारी द्वारा मध्य प्रदेश के ही ग्राहक को बिक्री:',
              points: [
                'वाउचर: F8 Sales. Party Name: Local Customer (MP).',
                'Name of Item: Computer (₹50,000).',
                'नीचे लेजर्स लगाएं: CGST (9% = ₹4,500) और SGST (9% = ₹4,500)। कुल बिल: ₹59,000।'
              ]
            },
            {
              heading: '2. अंतरराज्यीय बिक्री (Inter-state Sales Entry)',
              content: 'मध्य प्रदेश से बाहर (जैसे मुंबई, महाराष्ट्र) के ग्राहक को बिक्री:',
              points: [
                'वाउचर: F8 Sales. Party Name: Mumbai Customer (Maharashtra).',
                'Name of Item: Computer (₹50,000).',
                'नीचे लेजर लगाएं: IGST (18% = ₹9,000)। कुल बिल: ₹59,000।'
              ]
            },
            {
              heading: '3. रिवर्स चार्ज मैकेनिज्म (RCM - Reverse Charge Mechanism)',
              content: 'सामान्यतः विक्रेता टैक्स सरकार को जमा करता है। लेकिन आरसीएम के तहत (जैसे जीटीए ट्रांसपोर्टर्स या अपंजीकृत डीलर से खरीद पर) माल या सेवा खरीदने वाले क्रेता को स्वयं अपनी जेब से सरकार को टैक्स जमा करना होता है, जिसका बाद में इनपुट टैक्स क्रेडिट मिलता है।'
            }
          ],
          examTip: 'लोकल सेल (CGST + SGST) और इंटरस्टेट सेल (IGST) के दो अलग-अलग वाउचर उदाहरण बिल सहित लिखें।',
          keyTerms: ['Intra-state Sales (CGST+SGST)', 'Inter-state Sales (IGST)', 'Exempt Nil-Rated', 'Reverse Charge Mechanism (RCM)', 'GTA Services']
        }
      },
      {
        id: 'p7-u4-q4',
        number: 4,
        question: 'GST Reports & Returns: GSTR-1, GSTR-2, GSTR-3B, Input Credit Summary समझाइए।',
        topics: ['GSTR-1 (Outward Supplies)', 'GSTR-2B (Auto-drafted ITC)', 'GSTR-3B (Monthly Summary & Payment)', 'Input Tax Credit (ITC) Set-off Rules'],
        answer: {
          summary: 'जीएसटी रिटर्न्स करदाता द्वारा सरकारी पोर्टल पर जमा किए जाने वाले आवधिक विवरण हैं। इनपुट टैक्स क्रेडिट (ITC) बिक्री टैक्स की देनदारी से खरीद पर चुकाए गए टैक्स को घटाने की सुविधा है।',
          sections: [
            {
              heading: '1. मुख्य जीएसटी रिटर्न्स का विस्तृत विवरण',
              content: 'प्रत्येक रिटर्न का उद्देश्य और समय सीमा:',
              table: {
                headers: ['रिटर्न', 'उद्देश्य व सामग्री', 'फाइलिंग की समय सीमा'],
                rows: [
                  ['GSTR-1', 'व्यापारी द्वारा की गई सभी जावक बिक्रियों (Outward Supplies / Sales) का विस्तृत विवरण (B2B, B2C, HSN समरी)', 'महीने की 11 तारीख तक (मासिक)'],
                  ['GSTR-2B', 'सप्लायर्स द्वारा GSTR-1 भरने पर पोर्टल द्वारा स्वतः उत्पन्न आवक खरीद व पात्र आईटीसी विवरण', 'महीने की 14 तारीख को स्वतः तैयार'],
                  ['GSTR-3B', 'मासिक स्व-घोषित सारांश रिटर्न जिसमें कुल बिक्री टैक्स, पात्र आईटीसी और शुद्ध कर का नकद भुगतान शामिल होता है', 'महीने की 20 तारीख तक']
                ]
              }
            },
            {
              heading: '2. इनपुट टैक्स क्रेडिट (Input Tax Credit - ITC) की कार्यप्रणाली',
              content: 'टैक्स पर टैक्स (Cascading Effect) को रोकने का सिद्धांत:',
              points: [
                'उदाहरण: व्यापारी ने माल खरीदते समय ₹18,000 का टैक्स (ITC) चुकाया। वही माल बेचते समय उसने ग्राहक से ₹25,000 का टैक्स (Output Tax) एकत्र किया।',
                'शुद्ध सरकारी देनदारी: `Output Tax (₹25,000) - Input Tax Credit (₹18,000) = ₹7,000`। व्यापारी को सरकार को केवल ₹7,000 नकद जमा करने होंगे।'
              ]
            }
          ],
          examTip: 'ITC सेट-ऑफ का गणितीय उदाहरण (Output Tax - ITC = Net Tax Payable) जरूर लिखें।',
          keyTerms: ['GSTR-1 Outward Sales 11th', 'GSTR-2B Static ITC', 'GSTR-3B Payment 20th', 'Input Tax Credit (ITC)', 'Cascading Effect Removal']
        }
      },
      {
        id: 'p7-u4-q5',
        number: 5,
        question: 'Generating & Exporting Reports for Filing समझाइए।',
        topics: ['Tally GST Triangulation Engine', 'Uncertain Transactions Resolution', 'JSON / Excel Export for GST Portal', 'Offline Tool Compatibility'],
        answer: {
          summary: 'टैली प्राइम का "ट्राएंगुलेशन इंजन" रिटर्न तैयार करते समय त्रुटियों (अधूरे जीएसटीएन या गलत दरों) को चिह्नित करता है। सुधार के बाद सीधे JSON फाइल एक्सपोर्ट करके पोर्टल पर अपलोड किया जाता है।',
          sections: [
            {
              heading: '1. ट्राएंगुलेशन रिपोर्ट और विसंगति समाधान',
              content: 'Gateway of Tally > Display More Reports > Statutory Reports > GST Reports > GSTR-1 (या GSTR-3B):',
              points: [
                'टैली स्क्रीन पर दिखाता है: "Total Vouchers", "Included in Return", और "Not Relevant for Return"।',
                'Uncertain Transactions (Corrections Needed): यदि किसी ग्राहक का GSTIN गलत है या टैक्स दर में विसंगति है, तो टैली उसे अलग लाल रंग में दिखाता है। एंटर दबाकर यहीं से डेटा सुधारते ही वाउचर स्वतः रिटर्न में शामिल हो जाता है।'
              ]
            },
            {
              heading: '2. पोर्टल फाइलिंग हेतु एक्सपोर्ट (Export to JSON / Excel)',
              content: 'Alt + E (Export) > "GST Returns" पर क्लिक करें:',
              points: [
                'Format: "JSON" चुनें (सरकारी जीएसटी पोर्टल सीधे JSON स्वीकार करता है) या "Excel (Spreadsheet)"।',
                'फ़ाइल पाथ चुनें और एक्सपोर्ट करें।',
                'पोर्टल पर अपलोड: `gst.gov.in` पर लॉगिन करें > Returns Dashboard > GSTR-1 में "Prepare Offline" चुनकर टैली की जेएसॉन फ़ाइल अपलोड करें। कुछ ही सेकंडों में सभी इनवॉइस पोर्टल पर स्वतः भर जाते हैं।'
              ]
            }
          ],
          examTip: 'Uncertain Transactions (त्रुटि सुधार) और JSON एक्सपोर्ट का उल्लेख करें।',
          keyTerms: ['Triangulation Report', 'Uncertain Transactions', 'Export Alt+E JSON', 'GST Portal Offline Tool', 'Zero Error Filing']
        }
      }
    ]
  },
  {
    unitNumber: 5,
    unitRoman: 'Unit V',
    title: 'टीडीएस (TDS) प्रबंधन, एमआईएस रिपोर्ट्स व वास्तविक प्रोजेक्ट सिमुलेशन',
    questions: [
      {
        id: 'p7-u5-q1',
        number: 1,
        question: 'TDS: Introduction, Applicability, TDS Ledgers & Configuration in Tally समझाइए।',
        topics: ['Tax Deducted at Source (TDS)', 'TDS Sections (194C, 194J, 194I)', 'TAN Registration Number', 'Nature of Payment Masters'],
        answer: {
          summary: 'टीडीएस (Tax Deducted at Source) स्रोत पर कर कटौती की व्यवस्था है जिसमें आय या भुगतान करने वाला व्यक्ति भुगतान करते समय ही एक निश्चित प्रतिशत टैक्स काटकर सरकारी खजाने में जमा करता है।',
          sections: [
            {
              heading: '1. टीडीएस की अवधारणा और प्रमुख धाराएं (TDS Sections)',
              content: 'आयकर अधिनियम 1961 के तहत प्रमुख धाराएं:',
              points: [
                'धारा 194C (ठेकेदारों को भुगतान): व्यक्तिगत/एचयूएफ को 1%, कंपनियों को 2% (वार्षिक सीमा ₹1,00,000 से अधिक)।',
                'धारा 194J (पेशेवर या तकनीकी फीस): वकीलों, सीए, सॉफ्टवेयर कंसल्टेंट्स को 10% या 2% (वार्षिक सीमा ₹30,000 से अधिक)।',
                'धारा 194I (किराया भुगतान): संयंत्र/मशीनरी पर 2%, भूमि/भवन पर 10% (वार्षिक सीमा ₹2,40,000 से अधिक)।'
              ]
            },
            {
              heading: '2. टैली में टीडीएस कॉन्फ़िगरेशन',
              content: 'सेटअप प्रक्रिया:',
              points: [
                'F11 Features में "Enable Tax Deducted at Source (TDS)" को Yes करें। TAN Registration No. और Deductor Type (Company/Individual) दर्ज करें।',
                'TDS Nature of Payment बनाना: Create > TDS Nature of Payment > नाम: "Fees for Professional Services 194J", Section: 194J, Rate: 10%, Threshold Limit: ₹30,000।'
              ]
            },
            {
              heading: '3. संबंधित लेजर्स का निर्माण',
              content: 'खर्च लेजर (Legal Fees - Is TDS Applicable: Applicable), पार्टी लेजर (CA Sharma & Associates - Deductee Type: Company, Deduct TDS in Same Voucher: Yes), और टैक्स लेजर (TDS on Professional Fees - Under Duties & Taxes > TDS)।'
            }
          ],
          examTip: 'टीडीएस की तीन मुख्य धाराएं (194C ठेकेदार, 194J प्रोफेशनल, 194I किराया) और उनकी सीमाएं जरूर लिखें।',
          keyTerms: ['Tax Deducted at Source', 'TAN 10-Digit Alpha-numeric', 'Section 194C, 194J, 194I', 'Threshold Limit', 'TDS Nature of Payment']
        }
      },
      {
        id: 'p7-u5-q2',
        number: 2,
        question: 'Recording TDS on Expenses & Payments, TDS Reports समझाइए।',
        topics: ['TDS Booking in Journal / Purchase', 'Auto TDS Deduction', 'Government TDS Payment (Stat Payment)', 'Form 26Q & Challan 281'],
        answer: {
          summary: 'खर्च बुक करते समय टैली पार्टी बिल में से टीडीएस स्वतः काटकर शुद्ध राशि का क्रेडिट देती है। सरकार को टीडीएस का भुगतान चालान 281 द्वारा किया जाता है और तिमाही रिटर्न फॉर्म 26Q में जाता है।',
          sections: [
            {
              heading: '1. खर्च पर टीडीएस की प्रविष्टि (TDS Entry in Journal - F7)',
              content: 'उदाहरण: सीए फर्म को ₹50,000 की कंसल्टेंसी फीस देय है जिस पर 10% TDS (194J) काटना है:',
              points: [
                'Debit: Professional Legal Fees ₹50,000.',
                'Credit: CA Sharma & Associates ₹45,000 (शुद्ध भुगतान योग्य राशि)।',
                'Credit: TDS on Professional Fees ₹5,000 (टैली द्वारा स्वतः काटा गया टैक्स)।'
              ]
            },
            {
              heading: '2. सरकार को टीडीएस भुगतान (Payment - F5)',
              content: 'प्रत्येक माह की 7 तारीख तक पिछले माह का काटा गया टीडीएस जमा करना अनिवार्य है। F5 Payment में "Autofill" (Ctrl + F) > "Stat Payment" चुनकर धारा 194J का चयन करने पर चालान 281 जनरेट होता है।'
            },
            {
              heading: '3. टीडीएस रिपोर्ट्स और फॉर्म 26Q',
              content: 'Display More Reports > Statutory Reports > TDS Reports > Form 26Q (गैर-वेतन टीडीएस का त्रैमासिक रिटर्न)। यहाँ से NSDL पोर्टल के लिए e-TDS टेक्स्ट फाइल बनाई जाती है।'
            }
          ],
          examTip: 'जर्नल में TDS ऑटो-कटौती की डेबिट/क्रेडिट प्रविष्टि (₹50,000 - ₹45,000 - ₹5,000) बनाकर दिखाएं।',
          keyTerms: ['F7 Journal TDS Booking', 'Stat Payment Ctrl+F Challan 281', '7th of Next Month Deadline', 'Form 26Q Non-salary Return', 'Form 16A Certificate']
        }
      },
      {
        id: 'p7-u5-q3',
        number: 3,
        question: 'MIS Reports: Balance Sheet, P&L, Ratio Analysis, Cash Flow & Fund Flow Statements समझाइए।',
        topics: ['Management Information System (MIS)', 'Balance Sheet Vertical vs Horizontal', 'P&L Monthly/Quarterly Comparison', 'Ratio Analysis Screen', 'Cash Flow / Fund Flow in Tally'],
        answer: {
          summary: 'एमआईएस (मैनेजमेंट इंफॉर्मेशन सिस्टम) रिपोर्ट्स वरिष्ठ प्रबंधन को रणनीतिक निर्णय लेने, लाभप्रदता की समीक्षा करने और वित्तीय नियंत्रण के लिए तात्कालिक विश्लेषणात्मक डेटा प्रदान करती हैं।',
          sections: [
            {
              heading: '1. आर्थिक चिट्ठा (Balance Sheet - B)',
              content: 'Gateway of Tally > Balance Sheet: F12 द्वारा वर्टिकल या हॉरिजॉन्टल फॉर्मेट, Alt + F1 (Detailed View) द्वारा प्रत्येक ग्रुप के अंदर के लेजर्स, और Alt + C द्वारा पिछले वित्तीय वर्ष के साथ तुलनात्मक कॉलम जोड़ना।'
            },
            {
              heading: '2. लाभ और हानि खाता (Profit & Loss A/c - P)',
              content: 'सकल लाभ, अप्रत्यक्ष खर्चे और शुद्ध लाभ का मासिक/तिमाही विवरण। F2 दबाकर किसी भी विशिष्ट अवधि का प्रदर्शन देखना।'
            },
            {
              heading: '3. अनुपात विश्लेषण स्क्रीन (Ratio Analysis - R)',
              content: 'टैली की एक ही सिंगल स्क्रीन जो सभी प्रमुख अनुपातों को एक साथ दिखाती है: Working Capital, Current Ratio, Quick Ratio, Debt-Equity Ratio, Gross Profit %, Net Profit %, Return on Investment (ROI), और Inventory Turnover।'
            },
            {
              heading: '4. कैश फ्लो और फंड फ्लो रिपोर्ट्स',
              content: 'Display > Cash Flow / Funds Flow: नकद प्रवाह के मासिक ग्राफ और शुद्ध कार्यशील पूंजी में वृद्धि/कमी का सटीक विवरण।'
            }
          ],
          examTip: 'Ratio Analysis स्क्रीन में एक साथ दिखने वाले 5 अनुपातों के नाम लिखें।',
          keyTerms: ['MIS Executive Reports', 'Balance Sheet Alt+F1 Detailed', 'Comparative Columns Alt+C', 'Single-Screen Ratio Analysis', 'Cash Flow Monthly Graph']
        }
      },
      {
        id: 'p7-u5-q4',
        number: 4,
        question: 'Management Reports & Export Options समझाइए।',
        topics: ['Outstanding Reports (Receivables & Payables)', 'Cash/Bank Summary', 'Exception Reports (Negative Stock/Ledgers)', 'Export Formats (PDF, Excel, JPEG, XML, HTML)'],
        answer: {
          summary: 'टैली बकाया देनदारियों और लेनदारियों की निगरानी के लिए आउटस्टैंडिंग रिपोर्ट्स देती है। रिपोर्ट्स को पीडीएफ, एक्सेल और एक्सएमएल में निर्यात कर ईमेल किया जा सकता है।',
          sections: [
            {
              heading: '1. बकाया रिपोर्ट्स (Outstanding Management)',
              content: 'तरलता और वसूली पर नियंत्रण:',
              points: [
                'Bills Receivable (Display > Statements of Accounts > Outstandings > Receivables): किन-किन ग्राहकों से कितना बिल का भुगतान बाकी है, कितने दिनों से पेंडिंग है (Overdue Days), और ब्याज गणना।',
                'Bills Payable: हमें सप्लायर्स को कब और कितना भुगतान करना है।'
              ]
            },
            {
              heading: '2. अपवाद रिपोर्ट्स (Exception Reports)',
              content: 'प्रबंधकीय त्रुटि पहचान:',
              points: [
                'Negative Stock: जिन आइटम्स का स्टॉक शून्य से नीचे चला गया हो।',
                'Negative Ledgers: जैसे कैश लेजर का क्रेडिट (माइनस) शेष दिखाना (जो असंभव है)।'
              ]
            },
            {
              heading: '3. एक्सपोर्ट और शेयरिंग विकल्प (Alt + E Export)',
              content: 'किसी भी रिपोर्ट को एक क्लिक में निर्यात करना: PDF (प्रिंट व शेयरिंग हेतु), Excel (गहन विश्लेषण व फॉर्मूले हेतु), XML (सॉफ्टवेयर एकीकरण), और Alt + M द्वारा सीधे आउटलुक से ईमेल भेजना।'
            }
          ],
          examTip: 'Bills Receivable में "Overdue Days" और Exception Reports में "Negative Stock" का उल्लेख करें।',
          keyTerms: ['Bills Receivable & Payable', 'Overdue Days Tracking', 'Negative Stock Exception', 'Alt+E Export PDF/Excel', 'Alt+M Direct Email']
        }
      },
      {
        id: 'p7-u5-q5',
        number: 5,
        question: 'Project Work: Full Accounting Cycle in Tally with GST & TDS, Real-world Business Scenario Simulation समझाइए।',
        topics: ['End-to-End Accounting Simulation', 'Company Setup to Final Audit', 'Capital Infusion -> Purchase -> Expense with TDS -> Sales with GST -> Tax Payment -> Final Accounts'],
        answer: {
          summary: 'एक वास्तविक व्यापारिक फर्म ("TechVision Infotech") के संपूर्ण वित्तीय वर्ष के लेखा चक्र का चरणबद्ध सिमुलेशन जिसमें जीएसटी, टीडीएस, पेरोल और अंतिम खातों का समायोजन शामिल है।',
          sections: [
            {
              heading: '1. प्रोजेक्ट परिदृश्य: TechVision Infotech Pvt. Ltd.',
              content: 'वित्तीय वर्ष 2026-27 के लिए सिमुलेशन चरण:',
              points: [
                'चरण 1 (कंपनी व पूंजी): कंपनी बनाई, GST व TDS सक्रिय किया। स्वामी ने ₹10,00,000 की पूंजी बैंक खाते में जमा की (F6 Receipt - Bank A/c Dr to Capital A/c)।',
                'चरण 2 (कार्यालय व संपत्तियां): ऑफिस फर्नीचर ₹1,00,000 खरीदा (F5 Payment)।',
                'चरण 3 (माल की खरीद + GST): दिल्ली के थोक व्यापारी से 20 कंप्यूटर ₹6,00,000 + 18% IGST (₹1,08,000) में खरीदे (F9 Purchase)।',
                'चरण 4 (खर्च + TDS): कार्यालय किराया ₹40,000 बुक किया जिस पर 10% TDS (₹4,000) काटा (F7 Journal)।',
                'चरण 5 (माल की स्थानीय बिक्री + GST): स्थानीय ग्राहकों को 15 कंप्यूटर ₹6,75,000 + 9% CGST (₹60,750) + 9% SGST (₹60,750) में बेचे (F8 Sales)।',
                'चरण 6 (टैक्स सेट-ऑफ व सरकारी भुगतान): आउटपुट जीएसटी से इनपुट क्रेडिट (ITC) घटाकर शेष कर तथा टीडीएस का सरकारी चालान द्वारा भुगतान किया (F5 Stat Payment)।',
                'चरण 7 (अंतिम ऑडिट): वर्ष के अंत में बैलेंस शीट और P&L का विश्लेषण किया - कुल शुद्ध लाभ प्राप्त हुआ और क्लोजिंग स्टॉक 5 कंप्यूटर (₹1,50,000) सत्यापित हुआ।'
              ]
            }
          ],
          examTip: 'इस प्रश्न में पूरे 7 चरणों का क्रमबद्ध केस-स्टडी उत्तर लिखें, यह परीक्षक को व्यावहारिक ज्ञान का पूर्ण प्रमाण देता है।',
          keyTerms: ['End-to-End Simulation', 'TechVision Case Study', 'Capital Infusion', 'Purchase with IGST', 'Rent with TDS 194I', 'Sales with CGST/SGST', 'Audit Balance Sheet']
        }
      }
    ]
  }
];
