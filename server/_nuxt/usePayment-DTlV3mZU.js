import { _ as __nuxt_component_0 } from "./index-DcwL4Y5F.js";
import { ref, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./close-CUfcVM9H.js";
import { _ as _export_sfc, u as useI18n, L as LANGUAGE_LIST, M as extractSubstringAfterMatch, J as useRoute, n as nuxtTo } from "../server.mjs";
import "dayjs";
import { E as ElLoading } from "./useRequest-FImzQkjq.js";
import { c as bindPayment, d as bindChallengeSignUp, e as bindReRegistration, f as bindChallengeCancel } from "./challenge-C5uxJouc.js";
import { debounce } from "lodash-es";
const _imports_1 = "" + __buildAssetsURL("waitingPayment.DjjsVwiG.png");
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJQSURBVHgB7VfhcdMwFP7kwl3vaK/ZoGICzAZmg4xgJqihAyRMgJkgYYLCBAkTNExgMwH5AT+JeIql5kVIiYyd9nrNd/edZUvv6XtPfrIMHPHIINASSqkBXYbEV8SMKIkD070kLog18StxLoRY4hDQQogj4k8VDz12QpSx80RliBxe0WWMTSY0auKc+MO0NSSazKWmzTGmbH1AF5iszJyodcRZhG1KnDq2szbZch1KYtXVmfHDg6pa+zGZ4WLG6AjtwxE1aGM86VNMQNQk1ihnRiU6QF2f36j35xNVnErmv2T+M9dGeARVaCqkpqp4if8VU7xIkSS35rbG6uS1KJdLs1S3oTkSR0yOTbl2KlFR/qYNUlkfEuLPzfp5s1G+tc9pzmHQCauGCj1BvTsradnUmsVZ5plrxscnbIBOpTX4hJ4gPv4qYDdOIUas65u5Zrzi+JKlrD1Hn1itmgAFTX59emmeTtmIDLsE0Tov0CueT++a6uSNmaNG8zHWkPAIsg9r9AxdXZvJhWRd/wh6xjoHhxK0hlKfKS0X2M5+bcRcwCPooDAv9174BKWBbf078YtZ+2iYCsrRHEtcyF2G7lHBh4qYIl6MDi7mQHeXAF+G7DHURWYi0jtu7CdFj7Xv5gKbl9gixfahbyuaqW/nZP1DFtEl9sBkxyIPjJm5GUoQDx5dTIbc424U2gi6FxwF7cOTEsSLIPpA79uHZKBMr1g75jRQoxGlxYyU/y8jLJQMChWHMSLRwmceclDuMKr0BGgJ1fz6VAGf+rPS6c/miAfHX4dot06BuEo5AAAAAElFTkSuQmCC";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const waitingPaymentRef = ref();
    ref({
      current: 1,
      size: 10,
      total: 0,
      orderBy: "mft"
    });
    const { t, locale } = useI18n();
    const shower = () => {
      waitingPaymentRef.value.maskShow();
    };
    __expose({ shower });
    const linkTo = (url) => {
      nuxtTo(url);
    };
    const bindBtn = (url) => {
      const languageValues = Object.values(LANGUAGE_LIST).map((item) => item.value);
      const pathAfterLanguage = extractSubstringAfterMatch(useRoute().path, languageValues);
      if (url === pathAfterLanguage) {
        waitingPaymentRef.value.maskHide();
      } else {
        linkTo(url);
      }
    };
    const finish = async () => {
      bindBtn("/user");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMaskPopup = __nuxt_component_0;
      _push(ssrRenderComponent(_component_publicMaskPopup, mergeProps({
        ref_key: "waitingPaymentRef",
        ref: waitingPaymentRef,
        isCenter: "",
        isClickMaskHide: false
      }, _attrs), {
        slot_mask: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="waitingPaymentMain" data-v-2ade87fd${_scopeId}><img class="close" alt=""${ssrRenderAttr("src", _imports_0)} data-v-2ade87fd${_scopeId}><img class="icon" alt=""${ssrRenderAttr("src", _imports_1)} data-v-2ade87fd${_scopeId}><p class="text" data-v-2ade87fd${_scopeId}>${ssrInterpolate(unref(t)("Pay.confirm"))}</p><p class="subText" data-v-2ade87fd${_scopeId}>${ssrInterpolate(unref(t)("Pay.txt"))}</p><div class="btnGroup"${ssrRenderAttr("lang", unref(locale))} data-v-2ade87fd${_scopeId}><button class="btn deep" data-v-2ade87fd${_scopeId}>${ssrInterpolate(unref(t)("Pay.payFinish"))}</button><button class="btn light" data-v-2ade87fd${_scopeId}>${ssrInterpolate(unref(t)("Pay.repay"))}</button></div><p class="contact" data-v-2ade87fd${_scopeId}><img class="img" alt=""${ssrRenderAttr("src", _imports_2)} data-v-2ade87fd${_scopeId}> ${ssrInterpolate(unref(t)("Pay.service"))}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "waitingPaymentMain" }, [
                createVNode("img", {
                  class: "close",
                  alt: "",
                  src: _imports_0,
                  onClick: unref(waitingPaymentRef).maskHide
                }, null, 8, ["onClick"]),
                createVNode("img", {
                  class: "icon",
                  alt: "",
                  src: _imports_1
                }),
                createVNode("p", { class: "text" }, toDisplayString(unref(t)("Pay.confirm")), 1),
                createVNode("p", { class: "subText" }, toDisplayString(unref(t)("Pay.txt")), 1),
                createVNode("div", {
                  class: "btnGroup",
                  lang: unref(locale)
                }, [
                  createVNode("button", {
                    class: "btn deep",
                    onClick: finish
                  }, toDisplayString(unref(t)("Pay.payFinish")), 1),
                  createVNode("button", {
                    class: "btn light",
                    onClick: ($event) => bindBtn("/user/order")
                  }, toDisplayString(unref(t)("Pay.repay")), 9, ["onClick"])
                ], 8, ["lang"]),
                createVNode("p", {
                  class: "contact",
                  onClick: ($event) => bindBtn("/contact")
                }, [
                  createVNode("img", {
                    class: "img",
                    alt: "",
                    src: _imports_2
                  }),
                  createTextVNode(" " + toDisplayString(unref(t)("Pay.service")), 1)
                ], 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/waitingPayment/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ade87fd"]]);
const usePayment = () => {
  const bindDoPayment = debounce(
    (params, fnc, isLoading = true) => {
      let loading = null;
      if (isLoading) {
        loading = ElLoading.service({
          lock: false,
          background: "rgba(0, 0, 0, 0.5)"
        });
      }
      bindPayment(params).then((res) => {
        loading == null ? void 0 : loading.close();
        (void 0).open(res.data.redirectPageUrl, "_blank");
        fnc();
      }).catch((err) => {
        loading == null ? void 0 : loading.close();
      });
    },
    1e3,
    { leading: true, trailing: false }
  );
  const bindDoChallengeSignUp = debounce(
    (params1, params2, fnc) => {
      const loading = ElLoading.service({
        lock: false,
        background: "rgba(0, 0, 0, 0.5)"
      });
      bindChallengeSignUp(params1).then((res) => {
        params2.challengeUid = res.data.registrationId;
        params2.paymentUid = res.data.paymentId;
        bindDoPayment(
          params2,
          () => {
            loading.close();
            fnc();
          },
          false
        );
      }).catch((err) => {
        loading.close();
      });
    },
    1e3,
    { leading: true, trailing: false }
  );
  const bindDoRePayment = debounce(
    (params1, params2, fnc) => {
      const loading = ElLoading.service({
        lock: false,
        background: "rgba(0, 0, 0, 0.5)"
      });
      bindReRegistration(params1).then((res) => {
        params2.challengeUid = res.data.registrationId;
        params2.paymentUid = res.data.paymentId;
        bindDoPayment(
          params2,
          () => {
            loading.close();
            fnc();
          },
          false
        );
      }).catch((err) => {
        loading.close();
      });
    },
    1e3,
    { leading: true, trailing: false }
  );
  const bindDoCancelOrder = debounce(
    (params, fnc) => {
      const loading = ElLoading.service({
        lock: false,
        background: "rgba(0, 0, 0, 0.5)"
      });
      bindChallengeCancel(params).then((res) => {
        loading.close();
        fnc();
      });
    },
    1e3,
    { leading: true, trailing: false }
  );
  const activityCodeLoading = ref(false);
  const bindCheckActivityCode = () => {
    activityCodeLoading.value = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        activityCodeLoading.value = false;
        {
          resolve({ msg: "success" });
        }
      }, 1e3);
    });
  };
  return { bindDoPayment, bindDoChallengeSignUp, bindDoRePayment, bindDoCancelOrder, activityCodeLoading, bindCheckActivityCode };
};
export {
  __nuxt_component_1 as _,
  usePayment as u
};
//# sourceMappingURL=usePayment-DTlV3mZU.js.map
