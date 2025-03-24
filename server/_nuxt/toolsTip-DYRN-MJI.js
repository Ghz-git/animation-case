import { _ as __nuxt_component_1 } from "./client-only-Db1Q_2tj.js";
import { _ as _export_sfc } from "../server.mjs";
/* empty css                   */
import { computed, toRefs, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
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
import "dayjs";
import "consola";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
const _sfc_main = {
  __name: "toolsTip",
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_1;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/components/challenges/toolsTip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const toolsTip = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b8df4d4"]]);
export {
  toolsTip as default
};
//# sourceMappingURL=toolsTip-DYRN-MJI.js.map
