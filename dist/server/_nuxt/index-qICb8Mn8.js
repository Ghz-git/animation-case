import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./doubt-Cq7olve3.js";
import contentTipsPopup from "./index-B6YxXhIu.js";
import { W as WELFARE_PROGRAM } from "./challengesData-Ie0NoZuw.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import "./index-DcwL4Y5F.js";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
import "./close-CUfcVM9H.js";
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
import "./yellow-BzR1n8Bd.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const curIndex = ref(0);
    const QAPopupRef = ref();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))} data-v-0c5d67b8><div class="typesTap" data-v-0c5d67b8><!--[-->`);
      ssrRenderList(unref(WELFARE_PROGRAM).benefits, (item, idx) => {
        _push(`<div${ssrRenderAttr("lang", unref(locale))} class="${ssrRenderClass([{ active: unref(curIndex) === idx }, "typeBtn"])}" data-v-0c5d67b8><span data-v-0c5d67b8>${ssrInterpolate(unref(t)(item.name))}</span></div>`);
      });
      _push(`<!--]--></div><ul class="contentList" data-v-0c5d67b8><li data-v-0c5d67b8><div class="answerBox"${ssrRenderAttr("aTag", unref(t)(unref(WELFARE_PROGRAM).conditionStr))} data-v-0c5d67b8>`);
      if (unref(curIndex) !== 2) {
        _push(`<img class="icon" alt=""${ssrRenderAttr("src", _imports_0)} data-v-0c5d67b8>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(WELFARE_PROGRAM).benefits[unref(curIndex)].condition, (con, idx1) => {
        _push(`<p class="textLine" data-v-0c5d67b8><span data-v-0c5d67b8>${ssrInterpolate(unref(t)(con.str, { percent: con == null ? void 0 : con.percent, num: con == null ? void 0 : con.num }))}</span></p>`);
      });
      _push(`<!--]--></div><div class="answerBox"${ssrRenderAttr("aTag", unref(t)(unref(WELFARE_PROGRAM).benefitStr))} data-v-0c5d67b8>`);
      {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(WELFARE_PROGRAM).benefits[unref(curIndex)].benefit, (benefit, idx2) => {
        _push(`<p class="textLine" data-v-0c5d67b8><span data-v-0c5d67b8>${ssrInterpolate(unref(t)(benefit))}</span></p>`);
      });
      _push(`<!--]--></div></li></ul><div class="bottomTips" data-v-0c5d67b8><p data-v-0c5d67b8>${ssrInterpolate(unref(t)(unref(WELFARE_PROGRAM).benefits[unref(curIndex)].note))}</p></div>`);
      _push(ssrRenderComponent(contentTipsPopup, {
        ref_key: "QAPopupRef",
        ref: QAPopupRef,
        content: (_a = unref(WELFARE_PROGRAM).benefits[unref(curIndex)]) == null ? void 0 : _a.popupStr
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/welfare/components/content/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const welfareContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0c5d67b8"]]);
export {
  welfareContent as default
};
//# sourceMappingURL=index-qICb8Mn8.js.map
