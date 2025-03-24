import { _ as __nuxt_component_0 } from "./index-DcwL4Y5F.js";
import { ref, toRefs, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./close-CUfcVM9H.js";
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
  props: {
    content: {
      type: Array,
      default: ""
    },
    isClose: {
      type: Boolean,
      default: true
    },
    maskBG: {
      type: String,
      default: "rgba(0, 0, 0, 0.5)"
    }
  },
  emits: ["submit"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { t } = useI18n();
    const tipsPopupRef = ref();
    const props = __props;
    const { content, isClose, maskBG } = toRefs(props);
    const shower = () => {
      tipsPopupRef.value.maskShow();
    };
    const maskClose = () => {
      tipsPopupRef.value.maskHide();
    };
    __expose({ shower, maskClose });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMaskPopup = __nuxt_component_0;
      _push(ssrRenderComponent(_component_publicMaskPopup, mergeProps({
        ref_key: "tipsPopupRef",
        ref: tipsPopupRef,
        isCenter: "",
        maskBG: unref(maskBG),
        isClickMaskHide: true
      }, _attrs), {
        slot_mask: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tipsPopupMain" data-v-8803df5b${_scopeId}>`);
            if (unref(isClose)) {
              _push2(`<img class="close" alt=""${ssrRenderAttr("src", _imports_0)} data-v-8803df5b${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(content), (item, index) => {
              _push2(`<p class="text" data-v-8803df5b${_scopeId}>${ssrInterpolate(index + 1)}, ${ssrInterpolate(unref(t)(item))}</p>`);
            });
            _push2(`<!--]--><div class="btnGroup" data-v-8803df5b${_scopeId}><button class="btn" data-v-8803df5b${_scopeId}>${ssrInterpolate(unref(t)("Login.btn2"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "tipsPopupMain" }, [
                unref(isClose) ? (openBlock(), createBlock("img", {
                  key: 0,
                  class: "close",
                  alt: "",
                  src: _imports_0,
                  onClick: unref(tipsPopupRef).maskHide
                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(content), (item, index) => {
                  return openBlock(), createBlock("p", {
                    class: "text",
                    key: index
                  }, toDisplayString(index + 1) + ", " + toDisplayString(unref(t)(item)), 1);
                }), 128)),
                createVNode("div", { class: "btnGroup" }, [
                  createVNode("button", {
                    class: "btn",
                    onClick: unref(tipsPopupRef).maskHide
                  }, toDisplayString(unref(t)("Login.btn2")), 9, ["onClick"])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/welfare/components/tipsPopup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contentTipsPopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8803df5b"]]);
export {
  contentTipsPopup as default
};
//# sourceMappingURL=index-B6YxXhIu.js.map
