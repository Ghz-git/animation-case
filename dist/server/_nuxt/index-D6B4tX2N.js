import { ref, reactive, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import "dayjs";
import "decimal.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    const carouselContainer = ref(null);
    ref(null);
    ref(null);
    let list = ref([]);
    reactive([]);
    ref(null);
    ref(0);
    const i18n = useI18n();
    (/* @__PURE__ */ new Date()).getTime();
    ({
      "Organization-No": 3,
      "Lang": i18n.locale.value
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "tips-scroll",
        ref_key: "carouselContainer",
        ref: carouselContainer
      }, _attrs))} data-v-2da0598b>`);
      if (unref(list).length) {
        _push(`<div class="tips-scroll__inner" data-v-2da0598b><!--[-->`);
        ssrRenderList(unref(list), (li, idx) => {
          _push(`<div class="item" data-v-2da0598b>`);
          if (li.icon2) {
            _push(`<div class="nation-group" data-v-2da0598b><img${ssrRenderAttr("src", li.icon1)} alt="" class="nation flag1" data-v-2da0598b><img${ssrRenderAttr("src", li.icon2)} alt="" class="nation flag2" data-v-2da0598b></div>`);
          } else {
            _push(`<!---->`);
          }
          if (!li.icon2) {
            _push(`<img${ssrRenderAttr("src", li.icon1)} alt="" class="sigle" data-v-2da0598b>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="type" data-v-2da0598b>${ssrInterpolate(li.type)}</span><span class="num" data-v-2da0598b>${ssrInterpolate(li.sell)}</span><span class="situation" data-v-2da0598b>${ssrInterpolate(li.zd)}</span><span class="situation" data-v-2da0598b>(${ssrInterpolate(li.zdRate)})</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/tipsScroll/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2da0598b"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=index-D6B4tX2N.js.map
