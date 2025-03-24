import { _ as __nuxt_component_0 } from "./index-DJNlam7R.js";
import { _ as _export_sfc, u as useI18n, Q as picture_default, E as ElIcon } from "../server.mjs";
import { ref, toRefs, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "dayjs";
import { E as ElImage } from "./index-BJwCkya4.js";
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
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./index-DvP72MIN.js";
import "./index-DV4HU-o-.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    listpProps: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const item = ref([
      {
        path: "/academy",
        page: "User.tips7"
      },
      {
        path: "",
        page: "Guide.page"
      }
    ]);
    const { listpProps } = toRefs(props);
    let initialIdx = ref(0);
    computed(() => {
      let res = [];
      listpProps.value.list.map((item2) => {
        if (item2.img) res.push(...item2.img);
      });
      return res;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicBreadcrumb = __nuxt_component_0;
      const _component_el_icon = ElIcon;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "guide-main" }, _attrs))} data-v-5e07cc28>`);
      _push(ssrRenderComponent(_component_publicBreadcrumb, { item: unref(item) }, null, _parent));
      _push(`<div class="guide-main__title" data-v-5e07cc28><i class="circle" data-v-5e07cc28></i>${ssrInterpolate(unref(t)(unref(listpProps).question))}</div><div class="guide-main__steps" data-v-5e07cc28><!--[-->`);
      ssrRenderList(unref(listpProps).list, (item2, idx) => {
        _push(`<div class="item" data-v-5e07cc28><p class="txt" data-v-5e07cc28>${ssrInterpolate(`${idx + 1}.`)} ${ssrInterpolate(unref(t)(item2.txt))}</p>`);
        if (item2.img && item2.img.length) {
          _push(`<!--[-->`);
          ssrRenderList(item2.img, (url, index) => {
            _push(`<div class="pic" data-v-5e07cc28>`);
            _push(ssrRenderComponent(unref(ElImage), {
              src: url,
              class: "img",
              "min-scale": 0.7,
              "preview-src-list": item2.img,
              "initial-index": unref(initialIdx),
              "hide-on-click-modal": "",
              lazy: ""
            }, {
              placeholder: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="image-slot" data-v-5e07cc28${_scopeId}>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/guide/components/guideMain/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const guideMain = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e07cc28"]]);
export {
  guideMain as default
};
//# sourceMappingURL=index-DhdNGv1M.js.map
