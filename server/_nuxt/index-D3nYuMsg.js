import { A as APP_DISCORD } from "../server.mjs";
const choosePic1 = "" + __buildAssetsURL("choose-pic1.j7zUZ864.png");
const choosePic2 = "" + __buildAssetsURL("choose-pic2.DyZyTrth.png");
const choosePic3 = "" + __buildAssetsURL("choose-pic3.BdkmrBUC.png");
const choosePic4 = "" + __buildAssetsURL("choose-pic4.DCIryAY5.png");
const choosePic5 = "" + __buildAssetsURL("choose-pic5.CMQdKvwW.png");
const choosePic6 = "" + __buildAssetsURL("choose-pic6.CCQgG8df.png");
const choosePic7 = "" + __buildAssetsURL("choose-pic7.CZMmevgd.png");
const choosePic8 = "" + __buildAssetsURL("choose-pic8.C_OAbaXU.png");
const STEP_LIST = [
  {
    title: "Home.steps.step1.name",
    txt: "Home.steps.step1.text"
  },
  {
    title: "Home.steps.step2.name",
    txt: "Home.steps.step2.text"
  },
  {
    title: "Home.steps.step3.name",
    txt: "Home.steps.step3.text"
  }
];
const TAB_LIST = [
  {
    tab: "Home.challenge.basic",
    id: 0,
    isHot: 0
  },
  {
    tab: "Home.challenge.expert",
    id: 1,
    isHot: 0
  },
  {
    tab: "common.master",
    id: 2,
    isHot: 1
  }
];
const CHALLENGES_BANNER_LIST = [
  {
    txt: "common.banner3"
  },
  {
    txt: "common.banner4"
  },
  {
    txt: "common.banner5"
  }
  // {
  //     txt: "Challenges.banner.list.item3"
  // },
];
const POLICY_LIST = [
  "Challenges.PayoutPolicy.list.li1",
  "Challenges.PayoutPolicy.list.li2",
  "Challenges.PayoutPolicy.list.li3",
  "Challenges.PayoutPolicy.list.li4"
];
const REASON_LIST = [
  "AboutUs.collaborate.list.item1",
  "AboutUs.collaborate.list.item2",
  "AboutUs.collaborate.list.item3"
];
const BASE_RULE_LIST = [
  {
    title: "TradingRules.basicRules.list.profit.title",
    cxt: "TradingRules.basicRules.list.profit.cxt"
  },
  {
    title: "TradingRules.basicRules.list.maximum.title",
    cxt: "TradingRules.basicRules.list.maximum.cxt"
  },
  {
    title: "TradingRules.basicRules.list.daily.title",
    cxt: "TradingRules.basicRules.list.daily.cxt"
  },
  {
    title: "TradingRules.basicRules.list.effective.title",
    cxt: "TradingRules.basicRules.list.effective.cxt"
  },
  {
    title: "TradingRules.basicRules.list.inactive.title",
    cxt: "TradingRules.basicRules.list.inactive.cxt"
  },
  {
    title: "TradingRules.basicRules.list.consistency.title",
    cxt: "TradingRules.basicRules.list.consistency.cxt"
  }
];
const PROHIBITED_LIST = [
  {
    title: "TradingRules.prohibited.list.item1.title",
    cxt: "TradingRules.prohibited.list.item1.cxt"
  },
  {
    title: "TradingRules.prohibited.list.item2.title",
    cxt: "TradingRules.prohibited.list.item2.cxt"
  },
  {
    title: "TradingRules.prohibited.list.item3.title",
    cxt: "TradingRules.prohibited.list.item3.cxt"
  },
  {
    title: "TradingRules.prohibited.list.item4.title",
    cxt: "TradingRules.prohibited.list.item4.cxt"
  },
  {
    title: "TradingRules.prohibited.list.item5.title",
    cxt: "TradingRules.prohibited.list.item5.cxt"
  },
  {
    title: "TradingRules.prohibited.list.item6.title",
    cxt: "TradingRules.prohibited.list.item6.cxt"
  },
  {
    title: "TradingRules.prohibited.list.item7.title",
    cxt: "TradingRules.prohibited.list.item7.cxt"
  },
  {
    title: "TradingRules.prohibited.list.item8.title",
    cxt: "TradingRules.prohibited.list.item8.cxt"
  },
  {
    title: "TradingRules.prohibited.list.item9.title",
    cxt: "TradingRules.prohibited.list.item9.cxt"
  },
  {
    title: "TradingRules.prohibited.list.item10.title",
    cxt: "TradingRules.prohibited.list.item10.cxt"
  },
  {
    title: "TradingRules.prohibited.list.item11.title",
    cxt: "TradingRules.prohibited.list.item11.cxt"
  },
  {
    title: "TradingRules.prohibited.list.item12.title",
    cxt: "TradingRules.prohibited.list.item12.cxt"
  }
];
const PRIVACY = {
  bTitle: "PrivacyRules.title",
  date: "PrivacyRules.date1",
  update: "PrivacyRules.date2"
};
const SERVICE = {
  bTitle: "ServiceRules.title",
  date: "ServiceRules.date1",
  update: "ServiceRules.date2"
};
const PAY_MSG = [
  {
    title: "账户规模",
    content: "$10,000"
  },
  {
    title: "每日回撤",
    content: "4%（$500）"
  },
  {
    title: "利润目标",
    content: "10%（$1000）"
  },
  {
    title: "Steps Count",
    content: "1 Step"
  },
  {
    title: "最大回撤(追踪最高净值)",
    content: "7%（$700）"
  },
  {
    title: "有效的挑战天数",
    content: "5"
  }
];
const PAY_DESC = [
  {
    key: "Steps Count",
    val: "1 Step"
  },
  {
    key: "每日回撤",
    val: "4%($500)"
  },
  {
    key: "最大回撤(追踪最高净值)",
    val: "4%($500)"
  },
  {
    key: "利润目标",
    val: "10%($1000)"
  },
  {
    key: "有效的挑战天数",
    val: "5"
  },
  {
    key: "有效挑战天数最低交易次数",
    val: "5"
  },
  {
    key: "分润",
    val: "高达80%"
  }
];
const PAYMENT_DESC = [
  {
    key: "Bank Name",
    val: "Citi Bank Account Name: Magic Compass Global Ltd."
  },
  {
    key: "IBAN",
    val: "AE1234567890123456789 Swift Details: CITIAEAD"
  },
  {
    key: "Bank Address",
    val: "Singapore xxx xxx xxx Currency: USD"
  }
];
const WHY_CHOOSE_MFT = {
  title: "Home.choose.title",
  children: [
    {
      name: "Home.choose.desc1",
      color: "#96a3b5",
      pic: choosePic1,
      url: "/platform"
    },
    {
      name: "Home.choose.desc2",
      color: "#f5bf3a",
      pic: choosePic2,
      url: "/academy/education?key=2"
    },
    {
      name: "Home.choose.desc3",
      color: "#ff7700",
      pic: choosePic3,
      url: "/user"
    },
    {
      name: "Home.choose.desc4",
      color: "#03cc83",
      pic: choosePic4,
      url: "/academy/calendar"
    },
    {
      name: "Home.choose.desc5",
      color: "#7aadff",
      pic: choosePic5,
      url: "/challenges/fund"
    },
    {
      name: "Home.choose.desc6",
      color: "#2679ce",
      pic: choosePic6,
      url: "/challenges/welfare"
    },
    {
      name: "Home.choose.desc7",
      color: "#c8c1a9",
      pic: choosePic7,
      url: "/academy"
    },
    {
      name: "Home.choose.desc8",
      color: "#ff7700",
      pic: choosePic8,
      url: APP_DISCORD
    }
  ]
};
export {
  BASE_RULE_LIST as B,
  CHALLENGES_BANNER_LIST as C,
  POLICY_LIST as P,
  REASON_LIST as R,
  STEP_LIST as S,
  TAB_LIST as T,
  WHY_CHOOSE_MFT as W,
  PRIVACY as a,
  SERVICE as b,
  PROHIBITED_LIST as c,
  PAY_DESC as d,
  PAYMENT_DESC as e,
  PAY_MSG as f
};
//# sourceMappingURL=index-D3nYuMsg.js.map
