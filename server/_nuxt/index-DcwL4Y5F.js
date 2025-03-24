import { ref, toRefs, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    maskBG: {
      type: String,
      default: "rgba(0,0,0,.5)"
    },
    zIndex: {
      type: Number,
      default: 999
    },
    isBottom: {
      type: Boolean,
      default: false
    },
    isTop: {
      type: Boolean,
      default: false
    },
    isCenter: {
      type: Boolean,
      default: false
    },
    isRight: {
      type: Boolean,
      default: false
    },
    isLeft: {
      type: Boolean,
      default: false
    },
    isClickMaskHide: {
      type: Boolean,
      default: true
    }
  },
  emits: ["clickMask"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const shower = ref({
      outer: false,
      inner: false
    });
    const props = __props;
    const { maskBG, zIndex, isBottom, isTop, isCenter, isRight, isLeft, isClickMaskHide } = toRefs(props);
    const emits = __emit;
    const maskShow = () => {
      shower.value.outer = true;
      setTimeout(() => {
        shower.value.inner = true;
      }, 200);
    };
    const maskHide = () => {
      emits("clickMask");
      shower.value.inner = false;
      setTimeout(() => {
        shower.value.outer = false;
      }, 200);
    };
    __expose({ maskShow, maskHide });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<view${ssrRenderAttrs(mergeProps({
        class: ["mask_wrap", { active: shower.value.outer }],
        style: { zIndex: unref(zIndex), backgroundColor: unref(maskBG) }
      }, _attrs))} data-v-110ee302><view class="${ssrRenderClass([{ active: shower.value.inner, center: unref(isCenter), bottom: unref(isBottom), top: unref(isTop), right: unref(isRight), left: unref(isLeft) }, "mask_con"])}" data-v-110ee302>`);
      ssrRenderSlot(_ctx.$slots, "slot_mask", {}, null, _push, _parent);
      _push(`</view></view>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/maskPopup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-110ee302"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=index-DcwL4Y5F.js.map
