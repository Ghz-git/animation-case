import { ref } from "vue";
import { g as getChallengeInfo } from "./challenge-C5uxJouc.js";
import { C as CHALLENGES_PLAN } from "./challengesData-Ie0NoZuw.js";
import { C as formatNumberWithCurrency, D as multiply } from "../server.mjs";
import { u as useChallenges } from "./challenges-DfBymhN9.js";
import { isEmpty } from "lodash-es";
const useChallengeInfo = () => {
  const challengesData = ref({
    title: "",
    accountSize: "",
    stages: "",
    profits: "",
    highest: "",
    noLimit: "",
    start: "",
    list: []
  });
  const isEmptyData = ref(true);
  const getChallengeInfoHooks = async (fnc) => {
    try {
      const { data } = await getChallengeInfo() || {};
      const filteredData = data.filter((item) => item.accountType === "MFT");
      const levelToChallengeMap = {};
      CHALLENGES_PLAN.list.forEach((challenge, index) => {
        levelToChallengeMap[challenge.level] = index;
      });
      for (const item of filteredData) {
        const challengeIndex = levelToChallengeMap[item.level];
        if (challengeIndex !== void 0) {
          const challenge = CHALLENGES_PLAN.list[challengeIndex];
          challenge.amount = formatNumberWithCurrency(item.initialAmount, 0);
          challenge.payment = formatNumberWithCurrency(item.enrollmentFee, 0);
          challenge.enrollmentFee = Number(item.enrollmentFee);
          challenge.uid = item.uid;
          challenge.platformName = item.platformName;
          challenge.accountType = item.accountType;
          challenge.accountLeverage = item.accountLeverage;
          challenge.discountEnrollmentFee = item.discountEnrollmentFee;
          challenge.settlementCurrency = item.settlementCurrency;
          challenge.showHotLable = item.showHotLable;
          const updateContent = (key, values, formatter = (value) => value) => {
            for (const [d, value] of values.entries()) {
              if (value !== "null") {
                const formattedValue = formatter(value);
                const current = challenge.levelList[d].children.find((child) => child.key === key);
                if (current) current.content = formattedValue;
              }
            }
          };
          updateContent(1, item.profitTarget.split(","), (value) => {
            const profitPercentage = parseFloat(value);
            return `${profitPercentage}%(${formatNumberWithCurrency(multiply(profitPercentage / 100, item.initialAmount), 0)})`;
          });
          updateContent(2, item.dailyDrawdown.split(","), (value) => {
            const ddPercentage = parseFloat(value);
            return `${ddPercentage}%(${formatNumberWithCurrency(multiply(ddPercentage / 100, item.initialAmount), 0)})`;
          });
          updateContent(3, item.maxDrawdown.split(","), (value) => {
            const mdPercentage = parseFloat(value);
            return `${mdPercentage}%(${formatNumberWithCurrency(multiply(mdPercentage / 100, item.initialAmount), 0)})`;
          });
          updateContent(4, item.validTradingDays.split(","));
          updateContent(5, item.minTransactionTimes.split(","));
          updateContent(7, item.renewSignUpCost.split(","), (value) => formatNumberWithCurrency(value, 0));
          updateContent(8, item.profitSharingRatio.split(","), (value) => `${value}%`);
        }
      }
      challengesData.value = CHALLENGES_PLAN;
      useChallenges().setData(CHALLENGES_PLAN);
    } catch (err) {
      challengesData.value = useChallenges().getData();
    }
    isEmptyData.value = isEmpty(challengesData.value);
    fnc();
  };
  return { challengesData, isEmptyData, getChallengeInfoHooks };
};
export {
  useChallengeInfo as u
};
//# sourceMappingURL=useChallengeInfo-D8ZmMr9V.js.map
