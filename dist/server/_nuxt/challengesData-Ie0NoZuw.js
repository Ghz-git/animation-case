import { p as process, m as mftTrader, b as blue, y as yellow } from "./yellow-BzR1n8Bd.js";
const trader1 = "" + __buildAssetsURL("avatar1.OoX5lgbh.png");
const trader2 = "" + __buildAssetsURL("avatar2.CvycmiPz.png");
const trader3 = "" + __buildAssetsURL("avatar3.iwOf36ul.png");
const trader4 = "" + __buildAssetsURL("avatar4.ilLJM49R.png");
const trader5 = "" + __buildAssetsURL("avatar5.C_-DnVc4.png");
const activeProcess = "" + __buildAssetsURL("process_active.CCWxgS0Z.png");
const shadow1 = "" + __buildAssetsURL("shadowPic1.C0_noYts.png");
const activeMftTrader = "" + __buildAssetsURL("mftTrader_active.DRmoiVUD.png");
const shadow2 = "" + __buildAssetsURL("shadowPic2.8A5ZlSZ9.png");
const majorTrader = "" + __buildAssetsURL("majorTrader.DrOKbeTe.png");
const activeMajorTrader = "" + __buildAssetsURL("majorTrader_active.DLjeNhc9.png");
const shadow3 = "" + __buildAssetsURL("shadowPic3.BxhB5kfR.png");
const descMap = [
  {
    key: 1,
    title: "Challenges.ScalingPlan.tableHeader.th4",
    desc: "common.challenge1"
  },
  {
    key: 2,
    title: "Challenges.ScalingPlan.tableHeader.th5",
    desc: "TradingRules.basicRules.list.daily.cxt"
  },
  {
    key: 3,
    title: "Challenges.ScalingPlan.tableHeader.th6",
    desc: "TradingRules.basicRules.list.maximum.cxt"
  },
  {
    key: 4,
    title: "Challenges.ScalingPlan.tableHeader.th15",
    desc: "TradingRules.basicRules.list.effective.cxt"
  },
  {
    key: 5,
    title: "Challenges.ScalingPlan.tableHeader.th16",
    desc: "common.challenge2"
  },
  {
    key: 6,
    title: "common.fee",
    desc: "common.challenge3"
  },
  {
    key: 7,
    title: "Challenges.ScalingPlan.tableHeader.th9",
    desc: "common.challenge4"
  },
  {
    key: 8,
    title: "common.fund50",
    desc: "common.challenge5"
  },
  {
    key: 9,
    title: "common.payout",
    desc: "common.challenge6"
  }
];
const getDescMap = (options) => {
  options.map((item) => {
    descMap.map((desc) => {
      if (item.key === desc.key) {
        Object.assign(item, desc);
      }
    });
  });
  return options;
};
const TOP_TRADER = {
  title: "common.traders",
  desc: "Home.challenge.tips2",
  trader: "common.trader",
  profitsStr: "common.profits",
  list: [
    {
      avatar: trader1,
      fullName: "張家豪",
      firstName: "common.person1.firstName",
      lastName: "common.person1.lastName",
      from: "common.person1.address",
      profits: "$39,843.02",
      shortSpeech: "common.person1.simple",
      longSpeech: "common.person1.desc"
    },
    {
      avatar: trader2,
      fullName: "劉慧君",
      firstName: "common.person2.firstName",
      lastName: "common.person2.lastName",
      from: "common.person2.address",
      profits: "$46,921.91",
      shortSpeech: "common.person2.simple",
      longSpeech: "common.person2.desc"
    },
    {
      avatar: trader3,
      fullName: "Lukas Schwarz",
      firstName: "common.person3.firstName",
      lastName: "common.person3.lastName",
      from: "common.person3.address",
      profits: "$38,135.83",
      shortSpeech: "common.person3.simple",
      longSpeech: "common.person3.desc"
    },
    {
      avatar: trader4,
      fullName: "Eglė Navickaitė",
      firstName: "common.person4.firstName",
      lastName: "common.person4.lastName",
      from: "common.person4.address",
      profits: "$61,596.99",
      shortSpeech: "common.person4.simple",
      longSpeech: "common.person4.desc"
    },
    {
      avatar: trader5,
      fullName: "Lerato Phiri",
      firstName: "common.person5.firstName",
      lastName: "common.person5.lastName",
      from: "common.person5.address",
      profits: "$5,453.80",
      shortSpeech: "common.person5.simple",
      longSpeech: "common.person5.desc"
    }
  ]
};
const HOW_TO_SUCCESS = [
  {
    pic: process,
    activePic: activeProcess,
    headerTitle: "common.process",
    shadow: shadow1,
    stepList: [
      {
        title: "common.step",
        stepNum: 1,
        subTitle: "common.MFTChallenge",
        subTitleColor: "90deg, #FF7700 0%, #FFFFFF 59.5%",
        txt: "common.challengeDesc"
      },
      {
        title: "common.step",
        stepNum: 2,
        subTitle: "common.verification",
        subTitleColor: "90deg, #FF7700 0%, #FFFFFF 59.5%",
        txt: "common.verificationDesc1"
      }
    ],
    btnStr: "common.bar2",
    btnUrl: "/challenges#plan"
  },
  {
    pic: mftTrader,
    activePic: activeMftTrader,
    headerTitle: "Challenges.ScalingPlan.limit",
    shadow: shadow2,
    stepList: [
      {
        title: "common.step",
        stepNum: 3,
        subTitle: "common.trader",
        subTitleColor: "90deg, #66C1FD 0%, #FFFFFF 44.17%",
        txt: "common.verificationDesc2"
      }
    ],
    listTitle: "common.mftAcount",
    listTitleColor: "90deg, #66C1FD 0%, #FFFFFF 44.17%",
    list: [
      {
        content: "common.successDesc1",
        listIcon: blue
      },
      {
        content: "common.successDesc2",
        listIcon: blue
      },
      {
        content: "common.successDesc3",
        listIcon: blue
      },
      {
        content: "common.successDesc4",
        listIcon: blue
      },
      {
        content: "Challenges.ScalingPlan.limit",
        listIcon: blue
      }
    ],
    btnStr: "common.successDesc4",
    btnUrl: "/challenges/fund"
  },
  {
    pic: majorTrader,
    activePic: activeMajorTrader,
    headerTitle: "common.topWelfare",
    shadow: shadow3,
    stepList: [
      {
        title: "common.step",
        stepNum: 4,
        subTitle: "common.proTrader",
        subTitleColor: "90deg, #FFE456 0%, #FFFFFF 47.33%",
        txt: "common.proTrader1"
      }
    ],
    listTitle: "common.proTrader2",
    listTitleColor: "90deg, #FFE456 0%, #FFFFFF 47.33%",
    list: [
      {
        content: "common.proTrader3",
        listIcon: yellow
      },
      {
        content: "common.proTrader4",
        listIcon: yellow
      },
      {
        content: "common.proTrader5",
        listIcon: yellow
      },
      {
        content: "common.proTrader6",
        listIcon: yellow
      }
    ],
    btnStr: "common.bar4",
    btnUrl: "/challenges/welfare"
  }
];
const CHALLENGES_PLAN = {
  title: "common.banner6",
  accountSize: "Battle.size",
  stages: "User.list.th9",
  profits: "Home.challenge.rule4",
  highest: "Home.challenge.tips",
  noLimit: "Challenges.ScalingPlan.limit",
  start: "Login.btn1",
  list: [
    {
      name: "common.proficient",
      amount: "$10,000",
      isVisible: true,
      payment: "$99",
      level: 1,
      levelList: [
        {
          step: 1,
          tag: "common.MFTChallenge",
          children: getDescMap([
            { key: 1, content: "" },
            { key: 2, content: "" },
            { key: 3, content: "" },
            { key: 4, content: "" },
            { key: 5, content: "" },
            { key: 6, content: "common.fund49", isLang: true },
            { key: 7, content: "" }
          ])
        },
        {
          step: 2,
          tag: "common.verification",
          children: getDescMap([
            { key: 1, content: "" },
            { key: 2, content: "" },
            { key: 3, content: "" },
            { key: 4, content: "" },
            { key: 5, content: "" },
            { key: 7, content: "" }
          ])
        },
        {
          step: 3,
          tag: "common.trader",
          children: getDescMap([
            { key: 1, content: "common.fund54", isLang: true },
            { key: 2, content: "" },
            { key: 3, content: "" },
            { key: 8, content: "" },
            {
              key: 9,
              content: "Challenges.ScalingPlan.withdrawable",
              isLang: true
            }
          ])
        }
      ]
    },
    {
      name: "common.advanced",
      amount: "$50,000",
      isVisible: true,
      payment: "$500",
      level: 2,
      levelList: [
        {
          step: 1,
          tag: "common.MFTChallenge",
          children: getDescMap([
            { key: 1, content: "" },
            { key: 2, content: "" },
            { key: 3, content: "" },
            { key: 4, content: "" },
            { key: 5, content: "" },
            { key: 6, content: "common.fund49", isLang: true },
            { key: 7, content: "" }
          ])
        },
        {
          step: 2,
          tag: "common.verification",
          children: getDescMap([
            { key: 1, content: "" },
            { key: 2, content: "" },
            { key: 3, content: "" },
            { key: 4, content: "" },
            { key: 5, content: "" },
            { key: 7, content: "" }
          ])
        },
        {
          step: 3,
          tag: "common.trader",
          children: getDescMap([
            { key: 1, content: "common.fund54", isLang: true },
            { key: 2, content: "" },
            { key: 3, content: "" },
            { key: 8, content: "" },
            {
              key: 9,
              content: "Challenges.ScalingPlan.withdrawable",
              isLang: true
            }
          ])
        }
      ]
    },
    {
      name: "common.expert",
      amount: "$100,000",
      isVisible: true,
      payment: "$999",
      level: 3,
      levelList: [
        {
          step: 1,
          tag: "common.MFTChallenge",
          children: getDescMap([
            { key: 1, content: "" },
            { key: 2, content: "" },
            { key: 3, content: "" },
            { key: 4, content: "" },
            { key: 5, content: "" },
            { key: 6, content: "common.fund49", isLang: true },
            { key: 7, content: "" }
          ])
        },
        {
          step: 2,
          tag: "common.verification",
          children: getDescMap([
            { key: 1, content: "" },
            { key: 2, content: "" },
            { key: 3, content: "" },
            { key: 4, content: "" },
            { key: 5, content: "" },
            { key: 7, content: "" }
          ])
        },
        {
          step: 3,
          tag: "common.trader",
          children: getDescMap([
            { key: 1, content: "common.fund54", isLang: true },
            { key: 2, content: "" },
            { key: 3, content: "" },
            { key: 8, content: "" },
            {
              key: 9,
              content: "Challenges.ScalingPlan.withdrawable",
              isLang: true
            }
          ])
        }
      ]
    },
    {
      name: "common.master",
      amount: "$200,000",
      isVisible: true,
      payment: "$1,699",
      level: 4,
      levelList: [
        {
          step: 1,
          tag: "common.MFTChallenge",
          children: getDescMap([
            { key: 1, content: "" },
            { key: 2, content: "" },
            { key: 3, content: "" },
            { key: 4, content: "" },
            { key: 5, content: "" },
            { key: 6, content: "common.fund49", isLang: true },
            { key: 7, content: "" }
          ])
        },
        {
          step: 2,
          tag: "common.verification",
          children: getDescMap([
            { key: 1, content: "" },
            { key: 2, content: "" },
            { key: 3, content: "" },
            { key: 4, content: "" },
            { key: 5, content: "" },
            { key: 7, content: "" }
          ])
        },
        {
          step: 3,
          tag: "common.trader",
          children: getDescMap([
            { key: 1, content: "common.fund54", isLang: true },
            { key: 2, content: "" },
            { key: 3, content: "" },
            { key: 8, content: "" },
            {
              key: 9,
              content: "Challenges.ScalingPlan.withdrawable",
              isLang: true
            }
          ])
        }
      ]
    }
    // {
    //         name: "傳奇",
    //         amount: "$400,000",
    //         isVisible: false,
    //         payment: "$2,499",
    //         level: 5,
    //         levelList: [
    //                 {
    //                         step: 1,
    //                         tag: "common.MFTChallenge",
    //                         children: getDescMap([
    //                                 {key:1,content:"5%($20,000)"},
    //                                 {key:2,content:"5%($20,000)"},
    //                                 {key:3,content:"10%($40,000)"},
    //                                 {key:4,content:"4"},
    //                                 {key:5,content:"5"},
    //                                 {key:6,content:"common.fund49"},
    //                                 {key:7,content:"$1,500"},
    //                         ])
    //                 },
    //                 {
    //                         step: 2,
    //                         tag: "common.verification",
    //                         children: getDescMap([
    //                                 {key:1,content:"10%($40,000)"},
    //                                 {key:2,content:"5%($20,000)"},
    //                                 {key:3,content:"10%($40,000)"},
    //                                 {key:4,content:"4"},
    //                                 {key:5,content:"5"},
    //                                 {key:7,content:"$1,500"},
    //                         ])
    //                 },
    //                 {
    //                         step: 3,
    //                         tag: "common.trader",
    //                         children: getDescMap([
    //                                 {key:1,content:"common.fund54", isLang: true},
    //                                 {key:2,content:"5%($20,000)"},
    //                                 {key:3,content:"10%($40,000)"},
    //                                 {key:8,content:"80%"},
    //                                 {key:9,content:"Challenges.ScalingPlan.withdrawable"},
    //                         ])
    //                 }
    //         ]
    // }
  ]
};
const EXPANSION_PLANS = {
  bannerTitle: "common.successDesc4",
  bannerDesc: {
    list1: "common.banner7",
    list2: "common.banner8",
    list3: "common.banner9"
  },
  title: "Challenges.ScalingPlan.title",
  desc: "common.fund1",
  read: "common.fund2",
  condition: {
    name: "common.fund3",
    desc1: "common.fund5",
    desc2: "common.fund6",
    desc3: "common.fund7",
    desc4: "common.fund8"
  },
  benefit: {
    name: "common.fund4",
    desc1: "common.fund52",
    desc2: "common.fund9"
  }
};
const EXPANSION_PLANS_CASE = {
  title: "common.fund14",
  desc: "common.fund15",
  table: {
    td1: "common.fund16",
    td2: "common.fund17",
    td3: "common.fund18",
    td4: "common.fund19",
    list: [
      {
        times: "common.fund53",
        timeNum: 0,
        account: "$200,000",
        maxLoss: "$10,000",
        maxLossHistory: "$20,000"
      },
      {
        times: "common.fund53",
        timeNum: 4,
        account: "$250,000",
        maxLoss: "$12,500",
        maxLossHistory: "$25,000"
      },
      {
        times: "common.fund53",
        timeNum: 8,
        account: "$300,000",
        maxLoss: "$15,000",
        maxLossHistory: "$30,000"
      },
      {
        times: "common.fund53",
        timeNum: 12,
        account: "$350,000",
        maxLoss: "$17,500",
        maxLossHistory: "$35,000"
      },
      {
        times: "common.fund53",
        timeNum: 16,
        account: "$400,000",
        maxLoss: "$20,000",
        maxLossHistory: "$40,000"
      }
    ]
  }
};
const WELFARE_PROGRAM = {
  title: "common.bar4",
  desc: "common.fund20",
  conditionStr: "common.fund3",
  benefitStr: "common.fund4",
  benefits: [
    {
      name: "common.fund21",
      condition: [
        {
          str: "common.fund22"
        },
        {
          str: "common.fund6",
          percent: "16"
        },
        {
          str: "common.fund7",
          num: "4"
        },
        {
          str: "common.fund8"
        }
      ],
      benefit: [
        "common.fund23",
        "common.fund24",
        "common.fund25",
        "common.fund26",
        "common.fund27",
        "common.fund28",
        "common.fund29"
      ],
      note: "common.fund30",
      popupStr: [
        "common.fund11",
        "common.fund12",
        "common.fund13"
      ]
    },
    {
      name: "common.fund31",
      condition: [
        {
          str: "common.fund32"
        },
        {
          str: "common.fund6",
          percent: "12"
        },
        {
          str: "common.fund7",
          num: "3"
        },
        {
          str: "common.fund33"
        },
        {
          str: "common.fund8"
        }
      ],
      benefit: [
        "common.fund34",
        "common.fund35",
        "common.fund36",
        "common.fund37"
      ],
      note: "common.fund38",
      popupStr: [
        "common.fund11",
        "common.fund57",
        "common.fund13",
        "common.fund47"
      ]
    },
    {
      name: "common.fund39",
      condition: [
        {
          str: "common.fund40"
        }
      ],
      benefit: [
        "common.fund41",
        "common.fund42",
        "common.fund43",
        "common.fund44",
        "common.fund45",
        "common.fund46"
      ],
      note: "common.fund47",
      popupStr: []
    }
  ]
};
export {
  CHALLENGES_PLAN as C,
  EXPANSION_PLANS as E,
  HOW_TO_SUCCESS as H,
  TOP_TRADER as T,
  WELFARE_PROGRAM as W,
  EXPANSION_PLANS_CASE as a
};
//# sourceMappingURL=challengesData-Ie0NoZuw.js.map
