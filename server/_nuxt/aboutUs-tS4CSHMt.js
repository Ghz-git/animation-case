import { mergeProps, unref, useSSRContext, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, computed } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import { _ as __nuxt_component_0$2 } from "./index-D6B4tX2N.js";
import { _ as __nuxt_component_0$1 } from "./index-DP8eDe_k.js";
import { M as MISSION_LIST } from "./image-DxSJLE4L.js";
import { R as REASON_LIST } from "./index-D3nYuMsg.js";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "decimal.js";
import "dayjs";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
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
const _sfc_main$3 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-us-banner" }, _attrs))} data-v-7a02c302><div class="title" data-v-7a02c302>${ssrInterpolate(unref(t)("AboutUs.banner.title"))}</div><div class="slogan" data-v-7a02c302>${ssrInterpolate(unref(t)("AboutUs.banner.desc"))}</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/aboutUs/banner/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7a02c302"]]);
const _sfc_main$2 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMWrap = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mission" }, _attrs))} data-v-fe32c903>`);
      _push(ssrRenderComponent(_component_publicMWrap, {
        title: unref(t)("AboutUs.mission.title")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mission-inner" data-v-fe32c903${_scopeId}><!--[-->`);
            ssrRenderList(unref(MISSION_LIST), (mission, idx) => {
              _push2(`<div class="mission-inner__item" data-v-fe32c903${_scopeId}><div class="item-inner" data-v-fe32c903${_scopeId}><img${ssrRenderAttr("src", mission.path)} alt="" class="pic" data-v-fe32c903${_scopeId}><span class="txt" data-v-fe32c903${_scopeId}>${ssrInterpolate(unref(t)(mission.mission))}</span></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "mission-inner" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(MISSION_LIST), (mission, idx) => {
                  return openBlock(), createBlock("div", {
                    class: "mission-inner__item",
                    key: mission
                  }, [
                    createVNode("div", { class: "item-inner" }, [
                      createVNode("img", {
                        src: mission.path,
                        alt: "",
                        class: "pic"
                      }, null, 8, ["src"]),
                      createVNode("span", { class: "txt" }, toDisplayString(unref(t)(mission.mission)), 1)
                    ])
                  ]);
                }), 128))
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/aboutUs/mission/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fe32c903"]]);
const _imports_0 = "" + __buildAssetsURL("bg2.v9v0QFgx.png");
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const isWrap = computed(() => {
      let isMobile = useCheckMobile().getItem();
      return isMobile ? true : locale.value === "zh-hk" ? false : true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cooperate" }, _attrs))} data-v-ee129c6c><div class="${ssrRenderClass([{ "pre-wrap": unref(isWrap) }, "cooperate-title"])}" data-v-ee129c6c>${ssrInterpolate(unref(t)("AboutUs.collaborate.title"))}</div><div class="cooperate-reason" data-v-ee129c6c><img${ssrRenderAttr("src", _imports_0)} alt="" class="poster" data-v-ee129c6c><div class="reason-list" data-v-ee129c6c><!--[-->`);
      ssrRenderList(unref(REASON_LIST), (reason, idx) => {
        _push(`<div class="item" data-v-ee129c6c>${ssrInterpolate(unref(t)(reason))}</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/aboutUs/cooperate/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ee129c6c"]]);
const _sfc_main = {
  __name: "aboutUs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_aboutUsBanner = __nuxt_component_0;
      const _component_publicTipsScroll = __nuxt_component_0$2;
      const _component_aboutUsMission = __nuxt_component_2;
      const _component_aboutUsCooperate = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-us" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_aboutUsBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_publicTipsScroll, null, null, _parent));
      _push(ssrRenderComponent(_component_aboutUsMission, null, null, _parent));
      _push(ssrRenderComponent(_component_aboutUsCooperate, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/aboutUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=aboutUs-tS4CSHMt.js.map
