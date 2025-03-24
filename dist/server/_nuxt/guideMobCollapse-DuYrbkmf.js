import { E as ElCollapse, a as ElCollapseItem } from "./index-BVvjx3G1.js";
import { _ as _export_sfc, u as useI18n, n as nuxtTo } from "../server.mjs";
/* empty css                          */
import { ref, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { N as NAV_LIST } from "./guide-Wol6MFZG.js";
import "@vue/shared";
import "./event-DsDEmsKp.js";
import "lodash-unified";
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
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
const _sfc_main = {
  __name: "guideMobCollapse",
  __ssrInlineRender: true,
  setup(__props) {
    const activeNames = ref([]);
    const { t } = useI18n();
    NAV_LIST.forEach((item, idx) => {
      activeNames.value.push(idx);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_collapse = ElCollapse;
      const _component_el_collapse_item = ElCollapseItem;
      _push(ssrRenderComponent(_component_el_collapse, mergeProps({
        modelValue: activeNames.value,
        "onUpdate:modelValue": ($event) => activeNames.value = $event,
        class: "mobGuideCollapse"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(NAV_LIST), (li, idx) => {
              var _a;
              _push2(`<!--[-->`);
              if (((_a = li.list) == null ? void 0 : _a.length) > 0) {
                _push2(ssrRenderComponent(_component_el_collapse_item, {
                  title: unref(t)(li.title),
                  name: idx
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<ul data-v-fe269d1f${_scopeId2}><!--[-->`);
                      ssrRenderList(li.list, (child, idx2) => {
                        _push3(`<li class="collapseItem" data-v-fe269d1f${_scopeId2}><img class="icon" alt=""${ssrRenderAttr("src", child.icon)} data-v-fe269d1f${_scopeId2}><p class="text" data-v-fe269d1f${_scopeId2}>${ssrInterpolate(unref(t)(child.question))}</p></li>`);
                      });
                      _push3(`<!--]--></ul>`);
                    } else {
                      return [
                        createVNode("ul", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(li.list, (child, idx2) => {
                            return openBlock(), createBlock("li", {
                              class: "collapseItem",
                              onClick: ($event) => ("nuxtTo" in _ctx ? _ctx.nuxtTo : unref(nuxtTo))("/guide/" + (child.id + 1))
                            }, [
                              createVNode("img", {
                                class: "icon",
                                alt: "",
                                src: child.icon
                              }, null, 8, ["src"]),
                              createVNode("p", { class: "text" }, toDisplayString(unref(t)(child.question)), 1)
                            ], 8, ["onClick"]);
                          }), 256))
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(NAV_LIST), (li, idx) => {
                var _a;
                return openBlock(), createBlock(Fragment, { key: idx }, [
                  ((_a = li.list) == null ? void 0 : _a.length) > 0 ? (openBlock(), createBlock(_component_el_collapse_item, {
                    key: 0,
                    title: unref(t)(li.title),
                    name: idx
                  }, {
                    default: withCtx(() => [
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(li.list, (child, idx2) => {
                          return openBlock(), createBlock("li", {
                            class: "collapseItem",
                            onClick: ($event) => ("nuxtTo" in _ctx ? _ctx.nuxtTo : unref(nuxtTo))("/guide/" + (child.id + 1))
                          }, [
                            createVNode("img", {
                              class: "icon",
                              alt: "",
                              src: child.icon
                            }, null, 8, ["src"]),
                            createVNode("p", { class: "text" }, toDisplayString(unref(t)(child.question)), 1)
                          ], 8, ["onClick"]);
                        }), 256))
                      ])
                    ]),
                    _: 2
                  }, 1032, ["title", "name"])) : createCommentVNode("", true)
                ], 64);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/guide/components/guideMobCollapse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GuideMobCollapse = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fe269d1f"]]);
export {
  GuideMobCollapse as default
};
//# sourceMappingURL=guideMobCollapse-DuYrbkmf.js.map
