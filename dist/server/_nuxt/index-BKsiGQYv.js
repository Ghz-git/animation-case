import { _ as __nuxt_component_0 } from "./index-DP8eDe_k.js";
import { reactive, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import List from "./index-Dqop3Kqz.js";
import { c as PROHIBITED_LIST } from "./index-D3nYuMsg.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import "dayjs";
import "./index-BVvjx3G1.js";
import "@vue/shared";
import "./event-DsDEmsKp.js";
import "lodash-unified";
import "./isMobile-BdEqHLRM.js";
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
import "consola";
import "@vueuse/core";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
const _imports_0 = "" + __buildAssetsURL("poster-m3.BzFmg1YW.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const list = reactive(PROHIBITED_LIST);
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMWrap = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "forbid-rule" }, _attrs))} data-v-f32caf6b>`);
      _push(ssrRenderComponent(_component_publicMWrap, {
        title: unref(t)("TradingRules.prohibited.title")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="forbid-rule__inner" data-v-f32caf6b${_scopeId}><div class="picBox orange" data-v-f32caf6b${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-f32caf6b${_scopeId}></div>`);
            _push2(ssrRenderComponent(List, { list }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "forbid-rule__inner" }, [
                createVNode("div", { class: "picBox orange" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: ""
                  })
                ]),
                createVNode(List, { list }, null, 8, ["list"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tradingRules/components/forbid/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Forbid = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f32caf6b"]]);
export {
  Forbid as default
};
//# sourceMappingURL=index-BKsiGQYv.js.map
