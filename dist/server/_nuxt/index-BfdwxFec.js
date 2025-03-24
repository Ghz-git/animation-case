import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { L as LEARNING_LIST } from "./image-DxSJLE4L.js";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "academyContent" }, _attrs))} data-v-d1ec1abc><div class="inner" data-v-d1ec1abc><h3 class="title" data-v-d1ec1abc>${ssrInterpolate(unref(t)("Home.tools.title"))}</h3><ul class="list" data-v-d1ec1abc><!--[-->`);
      ssrRenderList(unref(LEARNING_LIST), (item, idx) => {
        _push(`<li class="academyItem" data-v-d1ec1abc><img alt="" class="pic"${ssrRenderAttr("src", item.url)} data-v-d1ec1abc><p class="name" data-v-d1ec1abc>${ssrInterpolate(unref(t)(item.txt))}</p></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/academy/index/components/content/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const academyContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d1ec1abc"]]);
export {
  academyContent as default
};
//# sourceMappingURL=index-BfdwxFec.js.map
