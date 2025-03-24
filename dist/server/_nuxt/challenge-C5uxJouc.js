import { g as get, p as post } from "./useRequest-FImzQkjq.js";
const getCurrencyList = (data) => post(`/api/v1/user_info/lists/currency`, data);
const getCurrencyConverter = (data) => post(`/api/v1/rate/currencyConverter`, data);
const getChallengeList = (data) => post(`/api/v1/roreign/challenge/queryDetailPageList`, data);
const getChallengeDetail = (data) => get(`/api/v1/roreign/challenge/queryDetailInfo`, data);
const getChallengeInfo = () => get(`/api/v1/config/queryList`, {}, { businessName: "MFT" });
const bindChallengeSignUp = (data) => post(`/api/v1/roreign/challenge/signUp`, data);
const bindChallengeCancel = (data) => post(`/api/v1/challenge/cancel`, data);
const bindPayment = (data) => post(`/api/v1/user/center/payment`, data);
const bindReRegistration = (data) => post(`/api/v1/challenge/renewRegistration`, data);
const getOrderList = (data) => post(`/api/v1/challenge/bill`, data);
const getWithDrawList = (data) => post(`/api/v1/roreign/challenge/queryWithdraw`, data);
const bindSettlement = (data) => post(`/api/v1/account/settlement`, data);
const bindSettlementFail = (data) => post(`/api/v1/roreign/challenge/confirmSettlementFail`, data);
const getChallengeScalingPlan = (data) => post(`/api/v1/expandPlansConfig/checkExpandPlansCondition`, data);
const getChallengeSeniorPlan = (data) => post(`/api/v1/seniorPlansConfig/checkSeniorPlanCondition`, data);
const upgradeToScalingPlan = (data) => post(`/api/v1/expandPlansConfig/upgradeToExpandPlans`, data);
const upgradeToSeniorPlan = (data) => post(`/api/v1/seniorPlansConfig/upgradeToSeniorPlan`, data);
const mergeTradeAccountList = (data) => post(`/api/v1/roreign/challenge/mergeTradeAccountList`, data);
const mergeTradeAccount = (data) => post(`/api/v1/roreign/challenge/mergeTradeAccount`, data);
export {
  getCurrencyList as a,
  getCurrencyConverter as b,
  bindPayment as c,
  bindChallengeSignUp as d,
  bindReRegistration as e,
  bindChallengeCancel as f,
  getChallengeInfo as g,
  getChallengeDetail as h,
  getChallengeScalingPlan as i,
  getChallengeSeniorPlan as j,
  upgradeToSeniorPlan as k,
  bindSettlement as l,
  mergeTradeAccount as m,
  mergeTradeAccountList as n,
  bindSettlementFail as o,
  getChallengeList as p,
  getOrderList as q,
  getWithDrawList as r,
  upgradeToScalingPlan as u
};
//# sourceMappingURL=challenge-C5uxJouc.js.map
