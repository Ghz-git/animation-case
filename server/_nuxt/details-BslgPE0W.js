import { _ as _export_sfc, u as useI18n, J as useRoute, C as formatNumberWithCurrency, a7 as APP_MC_MARKETS, ab as APP_MT5, aa as deepClone, ac as subtract, a as __nuxt_component_2 } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./client-only-Db1Q_2tj.js";
import { _ as __nuxt_component_3, c as challengeCollapseItem, m as mergePopup, a as __nuxt_component_2$1, b as __nuxt_component_1$1, u as useChallengeDetails } from "./mergePopup-DIbIYyzJ.js";
import { _ as __nuxt_component_3$1 } from "./index-Bms85OJQ.js";
import { mergeProps, unref, useSSRContext, ref, computed, resolveDirective, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withDirectives, createTextVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrGetDirectiveProps } from "vue/server-renderer";
import { h as getChallengeDetail, i as getChallengeScalingPlan, j as getChallengeSeniorPlan, u as upgradeToScalingPlan, k as upgradeToSeniorPlan } from "./challenge-C5uxJouc.js";
import "dayjs";
import { E as ElLoading } from "./useRequest-FImzQkjq.js";
import { u as useAccount } from "./useAccount-Ba5l_-oJ.js";
import "hookable";
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
import "destr";
import "ohash";
import "klona";
import "decimal.js";
import "consola";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./doubt-Cq7olve3.js";
import "./index-C-aEYaqc.js";
import "@popperjs/core";
import "./index-DvP72MIN.js";
import "./index-DcwL4Y5F.js";
import "./close-CUfcVM9H.js";
import "./config-81Rc5edc.js";
import "lodash-es";
import "./usePayment-DTlV3mZU.js";
import "./currencyFlag-B5fK02oa.js";
import "./Norway-DkftQzDj.js";
import "./NewZealand-bu8O6zsF.js";
import "./index-BVvjx3G1.js";
import "./event-DsDEmsKp.js";
import "./use-form-item-BALinmg-.js";
import "./directive-o9p6vhNm.js";
const _sfc_main$2 = {
  __name: "detailsItem",
  __ssrInlineRender: true,
  props: {
    list: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const langCondition = (word) => typeof word === "string" && word.includes(".") && isNaN(Number(word.split(".")[1]));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicQuestionTips = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "details-item" }, _attrs))} data-v-ff4e3982><!--[-->`);
      ssrRenderList(__props.list.grouped, (item, idx) => {
        _push(`<div class="li" data-v-ff4e3982><div class="lil" data-v-ff4e3982><!--[-->`);
        ssrRenderList(__props.list.labelArr, (val, key) => {
          _push(`<div class="lil-label" data-v-ff4e3982>${ssrInterpolate(langCondition(val) ? unref(t)(val) : val)}</div>`);
        });
        _push(`<!--]--></div><div class="lir" data-v-ff4e3982><!--[-->`);
        ssrRenderList(item, (i, k) => {
          _push(ssrRenderComponent(_component_publicQuestionTips, {
            txt: i,
            appendClass: ".user-details",
            class: "lir-tips"
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]-->`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/details/detailsItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const detailsItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ff4e3982"]]);
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { userInfo } = useAccount();
    let challengeDetailHooks = ref({});
    const getHooksParam = (detailInfo2) => {
      let res = useChallengeDetails(detailInfo2);
      Object.keys(res).map((key) => {
        challengeDetailHooks.value[key] = res[key];
      });
    };
    const route = useRoute();
    const { t } = useI18n();
    const detailInfo = ref({});
    const upGradeData = ref({});
    const publicUpGradeRef = ref(null);
    const publicTipsRef = ref();
    const publicFailRePaymentRef = ref();
    const tipsContent = ref("");
    ref({
      loading: true,
      list: []
    });
    let mergeList = ref([]);
    const mergePopupRef = ref();
    const collapseTitle = computed(() => {
      let status = detailInfo.value.status == 0 ? t("Battle.tips6") : detailInfo.value.status == 1 ? t("User.tips4") : detailInfo.value.status == 2 ? t("User.tips5") : t("User.tips19");
      return `${t("Battle.txt7")} ${status}`;
    });
    const collapseTitleColor = computed(() => {
      let status = detailInfo.value.status < 2 ? "#50D183" : detailInfo.value.status == 2 ? "#FF4A37" : "#fff";
      return status;
    });
    const setChallengeList = (list) => {
      for (let key in list) {
        detailInfo.value[key] = list[key];
      }
      detailInfo.value.isUserUp = detailInfo.value.isUserUp === "true";
      detailInfo.value.phaseIndex = +detailInfo.value.phaseIndex;
      if (detailInfo.value.phaseIndex === 3) {
        getMergeTradeAccountList(detailInfo);
      }
    };
    const bindShowChallengeDetail = async () => {
      const uid = route.query.uid;
      const param = { tradingChallengeUid: uid };
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      let challengeDetailRes = await getChallengeDetail(param);
      let challengeScalingPlanRes = await getChallengeScalingPlan({ challengeUid: uid });
      let ChallengeSeniorPlanRes = await getChallengeSeniorPlan({ challengeUid: uid });
      if (detailInfo.phaseIndex === 3) {
        getMergeTradeAccountList(detailInfo);
      }
      detailInfo.value = deepClone(challengeDetailRes.data);
      setChallengeList(route.query);
      challengeDetailRes.data.accountNetWrth ? challengeDetailRes.data.accountNetWrth : 0;
      const dsnw = challengeDetailRes.data.dailySettlementNetWrth ? challengeDetailRes.data.dailySettlementNetWrth : 0;
      const ddnw = challengeDetailRes.data.maxDailyDrawdown ? challengeDetailRes.data.maxDailyDrawdown : 0;
      const tdnw = challengeDetailRes.data.maxTotalDrawdown ? challengeDetailRes.data.maxTotalDrawdown : 0;
      detailInfo.value.minAccountDdnw = subtract(dsnw, ddnw);
      detailInfo.value.minAccountTdnw = subtract(dsnw, tdnw);
      detailInfo.value.scalingPlan = challengeScalingPlanRes.data;
      detailInfo.value.seniorPlan = ChallengeSeniorPlanRes.data;
      getHooksParam(detailInfo.value);
      loading.close();
    };
    bindShowChallengeDetail();
    const bindTradeDayTips = (txt) => {
      tipsContent.value = t(txt);
      publicTipsRef.value.shower();
    };
    const upgradeScalingPlan = async (data) => {
      try {
        let res = await upgradeToScalingPlan({ challengeUid: data.uid });
        if (res.code === 200) {
          challengeDetailHooks.value.getExpandPlansAccount(res.data.expandAmount);
          bindTradeDayTips(t("User.txt31"));
        }
      } catch (err) {
        bindTradeDayTips("不滿足升級條件");
      }
    };
    const upgradeSenior = async (data) => {
      try {
        let res = await upgradeToSeniorPlan({ challengeUid: data.uid });
        if (res.code === 200) {
          bindTradeDayTips(t("User.txt31"));
        }
      } catch (err) {
        bindTradeDayTips("不滿足升級條件");
      }
    };
    const getMergeTradeAccountList = async (detailInfo2) => {
      var _a, _b;
      let params = {
        email: ((_a = userInfo.value) == null ? void 0 : _a.data.email) ?? "",
        phone: ((_b = userInfo.value) == null ? void 0 : _b.data.phone) ?? "",
        phoneCode: "",
        userId: detailInfo2.userId ?? ""
      };
      try {
        let res = await mergeTradeAccountList(params);
        mergeList.value = res.data;
      } catch (err) {
        mergeList.value = null;
      }
    };
    const mergeHandler = (detailInfo2) => {
      getMergeTradeAccountList(detailInfo2);
      mergePopupRef.value.show(mergeList.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link_locale = __nuxt_component_2;
      const _component_clientOnly = __nuxt_component_1;
      const _component_publicQuestionTips = __nuxt_component_3;
      const _component_publicUpGrade = __nuxt_component_2$1;
      const _component_publicTipsPopup = __nuxt_component_3$1;
      const _component_publicFailRePayment = __nuxt_component_1$1;
      const _directive_copy = resolveDirective("copy");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-details" }, _attrs))} data-v-a6a35688><div class="user-details_header" data-v-a6a35688>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        class: "back-m",
        to: "/user"
      }, null, _parent));
      _push(`<span class="title-inner" data-v-a6a35688>${ssrInterpolate(unref(t)("Battle.title"))}</span></div><div class="badge" data-v-a6a35688>${ssrInterpolate(unref(t)("common.step", { num: unref(detailInfo).phaseIndex }))}</div><div class="user-details_inner" data-v-a6a35688><div class="boxInner" data-v-a6a35688><div class="accountBox" data-v-a6a35688>`);
      _push(ssrRenderComponent(_component_clientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="textLine" data-v-a6a35688${_scopeId}>`);
            _push2(ssrRenderComponent(_component_publicQuestionTips, {
              txt: { faq: ["User.txt22"], label: unref(t)("common.fund58") },
              appendClass: ".user-details"
            }, null, _parent2, _scopeId));
            _push2(`<span class="value" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(formatNumberWithCurrency)(unref(challengeDetailHooks).totalAccountBalance))}</span></div><div class="textLine" data-v-a6a35688${_scopeId}>`);
            _push2(ssrRenderComponent(_component_publicQuestionTips, {
              txt: { faq: ["User.tips9"], label: unref(t)("Battle.txt1") },
              appendClass: ".user-details"
            }, null, _parent2, _scopeId));
            _push2(`<span class="value" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(detailInfo).eliminatedAccountNetWrth ? unref(formatNumberWithCurrency)(
              unref(detailInfo).eliminatedAccountNetWrth
            ) : unref(formatNumberWithCurrency)(
              unref(detailInfo).accountNetWrth
            ))}</span></div><div class="textLine" data-v-a6a35688${_scopeId}>`);
            _push2(ssrRenderComponent(_component_publicQuestionTips, {
              txt: { faq: ["User.tips10"], label: unref(t)("Battle.txt2") },
              appendClass: ".user-details"
            }, null, _parent2, _scopeId));
            _push2(`<span class="value" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(formatNumberWithCurrency)(
              unref(detailInfo).dailySettlementNetWrth
            ))}</span></div><div class="textLine" data-v-a6a35688${_scopeId}>`);
            _push2(ssrRenderComponent(_component_publicQuestionTips, {
              txt: { faq: ["User.tips11"], label: unref(t)("Battle.li.li2") },
              appendClass: ".user-details"
            }, null, _parent2, _scopeId));
            _push2(`<span class="value" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(formatNumberWithCurrency)(
              unref(detailInfo).maxDailyDrawdown
            ))} (${ssrInterpolate(unref(t)("Battle.tips3", {
              num: unref(formatNumberWithCurrency)(
                unref(detailInfo).minAccountTdnw
              )
            }))}) </span></div><div class="textLine" data-v-a6a35688${_scopeId}>`);
            _push2(ssrRenderComponent(_component_publicQuestionTips, {
              txt: { faq: ["User.tips12"], label: unref(t)("Battle.txt3") },
              appendClass: ".user-details"
            }, null, _parent2, _scopeId));
            _push2(`<span class="value" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(formatNumberWithCurrency)(
              unref(detailInfo).maxTotalDrawdown
            ))} (${ssrInterpolate(unref(t)("Battle.tips3", {
              num: unref(formatNumberWithCurrency)(
                unref(detailInfo).minAccountTdnw
              )
            }))}) </span></div>`);
          } else {
            return [
              createVNode("div", { class: "textLine" }, [
                createVNode(_component_publicQuestionTips, {
                  txt: { faq: ["User.txt22"], label: unref(t)("common.fund58") },
                  appendClass: ".user-details"
                }, null, 8, ["txt"]),
                createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(unref(challengeDetailHooks).totalAccountBalance)), 1)
              ]),
              createVNode("div", { class: "textLine" }, [
                createVNode(_component_publicQuestionTips, {
                  txt: { faq: ["User.tips9"], label: unref(t)("Battle.txt1") },
                  appendClass: ".user-details"
                }, null, 8, ["txt"]),
                createVNode("span", { class: "value" }, toDisplayString(unref(detailInfo).eliminatedAccountNetWrth ? unref(formatNumberWithCurrency)(
                  unref(detailInfo).eliminatedAccountNetWrth
                ) : unref(formatNumberWithCurrency)(
                  unref(detailInfo).accountNetWrth
                )), 1)
              ]),
              createVNode("div", { class: "textLine" }, [
                createVNode(_component_publicQuestionTips, {
                  txt: { faq: ["User.tips10"], label: unref(t)("Battle.txt2") },
                  appendClass: ".user-details"
                }, null, 8, ["txt"]),
                createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                  unref(detailInfo).dailySettlementNetWrth
                )), 1)
              ]),
              createVNode("div", { class: "textLine" }, [
                createVNode(_component_publicQuestionTips, {
                  txt: { faq: ["User.tips11"], label: unref(t)("Battle.li.li2") },
                  appendClass: ".user-details"
                }, null, 8, ["txt"]),
                createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                  unref(detailInfo).maxDailyDrawdown
                )) + " (" + toDisplayString(unref(t)("Battle.tips3", {
                  num: unref(formatNumberWithCurrency)(
                    unref(detailInfo).minAccountTdnw
                  )
                })) + ") ", 1)
              ]),
              createVNode("div", { class: "textLine" }, [
                createVNode(_component_publicQuestionTips, {
                  txt: { faq: ["User.tips12"], label: unref(t)("Battle.txt3") },
                  appendClass: ".user-details"
                }, null, 8, ["txt"]),
                createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                  unref(detailInfo).maxTotalDrawdown
                )) + " (" + toDisplayString(unref(t)("Battle.tips3", {
                  num: unref(formatNumberWithCurrency)(
                    unref(detailInfo).minAccountTdnw
                  )
                })) + ") ", 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="tradeBox-gap" data-v-a6a35688></div><div class="tradeBox" data-v-a6a35688><div class="textLine between" data-v-a6a35688><span class="label" data-v-a6a35688>${ssrInterpolate(unref(t)("Battle.txt4"))}</span>`);
      _push(ssrRenderComponent(_component_publicQuestionTips, {
        txt: { faq: ["User.tips18"], label: unref(t)("Battle.txt5") },
        appendClass: ".user-details",
        alignR: true,
        heightAuto: true
      }, null, _parent));
      _push(`</div><div class="textLine between" data-v-a6a35688><span class="label" data-v-a6a35688>TARGET</span><span class="labell" data-v-a6a35688>${ssrInterpolate(unref(detailInfo).phaseIndex == 3 && unref(detailInfo).status == 0 ? "--" : unref(t)("User.txt40", { day: unref(detailInfo).minTradingDay }))}</span></div><div class="textLine between" data-v-a6a35688><span class="label" data-v-a6a35688>RESULT</span><span class="labell" data-v-a6a35688>${ssrInterpolate(unref(t)("User.txt40", {
        day: unref(detailInfo).currentTradingDay
      }))}</span></div><div class="textLine between" data-v-a6a35688><span class="label" data-v-a6a35688>SUMMARY</span>`);
      if (unref(detailInfo).phaseIndex == 3 && unref(detailInfo).status == 0) {
        _push(`<span class="labell" data-v-a6a35688>${ssrInterpolate(unref(t)("Battle.tips5"))}</span>`);
      } else {
        _push(`<span class="labell" data-v-a6a35688>${ssrInterpolate(unref(detailInfo).tradingDayResult === 0 ? unref(t)("Battle.tips5") : unref(t)("User.list.stu1"))}</span>`);
      }
      _push(`</div></div><div class="tradeBox" data-v-a6a35688><div class="textLine between" data-v-a6a35688><span class="label" data-v-a6a35688>${ssrInterpolate(unref(t)("Battle.txt4"))}</span>`);
      _push(ssrRenderComponent(_component_publicQuestionTips, {
        txt: { faq: ["TradingRules.basicRules.list.profit.cxt"], label: unref(t)("Battle.li.li4") },
        appendClass: ".user-details",
        alignR: true,
        heightAuto: true
      }, null, _parent));
      _push(`</div><div class="textLine between" data-v-a6a35688><span class="label" data-v-a6a35688>TARGET</span><span class="labell" data-v-a6a35688>${ssrInterpolate(unref(detailInfo).phaseIndex == 3 && unref(detailInfo).status == 0 ? "--" : unref(formatNumberWithCurrency)(
        unref(detailInfo).targetProfit
      ))}</span></div><div class="textLine between" data-v-a6a35688><span class="label" data-v-a6a35688>RESULT</span><span class="labell" data-v-a6a35688>${ssrInterpolate(unref(formatNumberWithCurrency)(
        unref(detailInfo).currentProfit
      ))}</span></div><div class="textLine between" data-v-a6a35688><span class="label" data-v-a6a35688>SUMMARY</span>`);
      if (unref(detailInfo).phaseIndex == 3 && unref(detailInfo).status == 0) {
        _push(`<span class="labell" data-v-a6a35688>${ssrInterpolate(unref(formatNumberWithCurrency)(
          unref(detailInfo).currentProfit
        ) > 0 ? unref(t)("Battle.tips5") : unref(t)("User.list.stu1"))}</span>`);
      } else {
        _push(`<span class="labell" data-v-a6a35688>${ssrInterpolate(unref(detailInfo).targetProfitResult === 0 ? unref(t)("Battle.tips5") : unref(t)("User.list.stu1"))}</span>`);
      }
      _push(`</div></div><div class="tradeBox" data-v-a6a35688><div class="textLine between" data-v-a6a35688><span class="label" data-v-a6a35688>${ssrInterpolate(unref(t)("Battle.txt4"))}</span><span class="labell" data-v-a6a35688>${ssrInterpolate(unref(t)("Battle.txt6"))}</span></div><div class="textLine between" data-v-a6a35688><span class="label" data-v-a6a35688>TARGET</span><span class="labell" data-v-a6a35688>--</span></div><div class="textLine between" data-v-a6a35688><span class="label" data-v-a6a35688>RESULT</span><span class="labell" data-v-a6a35688>--</span></div><div class="textLine between" data-v-a6a35688><span class="label" data-v-a6a35688>SUMMARY</span><span class="labell" data-v-a6a35688>${ssrInterpolate(unref(detailInfo).positionResult === 0 ? unref(t)("Battle.tips5") : unref(t)("User.list.stu1"))}</span></div></div><div class="tradeBox-gap" data-v-a6a35688></div>`);
      _push(ssrRenderComponent(challengeCollapseItem, {
        title: collapseTitle.value,
        collapseTitleColor: collapseTitleColor.value,
        isColor: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(detailInfo).status == 2 || unref(detailInfo).status == 3) {
              _push2(`<div class="challengeBox" data-v-a6a35688${_scopeId}><div class="textWrap" data-v-a6a35688${_scopeId}><div class="textLine" data-v-a6a35688${_scopeId}><span class="label" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(t)("Battle.label1"))}</span><span class="${ssrRenderClass([{
                err: unref(detailInfo).dailyDrawdownStatusResult === 1
              }, "value"])}" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(detailInfo).dailyDrawdownStatusResult === 1 ? unref(t)(
                "Battle.label7",
                {
                  price: "1,000"
                }
              ) : unref(t)("User.no"))}</span></div>`);
              {
                _push2(`<!---->`);
              }
              {
                _push2(`<!---->`);
              }
              _push2(`<div class="textLine" data-v-a6a35688${_scopeId}><span class="label" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(t)("Battle.label4"))}</span><span class="${ssrRenderClass([{
                err: unref(detailInfo).maxDrawdownStatusResult === 1
              }, "value"])}" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(detailInfo).maxDrawdownStatusResult === 1 ? unref(t)(
                "Battle.label8",
                {
                  price: "1,000"
                }
              ) : unref(t)("User.no"))}</span></div>`);
              {
                _push2(`<!---->`);
              }
              _push2(`<div class="textLine" data-v-a6a35688${_scopeId}><span class="label" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(t)("Battle.label6"))}</span><span class="${ssrRenderClass([{
                err: unref(detailInfo).untradedDaysStatusResult === 1
              }, "value"])}" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(detailInfo).untradedDaysStatusResult === 1 ? unref(t)("User.yes") : unref(t)("User.no"))}</span></div><div class="textLine" data-v-a6a35688${_scopeId}><span class="label" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(t)("User.against"))}</span><span class="value" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(t)("User.no"))}</span></div></div></div>`);
            } else {
              _push2(`<div class="challengeBox" data-v-a6a35688${_scopeId}><div class="textWrap" data-v-a6a35688${_scopeId}><div class="textLine" data-v-a6a35688${_scopeId}><span class="label" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(t)("Battle.logAccount"))}</span><span${ssrRenderAttrs(mergeProps({
                class: "value copyHover",
                tips: unref(t)("User.copy")
              }, ssrGetDirectiveProps(_ctx, _directive_copy, unref(detailInfo).account)))} data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(detailInfo).account)}`);
              if (unref(detailInfo).account) {
                _push2(`<i class="copy" data-v-a6a35688${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span></div><div class="textLine" data-v-a6a35688${_scopeId}><span class="label" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(t)("Battle.psw"))}</span><span${ssrRenderAttrs(mergeProps({
                class: "value copyHover",
                tips: unref(t)("User.copy")
              }, ssrGetDirectiveProps(_ctx, _directive_copy, unref(detailInfo).password)))} data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(detailInfo).password)}`);
              if (unref(detailInfo).password) {
                _push2(`<i class="copy" data-v-a6a35688${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span></div><div class="textLine" data-v-a6a35688${_scopeId}><span class="label" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(t)("Battle.server"))}</span><span class="value" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(detailInfo).server)}</span></div><div class="textLine" data-v-a6a35688${_scopeId}><span class="label" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(t)("Battle.email"))}</span><span${ssrRenderAttrs(mergeProps({
                class: "value copyHover",
                tips: unref(t)("User.copy")
              }, ssrGetDirectiveProps(_ctx, _directive_copy, unref(detailInfo).email)))} data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(detailInfo).email)}`);
              if (unref(detailInfo).email) {
                _push2(`<i class="copy" data-v-a6a35688${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span></div><div class="textLine" data-v-a6a35688${_scopeId}><span class="label" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(t)("Battle.phone"))}</span><span${ssrRenderAttrs(mergeProps({
                class: "value copyHover",
                tips: unref(t)("User.copy")
              }, ssrGetDirectiveProps(_ctx, _directive_copy, unref(detailInfo).phone)))} data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(detailInfo).phone)}`);
              if (unref(detailInfo).phone) {
                _push2(`<i class="copy" data-v-a6a35688${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span></div></div></div>`);
            }
          } else {
            return [
              unref(detailInfo).status == 2 || unref(detailInfo).status == 3 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "challengeBox"
              }, [
                createVNode("div", { class: "textWrap" }, [
                  createVNode("div", { class: "textLine" }, [
                    createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.label1")), 1),
                    createVNode("span", {
                      class: ["value", {
                        err: unref(detailInfo).dailyDrawdownStatusResult === 1
                      }]
                    }, toDisplayString(unref(detailInfo).dailyDrawdownStatusResult === 1 ? unref(t)(
                      "Battle.label7",
                      {
                        price: "1,000"
                      }
                    ) : unref(t)("User.no")), 3)
                  ]),
                  createCommentVNode("", true),
                  createCommentVNode("", true),
                  createVNode("div", { class: "textLine" }, [
                    createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.label4")), 1),
                    createVNode("span", {
                      class: ["value", {
                        err: unref(detailInfo).maxDrawdownStatusResult === 1
                      }]
                    }, toDisplayString(unref(detailInfo).maxDrawdownStatusResult === 1 ? unref(t)(
                      "Battle.label8",
                      {
                        price: "1,000"
                      }
                    ) : unref(t)("User.no")), 3)
                  ]),
                  createCommentVNode("", true),
                  createVNode("div", { class: "textLine" }, [
                    createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.label6")), 1),
                    createVNode("span", {
                      class: ["value", {
                        err: unref(detailInfo).untradedDaysStatusResult === 1
                      }]
                    }, toDisplayString(unref(detailInfo).untradedDaysStatusResult === 1 ? unref(t)("User.yes") : unref(t)("User.no")), 3)
                  ]),
                  createVNode("div", { class: "textLine" }, [
                    createVNode("span", { class: "label" }, toDisplayString(unref(t)("User.against")), 1),
                    createVNode("span", { class: "value" }, toDisplayString(unref(t)("User.no")), 1)
                  ])
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "challengeBox"
              }, [
                createVNode("div", { class: "textWrap" }, [
                  createVNode("div", { class: "textLine" }, [
                    createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.logAccount")), 1),
                    withDirectives((openBlock(), createBlock("span", {
                      class: "value copyHover",
                      tips: unref(t)("User.copy")
                    }, [
                      createTextVNode(toDisplayString(unref(detailInfo).account), 1),
                      unref(detailInfo).account ? (openBlock(), createBlock("i", {
                        key: 0,
                        class: "copy"
                      })) : createCommentVNode("", true)
                    ], 8, ["tips"])), [
                      [_directive_copy, unref(detailInfo).account]
                    ])
                  ]),
                  createVNode("div", { class: "textLine" }, [
                    createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.psw")), 1),
                    withDirectives((openBlock(), createBlock("span", {
                      class: "value copyHover",
                      tips: unref(t)("User.copy")
                    }, [
                      createTextVNode(toDisplayString(unref(detailInfo).password), 1),
                      unref(detailInfo).password ? (openBlock(), createBlock("i", {
                        key: 0,
                        class: "copy"
                      })) : createCommentVNode("", true)
                    ], 8, ["tips"])), [
                      [_directive_copy, unref(detailInfo).password]
                    ])
                  ]),
                  createVNode("div", { class: "textLine" }, [
                    createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.server")), 1),
                    createVNode("span", { class: "value" }, toDisplayString(unref(detailInfo).server), 1)
                  ]),
                  createVNode("div", { class: "textLine" }, [
                    createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.email")), 1),
                    withDirectives((openBlock(), createBlock("span", {
                      class: "value copyHover",
                      tips: unref(t)("User.copy")
                    }, [
                      createTextVNode(toDisplayString(unref(detailInfo).email), 1),
                      unref(detailInfo).email ? (openBlock(), createBlock("i", {
                        key: 0,
                        class: "copy"
                      })) : createCommentVNode("", true)
                    ], 8, ["tips"])), [
                      [_directive_copy, unref(detailInfo).email]
                    ])
                  ]),
                  createVNode("div", { class: "textLine" }, [
                    createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.phone")), 1),
                    withDirectives((openBlock(), createBlock("span", {
                      class: "value copyHover",
                      tips: unref(t)("User.copy")
                    }, [
                      createTextVNode(toDisplayString(unref(detailInfo).phone), 1),
                      unref(detailInfo).phone ? (openBlock(), createBlock("i", {
                        key: 0,
                        class: "copy"
                      })) : createCommentVNode("", true)
                    ], 8, ["tips"])), [
                      [_directive_copy, unref(detailInfo).phone]
                    ])
                  ])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(detailInfo).phaseIndex === 3) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(challengeCollapseItem, {
          title: `${unref(t)("common.successDesc4")}: ${unref(challengeDetailHooks).fundPlanStep}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="collapseTop" data-v-a6a35688${_scopeId}><!--[-->`);
              ssrRenderList(unref(challengeDetailHooks).fundPlan, (v, idx) => {
                _push2(`<div class="textLine between" data-v-a6a35688${_scopeId}>`);
                _push2(ssrRenderComponent(_component_publicQuestionTips, {
                  txt: { faq: v.faq, label: v.label },
                  appendClass: ".user-details"
                }, null, _parent2, _scopeId));
                _push2(`<span class="labell" data-v-a6a35688${_scopeId}>${ssrInterpolate(v.val)}</span></div>`);
              });
              _push2(`<!--]--></div><div class="collapseContent" data-v-a6a35688${_scopeId}>`);
              _push2(ssrRenderComponent(detailsItem, {
                list: unref(challengeDetailHooks).fundPlanListH5
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`<div class="btnGroup itemBtnGroup" data-v-a6a35688${_scopeId2}>`);
                    if (unref(detailInfo).phaseIndex === 3) {
                      _push3(`<button class="${ssrRenderClass([{ disabled: ((_a = unref(detailInfo).scalingPlan) == null ? void 0 : _a.checkExpandPlansConditionCode) !== "2" }, "btn deep"])}" data-v-a6a35688${_scopeId2}>${ssrInterpolate(unref(t)("User.txt30"))}</button>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "btnGroup itemBtnGroup" }, [
                        unref(detailInfo).phaseIndex === 3 ? (openBlock(), createBlock("button", {
                          key: 0,
                          class: ["btn deep", { disabled: ((_b = unref(detailInfo).scalingPlan) == null ? void 0 : _b.checkExpandPlansConditionCode) !== "2" }],
                          onClick: ($event) => upgradeScalingPlan(unref(detailInfo))
                        }, toDisplayString(unref(t)("User.txt30")), 11, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "collapseTop" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(challengeDetailHooks).fundPlan, (v, idx) => {
                    return openBlock(), createBlock("div", { class: "textLine between" }, [
                      createVNode(_component_publicQuestionTips, {
                        txt: { faq: v.faq, label: v.label },
                        appendClass: ".user-details"
                      }, null, 8, ["txt"]),
                      createVNode("span", { class: "labell" }, toDisplayString(v.val), 1)
                    ]);
                  }), 256))
                ]),
                createVNode("div", { class: "collapseContent" }, [
                  createVNode(detailsItem, {
                    list: unref(challengeDetailHooks).fundPlanListH5
                  }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode("div", { class: "btnGroup itemBtnGroup" }, [
                          unref(detailInfo).phaseIndex === 3 ? (openBlock(), createBlock("button", {
                            key: 0,
                            class: ["btn deep", { disabled: ((_a = unref(detailInfo).scalingPlan) == null ? void 0 : _a.checkExpandPlansConditionCode) !== "2" }],
                            onClick: ($event) => upgradeScalingPlan(unref(detailInfo))
                          }, toDisplayString(unref(t)("User.txt30")), 11, ["onClick"])) : createCommentVNode("", true)
                        ])
                      ];
                    }),
                    _: 1
                  }, 8, ["list"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(challengeCollapseItem, {
          title: `${unref(t)("common.bar4")}: ${unref(t)(unref(challengeDetailHooks).seniorLev1)}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="collapseTop" data-v-a6a35688${_scopeId}><!--[-->`);
              ssrRenderList(unref(challengeDetailHooks).premiumPlan, (v, idx) => {
                _push2(`<div class="textLine between" data-v-a6a35688${_scopeId}>`);
                _push2(ssrRenderComponent(_component_publicQuestionTips, {
                  txt: { faq: v.faq, label: v.label },
                  appendClass: ".user-details"
                }, null, _parent2, _scopeId));
                _push2(`<span class="labell" data-v-a6a35688${_scopeId}>${ssrInterpolate(unref(t)(v.val))}</span></div>`);
              });
              _push2(`<!--]--></div><div class="collapseContent" data-v-a6a35688${_scopeId}>`);
              _push2(ssrRenderComponent(detailsItem, {
                list: unref(challengeDetailHooks).premiumPlanListH5
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b, _c, _d;
                  if (_push3) {
                    _push3(`<div class="btnGroup itemBtnGroup" data-v-a6a35688${_scopeId2}>`);
                    if (unref(detailInfo).phaseIndex === 3 && unref(challengeDetailHooks).seniorLev2 === "User.txt14") {
                      _push3(`<button class="${ssrRenderClass([{ disabled: !unref(challengeDetailHooks).btnUpgradeSenior }, "btn deep"])}" data-v-a6a35688${_scopeId2}>${ssrInterpolate(unref(t)("User.txt36"))}</button>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(mergeList) && unref(detailInfo).phaseIndex === 3 && unref(challengeDetailHooks).seniorLev1 === "User.txt32") {
                      _push3(`<button class="${ssrRenderClass([{ disabled: ((_a = unref(mergeList)) == null ? void 0 : _a.length) === 0 }, "btn deep"])}" data-v-a6a35688${_scopeId2}>${ssrInterpolate(((_b = unref(mergeList)) == null ? void 0 : _b.length) === 0 ? unref(t)("User.txt37") : unref(t)("Home.challenge.text11"))}</button>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "btnGroup itemBtnGroup" }, [
                        unref(detailInfo).phaseIndex === 3 && unref(challengeDetailHooks).seniorLev2 === "User.txt14" ? (openBlock(), createBlock("button", {
                          key: 0,
                          class: ["btn deep", { disabled: !unref(challengeDetailHooks).btnUpgradeSenior }],
                          onClick: ($event) => upgradeSenior(unref(detailInfo))
                        }, toDisplayString(unref(t)("User.txt36")), 11, ["onClick"])) : createCommentVNode("", true),
                        unref(mergeList) && unref(detailInfo).phaseIndex === 3 && unref(challengeDetailHooks).seniorLev1 === "User.txt32" ? (openBlock(), createBlock("button", {
                          key: 1,
                          class: ["btn deep", { disabled: ((_c = unref(mergeList)) == null ? void 0 : _c.length) === 0 }],
                          onClick: ($event) => mergeHandler(unref(detailInfo))
                        }, toDisplayString(((_d = unref(mergeList)) == null ? void 0 : _d.length) === 0 ? unref(t)("User.txt37") : unref(t)("Home.challenge.text11")), 11, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "collapseTop" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(challengeDetailHooks).premiumPlan, (v, idx) => {
                    return openBlock(), createBlock("div", { class: "textLine between" }, [
                      createVNode(_component_publicQuestionTips, {
                        txt: { faq: v.faq, label: v.label },
                        appendClass: ".user-details"
                      }, null, 8, ["txt"]),
                      createVNode("span", { class: "labell" }, toDisplayString(unref(t)(v.val)), 1)
                    ]);
                  }), 256))
                ]),
                createVNode("div", { class: "collapseContent" }, [
                  createVNode(detailsItem, {
                    list: unref(challengeDetailHooks).premiumPlanListH5
                  }, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        createVNode("div", { class: "btnGroup itemBtnGroup" }, [
                          unref(detailInfo).phaseIndex === 3 && unref(challengeDetailHooks).seniorLev2 === "User.txt14" ? (openBlock(), createBlock("button", {
                            key: 0,
                            class: ["btn deep", { disabled: !unref(challengeDetailHooks).btnUpgradeSenior }],
                            onClick: ($event) => upgradeSenior(unref(detailInfo))
                          }, toDisplayString(unref(t)("User.txt36")), 11, ["onClick"])) : createCommentVNode("", true),
                          unref(mergeList) && unref(detailInfo).phaseIndex === 3 && unref(challengeDetailHooks).seniorLev1 === "User.txt32" ? (openBlock(), createBlock("button", {
                            key: 1,
                            class: ["btn deep", { disabled: ((_a = unref(mergeList)) == null ? void 0 : _a.length) === 0 }],
                            onClick: ($event) => mergeHandler(unref(detailInfo))
                          }, toDisplayString(((_b = unref(mergeList)) == null ? void 0 : _b.length) === 0 ? unref(t)("User.txt37") : unref(t)("Home.challenge.text11")), 11, ["onClick"])) : createCommentVNode("", true)
                        ])
                      ];
                    }),
                    _: 1
                  }, 8, ["list"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="btnGroup" data-v-a6a35688>`);
      if (unref(detailInfo).status == 0) {
        _push(`<!--[-->`);
        if (unref(challengeDetailHooks).btnUpgradeSettlement) {
          _push(`<button class="btn deep" data-v-a6a35688>${ssrInterpolate(unref(t)("User.btn5"))}</button>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(challengeDetailHooks).btnMT5) {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_nuxt_link_locale, {
            class: "btn deep",
            to: `${unref(APP_MC_MARKETS)}/en-US/login?actionType=login`,
            target: "_blank"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`MC Markets`);
              } else {
                return [
                  createTextVNode("MC Markets")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_nuxt_link_locale, {
            class: "btn light",
            to: unref(APP_MT5),
            target: "_blank"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`MT5`);
              } else {
                return [
                  createTextVNode("MT5")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(challengeDetailHooks).btnSettlement) {
          _push(`<button class="btn deep" data-v-a6a35688>${ssrInterpolate(unref(t)("User.btn7"))}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(detailInfo).status == 2) {
        _push(`<div class="detail-fail" data-v-a6a35688><button class="btn deep" data-v-a6a35688>${ssrInterpolate(unref(t)("User.btn7"))}</button>`);
        if (unref(detailInfo).phaseIndex != 3) {
          _push(`<button class="btn light" data-v-a6a35688>${ssrInterpolate(unref(t)("User.btn6"))}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_publicUpGrade, {
        ref_key: "publicUpGradeRef",
        ref: publicUpGradeRef,
        data: unref(upGradeData)
      }, null, _parent));
      _push(ssrRenderComponent(_component_publicTipsPopup, {
        ref_key: "publicTipsRef",
        ref: publicTipsRef,
        content: unref(tipsContent),
        maskBG: "rgba(0,0,0,0)",
        isBtnGroup: false
      }, null, _parent));
      _push(ssrRenderComponent(_component_publicFailRePayment, {
        ref_key: "publicFailRePaymentRef",
        ref: publicFailRePaymentRef,
        data: unref(detailInfo)
      }, null, _parent));
      _push(ssrRenderComponent(mergePopup, {
        ref_key: "mergePopupRef",
        ref: mergePopupRef
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/details/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a6a35688"]]);
const _sfc_main = {
  __name: "details",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_userDetails = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "details" }, _attrs))} data-v-b3aae23d>`);
      _push(ssrRenderComponent(_component_userDetails, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const details = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b3aae23d"]]);
export {
  details as default
};
//# sourceMappingURL=details-BslgPE0W.js.map
