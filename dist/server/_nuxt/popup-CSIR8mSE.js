import { _ as __nuxt_component_0 } from "./index-DcwL4Y5F.js";
import { ref, mergeProps, withCtx, unref, createVNode, withModifiers, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_0 } from "./close-CUfcVM9H.js";
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
const _sfc_main = {
  __name: "popup",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const tipsPopupRef = ref();
    const itemData = ref({});
    const shower = (e) => {
      itemData.value = e;
      tipsPopupRef.value.maskShow();
    };
    __expose({ shower });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMaskPopup = __nuxt_component_0;
      _push(ssrRenderComponent(_component_publicMaskPopup, mergeProps({
        ref_key: "tipsPopupRef",
        ref: tipsPopupRef,
        isCenter: "",
        isClickMaskHide: false
      }, _attrs), {
        slot_mask: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tipsPopupMain" data-v-7893b481${_scopeId}><img class="close" alt=""${ssrRenderAttr("src", _imports_0)} data-v-7893b481${_scopeId}><p class="question" data-v-7893b481${_scopeId}>${ssrInterpolate(unref(itemData).question)}</p><p class="answer" data-v-7893b481${_scopeId}>${ssrInterpolate(unref(itemData).answer)}</p>`);
            if (unref(itemData).lis) {
              _push2(`<ul class="lis" data-v-7893b481${_scopeId}><!--[-->`);
              ssrRenderList(unref(itemData).lis, (v, idx) => {
                _push2(`<li data-v-7893b481${_scopeId}>${ssrInterpolate(v)}</li>`);
              });
              _push2(`<!--]--></ul>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(itemData).ulList) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(itemData).ulList, (ul, index) => {
                _push2(`<div class="ul-list" data-v-7893b481${_scopeId}><div data-v-7893b481${_scopeId}>${ssrInterpolate(`${index + 1}.${ul.txt}`)}</div><ul class="lis" data-v-7893b481${_scopeId}><!--[-->`);
                ssrRenderList(ul.lis, (v, idx) => {
                  _push2(`<li data-v-7893b481${_scopeId}>${ssrInterpolate(v)}</li>`);
                });
                _push2(`<!--]--></ul></div>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "tipsPopupMain" }, [
                createVNode("img", {
                  class: "close",
                  alt: "",
                  src: _imports_0,
                  onClick: withModifiers(($event) => unref(tipsPopupRef).maskHide(), ["stop"])
                }, null, 8, ["onClick"]),
                createVNode("p", { class: "question" }, toDisplayString(unref(itemData).question), 1),
                createVNode("p", { class: "answer" }, toDisplayString(unref(itemData).answer), 1),
                unref(itemData).lis ? (openBlock(), createBlock("ul", {
                  key: 0,
                  class: "lis"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(itemData).lis, (v, idx) => {
                    return openBlock(), createBlock("li", null, toDisplayString(v), 1);
                  }), 256))
                ])) : createCommentVNode("", true),
                unref(itemData).ulList ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(itemData).ulList, (ul, index) => {
                  return openBlock(), createBlock("div", { class: "ul-list" }, [
                    createVNode("div", null, toDisplayString(`${index + 1}.${ul.txt}`), 1),
                    createVNode("ul", { class: "lis" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(ul.lis, (v, idx) => {
                        return openBlock(), createBlock("li", { key: idx }, toDisplayString(v), 1);
                      }), 128))
                    ])
                  ]);
                }), 256)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq/index/components/popup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faqPopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7893b481"]]);
export {
  faqPopup as default
};
//# sourceMappingURL=popup-CSIR8mSE.js.map
