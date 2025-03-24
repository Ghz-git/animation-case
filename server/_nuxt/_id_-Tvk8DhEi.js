import { _ as _export_sfc, u as useI18n, J as useRoute, Q as picture_default, E as ElIcon } from "../server.mjs";
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import guideMobHeader from "./guideMobHeader-M_LrgAG4.js";
import { s as stepList } from "./guide-Wol6MFZG.js";
import "dayjs";
import { E as ElImage } from "./index-BJwCkya4.js";
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
import "consola";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./back-Dn6PN45-.js";
import "./index-DvP72MIN.js";
import "./index-DV4HU-o-.js";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const guideItem = ref({});
    const { t } = useI18n();
    const route = useRoute();
    const { id } = route.params;
    guideItem.value = stepList(id - 1);
    computed(() => {
      let res = [];
      guideItem.value.list.map((item) => {
        if (item.img) res.push(...item.img);
      });
      return res;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_el_icon = ElIcon;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "guideMob" }, _attrs))} data-v-b617bae6>`);
      _push(ssrRenderComponent(guideMobHeader, null, null, _parent));
      _push(`<div class="main" data-v-b617bae6><h1 data-v-b617bae6><span data-v-b617bae6>${ssrInterpolate(unref(t)((_a = unref(guideItem)) == null ? void 0 : _a.question))}</span></h1><!--[-->`);
      ssrRenderList((_b = unref(guideItem)) == null ? void 0 : _b.list, (item, idx) => {
        var _a2;
        _push(`<div class="view" data-v-b617bae6><p class="text" data-v-b617bae6>${ssrInterpolate(idx + 1)} . ${ssrInterpolate(unref(t)(item.txt))}</p>`);
        if (((_a2 = item.img) == null ? void 0 : _a2.length) > 0) {
          _push(`<!--[-->`);
          ssrRenderList(item.img, (i, idx2) => {
            _push(`<div class="imgBox" data-v-b617bae6>`);
            _push(ssrRenderComponent(unref(ElImage), {
              src: i,
              class: "img",
              "min-scale": 0.7,
              "preview-src-list": item.img,
              "hide-on-click-modal": "",
              lazy: ""
            }, {
              placeholder: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="image-slot" data-v-b617bae6${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(unref(picture_default), null, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(unref(picture_default))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "image-slot" }, [
                      createVNode(_component_el_icon, null, {
                        default: withCtx(() => [
                          createVNode(unref(picture_default))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/guide/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b617bae6"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-Tvk8DhEi.js.map
