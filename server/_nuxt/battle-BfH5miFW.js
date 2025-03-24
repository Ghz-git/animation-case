import { _ as __nuxt_component_1 } from "./client-only-Db1Q_2tj.js";
import { u as usePayment, _ as __nuxt_component_1$1 } from "./usePayment-DTlV3mZU.js";
import { _ as _export_sfc, u as useI18n, n as nuxtTo, aa as deepClone, a4 as useRouter, C as formatNumberWithCurrency } from "../server.mjs";
/* empty css                */
/* empty css                   */
import { ref, unref, withCtx, mergeProps, createVNode, toDisplayString, withDirectives, openBlock, createBlock, isRef, vModelText, Fragment, createCommentVNode, createTextVNode, useSSRContext, computed, toRefs, watch } from "vue";
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { b as battleBackLine } from "./backLine-s-8UBp52.js";
import { _ as __nuxt_component_0$1 } from "./index-DcwL4Y5F.js";
import "dayjs";
import { v as vLoading } from "./directive-o9p6vhNm.js";
import { _ as _imports_0$1 } from "./close-CUfcVM9H.js";
import { debounce } from "lodash-es";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import { f as flag } from "./currencyFlag-B5fK02oa.js";
import { a as getCurrencyList, b as getCurrencyConverter } from "./challenge-C5uxJouc.js";
import { u as useChallengeInfo } from "./useChallengeInfo-D8ZmMr9V.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "decimal.js";
import "./useRequest-FImzQkjq.js";
import "./config-81Rc5edc.js";
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
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./back-Dn6PN45-.js";
import "./Norway-DkftQzDj.js";
import "./NewZealand-bu8O6zsF.js";
import "./challengesData-Ie0NoZuw.js";
import "./yellow-BzR1n8Bd.js";
import "./challenges-DfBymhN9.js";
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgBxVa9bhNBEJ65YOy4cYoogoqjoaCBBonS8AThCUgbGuAJkkhUNIQiNVBSIESNFNwhikjpaCKCKAApAtnYOV/ub5jZ3Tvv3l/oGMvevdn5duabmV0fQIvQ3vCmfFvXnw19+AfB2g0E3MUXvDw0ql18sP/YXfc+8NQ3u2zj5v4OtIhXq+15W5YTkUe0d3e7eLKdKM+wzesb0CIXygqOdoWBFVAwibberK1dGVxeXonD1O/0llwDj+7z70tokCqjHqzUGX58/Y1J4sbkZ7h+9Ol31YDqcY2OcHP0lUHjsr7TXTDoDzrVnRAPoUWQiB5yOOtwylEGJwCzXwAnRz5Mv/swnwCE/PVvQ9C/DsE4VqDV7ADg/RNhodtJxig4hCweWzuP8GlUNIjUaBeyTADEH92FywMGJ6zzWJcirF6Dvn8L+jnq4AsHNWZrNicSNoK7kbtQrkk100596hAXpvas7hDozdGM2qEKl6gO4SnvuVob50JwvpDZmIxDKhyXRFL3nGmugwlIw21blBSWwuvYzBxTq27v4H+ICoeO3/qFpnuR4CzCYhS5xMs9+8r7TPDjGIp1GytyFk3w6j3niOibAUO+12Co5nGo3Uc8eqiB6cDd8LTHdlOuB7l6waj9cMS/d6qO5lPDzc43SqG1Ik2c/SBJNEZDyGqnRtGOwlm5kKpx1ZrMk8hFpfwcTtH0JTqBYaujqbbPo7NHzciFC8P5bPGs7MWJZ44IneOoyJ068jk7hDQuMYo1ZpE266RTG6PZwtbcKWau9eUaybPCMAtC9x5QkCZG8xkUaXJTp4FpVMeouQmwlZFVfM+MudOkVKMkluDcG9EuTbOjqaFs3cb5vSegSuoMI8DqJYr1RVowar5Cq82QJTbGckLy94DNjAJVWDt5aKWB2FFN6qaWddFI+X8RNDOSTtEgnbY8OkFV2ts6R2hyrJnoTdBrcvSnpJaIMjB9ipUaZXHe3rlxGdzgKJnvQAqvQN4/UjFNmc0SqtGTseuilhiWBK5OcAU+q7zc/AUGSWyB0eC+bAAAAABJRU5ErkJggg==";
const _sfc_main$3 = {
  __name: "activity",
  __ssrInlineRender: true,
  emits: ["used"],
  setup(__props, { emit: __emit }) {
    const { activityCodeLoading, bindCheckActivityCode } = usePayment();
    const activityPopupRef = ref();
    const checkResult = ref("");
    const activityCode = ref("");
    const emits = __emit;
    const { t } = useI18n();
    const bindDoCheck = debounce(() => {
      if (activityCode.value.length === 6) {
        bindCheckActivityCode().then((res) => {
          checkResult.value = res.msg;
          console.log("xxxxxxxxx", res);
        }).catch((err) => {
          console.log("ccccccccc", err);
          checkResult.value = err.msg;
        });
      } else {
        checkResult.value = "error";
      }
    }, 300, { leading: false, trailing: true });
    const bindSubmit = () => {
      if (checkResult.value !== "success") return false;
      activityPopupRef.value.maskHide();
      emits("used", {
        type: 2,
        price: 799,
        couponId: "111111111111"
      });
    };
    const linkTo = (url) => {
      nuxtTo(url);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMaskPopup = __nuxt_component_0$1;
      const _directive_loading = vLoading;
      _push(`<!--[--><div class="activity" data-v-ba1748f5><img class="gift" alt=""${ssrRenderAttr("src", _imports_0)} data-v-ba1748f5><div class="textBox" data-v-ba1748f5><span data-v-ba1748f5>${ssrInterpolate(unref(t)("User.txt9"))}</span></div></div>`);
      _push(ssrRenderComponent(_component_publicMaskPopup, {
        ref_key: "activityPopupRef",
        ref: activityPopupRef,
        isCenter: "",
        isClickMaskHide: false
      }, {
        slot_mask: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="activityPopup" data-v-ba1748f5${_scopeId}><img class="close" alt=""${ssrRenderAttr("src", _imports_0$1)} data-v-ba1748f5${_scopeId}><p class="popupName" data-v-ba1748f5${_scopeId}>${ssrInterpolate(unref(t)("User.txt9"))}</p><div${ssrRenderAttrs(mergeProps({
              class: "paymentCode",
              "element-loading-background": "rgba(0, 0, 0, 0.5)"
            }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(activityCodeLoading))))} data-v-ba1748f5${_scopeId}><p class="tit" data-v-ba1748f5${_scopeId}>${ssrInterpolate(unref(t)("Login.placeholder6"))}</p><div class="${ssrRenderClass([{ err: unref(checkResult) === "error" }, "inputBox"])}" data-v-ba1748f5${_scopeId}><input class="in"${ssrRenderAttr("value", unref(activityCode))} data-v-ba1748f5${_scopeId}></div></div>`);
            if (unref(checkResult) === "success") {
              _push2(`<!--[--><div class="descLine" data-v-ba1748f5${_scopeId}><p class="label" data-v-ba1748f5${_scopeId}>${ssrInterpolate(unref(t)("Battle.size"))}</p><p class="value" data-v-ba1748f5${_scopeId}>大师($200,000)</p></div><div class="descLine" data-v-ba1748f5${_scopeId}><p class="label" data-v-ba1748f5${_scopeId}>${ssrInterpolate(unref(t)("User.txt12"))}</p><p class="value" data-v-ba1748f5${_scopeId}>$1699</p></div><div class="descLine" data-v-ba1748f5${_scopeId}><p class="label" data-v-ba1748f5${_scopeId}>${ssrInterpolate(unref(t)("User.txt13"))}</p><p class="value" data-v-ba1748f5${_scopeId}>$999</p></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(checkResult) === "error") {
              _push2(`<p class="errLine" data-v-ba1748f5${_scopeId}>输入的活动码有误</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button class="${ssrRenderClass([{ active: unref(checkResult) === "success" }, "btn"])}" data-v-ba1748f5${_scopeId}>${ssrInterpolate(unref(t)("User.txt10"))}</button><div class="bottomText" data-v-ba1748f5${_scopeId}><p class="text" data-v-ba1748f5${_scopeId}>没有活动码？立即联系客服<span data-v-ba1748f5${_scopeId}>获取</span></p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "activityPopup" }, [
                createVNode("img", {
                  class: "close",
                  alt: "",
                  src: _imports_0$1,
                  onClick: unref(activityPopupRef).maskHide
                }, null, 8, ["onClick"]),
                createVNode("p", { class: "popupName" }, toDisplayString(unref(t)("User.txt9")), 1),
                withDirectives((openBlock(), createBlock("div", {
                  class: "paymentCode",
                  "element-loading-background": "rgba(0, 0, 0, 0.5)"
                }, [
                  createVNode("p", { class: "tit" }, toDisplayString(unref(t)("Login.placeholder6")), 1),
                  createVNode("div", {
                    class: ["inputBox", { err: unref(checkResult) === "error" }]
                  }, [
                    withDirectives(createVNode("input", {
                      class: "in",
                      "onUpdate:modelValue": ($event) => isRef(activityCode) ? activityCode.value = $event : null,
                      onInput: unref(bindDoCheck)
                    }, null, 40, ["onUpdate:modelValue", "onInput"]), [
                      [vModelText, unref(activityCode)]
                    ])
                  ], 2)
                ])), [
                  [_directive_loading, unref(activityCodeLoading)]
                ]),
                unref(checkResult) === "success" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("div", { class: "descLine" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(t)("Battle.size")), 1),
                    createVNode("p", { class: "value" }, "大师($200,000)")
                  ]),
                  createVNode("div", { class: "descLine" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(t)("User.txt12")), 1),
                    createVNode("p", { class: "value" }, "$1699")
                  ]),
                  createVNode("div", { class: "descLine" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(t)("User.txt13")), 1),
                    createVNode("p", { class: "value" }, "$999")
                  ])
                ], 64)) : createCommentVNode("", true),
                unref(checkResult) === "error" ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: "errLine"
                }, "输入的活动码有误")) : createCommentVNode("", true),
                createVNode("button", {
                  class: ["btn", { active: unref(checkResult) === "success" }],
                  onClick: bindSubmit
                }, toDisplayString(unref(t)("User.txt10")), 3),
                createVNode("div", { class: "bottomText" }, [
                  createVNode("p", { class: "text" }, [
                    createTextVNode("没有活动码？立即联系客服"),
                    createVNode("span", {
                      onClick: ($event) => linkTo("/contact")
                    }, "获取", 8, ["onClick"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/battle/activity.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const battleActivity = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ba1748f5"]]);
const _sfc_main$2 = {
  __name: "toolTips",
  __ssrInlineRender: true,
  props: {
    contentStr: {
      type: String,
      default: ""
    },
    valueStr: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    computed(() => useCheckMobile().getItem());
    const props = __props;
    toRefs(props);
    useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_1;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/battle/toolTips.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const battleToolTips = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3b514741"]]);
const iconDefault = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPwSURBVHgB1Zk/TBNRHMe/V5rYThY3WDxxdLANIyS0CaOJMDgqsLiCg8G4WBZD4iB1dEHiyEATHU04ElYCDDpKWXC0TsDi+fu+d1fa3p/eu1LAT3Lcn/Zx3/7e7/t7795ZSIlbRQFnKMLFYzm1ZSvKVvA20pStofYWdmTvWKtwkBILhrivUPbEzbeJSgrF1zGEmvUWByYNEwv1BL6RwzIuB0fuviBRbiT5ck+hqotPlcAlDIY15LFiVVW0I4kVKlG0JYrb0Dk4SBqipBIX3UzUB+5LZZR9DF4k1D0kIO5rZchQQiOqRGZUJE3N0i9NMVolzGgBoVfY3VGwnJW606BDqGecq+ruOBpisFK7wTpzVLvbxvVje1patCLqdfkR0jK5CIx4Xvh9rPcnkmo/6kiNrgQOD7Otiy7WkQaK+yWCcsPA+HznZ7w++hDY2xDxDRijBxgH8CLquXwfpgzbwPKRFvHTCQo9kxTLeYWjVtLCTfGiqnM0g0X0AwV3iyS+yN1aOpHExQx3vplmMCj2PgFf+xp951iNMmqykbaws8urkpsfSuGfMx2YXauu3p6sX0Q5OWo6STOV0Q/MQ7qbOchjpoGfm9P0ggj8WNHfpdDn2/r8rJn8HtL9WfkzhX559F7Kk9e9jHK+0Bk5P0cpkEJHi160E2Nb7rJyexFpYPSebukbx0HxFJmmRGkaNJONNFCkH51uUd2C/O9yn44ChaYzEvOt+8bMu80F4MuLYNf6YnOpblfIIA2smWPlzmuMIg112tSCv60E21HsZLpSRdfTfmY/c3wueM3vco5UcV3MOcHumpnrRSMjatRCMVYOXmOuUiBNw7E9Cnb9/TIMUWYyG9tGitECGE1Ge3P+onaa/I8oLB3RY6NG+R5ZMl3VpqGZTiJiMHwXhuxkRW1din7ySUmca1nY87eluB/q86gfdfoHhjhZGUcPcMvAUHFFm1H0Z0lxdfPIgQFNNc2z1pTIjcTNKCRK7LMt7eqJxXDDEbb9Xkdi2OPwp3neSWI+z0aLnViKrpUsSWxrQgY17i6emZbVI3IZSWG3PpiRyMmcpiDHd+xg/vo/hr1wcmhePy21AljRh75QvQi2jZuEhXv+831rCPWe9mq4OdTaFyE6x/pzVIFky4ADhgsQ1fYLHUJVBbBUTpgPq5eHXtnrWoYMzJ5UuP9em9im3Hs2bPkxdJpnvZNBQItt4OqgyIq6d5imuJb/xUIuUQ3PwWfhQVaDmlq567GWb/KywZbdukS4jMvAUuVwJekrncRCfdQ61ZC8eNCvcEwfgPS8QoZs03dOxkLb8VZZuE2JcIq20f5CTCa8cp3mOFbziRwOer39iOIfCBNS+tB7q1EAAAAASUVORK5CYII=";
const useCurrency = () => {
  const currencyData = ref({});
  const currencyType = ref(1);
  const searchCurrency = ref("");
  const bindGetCurrency = (amount) => {
    getCurrencyList({ assetType: currencyType.value }).then((res) => {
      var _a, _b, _c, _d;
      let list = deepClone(res.data);
      list.forEach((itemList) => {
        const match = flag.find((itemFlag) => itemFlag.name === itemList.currency);
        if (match) {
          itemList.data = match;
        } else {
          itemList.data = {};
          itemList.data.flag = iconDefault;
        }
      });
      currencyData.value.originList = list;
      currencyData.value.list = list;
      currencyData.value.current = ((_a = list.find((item) => item.selected)) == null ? void 0 : _a.currency) ? (_b = list.find((item) => item.selected)) == null ? void 0 : _b.currency : list[0].currency;
      currencyData.value.currentFlag = ((_c = list.find((item) => item.selected)) == null ? void 0 : _c.currency) ? (_d = list.find((item) => item.selected)) == null ? void 0 : _d.data.flag : list[0].data.flag;
      bindGetConverter(amount);
    });
  };
  const bindGetConverter = (amount) => {
    let params = {
      amount,
      assetType: currencyType.value,
      baseCurrency: "USD",
      targetCurrency: currencyData.value.current
    };
    getCurrencyConverter(params).then((res) => {
      currencyData.value.converter = res.data;
    });
  };
  const bindChangeCurrencyType = (type, amount) => {
    currencyType.value = type;
    bindGetCurrency(amount);
  };
  const bindChangeCurrency = (currency, amount) => {
    var _a;
    currencyData.value.list.forEach((item) => {
      item.selected = item.currency === currency;
    });
    currencyData.value.current = currency;
    currencyData.value.currentFlag = (_a = currencyData.value.list.find((item) => item.selected)) == null ? void 0 : _a.data.flag;
    bindGetConverter(amount);
  };
  watch(
    () => searchCurrency.value,
    (newVal, oldVal) => {
      const lowerInput = newVal.toLowerCase();
      const regex = new RegExp(lowerInput, "i");
      currencyData.value.list = currencyData.value.originList.filter((item) => {
        return regex.test(item.currency);
      });
    }
  );
  return { searchCurrency, currencyData, currencyType, bindGetCurrency, bindGetConverter, bindChangeCurrencyType, bindChangeCurrency };
};
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    usePayment();
    const { searchCurrency, currencyData, currencyType, bindGetCurrency, bindGetConverter, bindChangeCurrencyType, bindChangeCurrency } = useCurrency();
    const { challengesData, isEmptyData, getChallengeInfoHooks } = useChallengeInfo();
    const publicWaitingPaymentRef = ref();
    const currentType = ref(0);
    const currentChallenge = ref({});
    const bindGetUsedActivityCode = (e) => {
      currentType.value = e.type;
      currentChallenge.value = challengesData.value.list[e.type];
      currentChallenge.value.discountFee = e.price;
      bindGetConverter(e.price);
    };
    const { t } = useI18n();
    const getItemByKey = (i, key) => {
      return currentChallenge.value.levelList[i].children.find((item) => item.key === key);
    };
    const route = useRouter();
    watch(
      () => route,
      (newValue) => {
        let idx = +newValue.currentRoute.value.query.idx;
        currentType.value = idx ? idx - 1 : 0;
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I;
      const _component_client_only = __nuxt_component_1;
      const _component_publicWaitingPayment = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "battle" }, _attrs))} data-v-9db15e29>`);
      _push(ssrRenderComponent(battleBackLine, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(battleActivity, { onUsed: bindGetUsedActivityCode }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(battleActivity, { onUsed: bindGetUsedActivityCode })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mobTitle mob_show" data-v-9db15e29>${ssrInterpolate(unref(t)("User.list.btn3"))}</p><div class="battle_inner" data-v-9db15e29><div class="battle_inner-order" data-v-9db15e29><h5 class="title" data-v-9db15e29><span class="title_l" data-v-9db15e29>${ssrInterpolate(unref(t)("Battle.setBattle"))} - CFD</span><a href="#desc" class="mob_show goNext" data-v-9db15e29>${ssrInterpolate(unref(t)("Battle.orderDesc"))}</a></h5><div class="acount-size" data-v-9db15e29>${ssrInterpolate(unref(t)("Battle.size"))}</div><div class="acount-list" data-v-9db15e29><!--[-->`);
      ssrRenderList((_a = unref(challengesData)) == null ? void 0 : _a.list, (item, idx) => {
        _push(`<div class="${ssrRenderClass([{ actived: unref(currentType) === idx }, "acount-item"])}"${ssrRenderAttr("data-badge", unref(t)(item == null ? void 0 : item.name))} data-v-9db15e29>${ssrInterpolate(item.amount)}</div>`);
      });
      _push(`<!--]--></div><div class="currencyWrap" data-v-9db15e29><p class="cwTitle" data-v-9db15e29>${ssrInterpolate(unref(t)("Battle.paymentType"))}</p><div class="tapsLine" data-v-9db15e29><p class="${ssrRenderClass([{ active: unref(currencyType) === 1 }, "currencyTap"])}" data-v-9db15e29>${ssrInterpolate(unref(t)("Battle.fiatCurrency"))}</p><p class="${ssrRenderClass([{ active: unref(currencyType) === 0 }, "currencyTap"])}" data-v-9db15e29>${ssrInterpolate(unref(t)("Battle.cryptoCurrency"))}</p></div></div><div class="currencyWrap" data-v-9db15e29><p class="cwTitle" data-v-9db15e29>${ssrInterpolate(unref(t)("Battle.paymentAmount"))}</p>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div><div class="battle-plat" data-v-9db15e29><div class="plat" data-v-9db15e29>${ssrInterpolate(unref(t)("Battle.plat"))}</div><div class="mc" data-v-9db15e29><i class="icon" data-v-9db15e29></i> MC markets(MT5) </div></div><div class="battle-tips" data-v-9db15e29>${ssrInterpolate(unref(t)("Battle.tips"))}</div><p id="desc" class="mob_show" data-v-9db15e29></p></div><div class="battle_inner-desc" data-v-9db15e29><div class="desc" data-v-9db15e29><h5 class="title" data-v-9db15e29>${ssrInterpolate(unref(t)("Battle.orderDesc"))}</h5><div class="acount-total" data-v-9db15e29><div class="acount-btn" data-v-9db15e29>${ssrInterpolate(!unref(isEmptyData) ? unref(t)((_b = unref(currentChallenge)) == null ? void 0 : _b.name) : "--")}</div><span data-v-9db15e29>${ssrInterpolate(((_c = unref(currentChallenge)) == null ? void 0 : _c.discountFee) ? unref(formatNumberWithCurrency)(
        (_d = unref(currentChallenge)) == null ? void 0 : _d.discountFee,
        0
      ) : (_e = unref(currentChallenge)) == null ? void 0 : _e.payment)}</span>`);
      if ((_f = unref(currentChallenge)) == null ? void 0 : _f.discountFee) {
        _push(`<span class="oldPrice" data-v-9db15e29>${ssrInterpolate((_g = unref(currentChallenge)) == null ? void 0 : _g.payment)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="desc-list" data-v-9db15e29><div class="desc-item" data-v-9db15e29>`);
      _push(ssrRenderComponent(battleToolTips, {
        contentStr: unref(t)("User.txt6"),
        valueStr: unref(t)("Battle.size")
      }, null, _parent));
      _push(`<span class="val" data-v-9db15e29>${ssrInterpolate((_h = unref(currentChallenge)) == null ? void 0 : _h.amount)}</span></div><div class="desc-item" data-v-9db15e29>`);
      _push(ssrRenderComponent(battleToolTips, {
        contentStr: unref(t)("User.txt7"),
        valueStr: unref(t)("Battle.li.li1")
      }, null, _parent));
      _push(`<span class="val" data-v-9db15e29>3 ${ssrInterpolate(unref(t)("Battle.li.li9"))}</span></div>`);
      if (!unref(isEmptyData)) {
        _push(`<div class="desc-item" data-v-9db15e29>`);
        _push(ssrRenderComponent(battleToolTips, {
          contentStr: unref(t)((_i = getItemByKey(0, 2)) == null ? void 0 : _i.desc),
          valueStr: unref(t)((_j = getItemByKey(0, 2)) == null ? void 0 : _j.title)
        }, null, _parent));
        _push(`<span class="val" data-v-9db15e29>${ssrInterpolate((_k = getItemByKey(0, 2)) == null ? void 0 : _k.content)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isEmptyData)) {
        _push(`<div class="desc-item" data-v-9db15e29>`);
        _push(ssrRenderComponent(battleToolTips, {
          contentStr: unref(t)((_l = getItemByKey(0, 3)) == null ? void 0 : _l.desc),
          valueStr: unref(t)((_m = getItemByKey(0, 3)) == null ? void 0 : _m.title)
        }, null, _parent));
        _push(`<span class="val" data-v-9db15e29>${ssrInterpolate((_n = getItemByKey(0, 3)) == null ? void 0 : _n.content)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isEmptyData)) {
        _push(`<div class="desc-item" data-v-9db15e29>`);
        _push(ssrRenderComponent(battleToolTips, {
          contentStr: unref(t)((_o = getItemByKey(0, 1)) == null ? void 0 : _o.desc),
          valueStr: unref(t)((_p = getItemByKey(0, 1)) == null ? void 0 : _p.title)
        }, null, _parent));
        _push(`<span class="val" data-v-9db15e29>${ssrInterpolate((_q = getItemByKey(0, 1)) == null ? void 0 : _q.content)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isEmptyData)) {
        _push(`<div class="desc-item" data-v-9db15e29>`);
        _push(ssrRenderComponent(battleToolTips, {
          contentStr: unref(t)((_r = getItemByKey(0, 4)) == null ? void 0 : _r.desc),
          valueStr: unref(t)((_s = getItemByKey(0, 4)) == null ? void 0 : _s.title)
        }, null, _parent));
        _push(`<span class="val" data-v-9db15e29>${ssrInterpolate((_t = getItemByKey(0, 4)) == null ? void 0 : _t.content)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isEmptyData)) {
        _push(`<div class="desc-item" data-v-9db15e29>`);
        _push(ssrRenderComponent(battleToolTips, {
          contentStr: unref(t)((_u = getItemByKey(0, 5)) == null ? void 0 : _u.desc),
          valueStr: unref(t)((_v = getItemByKey(0, 5)) == null ? void 0 : _v.title)
        }, null, _parent));
        _push(`<span class="val" data-v-9db15e29>${ssrInterpolate((_w = getItemByKey(0, 5)) == null ? void 0 : _w.content)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isEmptyData)) {
        _push(`<div class="desc-item" data-v-9db15e29>`);
        _push(ssrRenderComponent(battleToolTips, {
          contentStr: unref(t)((_x = getItemByKey(2, 8)) == null ? void 0 : _x.desc),
          valueStr: unref(t)((_y = getItemByKey(2, 8)) == null ? void 0 : _y.title)
        }, null, _parent));
        _push(`<span class="val" data-v-9db15e29>${ssrInterpolate((_z = getItemByKey(2, 8)) == null ? void 0 : _z.content)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="post-btn" data-v-9db15e29>${ssrInterpolate(unref(t)("Challenges.ScalingPlan.buy"))} ${ssrInterpolate(((_A = unref(currentChallenge)) == null ? void 0 : _A.discountFee) ? unref(formatNumberWithCurrency)((_B = unref(currentChallenge)) == null ? void 0 : _B.discountFee, 0) : (_C = unref(currentChallenge)) == null ? void 0 : _C.payment)}</div><div class="tips" data-v-9db15e29>${ssrInterpolate(unref(t)("Battle.tips2"))}</div></div></div></div>`);
      _push(ssrRenderComponent(_component_publicWaitingPayment, {
        ref_key: "publicWaitingPaymentRef",
        ref: publicWaitingPaymentRef
      }, null, _parent));
      _push(`<div class="battle_bottom_mob mob_show" data-v-9db15e29><div class="btn" data-v-9db15e29>${ssrInterpolate(unref(t)("Challenges.ScalingPlan.buy"))} ${ssrInterpolate(((_D = unref(currentChallenge)) == null ? void 0 : _D.discountFee) ? unref(formatNumberWithCurrency)((_E = unref(currentChallenge)) == null ? void 0 : _E.discountFee, 0) : (_F = unref(currentChallenge)) == null ? void 0 : _F.payment)}</div><p class="tips" data-v-9db15e29>${ssrInterpolate(unref(t)("Battle.fee"))} ${ssrInterpolate(((_G = unref(currentChallenge)) == null ? void 0 : _G.discountFee) ? unref(formatNumberWithCurrency)((_H = unref(currentChallenge)) == null ? void 0 : _H.discountFee, 0) : (_I = unref(currentChallenge)) == null ? void 0 : _I.payment)} ≈ ${ssrInterpolate(unref(currencyData).converter)} ${ssrInterpolate(unref(currencyData).current)}</p></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/battle/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9db15e29"]]);
const _sfc_main = {
  __name: "battle",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_userBattle = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "battle" }, _attrs))} data-v-80b06faa>`);
      _push(ssrRenderComponent(_component_userBattle, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/battle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const battle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-80b06faa"]]);
export {
  battle as default
};
//# sourceMappingURL=battle-BfH5miFW.js.map
