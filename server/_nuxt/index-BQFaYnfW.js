import { _ as __nuxt_component_0 } from "./index-DP8eDe_k.js";
import { ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { S as STEP_LIST } from "./index-D3nYuMsg.js";
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
const _imports_0 = "" + __buildAssetsURL("step.CHk_zDHe.png");
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAiCAMAAAB/VplGAAAAM1BMVEUAAAD/dgD/dwD/eAD/dwD/dwD/dwD/dQD/eAD/cAD/dwD/dgD/dgD/dwD/eAD/dQD/dwDVB/CvAAAAEHRSTlMAgN8g75+/YEAQkHBQz2Aw+mHxfAAAAINJREFUOMuV00EShDAIRFEyMJlEHc39T+vCRS8ofpVsHyVtQszcsNrnh7zW15HVUPDShMxPwwGsCYlVbQIrQmI1eMGKgLyiASuCOFV3YEUQpwl7wYrAPICj0ce3ST826FgOPNT5/ko0tOQ4YR0Cl6nTKv4HLHLsWcTbtJq70wMeBnUR3kjxG8VNQEVgAAAAAElFTkSuQmCC";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const iList = ref(null);
    let gapH = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMWrap = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-step" }, _attrs))} data-v-bf7e2a48>`);
      _push(ssrRenderComponent(_component_publicMWrap, {
        title: unref(t)("Home.steps.title")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="home-step-inner" data-v-bf7e2a48${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" class="inner-pic" data-v-bf7e2a48${_scopeId}><div class="inner-list" data-v-bf7e2a48${_scopeId}><div class="gap" style="${ssrRenderStyle({ "height": unref(gapH) })}" data-v-bf7e2a48${_scopeId}></div><!--[-->`);
            ssrRenderList(unref(STEP_LIST), (step, idx) => {
              _push2(`<div class="inner__item" data-v-bf7e2a48${_scopeId}><p class="i-title" data-v-bf7e2a48${_scopeId}><span class="num" data-v-bf7e2a48${_scopeId}>0${ssrInterpolate(idx + 1)}</span><img class="polygon"${ssrRenderAttr("src", _imports_1)} data-v-bf7e2a48${_scopeId}><span class="title" data-v-bf7e2a48${_scopeId}>${ssrInterpolate(unref(t)(step.title))}</span></p><p class="i-txt" data-v-bf7e2a48${_scopeId}>${ssrInterpolate(unref(t)(step.txt, { payout: "95%" }))}</p></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "home-step-inner" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  class: "inner-pic"
                }),
                createVNode("div", {
                  class: "inner-list",
                  ref_key: "iList",
                  ref: iList
                }, [
                  createVNode("div", {
                    class: "gap",
                    style: { "height": unref(gapH) }
                  }, null, 4),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(STEP_LIST), (step, idx) => {
                    return openBlock(), createBlock("div", {
                      class: "inner__item",
                      key: step
                    }, [
                      createVNode("p", { class: "i-title" }, [
                        createVNode("span", { class: "num" }, "0" + toDisplayString(idx + 1), 1),
                        createVNode("img", {
                          class: "polygon",
                          src: _imports_1
                        }),
                        createVNode("span", { class: "title" }, toDisplayString(unref(t)(step.title)), 1)
                      ]),
                      createVNode("p", { class: "i-txt" }, toDisplayString(unref(t)(step.txt, { payout: "95%" })), 1)
                    ]);
                  }), 128))
                ], 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/components/homeStep/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf7e2a48"]]);
export {
  index as default
};
//# sourceMappingURL=index-BQFaYnfW.js.map
