import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import faqTitle from "./title-K0Q-KraV.js";
import faqSearch from "./search-X4LLKJ9V.js";
import faqContent from "./content-DyU6Vnks.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@vue/devtools-api";
import "cookie-es";
import "ohash";
import "consola";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./popup-CSIR8mSE.js";
import "./index-DcwL4Y5F.js";
import "./close-CUfcVM9H.js";
import "./isMobile-BdEqHLRM.js";
import "lodash-es";
const FAQ_DATA = {
  "en-us": {
    title: "FAQs",
    titleKey: "FAQs",
    modules: [
      {
        name: "Basic",
        qaList: [
          {
            question: "How to register?",
            answer: "Click the 'Sign Up' button at the top right corner of the MFT website (magicfuturetrading.com). Then, choose to sign up using either your email or phone number, complete the verification process, and set your password to finish the registration."
          },
          {
            question: "How to log in?",
            answer: "Click 'Log In' at the top right of the MFT website (magicfuturetrading.com). Choose email or phone login, enter your details and password, then click 'Log In' to access your account."
          },
          {
            question: "How to register for the Challenge?",
            answer: "Log in, click 'Challenge Now' in the top-left navigation bar, select your challenge stage, and complete the payment to register."
          },
          {
            question: "How to participate in the Challenge?",
            answer: "After successfully registering for the challenge, go to 'My Challenges' to retrieve your trading platform login account and password. Then, log in to the trading platform to begin the challenge."
          },
          {
            question: "How to view rewards?",
            answer: "After logging into your account, navigate to 'My Challenges' and complete the upgrade withdrawal process. You can then view the rewards for the corresponding challenge."
          },
          {
            question: "Can overnight positions be held?",
            answer: "Yes."
          },
          {
            question: "Can positions be held over the weekend?",
            answer: "Yes."
          }
        ]
      },
      {
        name: "Evaluation Process",
        qaList: [
          {
            question: "Why is Step 1 - The MFT Challenge required in the Evaluation Process?",
            answer: "The MFT Challenge is the first step in the Evaluation Process, designed to help you develop solid trading habits. You must achieve a 5% simulated profit on your initial capital while staying within the maximum drawdown limits. After purchasing the MFT Challenge, we will provide you with the trading platform and necessary tools to help you succeed as an MFT trader.\nOnce you meet all the challenge requirements (trading days, profit target, and clearing all positions), you will advance to the verification stage."
          },
          {
            question: "Why is Step 2 - The MFT Verification required in the Evaluation Process?",
            answer: "The Verification stage is the second and final phase of the Evaluation Process. The goal of this phase is to assess the consistency of your trading performance. You are required to achieve a 10% simulated profit on your initial capital while staying within the maximum drawdown limits. \nOnce you successfully meet all trading objectives (trading days, profit target, and clearing all positions) and pass the review, you will complete the MFT Certification and sign a contract to become an MFT trader."
          },
          {
            question: "How to Become an MFT Trader?",
            answer: "To become an MFT trader, you need to complete two steps: first, pass the MFT Challenge (Step 1), and then complete the MFT Verification (Step 2). \nOnce you successfully pass the evaluation and review process, you will receive MFT certification and sign a contract, officially becoming an MFT trader."
          },
          {
            question: "How long does it take to become an MFT trader?",
            answer: "To complete the MFT Evaluation Process and become an MFT trader, you must have at least 8 trading days of experience."
          },
          {
            question: "What is the maximum account size for my MFT account?",
            answer: "The maximum capital allocation is 2,000,000 USD, with an initial account size limit of 400,000 USD. You can increase the account size limit to 2,000,000 USD for free through the Fund Scaling Plan and Premium Program."
          }
        ]
      },
      {
        name: "MT5 Trading Platform",
        qaList: [
          {
            question: "How to Login to MT5?",
            answer: "After downloading and installing MT5, use your MFT Challenge credentials to log in. For step-by-step guidance, refer to the Beginner's Guide."
          },
          {
            question: "How to Start Trading?",
            answer: "After linking your MFT account with MT5, select the product you wish to trade and double-click with the left mouse button to start trading."
          },
          {
            question: "How to Place an Order?",
            answer: "Select the instrument you wish to trade, choose the trade direction, order type, and take profit and stop loss levels (optional). Finally, enter the trade volume and place the order."
          },
          {
            question: "How to Close Positions and Cancel Orders?",
            answer: "You can select an open position in the Trade tab, right-click to choose actions such as closing the position or performing a market order check."
          }
        ]
      },
      {
        name: "Trading Rules",
        qaList: [
          {
            question: "What does Hit Profit Target mean?",
            answer: "To pass your Challenge and proceed to the next phase, your Account Balance must reach the requested Profit Target and you must be flat on positions."
          },
          {
            question: "What does exceeding the Daily Drawdown mean?",
            answer: "The Daily Drawdown represents the maximum amount you can lose in a single day. Once you reach your daily drawdown limit, your account will be breached and automatically closed. We update your new Daily Drawdown limit on your dashboard every day at 16:00 CT, when the market closes."
          },
          {
            question: "What does exceeding the Maximum Drawdown mean?",
            answer: "The Maximum Drawdown represents the maximum amount you can lose across the lifetime of your account. If your equity drops below the Max Drawdown limit, your account will be closed automatically, and the challenge will fail."
          },
          {
            question: "What is an Effective Trading Day?",
            answer: "Only if you complete the specified number of opening and closing trades within a single day will that day be counted as a valid trading day. Such provisions are intended to ensure consistency in your risk management and trading strategies."
          },
          {
            question: "How many days of inactivity will result in a challenge failure?",
            answer: "If your account has no transaction records for 21 consecutive days, it will be considered inactive. According to the regulations, inactive accounts will be closed, and the challenge will fail."
          },
          {
            question: "What is the Consistency Rule?",
            answer: "Generally, the consistency rule refers to trading according to your own trading style, with similar levels of risk and position sizes."
          },
          {
            question: "Which instruments can I trade, and what strategies can I use?",
            answer: "Your trading style is entirely up to you. As long as your trades adhere to the relevant rules (such as proper risk management), are in line with current market conditions, and do not violate any prohibited activities, we will not impose any restrictions on your trading strategy, including discretionary and algorithmic trading. Please note that your trading approach should be capable of delivering the same results on a live account as it does with your MFT account."
          }
        ]
      },
      {
        name: "Fund Scaling Plan",
        qaList: [
          {
            question: "How can I participate in the Fund Scaling Plan?",
            answer: "Top-performing MFT traders who meet the relevant requirements will be eligible for the Fund Scaling Plan. For specific qualification conditions, please visit the Fund Scaling Plan page for more details: \nhttps://magicfuturetrading.com/challenges/fund."
          },
          {
            question: "What are the benefits of the Fund Scaling Plan?",
            answer: "The Fund Scaling Plan offers the following benefits: \n 1.Each free capital scaling is 25% of the current challenge account size, with a maximum cumulative increase of up to 100%.\n2.Total Capital Allocation up to $2,000,000."
          },
          {
            question: "How much capital can be added through the Fund Scaling Plan?",
            answer: "The Fund Scaling Plan offers up to $1,000,000 in additional capital."
          },
          {
            question: "Is the Fund Scaling Plan free of charge?",
            answer: "Yes. The Fund Scaling Plan allows traders to increase their account size for free."
          },
          {
            question: "Is the Premium Plan compatible with the Fund Scaling Plan?",
            answer: "Yes, it is compatible."
          }
        ]
      },
      {
        name: "Premium Plan",
        qaList: [
          {
            question: "How can I access the Exclusive Benefits?",
            answer: "You are eligible for Exclusive Benefits if you meet the following criteria:",
            lis: ["Maintain Level 3 for 4 consecutive months", "Achieve a total profit of no less than 10%", "Complete at least 4 payouts", "Maintain a profitable status"]
          },
          {
            question: "What do the Exclusive Benefits offer?",
            answer: "Exclusive Benefits include the following advantages:",
            lis: ["Receive a free challenge at the same level as your current challenge", "Profit-sharing reward increased to 90%", "Unlock the ability to directly purchase the $400,000 Legendary-level challenge", "Enjoy a 10% discount on all challenges", "5% additional transfer bonus (applies when transferring profits from your current challenge to another challenge)", "The challenge account size limit increases to $600,000", "You can combine it with another Level 3 challenge once"]
          },
          {
            question: "Is there a specific account size requirement to apply for the Exclusive Benefits?",
            answer: "No."
          },
          {
            question: "How can I access the Elite Benefits?",
            answer: "You are eligible for Elite Benefits if you meet the following criteria:",
            lis: ["Maintain Elite Benefits status for at least 3 months", "Achieve a total profit of no less than 12%", "Complete at least 3 payouts", "The initial challenge account balance must be greater than or equal to $400,000", "Maintain a profitable status"]
          },
          {
            question: "What do the Elite Benefits offer?",
            answer: "Elite Benefits include the following advantages:",
            lis: ["Challenge account balance limit increased to $1,000,000", "No maximum daily drawdown", "Fast payout", "Upon successful evaluation, you have the opportunity to join our MFT team"]
          },
          {
            question: "Can I combine four $100,000 MFT accounts into a single $400,000 MFT account to apply for the highest level?",
            answer: "No. The Initial Challenge Account Size must be no less than $400,000, which can be met by combining one challenge with an initial size of $200,000 and another challenge with an initial size of over $200,000."
          },
          {
            question: "Once I join the Premium Plan, can I keep it permanently?",
            answer: "No. In case of certain failures, your Premium Plan benefits will be revoked."
          },
          {
            question: "Under what circumstances can my Premium Plan benefits be canceled?",
            answer: "In certain cases, the benefits of the Premium Plan will be revoked, specifically under the following conditions:",
            ulList: [
              {
                txt: "The Exclusive Benefits will be revoked if any of the following conditions are met:",
                lis: ["The challenge associated with the benefits fails.", "During the Level 3 phase, failure occurs in any other 3 challenges.", "Violation of the contract terms."]
              },
              {
                txt: "The Elite Benefits will be revoked if any of the following conditions are met:",
                lis: ["Failure to complete the challenge while holding this benefit.", "The Elite Benefits associated with the challenge are revoked.", "Violation of the contract terms."]
              }
            ]
          }
        ]
      },
      {
        name: "Platforms",
        qaList: [
          {
            question: "Which platforms can I use for trading?",
            answer: " MFT supports trading on both the MT5 and MC Markets platforms. You can use either of these trading platforms."
          },
          {
            question: "What are the account sizes?",
            answer: "The account size varies depending on the challenge level. You can choose based on your situation, as follows:",
            lis: [
              "Proficient: Account size of $10,000",
              "Advanced: Account size of $50,000",
              "Expert: Account size of $100,000",
              "Master: Account size of $200,000"
            ]
          },
          {
            question: "Can I modify my challenge account?",
            answer: "No, you cannot."
          },
          {
            question: "Which devices are supported by the trading platforms?",
            answer: "MFT supports trading on both the MT5 and MC Markets platforms. The MT5 platform is compatible with various devices, including Android, iOS, Windows, and Mac. The MC Markets platform offers a web-based trading platform that requires no download, as well as mobile apps (Android/iOS) and H5 support."
          },
          {
            question: "What are the advantages of the MT5 trading platform?",
            answer: "The MT5 trading platform offers the following advantages:",
            lis: [
              "Comprehensive market analysis tools",
              "Multi-asset trading",
              "Flexible order types",
              "Advanced algorithmic trading",
              "Multi-timezone support",
              "Multi-language support",
              "Cross-platform compatibility",
              "One-click trading",
              "Fully customizable charts"
            ]
          },
          {
            question: "What are the advantages of the MC Markets trading platform?",
            answer: " The MC Markets trading platform offers the following advantages:",
            lis: [
              "Multi-analysis Tools",
              "Integrated with the MT5 Trading Platform",
              "Fast and Efficient Execution",
              "Custom Trading Workspace",
              "Secure and Easy Deposits/Withdrawals",
              "Market Alerts",
              "Wide Range of Trading Instruments",
              "Powerful Market Depth System",
              "User-friendly Trading Page Layout",
              "Cross-Platform Compatibility"
            ]
          },
          {
            question: "Does the platform offer demo or live accounts?",
            answer: " MFT is not a financial institution and does not provide or endorse any financial products or services. All trading accounts are provided by the third-party trading platform. All trading activities occur within a simulated environment."
          }
        ]
      },
      {
        name: "Trading Activity Restrictions",
        qaList: [
          {
            question: "Can system errors be exploited?",
            answer: "No. Trading strategies that intentionally or unintentionally exploit errors in the system (such as incorrect price displays or delayed updates) are considered prohibited trading practices."
          },
          {
            question: "Can trading be manipulated?",
            answer: "No. Manipulating trades, whether individually or in collaboration with others (including across different accounts or accounts held by different entities), such as taking opposite positions simultaneously with the intent to manipulate the market, is considered a prohibited trading practice."
          },
          {
            question: "Is News Trading allowed?",
            answer: "No. Engaging in News Trading, such as opening new positions within 15 minutes before or after major global news, macroeconomic events, corporate reports, or earnings releases, is prohibited."
          },
          {
            question: "Is High-Frequency Trading allowed?",
            answer: "No. Executing High-Frequency Trading strategies, especially trades that last only a few seconds or less, is considered a prohibited trading practice."
          },
          {
            question: "Is using a trading robot allowed?",
            answer: "No. Using trading robots (EAs), especially those from third parties, such as signal-copying trades, short-term scalping, delayed arbitrage, reverse arbitrage, or hedging arbitrage trades, is considered a prohibited trading practice."
          },
          {
            question: "Is Arbitrage Trading Allowed?",
            answer: "No. Engaging in arbitrage trading by exploiting price discrepancies is considered a prohibited trading practice."
          },
          {
            question: "Is Trading on Behalf of Others Allowed?",
            answer: "No. MFT does not permit access to or trading on behalf of others, whether as a professional or in any other capacity. "
          }
        ]
      }
    ]
  },
  "zh-hk": {
    title: "常見問題",
    titleKey: "問題",
    modules: [
      {
        name: "入門",
        qaList: [
          {
            question: "如何註冊？",
            answer: "請點擊MFT網站（magicfuturetrading.com）頁面右上角的“註冊”按鈕，而後選擇運用郵箱註冊或者手機號註冊，並完成驗證，設置密碼即可完成註冊。"
          },
          {
            question: "如何登錄？",
            answer: "請點擊MFT網站（magicfuturetrading.com）頁面右上角的“登錄”按鈕，並選擇郵箱或手機號登錄，填寫信息及輸入密碼後即可登錄。"
          },
          {
            question: "如何報名挑戰？",
            answer: "登錄後，左上角導航欄選擇立即挑戰，而後根據您自身情況選擇適宜的挑戰階段，支付費用即報名成功。"
          },
          {
            question: "如何進行挑戰？",
            answer: "成功報名挑戰後，您可以在我的挑戰獲取交易平台的登錄賬戶、密碼，而後前往交易平台登錄即可進行挑戰。"
          },
          {
            question: "如何查看獎勵？",
            answer: "登錄賬戶後，您對“我的挑戰”進行升級提現後，您可以查看到對應挑戰的獎勵情況。"
          },
          {
            question: "是否可以隔夜持倉？",
            answer: "可以"
          },
          {
            question: "周末是否可以持倉？",
            answer: "可以"
          }
        ]
      },
      {
        name: "評估流程",
        qaList: [
          {
            question: "評估流程為何需要進行Step1-MFT挑戰？",
            answer: "MFT挑戰是評估流程的第一步，旨在引導您養成良好的交易習慣。您需要在遵守最大虧損規則的前提下，實現初始資金的5%模擬收益。購買MFT挑戰後，我們將提供交易的平台和各種服務，助您成為頂尖MFT交易員。\n一旦您達到了MFT挑戰的所有交易目標（交易天數、利潤目標、清空所有的倉位），便可進入下一階段的驗證環節。"
          },
          {
            question: "評估流程為何需要進行Step2-MFT驗證？",
            answer: "驗證環節是評估流程的第二階段，也是最終階段。此階段的目標在於檢驗您交易的穩定性。您需要在遵守最大虧損規則的前提下，實現初始資金的10%模擬收益。\n一旦您順利完成所有交易目標（交易天數、利潤目標、清空所有的倉位）並通過審核，您將完成MFT認證並簽訂合約成為MFT交易員。"
          },
          {
            question: "如何成為 MFT 交易員？",
            answer: "要成為 MFT 交易員，您需要分兩步：首先通過MFT挑戰（Step1），然後完成MFT驗證（Step2）。\n在您成功通過評估驗證並經過審核後，您將獲得MFT認證並簽署合約，正式成為MFT交易員。"
          },
          {
            question: "成為 MFT 交易員需要多長時間？",
            answer: "完成 MFT評估流程成為MFT交易員，至少需要8個交易日的交易經歷。"
          },
          {
            question: "我的 MFT 賬戶規模最大是多少？",
            answer: "最大的賬戶規模是2,000,000 USD，初始賬戶規模上限是400,000 USD。您可以通過資金擴展計劃和高級計劃免費把賬戶規模上限提升到2,000,000 USD。"
          }
        ]
      },
      {
        name: "MT5交易平台",
        qaList: [
          {
            question: "在MT5客戶端如何登錄？",
            answer: "下載安裝好MF5之後，您可以用您MFT Challenge中的賬號密碼登錄。詳細步驟，請前往新手指南了解。"
          },
          {
            question: "如何開始交易？",
            answer: "完成MFT與MT5關聯後，選擇您需要購買的產品，鼠標左鍵雙擊即可開始交易。"
          },
          {
            question: "如何下單？",
            answer: "選擇您想要交易的產品，選擇交易方向、訂單類型，以及止盈止損（可選項），最後輸入交易的數量執行交易。"
          },
          {
            question: "如何平倉和撤單？",
            answer: "您可以在Trade欄選擇持倉訂單，右鍵選擇平倉或者測單等操作。"
          }
        ]
      },
      {
        name: "交易規則",
        qaList: [
          {
            question: "什麼是達到利潤目標？",
            answer: "要通過賬戶並進入下一階段/級別，您的賬戶餘額必須達到要求的利潤目標，並且您的倉位必須持平。"
          },
          {
            question: "什麼是達到每日回撤？",
            answer: "每日回撤表示您每天可以損失的最大金額。一旦您達到每日回撤限額，您的賬戶將被違反並自動關閉。我們會在每天 16:00CT市場收盤時在您的儀錶板上更新您新的每日回撤限額。"
          },
          {
            question: "什麼是達到最大回撤？",
            answer: "最大回撤代表在賬戶整個生命周期內，您可能會損失的最大金額。如果您的淨值跌破最大回撤限額，您的賬戶將被自動關閉，意味著挑戰失敗。"
          },
          {
            question: "什麼是有效挑戰天數？",
            answer: "只有在一天內完成指定次數的開倉和平倉操作，該天才會被計算為有效的挑戰天數。這樣的規定旨在確保您的風險管理和交易策略的一致性。"
          },
          {
            question: "多少天不交易會導致挑戰失敗？",
            answer: "如果您的賬戶連續21天無任何交易記錄，將被視為非活躍賬戶。根據規定，非活躍賬戶將被關閉，並導致挑戰失敗。"
          },
          {
            question: "什麼是一致性原則？",
            answer: "一般來說，一致性規則是指您應根據自己的交易風格進行交易，風險和手數相近。"
          },
          {
            question: "我可以交易哪些工具，使用哪些策略？",
            answer: "您的交易風格取決於您自己。只要您的交易合乎相關規則（遵循適當的風險管理）、符合實際市場狀況且不違反禁止行為，我們不會限制或約束您的交易策略，包括自由交易、算法交易等。請注意，在交易過程中，您的交易風格應能在真實賬戶上實現，以產生與您的MFT賬戶相同的結果。"
          }
        ]
      },
      {
        name: "資金擴展計劃",
        qaList: [
          {
            question: "如何才能享受資金擴展計劃？",
            answer: "表現優異的 MFT 交易員，若符合相關要求將享受資金擴展計劃。具體資金擴展所需滿足條件，請前往資金擴展計劃頁面詳細了解：\nhttps://magicfuturetrading.com/zh-hk/challenges/fund"
          },
          {
            question: "資金擴展計劃有什麼好處？",
            answer: "資金擴展計劃可享受以下權益：\n1、每次免費擴充資金為當前挑戰賬戶規模的 25%，最高可累計至 100%。\n2、賬戶總規模上限可達 200 萬美元。"
          },
          {
            question: "資金擴展計劃最多可以增加多少資金？",
            answer: "資金擴展計劃最多可以增加100萬美元資金。"
          },
          {
            question: "資金擴展計劃是免費的嗎？",
            answer: "是的。資金擴展計劃可以幫助交易員免費提升賬戶規模。"
          },
          {
            question: "高級計劃與擴展計劃兼容嗎？",
            answer: "是的，兼容。"
          }
        ]
      },
      {
        name: "高級計劃",
        qaList: [
          {
            question: "如何才能享受優享權益？",
            answer: "滿足以下條件可以享受優享權益：",
            lis: ["連續4個月保持Level 3", "不少於16%的總利潤", "至少4次出金", "盈利狀態"]
          },
          {
            question: "優享權益有哪些好處？",
            answer: "優享權益有以下好處：",
            lis: ["免費贈送一個與當前挑戰等級相同的挑戰", "分潤獎勵提升至90%", "解鎖直接 購買 40 萬規模(傳奇級)的挑戰等級權限", "9折購買所有的挑戰", "5%的額外轉移獎勵（當轉移當前挑戰的利潤到其他挑戰時可以享受）", "挑戰賬戶規模上限提升至60萬", "可以合併一次其他的Level3挑戰"]
          },
          {
            question: "申请優享權益是否有特定的账户规模要求？",
            answer: "沒有。"
          },
          {
            question: "如何才能享受卓越權益？",
            answer: "滿足以下條件可享受卓越權益：",
            lis: ["享受優享權益狀態至少3個月", "不少於12%的總利潤", "至少3次出金", "初始挑戰賬戶規模需要大於等於40萬", "盈利狀態"]
          },
          {
            question: "卓越權益有哪些好處？",
            answer: "卓越權益有以下好處：",
            lis: ["挑戰賬戶規模上限提升至100萬", "取消最大日回撤", "快速出金", "通過評估後有機會加入我們的 MFT 團隊"]
          },
          {
            question: "我可以將四個10萬美元 MFT賬戶合併為一個 40萬美元 MFT賬戶來申請最高級別嗎？",
            answer: "不可以。初始挑戰賬戶規模需不低於 40 萬美元，可通過合併一個初始規模為 20 萬美元的挑戰及另一個初始規模超過 20 萬美元的挑戰來滿足條件。"
          },
          {
            question: "一旦我加入高級計劃，我可以永久保留它嗎？",
            answer: "不可以。在一些失敗的情況下，您的高級計劃權益將被取消。"
          },
          {
            question: "什麼情況下會讓我的高級計劃的權益被取消？",
            answer: "在一些情況下，高級計劃的權益將被取消，具體為：",
            ulList: [
              {
                txt: "優享權益，只要滿足以下其一情況，則權益將被取消：",
                lis: ["享受該權益的挑戰失敗", "在維持Level 3階段中，失敗了其他3個挑戰。", "違反了合同要求。"]
              },
              {
                txt: "卓越權益，只要滿足以下其一情況，則權益將被取消：",
                lis: ["享受該權益的挑戰失敗。", "該挑戰的的卓越權益被取消。", "違反了合同要求。"]
              }
            ]
          }
        ]
      },
      {
        name: "平台",
        qaList: [
          {
            question: "我可以使用哪些平台進行交易？",
            answer: "MFT支持在MT5和MC Markets平台上交易,這兩個交易平台您都可以使用。"
          },
          {
            question: "賬戶規模是怎樣的？",
            answer: "挑戰等級不同，賬戶規模不同，您可以根據自身情況進行選擇，具體為：",
            lis: [
              "熟練：賬戶規模 $10,000",
              "精通：賬戶規模 $50,000",
              "專家：賬戶規模  $100,000",
              "大師：賬戶規模  $200,000"
            ]
          },
          {
            question: "我可以修改我挑戰帳戶嗎？",
            answer: "不可以。"
          },
          {
            question: "交易平台支持哪些設備？",
            answer: "MFT支持在MT5和MC Markets平台上交易，其中MT5交易平台支持Android、iOS、Windows、Mac等不同的設備；MC Markets交易平台支持無需下載的Web交易平台、也支持APP（Android /iOS）,H5等。"
          },
          {
            question: "MT5交易平台有哪些優勢？",
            answer: "MT5交易平台擁有以下優勢：全面的市場分析工具、多產品交易、靈活的訂單類型、高級算法交易、多時區支持、多語言支持、跨平台兼容、一鍵交易功能、完全可定製圖表。"
          },
          {
            question: "MC Markets交易平台有哪些優勢？",
            answer: "MC Markets交易平台擁有以下優勢：多元分析工具輔助、集成MT5 交易平台、訂單執行迅速高效、個性化工作區定製、出入金便捷安全、市場提醒警報、全面豐富的交易品種、強大的市場深度系統、友好的交易頁面布局、跨平台兼容。"
          },
          {
            question: "平台提供模擬賬戶還是真實賬戶？",
            answer: "MFT不是金融機構，不提供或認可任何金融產品或服務，所有交易賬戶均由第三方交易平台提供。所有交易活動都是在模擬環境中進行的。"
          }
        ]
      },
      {
        name: "交易行為限制",
        qaList: [
          {
            question: "是否可以利用系統錯誤？",
            answer: "不可以。故意或無意地利用服務中的錯誤（如價格顯示錯誤或更新延遲）進行交易的策略是屬於被禁止的交易行為。"
          },
          {
            question: "是否可以操縱交易？",
            answer: "不可以。操縱交易，單獨或與他人協作（包括在不同賬戶或與不同實體持有的賬戶之間）進行旨在操縱交易的交易或交易組合，例如同時採取相反頭寸，屬於被禁止的交易行為。"
          },
          {
            question: "是否可以進行新聞交易？",
            answer: "不可以。禁止在重大全球新聞、宏觀經濟事件、公司報告或收益發布前後15分鐘內進行開倉交易。"
          },
          {
            question: "是否可以高頻交易？",
            answer: "不可以。執行高頻交易策略，特別是持續幾秒鐘或更短時間的交易，屬於被禁止的交易行為。"
          },
          {
            question: "是否可以使用交易機器人？",
            answer: "不可以。使用交易機器人（EA），特別是來自第三方的EA，如複製信號交易、進行短期割頭交易、延遲套利交易、反向套利交易、對沖套利交易，屬於被禁止的交易行為。"
          },
          {
            question: "是否可以套利交易？",
            answer: "不可以。利用價格差異進行套利交易，屬於被禁止的交易行為。"
          },
          {
            question: "是否可以代表他人交易？",
            answer: " 不可以。MFT不允許訪問或代表他人進行交易或賬戶管理，無論是作為專業人士還是其他身份。"
          }
        ]
      }
    ]
  },
  "id-idn": {
    title: "FAQs",
    titleKey: "FAQs",
    modules: [
      {
        name: "Dasar",
        qaList: [
          {
            question: "Bagaimana cara mendaftar?",
            answer: "Klik tombol “Daftar” di sudut kanan atas situs web MFT (magicfuturetrading.com). Kemudian, pilih untuk mendaftar menggunakan email atau nomor telepon Anda, selesaikan proses verifikasi, dan atur kata sandi Anda untuk menyelesaikan pendaftaran."
          },
          {
            question: "Bagaimana cara masuk?",
            answer: "Klik “Masuk” di bagian kanan atas situs web MFT (magicfuturetrading.com). Pilih login email atau telepon, masukkan informasi dan kata sandi Anda, lalu klik “Masuk” untuk mengakses akun Anda."
          },
          {
            question: "Bagaimana cara mendaftar untuk mengikuti Tantangan?",
            answer: "Login, klik “Challenge Now” di bilah navigasi kiri atas, pilih tahap tantangan Anda, dan selesaikan pembayaran untuk mendaftar."
          },
          {
            question: "Bagaimana cara berpartisipasi dalam Tantangan?",
            answer: "Setelah berhasil mendaftar tantangan, buka “Tantangan Saya” untuk mendapatkan akun dan kata sandi login platform trading Anda. Kemudian, masuk ke platform trading untuk memulai tantangan."
          },
          {
            question: "Bagaimana cara melihat hadiah?",
            answer: "Setelah masuk ke akun Anda, buka “Tantangan Saya” dan selesaikan proses penarikan upgrade. Anda bisa melihat hadiah untuk tantangan yang sesuai."
          },
          {
            question: "Apakah posisi menginap dapat ditahan?",
            answer: "Ya."
          },
          {
            question: "Apakah posisi dapat ditahan selama akhir pekan?",
            answer: "Ya."
          }
        ]
      },
      {
        name: "Proses Evaluasi",
        qaList: [
          {
            question: "Mengapa Langkah 1 - Tantangan MFT diperlukan dalam Proses Evaluasi?",
            answer: "Tantangan MFT adalah langkah pertama dalam Proses Evaluasi, yang dirancang untuk membantu Anda mengembangkan kebiasaan trading yang solid. Anda harus mencapai keuntungan simulasi 5% dari modal awal Anda sambil tetap berada dalam batas penurunan maksimum. Setelah membeli Tantangan MFT, kami akan memberikan platform trading dan alat yang diperlukan untuk membantu Anda sukses sebagai trader MFT. \nSetelah Anda memenuhi semua persyaratan tantangan (hari trading, target keuntungan, dan menyelesaikan semua posisi), Anda akan melanjutkan ke tahap verifikasi."
          },
          {
            question: "Mengapa Langkah 2 - Verifikasi MFT diperlukan dalam Proses Evaluasi?",
            answer: "Tahap Verifikasi adalah fase kedua dan terakhir dalam Proses Evaluasi. Tujuan dari fase ini adalah untuk menilai konsistensi kinerja trading Anda. Anda diwajibkan untuk mencapai keuntungan simulasi 10% dari modal awal Anda sambil tetap berada dalam batas penurunan maksimum. \nSetelah Anda berhasil memenuhi semua tujuan trading (hari trading, target keuntungan, dan menyelesaikan semua posisi) dan lolos review, Anda akan menyelesaikan Sertifikasi MFT dan menandatangani kontrak untuk menjadi trader MFT."
          },
          {
            question: "Bagaimana Menjadi Trader MFT?",
            answer: "Untuk menjadi trader MFT, Anda perlu menyelesaikan dua langkah: pertama, lulus Tantangan MFT (Langkah 1), dan kemudian menyelesaikan Verifikasi MFT (Langkah 2). \nSetelah Anda berhasil melewati proses evaluasi dan review, Anda akan menerima sertifikasi MFT dan tanda tangan kontrak, dan secara resmi menjadi trader MFT."
          },
          {
            question: "Berapa lama waktu yang dibutuhkan untuk menjadi trader MFT?",
            answer: "Untuk menyelesaikan Proses Evaluasi MFT dan menjadi trader MFT, Anda harus memiliki pengalaman trading setidaknya 8 hari trading."
          },
          {
            question: "Apa ukuran akun maksimum untuk akun MFT saya?",
            answer: "Alokasi modal maksimum adalah 2.000.000 USD, dengan batas ukuran akun awal sebesar 400.000 USD. Anda dapat meningkatkan batas ukuran akun hingga 2.000.000 USD secara gratis melalui Rencana Penskalaan Dana dan Program Premium."
          }
        ]
      },
      {
        name: "Platform Trading MT5",
        qaList: [
          {
            question: "Bagaimana Cara Masuk ke MT5?",
            answer: "Setelah mengunduh dan menginstal MT5, gunakan kredensial Tantangan MFT Anda untuk masuk. Untuk panduan langkah demi langkah, lihat Panduan Pemula."
          },
          {
            question: "Bagaimana Cara Memulai Trading?",
            answer: "Setelah menghubungkan akun MFT Anda dengan MT5, pilih produk yang ingin Anda perdagangkan dan klik dua kali dengan tombol kiri mouse untuk memulai trading."
          },
          {
            question: "Bagaimana Cara Memasang Order?",
            answer: "Pilih instrumen yang ingin Anda Trading, pilih arah trading, jenis order, serta level take profit dan stop loss (opsional). Terakhir, masukkan volume trading dan pasang order."
          },
          {
            question: "Bagaimana Cara Menutup Posisi dan Membatalkan Order?",
            answer: "Anda dapat memilih posisi terbuka di tab Trade, klik kanan untuk memilih tindakan seperti menutup posisi atau memeriksa order pasar."
          }
        ]
      },
      {
        name: "Peraturan Trading",
        qaList: [
          {
            question: "Apa Arti Mencapai Target Keuntungan?",
            answer: "Untuk melewati Tantangan Anda dan melanjutkan ke fase berikutnya, Saldo Akun Anda harus mencapai Target Keuntungan yang diminta dan Anda harus tidak memiliki posisi terbuka."
          },
          {
            question: "Apa Arti Melebihi Daily Drawdown?",
            answer: "Daily Drawdown merupakan jumlah maksimum yang dapat Anda rugi dalam satu hari. Setelah mencapai batas Daily Drawdown, akun Anda akan melewati batas dan akan secara otomatis ditutup. Kami memperbarui batas Daily Drawdown baru Anda di dasbor setiap hari pada pukul 16:00 CT, ketika pasar tutup."
          },
          {
            question: "Apa Arti Melebihi Maximum Drawdown?",
            answer: "Maximum Drawdown adalah jumlah maksimum yang dapat Anda rugi sepanjang hidup akun Anda. Jika ekuitas (Equity) Anda turun di bawah batas Maximum Drawdown, akun Anda akan ditutup secara otomatis, dan tantangan akan gagal."
          },
          {
            question: "Apa Itu Hari Trading yang Efektif?",
            answer: "Hanya jika Anda menyelesaikan jumlah perdagangan Beli dan Jual yang ditentukan dalam satu hari, hari tersebut akan dihitung sebagai hari trading yang sah. Ketentuan ini bertujuan untuk memastikan konsistensi dalam manajemen risiko dan strategi trading Anda."
          },
          {
            question: "Berapa Banyak Hari Ketidakaktifan yang Akan Mengakibatkan Gagalnya Tantangan?",
            answer: "Jika akun Anda tidak memiliki catatan transaksi selama 21 hari berturut-turut, itu akan dianggap tidak aktif. Sesuai dengan peraturan, akun yang tidak aktif akan ditutup, dan akan dihitung gagal."
          },
          {
            question: "Apa Itu Aturan Konsistensi?",
            answer: "Secara umum, aturan konsistensi mengacu pada trading sesuai dengan gaya trading Anda sendiri, dengan tingkat risiko dan ukuran posisi yang serupa."
          },
          {
            question: "Instrumen Apa yang Bisa Saya gunakan untuk Trading, dan Strategi Apa yang Bisa Saya unakan",
            answer: "Gaya trading Anda sepenuhnya terserah Anda. Selama perdagangan Anda mengikuti aturan yang relevan (seperti manajemen risiko yang tepat), sesuai dengan kondisi pasar saat ini, dan tidak melanggar aktivitas terlarang, kami tidak akan membatasi strategi trading Anda, termasuk trading diskresioner dan algoritmik. Harap dicatat bahwa pendekatan trading Anda harus mampu memberikan hasil yang sama pada akun live seperti yang dilakukan dengan akun MFT Anda."
          }
        ]
      },
      {
        name: "Rencana Pengembangan Dana",
        qaList: [
          {
            question: "Bagaimana cara saya berpartisipasi dalam Rencana Pengembangan Dana？",
            answer: "Trader MFT dengan kinerja terbaik yang memenuhi persyaratan yang relevan akan memenuhi syarat untuk mengikuti Rencana Pengembangan Dana. Untuk syarat kualifikasi spesifik, kunjungi halaman Rencana Pengembangan Dana untuk detail lebih lanjut: \nhttps://magicfuturetrading.com/challenges/fund."
          },
          {
            question: "Apa manfaat dari Rencana Pengembangan Dana?",
            answer: "Rencana Pengembangan Dana menawarkan manfaat berikut:\n1.Setiap peningkatan modal gratis adalah 25% dari ukuran akun tantangan saat ini, dengan peningkatan kumulatif maksimal hingga 100%.\n2.Total alokasi modal hingga $2,000,000."
          },
          {
            question: "Berapa banyak modal yang dapat ditambahkan melalui Rencana Pengembangan Dana?",
            answer: "Rencana Pengembangan Dana menawarkan hingga $1,000,000 modal tambahan."
          },
          {
            question: "Apakah Rencana Pengembangan Dana dikenakan biaya?",
            answer: "Tidak. Rencana Pengembangan Dana memungkinkan trader untuk meningkatkan ukuran akun mereka secara gratis."
          },
          {
            question: "Apakah Rencana Premium kompatibel dengan Rencana Pengembangan Dana?",
            answer: "Ya, program tersebut kompatibel"
          }
        ]
      },
      {
        name: "Paket Premium",
        qaList: [
          {
            question: "Bagaimana cara saya mengakses Manfaat Eksklusif?",
            answer: "Anda berhak mendapatkan Manfaat Eksklusif jika Anda memenuhi kriteria berikut:",
            lis: ["Mempertahankan Level 3 selama 4 bulan berturut-turut", "Mencapai total keuntungan tidak kurang dari 10%", "Menyelesaikan setidaknya 4 pembayaran", "Mempertahankan status menguntungkan"]
          },
          {
            question: "Apa manfaat yang ditawarkan oleh Manfaat Eksklusif?",
            answer: "Manfaat Eksklusif mencakup keuntungan berikut:",
            lis: ["Menerima tantangan gratis pada level yang sama dengan tantangan Anda saat ini", "Hadiah pendapatan profit dibagi menjadi 90%", "Membuka kemampuan untuk langsung membeli tantangan Legendary-level senilai $400,000", "Nikmati diskon 10% untuk semua tantangan", "Bonus transfer tambahan 5% (berlaku saat mentransfer keuntungan dari tantangan Anda saat ini ke tantangan lainnya)", "Batas ukuran akun tantangan meningkat menjadi $600,000", "Anda dapat menggabungkannya dengan tantangan Level 3 lainnya sekali"]
          },
          {
            question: "Apakah ada persyaratan ukuran akun khusus untuk mengajukan Manfaat Eksklusif?",
            answer: "Tidak."
          },
          {
            question: "Bagaimana cara saya mengakses Manfaat Elite?",
            answer: "Anda berhak mendapatkan Manfaat Elite jika Anda memenuhi kriteria berikut:",
            lis: ["Mempertahankan status Manfaat Elite selama minimal 3 bulan", "Mencapai total keuntungan tidak kurang dari 12%", "Menyelesaikan setidaknya 3 pembayaran", "Saldo akun tantangan awal harus lebih besar dari atau sama dengan $400,000", "Mempertahankan status menguntungkan"]
          },
          {
            question: "Apa manfaat yang ditawarkan oleh Manfaat Elite?",
            answer: "Manfaat Elite mencakup keuntungan berikut:",
            lis: ["Batas saldo akun tantangan meningkat menjadi $1,000,000", "Tidak ada batas penurunan harian maksimum", "Pembayaran cepat", "Setelah evaluasi berhasil, Anda memiliki kesempatan untuk bergabung dengan tim MFT kami"]
          },
          {
            question: "Bisakah saya menggabungkan empat akun MFT $100,000 menjadi satu akun MFT $400,000 untuk mengajukan level tertinggi?",
            answer: "Tidak. Ukuran Akun Tantangan Awal harus tidak kurang dari $400,000, yang dapat dipenuhi dengan menggabungkan satu tantangan dengan ukuran awal $200,000 dan tantangan lainnya dengan ukuran awal lebih dari $200,000."
          },
          {
            question: "Setelah saya bergabung dengan Rencana Premium, apakah saya bisa mempertahankannya secara permanen?",
            answer: "Tidak. Jika terjadi kegagalan tertentu, manfaat Rencana Premium Anda akan dicabut."
          },
          {
            question: "Dalam keadaan apa manfaat Rencana Premium saya dapat dibatalkan?",
            answer: "Dalam beberapa kasus, manfaat Rencana Premium akan dicabut, khususnya dalam kondisi berikut:",
            ulList: [
              {
                txt: "Manfaat Eksklusif akan dicabut jika salah satu dari kondisi berikut terpenuhi:",
                lis: ["Tantangan yang terkait dengan manfaat tersebut gagal.", "Selama fase Level 3, terjadi kegagalan pada 3 tantangan lainnya.", "Pelanggaran terhadap ketentuan kontrak."]
              },
              {
                txt: "Manfaat Elite akan dicabut jika salah satu dari kondisi berikut terpenuhi:",
                lis: ["Gagal menyelesaikan tantangan saat mendapatkan manfaat ini.", "Manfaat Elite yang terkait dengan tantangan tersebut dicabut.", "Pelanggaran terhadap ketentuan kontrak."]
              }
            ]
          }
        ]
      },
      {
        name: "Platform",
        qaList: [
          {
            question: "Platform apa saja yang dapat saya gunakan untuk trading?",
            answer: "MFT mendukung trading di platform MT5 dan MC Markets. Anda dapat menggunakan salah satu dari kedua platform ini."
          },
          {
            question: "Berapa ukuran akun yang tersedia?",
            answer: "Ukuran akun bervariasi tergantung pada tingkat tantangan yang Anda pilih. Berikut adalah pilihannya:",
            lis: [
              "Proficient: Ukuran akun $10,000",
              "Advanced: Ukuran akun $50,000",
              "Expert: Ukuran akun $100,000",
              "Master: Ukuran akun $200,000"
            ]
          },
          {
            question: "Bisakah saya mengubah akun tantangan saya?",
            answer: "Tidak, akun tantangan Anda tidak dapat diubah."
          },
          {
            question: "Perangkat apa saja yang didukung oleh platform trading?",
            answer: "MFT mendukung trading di platform MT5 dan MC Markets. Platform MT5 kompatibel dengan berbagai perangkat, termasuk Android, iOS, Windows, dan Mac. Platform MC Markets menyediakan platform trading berbasis web yang tidak memerlukan unduhan, serta aplikasi mobile (Android/iOS) dan dukungan H5."
          },
          {
            question: "Apa saja keunggulan platform trading MT5?",
            answer: "Platform trading MT5 menawarkan keunggulan berikut:",
            lis: [
              "Alat analisis pasar yang lengkap",
              "Trading multi-aset",
              "Jenis order yang fleksibel",
              "Trading algoritmik tingkat lanjut",
              "Dukungan multi-zona waktu",
              "Dukungan multi-bahasa",
              "Kompatibilitas lintas platform",
              "Trading satu klik",
              "Grafik yang sepenuhnya dapat disesuaikan"
            ]
          },
          {
            question: "Apa saja keunggulan platform trading MC Markets?",
            answer: "Platform trading MC Markets menawarkan keunggulan berikut:",
            lis: [
              "Alat analisis multi-aspek",
              "Terintegrasi dengan platform trading MT5",
              "Eksekusi yang cepat dan efisien",
              "Ruang kerja trading yang dapat disesuaikan",
              "Proses deposit/penarikan yang aman dan mudah",
              "Pemberitahuan pasar",
              "Beragam instrumen trading",
              "Sistem kedalaman pasar yang kuat",
              "Tata letak halaman trading yang ramah pengguna",
              "Kompatibilitas lintas platform"
            ]
          },
          {
            question: "Apakah platform menyediakan akun demo atau akun live?",
            answer: "MFT bukanlah institusi keuangan dan tidak menyediakan atau mendukung produk atau layanan keuangan apa pun. Semua akun trading disediakan oleh platform trading pihak ketiga. Seluruh aktivitas trading dilakukan dalam lingkungan simulasi."
          }
        ]
      },
      {
        name: "Pembatasan Aktivitas Trading",
        qaList: [
          {
            question: "Apakah kesalahan sistem dapat dieksploitasi?",
            answer: "Tidak. Strategi trading yang dengan sengaja atau tidak sengaja mengeksploitasi kesalahan dalam sistem (seperti kesalahan tampilan harga atau pembaruan yang tertunda) dianggap sebagai praktik trading yang dilarang."
          },
          {
            question: "Apakah manipulasi trading diperbolehkan?",
            answer: "Tidak. Memanipulasi trading, baik secara individu maupun bekerja sama dengan orang lain (termasuk melalui beberapa akun atau akun yang dimiliki oleh entitas berbeda), seperti mengambil posisi berlawanan secara bersamaan dengan tujuan untuk memanipulasi pasar, dianggap sebagai praktik trading yang dilarang."
          },
          {
            question: "Apakah News Trading diperbolehkan?",
            answer: "Tidak. Melakukan News Trading, seperti membuka posisi baru dalam waktu 15 menit sebelum atau setelah berita global utama, peristiwa makroekonomi, laporan perusahaan, atau pengumuman pendapatan, tidak diperbolehkan."
          },
          {
            question: "Apakah High-Frequency Trading diperbolehkan?",
            answer: "Tidak. Melaksanakan strategi High-Frequency Trading, terutama untuk transaksi yang hanya berlangsung beberapa detik atau kurang, dianggap sebagai praktik trading yang dilarang."
          },
          {
            question: "Apakah penggunaan robot trading diperbolehkan?",
            answer: "Tidak. Penggunaan robot trading (EA), terutama yang berasal dari pihak ketiga, seperti menyalin sinyal trading, scalping jangka pendek, arbitrase tertunda, arbitrase terbalik, atau arbitrase hedging, dianggap sebagai praktik trading yang dilarang."
          },
          {
            question: "Apakah Arbitrage Trading diperbolehkan?",
            answer: "Tidak. Melakukan arbitrage trading dengan memanfaatkan perbedaan harga dianggap sebagai praktik trading yang dilarang."
          },
          {
            question: "Apakah Trading atas Nama Orang Lain diperbolehkan?",
            answer: "Tidak. MFT tidak mengizinkan akses atau trading atas nama orang lain, baik sebagai profesional maupun dalam kapasitas lainnya."
          }
        ]
      }
    ]
  },
  "vn-vie": {
    title: "FAQs",
    titleKey: "FAQs",
    modules: [
      {
        name: "Cơ bản",
        qaList: [
          {
            question: "Cách đăng ký?",
            answer: 'Nhấp vào nút "Đăng Ký" ở góc trên bên phải trang web MFT (magicfuturetrading.com). Sau đó, chọn đăng ký bằng email hoặc số điện thoại, hoàn tất quá trình xác minh và đặt mật khẩu để hoàn tất việc đăng ký.'
          },
          {
            question: "Cách đăng nhập?",
            answer: 'Nhấp vào "Đăng Nhập" ở góc trên bên phải trang web MFT (magicfuturetrading.com). Chọn đăng nhập bằng email hoặc số điện thoại, nhập thông tin và mật khẩu của bạn, rồi nhấp vào "Đăng Nhập" để truy cập vào tài khoản.'
          },
          {
            question: "Cách đăng ký tham gia thử thách?",
            answer: 'Đăng nhập, nhấp vào "Thử Thách Ngay" trên thanh điều hướng ở góc trên bên trái, chọn giai đoạn thử thách của bạn và hoàn tất thanh toán để đăng ký.'
          },
          {
            question: "Cách tham gia thử thách?",
            answer: 'Sau khi đăng ký thành công thử thách, vào mục "Thử Thách Của Tôi" để lấy tài khoản và mật khẩu đăng nhập vào nền tảng giao dịch. Sau đó, đăng nhập vào nền tảng giao dịch để bắt đầu thử thách.'
          },
          {
            question: "Cách xem phần thưởng?",
            answer: 'Sau khi đăng nhập vào tài khoản, vào mục "Thử Thách Của Tôi" và hoàn tất quy trình rút tiền nâng cấp. Bạn sẽ có thể xem phần thưởng cho thử thách tương ứng.'
          },
          {
            question: "Có thể giữ vị thế qua đêm không?",
            answer: "Có."
          },
          {
            question: "Có thể giữ vị thế qua cuối tuần không?",
            answer: "Có."
          }
        ]
      },
      {
        name: "Quá trình đánh giá",
        qaList: [
          {
            question: "Tại sao Bước 1 - Thử Thách MFT là yêu cầu trong Quá Trình Đánh Giá?",
            answer: "Thử Thách MFT là bước đầu tiên trong Quá Trình Đánh Giá, được thiết kế để giúp bạn phát triển thói quen giao dịch vững chắc. Bạn phải đạt được lợi nhuận mô phỏng 5% trên số vốn ban đầu trong khi vẫn giữ trong giới hạn rủi ro tối đa. Sau khi mua Thử Thách MFT, chúng tôi sẽ cung cấp cho bạn nền tảng giao dịch và các công cụ cần thiết để giúp bạn thành công như một trader MFT. \nKhi bạn hoàn thành tất cả các yêu cầu của thử thách (số ngày giao dịch, mục tiêu lợi nhuận, và thanh lý tất cả các vị thế), bạn sẽ tiến đến giai đoạn xác minh."
          },
          {
            question: "Tại sao Bước 2 - Xác Minh MFT là yêu cầu trong Quá Trình Đánh Giá?",
            answer: "Giai đoạn Xác Minh là giai đoạn thứ hai và cuối cùng trong Quá Trình Đánh Giá. Mục tiêu của giai đoạn này là đánh giá sự nhất quán trong hiệu suất giao dịch của bạn. Bạn cần đạt được lợi nhuận mô phỏng 10% trên số vốn ban đầu trong khi vẫn giữ trong giới hạn rủi ro tối đa. \nKhi bạn hoàn thành tất cả các mục tiêu giao dịch (số ngày giao dịch, mục tiêu lợi nhuận, và thanh lý tất cả các vị thế) và vượt qua cuộc kiểm tra, bạn sẽ hoàn thành chứng nhận MFT và ký hợp đồng để trở thành một trader MFT."
          },
          {
            question: "Cách để trở thành một Trader MFT?",
            answer: "Để trở thành một trader MFT, bạn cần hoàn thành hai bước: đầu tiên, vượt qua Thử Thách MFT (Bước 1), sau đó hoàn thành Xác Minh MFT (Bước 2). \nKhi bạn vượt qua thành công quá trình đánh giá và kiểm tra, bạn sẽ nhận chứng nhận MFT và ký hợp đồng, chính thức trở thành một trader MFT."
          },
          {
            question: "Mất bao lâu để trở thành một Trader MFT?",
            answer: "Để hoàn thành Quá Trình Đánh Giá MFT và trở thành một trader MFT, bạn cần có ít nhất 8 ngày giao dịch kinh nghiệm."
          },
          {
            question: "Quy mô tài khoản tối đa cho tài khoản MFT của tôi là bao nhiêu?",
            answer: "Giới hạn phân bổ vốn tối đa là 2,000,000 USD, với giới hạn tài khoản ban đầu là 400,000 USD. Bạn có thể tăng giới hạn tài khoản lên 2,000,000 USD miễn phí thông qua Kế Hoạch Tăng Trưởng Vốn và Chương Trình Premium."
          }
        ]
      },
      {
        name: "Nền tảng Giao dịch MT5",
        qaList: [
          {
            question: "Cách đăng nhập vào MT5?",
            answer: "Sau khi tải xuống và cài đặt MT5, sử dụng thông tin đăng nhập Thử Thách MFT của bạn để đăng nhập. Để có hướng dẫn chi tiết từng bước, tham khảo Hướng dẫn Dành cho Người Mới Bắt Đầu."
          },
          {
            question: "Cách bắt đầu giao dịch?",
            answer: "Sau khi liên kết tài khoản MFT của bạn với MT5, chọn sản phẩm bạn muốn giao dịch và nhấp đúp chuột trái để bắt đầu giao dịch."
          },
          {
            question: "Cách đặt lệnh?",
            answer: "Chọn công cụ bạn muốn giao dịch, chọn hướng giao dịch, loại lệnh, và mức chốt lời cũng như dừng lỗ (tuỳ chọn). Cuối cùng, nhập khối lượng giao dịch và đặt lệnh."
          },
          {
            question: "Cách đóng vị thế và hủy lệnh?",
            answer: "Bạn có thể chọn một vị thế mở trong tab Giao dịch, nhấp chuột phải để chọn các hành động như đóng vị thế hoặc kiểm tra lệnh thị trường."
          }
        ]
      },
      {
        name: "Quy tắc Giao dịch",
        qaList: [
          {
            question: "Mức lợi nhuận mục tiêu đạt được có nghĩa là gì?",
            answer: "Để vượt qua Thử Thách và tiến vào giai đoạn tiếp theo, Số dư Tài khoản của bạn phải đạt được Mức lợi nhuận mục tiêu yêu cầu và bạn phải không còn vị thế mở."
          },
          {
            question: "Vượt quá mức Giảm giá hàng ngày có nghĩa là gì?",
            answer: "Giảm giá hàng ngày là số tiền tối đa bạn có thể mất trong một ngày. Khi bạn đạt đến giới hạn giảm giá hàng ngày, tài khoản của bạn sẽ bị vi phạm và tự động đóng. Chúng tôi sẽ cập nhật giới hạn giảm giá hàng ngày mới của bạn trên bảng điều khiển vào lúc 16:00 CT mỗi ngày, khi thị trường đóng cửa."
          },
          {
            question: "Vượt quá mức Giảm giá tối đa có nghĩa là gì?",
            answer: "Giảm giá tối đa là số tiền tối đa bạn có thể mất trong suốt thời gian tồn tại của tài khoản. Nếu vốn chủ sở hữu của bạn giảm xuống dưới giới hạn Giảm giá tối đa, tài khoản của bạn sẽ bị đóng tự động và thử thách sẽ thất bại."
          },
          {
            question: "Ngày giao dịch hợp lệ là gì?",
            answer: "Chỉ khi bạn hoàn thành số lượng giao dịch mở và đóng theo yêu cầu trong một ngày duy nhất thì ngày đó mới được tính là một ngày giao dịch hợp lệ. Quy định này nhằm đảm bảo tính nhất quán trong việc quản lý rủi ro và chiến lược giao dịch của bạn."
          },
          {
            question: "Bao nhiêu ngày không giao dịch sẽ dẫn đến thất bại thử thách?",
            answer: "Nếu tài khoản của bạn không có giao dịch nào trong 21 ngày liên tiếp, tài khoản đó sẽ được coi là không hoạt động. Theo quy định, tài khoản không hoạt động sẽ bị đóng và thử thách sẽ thất bại."
          },
          {
            question: "Quy tắc nhất quán là gì?",
            answer: "Quy tắc nhất quán thường đề cập đến việc giao dịch theo phong cách giao dịch của riêng bạn, với các mức độ rủi ro và kích thước vị thế tương tự."
          },
          {
            question: "Tôi có thể giao dịch những công cụ nào và sử dụng chiến lược gì?",
            answer: "Phong cách giao dịch của bạn hoàn toàn phụ thuộc vào bạn. Miễn là các giao dịch của bạn tuân thủ các quy tắc liên quan (như quản lý rủi ro hợp lý), phù hợp với điều kiện thị trường hiện tại và không vi phạm các hoạt động cấm, chúng tôi sẽ không áp đặt bất kỳ hạn chế nào đối với chiến lược giao dịch của bạn, bao gồm giao dịch tùy chọn và giao dịch thuật toán. Xin lưu ý rằng phương pháp giao dịch của bạn nên có khả năng mang lại kết quả tương tự trên tài khoản thực tế như trên tài khoản MFT của bạn."
          }
        ]
      },
      {
        name: "Kế Hoạch Tăng Trưởng Quỹ",
        qaList: [
          {
            question: "Làm thế nào để tôi có thể tham gia vào Kế Hoạch Tăng Trưởng Quỹ?",
            answer: "Các nhà giao dịch MFT có hiệu suất cao và đáp ứng các yêu cầu liên quan sẽ đủ điều kiện tham gia Kế Hoạch Tăng Trưởng Quỹ. Để biết các điều kiện cụ thể, vui lòng truy cập trang Kế Hoạch Tăng Trưởng Quỹ tại đây: \nhttps://magicfuturetrading.com/challenges/fund."
          },
          {
            question: "Lợi ích của Kế Hoạch Tăng Trưởng Quỹ là gì?",
            answer: "Kế Hoạch Tăng Trưởng Quỹ mang lại các lợi ích sau:\n1.Mỗi lần tăng trưởng vốn miễn phí là 25% của kích thước tài khoản thử thách hiện tại, với tổng mức tăng tối đa lên đến 100%.\n2.Tổng số vốn có thể phân bổ lên tới $2,000,000."
          },
          {
            question: "Tôi có thể thêm bao nhiêu vốn thông qua Kế Hoạch Tăng Trưởng Quỹ?",
            answer: "Kế Hoạch Tăng Trưởng Quỹ cung cấp tối đa $1,000,000 vốn bổ sung."
          },
          {
            question: "Kế Hoạch Tăng Trưởng Quỹ có miễn phí không?",
            answer: "Có, Kế Hoạch Tăng Trưởng Quỹ cho phép các nhà giao dịch tăng kích thước tài khoản của họ miễn phí."
          },
          {
            question: "Kế Hoạch Premium có tương thích với Kế Hoạch Tăng Trưởng Quỹ không?",
            answer: "Có, nó hoàn toàn tương thích."
          }
        ]
      },
      {
        name: "Gói cao cấp",
        qaList: [
          {
            question: "Tôi có thể truy cập Quyền lợi độc quyền như thế nào?",
            answer: "Bạn đủ điều kiện để được hưởng Quyền lợi độc quyền nếu đáp ứng các tiêu chí sau:",
            lis: ["Duy trì Cấp độ 3 trong 4 tháng liên tiếp", "Đạt được tổng lợi nhuận không dưới 10%", "Hoàn thành ít nhất 4 khoản thanh toán", "Duy trì trạng thái có lợi nhuận"]
          },
          {
            question: "Lợi Ích Đặc Biệt Cung Cấp Những Gì?",
            answer: "Lợi ích đặc biệt bao gồm các ưu điểm sau:",
            lis: [
              "Nhận thử thách miễn phí ở cùng cấp độ với thử thách hiện tại của bạn.",
              "Phần thưởng chia sẻ lợi nhuận tăng lên 90%.",
              "Mở khóa khả năng mua trực tiếp thử thách cấp độ Huyền Thoại trị giá $400,000",
              "Tận hưởng giảm giá 10% cho tất cả các thử thách.",
              "Tiền thưởng chuyển nhượng thêm 5% (áp dụng khi chuyển lợi nhuận từ thử thách hiện tại sang thử thách khác).",
              "Giới hạn kích thước tài khoản thử thách tăng lên $600,000.",
              "Bạn có thể kết hợp với một thử thách Cấp độ 3 một lần."
            ]
          },
          {
            question: "Có yêu cầu cụ thể về quy mô tài khoản để đăng ký Quyền lợi độc quyền không?",
            answer: "Không."
          },
          {
            question: "Làm Thế Nào Để Tôi Có Thể Truy Cập Lợi Ích Elite?",
            answer: "Bạn đủ điều kiện nhận Lợi Ích Elite nếu đáp ứng các tiêu chí sau:",
            lis: [
              "Duy trì trạng thái Lợi Ích Elite ít nhất 3 tháng.",
              "Đạt tổng lợi nhuận không thấp hơn 12%.",
              "Hoàn thành ít nhất 3 lần thanh toán.",
              "Số dư tài khoản thử thách ban đầu phải lớn hơn hoặc bằng $400,000.",
              "Duy trì trạng thái có lợi nhuận."
            ]
          },
          {
            question: "Lợi Ích Elite Cung Cấp Những Gì?",
            answer: "Lợi ích Elite bao gồm các ưu điểm sau:",
            lis: [
              "Giới hạn số dư tài khoản thử thách tăng lên $1,000,000.",
              "Không có giới hạn giảm giá trị hàng ngày tối đa.",
              "Thanh toán nhanh chóng.",
              "Sau khi hoàn thành đánh giá thành công, bạn có cơ hội gia nhập đội ngũ MFT của chúng tôi."
            ]
          },
          {
            question: "Tôi có thể kết hợp bốn tài khoản MFT trị giá $100,000 thành một tài khoản MFT trị giá $400,000 để nộp đơn vào cấp độ cao nhất không?",
            answer: "Không. Số dư tài khoản thử thách ban đầu phải không thấp hơn $400,000, điều này có thể đạt được bằng cách kết hợp một thử thách có kích thước ban đầu là $200,000 và một thử thách khác có kích thước ban đầu trên $200,000."
          },
          {
            question: "Khi tôi tham gia Kế Hoạch Premium, tôi có thể duy trì nó vĩnh viễn không?",
            answer: "Không. Trong trường hợp xảy ra một số thất bại, quyền lợi từ Kế Hoạch Premium của bạn sẽ bị thu hồi."
          },
          {
            question: "Trong những trường hợp nào quyền lợi từ Kế Hoạch Premium của tôi có thể bị hủy bỏ?",
            answer: "Trong một số trường hợp, quyền lợi của Kế Hoạch Premium sẽ bị thu hồi, cụ thể trong các điều kiện sau:",
            ulList: [
              {
                txt: "Lợi ích Đặc Biệt sẽ bị thu hồi nếu có bất kỳ điều kiện nào sau đây:",
                lis: ["Thử thách liên quan đến quyền lợi không hoàn thành.", "Trong giai đoạn Cấp độ 3, có bất kỳ thất bại nào trong 3 thử thách khác.", "Vi phạm các điều khoản hợp đồng."]
              },
              {
                txt: "Lợi ích Elite sẽ bị thu hồi nếu có bất kỳ điều kiện nào sau đây:",
                lis: ["Không hoàn thành thử thách trong khi đang giữ quyền lợi này.", "Lợi ích Elite liên quan đến thử thách bị thu hồi.", "Vi phạm các điều khoản hợp đồng."]
              }
            ]
          }
        ]
      },
      {
        name: "Nền tảng",
        qaList: [
          {
            question: "Các nền tảng có thể sử dụng để giao dịch?",
            answer: "MFT hỗ trợ giao dịch trên cả nền tảng MT5 và MC Markets. Bạn có thể sử dụng bất kỳ nền tảng giao dịch nào trong số này."
          },
          {
            question: "Kích thước tài khoản là gì?",
            answer: "Kích thước tài khoản thay đổi tùy thuộc vào mức độ thử thách. Bạn có thể lựa chọn theo tình huống của mình như sau:",
            lis: [
              "Proficient: Kích thước tài khoản $10,000",
              "Advanced: Kích thước tài khoản $50,000",
              "Expert: Kích thước tài khoản $100,000",
              "Master: Kích thước tài khoản $200,000"
            ]
          },
          {
            question: "Tôi có thể thay đổi tài khoản thử thách của mình không?",
            answer: "Không, bạn không thể."
          },
          {
            question: "Các thiết bị nào được nền tảng giao dịch hỗ trợ?",
            answer: "MFT hỗ trợ giao dịch trên cả nền tảng MT5 và MC Markets. Nền tảng MT5 tương thích với nhiều thiết bị, bao gồm Android, iOS, Windows và Mac. Nền tảng MC Markets cung cấp nền tảng giao dịch trên web không cần tải xuống, cũng như ứng dụng di động (Android/iOS) và hỗ trợ H5."
          },
          {
            question: "Ưu điểm của nền tảng giao dịch MT5 là gì?",
            answer: "Nền tảng giao dịch MT5 cung cấp các ưu điểm sau:",
            lis: [
              "Công cụ phân tích thị trường toàn diện",
              "Giao dịch nhiều tài sản",
              "Các loại lệnh linh hoạt",
              "Giao dịch thuật toán nâng cao",
              "Hỗ trợ nhiều múi giờ",
              "Hỗ trợ đa ngôn ngữ",
              "Tương thích đa nền tảng",
              "Giao dịch chỉ với một cú nhấp chuột",
              "Biểu đồ có thể tùy chỉnh hoàn toàn"
            ]
          },
          {
            question: "Ưu điểm của nền tảng giao dịch MC Markets là gì?",
            answer: "Nền tảng giao dịch MC Markets cung cấp các ưu điểm sau:",
            lis: [
              "Công cụ phân tích đa dạng",
              "Tích hợp với nền tảng giao dịch MT5",
              "Thực thi nhanh chóng và hiệu quả",
              "Không gian giao dịch tùy chỉnh",
              "Nạp/rút tiền dễ dàng và an toàn",
              "Cảnh báo thị trường",
              "Phạm vi rộng các công cụ giao dịch",
              "Hệ thống độ sâu thị trường mạnh mẽ",
              "Giao diện trang giao dịch thân thiện với người dùng",
              "Tương thích đa nền tảng"
            ]
          },
          {
            question: "Nền tảng có cung cấp tài khoản demo hay tài khoản thật không?",
            answer: "MFT không phải là một tổ chức tài chính và không cung cấp hoặc chứng thực bất kỳ sản phẩm hoặc dịch vụ tài chính nào. Tất cả các tài khoản giao dịch được cung cấp bởi nền tảng giao dịch bên thứ ba. Tất cả các hoạt động giao dịch diễn ra trong môi trường mô phỏng."
          }
        ]
      },
      {
        name: "Hạn chế hoạt động giao dịch",
        qaList: [
          {
            question: "Có thể lợi dụng lỗi hệ thống không?",
            answer: "Không. Các chiến lược giao dịch cố ý hoặc vô tình lợi dụng lỗi hệ thống (như hiển thị giá sai hoặc cập nhật bị trễ) được coi là hành vi giao dịch bị cấm."
          },
          {
            question: "Có thể thao túng giao dịch không?",
            answer: "Không. Thao túng giao dịch, dù là riêng lẻ hay hợp tác với người khác (bao gồm cả các tài khoản khác nhau hoặc tài khoản của các tổ chức khác nhau), như việc mở các vị thế đối lập cùng lúc với mục đích thao túng thị trường, là hành vi giao dịch bị cấm."
          },
          {
            question: "Giao dịch theo tin tức có được phép không?",
            answer: "Không. Tham gia giao dịch theo tin tức, chẳng hạn như mở các vị thế mới trong vòng 15 phút trước hoặc sau các tin tức toàn cầu quan trọng, sự kiện vĩ mô, báo cáo công ty hay công bố lợi nhuận, là hành vi bị cấm."
          },
          {
            question: "Giao dịch tần suất cao có được phép không?",
            answer: "Không. Thực hiện các chiến lược giao dịch tần suất cao, đặc biệt là các giao dịch chỉ kéo dài vài giây hoặc ít hơn, là hành vi bị cấm."
          },
          {
            question: "Sử dụng robot giao dịch có được phép không?",
            answer: "Không. Sử dụng robot giao dịch (EAs), đặc biệt là các robot từ bên thứ ba, như sao chép tín hiệu giao dịch, scalping ngắn hạn, chênh lệch giá chậm, chênh lệch ngược hoặc giao dịch phòng ngừa chênh lệch, là hành vi giao dịch bị cấm."
          },
          {
            question: "Giao dịch chênh lệch giá có được phép không?",
            answer: "Không. Tham gia vào giao dịch chênh lệch giá bằng cách tận dụng sự khác biệt giá là hành vi bị cấm."
          },
          {
            question: "Giao dịch thay mặt người khác có được phép không?",
            answer: "Không. MFT không cho phép truy cập hoặc giao dịch thay mặt người khác, dù là chuyên nghiệp hay dưới bất kỳ hình thức nào."
          }
        ]
      }
    ]
  },
  "ko-kr": {
    title: "FAQs",
    titleKey: "FAQs",
    modules: [
      {
        name: "기본",
        qaList: [
          {
            question: "회원가입 방법?",
            answer: 'MFT 웹사이트(magicfuturetrading.com) 우측 상단의 "회원가입" 버튼을 클릭하세요. 이메일 또는 전화번호 중 하나를 선택해 가입을 진행하고, 인증 절차를 완료한 후 비밀번호를 설정하여 회원가입을 마치세요.'
          },
          {
            question: "로그인 방법?",
            answer: 'MFT 웹사이트 우측 상단의 "로그인" 버튼을 클릭하세요. 이메일 또는 전화번호 로그인 옵션 중 하나를 선택하고 정보를 입력한 후 비밀번호를 입력하고 "로그인"을 클릭하세요.'
          },
          {
            question: "챌린지 등록 방법?",
            answer: '로그인 후 좌측 상단의 "지금 도전" 버튼을 클릭하세요. 원하는 챌린지 단계를 선택하고 결제를 완료하면 등록이 완료됩니다.'
          },
          {
            question: "챌린지 참여 방법?",
            answer: '챌린지 등록을 완료한 후 "나의 도전"으로 이동하여 거래 플랫폼 로그인 계정과 비밀번호를 확인하세요. 그런 다음 거래 플랫폼에 로그인하여 챌린지를 시작하세요.'
          },
          {
            question: "보상 확인 방법?",
            answer: '계정에 로그인한 후 "나의 도전"으로 이동하여 업그레이드 출금 절차를 완료하세요. 그런 다음 해당 챌린지의 보상을 확인할 수 있습니다.'
          },
          {
            question: "야간 포지션 보유 가능한가요?",
            answer: "네."
          },
          {
            question: "주말 포지션 보유 가능한가요?",
            answer: "네."
          }
        ]
      },
      {
        name: "평가 과정",
        qaList: [
          {
            question: "1단계 - MFT 챌린지가 평가 과정에서 필요한 이유는 무엇인가요?",
            answer: "MFT 챌린지는 평가 과정의 첫 번째 단계로, 견고한 거래 습관을 개발하도록 설계되었습니다. 초기 자본의 5% 시뮬레이션 수익을 달성하고 최대 허용 손실 한도를 유지해야 합니다. MFT 챌린지를 구매하면 거래 플랫폼과 필요한 도구가 제공되어 MFT 거래자로 성공할 수 있도록 지원합니다. \n모든 챌린지 요구 사항(거래 일수, 수익 목표, 모든 포지션 청산)을 충족하면, 검증 단계로 진급합니다."
          },
          {
            question: "2단계 - MFT 검증이 평가 과정에서 필요한 이유는 무엇인가요?",
            answer: "검증 단계는 평가 과정의 두 번째이자 마지막 단계입니다. 이 단계의 목표는 거래 성과의 일관성을 평가하는 것입니다. 초기 자본의 10% 시뮬레이션 수익을 달성하고 최대 허용 손실 한도를 유지해야 합니다. \n모든 거래 목표(거래 일수, 수익 목표, 모든 포지션 청산)를 성공적으로 충족하고 검토를 통과하면 MFT 인증을 완료하고 MFT 거래자로서 계약을 체결하게 됩니다."
          },
          {
            question: "MFT 거래자가 되는 방법은 무엇인가요?",
            answer: "MFT 거래자가 되려면 두 단계를 완료해야 합니다: 먼저 MFT 챌린지(1단계)를 통과하고, 그다음 MFT 검증(2단계)을 완료해야 합니다. 평가 및 검토 과정을 성공적으로 통과하면 MFT 인증을 받고 공식적으로 MFT 거래자로 계약을 체결하게 됩니다."
          },
          {
            question: "MFT 거래자가 되는 데 얼마나 걸리나요?",
            answer: "MFT 평가 과정을 완료하고 MFT 거래자가 되려면 최소 8거래일의 경험이 필요합니다."
          },
          {
            question: "MFT 계정의 최대 계좌 규모는 얼마인가요?",
            answer: "최대 자본 할당은 2,000,000 USD이며 초기 계좌 크기 한도는 400,000 USD입니다. 자금 확장 계획과 프리미엄 프로그램을 통해 계좌 크기 한도를 2,000,000 USD까지 무료로 확장할 수 있습니다."
          }
        ]
      },
      {
        name: "MT5 거래 플랫폼",
        qaList: [
          {
            question: "MT5에 로그인하는 방법",
            answer: "MT5를 다운로드하고 설치한 후, MFT 챌린지 자격 증명을 사용하여 로그인하세요. 단계별 가이드 필요하시면, 초보자 가이드를 참조하세요."
          },
          {
            question: "거래 시작하는 방법",
            answer: "MFT 계정을 MT5에 연결한 후, 거래하고 싶은 상품을 선택하고 마우스의 왼쪽 버튼을 더블 클릭하여 거래를 시작하세요."
          },
          {
            question: "주문하는 방법",
            answer: "거래하고 싶은 상품을 선택하고, 거래 방향, 주문 유형, 이익 실현 및 손절매 레벨(선택적)을 설정하세요. 마지막으로 거래량을 입력하고 주문을 실행하세요."
          },
          {
            question: "포지션 종료 및 주문 취소 방법",
            answer: "‘거래’ 탭에서 열린 포지션을 선택한 후, 마우스의 오른쪽 버튼을 클릭하여 포지션 종료 또는 시장 주문 확인 등의 작업을 선택할 수 있습니다."
          }
        ]
      },
      {
        name: "거래 규칙",
        qaList: [
          {
            question: "이익 목표 달성은 무엇을 의미하나요?",
            answer: "챌린지를 통과하고 다음 단계로 진행하려면, 계좌 잔액이 요청된 이익 목표에 도달해야 하며, 포지션이 없음을 확인해야 합니다."
          },
          {
            question: "일일 손실 한도 초과는 무엇을 의미하나요?",
            answer: "일일 손실 한도는 하루 동안 허용되는 최대 손실 금액을 나타냅니다. 이 한도를 초과하면 계좌가 자동으로 종료되며, 매일 16:00 CT에 시장이 마감되면 새로운 일일 손실 한도가 대시보드에 업데이트됩니다."
          },
          {
            question: "최대 손실 한도를 초과는 무엇을 의미하나요?",
            answer: "최대 손실 한도는 계좌의 평생 동안 감수할 수 있는 최대 손실 금액을 나타냅니다. 자산이 최대 손실 한도 이하로 떨어지면 계좌가 자동으로 종료되고, 챌린지를 실패하게 됩니다."
          },
          {
            question: "유효한 거래일이란 무엇인가요?",
            answer: "하루 안에 개시와 종료 거래를 지정된 수 만큼 완료해야 그 날이 유효한 거래일로 간주됩니다. 이는 리스크 관리 및 거래 전략의 일관성을 보장하기 위한 규정입니다."
          },
          {
            question: "비활성 상태가 며칠 지속되면 챌린지가 실패하게 되나요?",
            answer: "계좌에 21일 연속 거래가 없으면 해당 계좌는 비활성으로 간주됩니다. 규정에 따라 비활성 계좌는 종료되며, 챌린지가 실패하게 됩니다."
          },
          {
            question: "일관성 규칙이란 무엇인가요?",
            answer: "일반적으로 일관성 규칙은 자신의 거래 스타일에 맞춰 비슷한 수준의 리스크와 포지션 크기를 유지하며 거래하는 것입니다."
          },
          {
            question: "어떤 상품을 거래할 수 있으며, 어떤 전략을 사용할 수 있나요?",
            answer: "여러분의 거래 스타일은 전적으로 여러분에게 달려 있습니다. 여러분의 거래가 관련 규칙(적절한 리스크 관리 등)을 준수하고, 현재 시장 조건에 맞게 이루어지며, 금지된 활동을 위반하지 않는 한, 우리는 여러분의 거래 전략에 제한을 두지 않습니다. 여러분의 거래 접근 방식은 MFT 계좌에서와 같이 실제 계좌에서도 동일한 결과를 낼 수 있어야 합니다."
          }
        ]
      },
      {
        name: "펀드 스케일링 플랜",
        qaList: [
          {
            question: "펀드 스케일링 플랜에 어떻게 참여할 수 있나요?",
            answer: "관련 요건을 충족하는 실적이 우수한 MFT 거래자들은펀드 스케일링 플랜에 참여할 수 있는 자격이 주어집니다. 구체적인 자격 조건은 자금 확장 계획 페이지(https://magicfuturetrading.com/challenges/fund)에서 확인하실 수 있습니다."
          },
          {
            question: "펀드 스케일링 플랜의 혜택은 무엇인가요?",
            answer: "펀드 스케일링 플랜은 다음과 같은 혜택을 제공합니다:\n1.각 무료 자본금 증액은 현재 챌린지 계정 금액의 25%이며, 최대 누적 확장은 100%까지 가능합니다.\n2.총 자본 배정은 최대 $2,000,000까지 가능합니다."
          },
          {
            question: "펀드 스케일링 플랜을 통해 얼마나 많은 자본이 추가될 수 있나요?",
            answer: "펀드 스케일링 플랜을 통해 최대 $1,000,000의 추가 자본을 제공받을 수 있습니다."
          },
          {
            question: "펀드 스케일링 플랜은 무료인가요?",
            answer: "네, 펀드 스케일링 플랜은 거래자가 계좌 크기를 무료로 확장할 수 있는 프로그램입니다."
          },
          {
            question: "프리미엄 플랜은 펀드 스케일링 플랜 과 호환되나요?",
            answer: "네, 두 플랜은 호환됩니다."
          }
        ]
      },
      {
        name: "프리미엄 플랜",
        qaList: [
          {
            question: "독점 혜택은 어떻게 이용할 수 있나요?",
            answer: "다음 기준을 충족하는 경우 독점 혜택을 받을 수 있습니다:",
            lis: ["4개월 연속 레벨 3 유지", "총 수익률이 10% 이상 달성", "최소 4회 이상 수익 지급 완료", "계좌가 지속적으로 수익 상태 유지"]
          },
          {
            question: "독점 혜택은 어떤 혜택을 제공하나요?",
            answer: "독점 혜택은 다음과 같은 이점을 제공합니다:",
            lis: [
              "현재 챌린지와 동일한 레벨의 무료 챌린지 제공",
              "수익 배분 비율이 90%로 증가",
              "$400,000 레전더리 레벨 챌린지를 직접 구매할 수 있는 권한 부여",
              "모든 챌린지에 10% 할인 제공",
              "추가 수익 이전 보너스 5% 제공 (현재 챌린지에서 다른 챌린지로 수익을 이전할 때 적용)",
              "챌린지 계좌 크기 제한이 $600,000로 증가",
              "다른 레벨 3 챌린지와 한 번 결합 가능"
            ]
          },
          {
            question: "독점 혜택 신청에 특정 계좌 크기 조건이 있나요?",
            answer: "아니요."
          },
          {
            question: "엘리트 혜택은 어떻게 이용할 수 있나요?",
            answer: "엘리트 혜택을 이용하려면 다음 기준을 충족해야 합니다:",
            lis: [
              "엘리트 혜택 상태를 최소 3개월 유지",
              "총 수익률이 12% 이상 달성",
              "최소 3회 이상 수익 지급 완료",
              "초기 챌린지 계좌 잔액이 $400,000 이상",
              "계좌가 지속적으로 수익 상태 유지"
            ]
          },
          {
            question: "엘리트 혜택의 내용은 무엇인가요?",
            answer: "엘리트 혜택은 다음과 같은 이점을 제공합니다:",
            lis: [
              "챌린지 계정 잔액 한도가  $1,000,000로 증가",
              "최대 일간 손실 제한 없음",
              "빠른 수익 지급",
              "평가를 성공적으로 완료하면 MFT 팀에 합류할 기회 제공"
            ]
          },
          {
            question: "네 개의 $100,000 MFT 계정을 하나의 $400,000 MFT 계정으로 결합하여 최고 레벨에 지원할 수 있나요?",
            answer: "아니요. 초기 챌린지 계좌 크기는 최소 $400,000 이상이어야 하며, 이를 충족하려면 초기 크기가 $200,000인 챌린지와 $200,000 이상인 챌린지를 결합해야 합니다."
          },
          {
            question: "프리미엄 플랜에 가입하면 영구적으로 유지되나요?",
            answer: "아니요. 특정 조건에서 실패할 경우 프리미엄 플랜 혜택이 취소됩니다."
          },
          {
            question: "리미엄 플랜 혜택이 취소되는 조건은 무엇인가요?",
            answer: "프리미엄 플랜 혜택은 다음 조건을 충족하지 못할 경우 취소됩니다:",
            ulList: [
              {
                txt: "다음 조건 중 하나라도 충족되면 독점 혜택이 취소됩니다:",
                lis: ["혜택이 연계된 챌린지 실패한 경우", "레벨 3 단계에서 다른 3개의 챌린지 중 하나라도 실패한 경우", "계약 조건 위반"]
              },
              {
                txt: "다음 조건 중 하나라도 충족되면 엘리트 혜택이 취소됩니다:",
                lis: ["혜택 보유 중 챌린지를 완료하지 못한 경우", "챌린지와 연계된 엘리트 혜택이 취소된 경우", "계약 조건 위반"]
              }
            ]
          }
        ]
      },
      {
        name: "플랫폼",
        qaList: [
          {
            question: "어떤 플랫폼에서 거래할 수 있나요?",
            answer: "MFT는 MT5와 MC Markets 두 가지 플랫폼에서 거래를 지원합니다. 두 플랫폼 중 하나를 선택하여 사용할 수 있습니다."
          },
          {
            question: "계정 크기는 어떻게 되나요?",
            answer: "계정 크기는 선택한 챌린지 레벨에 따라 다릅니다. 다음과 같이 선택할 수 있습니다:",
            lis: [
              "Proficient: 계정 크기 $10,000",
              "Advanced: 계정 크기 $50,000",
              "Expert: 계정 크기 $100,000",
              "Master: 계정 크기 $200,000"
            ]
          },
          {
            question: "챌린지 계정을 수정할 수 있나요?",
            answer: "아니요, 챌린지 계정은 수정할 수 없습니다."
          },
          {
            question: "거래 플랫폼은 어떤 기기를 지원하나요?",
            answer: "MFT는 MT5와 MC Markets 두 플랫폼에서 거래를 지원합니다. MT5 플랫폼은 Android, iOS, Windows, Mac을 포함한 다양한 기기와 호환됩니다. MC Markets 플랫폼은 다운로드가 필요 없는 웹 기반 거래 플랫폼을 제공하며, 모바일 앱(Android/iOS)과 H5 지원을 포함합니다."
          },
          {
            question: "MT5 거래 플랫폼의 장점은 무엇인가요?",
            answer: "MT5 거래 플랫폼은 다음과 같은 장점을 제공합니다:",
            lis: [
              "종합적인 시장 분석 도구",
              "다중 자산 거래",
              "유연한 주문 유형",
              "고급 알고리즘 거래",
              "다중 시간대 지원",
              "다중 언어 지원",
              "크로스 플랫폼 호환성",
              "원클릭 거래",
              "완전히 커스터마이징 가능한 차트"
            ]
          },
          {
            question: "MC Markets 거래 플랫폼의 장점은 무엇인가요?",
            answer: "MC Markets 거래 플랫폼은 다음과 같은 장점을 제공합니다:",
            lis: [
              "다중 분석 도구",
              "MT5 거래 플랫폼과 통합",
              "빠르고 효율적인 실행",
              "사용자 맞춤형 거래 공간",
              "안전하고 간편한 입출금",
              "시장 알림 기능",
              "다양한 거래 상품",
              "강력한 시장 깊이 시스템",
              "사용자 친화적인 거래 페이지 레이아웃",
              "크로스 플랫폼 호환성"
            ]
          },
          {
            question: "플랫폼에서 데모 계정 또는 실거래 계정을 제공하나요?",
            answer: "MFT는 금융 기관이 아니며 금융 상품이나 서비스를 제공하거나 지원하지 않습니다. 모든 거래 계정은 제3자 거래 플랫폼에서 제공되며, 모든 거래 활동은 시뮬레이션 환경 내에서 이루어집니다."
          }
        ]
      },
      {
        name: "거래 활동 제한",
        qaList: [
          {
            question: "시스템 오류를 악용할 수 있나요?",
            answer: "아니요. 시스템의 오류(예: 잘못된 가격 표시나 지연된 업데이트)를 의도적으로 또는 비의도적으로 악용하는 거래 전략은 금지된 거래 관행으로 간주됩니다."
          },
          {
            question: "거래를 조작할 수 있나요?",
            answer: "아니요. 단독으로 또는 다른 사람과 협력하여(여러 계정이나 다른 기관 소유 계정을 포함) 거래를 조작하는 행위, 예를 들어 시장을 조작할 목적으로 동시에 반대 포지션을 취하는 것은 금지된 거래 관행으로 간주됩니다."
          },
          {
            question: "뉴스 트레이딩이 허용되나요?",
            answer: "아니요. 주요 글로벌 뉴스, 거시경제 이벤트, 기업 보고서 또는 실적 발표 전후 15분 이내에 새로운 포지션을 여는 뉴스 트레이딩은 허용되지 않습니다."
          },
          {
            question: "고빈도 거래가 허용되나요?",
            answer: "아니요. 특히 몇 초 이내에 이루어지는 거래를 포함한 고빈도 거래 전략은 금지된 거래 관행으로 간주됩니다."
          },
          {
            question: "거래 로봇 사용이 허용되나요?",
            answer: "아니요. 특히 신호 복사 거래, 단기 스캘핑, 지연된 차익거래, 역차익거래, 헤징 차익거래 등을 포함한 제3자 제공 거래 로봇(EA)을 사용하는 것은 금지된 거래 관행으로 간주됩니다."
          },
          {
            question: "차익 거래(Arbitrage Trading)가 허용되나요?",
            answer: "아니요. 가격 차이를 악용하는 차익 거래는 금지된 거래 관행으로 간주됩니다."
          },
          {
            question: "다른 사람을 대신하여 거래하는 것이 허용되나요?",
            answer: "아니요. MFT는 전문적이든 기타 용도든 다른 사람을 대신하여 거래하거나 접근하는 것을 허용하지 않습니다."
          }
        ]
      }
    ]
  },
  "ja-jpn": {
    title: "FAQs",
    titleKey: "FAQs",
    modules: [
      {
        name: "初心者",
        qaList: [
          {
            question: "登録方法は？",
            answer: "MFTウェブサイト（magicfuturetrading.com）の右上隅にある「サインアップ」ボタンをクリックします。その後、メールアドレスまたは電話番号を使って登録し、認証プロセスを完了し、パスワードを設定して登録を完了します。"
          },
          {
            question: "ログイン方法は？",
            answer: "MFTウェブサイト（magicfuturetrading.com）の右上隅にある「ログイン」をクリックします。メールアドレスまたは電話番号でログインを選択し、詳細情報とパスワードを入力した後、「ログイン」をクリックしてアカウントにアクセスします。"
          },
          {
            question: "チャレンジに登録する方法は？",
            answer: "ログイン後、左上のナビゲーションバーにある「チャレンジ今すぐ」をクリックし、チャレンジのステージを選択し、支払いを完了して登録します。"
          },
          {
            question: "チャレンジに参加する方法は？",
            answer: "チャレンジに登録が完了したら、「マイチャレンジ」に移動して、取引プラットフォームのログインアカウントとパスワードを取得します。その後、取引プラットフォームにログインしてチャレンジを開始します。"
          },
          {
            question: "報酬を見る方法は？",
            answer: "アカウントにログイン後、「マイチャレンジ」に移動し、アップグレードの引き出しプロセスを完了します。これで対応するチャレンジの報酬を見ることができます。"
          },
          {
            question: "ポジションをオーバーナイトで保持できますか？",
            answer: "はい。"
          },
          {
            question: "週末にポジションを保持できますか？",
            answer: "はい。"
          }
        ]
      },
      {
        name: "評価プロセス",
        qaList: [
          {
            question: "なぜステップ1 - MFTチャレンジが評価プロセスに必要なのですか？",
            answer: "MFTチャレンジは評価プロセスの最初のステップで、あなたが確固たる取引習慣を身につけるのを助けることを目的としています。あなたは、初期資本に対して5%のシミュレートされた利益を達成し、最大ドローダウン制限内に収める必要があります。MFTチャレンジを購入すると、取引プラットフォームと必要なツールを提供し、MFTトレーダーとして成功するためにサポートします。\nチャレンジのすべての要件（取引日数、利益目標、およびすべてのポジションの決済）を達成すると、検証ステージに進むことができます。"
          },
          {
            question: "なぜステップ2 - MFT検証が評価プロセスに必要なのですか？",
            answer: "検証ステージは評価プロセスの第二段階であり、最終段階です。このフェーズの目的は、あなたの取引パフォーマンスの一貫性を評価することです。初期資本に対して10%のシミュレートされた利益を達成し、最大ドローダウン制限内に収める必要があります。\nすべての取引目標（取引日数、利益目標、すべてのポジションの決済）を成功裏に達成し、レビューを通過すると、MFT認定を取得し、契約に署名して正式にMFTトレーダーになります。"
          },
          {
            question: "MFTトレーダーになるにはどうすればよいですか？",
            answer: "MFTトレーダーになるには、2つのステップを完了する必要があります：まず、MFTチャレンジ（ステップ1）に合格し、次にMFT検証（ステップ2）を完了します。\n評価およびレビューのプロセスを成功裏に通過すると、MFT認定を受け、契約に署名して正式にMFTトレーダーになります。"
          },
          {
            question: "MFTトレーダーになるまでにどれくらいの時間がかかりますか？",
            answer: "MFT評価プロセスを完了し、MFTトレーダーになるには、少なくとも8営業日以上の取引経験が必要です。"
          },
          {
            question: "MFTアカウントの最大口座サイズはいくらですか？",
            answer: "最大資本配分は2,000,000 USDで、初期のアカウントサイズ制限は400,000 USDです。ファンドスケーリングプランとプレミアムプログラムを通じて、無料でアカウントサイズ制限を2,000,000 USDに増やすことができます。"
          }
        ]
      },
      {
        name: "MT5取引プラットフォーム",
        qaList: [
          {
            question: "MT5にログインする方法は？",
            answer: "MT5をダウンロードしてインストールした後、MFTチャレンジの認証情報を使用してログインします。詳細な手順については、初心者ガイドを参照してください。"
          },
          {
            question: "取引を開始する方法は？",
            answer: "MFTアカウントをMT5にリンクした後、取引したい商品を選択し、左クリックでダブルクリックして取引を開始します。"
          },
          {
            question: "注文を出す方法は？",
            answer: "取引したい商品を選択し、取引方向、注文タイプ、利益確定および損切りレベル（オプション）を選択します。最後に、取引量を入力して注文を出します。"
          },
          {
            question: "ポジションを閉じたり、注文をキャンセルする方法は？",
            answer: "取引タブでオープンポジションを選択し、右クリックしてポジションの閉じるや市場注文の確認などのアクションを選択できます。"
          }
        ]
      },
      {
        name: "取引ルール",
        qaList: [
          {
            question: "利益目標を達成するとはどういう意味ですか？",
            answer: "チャレンジに合格して次のフェーズに進むためには、アカウント残高が指定された利益目標に達し、ポジションがすべて決済されている必要があります。"
          },
          {
            question: "日次ドローダウンを超えるとはどういう意味ですか？",
            answer: "日次ドローダウンは、1日で失うことができる最大額を意味します。日次ドローダウンの限度に達すると、アカウントは違反と見なされ、自動的に閉じられます。市場が閉じる16:00 CTに毎日、ダッシュボードで新しい日次ドローダウンの制限が更新されます。"
          },
          {
            question: "最大ドローダウンを超えるとはどういう意味ですか？",
            answer: "最大ドローダウンは、アカウントの生涯で失うことができる最大額を意味します。資本が最大ドローダウンの制限を下回った場合、アカウントは自動的に閉じられ、チャレンジは失敗します。"
          },
          {
            question: "有効な取引日とは何ですか？",
            answer: "指定された数の取引を1日のうちに開閉した場合、その日は有効な取引日としてカウントされます。この規定は、リスク管理や取引戦略の一貫性を確保するために設けられています。"
          },
          {
            question: "何日間取引がないとチャレンジが失敗しますか？",
            answer: "アカウントに21日間連続で取引記録がない場合、そのアカウントは非アクティブと見なされます。規定により、非アクティブなアカウントは閉鎖され、チャレンジは失敗となります。"
          },
          {
            question: "一貫性のルールとは何ですか？",
            answer: "一般的に、一貫性のルールは自分自身の取引スタイルに従い、リスクやポジションサイズが似たようなレベルで取引することを指します。"
          },
          {
            question: "どの取引商品を取引でき、どのような戦略を使うことができますか？",
            answer: "取引スタイルは完全にあなた次第です。取引が適切なリスク管理に従い、市場の状況に合っており、禁止された活動に違反しない限り、取引戦略に制限を課すことはありません。裁量取引やアルゴリズム取引も含まれます。取引アプローチは、MFTアカウントでの取引と同じ結果を実際のアカウントでも達成できる必要があることに注意してください。"
          }
        ]
      },
      {
        name: "ファンドスケーリングプラン",
        qaList: [
          {
            question: "ファンドスケーリングプランに参加する方法は？",
            answer: "適切な要件を満たす高パフォーマンスのMFTトレーダーは、ファンドスケーリングプランに参加する資格があります。具体的な資格条件については、ファンドスケーリングプランのページをご覧ください：https://magicfuturetrading.com/challenges/fund。"
          },
          {
            question: "ファンドスケーリングプランのメリットは何ですか？",
            answer: "ファンドスケーリングプランには以下のメリットがあります：\n1.各無料資本のスケーリングは、現在のチャレンジアカウントのサイズの25%で、最大100%までの累積増加が可能です。\n2.最大資本配分額は$2,000,000までです。"
          },
          {
            question: "ファンドスケーリングプランを通じてどれくらいの資本を追加できますか？",
            answer: "ファンドスケーリングプランは最大$1,000,000の追加資本を提供します。"
          },
          {
            question: "ファンドスケーリングプランは無料ですか？",
            answer: "はい、ファンドスケーリングプランは、トレーダーが無料でアカウントのサイズを増加させることができます。"
          },
          {
            question: "プレミアムプランはファンドスケーリングプランと互換性がありますか？",
            answer: "はい、互換性があります。"
          }
        ]
      },
      {
        name: "プレミアムプラン",
        qaList: [
          {
            question: "エクスクルーシブ特典にアクセスするにはどうすればよいですか？",
            answer: "エクスクルーシブ特典の資格があるのは、以下の基準を満たした場合です：",
            lis: ["レベル3を4ヶ月連続で維持すること", "総利益が10%以上であること", "少なくとも4回の支払いを完了すること", "利益を維持すること"]
          },
          {
            question: "エクスクルーシブ特典は何を提供しますか？",
            answer: "エクスクルーシブ特典には以下の利点があります：",
            lis: [
              "現在のチャレンジと同じレベルの無料チャレンジを受けることができます",
              "利益分配報酬が90%に増加します",
              "$400,000の伝説レベルのチャレンジを直接購入する権限を解除します",
              "すべてのチャレンジで10%の割引を享受できます",
              "5%の追加転送ボーナス（現在のチャレンジから別のチャレンジに利益を転送する際に適用されます）",
              "チャレンジアカウントサイズの制限が$600,000に増加します",
              "レベル3のチャレンジと1回だけ組み合わせることができます"
            ]
          },
          {
            question: "エクスクルーシブ特典を申し込むための特定のアカウントサイズの要件はありますか？",
            answer: "いいえ。"
          },
          {
            question: "エリート特典にアクセスするにはどうすればよいですか？",
            answer: "エリート特典の資格があるのは、以下の基準を満たした場合です：",
            lis: [
              "エリート特典の状態を最低3ヶ月維持すること",
              "総利益が12%以上であること",
              "少なくとも3回の支払いを完了すること",
              "初期のチャレンジアカウントの残高が$400,000以上であること",
              "利益を維持すること"
            ]
          },
          {
            question: "エリート特典は何を提供しますか？",
            answer: "エリート特典には以下の利点があります：",
            lis: [
              "チャレンジアカウントの残高制限が$1,000,000に増加します",
              "最大日次ドローダウン制限なし",
              "高速な支払い",
              "評価が成功した場合、MFTチームに参加する機会があります"
            ]
          },
          {
            question: "四つの$100,000のMFTアカウントを一つの$400,000のMFTアカウントに統合して最高レベルに申し込むことはできますか？",
            answer: "いいえ。初期のチャレンジアカウントのサイズは$400,000以上でなければなりません。これを達成するには、$200,000の初期サイズのチャレンジと、初期サイズが$200,000を超える別のチャレンジを組み合わせることができます。"
          },
          {
            question: "プレミアムプランに参加した場合、それを永久に保持できますか？",
            answer: "いいえ。特定の失敗があった場合、プレミアムプランの特典は取り消されます。"
          },
          {
            question: "どのような場合にプレミアムプランの特典がキャンセルされますか？",
            answer: "プレミアムプランの特典は、以下の条件に該当する場合に取り消されます：",
            ulList: [
              {
                txt: "エクスクルーシブ特典は、以下のいずれかの条件が満たされた場合に取り消されます：",
                lis: ["特典に関連するチャレンジが失敗した場合", "レベル3のフェーズ中に他の3つのチャレンジで失敗した場合", "契約条項に違反した場合"]
              },
              {
                txt: "エリート特典は、以下のいずれかの条件が満たされた場合に取り消されます：",
                lis: ["この特典を保持したままチャレンジを完了できなかった場合", "チャレンジに関連するエリート特典が取り消された場合", "契約条項に違反した場合"]
              }
            ]
          }
        ]
      },
      {
        name: "プラットフォーム",
        qaList: [
          {
            question: "取引に使用できるプラットフォームは？",
            answer: "MFTはMT5とMC Marketsの両方のプラットフォームでの取引をサポートしています。どちらを使用してもかまいません。これらの取引プラットフォームを使用できます。"
          },
          {
            question: "アカウントのサイズはどうなっていますか？",
            answer: "アカウントサイズは、チャレンジレベルによって異なります。状況に応じて以下のように選択できます：",
            lis: [
              "Proficient（熟練者）：アカウントサイズ $10,000",
              "Advanced（上級者）：アカウントサイズ $50,000",
              "Expert（専門家）：アカウントサイズ $100,000",
              "Master（マスター）：アカウントサイズ $200,000"
            ]
          },
          {
            question: "チャレンジアカウントを変更できますか？",
            answer: "いいえ、変更できません。"
          },
          {
            question: "取引プラットフォームはどのデバイスに対応していますか？",
            answer: "MFTはMT5とMC Marketsの両方のプラットフォームで取引をサポートしています。MT5プラットフォームは、Android、iOS、Windows、Macを含むさまざまなデバイスに対応しています。MC Marketsプラットフォームは、ダウンロード不要のウェブベースの取引プラットフォームと、Android/iOSのモバイルアプリ、H5サポートを提供しています。"
          },
          {
            question: "MT5取引プラットフォームの利点は何ですか？",
            answer: "MT5取引プラットフォームの利点は以下の通りです：",
            lis: [
              "包括的な市場分析ツール",
              "複数資産の取引",
              "柔軟な注文タイプ",
              "高度なアルゴリズム取引",
              "複数のタイムゾーン対応",
              "多言語対応",
              "クロスプラットフォーム対応",
              "ワンクリック取引",
              "完全にカスタマイズ可能なチャート"
            ]
          },
          {
            question: "MC Markets取引プラットフォームの利点は何ですか？",
            answer: "MC Markets取引プラットフォームの利点は以下の通りです：",
            lis: [
              "複数の分析ツール",
              "MT5取引プラットフォームとの統合",
              "高速で効率的な実行",
              "カスタマイズ可能な取引ワークスペース",
              "安全で簡単な入金/出金",
              "市場アラート",
              "幅広い取引商品",
              "強力な市場深度システム",
              "ユーザーフレンドリーな取引ページレイアウト",
              "クロスプラットフォーム対応"
            ]
          },
          {
            question: "プラットフォームはデモアカウントや実際のアカウントを提供していますか？",
            answer: "MFTは金融機関ではなく、金融商品やサービスを提供したり推奨したりすることはありません。すべての取引アカウントは、第三者の取引プラットフォームによって提供されます。すべての取引活動は、シミュレーション環境内で行われます。"
          }
        ]
      },
      {
        name: "取引活動制限",
        qaList: [
          {
            question: "システムエラーを悪用できますか？",
            answer: "いいえ。システムのエラー（たとえば、価格表示の誤りや更新の遅れ）を意図的または偶発的に利用する取引戦略は、禁止されています。"
          },
          {
            question: "取引を操作できますか？",
            answer: "いいえ。取引を個別に、または他の人と協力して操作すること、異なるアカウントや異なる法人が所有するアカウント間で反対のポジションを同時に取るなど、市場を操作する意図がある場合は、禁止されています。"
          },
          {
            question: "ニューストレーディングは許可されていますか？",
            answer: "いいえ。主要なグローバルニュースやマクロ経済イベント、企業の報告書、決算発表の前後15分以内に新しいポジションを開くニューストレーディングは禁止されています。"
          },
          {
            question: "ハイフリークエンシートレーディングは許可されていますか？",
            answer: "いいえ。特に数秒以内に取引を完了するハイフリークエンシートレーディング戦略は、禁止されています。"
          },
          {
            question: "トレーディングロボットの使用は許可されていますか？",
            answer: "いいえ。第三者から提供されたトレーディングロボット（EA）の使用、特にシグナルコピー取引、短期スキャルピング、遅延裁定取引、逆裁定取引、ヘッジ裁定取引は、禁止されています。"
          },
          {
            question: "アービトラージ取引は許可されていますか？",
            answer: "いいえ。価格差を利用したアービトラージ取引は、禁止されています。"
          },
          {
            question: "他人の代理で取引することは許可されていますか？",
            answer: "いいえ。MFTでは、プロとして、またはその他の立場で他人の代理で取引を行うことは許可されていません。"
          }
        ]
      }
    ]
  },
  "de-de": {
    title: "FAQs",
    titleKey: "FAQs",
    modules: [
      {
        name: "Grundlegend",
        qaList: [
          {
            question: "Wie registriere ich mich?",
            answer: "Klicken Sie auf die Schaltfläche „Sign Up“ (Anmelden) in der oberen rechten Ecke der MFT-Website (magicfuturetrading.com). Wählen Sie dann die Anmeldung über Ihre E-Mail-Adresse oder Telefonnummer, schließen Sie den Verifizierungsprozess ab und legen Sie Ihr Passwort fest, um die Registrierung abzuschließen."
          },
          {
            question: "Wie melde ich mich an?",
            answer: "Klicken Sie auf „Log In“ (Einloggen) in der oberen rechten Ecke der MFT-Website (magicfuturetrading.com). Wählen Sie die Anmeldung per E-Mail oder Telefon, geben Sie Ihre Daten und Ihr Passwort ein und klicken Sie auf „Log In“, um auf Ihr Konto zuzugreifen."
          },
          {
            question: "Wie registriere ich mich für die Challenge?",
            answer: "Melden Sie sich an, klicken Sie auf „Challenge Now“ (Jetzt herausfordern) in der oberen linken Navigationsleiste, wählen Sie Ihre Herausforderungsstufe aus und schließen Sie die Zahlung ab, um sich zu registrieren."
          },
          {
            question: "Wie nehme ich an der Challenge teil?",
            answer: "Nachdem Sie sich erfolgreich für die Challenge registriert haben, gehen Sie zu „My Challenges“ (Meine Herausforderungen), um Ihr Login-Konto und Passwort für die Handelsplattform zu erhalten. Melden Sie sich dann bei der Handelsplattform an, um die Challenge zu beginnen."
          },
          {
            question: "Wie sehe ich die Belohnungen?",
            answer: "Nach dem Einloggen in Ihr Konto navigieren Sie zu „My Challenges“ (Meine Herausforderungen) und schließen den Upgrade-Withdraw-Prozess ab. Danach können Sie die Belohnungen für die entsprechende Challenge einsehen."
          },
          {
            question: "Können Positionen über Nacht gehalten werden?",
            answer: "Ja."
          },
          {
            question: "Können Positionen über das Wochenende gehalten werden?",
            answer: "Ja."
          }
        ]
      },
      {
        name: "Bewertungsprozess",
        qaList: [
          {
            question: "Warum ist Schritt 1 - Die MFT Challenge im Bewertungsprozess erforderlich?",
            answer: "Die MFT Challenge ist der erste Schritt im Bewertungsprozess und wurde entwickelt, um Ihnen zu helfen, solide Handelsgewohnheiten zu entwickeln. Sie müssen einen simulierten Gewinn von 5 % auf Ihr Anfangskapital erzielen und dabei die maximalen Drawdown-Grenzen einhalten. Nach dem Kauf der MFT Challenge stellen wir Ihnen die Handelsplattform und die notwendigen Werkzeuge zur Verfügung, die Ihnen helfen, als MFT-Trader erfolgreich zu sein. \nSobald Sie alle Anforderungen der Challenge erfüllt haben (Handeltage, Gewinnziel und das Abräumen aller Positionen), steigen Sie in die Verifikationsphase auf."
          },
          {
            question: "Warum ist Schritt 2 - Die MFT Verifikation im Bewertungsprozess erforderlich?",
            answer: "Die Verifikationsphase ist der zweite und letzte Schritt im Bewertungsprozess. Das Ziel dieser Phase ist es, die Konsistenz Ihrer Handelsleistung zu bewerten. Sie müssen einen simulierten Gewinn von 10 % auf Ihr Anfangskapital erzielen und dabei die maximalen Drawdown-Grenzen einhalten. \nSobald Sie alle Handelsziele (Handeltage, Gewinnziel und das Abräumen aller Positionen) erfolgreich erreicht haben und die Überprüfung bestehen, schließen Sie die MFT-Zertifizierung ab und unterschreiben einen Vertrag, um ein MFT-Trader zu werden."
          },
          {
            question: "Wie wird man ein MFT-Trader?",
            answer: "Um ein MFT-Trader zu werden, müssen Sie zwei Schritte abschließen: Zuerst müssen Sie die MFT Challenge (Schritt 1) bestehen und dann die MFT Verifikation (Schritt 2) abschließen. \nSobald Sie den Bewertungs- und Überprüfungsprozess erfolgreich bestehen, erhalten Sie die MFT-Zertifizierung und unterschreiben einen Vertrag, um offiziell ein MFT-Trader zu werden."
          },
          {
            question: "Wie lange dauert es, ein MFT-Trader zu werden?",
            answer: "Um den MFT-Bewertungsprozess abzuschließen und ein MFT-Trader zu werden, müssen Sie mindestens 8 Handelstage Erfahrung haben."
          },
          {
            question: "Was ist die maximale Kontogröße für mein MFT-Konto?",
            answer: "Die maximale Kapitalzuweisung beträgt 2.000.000 USD, mit einem anfänglichen Kontogrößenlimit von 400.000 USD. Sie können das Kontogrößenlimit kostenlos auf 2.000.000 USD durch den Fund Scaling Plan und das Premium-Programm erhöhen."
          }
        ]
      },
      {
        name: "MT5 Handelsplattform",
        qaList: [
          {
            question: "Wie melde ich mich bei MT5 an?",
            answer: "Nachdem Sie MT5 heruntergeladen und installiert haben, verwenden Sie Ihre MFT-Challenge-Zugangsdaten, um sich anzumelden. Für eine Schritt-für-Schritt-Anleitung beziehen Sie sich auf den Anfängerleitfaden."
          },
          {
            question: "Wie starte ich den Handel?",
            answer: "Nachdem Sie Ihr MFT-Konto mit MT5 verknüpft haben, wählen Sie das Produkt aus, das Sie handeln möchten, und doppelklicken Sie mit der linken Maustaste, um mit dem Handel zu beginnen."
          },
          {
            question: "Wie platziere ich eine Order?",
            answer: "Wählen Sie das Instrument aus, das Sie handeln möchten, wählen Sie die Handelsrichtung, den Ordertyp und die Take-Profit- sowie Stop-Loss-Level (optional). Geben Sie schließlich das Handelsvolumen ein und platzieren Sie die Order."
          },
          {
            question: "Wie schließe ich Positionen und storniere Orders?",
            answer: "Sie können eine offene Position im Reiter „Handel“ auswählen, mit der rechten Maustaste klicken und Aktionen wie das Schließen der Position oder das Überprüfen einer Marktorder auswählen."
          }
        ]
      },
      {
        name: "Handelsregeln",
        qaList: [
          {
            question: "Was bedeutet „Profitziel erreichen“?",
            answer: "Um Ihre Challenge zu bestehen und zur nächsten Phase überzugehen, muss Ihr Kontostand das angeforderte Profitziel erreichen, und Sie müssen Ihre Positionen schließen."
          },
          {
            question: "Was bedeutet „Überschreiten des täglichen Drawdowns“?",
            answer: "Der tägliche Drawdown stellt den maximalen Betrag dar, den Sie an einem einzigen Tag verlieren können. Sobald Sie das tägliche Drawdown-Limit erreichen, wird Ihr Konto verletzt und automatisch geschlossen. Wir aktualisieren Ihr neues tägliches Drawdown-Limit täglich um 16:00 CT, wenn der Markt schließt."
          },
          {
            question: "Was bedeutet „Überschreiten des maximalen Drawdowns“?",
            answer: "Der maximale Drawdown stellt den maximalen Betrag dar, den Sie während der gesamten Lebensdauer Ihres Kontos verlieren können. Wenn Ihr Guthaben unter das Max-Drawdown-Limit fällt, wird Ihr Konto automatisch geschlossen, und die Challenge wird als fehlgeschlagen betrachtet."
          },
          {
            question: "Was ist ein „effektiver Handelstag“?",
            answer: "Nur wenn Sie innerhalb eines einzelnen Tages die angegebene Anzahl von Eröffnungs- und Schließgeschäften durchführen, wird dieser Tag als gültiger Handelstag gezählt. Diese Bestimmungen sollen Konsistenz in Ihrem Risikomanagement und Handelsstrategien gewährleisten."
          },
          {
            question: "Wie viele Tage Inaktivität führen zum Scheitern der Challenge?",
            answer: "Wenn Ihr Konto 21 aufeinanderfolgende Tage keine Transaktionsaufzeichnungen aufweist, wird es als inaktiv betrachtet. Laut den Vorschriften werden inaktive Konten geschlossen, und die Challenge wird als gescheitert betrachtet."
          },
          {
            question: "Was ist die Konsistenzregel?",
            answer: "Im Allgemeinen bezieht sich die Konsistenzregel auf das Handeln nach Ihrem eigenen Handelsstil, mit ähnlichen Risikoniveaus und Positionsgrößen."
          },
          {
            question: "Welche Instrumente kann ich handeln und welche Strategien kann ich verwenden?",
            answer: "Ihr Handelsstil liegt ganz bei Ihnen. Solange Ihre Trades den relevanten Regeln entsprechen (wie ordnungsgemäßes Risikomanagement), mit den aktuellen Marktbedingungen übereinstimmen und keine verbotenen Aktivitäten verletzen, werden wir keine Einschränkungen für Ihre Handelsstrategie auferlegen, einschließlich diskretionärem und algorithmischen Handel. Bitte beachten Sie, dass Ihre Handelsweise in der Lage sein sollte, die gleichen Ergebnisse auf einem Live-Konto zu erzielen wie auf Ihrem MFT-Konto."
          }
        ]
      },
      {
        name: "Fonds-Skalierungsplan",
        qaList: [
          {
            question: "Wie kann ich am Fund Scaling Plan teilnehmen?",
            answer: "Die leistungsstärksten MFT-Händler, die die entsprechenden Voraussetzungen erfüllen, kommen für den Fund Scaling Plan in Frage. Die genauen Qualifikationsbedingungen finden Sie auf der Seite zum Fund Scaling Plan: https://magicfuturetrading.com/challenges/fund."
          },
          {
            question: "Was sind die Vorteile des Fund Scaling Plans?",
            answer: "Der Fund Scaling Plan bietet die folgenden Vorteile:\n1.Jede kostenlose Kapitalerhöhung beträgt 25 % der aktuellen Kontogröße, mit einer maximalen kumulativen Erhöhung von bis zu 100 %.\n2.Die gesamte Kapitalzuweisung beträgt bis zu 2.000.000 $."
          },
          {
            question: "Wie viel Kapital kann über den Fonds-Skalierungsplan hinzugefügt werden?",
            answer: "Der Fonds-Skalierungsplan bietet bis zu 1.000.000 $ an zusätzlichem Kapital."
          },
          {
            question: "Ist der Fonds-Skalierungsplan kostenlos?",
            answer: "Ja, der Fund Scaling Plan ermöglicht es Händlern, ihr Konto kostenlos zu erhöhen."
          },
          {
            question: "Ist der Premium-Plan mit dem Fonds-Skalierungsplan kompatibel?",
            answer: "Ja, er ist kompatibel."
          }
        ]
      },
      {
        name: "Premium-Plan",
        qaList: [
          {
            question: "Wie kann ich auf die exklusiven Vorteile zugreifen?",
            answer: "Sie sind für exklusive Vorteile berechtigt, wenn Sie die folgenden Kriterien erfüllen:",
            lis: [
              "Erreichen Sie Level 3 für 4 aufeinanderfolgende Monate",
              "Erzielen Sie einen Gesamtgewinn von mindestens 10%",
              "Führen Sie mindestens 4 Auszahlungen durch",
              "Halten Sie einen profitablen Status"
            ]
          },
          {
            question: "Was bieten die exklusiven Vorteile?",
            answer: "Die exklusiven Vorteile umfassen die folgenden Vorteile:",
            lis: [
              "Erhalten Sie eine kostenlose Herausforderung auf demselben Niveau wie Ihre aktuelle Herausforderung",
              "Gewinnbeteiligung wird auf 90% erhöht",
              "Schalten Sie die Möglichkeit frei, die 400.000 $ Legendary-Level-Herausforderung direkt zu kaufen",
              "Genießen Sie einen 10%igen Rabatt auf alle Herausforderungen",
              "5% zusätzlicher Übertragungsbonus (gilt, wenn Gewinne von Ihrer aktuellen Herausforderung auf eine andere Herausforderung übertragen werden)",
              "Das Limit für die Herausforderungskontogröße erhöht sich auf 600.000 $",
              "Sie können es einmal mit einer anderen Level-3-Herausforderung kombinieren"
            ]
          },
          {
            question: "Gibt es eine spezifische Kontogrößenvoraussetzung, um sich für die exklusiven Vorteile zu bewerben?",
            answer: "Nein."
          },
          {
            question: "Wie kann ich auf die Elite-Vorteile zugreifen?",
            answer: "Sie sind für die Elite-Vorteile berechtigt, wenn Sie die folgenden Kriterien erfüllen:",
            lis: [
              "Halten Sie den Status der Elite-Vorteile für mindestens 3 Monate",
              "Erzielen Sie einen Gesamtgewinn von mindestens 12%",
              "Führen Sie mindestens 3 Auszahlungen durch",
              "Das anfängliche Herausforderungskonto muss mindestens 400.000 $ betragen",
              "Halten Sie einen profitablen Status"
            ]
          },
          {
            question: "Was bieten die Elite-Vorteile?",
            answer: "Die Elite-Vorteile umfassen die folgenden Vorteile:",
            lis: [
              "Das Limit für die Herausforderungskontogröße wird auf 1.000.000 $ erhöht",
              "Kein maximaler Tagesverlust",
              "Schnelle Auszahlung",
              "Nach erfolgreicher Bewertung haben Sie die Möglichkeit, unserem MFT-Team beizutreten"
            ]
          },
          {
            question: "Kann ich vier 100.000 $ MFT-Konten zu einem einzigen 400.000 $ MFT-Konto kombinieren, um mich für das höchste Niveau zu bewerben?",
            answer: "Nein. Die anfängliche Herausforderungskontogröße muss mindestens 400.000 $ betragen, was durch die Kombination einer Herausforderung mit einer anfänglichen Größe von 200.000 $ und einer anderen Herausforderung mit einer anfänglichen Größe von mehr als 200.000 $ erreicht werden kann."
          },
          {
            question: "Kann ich den Premium-Plan nach dem Beitritt dauerhaft behalten?",
            answer: "Nein. Bei bestimmten Misserfolgen werden Ihre Premium-Plan-Vorteile widerrufen."
          },
          {
            question: "Unter welchen Umständen können meine Premium-Plan-Vorteile storniert werden?",
            answer: "In bestimmten Fällen werden die Vorteile des Premium-Plans widerrufen, insbesondere unter den folgenden Bedingungen:",
            ulList: [
              {
                txt: "Die exklusiven Vorteile werden widerrufen, wenn eine der folgenden Bedingungen erfüllt ist:",
                lis: [
                  "Die Herausforderung im Zusammenhang mit den Vorteilen scheitert.",
                  "Während der Level-3-Phase tritt ein Misserfolg bei einer anderen der 3 Herausforderungen auf.",
                  "Verletzung der Vertragsbedingungen."
                ]
              },
              {
                txt: "Die Elite-Vorteile werden widerrufen, wenn eine der folgenden Bedingungen erfüllt ist:",
                lis: ["Die Herausforderung wird nicht abgeschlossen, während dieser Vorteil gehalten wird.", "Die mit der Herausforderung verbundenen Elite-Vorteile werden widerrufen.", "Verletzung der Vertragsbedingungen."]
              }
            ]
          }
        ]
      },
      {
        name: "Plattformen",
        qaList: [
          {
            question: "Welche Plattformen kann ich für den Handel nutzen?",
            answer: "MFT unterstützt den Handel auf den Plattformen MT5 und MC Markets. Du kannst jede dieser Plattformen verwenden."
          },
          {
            question: "Wie groß sind die Konten?",
            answer: "Die Kontogröße variiert je nach Schwierigkeitsgrad des Challenges. Du kannst je nach deiner Situation zwischen den folgenden Optionen wählen:",
            lis: [
              "Proficient: Kontogröße von 10.000 $",
              "Advanced: Kontogröße von 50.000 $",
              "Expert: Kontogröße von 100.000 $",
              "Master: Kontogröße von 200.000 $"
            ]
          },
          {
            question: "Kann ich mein Challenge-Konto ändern?",
            answer: "Nein, das ist nicht möglich."
          },
          {
            question: "Welche Geräte werden von den Handelsplattformen unterstützt?",
            answer: "MFT unterstützt den Handel auf beiden Plattformen, MT5 und MC Markets. Die MT5-Plattform ist mit verschiedenen Geräten kompatibel, darunter Android, iOS, Windows und Mac. Die MC Markets-Plattform bietet eine webbasierte Handelsplattform, die keinen Download erfordert, sowie mobile Apps für Android und iOS und unterstützt auch H5."
          },
          {
            question: "Welche Vorteile bietet die MT5-Handelsplattform?",
            answer: "Die MT5-Plattform bietet folgende Vorteile:",
            lis: [
              "Umfassende Marktanalyse-Tools",
              "Handel mit mehreren Assets",
              "Flexible Orderarten",
              "Fortgeschrittenes algorithmisches Trading",
              "Unterstützung für mehrere Zeitzonen",
              "Mehrsprachige Unterstützung",
              "Plattformübergreifende Kompatibilität",
              "Ein-Klick-Handel",
              "Vollständig anpassbare Charts"
            ]
          },
          {
            question: "Welche Vorteile bietet die MC Markets-Handelsplattform?",
            answer: "Die MC Markets-Plattform bietet folgende Vorteile:",
            lis: [
              "Vielfältige Analysetools",
              "Integration mit der MT5-Handelsplattform",
              "Schnelle und effiziente Ausführung",
              "Anpassbare Handelsoberfläche",
              "Sichere und einfache Ein- und Auszahlungen",
              "Marktbenachrichtigungen",
              "Breites Angebot an Handelsinstrumenten",
              "Leistungsstarkes Markttiefensystem",
              "Benutzerfreundliches Layout der Handelsseite",
              "Plattformübergreifende Kompatibilität"
            ]
          },
          {
            question: "Bietet die Plattform Demo- oder Live-Konten an?",
            answer: "MFT ist keine Finanzinstitution und bietet keine finanziellen Produkte oder Dienstleistungen an. Alle Handelskonten werden von Drittanbieter-Handelsplattformen bereitgestellt. Alle Handelsaktivitäten finden in einer simulierten Umgebung statt."
          }
        ]
      },
      {
        name: "Einschränkungen beim Handel",
        qaList: [
          {
            question: "Können Systemfehler ausgenutzt werden?",
            answer: "Nein. Handelsstrategien, die absichtlich oder unbeabsichtigt Fehler im System ausnutzen (wie falsche Preisanzeigen oder verzögerte Updates), gelten als verbotene Handelspraktiken."
          },
          {
            question: "Kann der Handel manipuliert werden?",
            answer: "Nein. Die Manipulation von Trades, sei es einzeln oder in Zusammenarbeit mit anderen (einschließlich über verschiedene Konten oder Konten von unterschiedlichen Entitäten), wie zum Beispiel das gleichzeitige Eingehen entgegengesetzter Positionen mit der Absicht, den Markt zu manipulieren, ist eine verbotene Handelspraktik."
          },
          {
            question: "Ist News Trading erlaubt?",
            answer: "Nein. Das Handeln basierend auf Nachrichten, wie das Eröffnen neuer Positionen innerhalb von 15 Minuten vor oder nach wichtigen globalen Nachrichten, makroökonomischen Ereignissen, Unternehmensberichten oder Quartalszahlen, ist verboten."
          },
          {
            question: "Ist High-Frequency Trading erlaubt?",
            answer: "Nein. Der Einsatz von High-Frequency Trading-Strategien, insbesondere von Trades, die nur wenige Sekunden oder weniger dauern, gilt als verbotene Handelspraktik."
          },
          {
            question: "Ist die Nutzung von Handelsrobotern erlaubt?",
            answer: "Nein. Die Verwendung von Handelsrobotern (EAs), insbesondere von Drittanbietern, wie zum Beispiel Signal-Copy-Trades, kurzfristigem Scalping, verzögertem Arbitrage-Handel, Reverse-Arbitrage oder Hedging-Arbitrage-Trades, ist eine verbotene Handelspraktik."
          },
          {
            question: "Ist Arbitrage-Handel erlaubt?",
            answer: "Nein. Der Arbitrage-Handel, bei dem Preisunterschiede ausgenutzt werden, gilt als verbotene Handelspraktik."
          },
          {
            question: "Ist das Handeln im Auftrag anderer erlaubt?",
            answer: "Nein. MFT gestattet weder den Zugang noch das Handeln im Auftrag anderer, sei es professionell oder in anderer Form."
          }
        ]
      }
    ]
  }
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const faqSearchRef = ref();
    const i18n = useI18n();
    const lang = computed(() => {
      return i18n.locale.value;
    });
    const searchList = ref([]);
    const contentData = ref([]);
    const initData = () => {
      let data = FAQ_DATA[lang.value];
      contentData.value = data;
      let arr = [];
      for (let i in data.modules) {
        arr = arr.concat([...data.modules[i].qaList]);
      }
      searchList.value = arr;
    };
    initData();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "faqWrap" }, _attrs))} data-v-0f50e53e><div class="faq" data-v-0f50e53e>`);
      _push(ssrRenderComponent(faqTitle, {
        context: (_a = unref(FAQ_DATA)[lang.value]) == null ? void 0 : _a.title,
        keyWords: [(_b = unref(FAQ_DATA)[lang.value]) == null ? void 0 : _b.titleKey],
        onClick: ($event) => unref(faqSearchRef).closeSearchList()
      }, null, _parent));
      _push(ssrRenderComponent(faqSearch, {
        ref_key: "faqSearchRef",
        ref: faqSearchRef,
        list: unref(searchList)
      }, null, _parent));
      _push(ssrRenderComponent(faqContent, { data: unref(contentData) }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f50e53e"]]);
export {
  index as default
};
//# sourceMappingURL=index-twSxeOta.js.map
