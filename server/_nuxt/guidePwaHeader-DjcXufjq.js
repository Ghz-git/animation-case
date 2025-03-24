import { unref, useSSRContext } from "vue";
import { ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./mft-D9ZFXrBO.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
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
const _sfc_main = {
  __name: "guidePwaHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="guide-pwa-header" data-v-0a95115b><div class="nav" data-v-0a95115b><img class="logo" alt=""${ssrRenderAttr("src", _imports_0)} data-v-0a95115b><div class="mft" data-v-0a95115b>${ssrInterpolate(unref(t)("Login.btn5"))} <i class="iconfont icon-back" data-v-0a95115b></i></div></div></div><div class="theme" data-v-0a95115b>${ssrInterpolate(unref(t)("GuidePWA.theme"))}</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/homeScreen/components/guidePwaHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const guidePwaHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a95115b"]]);
export {
  guidePwaHeader as default
};
//# sourceMappingURL=guidePwaHeader-DjcXufjq.js.map
