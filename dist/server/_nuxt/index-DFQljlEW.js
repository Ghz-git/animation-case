import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import guideList from "./index-C58mm09k.js";
import { s as stepList, N as NAV_LIST } from "./guide-Wol6MFZG.js";
import guideMain from "./index-DhdNGv1M.js";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import { _ as _export_sfc } from "../server.mjs";
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
import "./index-DJNlam7R.js";
import "./index-BJwCkya4.js";
import "./index-DvP72MIN.js";
import "./index-DV4HU-o-.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let listpProps = ref(stepList(0));
    const linfoHandler = (id) => {
      let res = stepList(id);
      listpProps.value = res;
    };
    computed(() => {
      return useCheckMobile().getItem();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "guide-container" }, _attrs))} data-v-6a281149><div class="guide-container__bar" data-v-6a281149>`);
      _push(ssrRenderComponent(unref(guideList), {
        listInfo: unref(NAV_LIST),
        onInfoHandler: linfoHandler
      }, null, _parent));
      _push(`</div><div class="guide-container__main" data-v-6a281149>`);
      _push(ssrRenderComponent(unref(guideMain), { listpProps: unref(listpProps) }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/guide/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6a281149"]]);
export {
  index as default
};
//# sourceMappingURL=index-DFQljlEW.js.map
