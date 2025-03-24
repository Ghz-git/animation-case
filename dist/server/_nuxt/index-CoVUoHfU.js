import { _ as _export_sfc, u as useI18n, a as __nuxt_component_2 } from "../server.mjs";
import { ref, computed, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import detailPopup from "./detailPopup-BGCepMil.js";
import Item from "./item-CdlyubjY.js";
import SuccessLi from "./successLi-kfq3FYbI.js";
import { H as HOW_TO_SUCCESS } from "./challengesData-Ie0NoZuw.js";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
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
import "dayjs";
import "consola";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./index-DcwL4Y5F.js";
import "./entry-styles-3.mjs-IQ1Ycl8h.js";
import "swiper/modules";
import "./close-CUfcVM9H.js";
import "./yellow-BzR1n8Bd.js";
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKtSURBVHgBvVc7s1lRFF7nUCgU8gNwGH3oNIwZzaWJRpFRJKO6jZFUGapbJlUSfkCuFoVbSaq44zFGddJomMlBo2QoEuORtTYxBGPvE+43s+c89/72t856HQk4EAgELPP53C1J0gscgdVqpeBty+bxCIe6GY/VarXEs6Z0jnC5XCaR6M0O0TlouLn72WyWazab2qmXDKce+P3+JJLS7m9wmIAftMGAwWCI2O32cb/fV7mJkfQjqrwTJDy2gYiiKJZer/ftLLHP5/uCh1u4HLyoXEHlDyeJSemFSf/C/a/yLTEqfY2H93A9eDffvEkXzKvRe5XFYvEdTxW4LkbodI5KpTKS6Qq999UTkBIoH1BorhWjmX/yEuO70Ol0YDgcgk4w1TIuFAEBtYlEAjKZDLjdbtAJlgUNNpvtFjONl3cWpkQIhUIQjUbZtaqqoANjA3raOxBQPJ1OoVAogNlshlgsBi6XC9rtNrvPC1mWTUT8CXRkqFarBZPJBMLhMASDQWYJAXITeTVv8j9AsViEeDzO1OfzeaaeExYZ/gNEmE6n2ZHM3+12uecaYV1PhVV7PB5IpVKMNJvNMmIBjIxYhah+CsUGeTSFFcUymVo0ppFTJcWPOLiJSSWFU7lcZkpFvHkHP4iYin2Sd4ZO0+4BLVyRqL3BAkEpU7d3C0LD0HPIVCnQ5p/hiYBcOTqycDIajZRERnB9aJin7+mENQKapv2yWq2/0fY3cF28bTQalS0xYTAYNLFgPBMpGCKgz1mr1bYdzl7PhW3JV8zdDhAIL07kkHSvlzvoMpG8dEnlG6UHDeTRvnqjvAdr5XrDbIQtVaper98de3jyT4L+AJxO5wNOHqN6RWADFJ4fMFJeYrxWTr0kASeoRcIFA3j6fJPbLTtEGqxTbwkJVcoN59b7A1nZJOX/JMGdAAAAAElFTkSuQmCC";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const detailPopupRef = ref();
    const { t, locale } = useI18n();
    const list = ref(HOW_TO_SUCCESS);
    computed(() => useCheckMobile().getItem());
    ref(0);
    const curIndex = ref(0);
    const translateX = ref(0);
    const bindCallDetail = (i) => {
      detailPopupRef.value.shower(i - 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link_locale = __nuxt_component_2;
      _push(`<!--[--><div class="how-to-success" data-v-7e26f1d9><h1 class="m-wrap__title" data-v-7e26f1d9>`);
      if (curIndex.value !== 0) {
        _push(`<img class="mob_show prev" alt=""${ssrRenderAttr("src", _imports_0)} data-v-7e26f1d9>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-7e26f1d9>${ssrInterpolate(unref(t)("common.successful"))}</span>`);
      if (curIndex.value !== list.value.length - 1) {
        _push(`<img class="mob_show next" alt=""${ssrRenderAttr("src", _imports_0)} data-v-7e26f1d9>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h1><p class="subTitle" data-v-7e26f1d9>${ssrInterpolate(unref(t)("common.fund60"))}</p><div class="list" data-v-7e26f1d9><div class="list_inner" style="${ssrRenderStyle({ transform: `translateX(${translateX.value}px)` })}" data-v-7e26f1d9><!--[-->`);
      ssrRenderList(list.value, (success, idx) => {
        _push(`<div class="tableWrap htsItem" data-v-7e26f1d9><p class="line1" data-v-7e26f1d9></p><p class="line2" data-v-7e26f1d9></p><div class="item tableBorder" data-v-7e26f1d9><img class="item-shadow" alt=""${ssrRenderAttr("src", success.shadow)} data-v-7e26f1d9><div class="item-inner" data-v-7e26f1d9><div data-v-7e26f1d9><div class="item-inner__header" data-v-7e26f1d9><div class="${ssrRenderClass(`pic pic${idx + 1}`)}" data-v-7e26f1d9></div><span class="text" data-v-7e26f1d9>${ssrInterpolate(unref(t)(success.headerTitle))}</span></div><!--[-->`);
        ssrRenderList(success.stepList, (item, itemIdx) => {
          _push(ssrRenderComponent(Item, {
            itemInfo: item,
            key: itemIdx,
            onCall: ($event) => bindCallDetail(item.stepNum)
          }, null, _parent));
        });
        _push(`<!--]-->`);
        if (success.listTitle) {
          _push(ssrRenderComponent(SuccessLi, {
            itemInfo: success.list,
            listTitle: success.listTitle,
            listTitleColor: success.listTitleColor
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_nuxt_link_locale, {
          class: "lightingBtn",
          to: success.btnUrl
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="t" data-v-7e26f1d9${_scopeId}>${ssrInterpolate(unref(t)(success.btnStr))}</p>`);
            } else {
              return [
                createVNode("p", { class: "t" }, toDisplayString(unref(t)(success.btnStr)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
      _push(ssrRenderComponent(detailPopup, {
        ref_key: "detailPopupRef",
        ref: detailPopupRef
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/index/components/howToSuccess/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const challengesHowToSuccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7e26f1d9"]]);
export {
  challengesHowToSuccess as default
};
//# sourceMappingURL=index-CoVUoHfU.js.map
