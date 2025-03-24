import { _ as __nuxt_component_0 } from "./index-DP8eDe_k.js";
import { mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_1$1 } from "./policy-vMQiws2_.js";
import { P as POLICY_LIST } from "./index-D3nYuMsg.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
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
const _imports_1 = "" + __buildAssetsURL("policy-m._HQ7mPNZ.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMWrap = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "policy" }, _attrs))} data-v-130b1d23>`);
      _push(ssrRenderComponent(_component_publicMWrap, {
        title: unref(t)("Challenges.PayoutPolicy.title")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="policy-inner" data-v-130b1d23${_scopeId}><ul class="policy-inner__items" data-v-130b1d23${_scopeId}><!--[-->`);
            ssrRenderList(unref(POLICY_LIST), (li, idx) => {
              _push2(`<li class="item"${ssrRenderAttr("data-idx", `0${idx + 1}`)} data-v-130b1d23${_scopeId}><div class="item-inner" data-v-130b1d23${_scopeId}>${ssrInterpolate(unref(t)(li, { percent: "90%" }))}</div></li>`);
            });
            _push2(`<!--]--></ul><a href="/" class="sign-up"${ssrRenderAttr("no-body", true)} data-v-130b1d23${_scopeId}><img class="policy-inner__poster"${ssrRenderAttr("src", _imports_1$1)} data-v-130b1d23${_scopeId}><img class="policy-inner__poster poster-m"${ssrRenderAttr("src", _imports_1)} data-v-130b1d23${_scopeId}></a></div>`);
          } else {
            return [
              createVNode("div", { class: "policy-inner" }, [
                createVNode("ul", { class: "policy-inner__items" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(POLICY_LIST), (li, idx) => {
                    return openBlock(), createBlock("li", {
                      class: "item",
                      "data-idx": `0${idx + 1}`
                    }, [
                      createVNode("div", { class: "item-inner" }, toDisplayString(unref(t)(li, { percent: "90%" })), 1)
                    ], 8, ["data-idx"]);
                  }), 256))
                ]),
                createVNode("a", {
                  href: "/",
                  class: "sign-up",
                  "no-body": true
                }, [
                  createVNode("img", {
                    class: "policy-inner__poster",
                    src: _imports_1$1
                  }),
                  createVNode("img", {
                    class: "policy-inner__poster poster-m",
                    src: _imports_1
                  })
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/index/components/policy/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const challengesPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-130b1d23"]]);
export {
  challengesPolicy as default
};
//# sourceMappingURL=index-BcU5o72X.js.map
