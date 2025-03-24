import { E as ElTable, a as ElPagination, b as ElTableColumn, c as ElInfiniteScroll } from "./el-checkbox-BJ_Y9WCM.js";
import { c as challengeCollapseItem, m as mergePopup, u as useChallengeDetails, _ as __nuxt_component_3$1, b as __nuxt_component_1$1, a as __nuxt_component_2$1 } from "./mergePopup-DIbIYyzJ.js";
import { _ as __nuxt_component_3 } from "./index-Bms85OJQ.js";
import "dayjs";
import { E as ElLoading } from "./useRequest-FImzQkjq.js";
import { v as vLoading } from "./directive-o9p6vhNm.js";
import { _ as _export_sfc, u as useI18n, C as formatNumberWithCurrency, a7 as APP_MC_MARKETS, ab as APP_MT5, a as __nuxt_component_2, G as ElMessage, a6 as formatterTimeZone, aa as deepClone, ac as subtract } from "../server.mjs";
/* empty css                */
import { toRefs, ref, computed, unref, useSSRContext, mergeProps, resolveDirective, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, createCommentVNode, withDirectives, renderList } from "vue";
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrGetDirectiveProps, ssrRenderStyle } from "vue/server-renderer";
import { b as battleBackLine } from "./backLine-s-8UBp52.js";
import { _ as _imports_0$2 } from "./doubt-Cq7olve3.js";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import { u as upgradeToScalingPlan, k as upgradeToSeniorPlan, n as mergeTradeAccountList, o as bindSettlementFail, p as getChallengeList, h as getChallengeDetail, i as getChallengeScalingPlan, j as getChallengeSeniorPlan } from "./challenge-C5uxJouc.js";
import { _ as __nuxt_component_0$1 } from "./index-DcwL4Y5F.js";
import { _ as __nuxt_component_1 } from "./client-only-Db1Q_2tj.js";
import { E as ElTooltip } from "./index-C-aEYaqc.js";
/* empty css                   */
import { u as useAccount } from "./useAccount-Ba5l_-oJ.js";
import { u as useChallenges } from "./challenges-DfBymhN9.js";
import { debounce } from "lodash-es";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "decimal.js";
import "lodash-unified";
import "./use-form-item-BALinmg-.js";
import "@vue/shared";
import "@vueuse/core";
import "./event-DsDEmsKp.js";
import "./index-DV4HU-o-.js";
import "@popperjs/core";
import "normalize-wheel-es";
import "./close-CUfcVM9H.js";
import "./config-81Rc5edc.js";
import "./usePayment-DTlV3mZU.js";
import "./currencyFlag-B5fK02oa.js";
import "./Norway-DkftQzDj.js";
import "./NewZealand-bu8O6zsF.js";
import "./index-BVvjx3G1.js";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "@vue/devtools-api";
import "cookie-es";
import "ohash";
import "consola";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./back-Dn6PN45-.js";
import "./index-DvP72MIN.js";
const _imports_0$1 = "" + __buildAssetsURL("tipsPic.D20dUdzy.png");
const _imports_0 = "" + __buildAssetsURL("totalBG-m.X00Jji7E.png");
const _imports_1 = "" + __buildAssetsURL("totalBG.BzryuZ4Y.png");
const _sfc_main$5 = {
  __name: "totalBox",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["callBtn"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { data } = toRefs(props);
    const { t } = useI18n();
    const tipsPopupRef = ref(null);
    const isMobile = computed(() => {
      return useCheckMobile().getItem();
    });
    const tipStr = ref("");
    tipStr.value = t("User.txt53") + "\n" + t("User.txt54");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicTipsPopup = __nuxt_component_3;
      _push(`<!--[--><div class="totalBox" data-v-deb4ec38>`);
      if (unref(isMobile)) {
        _push(`<img class="i" alt=""${ssrRenderAttr("src", _imports_0)} data-v-deb4ec38>`);
      } else {
        _push(`<img class="i" alt=""${ssrRenderAttr("src", _imports_1)} data-v-deb4ec38>`);
      }
      _push(`<div class="textWrap" data-v-deb4ec38><div class="con" data-v-deb4ec38><p class="title" data-v-deb4ec38>${ssrInterpolate(unref(t)("User.total"))}</p><p class="total" data-v-deb4ec38>${ssrInterpolate(unref(formatNumberWithCurrency)(unref(data).total))}</p></div><div class="con" data-v-deb4ec38><p class="title" data-v-deb4ec38>${ssrInterpolate(unref(t)("User.num"))}</p><p class="total" data-v-deb4ec38>${ssrInterpolate(unref(data).times)}</p></div><div class="con" data-v-deb4ec38><p class="title cursor" data-v-deb4ec38>${ssrInterpolate(unref(t)("User.txt43"))}<img class="icon" alt=""${ssrRenderAttr("src", _imports_0$2)} data-v-deb4ec38></p><p class="total" data-v-deb4ec38>${ssrInterpolate(unref(formatNumberWithCurrency)(unref(data).maxScale))}</p></div></div><button class="tbButton" data-v-deb4ec38>${ssrInterpolate(unref(t)("Login.btn1"))}</button></div>`);
      _push(ssrRenderComponent(_component_publicTipsPopup, {
        ref_key: "tipsPopupRef",
        ref: tipsPopupRef,
        isSingleBtn: "",
        content: unref(tipStr),
        textAlign: "left",
        isBtnGroup: false
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/home/totalBox.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const battleTotalBox = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-deb4ec38"]]);
const stepIcon1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMeSURBVHgB7ZbLUhNBFIb/M7lwLYVSF7oJ8Qlg4drkBSzLci88gY8ALFy7doXlC6BPAAv3wbWFIYXlgksNCwNCJXPs0z090wMTSTK9wKr8VU0Pk57ur/9z+gJMNNFExcXt9gI8KYAH8WnnLR93QsxRyEedFoe/aigoQkHx8eFzcH8XRGxeMKnnEL3oFT2u72JMFXcs6jWTZ4GCAmReRIl2lHtvMKaKgxFqsVtkanaj8FGFeB1jqDgYKyCOVOHYMUGMw6reqr/r48AVBwuoplOVDKWG0Xlm0VjKxqhwPkJpgLR3kl/OgmK2bXhUOB+hTBGtU+T84sIK3Elna5huPexjEj7K1jrfEhjSjlkfI14VOA7/vRkP3Me43VoCX2zh6nxZdb6QtBYfgpIqFWBqVpV7wPQ8UJ5W78pA/wr401XtItPWfqO/pzj/dP0NXW5SvX42NBi3tpdQnWmpPSp/VqSMLleB6pyCug/MKLjKjAGjuMuuGi/qp/+zMyInkAPh8kM5NftedboAmzB0vb5tajCwbq458zZwOsTLmKftvM/LuZ0GpZd6tqKvH4Cj7+pdYJyqPQNWXqeQg8iCIItO16aiHYtklg05W2nxSed2MLBYa8IYHgIXIbS5geon/JkCUXasjGQSyYqMTbM5ZyyLT4r8iQ1wrLwH6jX084t3OYNSCjTIuN6lPTudb5KoxosgkDad625pBOSpgjVQ6Swdza2dgSg2g3Ezky677Gy+GkUf8LYjA3qASrWRh5ALRvXmAai/ouA+65Um+aK3CFurQiUTriAOsTzL2JKb56HUlIE1kHaG4tiBWtnNPLeS5kXEJ+0dVTXsePG1xzjCnB7oOtXse+zh9+A9TOTlBmuIHAgi9xez79ubB/PubVCiMvxwuQd3nD/xGjR7loRa4vyJHj5dHaZHH46dZaAC4iThMw4OD+UPLE1zTraINNklkBujQIk8hJLdu0N6MHKy42/Sg/omRpSHiyKHNr1v/Ma0MQ4UvIBF0ZfMqpO8EsiI1ujReFDexMf76ma6z3z6Q0pbXQKXcVckN1I+ukNAE030v+ovQ61ZczndiOwAAAAASUVORK5CYII=";
const stepIcon2 = "" + __buildAssetsURL("stepIcon2.FQw0RzoX.png");
const stepIcon3 = "" + __buildAssetsURL("stepIcon3.DfN-Hr7n.png");
const stepIcon4 = "" + __buildAssetsURL("stepIcon4.C0Kh9UF6.png");
const stepIcon5 = "" + __buildAssetsURL("stepIcon5.B8cQ4ruR.png");
const _sfc_main$4 = {
  __name: "empty",
  __ssrInlineRender: true,
  emits: ["callBtn"],
  setup(__props, { emit: __emit }) {
    const stepData = ref([
      {
        name: "User.txt45",
        desc: "User.txt46",
        icon: stepIcon1
      },
      {
        name: "User.txt47",
        desc: "User.txt48",
        icon: stepIcon2
      },
      {
        name: "Login.title1",
        desc: "User.txt49",
        icon: stepIcon3
      },
      {
        name: "Battle.tips5",
        desc: "User.txt50",
        icon: stepIcon4
      },
      {
        name: "User.txt51",
        desc: "User.txt52",
        icon: stepIcon5
      }
    ]);
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "empty" }, _attrs))} data-v-e2d9ff5a><div class="w100" data-v-e2d9ff5a><p class="title" data-v-e2d9ff5a>${ssrInterpolate(unref(t)("User.txt44"))}</p><ul class="stepList" data-v-e2d9ff5a><!--[-->`);
      ssrRenderList(unref(stepData), (item, index) => {
        _push(`<li data-v-e2d9ff5a><div class="iconBox" data-v-e2d9ff5a><div class="inner" data-v-e2d9ff5a><img class="icon" alt=""${ssrRenderAttr("src", item.icon)} data-v-e2d9ff5a></div></div><div class="conBox" data-v-e2d9ff5a><p class="name" data-v-e2d9ff5a>0${ssrInterpolate(index + 1)} ${ssrInterpolate(unref(t)(item.name))}</p><p class="desc" data-v-e2d9ff5a>${ssrInterpolate(unref(t)(item.desc))}</p></div></li>`);
      });
      _push(`<!--]--></ul></div><button class="emptyBtn" data-v-e2d9ff5a>${ssrInterpolate(unref(t)("Login.btn1"))}</button></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/home/empty.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const battleEmpty = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-e2d9ff5a"]]);
const _sfc_main$3 = {
  __name: "challengeSummary",
  __ssrInlineRender: true,
  props: {
    headerList: {
      type: Array,
      defaults: () => []
    }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "challenge-summary" }, _attrs))} data-v-c2969da2><div class="challenge-summary-mod1" data-v-c2969da2>`);
      ssrRenderSlot(_ctx.$slots, "mod1", {}, null, _push, _parent);
      _push(`</div><div class="challenge-summary-mod2" data-v-c2969da2><!--[-->`);
      ssrRenderList(__props.headerList, (headerVal, idx) => {
        _push(`<div class="${ssrRenderClass([{ "first-textCol": idx === 0 }, "textCol"])}" data-v-c2969da2><span class="title" data-v-c2969da2>${ssrInterpolate(headerVal.title.includes(".") ? unref(t)(headerVal.title) : headerVal.title)}</span><!--[-->`);
        ssrRenderList(headerVal == null ? void 0 : headerVal.children, (txt, index) => {
          _push(`<div class="${ssrRenderClass([{ "first-textCol__item": index === 0 }, "li"])}" data-v-c2969da2>`);
          ssrRenderSlot(_ctx.$slots, "default", { txt }, null, _push, _parent);
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div>`);
      ssrRenderSlot(_ctx.$slots, "btn", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/home/challengeDetailPopup/challengeSummary.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const challengeSummary = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c2969da2"]]);
const _sfc_main$2 = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    detailInfo: {
      type: Object,
      default: {}
    }
  },
  emits: ["bindCallUpGrade", "failRePayment", "bindTradeDayTips", "upgradeSenior", "upgradeScalingPlan", "submitFail"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { userInfo } = useAccount();
    const emit = __emit;
    const props = __props;
    const { t } = useI18n();
    const challengeDetailRef = ref();
    const mergePopupRef = ref();
    let challengeDetailHooks = ref({});
    let mergeList = ref([]);
    const getHooksParam = (detailInfo) => {
      let res = useChallengeDetails(detailInfo);
      Object.keys(res).map((key) => {
        challengeDetailHooks.value[key] = res[key];
      });
    };
    const bindCallUpGrade = (data, type) => emit("bindCallUpGrade", data, type);
    const upgradeScalingPlan = async (data) => {
      try {
        let res = await upgradeToScalingPlan({ challengeUid: data.uid });
        if (res.code === "200") {
          emit("upgradeScalingPlan", t("User.txt31"));
          close();
        }
      } catch (err) {
        emit("upgradeScalingPlan", "不滿足升級條件");
        close();
      }
    };
    const mergeHandler = () => mergePopupRef.value.show(mergeList.value);
    const getMergeTradeAccountList = async (detailInfo) => {
      var _a, _b;
      let params = {
        email: ((_a = userInfo.value) == null ? void 0 : _a.data.email) ?? "",
        phone: ((_b = userInfo.value) == null ? void 0 : _b.data.phone) ?? "",
        phoneCode: "",
        userId: detailInfo.userId ?? ""
      };
      try {
        let res = await mergeTradeAccountList(params);
        mergeList.value = res.data;
      } catch (err) {
        mergeList.value = null;
      }
    };
    const upgradeSenior = async (data) => {
      try {
        let res = await upgradeToSeniorPlan({ challengeUid: data.uid });
        if (res.code === "200") {
          emit("upgradeSenior", t("User.txt31"));
          close();
        }
      } catch (err) {
        emit("upgradeSenior", "不滿足升級條件");
        close();
      }
    };
    const submitFail = () => emit("submitFail");
    const shower = (detailInfo) => {
      challengeDetailRef.value.maskShow();
      if (detailInfo.phaseIndex === 3) {
        getMergeTradeAccountList(detailInfo);
      }
    };
    const close = () => challengeDetailRef.value.maskHide();
    const failRePayment = () => {
      emit("failRePayment");
    };
    const collapseTitle = computed(() => {
      let status = props.detailInfo.status == 0 ? t("Battle.tips6") : props.detailInfo.status == 1 ? t("User.tips4") : props.detailInfo.status == 2 ? t("User.tips5") : t("User.tips19");
      return `${t("Battle.txt7")} ${status}`;
    });
    const collapseTitleColor = computed(() => {
      let status = props.detailInfo.status < 2 ? "#50D183" : props.detailInfo.status == 2 ? "#FF4A37" : "#fff";
      return status;
    });
    __expose({ shower, close, getHooksParam });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMaskPopup = __nuxt_component_0$1;
      const _component_clientOnly = __nuxt_component_1;
      const _component_el_tooltip = ElTooltip;
      const _component_publicQuestionTips = __nuxt_component_3$1;
      const _component_nuxt_link_locale = __nuxt_component_2;
      const _directive_copy = resolveDirective("copy");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_publicMaskPopup, {
        ref_key: "challengeDetailRef",
        ref: challengeDetailRef,
        isCenter: ""
      }, {
        slot_mask: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="challengeDetailMain" data-v-e6d7d53d${_scopeId}><div class="badge" data-v-e6d7d53d${_scopeId}>${ssrInterpolate(unref(t)("common.step", { num: __props.detailInfo.phaseIndex }))}</div><p class="title" data-v-e6d7d53d${_scopeId}>${ssrInterpolate(unref(t)("Battle.title"))} <i class="close" data-v-e6d7d53d${_scopeId}></i></p><div class="boxInner" data-v-e6d7d53d${_scopeId}><div class="accountBox" data-v-e6d7d53d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_clientOnly, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="textLine" data-v-e6d7d53d${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_tooltip, {
                    class: "box-item",
                    effect: "dark",
                    content: unref(t)("User.txt22"),
                    placement: "right",
                    "append-to": ".ucDiv",
                    "popper-class": "aTips"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="label hover" data-v-e6d7d53d${_scopeId3}><img class="question" alt=""${ssrRenderAttr("src", _imports_0$2)} data-v-e6d7d53d${_scopeId3}>${ssrInterpolate(unref(t)("common.fund58"))}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "label hover" }, [
                            createVNode("img", {
                              class: "question",
                              alt: "",
                              src: _imports_0$2
                            }),
                            createTextVNode(toDisplayString(unref(t)("common.fund58")), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(formatNumberWithCurrency)(unref(challengeDetailHooks).totalAccountBalance, 0))}</span></div><div class="textLine" data-v-e6d7d53d${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_tooltip, {
                    class: "box-item",
                    effect: "dark",
                    content: unref(t)(
                      "User.tips9"
                    ),
                    placement: "right",
                    "append-to": ".ucDiv",
                    "popper-class": "aTips"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="label hover" data-v-e6d7d53d${_scopeId3}><img class="question" alt=""${ssrRenderAttr("src", _imports_0$2)} data-v-e6d7d53d${_scopeId3}>${ssrInterpolate(unref(t)(
                          "Battle.txt1"
                        ))}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "label hover" }, [
                            createVNode("img", {
                              class: "question",
                              alt: "",
                              src: _imports_0$2
                            }),
                            createTextVNode(toDisplayString(unref(t)(
                              "Battle.txt1"
                            )), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.eliminatedAccountNetWrth ? unref(formatNumberWithCurrency)(__props.detailInfo.eliminatedAccountNetWrth, 0) : unref(formatNumberWithCurrency)(__props.detailInfo.accountNetWrth, 0))}</span></div><div class="textLine" data-v-e6d7d53d${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_tooltip, {
                    class: "box-item",
                    effect: "dark",
                    content: unref(t)(
                      "User.tips10"
                    ),
                    placement: "right",
                    "append-to": ".ucDiv",
                    "popper-class": "aTips"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="label hover" data-v-e6d7d53d${_scopeId3}><img class="question" alt=""${ssrRenderAttr("src", _imports_0$2)} data-v-e6d7d53d${_scopeId3}> ${ssrInterpolate(unref(t)("Battle.txt2"))}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "label hover" }, [
                            createVNode("img", {
                              class: "question",
                              alt: "",
                              src: _imports_0$2
                            }),
                            createTextVNode(" " + toDisplayString(unref(t)("Battle.txt2")), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(formatNumberWithCurrency)(
                    __props.detailInfo.dailySettlementNetWrth,
                    0
                  ))}</span></div><div class="textLine" data-v-e6d7d53d${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_tooltip, {
                    class: "box-item",
                    effect: "dark",
                    content: unref(t)(
                      "User.tips11"
                    ),
                    placement: "right",
                    "append-to": ".ucDiv",
                    "popper-class": "aTips"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="label hover" data-v-e6d7d53d${_scopeId3}><img class="question" alt=""${ssrRenderAttr("src", _imports_0$2)} data-v-e6d7d53d${_scopeId3}>${ssrInterpolate(unref(t)(
                          "Battle.li.li2"
                        ))}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "label hover" }, [
                            createVNode("img", {
                              class: "question",
                              alt: "",
                              src: _imports_0$2
                            }),
                            createTextVNode(toDisplayString(unref(t)(
                              "Battle.li.li2"
                            )), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(formatNumberWithCurrency)(
                    __props.detailInfo.maxDailyDrawdown
                  ))} (${ssrInterpolate(unref(t)(
                    "Battle.tips3",
                    {
                      num: unref(formatNumberWithCurrency)(
                        __props.detailInfo.minAccountDdnw
                      )
                    }
                  ))})</span></div><div class="textLine" data-v-e6d7d53d${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_tooltip, {
                    class: "box-item",
                    effect: "dark",
                    content: unref(t)(
                      "User.tips12"
                    ),
                    placement: "right",
                    "append-to": ".ucDiv",
                    "popper-class": "aTips"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="label hover" data-v-e6d7d53d${_scopeId3}><img class="question" alt=""${ssrRenderAttr("src", _imports_0$2)} data-v-e6d7d53d${_scopeId3}>${ssrInterpolate(unref(t)(
                          "Battle.txt3"
                        ))}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "label hover" }, [
                            createVNode("img", {
                              class: "question",
                              alt: "",
                              src: _imports_0$2
                            }),
                            createTextVNode(toDisplayString(unref(t)(
                              "Battle.txt3"
                            )), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(formatNumberWithCurrency)(
                    __props.detailInfo.maxTotalDrawdown
                  ))} (${ssrInterpolate(unref(t)(
                    "Battle.tips3",
                    {
                      num: unref(formatNumberWithCurrency)(
                        __props.detailInfo.minAccountTdnw
                      )
                    }
                  ))})</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "textLine" }, [
                      createVNode(_component_el_tooltip, {
                        class: "box-item",
                        effect: "dark",
                        content: unref(t)("User.txt22"),
                        placement: "right",
                        "append-to": ".ucDiv",
                        "popper-class": "aTips"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "label hover" }, [
                            createVNode("img", {
                              class: "question",
                              alt: "",
                              src: _imports_0$2
                            }),
                            createTextVNode(toDisplayString(unref(t)("common.fund58")), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["content"]),
                      createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(unref(challengeDetailHooks).totalAccountBalance, 0)), 1)
                    ]),
                    createVNode("div", { class: "textLine" }, [
                      createVNode(_component_el_tooltip, {
                        class: "box-item",
                        effect: "dark",
                        content: unref(t)(
                          "User.tips9"
                        ),
                        placement: "right",
                        "append-to": ".ucDiv",
                        "popper-class": "aTips"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "label hover" }, [
                            createVNode("img", {
                              class: "question",
                              alt: "",
                              src: _imports_0$2
                            }),
                            createTextVNode(toDisplayString(unref(t)(
                              "Battle.txt1"
                            )), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["content"]),
                      createVNode("span", { class: "value" }, toDisplayString(__props.detailInfo.eliminatedAccountNetWrth ? unref(formatNumberWithCurrency)(__props.detailInfo.eliminatedAccountNetWrth, 0) : unref(formatNumberWithCurrency)(__props.detailInfo.accountNetWrth, 0)), 1)
                    ]),
                    createVNode("div", { class: "textLine" }, [
                      createVNode(_component_el_tooltip, {
                        class: "box-item",
                        effect: "dark",
                        content: unref(t)(
                          "User.tips10"
                        ),
                        placement: "right",
                        "append-to": ".ucDiv",
                        "popper-class": "aTips"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "label hover" }, [
                            createVNode("img", {
                              class: "question",
                              alt: "",
                              src: _imports_0$2
                            }),
                            createTextVNode(" " + toDisplayString(unref(t)("Battle.txt2")), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["content"]),
                      createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                        __props.detailInfo.dailySettlementNetWrth,
                        0
                      )), 1)
                    ]),
                    createVNode("div", { class: "textLine" }, [
                      createVNode(_component_el_tooltip, {
                        class: "box-item",
                        effect: "dark",
                        content: unref(t)(
                          "User.tips11"
                        ),
                        placement: "right",
                        "append-to": ".ucDiv",
                        "popper-class": "aTips"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "label hover" }, [
                            createVNode("img", {
                              class: "question",
                              alt: "",
                              src: _imports_0$2
                            }),
                            createTextVNode(toDisplayString(unref(t)(
                              "Battle.li.li2"
                            )), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["content"]),
                      createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                        __props.detailInfo.maxDailyDrawdown
                      )) + " (" + toDisplayString(unref(t)(
                        "Battle.tips3",
                        {
                          num: unref(formatNumberWithCurrency)(
                            __props.detailInfo.minAccountDdnw
                          )
                        }
                      )) + ")", 1)
                    ]),
                    createVNode("div", { class: "textLine" }, [
                      createVNode(_component_el_tooltip, {
                        class: "box-item",
                        effect: "dark",
                        content: unref(t)(
                          "User.tips12"
                        ),
                        placement: "right",
                        "append-to": ".ucDiv",
                        "popper-class": "aTips"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "label hover" }, [
                            createVNode("img", {
                              class: "question",
                              alt: "",
                              src: _imports_0$2
                            }),
                            createTextVNode(toDisplayString(unref(t)(
                              "Battle.txt3"
                            )), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["content"]),
                      createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                        __props.detailInfo.maxTotalDrawdown
                      )) + " (" + toDisplayString(unref(t)(
                        "Battle.tips3",
                        {
                          num: unref(formatNumberWithCurrency)(
                            __props.detailInfo.minAccountTdnw
                          )
                        }
                      )) + ")", 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="tradeBox" data-v-e6d7d53d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_clientOnly, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="textLine" data-v-e6d7d53d${_scopeId2}><span class="label" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(t)("Battle.txt4"))}</span><span class="value" data-v-e6d7d53d${_scopeId2}>TARGET</span><span class="value" data-v-e6d7d53d${_scopeId2}>RESULT</span><span class="value" data-v-e6d7d53d${_scopeId2}>SUMMARY</span></div><div class="textLine" data-v-e6d7d53d${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_tooltip, {
                    class: "box-item",
                    effect: "dark",
                    content: unref(t)("User.tips18"),
                    placement: "bottom",
                    "append-to": ".ucDiv",
                    "popper-class": "aTips"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="label hover" data-v-e6d7d53d${_scopeId3}><img class="question" alt=""${ssrRenderAttr("src", _imports_0$2)} data-v-e6d7d53d${_scopeId3}>${ssrInterpolate(unref(t)("Battle.txt5"))}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "label hover" }, [
                            createVNode("img", {
                              class: "question",
                              alt: "",
                              src: _imports_0$2
                            }),
                            createTextVNode(toDisplayString(unref(t)("Battle.txt5")), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (__props.detailInfo.phaseIndex == 3 && __props.detailInfo.status == 0) {
                    _push3(`<!--[--><span class="value" data-v-e6d7d53d${_scopeId2}>--</span><span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.currentTradingDay)} ${ssrInterpolate(unref(t)(
                      "Home.challenge.day"
                    ))}</span><span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(t)("Battle.tips5"))}</span><!--]-->`);
                  } else {
                    _push3(`<!--[--><span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.minTradingDay)} ${ssrInterpolate(unref(t)(
                      "Home.challenge.day"
                    ))}</span><span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.currentTradingDay)} ${ssrInterpolate(unref(t)(
                      "Home.challenge.day"
                    ))}</span><span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.tradingDayResult === 0 ? unref(t)(
                      "Battle.tips5"
                    ) : unref(t)(
                      "User.list.stu1"
                    ))}</span><!--]-->`);
                  }
                  _push3(`</div><div class="textLine" data-v-e6d7d53d${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_tooltip, {
                    class: "box-item",
                    effect: "dark",
                    content: unref(t)("TradingRules.basicRules.list.profit.cxt"),
                    placement: "bottom",
                    "append-to": ".ucDiv",
                    "popper-class": "aTips"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="label hover" data-v-e6d7d53d${_scopeId3}><img class="question" alt=""${ssrRenderAttr("src", _imports_0$2)} data-v-e6d7d53d${_scopeId3}> ${ssrInterpolate(unref(t)("Battle.li.li4"))}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "label hover" }, [
                            createVNode("img", {
                              class: "question",
                              alt: "",
                              src: _imports_0$2
                            }),
                            createTextVNode(" " + toDisplayString(unref(t)("Battle.li.li4")), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (__props.detailInfo.phaseIndex == 3 && __props.detailInfo.status == 0) {
                    _push3(`<!--[--><span class="value" data-v-e6d7d53d${_scopeId2}>--</span><span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(formatNumberWithCurrency)(
                      __props.detailInfo.currentProfit
                    ))}</span><span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(((_a = __props.detailInfo) == null ? void 0 : _a.currentProfit) > 0 ? unref(t)(
                      "Battle.tips5"
                    ) : unref(t)(
                      "User.list.stu1"
                    ))}</span><!--]-->`);
                  } else {
                    _push3(`<!--[--><span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(formatNumberWithCurrency)(
                      __props.detailInfo.targetProfit
                    ))}</span><span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(formatNumberWithCurrency)(
                      __props.detailInfo.currentProfit
                    ))}</span><span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.targetProfitResult === 0 ? unref(t)(
                      "Battle.tips5"
                    ) : unref(t)(
                      "User.list.stu1"
                    ))}</span><!--]-->`);
                  }
                  _push3(`</div><div class="textLine" data-v-e6d7d53d${_scopeId2}><span class="label" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(t)("Battle.txt6"))}</span><span class="value" data-v-e6d7d53d${_scopeId2}>-</span><span class="value" data-v-e6d7d53d${_scopeId2}>-</span><span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.positionResult === 0 ? unref(t)("Battle.tips5") : unref(t)(
                    "User.list.stu1"
                  ))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "textLine" }, [
                      createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.txt4")), 1),
                      createVNode("span", { class: "value" }, "TARGET"),
                      createVNode("span", { class: "value" }, "RESULT"),
                      createVNode("span", { class: "value" }, "SUMMARY")
                    ]),
                    createVNode("div", { class: "textLine" }, [
                      createVNode(_component_el_tooltip, {
                        class: "box-item",
                        effect: "dark",
                        content: unref(t)("User.tips18"),
                        placement: "bottom",
                        "append-to": ".ucDiv",
                        "popper-class": "aTips"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "label hover" }, [
                            createVNode("img", {
                              class: "question",
                              alt: "",
                              src: _imports_0$2
                            }),
                            createTextVNode(toDisplayString(unref(t)("Battle.txt5")), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["content"]),
                      __props.detailInfo.phaseIndex == 3 && __props.detailInfo.status == 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode("span", { class: "value" }, "--"),
                        createVNode("span", { class: "value" }, toDisplayString(__props.detailInfo.currentTradingDay) + " " + toDisplayString(unref(t)(
                          "Home.challenge.day"
                        )), 1),
                        createVNode("span", { class: "value" }, toDisplayString(unref(t)("Battle.tips5")), 1)
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createVNode("span", { class: "value" }, toDisplayString(__props.detailInfo.minTradingDay) + " " + toDisplayString(unref(t)(
                          "Home.challenge.day"
                        )), 1),
                        createVNode("span", { class: "value" }, toDisplayString(__props.detailInfo.currentTradingDay) + " " + toDisplayString(unref(t)(
                          "Home.challenge.day"
                        )), 1),
                        createVNode("span", { class: "value" }, toDisplayString(__props.detailInfo.tradingDayResult === 0 ? unref(t)(
                          "Battle.tips5"
                        ) : unref(t)(
                          "User.list.stu1"
                        )), 1)
                      ], 64))
                    ]),
                    createVNode("div", { class: "textLine" }, [
                      createVNode(_component_el_tooltip, {
                        class: "box-item",
                        effect: "dark",
                        content: unref(t)("TradingRules.basicRules.list.profit.cxt"),
                        placement: "bottom",
                        "append-to": ".ucDiv",
                        "popper-class": "aTips"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "label hover" }, [
                            createVNode("img", {
                              class: "question",
                              alt: "",
                              src: _imports_0$2
                            }),
                            createTextVNode(" " + toDisplayString(unref(t)("Battle.li.li4")), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["content"]),
                      __props.detailInfo.phaseIndex == 3 && __props.detailInfo.status == 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode("span", { class: "value" }, "--"),
                        createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                          __props.detailInfo.currentProfit
                        )), 1),
                        createVNode("span", { class: "value" }, toDisplayString(((_b = __props.detailInfo) == null ? void 0 : _b.currentProfit) > 0 ? unref(t)(
                          "Battle.tips5"
                        ) : unref(t)(
                          "User.list.stu1"
                        )), 1)
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                          __props.detailInfo.targetProfit
                        )), 1),
                        createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                          __props.detailInfo.currentProfit
                        )), 1),
                        createVNode("span", { class: "value" }, toDisplayString(__props.detailInfo.targetProfitResult === 0 ? unref(t)(
                          "Battle.tips5"
                        ) : unref(t)(
                          "User.list.stu1"
                        )), 1)
                      ], 64))
                    ]),
                    createVNode("div", { class: "textLine" }, [
                      createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.txt6")), 1),
                      createVNode("span", { class: "value" }, "-"),
                      createVNode("span", { class: "value" }, "-"),
                      createVNode("span", { class: "value" }, toDisplayString(__props.detailInfo.positionResult === 0 ? unref(t)("Battle.tips5") : unref(t)(
                        "User.list.stu1"
                      )), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(challengeCollapseItem, {
              title: collapseTitle.value,
              collapseTitleColor: collapseTitleColor.value,
              isColor: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="challengeBox" data-v-e6d7d53d${_scopeId2}>`);
                  if (__props.detailInfo.status == 2 || __props.detailInfo.status == 3) {
                    _push3(`<div class="textWrap" data-v-e6d7d53d${_scopeId2}><div class="textLine" data-v-e6d7d53d${_scopeId2}><span class="label" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(t)("Battle.label1"))}</span><span class="${ssrRenderClass([{
                      err: __props.detailInfo.dailyDrawdownStatusResult === 1
                    }, "value"])}" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.dailyDrawdownStatusResult === 1 ? unref(t)(
                      "Battle.label7",
                      {
                        price: __props.detailInfo.maxDailyDrawdown
                      }
                    ) : unref(t)(
                      "User.no"
                    ))}</span></div>`);
                    {
                      _push3(`<!---->`);
                    }
                    {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="textLine" data-v-e6d7d53d${_scopeId2}><span class="label" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(t)("Battle.label4"))}</span><span class="${ssrRenderClass([{
                      err: __props.detailInfo.maxDrawdownStatusResult === 1
                    }, "value"])}" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.maxDrawdownStatusResult === 1 ? unref(t)(
                      "Battle.label8",
                      {
                        price: __props.detailInfo.maxTotalDrawdown
                      }
                    ) : unref(t)(
                      "User.no"
                    ))}</span></div>`);
                    {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="textLine" data-v-e6d7d53d${_scopeId2}><span class="label" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(t)("Battle.label6"))}</span><span class="${ssrRenderClass([{
                      err: __props.detailInfo.untradedDaysStatusResult === 1
                    }, "value"])}" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.untradedDaysStatusResult === 1 ? unref(t)(
                      "User.yes"
                    ) : unref(t)(
                      "User.no"
                    ))}</span></div><div class="textLine" data-v-e6d7d53d${_scopeId2}><span class="label" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(t)("User.against"))}</span><span class="value" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(t)("User.no"))}</span></div></div>`);
                  } else {
                    _push3(`<div class="textWrap" data-v-e6d7d53d${_scopeId2}><div class="textLine" data-v-e6d7d53d${_scopeId2}><span class="label" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(t)("Battle.logAccount"))}</span><span${ssrRenderAttrs(mergeProps({
                      class: "value copyHover",
                      tips: unref(t)("User.copy")
                    }, ssrGetDirectiveProps(_ctx, _directive_copy, __props.detailInfo.account)))} data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.account)} `);
                    if (__props.detailInfo.account) {
                      _push3(`<i class="copy" data-v-e6d7d53d${_scopeId2}></i>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</span></div><div class="textLine" data-v-e6d7d53d${_scopeId2}><span class="label" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(t)("Battle.psw"))}</span><span${ssrRenderAttrs(mergeProps({
                      class: "value copyHover",
                      tips: unref(t)("User.copy")
                    }, ssrGetDirectiveProps(_ctx, _directive_copy, __props.detailInfo.password)))} data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.password)} `);
                    if (__props.detailInfo.password) {
                      _push3(`<i class="copy" data-v-e6d7d53d${_scopeId2}></i>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</span></div><div class="textLine" data-v-e6d7d53d${_scopeId2}><span class="label" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(t)("Battle.server"))}</span><span${ssrRenderAttrs(mergeProps({
                      class: "value copyHover",
                      tips: unref(t)("User.copy")
                    }, ssrGetDirectiveProps(_ctx, _directive_copy, __props.detailInfo.server)))} data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.server)} `);
                    if (__props.detailInfo.server) {
                      _push3(`<i class="copy" data-v-e6d7d53d${_scopeId2}></i>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</span></div><div class="textLine" data-v-e6d7d53d${_scopeId2}><span class="label" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(t)("Battle.email"))}</span><span${ssrRenderAttrs(mergeProps({
                      class: "value copyHover",
                      tips: unref(t)("User.copy")
                    }, ssrGetDirectiveProps(_ctx, _directive_copy, __props.detailInfo.email)))} data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.email)} `);
                    if (__props.detailInfo.email) {
                      _push3(`<i class="copy" data-v-e6d7d53d${_scopeId2}></i>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</span></div><div class="textLine" data-v-e6d7d53d${_scopeId2}><span class="label" data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(unref(t)("Battle.phone"))}</span><span${ssrRenderAttrs(mergeProps({
                      class: "value copyHover",
                      tips: unref(t)("User.copy")
                    }, ssrGetDirectiveProps(_ctx, _directive_copy, __props.detailInfo.phone)))} data-v-e6d7d53d${_scopeId2}>${ssrInterpolate(__props.detailInfo.phone)} `);
                    if (__props.detailInfo.phone) {
                      _push3(`<i class="copy" data-v-e6d7d53d${_scopeId2}></i>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</span></div></div>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "challengeBox" }, [
                      __props.detailInfo.status == 2 || __props.detailInfo.status == 3 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "textWrap"
                      }, [
                        createVNode("div", { class: "textLine" }, [
                          createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.label1")), 1),
                          createVNode("span", {
                            class: ["value", {
                              err: __props.detailInfo.dailyDrawdownStatusResult === 1
                            }]
                          }, toDisplayString(__props.detailInfo.dailyDrawdownStatusResult === 1 ? unref(t)(
                            "Battle.label7",
                            {
                              price: __props.detailInfo.maxDailyDrawdown
                            }
                          ) : unref(t)(
                            "User.no"
                          )), 3)
                        ]),
                        createCommentVNode("", true),
                        createCommentVNode("", true),
                        createVNode("div", { class: "textLine" }, [
                          createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.label4")), 1),
                          createVNode("span", {
                            class: ["value", {
                              err: __props.detailInfo.maxDrawdownStatusResult === 1
                            }]
                          }, toDisplayString(__props.detailInfo.maxDrawdownStatusResult === 1 ? unref(t)(
                            "Battle.label8",
                            {
                              price: __props.detailInfo.maxTotalDrawdown
                            }
                          ) : unref(t)(
                            "User.no"
                          )), 3)
                        ]),
                        createCommentVNode("", true),
                        createVNode("div", { class: "textLine" }, [
                          createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.label6")), 1),
                          createVNode("span", {
                            class: ["value", {
                              err: __props.detailInfo.untradedDaysStatusResult === 1
                            }]
                          }, toDisplayString(__props.detailInfo.untradedDaysStatusResult === 1 ? unref(t)(
                            "User.yes"
                          ) : unref(t)(
                            "User.no"
                          )), 3)
                        ]),
                        createVNode("div", { class: "textLine" }, [
                          createVNode("span", { class: "label" }, toDisplayString(unref(t)("User.against")), 1),
                          createVNode("span", { class: "value" }, toDisplayString(unref(t)("User.no")), 1)
                        ])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "textWrap"
                      }, [
                        createVNode("div", { class: "textLine" }, [
                          createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.logAccount")), 1),
                          withDirectives((openBlock(), createBlock("span", {
                            class: "value copyHover",
                            tips: unref(t)("User.copy")
                          }, [
                            createTextVNode(toDisplayString(__props.detailInfo.account) + " ", 1),
                            __props.detailInfo.account ? (openBlock(), createBlock("i", {
                              key: 0,
                              class: "copy"
                            })) : createCommentVNode("", true)
                          ], 8, ["tips"])), [
                            [_directive_copy, __props.detailInfo.account]
                          ])
                        ]),
                        createVNode("div", { class: "textLine" }, [
                          createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.psw")), 1),
                          withDirectives((openBlock(), createBlock("span", {
                            class: "value copyHover",
                            tips: unref(t)("User.copy")
                          }, [
                            createTextVNode(toDisplayString(__props.detailInfo.password) + " ", 1),
                            __props.detailInfo.password ? (openBlock(), createBlock("i", {
                              key: 0,
                              class: "copy"
                            })) : createCommentVNode("", true)
                          ], 8, ["tips"])), [
                            [_directive_copy, __props.detailInfo.password]
                          ])
                        ]),
                        createVNode("div", { class: "textLine" }, [
                          createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.server")), 1),
                          withDirectives((openBlock(), createBlock("span", {
                            class: "value copyHover",
                            tips: unref(t)("User.copy")
                          }, [
                            createTextVNode(toDisplayString(__props.detailInfo.server) + " ", 1),
                            __props.detailInfo.server ? (openBlock(), createBlock("i", {
                              key: 0,
                              class: "copy"
                            })) : createCommentVNode("", true)
                          ], 8, ["tips"])), [
                            [_directive_copy, __props.detailInfo.server]
                          ])
                        ]),
                        createVNode("div", { class: "textLine" }, [
                          createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.email")), 1),
                          withDirectives((openBlock(), createBlock("span", {
                            class: "value copyHover",
                            tips: unref(t)("User.copy")
                          }, [
                            createTextVNode(toDisplayString(__props.detailInfo.email) + " ", 1),
                            __props.detailInfo.email ? (openBlock(), createBlock("i", {
                              key: 0,
                              class: "copy"
                            })) : createCommentVNode("", true)
                          ], 8, ["tips"])), [
                            [_directive_copy, __props.detailInfo.email]
                          ])
                        ]),
                        createVNode("div", { class: "textLine" }, [
                          createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.phone")), 1),
                          withDirectives((openBlock(), createBlock("span", {
                            class: "value copyHover",
                            tips: unref(t)("User.copy")
                          }, [
                            createTextVNode(toDisplayString(__props.detailInfo.phone) + " ", 1),
                            __props.detailInfo.phone ? (openBlock(), createBlock("i", {
                              key: 0,
                              class: "copy"
                            })) : createCommentVNode("", true)
                          ], 8, ["tips"])), [
                            [_directive_copy, __props.detailInfo.phone]
                          ])
                        ])
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.detailInfo.phaseIndex === 3) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(challengeCollapseItem, {
                title: `${unref(t)("common.successDesc4")}: ${unref(challengeDetailHooks).fundPlanStep}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(challengeSummary, {
                      headerList: unref(challengeDetailHooks).fundPlanList
                    }, {
                      mod1: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(challengeDetailHooks).fundPlan, (v, k) => {
                            _push4(`<div class="premium-plan" data-v-e6d7d53d${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_publicQuestionTips, { txt: v }, null, _parent4, _scopeId3));
                            _push4(`<div class="val" data-v-e6d7d53d${_scopeId3}>${ssrInterpolate(v.val)}</div></div>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(challengeDetailHooks).fundPlan, (v, k) => {
                              return openBlock(), createBlock("div", { class: "premium-plan" }, [
                                createVNode(_component_publicQuestionTips, { txt: v }, null, 8, ["txt"]),
                                createVNode("div", { class: "val" }, toDisplayString(v.val), 1)
                              ]);
                            }), 256))
                          ];
                        }
                      }),
                      default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_publicQuestionTips, {
                            txt: scope.txt
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_publicQuestionTips, {
                              txt: scope.txt
                            }, null, 8, ["txt"])
                          ];
                        }
                      }),
                      btn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          if (__props.detailInfo.phaseIndex === 3) {
                            _push4(`<button class="${ssrRenderClass([{ disabled: ((_a = __props.detailInfo.scalingPlan) == null ? void 0 : _a.checkExpandPlansConditionCode) !== "2" }, "btn deep slot-btn"])}" data-v-e6d7d53d${_scopeId3}>${ssrInterpolate(unref(t)("User.txt30"))}</button>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            __props.detailInfo.phaseIndex === 3 ? (openBlock(), createBlock("button", {
                              key: 0,
                              class: ["btn deep slot-btn", { disabled: ((_b = __props.detailInfo.scalingPlan) == null ? void 0 : _b.checkExpandPlansConditionCode) !== "2" }],
                              onClick: ($event) => upgradeScalingPlan(__props.detailInfo)
                            }, toDisplayString(unref(t)("User.txt30")), 11, ["onClick"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(challengeSummary, {
                        headerList: unref(challengeDetailHooks).fundPlanList
                      }, {
                        mod1: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(challengeDetailHooks).fundPlan, (v, k) => {
                            return openBlock(), createBlock("div", { class: "premium-plan" }, [
                              createVNode(_component_publicQuestionTips, { txt: v }, null, 8, ["txt"]),
                              createVNode("div", { class: "val" }, toDisplayString(v.val), 1)
                            ]);
                          }), 256))
                        ]),
                        default: withCtx((scope) => [
                          createVNode(_component_publicQuestionTips, {
                            txt: scope.txt
                          }, null, 8, ["txt"])
                        ]),
                        btn: withCtx(() => {
                          var _a;
                          return [
                            __props.detailInfo.phaseIndex === 3 ? (openBlock(), createBlock("button", {
                              key: 0,
                              class: ["btn deep slot-btn", { disabled: ((_a = __props.detailInfo.scalingPlan) == null ? void 0 : _a.checkExpandPlansConditionCode) !== "2" }],
                              onClick: ($event) => upgradeScalingPlan(__props.detailInfo)
                            }, toDisplayString(unref(t)("User.txt30")), 11, ["onClick"])) : createCommentVNode("", true)
                          ];
                        }),
                        _: 1
                      }, 8, ["headerList"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(challengeCollapseItem, {
                title: `${unref(t)("common.bar4")}: ${unref(t)(unref(challengeDetailHooks).seniorLev1)}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(challengeSummary, {
                      headerList: unref(challengeDetailHooks).premiumPlanList
                    }, {
                      mod1: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(challengeDetailHooks).premiumPlan, (v, k) => {
                            _push4(`<div class="premium-plan" data-v-e6d7d53d${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_publicQuestionTips, { txt: v }, null, _parent4, _scopeId3));
                            _push4(`<div class="val" data-v-e6d7d53d${_scopeId3}>${ssrInterpolate(unref(t)(v.val))}</div></div>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(challengeDetailHooks).premiumPlan, (v, k) => {
                              return openBlock(), createBlock("div", { class: "premium-plan" }, [
                                createVNode(_component_publicQuestionTips, { txt: v }, null, 8, ["txt"]),
                                createVNode("div", { class: "val" }, toDisplayString(unref(t)(v.val)), 1)
                              ]);
                            }), 256))
                          ];
                        }
                      }),
                      default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_publicQuestionTips, {
                            txt: scope.txt
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_publicQuestionTips, {
                              txt: scope.txt
                            }, null, 8, ["txt"])
                          ];
                        }
                      }),
                      btn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b, _c, _d;
                        if (_push4) {
                          _push4(`<div class="btnGroup" data-v-e6d7d53d${_scopeId3}>`);
                          if (__props.detailInfo.phaseIndex === 3 && unref(challengeDetailHooks).seniorLev2 === "User.txt14") {
                            _push4(`<button class="${ssrRenderClass([{ disabled: !unref(challengeDetailHooks).btnUpgradeSenior }, "btn deep"])}" data-v-e6d7d53d${_scopeId3}>${ssrInterpolate(unref(t)("User.txt36"))}</button>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (unref(mergeList) && __props.detailInfo.phaseIndex === 3 && unref(challengeDetailHooks).seniorLev1 === "User.txt32") {
                            _push4(`<button class="${ssrRenderClass([{ disabled: ((_a = unref(mergeList)) == null ? void 0 : _a.length) === 0 }, "btn deep"])}" data-v-e6d7d53d${_scopeId3}>${ssrInterpolate(((_b = unref(mergeList)) == null ? void 0 : _b.length) === 0 ? unref(t)("User.txt37") : unref(t)("Home.challenge.text11"))}</button>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "btnGroup" }, [
                              __props.detailInfo.phaseIndex === 3 && unref(challengeDetailHooks).seniorLev2 === "User.txt14" ? (openBlock(), createBlock("button", {
                                key: 0,
                                class: ["btn deep", { disabled: !unref(challengeDetailHooks).btnUpgradeSenior }],
                                onClick: ($event) => upgradeSenior(__props.detailInfo)
                              }, toDisplayString(unref(t)("User.txt36")), 11, ["onClick"])) : createCommentVNode("", true),
                              unref(mergeList) && __props.detailInfo.phaseIndex === 3 && unref(challengeDetailHooks).seniorLev1 === "User.txt32" ? (openBlock(), createBlock("button", {
                                key: 1,
                                class: ["btn deep", { disabled: ((_c = unref(mergeList)) == null ? void 0 : _c.length) === 0 }],
                                onClick: ($event) => mergeHandler(__props.detailInfo)
                              }, toDisplayString(((_d = unref(mergeList)) == null ? void 0 : _d.length) === 0 ? unref(t)("User.txt37") : unref(t)("Home.challenge.text11")), 11, ["onClick"])) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(challengeSummary, {
                        headerList: unref(challengeDetailHooks).premiumPlanList
                      }, {
                        mod1: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(challengeDetailHooks).premiumPlan, (v, k) => {
                            return openBlock(), createBlock("div", { class: "premium-plan" }, [
                              createVNode(_component_publicQuestionTips, { txt: v }, null, 8, ["txt"]),
                              createVNode("div", { class: "val" }, toDisplayString(unref(t)(v.val)), 1)
                            ]);
                          }), 256))
                        ]),
                        default: withCtx((scope) => [
                          createVNode(_component_publicQuestionTips, {
                            txt: scope.txt
                          }, null, 8, ["txt"])
                        ]),
                        btn: withCtx(() => {
                          var _a, _b;
                          return [
                            createVNode("div", { class: "btnGroup" }, [
                              __props.detailInfo.phaseIndex === 3 && unref(challengeDetailHooks).seniorLev2 === "User.txt14" ? (openBlock(), createBlock("button", {
                                key: 0,
                                class: ["btn deep", { disabled: !unref(challengeDetailHooks).btnUpgradeSenior }],
                                onClick: ($event) => upgradeSenior(__props.detailInfo)
                              }, toDisplayString(unref(t)("User.txt36")), 11, ["onClick"])) : createCommentVNode("", true),
                              unref(mergeList) && __props.detailInfo.phaseIndex === 3 && unref(challengeDetailHooks).seniorLev1 === "User.txt32" ? (openBlock(), createBlock("button", {
                                key: 1,
                                class: ["btn deep", { disabled: ((_a = unref(mergeList)) == null ? void 0 : _a.length) === 0 }],
                                onClick: ($event) => mergeHandler(__props.detailInfo)
                              }, toDisplayString(((_b = unref(mergeList)) == null ? void 0 : _b.length) === 0 ? unref(t)("User.txt37") : unref(t)("Home.challenge.text11")), 11, ["onClick"])) : createCommentVNode("", true)
                            ])
                          ];
                        }),
                        _: 1
                      }, 8, ["headerList"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="btnGroup" data-v-e6d7d53d${_scopeId}>`);
            if (__props.detailInfo.status == 0) {
              _push2(`<!--[-->`);
              if (unref(challengeDetailHooks).btnUpgradeSettlement) {
                _push2(`<button class="btn deep" data-v-e6d7d53d${_scopeId}>${ssrInterpolate(unref(t)("User.btn5"))}</button>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(challengeDetailHooks).btnMT5) {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(_component_nuxt_link_locale, {
                  class: "btn deep",
                  to: `${unref(APP_MC_MARKETS)}/en-US/login?actionType=login`,
                  target: "_blank",
                  rel: "nofollow"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`MC Markets`);
                    } else {
                      return [
                        createTextVNode("MC Markets")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_nuxt_link_locale, {
                  class: "btn light",
                  to: unref(APP_MT5),
                  target: "_blank",
                  rel: "nofollow"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`MT5`);
                    } else {
                      return [
                        createTextVNode("MT5")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(challengeDetailHooks).btnSettlement) {
                _push2(`<button class="btn deep" data-v-e6d7d53d${_scopeId}>${ssrInterpolate(unref(t)("User.btn7"))}</button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            } else if (__props.detailInfo.status == 2) {
              _push2(`<!--[--><button class="btn deep" data-v-e6d7d53d${_scopeId}>${ssrInterpolate(unref(t)("User.btn7"))}</button>`);
              if (__props.detailInfo.phaseIndex != 3) {
                _push2(`<button class="btn light" data-v-e6d7d53d${_scopeId}>${ssrInterpolate(unref(t)("User.btn6"))}</button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            } else if (__props.detailInfo.status == 3) {
              _push2(`<button class="btn light" data-v-e6d7d53d${_scopeId}>${ssrInterpolate(unref(t)("User.close"))}</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "challengeDetailMain" }, [
                createVNode("div", { class: "badge" }, toDisplayString(unref(t)("common.step", { num: __props.detailInfo.phaseIndex })), 1),
                createVNode("p", { class: "title" }, [
                  createTextVNode(toDisplayString(unref(t)("Battle.title")) + " ", 1),
                  createVNode("i", {
                    class: "close",
                    onClick: close
                  })
                ]),
                createVNode("div", { class: "boxInner" }, [
                  createVNode("div", { class: "accountBox" }, [
                    createVNode(_component_clientOnly, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "textLine" }, [
                          createVNode(_component_el_tooltip, {
                            class: "box-item",
                            effect: "dark",
                            content: unref(t)("User.txt22"),
                            placement: "right",
                            "append-to": ".ucDiv",
                            "popper-class": "aTips"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "label hover" }, [
                                createVNode("img", {
                                  class: "question",
                                  alt: "",
                                  src: _imports_0$2
                                }),
                                createTextVNode(toDisplayString(unref(t)("common.fund58")), 1)
                              ])
                            ]),
                            _: 1
                          }, 8, ["content"]),
                          createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(unref(challengeDetailHooks).totalAccountBalance, 0)), 1)
                        ]),
                        createVNode("div", { class: "textLine" }, [
                          createVNode(_component_el_tooltip, {
                            class: "box-item",
                            effect: "dark",
                            content: unref(t)(
                              "User.tips9"
                            ),
                            placement: "right",
                            "append-to": ".ucDiv",
                            "popper-class": "aTips"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "label hover" }, [
                                createVNode("img", {
                                  class: "question",
                                  alt: "",
                                  src: _imports_0$2
                                }),
                                createTextVNode(toDisplayString(unref(t)(
                                  "Battle.txt1"
                                )), 1)
                              ])
                            ]),
                            _: 1
                          }, 8, ["content"]),
                          createVNode("span", { class: "value" }, toDisplayString(__props.detailInfo.eliminatedAccountNetWrth ? unref(formatNumberWithCurrency)(__props.detailInfo.eliminatedAccountNetWrth, 0) : unref(formatNumberWithCurrency)(__props.detailInfo.accountNetWrth, 0)), 1)
                        ]),
                        createVNode("div", { class: "textLine" }, [
                          createVNode(_component_el_tooltip, {
                            class: "box-item",
                            effect: "dark",
                            content: unref(t)(
                              "User.tips10"
                            ),
                            placement: "right",
                            "append-to": ".ucDiv",
                            "popper-class": "aTips"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "label hover" }, [
                                createVNode("img", {
                                  class: "question",
                                  alt: "",
                                  src: _imports_0$2
                                }),
                                createTextVNode(" " + toDisplayString(unref(t)("Battle.txt2")), 1)
                              ])
                            ]),
                            _: 1
                          }, 8, ["content"]),
                          createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                            __props.detailInfo.dailySettlementNetWrth,
                            0
                          )), 1)
                        ]),
                        createVNode("div", { class: "textLine" }, [
                          createVNode(_component_el_tooltip, {
                            class: "box-item",
                            effect: "dark",
                            content: unref(t)(
                              "User.tips11"
                            ),
                            placement: "right",
                            "append-to": ".ucDiv",
                            "popper-class": "aTips"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "label hover" }, [
                                createVNode("img", {
                                  class: "question",
                                  alt: "",
                                  src: _imports_0$2
                                }),
                                createTextVNode(toDisplayString(unref(t)(
                                  "Battle.li.li2"
                                )), 1)
                              ])
                            ]),
                            _: 1
                          }, 8, ["content"]),
                          createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                            __props.detailInfo.maxDailyDrawdown
                          )) + " (" + toDisplayString(unref(t)(
                            "Battle.tips3",
                            {
                              num: unref(formatNumberWithCurrency)(
                                __props.detailInfo.minAccountDdnw
                              )
                            }
                          )) + ")", 1)
                        ]),
                        createVNode("div", { class: "textLine" }, [
                          createVNode(_component_el_tooltip, {
                            class: "box-item",
                            effect: "dark",
                            content: unref(t)(
                              "User.tips12"
                            ),
                            placement: "right",
                            "append-to": ".ucDiv",
                            "popper-class": "aTips"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "label hover" }, [
                                createVNode("img", {
                                  class: "question",
                                  alt: "",
                                  src: _imports_0$2
                                }),
                                createTextVNode(toDisplayString(unref(t)(
                                  "Battle.txt3"
                                )), 1)
                              ])
                            ]),
                            _: 1
                          }, 8, ["content"]),
                          createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                            __props.detailInfo.maxTotalDrawdown
                          )) + " (" + toDisplayString(unref(t)(
                            "Battle.tips3",
                            {
                              num: unref(formatNumberWithCurrency)(
                                __props.detailInfo.minAccountTdnw
                              )
                            }
                          )) + ")", 1)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "tradeBox" }, [
                    createVNode(_component_clientOnly, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("div", { class: "textLine" }, [
                            createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.txt4")), 1),
                            createVNode("span", { class: "value" }, "TARGET"),
                            createVNode("span", { class: "value" }, "RESULT"),
                            createVNode("span", { class: "value" }, "SUMMARY")
                          ]),
                          createVNode("div", { class: "textLine" }, [
                            createVNode(_component_el_tooltip, {
                              class: "box-item",
                              effect: "dark",
                              content: unref(t)("User.tips18"),
                              placement: "bottom",
                              "append-to": ".ucDiv",
                              "popper-class": "aTips"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "label hover" }, [
                                  createVNode("img", {
                                    class: "question",
                                    alt: "",
                                    src: _imports_0$2
                                  }),
                                  createTextVNode(toDisplayString(unref(t)("Battle.txt5")), 1)
                                ])
                              ]),
                              _: 1
                            }, 8, ["content"]),
                            __props.detailInfo.phaseIndex == 3 && __props.detailInfo.status == 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode("span", { class: "value" }, "--"),
                              createVNode("span", { class: "value" }, toDisplayString(__props.detailInfo.currentTradingDay) + " " + toDisplayString(unref(t)(
                                "Home.challenge.day"
                              )), 1),
                              createVNode("span", { class: "value" }, toDisplayString(unref(t)("Battle.tips5")), 1)
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createVNode("span", { class: "value" }, toDisplayString(__props.detailInfo.minTradingDay) + " " + toDisplayString(unref(t)(
                                "Home.challenge.day"
                              )), 1),
                              createVNode("span", { class: "value" }, toDisplayString(__props.detailInfo.currentTradingDay) + " " + toDisplayString(unref(t)(
                                "Home.challenge.day"
                              )), 1),
                              createVNode("span", { class: "value" }, toDisplayString(__props.detailInfo.tradingDayResult === 0 ? unref(t)(
                                "Battle.tips5"
                              ) : unref(t)(
                                "User.list.stu1"
                              )), 1)
                            ], 64))
                          ]),
                          createVNode("div", { class: "textLine" }, [
                            createVNode(_component_el_tooltip, {
                              class: "box-item",
                              effect: "dark",
                              content: unref(t)("TradingRules.basicRules.list.profit.cxt"),
                              placement: "bottom",
                              "append-to": ".ucDiv",
                              "popper-class": "aTips"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "label hover" }, [
                                  createVNode("img", {
                                    class: "question",
                                    alt: "",
                                    src: _imports_0$2
                                  }),
                                  createTextVNode(" " + toDisplayString(unref(t)("Battle.li.li4")), 1)
                                ])
                              ]),
                              _: 1
                            }, 8, ["content"]),
                            __props.detailInfo.phaseIndex == 3 && __props.detailInfo.status == 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode("span", { class: "value" }, "--"),
                              createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                                __props.detailInfo.currentProfit
                              )), 1),
                              createVNode("span", { class: "value" }, toDisplayString(((_a = __props.detailInfo) == null ? void 0 : _a.currentProfit) > 0 ? unref(t)(
                                "Battle.tips5"
                              ) : unref(t)(
                                "User.list.stu1"
                              )), 1)
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                                __props.detailInfo.targetProfit
                              )), 1),
                              createVNode("span", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(
                                __props.detailInfo.currentProfit
                              )), 1),
                              createVNode("span", { class: "value" }, toDisplayString(__props.detailInfo.targetProfitResult === 0 ? unref(t)(
                                "Battle.tips5"
                              ) : unref(t)(
                                "User.list.stu1"
                              )), 1)
                            ], 64))
                          ]),
                          createVNode("div", { class: "textLine" }, [
                            createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.txt6")), 1),
                            createVNode("span", { class: "value" }, "-"),
                            createVNode("span", { class: "value" }, "-"),
                            createVNode("span", { class: "value" }, toDisplayString(__props.detailInfo.positionResult === 0 ? unref(t)("Battle.tips5") : unref(t)(
                              "User.list.stu1"
                            )), 1)
                          ])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  createVNode(challengeCollapseItem, {
                    title: collapseTitle.value,
                    collapseTitleColor: collapseTitleColor.value,
                    isColor: true
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "challengeBox" }, [
                        __props.detailInfo.status == 2 || __props.detailInfo.status == 3 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "textWrap"
                        }, [
                          createVNode("div", { class: "textLine" }, [
                            createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.label1")), 1),
                            createVNode("span", {
                              class: ["value", {
                                err: __props.detailInfo.dailyDrawdownStatusResult === 1
                              }]
                            }, toDisplayString(__props.detailInfo.dailyDrawdownStatusResult === 1 ? unref(t)(
                              "Battle.label7",
                              {
                                price: __props.detailInfo.maxDailyDrawdown
                              }
                            ) : unref(t)(
                              "User.no"
                            )), 3)
                          ]),
                          createCommentVNode("", true),
                          createCommentVNode("", true),
                          createVNode("div", { class: "textLine" }, [
                            createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.label4")), 1),
                            createVNode("span", {
                              class: ["value", {
                                err: __props.detailInfo.maxDrawdownStatusResult === 1
                              }]
                            }, toDisplayString(__props.detailInfo.maxDrawdownStatusResult === 1 ? unref(t)(
                              "Battle.label8",
                              {
                                price: __props.detailInfo.maxTotalDrawdown
                              }
                            ) : unref(t)(
                              "User.no"
                            )), 3)
                          ]),
                          createCommentVNode("", true),
                          createVNode("div", { class: "textLine" }, [
                            createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.label6")), 1),
                            createVNode("span", {
                              class: ["value", {
                                err: __props.detailInfo.untradedDaysStatusResult === 1
                              }]
                            }, toDisplayString(__props.detailInfo.untradedDaysStatusResult === 1 ? unref(t)(
                              "User.yes"
                            ) : unref(t)(
                              "User.no"
                            )), 3)
                          ]),
                          createVNode("div", { class: "textLine" }, [
                            createVNode("span", { class: "label" }, toDisplayString(unref(t)("User.against")), 1),
                            createVNode("span", { class: "value" }, toDisplayString(unref(t)("User.no")), 1)
                          ])
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "textWrap"
                        }, [
                          createVNode("div", { class: "textLine" }, [
                            createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.logAccount")), 1),
                            withDirectives((openBlock(), createBlock("span", {
                              class: "value copyHover",
                              tips: unref(t)("User.copy")
                            }, [
                              createTextVNode(toDisplayString(__props.detailInfo.account) + " ", 1),
                              __props.detailInfo.account ? (openBlock(), createBlock("i", {
                                key: 0,
                                class: "copy"
                              })) : createCommentVNode("", true)
                            ], 8, ["tips"])), [
                              [_directive_copy, __props.detailInfo.account]
                            ])
                          ]),
                          createVNode("div", { class: "textLine" }, [
                            createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.psw")), 1),
                            withDirectives((openBlock(), createBlock("span", {
                              class: "value copyHover",
                              tips: unref(t)("User.copy")
                            }, [
                              createTextVNode(toDisplayString(__props.detailInfo.password) + " ", 1),
                              __props.detailInfo.password ? (openBlock(), createBlock("i", {
                                key: 0,
                                class: "copy"
                              })) : createCommentVNode("", true)
                            ], 8, ["tips"])), [
                              [_directive_copy, __props.detailInfo.password]
                            ])
                          ]),
                          createVNode("div", { class: "textLine" }, [
                            createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.server")), 1),
                            withDirectives((openBlock(), createBlock("span", {
                              class: "value copyHover",
                              tips: unref(t)("User.copy")
                            }, [
                              createTextVNode(toDisplayString(__props.detailInfo.server) + " ", 1),
                              __props.detailInfo.server ? (openBlock(), createBlock("i", {
                                key: 0,
                                class: "copy"
                              })) : createCommentVNode("", true)
                            ], 8, ["tips"])), [
                              [_directive_copy, __props.detailInfo.server]
                            ])
                          ]),
                          createVNode("div", { class: "textLine" }, [
                            createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.email")), 1),
                            withDirectives((openBlock(), createBlock("span", {
                              class: "value copyHover",
                              tips: unref(t)("User.copy")
                            }, [
                              createTextVNode(toDisplayString(__props.detailInfo.email) + " ", 1),
                              __props.detailInfo.email ? (openBlock(), createBlock("i", {
                                key: 0,
                                class: "copy"
                              })) : createCommentVNode("", true)
                            ], 8, ["tips"])), [
                              [_directive_copy, __props.detailInfo.email]
                            ])
                          ]),
                          createVNode("div", { class: "textLine" }, [
                            createVNode("span", { class: "label" }, toDisplayString(unref(t)("Battle.phone")), 1),
                            withDirectives((openBlock(), createBlock("span", {
                              class: "value copyHover",
                              tips: unref(t)("User.copy")
                            }, [
                              createTextVNode(toDisplayString(__props.detailInfo.phone) + " ", 1),
                              __props.detailInfo.phone ? (openBlock(), createBlock("i", {
                                key: 0,
                                class: "copy"
                              })) : createCommentVNode("", true)
                            ], 8, ["tips"])), [
                              [_directive_copy, __props.detailInfo.phone]
                            ])
                          ])
                        ]))
                      ])
                    ]),
                    _: 1
                  }, 8, ["title", "collapseTitleColor"]),
                  __props.detailInfo.phaseIndex === 3 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(challengeCollapseItem, {
                      title: `${unref(t)("common.successDesc4")}: ${unref(challengeDetailHooks).fundPlanStep}`
                    }, {
                      default: withCtx(() => [
                        createVNode(challengeSummary, {
                          headerList: unref(challengeDetailHooks).fundPlanList
                        }, {
                          mod1: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(challengeDetailHooks).fundPlan, (v, k) => {
                              return openBlock(), createBlock("div", { class: "premium-plan" }, [
                                createVNode(_component_publicQuestionTips, { txt: v }, null, 8, ["txt"]),
                                createVNode("div", { class: "val" }, toDisplayString(v.val), 1)
                              ]);
                            }), 256))
                          ]),
                          default: withCtx((scope) => [
                            createVNode(_component_publicQuestionTips, {
                              txt: scope.txt
                            }, null, 8, ["txt"])
                          ]),
                          btn: withCtx(() => {
                            var _a;
                            return [
                              __props.detailInfo.phaseIndex === 3 ? (openBlock(), createBlock("button", {
                                key: 0,
                                class: ["btn deep slot-btn", { disabled: ((_a = __props.detailInfo.scalingPlan) == null ? void 0 : _a.checkExpandPlansConditionCode) !== "2" }],
                                onClick: ($event) => upgradeScalingPlan(__props.detailInfo)
                              }, toDisplayString(unref(t)("User.txt30")), 11, ["onClick"])) : createCommentVNode("", true)
                            ];
                          }),
                          _: 1
                        }, 8, ["headerList"])
                      ]),
                      _: 1
                    }, 8, ["title"]),
                    createVNode(challengeCollapseItem, {
                      title: `${unref(t)("common.bar4")}: ${unref(t)(unref(challengeDetailHooks).seniorLev1)}`
                    }, {
                      default: withCtx(() => [
                        createVNode(challengeSummary, {
                          headerList: unref(challengeDetailHooks).premiumPlanList
                        }, {
                          mod1: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(challengeDetailHooks).premiumPlan, (v, k) => {
                              return openBlock(), createBlock("div", { class: "premium-plan" }, [
                                createVNode(_component_publicQuestionTips, { txt: v }, null, 8, ["txt"]),
                                createVNode("div", { class: "val" }, toDisplayString(unref(t)(v.val)), 1)
                              ]);
                            }), 256))
                          ]),
                          default: withCtx((scope) => [
                            createVNode(_component_publicQuestionTips, {
                              txt: scope.txt
                            }, null, 8, ["txt"])
                          ]),
                          btn: withCtx(() => {
                            var _a, _b;
                            return [
                              createVNode("div", { class: "btnGroup" }, [
                                __props.detailInfo.phaseIndex === 3 && unref(challengeDetailHooks).seniorLev2 === "User.txt14" ? (openBlock(), createBlock("button", {
                                  key: 0,
                                  class: ["btn deep", { disabled: !unref(challengeDetailHooks).btnUpgradeSenior }],
                                  onClick: ($event) => upgradeSenior(__props.detailInfo)
                                }, toDisplayString(unref(t)("User.txt36")), 11, ["onClick"])) : createCommentVNode("", true),
                                unref(mergeList) && __props.detailInfo.phaseIndex === 3 && unref(challengeDetailHooks).seniorLev1 === "User.txt32" ? (openBlock(), createBlock("button", {
                                  key: 1,
                                  class: ["btn deep", { disabled: ((_a = unref(mergeList)) == null ? void 0 : _a.length) === 0 }],
                                  onClick: ($event) => mergeHandler(__props.detailInfo)
                                }, toDisplayString(((_b = unref(mergeList)) == null ? void 0 : _b.length) === 0 ? unref(t)("User.txt37") : unref(t)("Home.challenge.text11")), 11, ["onClick"])) : createCommentVNode("", true)
                              ])
                            ];
                          }),
                          _: 1
                        }, 8, ["headerList"])
                      ]),
                      _: 1
                    }, 8, ["title"])
                  ], 64)) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "btnGroup" }, [
                  __props.detailInfo.status == 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    unref(challengeDetailHooks).btnUpgradeSettlement ? (openBlock(), createBlock("button", {
                      key: 0,
                      class: "btn deep",
                      onClick: ($event) => bindCallUpGrade(__props.detailInfo, 0)
                    }, toDisplayString(unref(t)("User.btn5")), 9, ["onClick"])) : createCommentVNode("", true),
                    unref(challengeDetailHooks).btnMT5 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(_component_nuxt_link_locale, {
                        class: "btn deep",
                        to: `${unref(APP_MC_MARKETS)}/en-US/login?actionType=login`,
                        target: "_blank",
                        rel: "nofollow"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("MC Markets")
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_nuxt_link_locale, {
                        class: "btn light",
                        to: unref(APP_MT5),
                        target: "_blank",
                        rel: "nofollow"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("MT5")
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ], 64)) : createCommentVNode("", true),
                    unref(challengeDetailHooks).btnSettlement ? (openBlock(), createBlock("button", {
                      key: 2,
                      class: "btn deep",
                      onClick: ($event) => bindCallUpGrade(__props.detailInfo, 1)
                    }, toDisplayString(unref(t)("User.btn7")), 9, ["onClick"])) : createCommentVNode("", true)
                  ], 64)) : __props.detailInfo.status == 2 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("button", {
                      class: "btn deep",
                      onClick: submitFail
                    }, toDisplayString(unref(t)("User.btn7")), 1),
                    __props.detailInfo.phaseIndex != 3 ? (openBlock(), createBlock("button", {
                      key: 0,
                      class: "btn light",
                      onClick: failRePayment
                    }, toDisplayString(unref(t)("User.btn6")), 1)) : createCommentVNode("", true)
                  ], 64)) : __props.detailInfo.status == 3 ? (openBlock(), createBlock("button", {
                    key: 2,
                    class: "btn light",
                    onClick: close
                  }, toDisplayString(unref(t)("User.close")), 1)) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(mergePopup, {
        ref_key: "mergePopupRef",
        ref: mergePopupRef
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/home/challengeDetailPopup/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const challengeDetailPopup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e6d7d53d"]]);
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useChallenges();
    const tipsPopupRef = ref();
    const publicUpGradeRef = ref();
    const challengeDetailRef = ref();
    const publicFailRePaymentRef = ref();
    const i18n = useI18n();
    const { t, locale } = i18n;
    const detailInfo = ref({});
    const upGradeData = ref({});
    const publicTipsRef = ref();
    const tipsContent = ref("");
    const submitFailRef = ref();
    const isMobile = computed(() => {
      return useCheckMobile().getItem();
    });
    const initData = ref({
      loading: true,
      list: []
    });
    const pageData = ref({
      current: 1,
      size: 10,
      total: 0
    });
    const scrollLoad = () => {
      const total = pageData.value.total;
      const size = pageData.value.size;
      const totalPage = Math.ceil(total / size);
      pageData.value.current += 1;
      if (pageData.value.current <= totalPage) {
        getList();
      }
    };
    const getPageChange = (e) => {
      initData.value.loading = true;
      initData.value.list = [];
      pageData.value.current = e;
      getList();
    };
    const getList = async () => {
      getChallengeList(pageData.value).then((res) => {
        initData.value.loading = false;
        pageData.value.total = res.data.total;
        if (isMobile.value) {
          initData.value.list = initData.value.list.concat(res.data.records);
        } else {
          initData.value.list = res.data.records;
        }
      }).catch(() => {
        initData.value.loading = false;
      });
    };
    const bindShowChallengeDetail = async (data) => {
      const param = { tradingChallengeUid: data.uid };
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      let challengeDetailRes = await getChallengeDetail(param);
      let challengeScalingPlanRes = await getChallengeScalingPlan({ challengeUid: data.uid });
      let ChallengeSeniorPlanRes = await getChallengeSeniorPlan({ challengeUid: data.uid });
      detailInfo.value = deepClone(challengeDetailRes.data);
      Object.assign(detailInfo.value, data);
      const dsnw = challengeDetailRes.data.dailySettlementNetWrth ? challengeDetailRes.data.dailySettlementNetWrth : 0;
      const ddnw = challengeDetailRes.data.maxDailyDrawdown ? challengeDetailRes.data.maxDailyDrawdown : 0;
      const tdnw = challengeDetailRes.data.maxTotalDrawdown ? challengeDetailRes.data.maxTotalDrawdown : 0;
      detailInfo.value.minAccountDdnw = subtract(dsnw, ddnw);
      detailInfo.value.minAccountTdnw = subtract(dsnw, tdnw);
      detailInfo.value.scalingPlan = challengeScalingPlanRes.data;
      detailInfo.value.seniorPlan = ChallengeSeniorPlanRes.data;
      loading.close();
      challengeDetailRef.value.shower(detailInfo.value);
      challengeDetailRef.value.getHooksParam(detailInfo.value);
    };
    const bindOutsideCallRepay = (data) => {
      detailInfo.value.status = data.status;
      detailInfo.value.isUserUp = data.isUserUp;
      detailInfo.value.uid = data.uid;
      detailInfo.value.renewSignUpCost = data.renewSignUpCost;
      detailInfo.value.currency = data.currency;
      detailInfo.value.localCurrency = data.localCurrency;
      detailInfo.value.phaseIndex = data.phaseIndex;
      publicFailRePaymentRef.value.shower();
    };
    const bindCallUpGrade = (data, type) => {
      var _a;
      upGradeData.value.level = data.level;
      upGradeData.value.phaseIndex = data.phaseIndex;
      upGradeData.value.amount = data.withdrawalAmount;
      upGradeData.value.platform = data.platform;
      upGradeData.value.account = data.account;
      upGradeData.value.tradingChallengeId = data.uid;
      upGradeData.value.withdrawType = type;
      upGradeData.value.orderNo = data.orderNo;
      upGradeData.value.withdrawCount = data.withdrawCount;
      upGradeData.value.renewSignUpCost = data.renewSignUpCost;
      upGradeData.value.profitSharingRatio = data.targetProfitRatio;
      (_a = publicUpGradeRef.value) == null ? void 0 : _a.shower();
      challengeDetailRef.value.close();
    };
    const bindDoFail = debounce(() => {
      bindSettlementFail({ tradingChallengeUid: detailInfo.value.uid }).then(() => {
        getList();
        submitFailRef.value.maskClose();
        challengeDetailRef.value.close();
        ElMessage.warning(t("User.settled"));
      });
    }, 1e3, { leading: true, trailing: false });
    const bindTradeDayTips = (txt) => {
      tipsContent.value = t(txt);
      publicTipsRef.value.shower();
    };
    const closeReFlash = () => {
      challengeDetailRef.value.close();
      getList();
    };
    const bindStartBtnClick = () => {
      tipsPopupRef.value.shower();
    };
    const submitFail = () => submitFailRef.value.shower();
    const failRePayment = () => publicFailRePaymentRef.value.shower();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_table_column = ElTableColumn;
      const _component_publicFailRePayment = __nuxt_component_1$1;
      const _component_publicUpGrade = __nuxt_component_2$1;
      const _component_publicTipsPopup = __nuxt_component_3;
      const _directive_loading = vLoading;
      const _directive_infinite_scroll = ElInfiniteScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ucDiv" }, _attrs))} data-v-d89b3aaa>`);
      if (!isMobile.value) {
        _push(`<div class="ucIndex" data-v-d89b3aaa>`);
        _push(ssrRenderComponent(battleBackLine, null, null, _parent));
        _push(ssrRenderComponent(battleTotalBox, {
          data: unref(initData),
          onCallBtn: bindStartBtnClick
        }, null, _parent));
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "contentWrap",
          "element-loading-background": "#2f2f2f"
        }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(initData).loading)))} data-v-d89b3aaa>`);
        if (unref(initData).list.length === 0 && !unref(initData).loading) {
          _push(ssrRenderComponent(battleEmpty, { onCallBtn: bindStartBtnClick }, null, _parent));
        } else {
          _push(`<!--[--><p class="challengeTitle" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.startBtn"))}</p><div class="mftTable home" data-v-d89b3aaa>`);
          _push(ssrRenderComponent(unref(ElTable), {
            data: unref(initData).list
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_el_table_column, {
                  prop: "orderNo",
                  label: unref(t)("User.list.th1"),
                  fixed: "",
                  "show-overflow-tooltip": ""
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_el_table_column, {
                  label: unref(t)("User.list.th8"),
                  "show-overflow-tooltip": ""
                }, {
                  default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (scope.row.level === 1) {
                        _push3(`<span data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(t)("common.proficient"))}</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (scope.row.level === 2) {
                        _push3(`<span data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(t)("common.advanced"))}</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (scope.row.level === 3) {
                        _push3(`<span data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(t)("Battle.badges.badge3"))}</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (scope.row.level === 4) {
                        _push3(`<span data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(t)("common.master"))}</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (scope.row.level === 5) {
                        _push3(`<span data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(t)("common.legendary"))}</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        scope.row.level === 1 ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("common.proficient")), 1)) : createCommentVNode("", true),
                        scope.row.level === 2 ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(t)("common.advanced")), 1)) : createCommentVNode("", true),
                        scope.row.level === 3 ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(t)("Battle.badges.badge3")), 1)) : createCommentVNode("", true),
                        scope.row.level === 4 ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(unref(t)("common.master")), 1)) : createCommentVNode("", true),
                        scope.row.level === 5 ? (openBlock(), createBlock("span", { key: 4 }, toDisplayString(unref(t)("common.legendary")), 1)) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_el_table_column, {
                  label: unref(t)("Battle.size"),
                  "show-overflow-tooltip": ""
                }, {
                  default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(formatNumberWithCurrency)(
                        scope.row.accountSize,
                        0
                      ))}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(unref(formatNumberWithCurrency)(
                          scope.row.accountSize,
                          0
                        )), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_el_table_column, {
                  label: unref(t)("User.list.th4"),
                  "show-overflow-tooltip": ""
                }, {
                  default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (scope.row.status === 0) {
                        _push3(`<p class="status_success" data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(t)("User.list.stu1"))}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (scope.row.status === 1) {
                        _push3(`<p class="status_success" data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(t)("User.tips4"))}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (scope.row.status === 2) {
                        _push3(`<p class="status_warning" data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(t)("User.tips5"))}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (scope.row.status === 3) {
                        _push3(`<p class="status_warning" data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(t)("User.tips19"))}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        scope.row.status === 0 ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "status_success"
                        }, toDisplayString(unref(t)("User.list.stu1")), 1)) : createCommentVNode("", true),
                        scope.row.status === 1 ? (openBlock(), createBlock("p", {
                          key: 1,
                          class: "status_success"
                        }, toDisplayString(unref(t)("User.tips4")), 1)) : createCommentVNode("", true),
                        scope.row.status === 2 ? (openBlock(), createBlock("p", {
                          key: 2,
                          class: "status_warning"
                        }, toDisplayString(unref(t)("User.tips5")), 1)) : createCommentVNode("", true),
                        scope.row.status === 3 ? (openBlock(), createBlock("p", {
                          key: 3,
                          class: "status_warning"
                        }, toDisplayString(unref(t)("User.tips19")), 1)) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_el_table_column, {
                  label: unref(t)("User.list.th9"),
                  "show-overflow-tooltip": ""
                }, {
                  default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-d89b3aaa${_scopeId2}>Step ${ssrInterpolate(scope.row.phaseIndex)}</span>`);
                    } else {
                      return [
                        createVNode("span", null, "Step " + toDisplayString(scope.row.phaseIndex), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_el_table_column, {
                  label: unref(t)("User.list.th11"),
                  "show-overflow-tooltip": ""
                }, {
                  default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(formatNumberWithCurrency)(scope.row.settledProfit))}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(unref(formatNumberWithCurrency)(scope.row.settledProfit)), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_el_table_column, {
                  label: unref(t)("User.created"),
                  "show-overflow-tooltip": ""
                }, {
                  default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(("formatterTimeZone" in _ctx ? _ctx.formatterTimeZone : unref(formatterTimeZone))(scope.row.createTime))}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(("formatterTimeZone" in _ctx ? _ctx.formatterTimeZone : unref(formatterTimeZone))(scope.row.createTime)), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_el_table_column, {
                  label: unref(t)("User.list.th12"),
                  align: "right",
                  fixed: "right",
                  width: unref(locale) === "de-de" || unref(locale) === "id-idn" ? 225 : unref(locale) !== "zh-hk" ? 180 : ""
                }, {
                  default: withCtx((scope, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="btnList" data-v-d89b3aaa${_scopeId2}><button class="tableBtn" data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(t)("User.list.btn1"))}</button>`);
                      if (scope.row.status === 2 && scope.row.phaseIndex !== 3) {
                        _push3(`<button class="tableBtn" data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(t)("User.btn6"))}</button>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (scope.row.phaseIndex !== 3 && scope.row.isUserUp) {
                        _push3(`<button class="tableBtn" data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(t)("User.list.btn2"))}</button>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (scope.row.phaseIndex === 3 && scope.row.isUserUp) {
                        _push3(`<button class="tableBtn" data-v-d89b3aaa${_scopeId2}>${ssrInterpolate(unref(t)("User.btn3"))}</button>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "btnList" }, [
                          createVNode("button", {
                            class: "tableBtn",
                            onClick: ($event) => bindShowChallengeDetail(scope.row)
                          }, toDisplayString(unref(t)("User.list.btn1")), 9, ["onClick"]),
                          scope.row.status === 2 && scope.row.phaseIndex !== 3 ? (openBlock(), createBlock("button", {
                            key: 0,
                            class: "tableBtn",
                            onClick: ($event) => bindOutsideCallRepay(scope.row)
                          }, toDisplayString(unref(t)("User.btn6")), 9, ["onClick"])) : createCommentVNode("", true),
                          scope.row.phaseIndex !== 3 && scope.row.isUserUp ? (openBlock(), createBlock("button", {
                            key: 1,
                            class: "tableBtn",
                            onClick: ($event) => bindCallUpGrade(scope.row, 0)
                          }, toDisplayString(unref(t)("User.list.btn2")), 9, ["onClick"])) : createCommentVNode("", true),
                          scope.row.phaseIndex === 3 && scope.row.isUserUp ? (openBlock(), createBlock("button", {
                            key: 2,
                            class: "tableBtn",
                            onClick: ($event) => bindCallUpGrade(scope.row, 1)
                          }, toDisplayString(unref(t)("User.btn3")), 9, ["onClick"])) : createCommentVNode("", true)
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_el_table_column, {
                    prop: "orderNo",
                    label: unref(t)("User.list.th1"),
                    fixed: "",
                    "show-overflow-tooltip": ""
                  }, null, 8, ["label"]),
                  createVNode(_component_el_table_column, {
                    label: unref(t)("User.list.th8"),
                    "show-overflow-tooltip": ""
                  }, {
                    default: withCtx((scope) => [
                      scope.row.level === 1 ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("common.proficient")), 1)) : createCommentVNode("", true),
                      scope.row.level === 2 ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(t)("common.advanced")), 1)) : createCommentVNode("", true),
                      scope.row.level === 3 ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(t)("Battle.badges.badge3")), 1)) : createCommentVNode("", true),
                      scope.row.level === 4 ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(unref(t)("common.master")), 1)) : createCommentVNode("", true),
                      scope.row.level === 5 ? (openBlock(), createBlock("span", { key: 4 }, toDisplayString(unref(t)("common.legendary")), 1)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_el_table_column, {
                    label: unref(t)("Battle.size"),
                    "show-overflow-tooltip": ""
                  }, {
                    default: withCtx((scope) => [
                      createVNode("span", null, toDisplayString(unref(formatNumberWithCurrency)(
                        scope.row.accountSize,
                        0
                      )), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_el_table_column, {
                    label: unref(t)("User.list.th4"),
                    "show-overflow-tooltip": ""
                  }, {
                    default: withCtx((scope) => [
                      scope.row.status === 0 ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "status_success"
                      }, toDisplayString(unref(t)("User.list.stu1")), 1)) : createCommentVNode("", true),
                      scope.row.status === 1 ? (openBlock(), createBlock("p", {
                        key: 1,
                        class: "status_success"
                      }, toDisplayString(unref(t)("User.tips4")), 1)) : createCommentVNode("", true),
                      scope.row.status === 2 ? (openBlock(), createBlock("p", {
                        key: 2,
                        class: "status_warning"
                      }, toDisplayString(unref(t)("User.tips5")), 1)) : createCommentVNode("", true),
                      scope.row.status === 3 ? (openBlock(), createBlock("p", {
                        key: 3,
                        class: "status_warning"
                      }, toDisplayString(unref(t)("User.tips19")), 1)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_el_table_column, {
                    label: unref(t)("User.list.th9"),
                    "show-overflow-tooltip": ""
                  }, {
                    default: withCtx((scope) => [
                      createVNode("span", null, "Step " + toDisplayString(scope.row.phaseIndex), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_el_table_column, {
                    label: unref(t)("User.list.th11"),
                    "show-overflow-tooltip": ""
                  }, {
                    default: withCtx((scope) => [
                      createVNode("span", null, toDisplayString(unref(formatNumberWithCurrency)(scope.row.settledProfit)), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_el_table_column, {
                    label: unref(t)("User.created"),
                    "show-overflow-tooltip": ""
                  }, {
                    default: withCtx((scope) => [
                      createVNode("span", null, toDisplayString(("formatterTimeZone" in _ctx ? _ctx.formatterTimeZone : unref(formatterTimeZone))(scope.row.createTime)), 1)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_el_table_column, {
                    label: unref(t)("User.list.th12"),
                    align: "right",
                    fixed: "right",
                    width: unref(locale) === "de-de" || unref(locale) === "id-idn" ? 225 : unref(locale) !== "zh-hk" ? 180 : ""
                  }, {
                    default: withCtx((scope) => [
                      createVNode("div", { class: "btnList" }, [
                        createVNode("button", {
                          class: "tableBtn",
                          onClick: ($event) => bindShowChallengeDetail(scope.row)
                        }, toDisplayString(unref(t)("User.list.btn1")), 9, ["onClick"]),
                        scope.row.status === 2 && scope.row.phaseIndex !== 3 ? (openBlock(), createBlock("button", {
                          key: 0,
                          class: "tableBtn",
                          onClick: ($event) => bindOutsideCallRepay(scope.row)
                        }, toDisplayString(unref(t)("User.btn6")), 9, ["onClick"])) : createCommentVNode("", true),
                        scope.row.phaseIndex !== 3 && scope.row.isUserUp ? (openBlock(), createBlock("button", {
                          key: 1,
                          class: "tableBtn",
                          onClick: ($event) => bindCallUpGrade(scope.row, 0)
                        }, toDisplayString(unref(t)("User.list.btn2")), 9, ["onClick"])) : createCommentVNode("", true),
                        scope.row.phaseIndex === 3 && scope.row.isUserUp ? (openBlock(), createBlock("button", {
                          key: 2,
                          class: "tableBtn",
                          onClick: ($event) => bindCallUpGrade(scope.row, 1)
                        }, toDisplayString(unref(t)("User.btn3")), 9, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  }, 8, ["label", "width"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div><div class="mftPagination" style="${ssrRenderStyle(!unref(initData).loading ? null : { display: "none" })}" data-v-d89b3aaa>`);
          _push(ssrRenderComponent(unref(ElPagination), {
            background: "",
            layout: "prev, pager, next",
            total: unref(pageData).total,
            "page-size": unref(pageData).size,
            "hide-on-single-page": "",
            onCurrentChange: getPageChange
          }, null, _parent));
          _push(`</div><!--]-->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="mobUcIndex" data-v-d89b3aaa>`);
        _push(ssrRenderComponent(battleTotalBox, {
          data: unref(initData),
          onCallBtn: bindStartBtnClick
        }, null, _parent));
        if (unref(initData).list.length === 0 && !unref(initData).loading) {
          _push(ssrRenderComponent(battleEmpty, { onCallBtn: bindStartBtnClick }, null, _parent));
        } else {
          _push(`<ul${ssrRenderAttrs(mergeProps({
            class: "list",
            "infinite-scroll-distance": 20,
            "infinite-scroll-delay": 500,
            "infinite-scroll-immediate": false
          }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, scrollLoad)))} data-v-d89b3aaa><!--[-->`);
          ssrRenderList(unref(initData).list, (item, index) => {
            _push(`<li class="item" data-v-d89b3aaa><div class="statusLine" data-v-d89b3aaa><p class="name" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.account.title1"))}</p>`);
            if (item.status === 0) {
              _push(`<p class="status success" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.list.stu1"))}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (item.status === 1) {
              _push(`<p class="status success" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.tips4"))}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (item.status === 2) {
              _push(`<p class="status fail" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.tips5"))}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (item.status === 3) {
              _push(`<p class="status fail" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.tips19"))}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="contentWrap" data-v-d89b3aaa><div class="textLine" data-v-d89b3aaa><p class="label" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.account.li1"))}</p><p class="value" data-v-d89b3aaa>${ssrInterpolate(item.orderNo)}</p></div><div class="textLine" data-v-d89b3aaa><p class="label" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.list.th8"))}</p>`);
            if (item.level === 1) {
              _push(`<p class="value" data-v-d89b3aaa>${ssrInterpolate(unref(t)("common.proficient"))}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (item.level === 2) {
              _push(`<p class="value" data-v-d89b3aaa>${ssrInterpolate(unref(t)("common.advanced"))}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (item.level === 3) {
              _push(`<p class="value" data-v-d89b3aaa>${ssrInterpolate(unref(t)("Battle.badges.badge3"))}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (item.level === 4) {
              _push(`<p class="value" data-v-d89b3aaa>${ssrInterpolate(unref(t)("common.master"))}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (item.level === 5) {
              _push(`<p class="value" data-v-d89b3aaa>${ssrInterpolate(unref(t)("common.legendary"))}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="textLine" data-v-d89b3aaa><p class="label" data-v-d89b3aaa>${ssrInterpolate(unref(t)("Battle.size"))}</p><p class="value" data-v-d89b3aaa>${ssrInterpolate(unref(formatNumberWithCurrency)(item.accountSize, 0))}</p></div><div class="textLine" data-v-d89b3aaa><p class="label" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.list.th9"))}</p><p class="value" data-v-d89b3aaa> Step ${ssrInterpolate(item.phaseIndex)}</p></div><div class="textLine" data-v-d89b3aaa><p class="label" data-v-d89b3aaa>${ssrInterpolate(unref(t)("Battle.plat"))}</p><p class="value" data-v-d89b3aaa>${ssrInterpolate(item.platform)}</p></div><div class="textLine" data-v-d89b3aaa><p class="label" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.list.th11"))}</p><p class="value" data-v-d89b3aaa>${ssrInterpolate(unref(formatNumberWithCurrency)(item.settledProfit))}</p></div><div class="textLine" data-v-d89b3aaa><p class="label" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.account.li6"))}</p><p class="value" data-v-d89b3aaa>${ssrInterpolate(item.account)}</p></div><div class="textLine" data-v-d89b3aaa><p class="label" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.created"))}</p><p class="value" data-v-d89b3aaa>${ssrInterpolate(("formatterTimeZone" in _ctx ? _ctx.formatterTimeZone : unref(formatterTimeZone))(item.createTime))}</p></div><div class="btnLine" data-v-d89b3aaa><button class="btn light" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.list.btn1"))}</button>`);
            if (item.status === 2 && item.phaseIndex !== 3) {
              _push(`<button class="btn deep" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.btn6"))}</button>`);
            } else {
              _push(`<!---->`);
            }
            if (item.phaseIndex !== 3 && item.isUserUp) {
              _push(`<button class="btn deep" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.list.btn2"))}</button>`);
            } else {
              _push(`<!---->`);
            }
            if (item.phaseIndex === 3 && item.isUserUp) {
              _push(`<button class="btn deep" data-v-d89b3aaa>${ssrInterpolate(unref(t)("User.btn3"))}</button>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></li>`);
          });
          _push(`<!--]--></ul>`);
        }
        _push(`</div>`);
      }
      _push(ssrRenderComponent(challengeDetailPopup, {
        ref_key: "challengeDetailRef",
        ref: challengeDetailRef,
        detailInfo: unref(detailInfo),
        onBindCallUpGrade: bindCallUpGrade,
        onSubmitFail: submitFail,
        onFailRePayment: failRePayment,
        onBindTradeDayTips: ($event) => bindTradeDayTips(unref(t)("User.tips18")),
        onUpgradeSenior: bindTradeDayTips,
        onUpgradeScalingPlan: bindTradeDayTips
      }, null, _parent));
      _push(ssrRenderComponent(_component_publicFailRePayment, {
        ref_key: "publicFailRePaymentRef",
        ref: publicFailRePaymentRef,
        data: unref(detailInfo)
      }, null, _parent));
      _push(ssrRenderComponent(_component_publicUpGrade, {
        ref_key: "publicUpGradeRef",
        ref: publicUpGradeRef,
        data: unref(upGradeData),
        onReFlashList: closeReFlash
      }, null, _parent));
      _push(ssrRenderComponent(_component_publicTipsPopup, {
        ref_key: "publicTipsRef",
        ref: publicTipsRef,
        content: unref(tipsContent),
        maskBG: "rgba(0,0,0,0)",
        isBtnGroup: false,
        isClose: false,
        isSingleBtn: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="" class="tips-pic" data-v-d89b3aaa${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "",
                class: "tips-pic"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_publicTipsPopup, {
        ref_key: "submitFailRef",
        ref: submitFailRef,
        content: unref(t)("User.tips20"),
        onSubmit: unref(bindDoFail)
      }, null, _parent));
      _push(ssrRenderComponent(_component_publicTipsPopup, {
        ref_key: "tipsPopupRef",
        ref: tipsPopupRef,
        isSingleBtn: "",
        content: unref(t)("common.fund55"),
        isBtnGroup: false
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/home/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d89b3aaa"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_userHome = __nuxt_component_0;
      _push(ssrRenderComponent(_component_userHome, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CzzyDKZ8.js.map
