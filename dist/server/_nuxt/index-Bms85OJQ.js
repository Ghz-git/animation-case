import { _ as __nuxt_component_0 } from "./index-DcwL4Y5F.js";
import { ref, toRefs, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, renderSlot, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderSlot, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./close-CUfcVM9H.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      default: ""
    },
    isClose: {
      type: Boolean,
      default: true
    },
    isBtnGroup: {
      type: Boolean,
      default: true
    },
    maskBG: {
      type: String,
      default: "rgba(0, 0, 0, 0.5)"
    },
    isClickMaskHide: {
      type: Boolean,
      default: true
    },
    isSingleBtn: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: String,
      default: "center"
    }
  },
  emits: ["submit"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { t } = useI18n();
    const tipsPopupRef = ref();
    const props = __props;
    const { content, isClose, isBtnGroup, maskBG, isClickMaskHide, isSingleBtn, textAlign } = toRefs(props);
    const shower = () => {
      tipsPopupRef.value.maskShow();
    };
    const maskClose = () => {
      tipsPopupRef.value.maskHide();
    };
    __expose({ shower, maskClose });
    const emits = __emit;
    const bindSubmit = () => {
      emits("submit");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMaskPopup = __nuxt_component_0;
      _push(ssrRenderComponent(_component_publicMaskPopup, mergeProps({
        ref_key: "tipsPopupRef",
        ref: tipsPopupRef,
        isCenter: "",
        maskBG: unref(maskBG),
        isClickMaskHide: unref(isClickMaskHide)
      }, _attrs), {
        slot_mask: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tipsPopupMain" data-v-1546bd79${_scopeId}>`);
            if (unref(isClose)) {
              _push2(`<img class="close" alt=""${ssrRenderAttr("src", _imports_0)} data-v-1546bd79${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`<p class="${ssrRenderClass([{ mt20: unref(isClose) }, "text"])}" style="${ssrRenderStyle({ textAlign: unref(textAlign) })}" data-v-1546bd79${_scopeId}>${ssrInterpolate(unref(content))}</p>`);
            if (unref(isBtnGroup)) {
              _push2(`<div class="btnGroup" data-v-1546bd79${_scopeId}><button class="btn" data-v-1546bd79${_scopeId}>${ssrInterpolate(unref(t)("User.yes"))}</button><button class="btn light" data-v-1546bd79${_scopeId}>${ssrInterpolate(unref(t)("User.no"))}</button></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isSingleBtn)) {
              _push2(`<div class="btnGroup" data-v-1546bd79${_scopeId}><button class="btn" data-v-1546bd79${_scopeId}>${ssrInterpolate(unref(t)("Login.btn2"))}</button></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
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
                renderSlot(_ctx.$slots, "default", {}, void 0, true),
                createVNode("p", {
                  class: ["text", { mt20: unref(isClose) }],
                  style: { textAlign: unref(textAlign) }
                }, toDisplayString(unref(content)), 7),
                unref(isBtnGroup) ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "btnGroup"
                }, [
                  createVNode("button", {
                    class: "btn",
                    onClick: bindSubmit
                  }, toDisplayString(unref(t)("User.yes")), 1),
                  createVNode("button", {
                    class: "btn light",
                    onClick: unref(tipsPopupRef).maskHide
                  }, toDisplayString(unref(t)("User.no")), 9, ["onClick"])
                ])) : createCommentVNode("", true),
                unref(isSingleBtn) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "btnGroup"
                }, [
                  createVNode("button", {
                    class: "btn",
                    onClick: unref(tipsPopupRef).maskHide
                  }, toDisplayString(unref(t)("Login.btn2")), 9, ["onClick"])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/tipsPopup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1546bd79"]]);
export {
  __nuxt_component_3 as _
};
//# sourceMappingURL=index-Bms85OJQ.js.map
